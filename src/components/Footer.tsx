
import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🦉</span>
                </div>
                <div>
                  <h1 className="text-white font-bold text-2xl">EULE</h1>
                  <p className="text-red-500 text-sm">FOUNDED 2025</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md">
                Das intelligenteste Elektro-Motorsport-Team der Welt. 
                Wo Mathematik auf Maschinen trifft, wo High-Tech auf Leidenschaft trifft.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-gray-300">eulepro7@gmail.com</p>
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
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#team" className="block text-gray-300 hover:text-red-500 transition-colors">Team</a>
                <a href="#technology" className="block text-gray-300 hover:text-red-500 transition-colors">Technologie</a>
                <a href="#partnerships" className="block text-gray-300 hover:text-red-500 transition-colors">Partnerschaften</a>
                <a href="#membership" className="block text-gray-300 hover:text-red-500 transition-colors">Membership</a>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2025 EULE. Alle Rechte vorbehalten.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  🇩🇪 German Engineering x 🇹🇷 Made in Turkey
                </p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-red-500 font-semibold text-lg">
                  Let's Engineer The Future. Together.
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Engineering Speed. Creating Legends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
