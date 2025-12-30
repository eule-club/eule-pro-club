import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Users, Trophy, Shield, Star, ChevronRight, Lock, Crown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const STRIPE_PRICES = {
  basic: {
    price_id: "price_1Sk7khL6Wv5ywdJrplV3xvcs",
    product_id: "prod_ThWo2J0hF3Lcil",
    amount: 49,
  },
  premium: {
    price_id: "price_1Sk7l2L6Wv5ywdJrOoZG5tA4",
    product_id: "prod_ThWojWYbYz8aNh",
    amount: 749,
  },
};

const EuleClub = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { toast } = useToast();

  // Capture UTM parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get("utm_source"),
      utm_medium: urlParams.get("utm_medium"),
      utm_campaign: urlParams.get("utm_campaign"),
      utm_content: urlParams.get("utm_content"),
    };
    if (utmData.utm_source) {
      sessionStorage.setItem("utm_data", JSON.stringify(utmData));
    }
  }, []);

  const handleJoin = async (plan: "basic" | "premium") => {
    setIsLoading(plan);
    
    try {
      // Capture lead
      const utmData = JSON.parse(sessionStorage.getItem("utm_data") || "{}");
      
      if (email) {
        await supabase.from("leads").insert({
          email,
          source: "eule-club",
          tags: [plan],
          ...utmData,
        });
      }

      // Create checkout session
      const { data, error } = await supabase.functions.invoke("create-club-checkout", {
        body: { 
          priceId: STRIPE_PRICES[plan].price_id,
          email: email || undefined,
        },
      });

      if (error) throw error;
      
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast({
        title: "Fehler",
        description: "Checkout konnte nicht gestartet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "EULE Club Membership",
    "description": "Exclusive access to electric racing innovation and AI-powered drive system development",
    "brand": {
      "@type": "Brand",
      "name": "EULE Racing"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic Membership",
        "price": "49",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Premium Membership",
        "price": "749",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/LimitedAvailability"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>EULE Club — Exclusive Electric Racing Innovation Membership | EULE Racing</title>
        <meta name="description" content="Join the EULE Club for exclusive access to AI-powered electric drive system development, Formula E technology insights, and behind-the-scenes content. Basic €49/month, Premium €749/month." />
        <meta name="keywords" content="electric racing, Formula E, electric drive system, AI motorsport, EULE Club, electric car development, battery optimization, drivetrain technology" />
        <meta property="og:title" content="EULE Club — Inside Access to Electric Racing Innovation" />
        <meta property="og:description" content="Follow the development of the EULE System, an AI-powered platform for Formula E performance." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/eule-rennwagen-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://eule.pro/eule-club" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/lovable-uploads/eule-rennwagen-hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#ff1e00]/20 text-[#ff1e00] border-[#ff1e00]/30 px-4 py-2 text-sm">
                Exklusive Mitgliedschaft
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Join the <span className="text-[#ff1e00]">EULE Club</span>
                <br />Inside Access to Electric Racing Innovation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Follow the development of the EULE System, an AI-powered platform that optimizes battery, drivetrain, and energy management in electric race cars for Formula E performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-xs bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button 
                  size="lg" 
                  className="bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white px-8 py-6 text-lg"
                  onClick={() => handleJoin("basic")}
                  disabled={isLoading !== null}
                >
                  {isLoading === "basic" ? "Wird geladen..." : "Jetzt Beitreten"}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-gray-500 text-sm">Ab €49/Monat · Jederzeit kündbar · Sichere Zahlung via Stripe</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Mission</h2>
              <blockquote className="relative">
                <div className="absolute -top-6 -left-4 text-[#ff1e00] text-8xl opacity-30">"</div>
                <p className="text-2xl md:text-3xl text-gray-300 italic text-center leading-relaxed mb-6">
                  Mein Traum: Die schnellste Frau der Welt werden und beweisen, dass Technologie Herz haben kann.
                </p>
                <footer className="text-center text-[#ff1e00] font-semibold text-lg">— Hatice Tavlı, Gründerin</footer>
              </blockquote>
              <p className="text-lg text-gray-400 mt-12 text-center max-w-3xl mx-auto">
                EULE ist nicht nur ein Auto — es ist eine Bewegung. Wir entwickeln die nächste Generation des Elektro-Motorsports durch angewandte Mathematik, innovative Technik und leidenschaftliche Hingabe zur Exzellenz. Fokus: electric racing and electric drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Why EULE Club is a <span className="text-[#ff1e00]">Must-Have</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "AI-Driven Systems", desc: "Exclusive access to the development of AI-driven electric drive systems" },
                { icon: Trophy, title: "Real-Time R&D", desc: "Follow real-time R&D on battery and drivetrain optimization for electric race cars" },
                { icon: Users, title: "Community Voting", desc: "Influence decisions: vote on merch, design, and community priorities" },
                { icon: Star, title: "Premium Content", desc: "Monthly technical deep-dives, live Q&A, behind-the-scenes footage" },
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 text-white hover:border-[#ff1e00]/50 transition-all duration-300">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="w-14 h-14 rounded-full bg-[#ff1e00]/20 flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-[#ff1e00]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-[#111]" id="pricing">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Here's What You Get</h2>
            <p className="text-gray-400 text-center mb-16 text-lg">Wählen Sie den Plan, der zu Ihnen passt</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <Card className="bg-white/5 border-white/10 text-white relative overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Basic</CardTitle>
                  <CardDescription className="text-gray-400">Für Electric Racing Enthusiasten</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">€49</span>
                    <span className="text-gray-400">/Monat</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Monthly newsletter on electric racing technology",
                    "Behind-the-scenes updates & short videos of electric car tests",
                    "Community access (Discord/group)",
                    "Early access to EULE merchandise & digital collectibles",
                    "Digital EULE Club Member Badge",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#ff1e00] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    size="lg"
                    onClick={() => handleJoin("basic")}
                    disabled={isLoading !== null}
                  >
                    {isLoading === "basic" ? "Wird geladen..." : "Join Basic"}
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="bg-gradient-to-b from-[#ff1e00]/20 to-[#ff1e00]/5 border-[#ff1e00]/50 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#ff1e00] text-white">
                    <Crown className="w-3 h-3 mr-1" />
                    Elite
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <CardDescription className="text-gray-300">Elite Inner Circle</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-[#ff1e00]">€749</span>
                    <span className="text-gray-400">/Monat</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#ff1e00] font-semibold text-sm mb-4">Everything in Basic, plus:</p>
                  {[
                    "Monthly technical briefings on the EULE System",
                    "Live Q&A with founders and lead engineers",
                    "Early access to test results, prototypes, and system milestones",
                    "Voting rights on merch, visuals, and community decisions",
                    "VIP invitations to private events and digital sessions",
                    "Priority merch discounts & first access to limited drops",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#ff1e00] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6 bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white"
                    size="lg"
                    onClick={() => handleJoin("premium")}
                    disabled={isLoading !== null}
                  >
                    {isLoading === "premium" ? "Wird geladen..." : "Join Premium"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="py-24 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-[#ff1e00]/20 text-[#ff1e00] border-[#ff1e00]/30">
                <Lock className="w-3 h-3 mr-1" />
                Limited Access
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Before We Take Off
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Few spots available for Premium — exclusivity emphasized. Early access to insights and technical content. Be part of building the fastest electric racing system with AI-powered drives.
              </p>
              <Button 
                size="lg" 
                className="bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                Mitgliedschaft wählen
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Who can join the EULE Club?", a: "Anyone passionate about electric racing, electric drive innovation, or engineering. Premium is for those seeking direct access and influence." },
                  { q: "Can I cancel my membership anytime?", a: "Yes, both Basic and Premium memberships are monthly and cancelable at any time." },
                  { q: "What do I get in Premium that I don't in Basic?", a: "Exclusive technical briefings, live Q&A, voting rights, VIP events, priority merch discounts, and early access to test results." },
                  { q: "How often will I receive updates?", a: "Monthly for both Basic and Premium, plus occasional behind-the-scenes electric car development content." },
                  { q: "How does my membership support EULE?", a: "Your contribution directly funds R&D for electric drive systems, battery optimization, and independent electric racing projects." },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white/5 border border-white/10 rounded-lg px-6">
                    <AccordionTrigger className="text-left text-lg hover:text-[#ff1e00] hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-[#111] border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-center">
                <p className="text-2xl text-gray-300 italic mb-4">
                  "The most transparent and technical access to an electric racing project I've ever seen."
                </p>
                <footer className="text-gray-500">— Beta Member</footer>
              </blockquote>
              <div className="flex items-center justify-center gap-8 mt-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure payments via Stripe
                </div>
                <div>Cancel anytime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join the EULE Club Today
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Pick your membership and start following the development of cutting-edge electric drive cars and Formula E innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8"
                  onClick={() => handleJoin("basic")}
                  disabled={isLoading !== null}
                >
                  Join Basic (€49)
                </Button>
                <Button 
                  size="lg" 
                  className="bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white px-8"
                  onClick={() => handleJoin("premium")}
                  disabled={isLoading !== null}
                >
                  Join Premium (€749)
                </Button>
              </div>
              <p className="mt-6 text-[#ff1e00] text-sm font-medium">
                Limited Elite Inner Circle — once spots are gone, the door closes.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EuleClub;
