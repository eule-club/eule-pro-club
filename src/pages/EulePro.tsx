import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const EulePro = () => {
  const { language } = useLanguage();
  const [investedAmount, setInvestedAmount] = useState(0);
  const [investorCount, setInvestorCount] = useState(0);
  const [daysLeft, setDaysLeft] = useState(5);

  useEffect(() => {
    // Calculate days left until 31.10.2025
    const calculateDaysLeft = () => {
      const targetDate = new Date('2025-10-31T23:59:59');
      const today = new Date();
      const diffTime = targetDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return Math.max(0, diffDays);
    };

    setDaysLeft(calculateDaysLeft());

    // Animate counting up
    const targetAmount = 1225000;
    const targetInvestors = 475;
    const duration = 2000;
    const steps = 60;
    const amountIncrement = targetAmount / steps;
    const investorIncrement = targetInvestors / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setInvestedAmount(Math.min(Math.floor(amountIncrement * currentStep), targetAmount));
      setInvestorCount(Math.min(Math.floor(investorIncrement * currentStep), targetInvestors));
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (1225000 / 10000000) * 100; // ~12%

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section - Black Background - NO HEADER */}
      <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden pt-8">
        {/* Countdown Banner */}
        <div className="absolute top-8 left-8 bg-[#FF1E00] text-white px-6 py-3 transform -rotate-6 shadow-2xl z-10 animate-pulse">
          <p className="font-bold text-lg">
            Noch {daysLeft} Tage
          </p>
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-[#FF1E00] text-7xl md:text-9xl font-bold mb-4">
            EULE
          </h1>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 tracking-wider">
            DIE FORMEL FÜR DOMINANZ
          </h2>
          <p className="text-white/80 text-xl md:text-2xl italic mb-12">
            "Grenzen der Geschwindigkeit neu definieren."
          </p>

          {/* Hero Car Image */}
          <div className="relative my-12 max-w-5xl mx-auto">
            <img 
              src="/lovable-uploads/eule-rennwagen-hero.png"
              alt="EULE Elektro-Rennwagen"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/technical-specs">
              <Button 
                size="lg" 
                className="bg-[#FF1E00] hover:bg-[#FF1E00]/90 text-white font-bold text-lg px-8 py-6"
              >
                Mehr erfahren
              </Button>
            </Link>
            <Link to="/apply">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-black hover:bg-white/90 font-bold text-lg px-8 py-6 border-2 border-white"
              >
                Jetzt Investieren
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Details Section - White/Light Gray Background */}
      <section id="investment-details" className="bg-[#F5F5F7] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-[#FF1E00]">EULE</span>
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-black mb-2">
                Der schnellste Elektro-Rennwagen aller Zeiten
              </p>
              <p className="text-xl text-gray-600">
                Mit der Kraft der exzellenten Ingenieurskunst im Inneren.
              </p>
            </div>

            {/* Investment Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-3xl font-bold text-black">
                    {investedAmount.toLocaleString('de-DE')} €
                  </p>
                  <p className="text-gray-600">investiert</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-700">
                    von {investorCount} Anlegenden
                  </p>
                  <p className="text-gray-600">Enthusiasten</p>
                </div>
              </div>
              
              <div className="relative group cursor-pointer">
                <Progress 
                  value={progressPercentage} 
                  className="h-8 bg-gray-200"
                />
                <div 
                  className="absolute inset-0 bg-[#FF1E00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full animate-pulse"
                />
              </div>
            </div>

            {/* Investment Metrics - Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                <p className="text-gray-600 mb-2 text-lg">Preis pro Anteil</p>
                <p className="text-4xl font-bold text-[#FF1E00]">ab 250 €</p>
              </div>
              <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                <p className="text-gray-600 mb-2 text-lg">Laufzeit</p>
                <p className="text-4xl font-bold text-black">1,5 Jahre</p>
              </div>
              <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                <p className="text-gray-600 mb-2 text-lg">Zuwachs p.a.</p>
                <p className="text-4xl font-bold text-[#FF1E00]">7,00 %</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <Link to="/apply">
                <Button 
                  size="lg"
                  className="bg-[#FF1E00] hover:bg-[#FF1E00]/90 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  Jetzt Investieren
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EulePro;