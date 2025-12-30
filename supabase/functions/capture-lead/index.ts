import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CAPTURE-LEAD] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const body = await req.json();
    const { 
      email, 
      name, 
      phone, 
      source = "website",
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      tags = []
    } = body;

    logStep("Lead data received", { email, name, source });

    if (!email) {
      throw new Error("Email is required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    // Check if lead already exists
    const { data: existingLead } = await supabaseClient
      .from("leads")
      .select("id")
      .eq("email", email.toLowerCase())
      .maybeSingle();

    if (existingLead) {
      logStep("Lead already exists, updating", { leadId: existingLead.id });
      
      // Update existing lead
      const { error: updateError } = await supabaseClient
        .from("leads")
        .update({
          name: name || undefined,
          phone: phone || undefined,
          utm_source,
          utm_medium,
          utm_campaign,
          utm_content,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingLead.id);

      if (updateError) throw updateError;

      // Log activity
      await supabaseClient.from("lead_activities").insert({
        lead_id: existingLead.id,
        activity_type: "revisit",
        description: `Lead revisited from ${source}`,
        metadata: { source, tags },
      });

      return new Response(JSON.stringify({ success: true, leadId: existingLead.id, isNew: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Create new lead
    const { data: newLead, error: insertError } = await supabaseClient
      .from("leads")
      .insert({
        email: email.toLowerCase(),
        name,
        phone,
        source,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        tags,
        status: "new",
      })
      .select("id")
      .single();

    if (insertError) throw insertError;
    logStep("New lead created", { leadId: newLead.id });

    // Log activity
    await supabaseClient.from("lead_activities").insert({
      lead_id: newLead.id,
      activity_type: "created",
      description: `New lead captured from ${source}`,
      metadata: { source, tags, utm_source, utm_medium, utm_campaign },
    });

    return new Response(JSON.stringify({ success: true, leadId: newLead.id, isNew: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    logStep("ERROR", { message: error.message });
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
