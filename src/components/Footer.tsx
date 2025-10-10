
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import FAQ from "./FAQ";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <FAQ />
      <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white">
                  <img 
                    src="/lovable-uploads/588aa5bf-d4eb-4eaa-8d1c-f75462913a23.png" 
                    alt="EULE Logo" 
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <h1 className="text-white font-bold text-2xl">EULE</h1>
                  <p className="text-red-500 text-sm">FOUNDED 2025</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md">
                {t('footer.description')}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a href="https://www.tiktok.com/@eule_pro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <span className="text-white font-bold text-sm">TT</span>
                </a>
                <a href="https://www.instagram.com/eulepro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@eulepro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/eulepro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/eulepro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">{t('footer.contact')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-gray-300">eulepro7@gmail.com</p>
                    <p className="text-gray-300">invest@eule.pro</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-gray-300">+49 163 3833120</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-gray-300">Essen, Deutschland</p>
                    <p className="text-gray-300">Kocaali, Türkei</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">{t('footer.quicklinks')}</h3>
              <div className="space-y-3">
                <a href="#team" className="block text-gray-300 hover:text-red-500 transition-colors">{t('nav.team')}</a>
                <a href="#technology" className="block text-gray-300 hover:text-red-500 transition-colors">{t('nav.technology')}</a>
                <a href="#partnerships" className="block text-gray-300 hover:text-red-500 transition-colors">{t('nav.partnerships')}</a>
                <a href="#membership" className="block text-gray-300 hover:text-red-500 transition-colors">{t('nav.membership')}</a>
                <a href="#club" className="block text-gray-300 hover:text-red-500 transition-colors">{t('nav.club')}</a>
                <a href="#shop" className="block text-gray-300 hover:text-red-500 transition-colors">{t('nav.shop')}</a>
                <a href="#grandprix" className="block text-gray-300 hover:text-red-500 transition-colors">{t('nav.grandprix')}</a>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  {t('footer.rights')}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {t('footer.made')}
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-red-500 font-semibold text-lg">
                  {t('footer.tagline')}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {t('hero.tagline')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
