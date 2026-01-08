import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Users, Trophy, Shield, Star, ChevronRight, Lock, Crown, Rocket, Building2, Cpu, Database, Globe } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Stripe Price IDs for club tiers
const CLUB_PRICES = {
  lifetime: {
    price_id: "price_1SnKxjL6Wv5ywdJrLqqcCSXB",
    product_id: "prod_TkqfjLI1wndTuq",
    amount: 3333,
    type: "one_time",
  },
  monthly: {
    price_id: "price_1SnKyVL6Wv5ywdJrB1uobJPv",
    product_id: "prod_Tkqfde5sgxE1ki",
    amount: 99,
    type: "subscription",
  },
  b2b_basic: {
    price_id: "price_1SnKxPL6Wv5ywdJr7kHaCde8",
    product_id: "prod_Tkqel90y3CSOsu",
    amount: 5000,
    type: "subscription",
  },
  b2b_premium: {
    price_id: "price_1SnKwIL6Wv5ywdJri3Irjjro",
    product_id: "prod_Tkqda1SC861M4x",
    amount: 50000,
    type: "subscription",
  },
};

const ClubEule = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { toast } = useToast();

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 10, minutes: 6, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset daily
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // UTM capture
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

  const handleJoin = async (plan: keyof typeof CLUB_PRICES) => {
    setIsLoading(plan);
    
    try {
      const utmData = JSON.parse(sessionStorage.getItem("utm_data") || "{}");
      
      if (email) {
        await supabase.from("leads").insert({
          email,
          source: "club-eule",
          tags: [plan],
          ...utmData,
        });
      }

      const { data, error } = await supabase.functions.invoke("create-club-eule-checkout", {
        body: { 
          priceId: CLUB_PRICES[plan].price_id,
          email: email || undefined,
          mode: CLUB_PRICES[plan].type === "subscription" ? "subscription" : "payment",
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
    "description": "Community membership for technology, innovation & application in AI, E-Mobility, Smart Farming, and Industry 4.0",
    "brand": {
      "@type": "Brand",
      "name": "EULE"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Inner Circle Lifetime",
        "price": "3333",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/LimitedAvailability"
      },
      {
        "@type": "Offer",
        "name": "Monthly Membership",
        "price": "99",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "B2B Basic",
        "price": "5000",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "B2B Premium",
        "price": "50000",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/LimitedAvailability"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is EULE Club?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EULE Club is the insider community for technology, innovation & application. Members get access to AI optimization frameworks, tools, and peer exchange for Digital Transformation, Smart Farming, E-Mobility, and Industry 4.0."
        }
      },
      {
        "@type": "Question",
        "name": "Who is EULE Club for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EULE Club serves Technology Early Adopters, KMU-Entscheider & Digital Transformation Leaders, F&E-Teams, Tech-Professionals, Scientists, and Investors interested in AI, Data Science, and Automation."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between Lifetime and Monthly membership?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lifetime membership (€3,333) gives you permanent access with exclusive tech talks, VIP events, and premium merchandise. Monthly (€99) includes all core benefits with ongoing flexibility."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer enterprise plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! B2B Basic (€5,000/month) and B2B Premium (€50,000/month) are designed for enterprises seeking AI optimization, automation frameworks, and strategic technology partnerships."
        }
      }
    ]
  };

  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Join EULE Club",
    "description": "Step-by-step guide to becoming an EULE Club member",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choose Your Plan",
        "text": "Select from Lifetime (€3,333), Monthly (€99), B2B Basic (€5,000/month), or B2B Premium (€50,000/month)"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter Your Email",
        "text": "Provide your email address for account creation"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Complete Payment",
        "text": "Securely pay via Stripe checkout"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Access Your Membership",
        "text": "Receive instant access to community, tools, and exclusive content"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>EULE Club — Community for Technology, Innovation & AI Application | club.eule.pro</title>
        <meta name="description" content="Join EULE Club: The insider community for AI optimization, Digital Transformation, Smart Farming, E-Mobility & Industry 4.0. From €99/month or €3,333 Lifetime. Enterprise plans available." />
        <meta name="keywords" content="AI community, digital transformation, smart farming, e-mobility, industry 4.0, KI optimization, data science, automation, tech community, innovation network, B2B technology" />
        <meta property="og:title" content="EULE Club — Join the Technology Innovation Community" />
        <meta property="og:description" content="Real-world AI optimization frameworks, tools, and peer exchange. For Tech-Professionals, Enterprises, and Innovators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://club.eule.pro" />
        <meta property="og:image" content="/lovable-uploads/eule-rennwagen-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://club.eule.pro" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(howToStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        
        {/* Urgency Banner */}
        <div className="fixed top-0 left-0 right-0 bg-[#ff1e00] text-white py-2 z-50">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <p className="font-bold uppercase tracking-wide text-sm md:text-base italic">
              ATTENTION! THIS PAGE IS EXTREMELY TIME SENSITIVE
            </p>
            <div className="flex items-center gap-4 font-mono">
              <div className="text-center">
                <span className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs block">hours</span>
              </div>
              <span className="text-2xl">:</span>
              <div className="text-center">
                <span className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs block">minutes</span>
              </div>
              <span className="text-2xl">:</span>
              <div className="text-center">
                <span className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs block">seconds</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-32">
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
              <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">EULE Inner Circle</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight italic">
                Want to Say "I Was There Before <span className="underline decoration-[#ff1e00]">EULE Blew Up?</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Become a Founding Member of the EULE Inner Circle — and Ride Shotgun as We Redefine Technology, Innovation & AI Application.
              </p>
              <Button 
                size="lg" 
                className="bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white px-10 py-7 text-xl uppercase tracking-wide"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join the Club Today
              </Button>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
                You know those moments in life you look back on and say, <span className="text-white font-bold">"I was there before the world knew."</span>
              </p>
              <p className="text-xl text-gray-400 mb-6">That's what EULE is.</p>
              <div className="space-y-2 text-xl text-gray-400 mb-8">
                <p>A team.</p>
                <p>A mission.</p>
                <p>A system that doesn't just compete — <span className="text-white">it outruns legacies.</span></p>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                And now, before the big brands slap their logos on the side of the fastest technology innovation platform — <span className="text-[#ff1e00] font-bold">we're giving YOU a seat at the table.</span>
              </p>
              <p className="text-lg text-gray-400">
                We're opening the doors to our Founding Membership, and if you're reading this, it means there's still time to get in.
              </p>
            </div>
          </div>
        </section>

        {/* What is EULE Club */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">WHAT IS THE EULE CLUB?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              The EULE Club is more than a community. <span className="text-white font-bold">It's a movement.</span>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              It's the first inner-circle membership for believers, supporters, and early backers of EULE — the technology & innovation platform built on AI optimization, real-world frameworks, and peer exchange.
            </p>
            <p className="text-2xl text-white font-bold">
              As a member, you're not just watching from the sidelines. <span className="text-[#ff1e00]">You're on the inside.</span>
            </p>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Who Is This For?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Rocket, title: "Tech Early Adopters", desc: "AI, Data Science, Automatisierung, Smart Farming, Industrie 4.0" },
                { icon: Building2, title: "KMU-Entscheider", desc: "CEO/CTO/COO implementing digital transformation" },
                { icon: Cpu, title: "F&E-Teams", desc: "Entwickler, Data Scientists, Ingenieure, Forscher" },
                { icon: Database, title: "Investoren", desc: "Tech-Angels interested in AI/Data platforms" },
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 text-white">
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

        {/* What You Get */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">WHAT YOU GET</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "Founding Member Badge", desc: "Digital collectible with unique ID. Your proof you were here from the beginning." },
                { title: "Behind-the-Scenes Access", desc: "Private updates, tech footage, live breakdowns of strategy and innovation" },
                { title: "Exclusive Merch & Discounts", desc: "Member-only drops, 15-30% off, early access to collectibles" },
                { title: "Members-Only Community", desc: "Private Discord, strategy talks, influence decisions" },
                { title: "Priority for Events", desc: "First dibs on event invites, sponsor swag, digital collectibles" },
                { title: "Real-Time Tech Updates", desc: "AI frameworks, use cases, tools, and best practices" },
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 text-white">
                  <CardContent className="pt-6 pb-6 px-6">
                    <h3 className="text-xl font-bold mb-3 text-[#ff1e00]">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-[#0a0a0a]" id="pricing">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">JOINING OPTIONS</h2>
            <p className="text-xl text-gray-400 text-center mb-16">Flexible packages for individuals and enterprises</p>
            
            {/* Individual Plans */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {/* Lifetime Plan */}
              <Card className="bg-gradient-to-b from-[#ff1e00]/20 to-[#ff1e00]/5 border-[#ff1e00]/50 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#ff1e00] text-white">
                    <Crown className="w-3 h-3 mr-1" />
                    Limited to 100
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">EULE Inner Circle</CardTitle>
                  <CardDescription className="text-gray-300">Lifetime Plan</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-[#ff1e00]">€3.333</span>
                    <span className="text-gray-400">/One-Time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-400 mb-4">Everything in Monthly, FOREVER, plus:</p>
                  {[
                    "Exclusive Tech-Talks with Team",
                    "Direct Q&A Sessions with founders",
                    "Personal Team Updates",
                    "First Merchandise Access",
                    "Limited Fan Kits & Collectibles",
                    "VIP Event Invitations",
                    "Priority for Future Drops & Events",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#ff1e00] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Input 
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mb-4 bg-white/10 border-white/20 text-white"
                    />
                    <Button 
                      className="w-full bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white"
                      size="lg"
                      onClick={() => handleJoin("lifetime")}
                      disabled={isLoading !== null}
                    >
                      {isLoading === "lifetime" ? "Wird geladen..." : "Get Started"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Plan */}
              <Card className="bg-white/5 border-white/10 text-white relative overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">EULE Club</CardTitle>
                  <CardDescription className="text-gray-400">Monthly Plan</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">€99</span>
                    <span className="text-gray-400">/Monthly</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-400 mb-4">Limited spots available</p>
                  {[
                    "Behind-the-Scenes Access",
                    "Community Access (Discord)",
                    "Exclusive Merch & Discounts",
                    "Newsletter & Tech Updates",
                    "Members-Only Content",
                    "Event Notifications",
                    "Priority for Future Drops",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#ff1e00] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    size="lg"
                    onClick={() => handleJoin("monthly")}
                    disabled={isLoading !== null}
                  >
                    {isLoading === "monthly" ? "Wird geladen..." : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* B2B Enterprise Plans */}
            <h3 className="text-3xl font-bold text-center mb-8">Enterprise & B2B Plans</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* B2B Basic */}
              <Card className="bg-gradient-to-b from-blue-900/20 to-blue-800/10 border-blue-500/30 text-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-6 h-6 text-blue-400" />
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">B2B</Badge>
                  </div>
                  <CardTitle className="text-2xl">Basic Enterprise</CardTitle>
                  <CardDescription className="text-gray-300">For teams and departments</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-blue-400">€5.000</span>
                    <span className="text-gray-400">/Monat</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "All Monthly benefits for up to 10 users",
                    "AI optimization frameworks & tools",
                    "Private team workspace",
                    "Monthly strategy call",
                    "Priority support",
                    "API access to EULE tools",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                    onClick={() => handleJoin("b2b_basic")}
                    disabled={isLoading !== null}
                  >
                    {isLoading === "b2b_basic" ? "Wird geladen..." : "Subscribe Now"}
                  </Button>
                </CardContent>
              </Card>

              {/* B2B Premium */}
              <Card className="bg-gradient-to-b from-purple-900/20 to-purple-800/10 border-purple-500/30 text-white relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500 text-white">Premium</Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-6 h-6 text-purple-400" />
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Enterprise</Badge>
                  </div>
                  <CardTitle className="text-2xl">Premium Enterprise</CardTitle>
                  <CardDescription className="text-gray-300">Strategic technology partnership</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-purple-400">€50.000</span>
                    <span className="text-gray-400">/Monat</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Everything in Basic Enterprise",
                    "Unlimited team members",
                    "White-label integration rights",
                    "Weekly strategy sessions",
                    "Custom AI model training",
                    "Dedicated success manager",
                    "Co-branding opportunities",
                    "Event sponsorship access",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white"
                    size="lg"
                    onClick={() => handleJoin("b2b_premium")}
                    disabled={isLoading !== null}
                  >
                    {isLoading === "b2b_premium" ? "Wird geladen..." : "Subscribe Now"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">WHY NOW?</h2>
            <h3 className="text-3xl font-bold mb-12 text-center">Because this isn't just a "support us" play.</h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-300 mb-8">
                This is a rare chance to get in before we take off — when the story is still being written, when access is raw, and the community is being built by the early believers.
              </p>
              <div className="bg-[#ff1e00]/10 border border-[#ff1e00]/30 rounded-lg p-8 mb-8">
                <p className="text-2xl font-bold text-[#ff1e00] mb-4">
                  The Founding Member Tier is limited to just 100 people.
                </p>
                <p className="text-gray-400">After that? It's closed. No do-overs. No extra seats.</p>
              </div>
              <p className="text-xl text-white font-bold">
                You'll either be inside the story or reading about it later.
              </p>
            </div>
          </div>
        </section>

        {/* What Your Membership Supports */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">What You're Supporting</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                "R&D on new AI optimization systems",
                "Independent technology that isn't owned by legacy giants",
                "Visibility for more innovators like you",
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 text-white text-center">
                  <CardContent className="pt-8 pb-6">
                    <Zap className="w-10 h-10 text-[#ff1e00] mx-auto mb-4" />
                    <p className="text-gray-300">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-xl text-white font-bold mt-12">
              You're not just buying perks — you're building something legendary with us.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "What is EULE Club?", a: "EULE Club is the insider community for technology, innovation & AI application. Members get access to AI optimization frameworks, tools, and peer exchange." },
                  { q: "Who is EULE Club for?", a: "Tech Early Adopters, KMU-Entscheider, Digital Transformation Leaders, F&E-Teams, Tech-Professionals, Scientists, and Investors interested in AI, Data Science, and Automation." },
                  { q: "What's the difference between Lifetime and Monthly?", a: "Lifetime (€3,333) gives permanent access with exclusive tech talks, VIP events, and premium merchandise. Monthly (€99) includes all core benefits with ongoing flexibility." },
                  { q: "Do you offer enterprise plans?", a: "Yes! B2B Basic (€5,000/month) for teams and B2B Premium (€50,000/month) for strategic technology partnerships with white-label integration and custom AI training." },
                  { q: "Can I cancel anytime?", a: "Monthly and B2B subscriptions can be cancelled anytime. Lifetime is a one-time payment with permanent access." },
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
        <section className="py-16 bg-[#0a0a0a] border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl text-gray-300 italic mb-4">
                "The most transparent and technical access to AI innovation I've ever seen."
              </blockquote>
              <footer className="text-gray-500">— Beta Member</footer>
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
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Claim Your Spot?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the EULE Inner Circle now and help fuel the most exciting innovation story in technology.
            </p>
            <Button 
              size="lg" 
              className="bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white px-10 py-7 text-xl uppercase"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Become a Member Today
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ClubEule;
