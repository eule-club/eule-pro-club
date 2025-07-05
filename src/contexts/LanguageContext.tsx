
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'de' | 'en' | 'tr' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Header
    'nav.team': 'Team',
    'nav.technology': 'Technologie',
    'nav.partnerships': 'Partnerschaften',
    'nav.membership': 'Membership',
    'nav.club': 'EULE Club',
    'nav.shop': 'EULE Shop',
    'nav.grandprix': 'EULE GrandPrix',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'EULE',
    'hero.subtitle': 'Das intelligenteste Elektro-Motorsport-Team der Welt',
    'hero.tagline': 'Engineering Speed. Creating Legends.',
    'hero.description': 'Wo Mathematik auf Maschinen trifft, wo High-Tech auf Leidenschaft trifft.',
    'hero.cta.partner': 'Jetzt Partner werden',
    'hero.cta.membership': 'EULE Membership',
    'hero.stats.power': '816 PS Leistung',
    'hero.stats.acceleration': '0-100 km/h',
    'hero.stats.ai': 'KI-basiert',
    'hero.stats.ai.desc': 'Fahrerassistenzsystem',
    
    // Founder Section
    'founder.title': 'Gründerin & Rennteamleiterin',
    'founder.name': 'Hatice Tavlı',
    'founder.roles': 'Mathematikerin. Ingenieurin. Medizinwissenschaftlerin. Rennteam Leiterin.',
    'founder.vision.title': 'Vision',
    'founder.vision.statement': 'Mein Traum: die schnellste Frau der Welt werden.',
    'founder.quote': 'Ich bin hier, um zu beweisen, dass Technologie Herz haben kann – und Geschwindigkeit Intelligenz.',
    'founder.expertise': 'Fachgebiete',
    'founder.optimization': 'Optimierung',
    'founder.optimization.desc': 'Nichtglatte & nichtkonvexe Optimierung',
    'founder.battery': 'Batterietechnologie',
    'founder.battery.desc': 'Elektrosysteme & Energieverteilung',
    'founder.medical': 'Medizin & Diagnostik',
    'founder.medical.desc': 'Medizinwissenschaft & Systemdiagnostik',
    'founder.ai': 'KI & Simulation',
    'founder.ai.desc': 'Medizinische KI & Systemdiagnostik',
    'founder.inventor': 'Multidisziplinäre Erfinderin',
    'founder.inventor.desc': 'Kombination aus mathematischer Optimierung, Sensordatenanalyse und Maschinenintelligenz für ein lernendes Fahrzeug.',
    
    // Footer
    'footer.description': 'Das intelligenteste Elektro-Motorsport-Team der Welt. Wo Mathematik auf Maschinen trifft, wo High-Tech auf Leidenschaft trifft.',
    'footer.contact': 'Kontakt',
    'footer.quicklinks': 'Quick Links',
    'footer.rights': '© 2025 EULE. Alle Rechte vorbehalten.',
    'footer.made': '🇩🇪 German Engineering x 🇹🇷 Made in Turkey',
    'footer.tagline': 'Let\'s Engineer The Future. Together.',
  },
  en: {
    // Header
    'nav.team': 'Team',
    'nav.technology': 'Technology',
    'nav.partnerships': 'Partnerships',
    'nav.membership': 'Membership',
    'nav.club': 'EULE Club',
    'nav.shop': 'EULE Shop',
    'nav.grandprix': 'EULE GrandPrix',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'EULE',
    'hero.subtitle': 'The World\'s Most Intelligent Electric Motorsport Team',
    'hero.tagline': 'Engineering Speed. Creating Legends.',
    'hero.description': 'Where Mathematics Meets Machines, Where High-Tech Meets Passion.',
    'hero.cta.partner': 'Become a Partner',
    'hero.cta.membership': 'EULE Membership',
    'hero.stats.power': '816 HP Power',
    'hero.stats.acceleration': '0-100 km/h',
    'hero.stats.ai': 'AI-based',
    'hero.stats.ai.desc': 'Driver Assistance System',
    
    // Founder Section
    'founder.title': 'Founder & Racing Team Leader',
    'founder.name': 'Hatice Tavlı',
    'founder.roles': 'Mathematician. Engineer. Medical Scientist. Racing Team Leader.',
    'founder.vision.title': 'Vision',
    'founder.vision.statement': 'My dream: to become the fastest woman in the world.',
    'founder.quote': 'I\'m here to prove that technology can have heart – and speed can have intelligence.',
    'founder.expertise': 'Expertise Areas',
    'founder.optimization': 'Optimization',
    'founder.optimization.desc': 'Non-smooth & non-convex optimization',
    'founder.battery': 'Battery Technology',
    'founder.battery.desc': 'Electric systems & energy distribution',
    'founder.medical': 'Medicine & Diagnostics',
    'founder.medical.desc': 'Medical science & system diagnostics',
    'founder.ai': 'AI & Simulation',
    'founder.ai.desc': 'Medical AI & system diagnostics',
    'founder.inventor': 'Multidisciplinary Inventor',
    'founder.inventor.desc': 'Combination of mathematical optimization, sensor data analysis and machine intelligence for a learning vehicle.',
    
    // Footer
    'footer.description': 'The world\'s most intelligent electric motorsport team. Where mathematics meets machines, where high-tech meets passion.',
    'footer.contact': 'Contact',
    'footer.quicklinks': 'Quick Links',
    'footer.rights': '© 2025 EULE. All rights reserved.',
    'footer.made': '🇩🇪 German Engineering x 🇹🇷 Made in Turkey',
    'footer.tagline': 'Let\'s Engineer The Future. Together.',
  },
  tr: {
    // Header
    'nav.team': 'Takım',
    'nav.technology': 'Teknoloji',
    'nav.partnerships': 'Ortaklıklar',
    'nav.membership': 'Üyelik',
    'nav.club': 'EULE Kulüp',
    'nav.shop': 'EULE Mağaza',
    'nav.grandprix': 'EULE GrandPrix',
    'nav.contact': 'İletişim',
    
    // Hero Section
    'hero.title': 'EULE',
    'hero.subtitle': 'Dünyanın En Zeki Elektrikli Motorsport Takımı',
    'hero.tagline': 'Mühendislik Hızı. Efsane Yaratmak.',
    'hero.description': 'Matematiğin Makinelerle Buluştuğu, Yüksek Teknolojinin Tutkuyla Buluştuğu Yer.',
    'hero.cta.partner': 'Ortak Ol',
    'hero.cta.membership': 'EULE Üyelik',
    'hero.stats.power': '816 HP Güç',
    'hero.stats.acceleration': '0-100 km/s',
    'hero.stats.ai': 'AI-tabanlı',
    'hero.stats.ai.desc': 'Sürücü Destek Sistemi',
    
    // Founder Section
    'founder.title': 'Kurucu & Yarış Takımı Lideri',
    'founder.name': 'Hatice Tavlı',
    'founder.roles': 'Matematikçi. Mühendis. Tıp Bilimci. Yarış Takımı Lideri.',
    'founder.vision.title': 'Vizyon',
    'founder.vision.statement': 'Hayalim: dünyanın en hızlı kadını olmak.',
    'founder.quote': 'Teknolojinin kalbi olabileceğini – ve hızın zekası olabileceğini kanıtlamak için buradayım.',
    'founder.expertise': 'Uzmanlık Alanları',
    'founder.optimization': 'Optimizasyon',
    'founder.optimization.desc': 'Düzgün olmayan ve dışbükey olmayan optimizasyon',
    'founder.battery': 'Batarya Teknolojisi',
    'founder.battery.desc': 'Elektrik sistemleri ve enerji dağıtımı',
    'founder.medical': 'Tıp & Tanılama',
    'founder.medical.desc': 'Tıp bilimi & sistem tanılamaları',
    'founder.ai': 'AI ve Simülasyon',
    'founder.ai.desc': 'Tıbbi AI ve sistem tanılamaları',
    'founder.inventor': 'Multidisipliner Mucit',
    'founder.inventor.desc': 'Öğrenen bir araç için matematiksel optimizasyon, sensör veri analizi ve makine zekasının kombinasyonu.',
    
    // Footer
    'footer.description': 'Dünyanın en zeki elektrikli motorsport takımı. Matematiğin makinelerle buluştuğu, yüksek teknolojinin tutkuyla buluştuğu yer.',
    'footer.contact': 'İletişim',
    'footer.quicklinks': 'Hızlı Bağlantılar',
    'footer.rights': '© 2025 EULE. Tüm hakları saklıdır.',
    'footer.made': '🇩🇪 Alman Mühendisliği x 🇹🇷 Türkiye\'de Yapıldı',
    'footer.tagline': 'Geleceği Birlikte Mühendislik Edelim.',
  },
  ja: {
    // Header
    'nav.team': 'チーム',
    'nav.technology': 'テクノロジー',
    'nav.partnerships': 'パートナーシップ',
    'nav.membership': 'メンバーシップ',
    'nav.club': 'EULEクラブ',
    'nav.shop': 'EULEショップ',
    'nav.grandprix': 'EULEグランプリ',
    'nav.contact': 'お問い合わせ',
    
    // Hero Section
    'hero.title': 'EULE',
    'hero.subtitle': '世界で最もインテリジェントな電気モータースポーツチーム',
    'hero.tagline': 'スピードを設計する。伝説を創造する。',
    'hero.description': '数学と機械が出会う場所、ハイテクと情熱が出会う場所。',
    'hero.cta.partner': 'パートナーになる',
    'hero.cta.membership': 'EULEメンバーシップ',
    'hero.stats.power': '816馬力',
    'hero.stats.acceleration': '0-100 km/h',
    'hero.stats.ai': 'AI搭載',
    'hero.stats.ai.desc': 'ドライバーアシストシステム',
    
    // Founder Section
    'founder.title': '創設者・レーシングチームリーダー',
    'founder.name': 'ハティジェ・タヴル',
    'founder.roles': '数学者。エンジニア。医学研究者。レーシングチームリーダー。',
    'founder.vision.title': 'ビジョン',
    'founder.vision.statement': '私の夢：世界最速の女性になること。',
    'founder.quote': 'テクノロジーがハートを持てることを、そしてスピードがインテリジェンスを持てることを証明するためにここにいます。',
    'founder.expertise': '専門分野',
    'founder.optimization': '最適化',
    'founder.optimization.desc': '非平滑・非凸最適化',
    'founder.battery': 'バッテリー技術',
    'founder.battery.desc': '電気システムとエネルギー配分',
    'founder.medical': '医学・診断',
    'founder.medical.desc': '医学研究とシステム診断',
    'founder.ai': 'AIとシミュレーション',
    'founder.ai.desc': '医療AIとシステム診断',
    'founder.inventor': '学際的発明家',
    'founder.inventor.desc': '学習する車両のための数学的最適化、センサーデータ分析、機械知能の組み合わせ。',
    
    // Footer
    'footer.description': '世界で最もインテリジェントな電気モータースポーツチーム。数学と機械が出会う場所、ハイテクと情熱が出会う場所。',
    'footer.contact': 'お問い合わせ',
    'footer.quicklinks': 'クイックリンク',
    'footer.rights': '© 2025 EULE. 全著作権所有。',
    'footer.made': '🇩🇪 ドイツエンジニアリング x 🇹🇷 トルコ製',
    'footer.tagline': '一緒に未来を設計しましょう。',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
