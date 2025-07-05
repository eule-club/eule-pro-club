
import { X, Send, Building, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  selectedTier: string;
  onClose: () => void;
}

const ContactForm = ({ selectedTier, onClose }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Anfrage gesendet!",
        description: `Vielen Dank für Ihr Interesse am ${selectedTier} Paket. Wir melden uns innerhalb von 24 Stunden bei Ihnen.`,
      });
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-black">Partnership Anfrage</h3>
            <p className="text-red-500 font-semibold">{selectedTier} Tier</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ihr vollständiger Name"
                required
                className="border-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-semibold text-gray-700 flex items-center">
                <Building className="w-4 h-4 mr-2" />
                Unternehmen *
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Ihr Unternehmen"
                required
                className="border-gray-300"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                E-Mail *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ihre.email@unternehmen.de"
                required
                className="border-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Telefon
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
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">
              Nachricht & Ziele
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Beschreiben Sie Ihre Ziele und wie eine Partnerschaft mit EULE zu Ihrem Unternehmen passt..."
              rows={4}
              className="border-gray-300"
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-semibold text-black mb-2">{selectedTier} Partnership Vorteile:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {selectedTier === "Platinum" && (
                <>
                  <li>• Optimierung & KI-Integration</li>
                  <li>• Exklusive Technologie-Daten</li>
                  <li>• Technologietransfer</li>
                </>
              )}
              {selectedTier === "Gold" && (
                <>
                  <li>• Blockchain & Sicherheitssysteme</li>
                  <li>• Systemarchitektur-Zugang</li>
                  <li>• Gemeinsame Innovationsprojekte</li>
                </>
              )}
              {selectedTier === "Silber" && (
                <>
                  <li>• Machine Learning & Simulation</li>
                  <li>• Modellierungsdaten</li>
                  <li>• Technische Berichte</li>
                </>
              )}
              {selectedTier === "Bronze" && (
                <>
                  <li>• Data Engineering & Analyse</li>
                  <li>• Quartalsberichte</li>
                  <li>• Logo-Platzierung</li>
                </>
              )}
            </ul>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Wird gesendet..."
            ) : (
              <>
                Partnership Anfrage senden
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
