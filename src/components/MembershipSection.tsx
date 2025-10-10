
import { Users, Crown, Gift, Eye, Truck, Percent, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MembershipForm from "./MembershipForm";

const MembershipSection = () => {
  const [showMembershipForm, setShowMembershipForm] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState("");

  const handleMembershipSelect = (membership: string) => {
    setSelectedMembership(membership);
    setShowMembershipForm(true);
  };

  const membershipBenefits = [
    {
      icon: Eye,
      title: "Exklusiver Zugang",
      description: "Behind-the-Scenes Content, 3D-Simulationen und Tech-Explainer"
    },
    {
      icon: Gift,
      title: "Merchandise Priority",
      description: "Früher Zugang zu limitierten EULE Produkten und Sammlerstücken"
    },
    {
      icon: Truck,
      title: "Event-Einladungen",
      description: "VIP-Zugang zu Tests, Präsentationen und Rennveranstaltungen"
    },
    {
      icon: Percent,
      title: "Member Discounts",
      description: "Exklusive Rabatte auf Merchandise und Event-Tickets"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Direkter Austausch mit dem Team und anderen Fans"
    },
    {
      icon: Crown,
      title: "Branded Perks",
      description: "Limitierte EULE Accessoires und personalisierte Inhalte"
    }
  ];

  const membershipTiers = [
    {
      id: "supporter",
      name: "EULE Club Monthly Plan",
      price: "€99",
      period: "/ Monatlich",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      features: [
        "Behind-the-Scenes Access",
        "Exclusive Merch & VIP Events",
        "Members-Only Community",
        "Priority for Future Drops & Events"
      ]
    },
    {
      id: "fans",
      name: "EULE Inner Circle Life-Time Plan",
      price: "€3333",
      period: "/ One-Time-Payment (Limited to only 100 spots)",
      icon: Heart,
      color: "from-red-500 to-red-600",
      features: [
        "Alle Supporter Benefits",
        "Exklusive Tech-Talks mit Hatice",
        "VIP Event-Einladungen",
        "Früher Merchandise-Zugang",
        "Persönliche Team-Updates",
        "Limitierte Fan-Pakete",
        "Direkte Q&A Sessions"
      ],
      popular: true
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              EULE Club
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Werde Teil der <span className="text-red-500 font-semibold">EULE Familie</span> und unterstütze das intelligenteste Elektro-Motorsport-Team der Welt.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          {/* Membership Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {membershipTiers.map((tier) => {
              const IconComponent = tier.icon;
              return (
                <div 
                  key={tier.id}
                  className={`relative bg-white rounded-2xl shadow-xl border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    tier.popular ? 'border-red-500 scale-105' : 'border-gray-200'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        Beliebt
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-black text-center mb-4">{tier.name}</h3>
                    
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-black">{tier.price}</span>
                      <span className="text-gray-500 text-lg">{tier.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
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
                      } transition-all text-lg py-3`}
                      onClick={() => handleMembershipSelect(tier.id)}
                    >
                      {tier.name} werden
                      <IconComponent className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Membership Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {membershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Member Preview */}
          <div className="bg-black text-white p-8 rounded-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Was Member erwarten können:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Monatliche Behind-the-Scenes Video-Updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Exklusive Tech-Talks mit Hatice Tavlı</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Früher Zugang zu Test-Footage und Simulationen</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Member-only Discord Community</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Limitierte EULE Merchandise Priority</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏁</div>
                <h4 className="text-xl font-semibold mb-2">Inner Circle Access</h4>
                <p className="text-gray-300">Werde Teil der EULE-Geschichte von Anfang an</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Jederzeit kündbar. Unterstütze echte Innovation im deutschen Motorsport.
            </p>
          </div>
        </div>
      </div>
      
      {/* Membership Form Overlay */}
      {showMembershipForm && (
        <MembershipForm 
          selectedMembership={selectedMembership}
          onClose={() => setShowMembershipForm(false)} 
        />
      )}
    </section>
  );
};

export default MembershipSection;
