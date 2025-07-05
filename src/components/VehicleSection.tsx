
import { Battery, Cpu, Gauge, Shield, Zap, Settings } from "lucide-react";

const VehicleSection = () => {
  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unser Fahrzeug
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Vollständig selbst entwickeltes elektrisches Hochleistungsfahrzeug, gebaut für technologische Exzellenz.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          {/* Vehicle Visualization */}
          <div className="relative mb-16">
            <div className="bg-gradient-to-r from-red-500/20 to-transparent p-8 rounded-2xl border border-red-500/30">
              <div className="text-center">
                <div className="text-8xl mb-6">🏎️</div>
                <h3 className="text-2xl font-bold text-white mb-4">EULE Prototyp 2025</h3>
                <p className="text-red-500 font-semibold text-lg">Von 0 auf 100 km/h in unter 1,5 Sekunden</p>
              </div>
            </div>
          </div>
          
          {/* Technical Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all">
              <Zap className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Elektrischer Antrieb</h4>
              <p className="text-gray-300 mb-2">Bis zu 700 kW / 816 PS</p>
              <p className="text-sm text-gray-400">Maximale Leistung für Hochgeschwindigkeitsrennen</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all">
              <Battery className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Batteriearchitektur</h4>
              <p className="text-gray-300 mb-2">12-Zellen-System</p>
              <p className="text-sm text-gray-400">Doppelte Reichweite pro Ladung</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all">
              <Settings className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Regeneratives Bremsen</h4>
              <p className="text-gray-300 mb-2">Energieumwandlung</p>
              <p className="text-sm text-gray-400">Maximale Energieeffizienz</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all">
              <Cpu className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">KI-Fahrerassistent</h4>
              <p className="text-gray-300 mb-2">Echtzeit-System</p>
              <p className="text-sm text-gray-400">KI-basierte Fahrzeugsteuerung</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all">
              <Shield className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Autopilot-Modus</h4>
              <p className="text-gray-300 mb-2">Test & Kalibrierung</p>
              <p className="text-sm text-gray-400">Autonome Systemoptimierung</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all">
              <Gauge className="w-12 h-12 text-red-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Sensordaten-Analyse</h4>
              <p className="text-gray-300 mb-2">Performance-Tuning</p>
              <p className="text-sm text-gray-400">Kontinuierliche Optimierung</p>
            </div>
          </div>
          
          {/* Development Timeline */}
          <div className="bg-red-500/10 p-8 rounded-2xl border border-red-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Entwicklungsphase 2025</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Prototyping</h4>
                <p className="text-gray-300 text-sm">2 Monate 2025</p>
                <p className="text-gray-400 text-xs mt-1">Modularer Systemaufbau</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Batterietests</h4>
                <p className="text-gray-300 text-sm">2 Monate 2025</p>
                <p className="text-gray-400 text-xs mt-1">Leistungsprüfung</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Windkanaltests</h4>
                <p className="text-gray-300 text-sm">2-4 Monate 2025</p>
                <p className="text-gray-400 text-xs mt-1">Aerodynamikoptimierung</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Streckentests</h4>
                <p className="text-gray-300 text-sm">2-4 Monate 2025</p>
                <p className="text-gray-400 text-xs mt-1">Feintuning & Sicherheit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
