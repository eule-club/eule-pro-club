
import { Crown, Award, Medal, Trophy, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactForm from "./ContactForm";

const PartnershipSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");

  const handleTierSelect = (tier: string) => {
    setSelectedTier(tier);
    setShowContactForm(true);
  };

  const partnershipTiers = [
    {
      name: "Platinum",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      features: [
        "Optimierung & KI-Integration",
        "Systemtechnik-Partnerschaft",
        "Exklusive Technologie-Daten",
        "VIP-Events & Präsentationen",
        "Co-Branding Möglichkeiten",
        "Technologietransfer"
      ],
      popular: true
    },
    {
      name: "Gold", 
      icon: Award,
      color: "from-yellow-500 to-yellow-600",
      features: [
        "Blockchain & Sicherheit",
        "Systemarchitektur-Zugang",
        "Entwicklungserkenntnisse", 
        "Event-Einladungen",
        "Gemeinsame Projekte",
        "Marken-Sichtbarkeit"
      ]
    },
    {
      name: "Silber",
      icon: Medal,
      color: "from-gray-400 to-gray-500",
      features: [
        "ML & Simulation",
        "Modellierungsdaten",
        "Test-Einblicke",
        "Networking-Events",
        "Technische Berichte",
        "Social Media Features"
      ]
    },
    {
      name: "Bronze",
      icon: Trophy,
      color: "from-orange-600 to-orange-700",
      features: [
        "Data Engineering",
        "Analyse-Zugang",
        "Quartalsberichte",
        "Team-Meetings",
        "Logo-Platzierung",
        "Newsletter-Features"
      ]
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Strategische Partnerschaften
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              EULE sucht keine Sponsoren – wir suchen <span className="text-red-500 font-semibold">Mitgestalter</span>.
              Werde Technologie-Partner und gestalte die Zukunft mit.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          {/* Partnership Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mb-2 block">🧪</span>
              <p className="text-sm font-semibold text-gray-700">Exklusive Tech-Daten</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mb-2 block">🥂</span>
              <p className="text-sm font-semibold text-gray-700">VIP-Events</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mb-2 block">🚀</span>
              <p className="text-sm font-semibold text-gray-700">Co-Branding</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mb-2 block">📈</span>
              <p className="text-sm font-semibold text-gray-700">Market Visibility</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mb-2 block">🧠</span>
              <p className="text-sm font-semibold text-gray-700">Tech-Transfer</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mb-2 block">🏆</span>
              <p className="text-sm font-semibold text-gray-700">Innovation</p>
            </div>
          </div>
          
          {/* Partnership Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {partnershipTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <div 
                  key={tier.name}
                  className={`relative bg-white rounded-2xl shadow-xl border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    tier.popular ? 'border-red-500 scale-105' : 'border-gray-200'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Beliebt
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black text-center mb-6">{tier.name}</h3>
                    
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-black'
                      } transition-all`}
                      onClick={() => handleTierSelect(tier.name)}
                    >
                      {tier.name} Partner werden
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Info */}
          <div className="text-center bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-black mb-4">Flexible Partnerschaft</h3>
            <p className="text-gray-600 mb-4">
              Alle Partnerschaften sind individuell gestaltbar und bieten maximale Flexibilität für Ihr Unternehmen.
            </p>
            <p className="text-sm text-gray-500">
              Individuelle Pakete und Exclusive-Sponsoring auf Anfrage verfügbar.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form Overlay */}
      {showContactForm && (
        <ContactForm 
          selectedTier={selectedTier}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </section>
  );
};

export default PartnershipSection;
