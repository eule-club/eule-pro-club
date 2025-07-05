
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-red-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🦉</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl">EULE</h1>
              <p className="text-red-500 text-sm">FOUNDED 2025</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#team" className="text-white hover:text-red-500 transition-colors">Team</a>
            <a href="#technology" className="text-white hover:text-red-500 transition-colors">Technologie</a>
            <a href="#partnerships" className="text-white hover:text-red-500 transition-colors">Partnerschaften</a>
            <a href="#membership" className="text-white hover:text-red-500 transition-colors">Membership</a>
            <a href="#contact" className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all">
              Kontakt
            </a>
          </nav>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-red-500/20">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#team" className="text-white hover:text-red-500 transition-colors">Team</a>
              <a href="#technology" className="text-white hover:text-red-500 transition-colors">Technologie</a>
              <a href="#partnerships" className="text-white hover:text-red-500 transition-colors">Partnerschaften</a>
              <a href="#membership" className="text-white hover:text-red-500 transition-colors">Membership</a>
              <a href="#contact" className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition-all inline-block text-center">
                Kontakt
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
