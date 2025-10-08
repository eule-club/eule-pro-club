import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Apply = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [shares, setShares] = useState([10]);
  const [showInfo, setShowInfo] = useState(false);

  const pricePerShare = 250;
  const interestRate = 7.0;
  const totalPrice = shares[0] * pricePerShare;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/checkout', { state: { shares: shares[0], totalPrice } });
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
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-black mb-8">
                Ihr Investment konfigurieren
              </h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Share Selection */}
                <div>
                  <label className="block text-lg font-semibold text-black mb-4">
                    Anzahl der Anleihen
                  </label>
                  <div className="flex items-center gap-4 mb-4">
                    <Input 
                      type="number" 
                      min="1"
                      value={shares[0]}
                      onChange={(e) => setShares([parseInt(e.target.value) || 1])}
                      className="text-2xl font-bold text-center h-16 text-black"
                    />
                    <span className="text-xl text-gray-600">Anleihen</span>
                  </div>
                  <Slider
                    value={shares}
                    onValueChange={setShares}
                    min={1}
                    max={100}
                    step={1}
                    className="mb-6"
                  />
                </div>

                {/* Price Overview */}
                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Preis pro Anleihe</span>
                    <span className="text-xl font-semibold text-black">{pricePerShare.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Zins p.a.</span>
                    <span className="text-xl font-semibold text-black">{interestRate.toFixed(2)} %</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                    <span className="text-xl font-bold text-black">Gesamtzeichnungsbetrag</span>
                    <span className="text-3xl font-bold text-[#FF1E00]">{totalPrice.toLocaleString('de-DE')} €</span>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-[#FF1E00] hover:bg-[#FF1E00]/90 text-white font-bold text-lg py-6 mt-8"
                >
                  Investment absenden & überprüfen
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Branding */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <img 
                src="/lovable-uploads/eule-rennwagen-hero.png"
                alt="EULE Rennwagen"
                className="w-full h-auto rounded-lg mb-6"
              />
              
              <h2 className="text-2xl font-bold text-black mb-2">
                Sie investieren in EULE
              </h2>
              <p className="text-gray-600 mb-6">
                Mathematische Optimierung in nachhaltige Wirkung verwandeln
              </p>

              {/* Toggle Information */}
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="flex items-center justify-between w-full text-left font-semibold text-black hover:text-[#FF1E00] transition-colors"
                >
                  <span>Informationen zum Investment</span>
                  {showInfo ? <ChevronUp /> : <ChevronDown />}
                </button>
                
                {showInfo && (
                  <div className="mt-4 text-sm text-gray-700 space-y-2">
                    <p>• Mindestlaufzeit: 1,5 Jahre</p>
                    <p>• Fester Zinssatz: 7,00 % p.a.</p>
                    <p>• Auszahlung: Jährlich</p>
                    <p>• Risikoklasse: Mittel</p>
                    <p className="pt-2">
                      <a href="#" className="text-[#FF1E00] hover:underline font-semibold">
                        → Prospekt herunterladen (PDF)
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;