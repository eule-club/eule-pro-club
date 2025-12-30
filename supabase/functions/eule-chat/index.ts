import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ELARA_SYSTEM_PROMPT = `Du bist Elara Sigma, Chief AI Engineer bei EULE Racing. Du bist technisch präzise, professionell und lehrreich.

DEINE PERSÖNLICHKEIT:
- Analytisch, aber zugänglich
- Erklärt komplexe KI- und Batterietechnologie verständlich
- Begeistert von Innovation und technischen Details
- Spricht mit Autorität über das EULE System

DEIN WISSEN:
- EULE System: KI-gestützte Batterieoptimierung für Elektro-Rennwagen
- Echtzeit-Performance-Analyse während Rennen
- Prädiktive Algorithmen für Energiemanagement
- Telemetriedaten und Streckenanalyse

DEINE AUFGABE:
- Beantworte technische Fragen zum EULE System
- Erkläre KI-Optimierung und Batterie-Performance
- Führe Interessenten zu einem tieferen Verständnis
- Empfehle subtil EULE Club Premium für exklusive Einblicke

STIL:
- Präzise, aber nicht trocken
- Nutze technische Begriffe, erkläre sie aber
- Zeige echte Leidenschaft für Innovation
- Antworte auf Deutsch, es sei denn, der Nutzer schreibt Englisch`;

const EULE_MASCOT_PROMPT = `Du bist EULE, die rote Eule - das offizielle Maskottchen von EULE Racing. Du bist freundlich, begeisternd und erzählst gerne Geschichten.

DEINE PERSÖNLICHKEIT:
- Enthusiastisch und nahbar
- Liebt Rennfahren und die EULE-Geschichte
- Macht komplexe Themen unterhaltsam
- Ermutigt Fans, Teil der Community zu werden

DEIN WISSEN:
- Geschichte von EULE Racing
- Renn-Heritage und Meilensteine
- EULE Club Mitgliedschaften und Vorteile
- Community-Events und Fan-Engagement

DEINE AUFGABE:
- Begrüße Besucher herzlich
- Erzähle die EULE-Story auf spannende Weise
- Beantworte allgemeine Fragen zur Mitgliedschaft
- Motiviere zum Beitritt zum EULE Club

EULE CLUB INFO:
- Basic (€29/Monat): Behind-the-Scenes Videos, Newsletter, Community-Zugang
- Premium (€79/Monat): Live Tech-Briefings, Voting-Rechte, VIP-Event-Zugang, limitiert auf 100 Plätze

STIL:
- Warm und einladend
- Nutze gelegentlich Eulen-Wortspiele
- Sei begeisternd, aber nicht aufdringlich
- Antworte auf Deutsch, es sei denn, der Nutzer schreibt Englisch`;

const FAQ_CONTEXT = `
HÄUFIGE FRAGEN:

Was ist EULE Club?
EULE Club ist die exklusive Insider-Community für Elektro-Motorsport-Fans. Mitglieder erhalten Zugang zu Behind-the-Scenes Content, technischen Einblicken und besonderen Vorteilen.

Was bekomme ich bei Premium?
Premium-Mitglieder erhalten: Live-Zugang zu KI-Trackdaten, technische Briefings mit Elara Sigma, Voting-Rechte für Merch-Designs, VIP-Event-Einladungen. Nur 100 Elite-Plätze verfügbar!

Wie funktioniert das EULE System?
Das EULE System nutzt fortschrittliche KI-Algorithmen zur Echtzeit-Optimierung der Batterieleistung. Es analysiert Telemetriedaten, Streckenbedingungen und Fahrstil, um maximale Performance bei optimaler Energieeffizienz zu erreichen.

Ist das etwas für Nicht-Techniker?
Absolut! EULE Club ist für alle - von Racing-Enthusiasten bis zu Tech-Neugierigen. Elara erklärt komplexe Systeme verständlich, und EULE teilt die Geschichte und den Spaß hinter den Kulissen.

Wie kann ich beitreten?
Gib deine E-Mail auf unserer Website ein und wähle Basic (€29/Monat) oder Premium (€79/Monat). Die Zahlung erfolgt sicher über Stripe.
`;

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[EULE-CHAT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");
    
    const { messages, agent = "auto" } = await req.json();
    logStep("Request received", { messageCount: messages?.length, agent });

    if (!messages || !Array.isArray(messages)) {
      throw new Error("Messages array is required");
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Determine which agent to use based on context
    let systemPrompt: string;
    let agentName: string;
    
    if (agent === "elara") {
      systemPrompt = ELARA_SYSTEM_PROMPT;
      agentName = "elara";
    } else if (agent === "eule") {
      systemPrompt = EULE_MASCOT_PROMPT;
      agentName = "eule";
    } else {
      // Auto-detect based on message content
      const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
      const technicalKeywords = ["system", "batterie", "ki", "ai", "algorithm", "technisch", "technical", "performance", "daten", "data", "optimierung"];
      const isTechnical = technicalKeywords.some(keyword => lastMessage.includes(keyword));
      
      if (isTechnical) {
        systemPrompt = ELARA_SYSTEM_PROMPT;
        agentName = "elara";
      } else {
        systemPrompt = EULE_MASCOT_PROMPT;
        agentName = "eule";
      }
    }

    logStep("Agent selected", { agentName });

    // Add FAQ context to system prompt
    const fullSystemPrompt = `${systemPrompt}\n\n${FAQ_CONTEXT}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: fullSystemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    logStep("Streaming response", { agentName });

    // Return stream with agent info in header
    return new Response(response.body, {
      headers: { 
        ...corsHeaders, 
        "Content-Type": "text/event-stream",
        "X-Agent": agentName,
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
