
import { GraduationCap, Award, Zap, Brain } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Gründerin & Rennteamleiterin
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image/Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-64 h-64 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                  <span className="text-white text-8xl">👩‍🔬</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🦉</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-black mb-4">Hatice Tavlı</h3>
              <p className="text-xl text-red-500 font-semibold mb-6">
                Mathematikerin. Medizinerin. Ingenieurin. Rennfahrerin.
              </p>
              
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-red-500 pl-6 mb-8">
                "Ich bin hier, um zu beweisen, dass Technologie Herz haben kann – und Geschwindigkeit Intelligenz."
              </blockquote>
            </div>
            
            {/* Expertise Areas */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-black mb-6">Fachgebiete</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                  <Brain className="w-8 h-8 text-red-500 mb-3" />
                  <h5 className="font-semibold text-black mb-2">Optimierung</h5>
                  <p className="text-gray-600 text-sm">Nichtglatte & nichtkonvexe Optimierung</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                  <Zap className="w-8 h-8 text-red-500 mb-3" />
                  <h5 className="font-semibold text-black mb-2">Batterietechnologie</h5>
                  <p className="text-gray-600 text-sm">Elektrosysteme & Energieverteilung</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                  <GraduationCap className="w-8 h-8 text-red-500 mb-3" />
                  <h5 className="font-semibold text-black mb-2">Datenanalyse</h5>
                  <p className="text-gray-600 text-sm">Echtzeitdatenanalyse & Sensornetzwerke</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                  <Award className="w-8 h-8 text-red-500 mb-3" />
                  <h5 className="font-semibold text-black mb-2">KI & Simulation</h5>
                  <p className="text-gray-600 text-sm">Medizinische KI & Systemdiagnostik</p>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-xl text-white">
                <h5 className="text-xl font-semibold mb-3">Multidisziplinäre Erfinderin</h5>
                <p className="text-gray-300">Kombination aus mathematischer Optimierung, Sensordatenanalyse und Maschinenintelligenz für ein lernendes Fahrzeug.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
