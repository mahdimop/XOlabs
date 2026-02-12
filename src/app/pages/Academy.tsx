import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion"; // اصلاح import (فرض بر این است که motion از framer-motion است)
import {
  BookOpen,
  TrendingUp,
  BarChart3,
  Target,
  Shield,
  Lightbulb,
  Award,
  Rocket,
  Brain,
  Trophy,
  Clock,
  CheckCircle2,
  ExternalLink,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";

export default function Academy() {
  const { t } = useLanguage();
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const levels = [
    {
      level: 1,
      title: "الفبای بازارها",
      subtitle: "مبانی اولیه کریپتو و فارکس",
      icon: BookOpen,
      color: "#8A2BE2",
      lessons: 30,
      duration: "20 ساعت",
      description: "در این سطح با مفاهیم پایه بلاکچین، ارزهای دیجیتال، بازار فارکس و اصول اولیه معامله‌گری آشنا می‌شوید.",
      topics: [
        "بلاکچین از صفر - مفاهیم اولیه و کاربردها",
        "فارکس چیست؟ - آشنایی با بازار ارز",
        "انواع بازارهای مالی - سهام، کالا، ارز و کریپتو",
        "روانشناسی اولیه معامله‌گری",
        "ساخت کیف پول و امنیت اولیه",
        "آشنایی با صرافی‌ها و پلتفرم‌های معاملاتی",
      ],
      resources: [
        { name: "کتاب: مبانی بلاکچین", link: "https://www.binance.com/en/academy" },
        { name: "ویدیو: فارکس برای مبتدیان", link: "https://www.youtube.com/results?search_query=forex+basics+beginners" },
      ]
    },
    {
      level: 2,
      title: "تحلیل تکنیکال مقدماتی",
      subtitle: "خواندن نمودارها و الگوهای قیمت",
      icon: TrendingUp,
      color: "#00D4FF",
      lessons: 40,
      duration: "30 ساعت",
      description: "یادگیری نحوه خواندن نمودارها، شناسایی روندها و درک حرکات قیمت در بازار.",
      topics: [
        "کندل‌شناسی حرفه‌ای - 50 الگوی شمعی مهم",
        "خطوط روند و کانال‌های قیمتی",
        "حمایت و مقاومت دینامیک و استاتیک",
        "حجم معاملات و تحلیل آن",
        "تایم فریم‌ها و استراتژی‌های مختلف",
        "الگوهای قیمت کلاسیک",
      ],
      resources: [
        { name: "راهنمای کامل کندل استیک", link: "https://www.investopedia.com/trading/candlestick-charting-what-is-it" },
        { name: "تمرین‌های عملی تحلیل نمودار", link: "https://www.babypips.com/learn/forex" },
      ]
    },
    {
      level: 3,
      title: "اندیکاتورهای پایه",
      subtitle: "ابزارهای تحلیل تکنیکال",
      icon: BarChart3,
      color: "#8A2BE2",
      lessons: 35,
      duration: "25 ساعت",
      description: "آشنایی با مهم‌ترین اندیکاتورها و نحوه استفاده از آن‌ها در تحلیل بازار.",
      topics: [
        "میانگین متحرک (SMA, EMA, WMA)",
        "RSI پیشرفته - تشخیص واگرایی‌ها",
        "MACD و کاربردهای آن",
        "بولینگر بندز و استراتژی‌های معاملاتی",
        "Stochastic Oscillator",
        "Fibonacci Retracement و Extensions",
      ],
      resources: [
        { name: "آموزش کامل RSI", link: "https://www.investopedia.com/terms/r/rsi.asp" },
        { name: "استراتژی‌های MACD", link: "https://www.tradingview.com/support/solutions/43000502344-macd-moving-average-convergence-divergence/" },
      ]
    },
    {
      level: 4,
      title: "الگوهای نموداری",
      subtitle: "شناسایی الگوهای کلاسیک و هارمونیک",
      icon: Target,
      color: "#00D4FF",
      lessons: 50,
      duration: "40 ساعت",
      description: "تسلط بر شناسایی و معامله با الگوهای نموداری کلاسیک، هارمونیک و پرایس اکشن.",
      topics: [
        "الگوهای کلاسیک - سر و شانه، مثلث، پرچم",
        "الگوهای هارمونیک - گارتلی، باترفلای، کرب، بت",
        "الگوهای شمعی ژاپنی پیشرفته",
        "پرایس اکشن و Smart Money Concept",
        "الگوهای بازگشتی و ادامه‌دهنده",
        "تحلیل چند تایم فریمی",
      ],
      resources: [
        { name: "آموزش الگوهای هارمونیک", link: "https://www.youtube.com/results?search_query=harmonic+patterns+trading" },
        { name: "کتاب الگوهای نموداری", link: "https://www.investopedia.com/trading/using-bullish-candlestick-patterns-buy-stocks/" },
      ]
    },
    // سطوح دیگر بدون تغییر در ساختار (فقط نمونه لینک‌ها در سطح ۱ و ۲ کمی به‌روز شدند)
    // ... بقیه سطوح همانند کد اصلی شما باقی می‌مانند ...
    // برای کوتاه کردن پاسخ، فقط ساختار کلی و تغییرات را نشان می‌دهم. بقیه سطوح دقیقاً همانند کد اولیه هستند.
  ];

  // توجه: در کد کامل، تمام سطوح (۵ تا ۱۰) را همانند کد اصلی خودتان کپی کنید.
  // اینجا فقط برای نمونه دو سطح اول را گذاشتم.

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header - بدون تغییر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <BookOpen className="w-20 h-20 text-[#8A2BE2] mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("academyTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("academySubtitle")}
          </p>
        </motion.div>

        {/* Learning Path - بدون تغییر در ساختار کلی */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8A2BE2] via-[#00D4FF] to-[#8A2BE2]"></div>

          {levels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-8 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
              style={{
                marginLeft: index % 2 === 0 ? '0' : '50%',
                marginRight: index % 2 === 0 ? '50%' : '0',
              }}
            >
              {/* Timeline Dot - بدون تغییر */}
              <div
                className="absolute top-8 w-6 h-6 rounded-full border-4 border-[#0a0a0f]"
                style={{
                  backgroundColor: level.color,
                  [index % 2 === 0 ? 'right' : 'left']: '-3.5rem',
                  boxShadow: `0 0 20px ${level.color}`,
                }}
              ></div>

              {/* Card */}
              <div
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedLevel(expandedLevel === level.level ? null : level.level)}
                style={{ borderColor: level.color + "50" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: level.color + "20",
                      border: `2px solid ${level.color}`,
                    }}
                  >
                    <level.icon className="w-8 h-8" style={{ color: level.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-3 py-1 rounded-full text-sm font-bold"
                        style={{
                          backgroundColor: level.color + "20",
                          color: level.color,
                        }}
                      >
                        سطح {level.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{level.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{level.subtitle}</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {level.lessons} درس
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {level.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {expandedLevel === level.level && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-700 pt-4 mt-4"
                  >
                    <p className="text-gray-300 mb-4">{level.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" style={{ color: level.color }} />
                        سرفصل‌های دوره:
                      </h4>
                      <ul className="space-y-2">
                        {level.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400">
                            <span className="text-[#8A2BE2] mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" style={{ color: level.color }} />
                        منابع آموزشی (کتاب و فیلم):
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {level.resources.map((resource, i) => (
                          <a
                            key={i}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-xl bg-[#1a1a25] border border-gray-700 hover:border-[#8A2BE2]/50 hover:bg-[#252535] transition-all duration-300 group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8A2BE2]/20 transition-colors">
                              <PlayCircle className="w-6 h-6 text-[#8A2BE2]" />
                            </div>
                            <div className="flex-1">
                              <p className="text-white font-medium group-hover:text-[#00D4FF] transition-colors">
                                {resource.name}
                              </p>
                              <p className="text-xs text-gray-500">کلیک برای مشاهده</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* دکمه شروع دوره حذف شده است */}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - بدون تغییر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center max-w-3xl mx-auto"
        >
          <Trophy className="w-16 h-16 mx-auto mb-6 text-[#8A2BE2]" />
          <h2 className="text-3xl font-bold gradient-text mb-4">
            آماده برای شروع سفر یادگیری خود هستید؟
          </h2>
          <p className="text-gray-400 mb-8">
            با بیش از 400 درس جامع، از مبتدی به یک تریدر حرفه‌ای تبدیل شوید
          </p>
          <a
            href="https://www.binance.com/en/academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300 glow-purple"
          >
            <Rocket className="w-5 h-5" />
            شروع یادگیری رایگان
          </a>
        </motion.div>
      </div>
    </div>
  );
}
