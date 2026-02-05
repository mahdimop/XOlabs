import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  Calculator, 
  TrendingUp, 
  Brain,
  ExternalLink,
  Zap,
  BarChart3,
  PieChart,
  DollarSign
} from "lucide-react";

export default function Tools() {
  const { t } = useLanguage();

  const calculators = [
    {
      name: "ماشین‌حساب سود/زیان مارجین",
      description: "محاسبه دقیق سود و زیان معاملات مارجین با اهرم",
      icon: Calculator,
      color: "#8A2BE2",
      link: "https://www.myfxbook.com/forex-calculators/profit",
    },
    {
      name: "ماشین‌حساب فیوچرز",
      description: "محاسبه لیکوییدیشن، PNL و Position Size در فیوچرز",
      icon: TrendingUp,
      color: "#00D4FF",
      link: "https://www.binance.com/en/futures/funding-history/perpetual/calculator",
    },
    {
      name: "ماشین‌حساب استیکینگ",
      description: "محاسبه سود سالانه و ماهانه استیکینگ",
      icon: PieChart,
      color: "#8A2BE2",
      link: "https://www.stakingrewards.com/calculator",
    },
    {
      name: "ماشین‌حساب سود مرکب",
      description: "محاسبه رشد سرمایه با سود مرکب",
      icon: DollarSign,
      color: "#00D4FF",
      link: "https://www.calculator.net/investment-calculator.html",
    },
    {
      name: "ماشین‌حساب ریسک",
      description: "محاسبه اندازه پوزیشن بر اساس ریسک",
      icon: BarChart3,
      color: "#8A2BE2",
      link: "https://www.myfxbook.com/forex-calculators/position-size",
    },
    {
      name: "ماشین‌حساب فیبوناچی",
      description: "محاسبه سطوح فیبوناچی برای تحلیل",
      icon: Zap,
      color: "#00D4FF",
      link: "https://www.tradingview.com/chart/",
    },
  ];

  const widgets = [
    {
      name: "TradingView - نمودار کامل",
      description: "نمودارهای پیشرفته با تمام ابزارهای تحلیل",
      icon: TrendingUp,
      color: "#8A2BE2",
      link: "https://www.tradingview.com/chart/",
    },
    {
      name: "CoinGecko - مارکت کپ",
      description: "مشاهده رتبه‌بندی و اطلاعات کامل ارزها",
      icon: PieChart,
      color: "#00D4FF",
      link: "https://www.coingecko.com/",
    },
    {
      name: "Investing.com - تقویم اقتصادی",
      description: "رویدادهای مهم اقتصادی و تاثیر آن‌ها",
      icon: BarChart3,
      color: "#8A2BE2",
      link: "https://www.investing.com/economic-calendar/",
    },
    {
      name: "CryptoQuant - اسکرینر حجم",
      description: "تحلیل حجم‌های غیرعادی و نقدینگی",
      icon: Zap,
      color: "#00D4FF",
      link: "https://cryptoquant.com/",
    },
    {
      name: "Glassnode - On-Chain Data",
      description: "داده‌های زنجیره‌ای و تحلیل‌های عمیق",
      icon: Brain,
      color: "#8A2BE2",
      link: "https://glassnode.com/",
    },
    {
      name: "Alternative.me - Fear & Greed",
      description: "شاخص ترس و طمع بازار کریپتو",
      icon: TrendingUp,
      color: "#00D4FF",
      link: "https://alternative.me/crypto/fear-and-greed-index/",
    },
  ];

  const aiTools = [
    {
      name: "ChatGPT - مشاور تحلیل",
      description: "تحلیل هوشمند بازار با کمک هوش مصنوعی",
      icon: Brain,
      color: "#8A2BE2",
      link: "https://chat.openai.com/",
    },
    {
      name: "TradingView - پیش‌بینی AI",
      description: "پیش‌بینی‌های مبتنی بر یادگیری ماشین",
      icon: TrendingUp,
      color: "#00D4FF",
      link: "https://www.tradingview.com/",
    },
    {
      name: "LunarCrush - اسکنر اخبار",
      description: "اسکن هوشمند اخبار و سنتیمنت شبکه‌های اجتماعی",
      icon: Zap,
      color: "#8A2BE2",
      link: "https://lunarcrush.com/",
    },
    {
      name: "3Commas - ربات سیگنال‌یاب",
      description: "ربات‌های هوشمند برای سیگنال‌گیری",
      icon: Brain,
      color: "#00D4FF",
      link: "https://3commas.io/",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Zap className="w-20 h-20 text-[#8A2BE2] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("toolsTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("toolsSubtitle")}
          </p>
        </motion.div>

        {/* Calculators Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("calculators")}</h2>
            <p className="text-gray-400">ابزارهای محاسباتی برای تصمیم‌گیری بهتر</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((tool, index) => (
              <motion.a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ borderColor: tool.color + "30" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: tool.color + "20",
                      border: `2px solid ${tool.color}`,
                    }}
                  >
                    <tool.icon className="w-7 h-7" style={{ color: tool.color }} />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#8A2BE2] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Widgets Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("widgets")}</h2>
            <p className="text-gray-400">پلتفرم‌های تحلیلی و اطلاعاتی</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {widgets.map((widget, index) => (
              <motion.a
                key={index}
                href={widget.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ borderColor: widget.color + "30" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: widget.color + "20",
                      border: `2px solid ${widget.color}`,
                    }}
                  >
                    <widget.icon className="w-7 h-7" style={{ color: widget.color }} />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#00D4FF] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{widget.name}</h3>
                <p className="text-gray-400 text-sm">{widget.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("aiTools")}</h2>
            <p className="text-gray-400">ابزارهای هوش مصنوعی برای تحلیل پیشرفته</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <motion.a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{ borderColor: tool.color + "30" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: tool.color + "20",
                      border: `2px solid ${tool.color}`,
                    }}
                  >
                    <tool.icon className="w-7 h-7" style={{ color: tool.color }} />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#8A2BE2] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center"
        >
          <Calculator className="w-16 h-16 mx-auto mb-6 text-[#8A2BE2]" />
          <h2 className="text-3xl font-bold gradient-text mb-4">
            ابزار مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            ما مدام ابزارهای جدید اضافه می‌کنیم. پیشنهادات خود را با ما در میان بگذارید
          </p>
          <a
            href="https://t.me/xolabs_support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300 glow-purple"
          >
            ارتباط با پشتیبانی
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
