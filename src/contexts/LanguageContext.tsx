
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
    'nav.vision': 'Vision & Mission',
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
    
    // Vision & Mission
    'vision.hero.title': 'Vision & Mission',
    'vision.hero.subtitle': 'Die Geschichte hinter EULE und unsere Vision für die Zukunft des Elektro-Motorsports',
    'vision.story.title': 'Die EULE Geschichte',
    'vision.story.owl.title': 'Der Steinkautz von Grugapark',
    'vision.story.owl.description': 'Das EULE Logo ist ein zutiefst persönliches und einzigartiges Symbol, geschaffen von Hatice und inspiriert von einem besonderen Steinkautz, der im Grugapark Essen lebt. Diese besondere Eule hat eine charmante Eigenart: Sie wendet ihren Kopf ab, wann immer Hatice sie besucht und zeigt dabei einen spielerischen, fast distanzierten Charme. Fasziniert von der Persönlichkeit und Eleganz dieses Wesens, fing Hatice dessen Essenz im EULE Logo ein und schuf ein Design, das die stille Stärke, Unabhängigkeit und Raffinesse der Eule widerspiegelt.',
    'vision.story.meaning.title': 'Was EULE bedeutet',
    'vision.story.meaning.description': 'EULE bedeutet Eule auf Deutsch. Unser Team und Marken-Repräsentant als Geistertier. Die Eule ist ein kraftvolles Symbol für ein Hochleistungs-Sportteam und repräsentiert eine Mischung aus Weisheit, Ausdauer, Anpassungsfähigkeit, Präzision, Führung und Dominanz.',
    'vision.story.values.wisdom': 'Weisheit',
    'vision.story.values.precision': 'Präzision',  
    'vision.story.values.focus': 'Fokus',
    'vision.story.values.leadership': 'Führung',
    'vision.section.title': 'Unsere Vision',
    'vision.pillars.speed.title': 'Geschwindigkeit neu definieren',
    'vision.pillars.speed.description': 'Das weltweit schnellste beschleunigende Elektro-Rennfahrzeug entwickeln - 0-100 km/h in 1,5 Sekunden.',
    'vision.pillars.intelligence.title': 'Intelligenz integrieren',
    'vision.pillars.intelligence.description': 'Mathematik, KI und maschinelles Lernen für optimale Fahrzeugdynamik und Fahrerassistenz einsetzen.',
    'vision.pillars.sustainability.title': 'Nachhaltigkeit vorantreiben',
    'vision.pillars.sustainability.description': 'Innovative Batterietechnologie für doppelte Reichweite und optimale Energieeffizienz entwickeln.',
    'vision.quote': 'Mein Traum: Die schnellste Frau der Welt werden und beweisen, dass Technologie Herz haben kann.',
    'mission.section.title': 'Unsere Mission',
    'mission.description': 'EULE ist nicht nur ein Auto - es ist eine Bewegung. Wir entwickeln die nächste Generation des Elektro-Motorsports durch angewandte Mathematik, innovative Technik und leidenschaftliche Hingabe zur Exzellenz.',
    'mission.goals.technical.title': 'Technische Ziele',
    'mission.goals.technical.point1': '816 PS Leistung durch 6 unabhängige Radnabenmotoren',
    'mission.goals.technical.point2': '12-Zylinder modulares Batteriesystem für doppelte Reichweite',
    'mission.goals.technical.point3': 'Echtzeit-Fahrerassistenzsystem mit selbstlernenden neuronalen Netzen',
    'mission.goals.impact.title': 'Gesellschaftlicher Einfluss',
    'mission.goals.impact.point1': 'Frauen im Motorsport und MINT-Bereichen inspirieren',
    'mission.goals.impact.point2': 'Grenzen der Elektromobilität verschieben',
    'mission.goals.impact.point3': 'Deutsche Ingenieurskunst mit türkischer Innovation verbinden',
    'vision.cta.title': 'Werde Teil der EULE Vision',
    'vision.cta.description': 'Gemeinsam gestalten wir die Zukunft des Elektro-Motorsports. Schließe dich uns an und erlebe, wie Mathematik auf Maschinen trifft.',
    'vision.cta.button': 'Partner werden',
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
    'nav.vision': 'Vision & Mission',
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
    
    // Vision & Mission
    'vision.hero.title': 'Vision & Mission',
    'vision.hero.subtitle': 'The story behind EULE and our vision for the future of electric motorsport',
    'vision.story.title': 'The EULE Story',
    'vision.story.owl.title': 'The Little Owl of Grugapark',
    'vision.story.owl.description': 'The EULE logo is a deeply personal and unique symbol, crafted by Hatice and inspired by a specific Little Owl that resides in Grugapark, Essen. This particular owl has an endearing habit: it turns its head away whenever Hatice visits, offering a playful, almost aloof charm. Intrigued by this creature\'s personality and elegance, Hatice captured its essence in the EULE logo, creating a design that mirrors the owl\'s quiet strength, independence, and sophistication.',
    'vision.story.meaning.title': 'What EULE Means',
    'vision.story.meaning.description': 'EULE means owl in German. Our team and brand representative spirit animal. The owl is a powerful symbol for a high-performance sports team, representing a blend of wisdom, endurance, adaptability, precision, leadership and dominance.',
    'vision.story.values.wisdom': 'Wisdom',
    'vision.story.values.precision': 'Precision',
    'vision.story.values.focus': 'Focus',
    'vision.story.values.leadership': 'Leadership',
    'vision.section.title': 'Our Vision',
    'vision.pillars.speed.title': 'Redefine Speed',
    'vision.pillars.speed.description': 'Build the world\'s fastest accelerating electric race car - 0-100 km/h in 1.5 seconds.',
    'vision.pillars.intelligence.title': 'Integrate Intelligence',
    'vision.pillars.intelligence.description': 'Apply mathematics, AI, and machine learning for optimal vehicle dynamics and driver assistance.',
    'vision.pillars.sustainability.title': 'Drive Sustainability',
    'vision.pillars.sustainability.description': 'Develop innovative battery technology for double range and optimal energy efficiency.',
    'vision.quote': 'My dream: to become the fastest woman in the world and prove that technology can have heart.',
    'mission.section.title': 'Our Mission',
    'mission.description': 'EULE is not just a car - it\'s a movement. We\'re developing the next generation of electric motorsport through applied mathematics, innovative engineering, and passionate commitment to excellence.',
    'mission.goals.technical.title': 'Technical Goals',
    'mission.goals.technical.point1': '816 HP performance through 6 independent hub motors',
    'mission.goals.technical.point2': '12-cylinder modular battery system for double range',
    'mission.goals.technical.point3': 'Real-time driver assistance with self-learning neural networks',
    'mission.goals.impact.title': 'Social Impact',
    'mission.goals.impact.point1': 'Inspire women in motorsport and STEM fields',
    'mission.goals.impact.point2': 'Push the boundaries of electric mobility',
    'mission.goals.impact.point3': 'Combine German engineering with Turkish innovation',
    'vision.cta.title': 'Join the EULE Vision',
    'vision.cta.description': 'Together, we\'re shaping the future of electric motorsport. Join us and experience where mathematics meets machines.',
    'vision.cta.button': 'Become a Partner',
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
    'nav.vision': 'Vizyon & Misyon',
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
    
    // Vision & Mission
    'vision.hero.title': 'Vizyon & Misyon',
    'vision.hero.subtitle': 'EULE\'nin arkasındaki hikaye ve elektrikli motorsporun geleceği için vizyonumuz',
    'vision.story.title': 'EULE Hikayesi',
    'vision.story.owl.title': 'Grugapark\'ın Küçük Baykuşu',
    'vision.story.owl.description': 'EULE logosu derinden kişisel ve eşsiz bir sembol olup, Hatice tarafından yaratılmış ve Grugapark Essen\'de yaşayan özel bir Steinkautz\'tan ilham almıştır. Bu özel baykuş sevimli bir alışkanlığa sahiptir: Hatice onu ziyaret ettiğinde başını çevirir, oyunbaz, neredeyse mesafeli bir çekicilik sunar. Bu yaratığın kişiliği ve zarafetiyle büyülenen Hatice, onun özünü EULE logosunda yakalamış ve baykuşun sessiz gücünü, bağımsızlığını ve inceliğini yansıtan bir tasarım yaratmıştır.',
    'vision.story.meaning.title': 'EULE Ne Anlama Geliyor',
    'vision.story.meaning.description': 'EULE Almanca\'da baykuş demektir. Takımımızın ve markanın temsili ruh hayvanımız. Baykuş, yüksek performanslı spor takımı için güçlü bir sembol olup, bilgelik, dayanıklılık, uyum sağlama, hassasiyet, liderlik ve hakimiyetin karışımını temsil eder.',
    'vision.story.values.wisdom': 'Bilgelik',
    'vision.story.values.precision': 'Hassasiyet',
    'vision.story.values.focus': 'Odaklanma',
    'vision.story.values.leadership': 'Liderlik',
    'vision.section.title': 'Vizyonumuz',
    'vision.pillars.speed.title': 'Hızı Yeniden Tanımlamak',
    'vision.pillars.speed.description': 'Dünyanın en hızlı hızlanan elektrikli yarış arabasını geliştirmek - 0-100 km/s 1,5 saniyede.',
    'vision.pillars.intelligence.title': 'Zekayı Entegre Etmek',
    'vision.pillars.intelligence.description': 'Optimal araç dinamiği ve sürücü yardımı için matematik, AI ve makine öğrenimini uygulamak.',
    'vision.pillars.sustainability.title': 'Sürdürülebilirliği İlerletmek',
    'vision.pillars.sustainability.description': 'Çifte menzil ve optimal enerji verimliliği için yenilikçi batarya teknolojisi geliştirmek.',
    'vision.quote': 'Hayalim: Dünyanın en hızlı kadını olmak ve teknolojinin kalbi olabileceğini kanıtlamak.',
    'mission.section.title': 'Misyonumuz',
    'mission.description': 'EULE sadece bir araba değil - bir harekettir. Uygulamalı matematik, yenilikçi mühendislik ve mükemmeliyete tutkulu bağlılık ile elektrikli motorsporun yeni nesli geliştiriyoruz.',
    'mission.goals.technical.title': 'Teknik Hedefler',
    'mission.goals.technical.point1': '6 bağımsız tekerlek motoru ile 816 HP performans',
    'mission.goals.technical.point2': 'Çifte menzil için 12 silindirli modüler batarya sistemi',
    'mission.goals.technical.point3': 'Kendi kendini öğrenen sinir ağları ile gerçek zamanlı sürücü yardımı',
    'mission.goals.impact.title': 'Sosyal Etki',
    'mission.goals.impact.point1': 'Motorsporunda ve STEM alanlarında kadınlara ilham vermek',
    'mission.goals.impact.point2': 'Elektrikli mobilitenin sınırlarını zorlamak',
    'mission.goals.impact.point3': 'Alman mühendisliğini Türk inovasyonu ile birleştirmek',
    'vision.cta.title': 'EULE Vizyonuna Katılın',
    'vision.cta.description': 'Birlikte elektrikli motorsporun geleceğini şekillendiriyoruz. Bize katılın ve matematiğin makinelerle buluştuğu yeri deneyimleyin.',
    'vision.cta.button': 'Ortak Olun',
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
    'nav.vision': 'ビジョン & ミッション',
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
    
    // Vision & Mission
    'vision.hero.title': 'ビジョン & ミッション',
    'vision.hero.subtitle': 'EULEの背後にあるストーリーと電気モータースポーツの未来への私たちのビジョン',
    'vision.story.title': 'EULEストーリー',
    'vision.story.owl.title': 'グルーパークの小さなフクロウ',
    'vision.story.owl.description': 'EULEロゴは深く個人的でユニークなシンボルであり、ハティジェによって作られ、エッセンのグルーパークに住む特別なコキンメフクロウからインスピレーションを得ています。この特別なフクロウには愛らしい習慣があります：ハティジェが訪れるたびに頭を逸らし、遊び心のある、ほとんど素っ気ない魅力を提供します。この生き物の個性と優雅さに魅了されたハティジェは、その本質をEULEロゴに捉え、フクロウの静かな強さ、独立性、洗練を反映するデザインを作成しました。',
    'vision.story.meaning.title': 'EULEの意味',
    'vision.story.meaning.description': 'EULEはドイツ語でフクロウを意味します。私たちのチームとブランドの代表的なスピリットアニマルです。フクロウは高性能スポーツチームにとって強力なシンボルであり、知恵、持久力、適応性、精密性、リーダーシップ、支配力のブレンドを表しています。',
    'vision.story.values.wisdom': '知恵',
    'vision.story.values.precision': '精密性',
    'vision.story.values.focus': '集中',
    'vision.story.values.leadership': 'リーダーシップ',
    'vision.section.title': '私たちのビジョン',
    'vision.pillars.speed.title': 'スピードを再定義する',
    'vision.pillars.speed.description': '世界最速の加速電気レースカーを構築する - 0-100km/hを1.5秒で。',
    'vision.pillars.intelligence.title': '知能を統合する',
    'vision.pillars.intelligence.description': '最適な車両動力学とドライバーアシストのための数学、AI、機械学習の適用。',
    'vision.pillars.sustainability.title': '持続可能性を推進する',
    'vision.pillars.sustainability.description': '倍の航続距離と最適なエネルギー効率のための革新的バッテリー技術の開発。',
    'vision.quote': '私の夢：世界最速の女性になり、テクノロジーがハートを持てることを証明すること。',
    'mission.section.title': '私たちのミッション',
    'mission.description': 'EULEは単なる車ではありません - それは運動です。応用数学、革新的エンジニアリング、そして卓越性への情熱的なコミットメントを通じて、電気モータースポーツの次世代を開発しています。',
    'mission.goals.technical.title': '技術目標',
    'mission.goals.technical.point1': '6つの独立ハブモーターによる816馬力パフォーマンス',
    'mission.goals.technical.point2': '倍の航続距離のための12シリンダーモジュラーバッテリーシステム',
    'mission.goals.technical.point3': '自己学習ニューラルネットワークによるリアルタイムドライバーアシスト',
    'mission.goals.impact.title': '社会的影響',
    'mission.goals.impact.point1': 'モータースポーツとSTEM分野の女性にインスピレーションを与える',
    'mission.goals.impact.point2': '電気モビリティの境界を押し広げる',
    'mission.goals.impact.point3': 'ドイツエンジニアリングとトルコイノベーションの結合',
    'vision.cta.title': 'EULEビジョンに参加',
    'vision.cta.description': '一緒に電気モータースポーツの未来を形作っています。私たちに参加し、数学が機械と出会う場所を体験してください。',
    'vision.cta.button': 'パートナーになる',
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
