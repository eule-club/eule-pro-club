import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const location = useLocation();
  const { toast } = useToast();
  const shares = location.state?.shares || 10;
  const totalPrice = location.state?.totalPrice || 2500;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    country: "Deutschland",
    email: "",
    phone: "",
    iban: "",
  });

  const [agreements, setAgreements] = useState({
    prospectus: false,
    terms: false,
    age: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreements.prospectus || !agreements.terms || !agreements.age) {
      toast({
        title: "Zustimmung erforderlich",
        description: "Bitte bestätigen Sie alle rechtlichen Dokumente.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Bestellung eingegangen!",
      description: "Sie erhalten in Kürze eine Bestätigungs-E-Mail.",
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/eule-pro">
            <img 
              src="/lovable-uploads/e7d5abfb-b837-42bb-9ae0-1306bafe0381.png"
              alt="EULE Logo"
              className="h-12 w-auto"
            />
          </Link>
          <div className="text-sm text-gray-600">🇩🇪 Deutsch</div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">
          Ihre Bestellung abschließen & Daten überprüfen
        </h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Transaction Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    <span className="bg-[#FF1E00] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                    Ihre Zeichnung
                  </h2>
                  <div className="bg-[#F5F5F7] p-6 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Anzahl der Anleihen:</span>
                      <span className="font-bold text-black">{shares} Anleihen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Preis pro Anleihe:</span>
                      <span className="font-bold text-black">250,00 €</span>
                    </div>
                    <div className="flex justify-between pt-4 border-t border-gray-300">
                      <span className="font-bold text-lg text-black">Gesamtzeichnungsbetrag:</span>
                      <span className="font-bold text-2xl text-[#FF1E00]">{totalPrice.toLocaleString('de-DE')} €</span>
                    </div>
                    <Link to="/apply" className="text-[#FF1E00] text-sm hover:underline inline-block mt-2">
                      ← Anzahl ändern
                    </Link>
                  </div>
                </div>

                {/* 2. Personal Data */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    <span className="bg-[#FF1E00] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                    Ihre Daten & Kontoinformationen
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Vorname" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                    />
                    <Input 
                      placeholder="Nachname" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                    />
                    <Input 
                      placeholder="Straße" 
                      value={formData.street}
                      onChange={(e) => setFormData({...formData, street: e.target.value})}
                      required
                    />
                    <Input 
                      placeholder="Hausnummer" 
                      value={formData.houseNumber}
                      onChange={(e) => setFormData({...formData, houseNumber: e.target.value})}
                      required
                    />
                    <Input 
                      placeholder="PLZ" 
                      value={formData.zipCode}
                      onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                      required
                    />
                    <Input 
                      placeholder="Ort" 
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      required
                    />
                    <Input 
                      placeholder="Land" 
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      required
                      className="md:col-span-2"
                    />
                    <Input 
                      type="email"
                      placeholder="E-Mail" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="md:col-span-2"
                    />
                    <Input 
                      type="tel"
                      placeholder="Telefon" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="md:col-span-2"
                    />
                    <Input 
                      placeholder="IBAN" 
                      value={formData.iban}
                      onChange={(e) => setFormData({...formData, iban: e.target.value})}
                      required
                      className="md:col-span-2"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    🔒 Ihre Daten werden sicher und verschlüsselt übertragen.
                  </p>
                </div>

                {/* 3. Payment Method */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    <span className="bg-[#FF1E00] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                    Zahlungsmethode
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#FF1E00] transition-colors">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <span className="font-semibold">Banküberweisung</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#FF1E00] transition-colors">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <span className="font-semibold">Kreditkarte</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#FF1E00] transition-colors">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="crypto"
                        checked={paymentMethod === "crypto"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5"
                      />
                      <span className="font-semibold">Kryptowährung</span>
                    </label>
                  </div>
                </div>

                {/* 4. Legal Agreements */}
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    <span className="bg-[#FF1E00] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                    Rechtliche Dokumente & Zustimmung
                  </h2>
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox 
                        checked={agreements.prospectus}
                        onCheckedChange={(checked) => setAgreements({...agreements, prospectus: checked as boolean})}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-700">
                        Ich habe den <a href="#" className="text-[#FF1E00] hover:underline font-semibold">Wertpapierprospekt</a> gelesen und verstanden.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox 
                        checked={agreements.terms}
                        onCheckedChange={(checked) => setAgreements({...agreements, terms: checked as boolean})}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-700">
                        Ich stimme den <a href="#" className="text-[#FF1E00] hover:underline font-semibold">AGB</a> und den Zeichnungsbedingungen zu.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox 
                        checked={agreements.age}
                        onCheckedChange={(checked) => setAgreements({...agreements, age: checked as boolean})}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-700">
                        Ich bestätige, dass ich eine natürliche Person bin und über 18 Jahre alt.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Final Summary & CTA */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-black">Gesamtbetrag:</span>
                    <span className="text-4xl font-bold text-[#FF1E00]">{totalPrice.toLocaleString('de-DE')} €</span>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-[#FF1E00] hover:bg-[#FF1E00]/90 text-white font-bold text-xl py-8"
                  >
                    VERBINDLICH BESTELLEN & ZAHLUNG EINLEITEN
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Trust & Process */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8 space-y-6">
              {/* Branding */}
              <div>
                <img 
                  src="/lovable-uploads/eule-rennwagen-hero.png"
                  alt="EULE Rennwagen"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">
                  Ihr Investment bei EULE
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-[#F5F5F7] p-3 rounded-lg">
                  <Lock className="w-5 h-5 text-[#FF1E00]" />
                  <span>Sichere Übertragung: Alle Daten werden verschlüsselt.</span>
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h4 className="font-bold text-black mb-4">Ihr Fortschritt</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">Investment wählen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#FF1E00] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ▶
                    </div>
                    <span className="text-sm font-semibold text-black">Bestellung abschließen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-400">Zahlungsanweisung</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold text-black mb-2">Haben Sie Fragen?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Unser Team steht Ihnen zur Seite.
                </p>
                <p className="text-sm">
                  <a href="mailto:invest@eule-racing.com" className="text-[#FF1E00] hover:underline font-semibold">
                    invest@eule-racing.com
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+491234567890" className="text-[#FF1E00] hover:underline font-semibold">
                    +49 123 456 7890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;