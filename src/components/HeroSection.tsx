
import { ArrowRight, Zap, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900/20 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Owl Logo Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <span className="text-white text-4xl">🦉</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xs">👓</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            EULE
          </h1>
          
          <p className="text-2xl md:text-3xl text-red-500 mb-4 font-semibold">
            Das intelligenteste Elektro-Motorsport-Team der Welt
          </p>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Engineering Speed. Creating Legends.
            <br />
            <span className="text-white font-semibold">Wo Mathematik auf Maschinen trifft, wo High-Tech auf Leidenschaft trifft.</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
              onClick={() => document.getElementById('partnerships')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Jetzt Partner werden
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all transform hover:scale-105"
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EULE Membership
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <Zap className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">700 kW</h3>
              <p className="text-gray-300">816 PS Leistung</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <Brain className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">&lt; 1,5s</h3>
              <p className="text-gray-300">0-100 km/h</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
              <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">KI-basiert</h3>
              <p className="text-gray-300">Fahrerassistenzsystem</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
