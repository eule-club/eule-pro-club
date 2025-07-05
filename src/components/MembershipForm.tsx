
import { X, Crown, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface MembershipFormProps {
  onClose: () => void;
}

const MembershipForm = ({ onClose }: MembershipFormProps) => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Willkommen bei EULE!",
        description: "Ihre Membership wurde erfolgreich aktiviert. Prüfen Sie Ihre E-Mails für weitere Informationen.",
      });
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">EULE Membership</h3>
              <p className="text-gray-600">Join the Inner Circle</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-6">
          {/* Plan Selection */}
          <div className="mb-6">
            <h4 className="font-semibold text-black mb-4">Wählen Sie Ihren Plan:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === "monthly" 
                    ? "border-red-500 bg-red-50" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedPlan("monthly")}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">€29</div>
                  <div className="text-sm text-gray-600">pro Monat</div>
                  <div className="text-xs text-gray-500 mt-1">Jederzeit kündbar</div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all relative ${
                  selectedPlan === "yearly" 
                    ? "border-red-500 bg-red-50" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedPlan("yearly")}
              >
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  15% Rabatt
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">€299</div>
                  <div className="text-sm text-gray-600">pro Jahr</div>
                  <div className="text-xs text-gray-500 mt-1">€348 → €299</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Member Benefits Preview */}
          <div className="bg-gray-50 p-4 rounded-xl mb-6">
            <h5 className="font-semibold text-black mb-3 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Ihre Member-Vorteile:
            </h5>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2"></div>
                Behind-the-Scenes Zugang zu Entwicklung & Tests
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2"></div>
                Exklusive Tech-Talks mit Hatice Tavlı
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2"></div>
                Früher Zugang zu limitierten Merchandise
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2"></div>
                Member-only Discord Community
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2"></div>
                VIP-Einladungen zu Events & Präsentationen
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                Vollständiger Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ihr Name"
                required
                className="border-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                E-Mail Adresse *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ihre@email.de"
                required
                className="border-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                Telefon (optional)
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+49 xxx xxx xxxx"
                className="border-gray-300"
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <CreditCard className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Sichere Zahlung</span>
              </div>
              <p className="text-xs text-gray-600">
                Nach dem Klick auf "Membership starten" werden Sie zu unserem sicheren Zahlungsanbieter weitergeleitet.
                Akzeptierte Zahlungsmethoden: Kreditkarte, PayPal, SEPA-Lastschrift.
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3"
              disabled={isProcessing}
            >
              {isProcessing ? (
                "Wird verarbeitet..."
              ) : (
                <>
                  Membership starten - €{selectedPlan === "monthly" ? "29/Monat" : "299/Jahr"}
                  <Crown className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              Jederzeit kündbar. Keine versteckten Kosten. Ihre Daten sind sicher geschützt.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;
