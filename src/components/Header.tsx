
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-red-500/20 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/588aa5bf-d4eb-4eaa-8d1c-f75462913a23.png" 
                alt="EULE Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-black font-bold text-2xl">EULE</h1>
              <p className="text-red-500 text-sm">FOUNDED 2025</p>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/team" className="text-gray-700 hover:text-red-500 transition-colors text-sm font-medium">
              {t('nav.team')}
            </Link>
            <Link to="/vision-mission" className="text-gray-700 hover:text-red-500 transition-colors text-sm font-medium">
              {t('nav.vision')}
            </Link>
            <Link to="/roadmap" className="text-gray-700 hover:text-red-500 transition-colors text-sm font-medium">
              Roadmap
            </Link>
            <Link to="/technical-specs" className="text-gray-700 hover:text-red-500 transition-colors text-sm font-medium">
              Technologie
            </Link>
            <a href="#partnerships" className="text-gray-700 hover:text-red-500 transition-colors text-sm font-medium">
              {t('nav.partnerships')}
            </a>
            <Link to="/eule-club" className="text-gray-700 hover:text-red-500 transition-colors text-sm font-medium">
              EULE Club
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-red-500 transition-colors text-sm font-medium bg-transparent">
                    EULE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/eule-club" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-500">
                            <div className="text-sm font-medium leading-none">EULE Club</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="https://sponsor.eule.pro" target="_blank" rel="noopener noreferrer" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-500">
                            <div className="text-sm font-medium leading-none">EULE Sponsor</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/eule-pro" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-500">
                            <div className="text-sm font-medium leading-none">EULE Car</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/eule-system" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-500">
                            <div className="text-sm font-medium leading-none">EULE System</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/shop" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-500">
                            <div className="text-sm font-medium leading-none">EULE Shop</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#grandprix" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-500">
                            <div className="text-sm font-medium leading-none">EULE GrandPrix</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <LanguageSelector />
            <a href="#contact" className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all text-sm font-medium">
              {t('nav.contact')}
            </a>
          </nav>
          
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-red-500/20">
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/team" className="text-gray-700 hover:text-red-500 transition-colors">{t('nav.team')}</Link>
              <Link to="/vision-mission" className="text-gray-700 hover:text-red-500 transition-colors">{t('nav.vision')}</Link>
              <Link to="/roadmap" className="text-gray-700 hover:text-red-500 transition-colors">Roadmap</Link>
              <Link to="/technical-specs" className="text-gray-700 hover:text-red-500 transition-colors">Technologie</Link>
              <a href="#partnerships" className="text-gray-700 hover:text-red-500 transition-colors">{t('nav.partnerships')}</a>
              <Link to="/eule-club" className="text-gray-700 hover:text-red-500 transition-colors">EULE Club</Link>
              <a href="https://sponsor.eule.pro" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500 transition-colors">EULE Sponsor</a>
              <Link to="/eule-pro" className="text-gray-700 hover:text-red-500 transition-colors">EULE Car</Link>
              <Link to="/eule-system" className="text-gray-700 hover:text-red-500 transition-colors">EULE System</Link>
              <Link to="/shop" className="text-gray-700 hover:text-red-500 transition-colors">EULE Shop</Link>
              <a href="#grandprix" className="text-gray-700 hover:text-red-500 transition-colors">EULE GrandPrix</a>
              <div className="pt-2">
                <LanguageSelector />
              </div>
              <a href="#contact" className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all inline-block text-center">
                {t('nav.contact')}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
