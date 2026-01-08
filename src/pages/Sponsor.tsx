import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight, Zap, Globe, Award, TrendingUp, Camera, Users, Mail, Phone, Building2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

// Stripe Price IDs for sponsor tiers
const SPONSOR_PRICES = {
  monthly: {
    price_id: "price_1SnKwIL6Wv5ywdJri3Irjjro",
    product_id: "prod_Tkqda1SC861M4x",
    amount: 50000,
  },
};

const SPONSOR_TIERS = [
  {
    name: "Exclusive Sponsorship",
    price: "€80.000.000",
    description: "Ultimate brand visibility on the EULE racing car",
    features: [
      "As 'Exclusive Sponsor' LOGO on the front EULE racing car",
      "Content creation and posting during test drives",
      "LIVE streaming including LOGO & NAME display",
      "Influencer campaign",
      "Social media partnership 3X posting at each event (1 Mio Views)",
    ],
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/50",
    badge: "Exclusive",
    tier: "exclusive",
  },
  {
    name: "Platinum Sponsorship",
    price: "€250.000",
    description: "Premium visibility and marketing partnership",
    features: [
      "As 'Platinum Sponsor' LOGO on the BACK of the racing suit",
      "Logo on the race pilot suit front and marketing campaigns",
      "Influencer campaign",
      "Social media partnership 2X posting at each event (1 Mio Views)",
    ],
    color: "from-slate-300/20 to-slate-400/10",
    borderColor: "border-slate-300/50",
    badge: "Platinum",
    tier: "platinum",
  },
  {
    name: "Gold Sponsorship",
    price: "€175.000",
    description: "High-impact brand presence",
    features: [
      "As 'Gold Sponsor' LOGO on the BACK of the helmet",
      "Influencer campaign",
      "Social media partnership 2X posting at each event (1 Mio Views)",
    ],
    color: "from-yellow-500/20 to-yellow-600/10",
    borderColor: "border-yellow-500/50",
    badge: "Gold",
    tier: "gold",
  },
  {
    name: "Silver Sponsorship",
    price: "€75.000",
    description: "Strategic brand placement",
    features: [
      "As 'Silver Sponsor' LOGO on the right arm of the racing suit",
      "Influencer campaign",
      "Social media partnership 1X posting at each event (1 Mio Views)",
    ],
    color: "from-gray-400/20 to-gray-500/10",
    borderColor: "border-gray-400/50",
    badge: "Silver",
    tier: "silver",
  },
  {
    name: "Bronze Sponsorship",
    price: "€35.000",
    description: "Entry-level brand visibility",
    features: [
      "As 'Bronze Sponsor' LOGO & NAME on social media promotion",
      "Influencer campaign",
      "1X posting at each event (1 Mio Views on TikTok & Instagram & YouTube)",
    ],
    color: "from-orange-700/20 to-orange-800/10",
    borderColor: "border-orange-700/50",
    badge: "Bronze",
    tier: "bronze",
  },
];

const Sponsor = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

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

  const handleInquiry = (tier: string) => {
    setSelectedTier(tier);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const utmData = JSON.parse(sessionStorage.getItem("utm_data") || "{}");
      
      await supabase.from("leads").insert({
        email,
        name,
        phone,
        source: "sponsor-inquiry",
        tags: [selectedTier, "sponsor"],
        notes: `Company: ${company}\nMessage: ${message}`,
        ...utmData,
      });

      toast({
        title: "Anfrage gesendet!",
        description: "Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.",
      });

      setShowForm(false);
      setEmail("");
      setName("");
      setCompany("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMonthlySponsorship = async () => {
    setIsSubscribing(true);
    
    try {
      const utmData = JSON.parse(sessionStorage.getItem("utm_data") || "{}");
      
      if (email) {
        await supabase.from("leads").insert({
          email,
          source: "sponsor-monthly",
          tags: ["sponsor-monthly", "50k"],
          ...utmData,
        });
      }

      const { data, error } = await supabase.functions.invoke("create-sponsor-checkout", {
        body: { 
          priceId: SPONSOR_PRICES.monthly.price_id,
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
        description: "Checkout konnte nicht gestartet werden.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EULE Racing",
    "description": "Sponsor opportunities for the fastest electric racing team in Formula E",
    "url": "https://sponsor.eule.pro",
    "sameAs": ["https://eule.pro"],
    "potentialAction": {
      "@type": "Action",
      "name": "Become a Sponsor",
      "target": "https://sponsor.eule.pro#sponsor-tiers"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is EULE Racing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EULE is Europe's boldest electric racing team, building the fastest-accelerating electric race car for Formula E competition using AI-powered optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What do sponsors get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sponsors receive brand visibility on the racing car, suit, helmets, plus social media exposure, influencer campaigns, and PR opportunities at international racing events."
        }
      },
      {
        "@type": "Question",
        "name": "How much does sponsorship cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sponsorship tiers range from €35,000 (Bronze) to €80,000,000 (Exclusive), with monthly partnership options starting at €50,000/month."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Become a Sponsor | EULE Racing — Electric Racing Sponsorship Opportunities</title>
        <meta name="description" content="Sponsor the fastest electric racing team. Your brand on the EULE car at 280+ km/h. Tier packages from €35,000 to €80M. Monthly partnerships available at €50,000/month." />
        <meta name="keywords" content="electric racing sponsorship, Formula E sponsor, motorsport sponsorship, EV racing, EULE Racing, brand visibility, racing partnership" />
        <meta property="og:title" content="Sponsor EULE Racing — Be Part of Electric Racing History" />
        <meta property="og:description" content="Your brand at 280+ km/h on the fastest electric race car. Strategic sponsorship packages available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sponsor.eule.pro" />
        <meta property="og:image" content="/lovable-uploads/eule-rennwagen-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sponsor.eule.pro" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        
        {/* Urgency Banner */}
        <div className="fixed top-0 left-0 right-0 bg-[#ff1e00] text-white py-2 z-50">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <p className="font-bold uppercase tracking-wide text-sm md:text-base italic">
              Limited Sponsorship Spots Available!
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight italic">
                Be Part of Something That's <span className="underline decoration-[#ff1e00]">Faster Than the Future!</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the Race to Redefine Electric Speed — Become a Sponsor of EULE, the Fastest-Accelerating Electric Race Car in the Arena.
              </p>
              <Button 
                size="lg" 
                className="bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white px-10 py-7 text-xl uppercase tracking-wide"
                onClick={() => document.getElementById("sponsor-tiers")?.scrollIntoView({ behavior: "smooth" })}
              >
                Become a Sponsor Today
              </Button>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Imagine this. Your brand's logo tearing across the track at 280+ km/h on the side of the fastest electric race car ever built.
                </h2>
                <p className="text-xl text-gray-400 mb-6">
                  The crowd roars. Cameras flash. Journalists, fans, and influencers are posting stories with your name in the shot.
                </p>
                <p className="text-lg text-gray-400">
                  Welcome to EULE — not just a car, not just a brand — but a movement redefining performance, innovation, and electric domination on the track.
                </p>
                <p className="text-2xl font-bold text-[#ff1e00] mt-8">You sponsor it.</p>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/eule-rennwagen-hero.png" 
                  alt="EULE Racing Car" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is EULE */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">WHAT IS THE EULE?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              EULE is Europe's bold answer to the question: "What if we built an electric race car that could smoke anything it lined up against?"
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From garage dream to race-day reality, EULE is the David in a world of Goliaths — and it's coming into the racing scene fast, smart, and hungry for legacy.
            </p>
            <p className="text-2xl text-white font-bold mt-8">
              And now… we're looking for visionary brands ready to ride that legacy with us.
            </p>
          </div>
        </section>

        {/* Why Sponsor */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">WHY SPONSOR EULE?</h2>
            <h3 className="text-3xl font-bold mb-16 text-center">Because this is not another car company.</h3>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {[
                { icon: Zap, title: "Brand Exposure at 280km/h", desc: "Your brand integrated on the EULE car, suit, helmets, and team gear. Presence in all live racing events." },
                { icon: Globe, title: "Future-Forward Audience", desc: "Access to fans, motorsport lovers, EV pioneers & investors. Coverage across digital channels and influencer partnerships." },
                { icon: Award, title: "Strategic Partnership", desc: "Custom PR collaborations, co-branded content, event invites, and potential investor crossover opportunities." },
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

            <Card className="bg-gradient-to-r from-green-900/30 to-green-800/20 border-green-500/30 max-w-3xl mx-auto">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-3">Tax-Deductible Marketing Opportunity</h4>
                <p className="text-gray-300">
                  Depending on your region, sponsorship expenses can be listed as marketing costs — meaning more exposure for less actual overhead.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-24 bg-[#111]" id="sponsor-tiers">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">SPONSORSHIP TIERS</h2>
            <p className="text-xl text-gray-400 text-center mb-16">We've created flexible packages for brands at every level of ambition</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {SPONSOR_TIERS.map((tier, i) => (
                <Card key={i} className={`bg-gradient-to-b ${tier.color} ${tier.borderColor} border text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#ff1e00] text-white">{tier.badge}</Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-[#ff1e00]">{tier.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#ff1e00] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    <Button 
                      className="w-full mt-6 bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white uppercase"
                      onClick={() => handleInquiry(tier.tier)}
                    >
                      Make Inquiries
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Monthly Sponsor Upsell */}
            <div className="mt-16">
              <Card className="bg-gradient-to-r from-[#ff1e00]/20 to-[#ff1e00]/5 border-[#ff1e00] border-2 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left">
                      <Badge className="bg-[#ff1e00] mb-4">Monthly Partnership</Badge>
                      <h3 className="text-3xl font-bold mb-2">€50.000/Monat</h3>
                      <p className="text-gray-300 mb-4">
                        Ongoing strategic partnership with full team access, co-branding rights, and premium visibility at all events.
                      </p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff1e00]" /> Full team access & co-branding</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff1e00]" /> Priority event invitations</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff1e00]" /> Monthly strategy sessions</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <Input 
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4 bg-white/10 border-white/20 text-white w-64"
                      />
                      <Button 
                        size="lg"
                        className="bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white px-8"
                        onClick={handleMonthlySponsorship}
                        disabled={isSubscribing}
                      >
                        {isSubscribing ? "Wird geladen..." : "Subscribe Now"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        {showForm && (
          <section className="py-24 bg-[#0a0a0a]" id="inquiry-form">
            <div className="container mx-auto px-4">
              <Card className="max-w-2xl mx-auto bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">
                    {selectedTier.charAt(0).toUpperCase() + selectedTier.slice(1)} Sponsorship Inquiry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Name *</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                          <Input 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Company *</label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                          <Input 
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white"
                            placeholder="Company name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                          <Input 
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                          <Input 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white"
                            placeholder="+49 ..."
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Message</label>
                      <Textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-white/10 border-white/20 text-white min-h-[120px]"
                        placeholder="Tell us about your sponsorship goals..."
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Why Now */}
        <section className="py-24 bg-[#111]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">WHY NOW?</h2>
            <h3 className="text-3xl font-bold mb-12 text-center">The sport isn't slowing down. And neither are we.</h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-300 mb-8">
                Visibility windows like this don't come often. We race in front of international media at Major E-Prix events.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Camera, text: "Cameras everywhere" },
                  { icon: Globe, text: "News coverage across Europe" },
                  { icon: TrendingUp, text: "Win mindshare before selling" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-lg">
                    <item.icon className="w-10 h-10 text-[#ff1e00]" />
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-[#ff1e00] font-semibold">
                If we don't secure your spot before we go live, we can't guarantee we'll have room.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Claim Your Sponsorship?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's talk today and reserve your spot before this campaign hits top gear.
            </p>
            <Button 
              size="lg" 
              className="bg-[#ff1e00] hover:bg-[#ff1e00]/90 text-white px-10 py-7 text-xl uppercase"
              onClick={() => document.getElementById("sponsor-tiers")?.scrollIntoView({ behavior: "smooth" })}
            >
              Become a Sponsor Today
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Sponsor;
