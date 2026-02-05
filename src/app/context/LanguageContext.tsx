import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fa" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fa: {
    // Navbar
    home: "خانه",
    dashboard: "داشبورد زنده",
    academy: "آکادمی XO",
    tools: "ابزارخانه",
    security: "مرکز امنیت",
    iranianHub: "هاب ایرانیان",
    future: "آینده‌نگاری",
    library: "کتابخانه",
    community: "انجمن",
    marketplace: "بازار ابزارها",
    support: "پشتیبانی",
    
    // Home
    heroTitle: "دایره‌المعارف هوشمند کریپتو و فارکس",
    heroSubtitle: "کامل‌ترین مرجع فارسی برای تریدرهای ایرانی",
    heroDescription: "از صفر تا صد تحلیل تکنیکال و فاندامنتال، ابزارهای حرفه‌ای، آموزش‌های جامع و پشتیبانی 24/7",
    exploreDashboard: "مشاهده داشبورد زنده",
    startLearning: "شروع یادگیری",
    
    // Features
    features: "ویژگی‌های منحصر به فرد",
    feature1Title: "آموزش 10 سطحی",
    feature1Desc: "از مبتدی تا حرفه‌ای با بیش از 400 درس جامع",
    feature2Title: "ابزارهای هوشمند",
    feature2Desc: "ماشین‌حساب‌ها، نمودارها و تحلیلگرهای پیشرفته",
    feature3Title: "امنیت کامل",
    feature3Desc: "راهنمای جامع امنیت و تشخیص کلاهبرداری",
    feature4Title: "ویژه ایرانیان",
    feature4Desc: "راهنمای عبور از تحریم و صرافی‌های سازگار",
    
    // Stats
    lessons: "درس آموزشی",
    tools: "ابزار حرفه‌ای",
    articles: "مقاله تخصصی",
    users: "کاربر فعال",
    
    // Dashboard
    livePrices: "قیمت‌های لحظه‌ای",
    topCrypto: "10 ارز برتر کریپتو",
    topForex: "جفت ارزهای اصلی فارکس",
    price: "قیمت",
    change24h: "تغییرات 24 ساعت",
    marketCap: "ارزش بازار",
    volume24h: "حجم 24 ساعت",
    viewChart: "مشاهده نمودار",
    newsAndEvents: "اخبار و رویدادها",
    economicCalendar: "تقویم اقتصادی",
    
    // Academy
    academyTitle: "آکادمی XO - آموزش حرفه‌ای",
    academySubtitle: "مسیر یادگیری شما از صفر تا صد",
    level: "سطح",
    lessons: "درس",
    duration: "مدت زمان",
    startCourse: "شروع دوره",
    viewDetails: "مشاهده جزئیات",
    
    // Tools
    toolsTitle: "ابزارخانه حرفه‌ای",
    toolsSubtitle: "تمام ابزارهای مورد نیاز یک تریدر",
    calculators: "ماشین‌حساب‌ها",
    widgets: "ویجت‌های تعبیه‌شده",
    aiTools: "ابزارهای هوش مصنوعی",
    useTool: "استفاده از ابزار",
    
    // Security
    securityTitle: "مرکز امنیت و کلاهبرداری",
    securitySubtitle: "امنیت دارایی‌های دیجیتال شما اولویت ماست",
    securityGuide: "راهنمای امنیت کامل",
    scamDatabase: "دیتابیس کلاهبرداری‌ها",
    digitalSecurity: "آموزش امنیت دیجیتال",
    learnMore: "اطلاعات بیشتر",
    
    // Iranian Hub
    iranianTitle: "هاب ویژه ایرانیان",
    iranianSubtitle: "راهنمای کامل برای تریدرهای ایرانی",
    bypassGuide: "راهنمای عبور از تحریم",
    exchangeComparison: "مقایسه صرافی‌ها",
    p2pGuide: "راهنمای P2P امن",
    taxAndLaws: "مالیات و قوانین",
    
    // Future Insights
    futureTitle: "آینده‌نگاری بازار",
    futureSubtitle: "نگاهی به تکنولوژی‌های نوظهور و آینده بازارها",
    emergingTech: "تکنولوژی‌های نوظهور",
    marketAnalysis: "تحلیل آینده بازارها",
    aiInTrading: "هوش مصنوعی در ترید",
    
    // Library
    libraryTitle: "کتابخانه منابع",
    librarySubtitle: "دسترسی به بیش از 300 کتاب و 800 ساعت ویدیو",
    ebooks: "کتاب‌های الکترونیک",
    videos: "ویدیوهای آموزشی",
    research: "تحقیقات و گزارش‌ها",
    download: "دانلود",
    watch: "تماشا",
    read: "مطالعه",
    
    // Community
    communityTitle: "انجمن تریدرها",
    communitySubtitle: "به جامعه بزرگ تریدرهای ایرانی بپیوندید",
    forum: "فروم تخصصی",
    competitions: "مسابقات و چالش‌ها",
    networking: "نتورکینگ",
    joinDiscussion: "شرکت در بحث",
    
    // Marketplace
    marketplaceTitle: "بازار ابزارها",
    marketplaceSubtitle: "خرید و فروش ابزارهای معاملاتی",
    tradingBots: "ربات‌های معاملاتی",
    software: "نرم‌افزارهای تخصصی",
    services: "سرویس‌های حرفه‌ای",
    viewProduct: "مشاهده محصول",
    
    // Support
    supportTitle: "مرکز پشتیبانی",
    supportSubtitle: "همیشه در کنار شما هستیم",
    siteGuide: "آموزش استفاده از سایت",
    userSupport: "پشتیبانی کاربران",
    updates: "به‌روزرسانی‌ها",
    contactUs: "تماس با ما",
    
    // Footer
    aboutXO: "درباره XOLabs",
    aboutText: "XOLabs کامل‌ترین دایره‌المعارف فارسی کریپتو و فارکس است که توسط گروه mop - the mop community طراحی و توسعه یافته است.",
    quickLinks: "لینک‌های سریع",
    resources: "منابع",
    legal: "قوانین",
    privacy: "حریم خصوصی",
    terms: "شرایط استفاده",
    contact: "تماس با ما",
    email: "ایمیل",
    telegram: "تلگرام",
    allRights: "تمام حقوق محفوظ است",
    madeBy: "ساخته شده توسط",
    mopCommunity: "گروه mop - the mop community",
  },
  en: {
    // Navbar
    home: "Home",
    dashboard: "Live Dashboard",
    academy: "XO Academy",
    tools: "Tools Hub",
    security: "Security Center",
    iranianHub: "Iranian Hub",
    future: "Future Insights",
    library: "Library",
    community: "Community",
    marketplace: "Marketplace",
    support: "Support",
    
    // Home
    heroTitle: "Smart Crypto & Forex Encyclopedia",
    heroSubtitle: "The Most Complete Persian Resource for Iranian Traders",
    heroDescription: "From zero to hero in technical and fundamental analysis, professional tools, comprehensive training and 24/7 support",
    exploreDashboard: "Explore Live Dashboard",
    startLearning: "Start Learning",
    
    // Features
    features: "Unique Features",
    feature1Title: "10-Level Training",
    feature1Desc: "From beginner to professional with over 400 comprehensive lessons",
    feature2Title: "Smart Tools",
    feature2Desc: "Calculators, charts and advanced analyzers",
    feature3Title: "Complete Security",
    feature3Desc: "Comprehensive security guide and scam detection",
    feature4Title: "For Iranians",
    feature4Desc: "Sanctions bypass guide and compatible exchanges",
    
    // Stats
    lessons: "Training Lessons",
    tools: "Professional Tools",
    articles: "Specialized Articles",
    users: "Active Users",
    
    // Dashboard
    livePrices: "Live Prices",
    topCrypto: "Top 10 Cryptocurrencies",
    topForex: "Major Forex Pairs",
    price: "Price",
    change24h: "24h Change",
    marketCap: "Market Cap",
    volume24h: "24h Volume",
    viewChart: "View Chart",
    newsAndEvents: "News & Events",
    economicCalendar: "Economic Calendar",
    
    // Academy
    academyTitle: "XO Academy - Professional Training",
    academySubtitle: "Your Learning Path from Zero to Hero",
    level: "Level",
    lessons: "Lessons",
    duration: "Duration",
    startCourse: "Start Course",
    viewDetails: "View Details",
    
    // Tools
    toolsTitle: "Professional Tools Hub",
    toolsSubtitle: "All the Tools a Trader Needs",
    calculators: "Calculators",
    widgets: "Embedded Widgets",
    aiTools: "AI Tools",
    useTool: "Use Tool",
    
    // Security
    securityTitle: "Security & Scam Center",
    securitySubtitle: "Your Digital Asset Security is Our Priority",
    securityGuide: "Complete Security Guide",
    scamDatabase: "Scam Database",
    digitalSecurity: "Digital Security Training",
    learnMore: "Learn More",
    
    // Iranian Hub
    iranianTitle: "Iranian Traders Hub",
    iranianSubtitle: "Complete Guide for Iranian Traders",
    bypassGuide: "Sanctions Bypass Guide",
    exchangeComparison: "Exchange Comparison",
    p2pGuide: "Safe P2P Guide",
    taxAndLaws: "Tax & Laws",
    
    // Future Insights
    futureTitle: "Market Future Insights",
    futureSubtitle: "A Look at Emerging Technologies and Market Future",
    emergingTech: "Emerging Technologies",
    marketAnalysis: "Market Future Analysis",
    aiInTrading: "AI in Trading",
    
    // Library
    libraryTitle: "Resource Library",
    librarySubtitle: "Access to Over 300 Books and 800 Hours of Video",
    ebooks: "E-books",
    videos: "Training Videos",
    research: "Research & Reports",
    download: "Download",
    watch: "Watch",
    read: "Read",
    
    // Community
    communityTitle: "Traders Community",
    communitySubtitle: "Join the Large Community of Iranian Traders",
    forum: "Specialized Forum",
    competitions: "Competitions & Challenges",
    networking: "Networking",
    joinDiscussion: "Join Discussion",
    
    // Marketplace
    marketplaceTitle: "Tools Marketplace",
    marketplaceSubtitle: "Buy and Sell Trading Tools",
    tradingBots: "Trading Bots",
    software: "Specialized Software",
    services: "Professional Services",
    viewProduct: "View Product",
    
    // Support
    supportTitle: "Support Center",
    supportSubtitle: "Always Here for You",
    siteGuide: "Site Usage Guide",
    userSupport: "User Support",
    updates: "Updates",
    contactUs: "Contact Us",
    
    // Footer
    aboutXO: "About XOLabs",
    aboutText: "XOLabs is the most complete Persian crypto and forex encyclopedia designed and developed by mop group - the mop community.",
    quickLinks: "Quick Links",
    resources: "Resources",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms of Use",
    contact: "Contact",
    email: "Email",
    telegram: "Telegram",
    allRights: "All Rights Reserved",
    madeBy: "Made by",
    mopCommunity: "mop group - the mop community",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fa");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fa] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
