
import { Calendar, Target, Trophy } from "lucide-react";

const RoadmapHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-red-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-500/20 p-4 rounded-full">
              <Trophy className="w-16 h-16 text-red-500" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            EULE Formula E
            <span className="block text-red-500">Development Roadmap</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            4-Month Accelerated Plan to Build the World's Most Intelligent Electric Racing Team
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <Calendar className="w-8 h-8 text-red-500 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Timeline</h3>
              <p className="text-gray-300 text-sm">July 16 - November 16, 2025</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <Target className="w-8 h-8 text-red-500 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Target</h3>
              <p className="text-gray-300 text-sm">FIA Gen4 Compliance Ready</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
              <Trophy className="w-8 h-8 text-red-500 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Goal</h3>
              <p className="text-gray-300 text-sm">2026 Formula E Season</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapHero;
