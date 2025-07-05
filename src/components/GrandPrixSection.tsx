
import { Gamepad2, Trophy, Users, Monitor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const GrandPrixSection = () => {
  const { t } = useLanguage();

  return (
    <section id="grandprix" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              EULE GrandPrix
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the thrill of electric racing in virtual reality. Professional SimRacing competitions and training programs.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Professional SimRacing</h3>
                <p className="text-red-100 mb-6">
                  Train like a professional racer with our advanced simulation technology. Experience real racing physics, 
                  actual track conditions, and compete against other skilled drivers worldwide.
                </p>
                <ul className="space-y-2 text-red-100">
                  <li>• Real-world electric vehicle physics</li>
                  <li>• Professional racing circuits</li>
                  <li>• AI-powered performance analysis</li>
                  <li>• Live streaming capabilities</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <Gamepad2 className="w-12 h-12 text-red-500 mb-4" />
                <h4 className="text-lg font-bold text-black mb-2">Advanced Simulation</h4>
                <p className="text-gray-600 text-sm">State-of-the-art racing simulators with real vehicle data.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <Trophy className="w-12 h-12 text-red-500 mb-4" />
                <h4 className="text-lg font-bold text-black mb-2">Competitions</h4>
                <p className="text-gray-600 text-sm">Monthly tournaments with prizes and recognition.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <Users className="w-12 h-12 text-red-500 mb-4" />
                <h4 className="text-lg font-bold text-black mb-2">Community</h4>
                <p className="text-gray-600 text-sm">Connect with racing enthusiasts from around the world.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                <Monitor className="w-12 h-12 text-red-500 mb-4" />
                <h4 className="text-lg font-bold text-black mb-2">Live Streaming</h4>
                <p className="text-gray-600 text-sm">Watch and stream races with professional commentary.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">Join the Championship</h3>
              <p className="text-gray-600 mb-6">
                Ready to compete? Join our next SimRacing championship and experience the future of electric motorsport.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Register Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrandPrixSection;
