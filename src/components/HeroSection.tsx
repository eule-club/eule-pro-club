
import { ArrowRight, Zap, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* EULE Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 overflow-hidden bg-white shadow-lg border-4 border-red-100">
                <img 
                  src="/lovable-uploads/588aa5bf-d4eb-4eaa-8d1c-f75462913a23.png" 
                  alt="EULE Logo" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-2xl md:text-3xl text-red-500 mb-4 font-semibold">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.tagline')}
            <br />
            <span className="text-black font-semibold">{t('hero.description')}</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
              onClick={() => document.getElementById('partnerships')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta.partner')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta.membership')}
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-100 shadow-lg">
              <Zap className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-2">700 kW</h3>
              <p className="text-gray-600">{t('hero.stats.power')}</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-100 shadow-lg">
              <Brain className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-2">&lt; 1,5s</h3>
              <p className="text-gray-600">{t('hero.stats.acceleration')}</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-100 shadow-lg">
              <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-black mb-2">{t('hero.stats.ai')}</h3>
              <p className="text-gray-600">{t('hero.stats.ai.desc')}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
