
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Award, Zap, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {t('founder.title')}
              </h1>
              <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            </div>
            
            {/* CEO Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black mb-4">Leadership</h2>
                <div className="w-24 h-1 bg-red-500 mx-auto"></div>
              </div>
              
              <div className="text-center lg:text-left max-w-2xl mx-auto">
                <div className="relative inline-block mb-8">
                  <a href="https://www.linkedin.com/in/elara-sigma-84544038b/" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="w-64 h-64 rounded-full overflow-hidden mx-auto lg:mx-0 shadow-lg border-4 border-red-100 hover:border-red-300 transition-all">
                      <img 
                        src="/lovable-uploads/elara-sigma-ceo.png" 
                        alt="Elara Sigma" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-red-100 overflow-hidden">
                    <img 
                      src="/lovable-uploads/588aa5bf-d4eb-4eaa-8d1c-f75462913a23.png" 
                      alt="EULE Logo" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-black mb-4">Elara Sigma</h2>
                <p className="text-xl text-red-500 font-semibold mb-6">
                  CEO & Lead AI Systems Architect @EULE
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image/Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-8">
                  <div className="w-64 h-64 rounded-full overflow-hidden mx-auto lg:mx-0 shadow-lg border-4 border-red-100">
                    <img 
                      src="/lovable-uploads/e17453dd-72ed-47e2-8d6d-911ccc86b41b.png" 
                      alt="Hatice Tavlı" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-red-100 overflow-hidden">
                    <img 
                      src="/lovable-uploads/588aa5bf-d4eb-4eaa-8d1c-f75462913a23.png" 
                      alt="EULE Logo" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-black mb-4">{t('founder.name')}</h2>
                <p className="text-xl text-red-500 font-semibold mb-6">
                  {t('founder.roles')}
                </p>
                
                {/* Vision Statement */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl mb-6 border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-red-600 mb-2">{t('founder.vision.title')}</h3>
                  <p className="text-2xl font-bold text-red-500 italic">
                    "{t('founder.vision.statement')}"
                  </p>
                </div>
                
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-red-500 pl-6 mb-8">
                  "{t('founder.quote')}"
                </blockquote>
              </div>
              
              {/* Expertise Areas */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black mb-6">{t('founder.expertise')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                    <Brain className="w-8 h-8 text-red-500 mb-3" />
                    <h4 className="font-semibold text-black mb-2">{t('founder.optimization')}</h4>
                    <p className="text-gray-600 text-sm">{t('founder.optimization.desc')}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                    <Zap className="w-8 h-8 text-red-500 mb-3" />
                    <h4 className="font-semibold text-black mb-2">{t('founder.battery')}</h4>
                    <p className="text-gray-600 text-sm">{t('founder.battery.desc')}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                    <GraduationCap className="w-8 h-8 text-red-500 mb-3" />
                    <h4 className="font-semibold text-black mb-2">{t('founder.medical')}</h4>
                    <p className="text-gray-600 text-sm">{t('founder.medical.desc')}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500">
                    <Award className="w-8 h-8 text-red-500 mb-3" />
                    <h4 className="font-semibold text-black mb-2">{t('founder.ai')}</h4>
                    <p className="text-gray-600 text-sm">{t('founder.ai.desc')}</p>
                  </div>
                </div>
                
                <div className="bg-red-500 p-6 rounded-xl text-white">
                  <h4 className="text-xl font-semibold mb-3">{t('founder.inventor')}</h4>
                  <p className="text-red-100">{t('founder.inventor.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
