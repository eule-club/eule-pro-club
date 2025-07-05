
import { Users, Trophy, Calendar, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ClubSection = () => {
  const { t } = useLanguage();

  return (
    <section id="club" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              EULE Club
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the exclusive community of racing enthusiasts, engineers, and innovators who share our passion for electric motorsport.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Exclusive Access</h3>
              <p className="text-gray-600">Behind-the-scenes content, team meetings, and direct access to our engineers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
              <Trophy className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Racing Events</h3>
              <p className="text-gray-600">Priority tickets to races, exclusive viewing areas, and meet & greet opportunities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
              <Calendar className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Tech Talks</h3>
              <p className="text-gray-600">Monthly technical sessions about electric vehicle technology and racing strategies.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
              <Star className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Early Access</h3>
              <p className="text-gray-600">First access to EULE merchandise, new announcements, and special events.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Join EULE Club
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
