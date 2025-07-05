
import { Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷' },
    { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLanguage?.flag} {currentLanguage?.name}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 min-w-[150px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 ${
                language === lang.code ? 'bg-red-50 text-red-600' : 'text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
