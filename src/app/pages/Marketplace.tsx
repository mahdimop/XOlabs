import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  ShoppingCart, 
  Bot,
  Laptop,
  Briefcase,
  Star,
  ExternalLink,
  DollarSign
} from "lucide-react";

export default function Marketplace() {
  const { t } = useLanguage();

  const tradingBots = [
    {
      name: "3Commas Bot",
      description: "ربات معاملاتی پیشرفته با قابلیت Grid و DCA",
      rating: 4.8,
      price: "$29/ماه",
      features: ["Grid Trading", "DCA Bot", "SmartTrade", "Signals"],
      link: "https://3commas.io/",
    },
    {
      name: "Cryptohopper",
      description: "ربات کامل با قابلیت کپی تریدینگ",
      rating: 4.6,
      price: "$19/ماه",
      features: ["Auto Trading", "Copy Trading", "Backtesting", "Templates"],
      link: "https://www.cryptohopper.com/",
    },
    {
      name: "TradeSanta",
      description: "ربات ساده برای مبتدیان",
      rating: 4.4,
      price: "$14/ماه",
      features: ["Long & Short", "Grid Bot", "DCA", "TradingView Signals"],
      link: "https://tradesanta.com/",
    },
    {
      name: "Bitsgap",
      description: "ربات آربیتراژ و Grid Trading",
      rating: 4.7,
      price: "$25/ماه",
      features: ["Arbitrage", "Grid Bot", "Demo Mode", "Portfolio Management"],
      link: "https://bitsgap.com/",
    },
  ];

  const software = [
    {
      name: "TradingView Pro",
      description: "پلتفرم حرفه‌ای تحلیل تکنیکال",
      rating: 5,
      price: "$14.95/ماه",
      features: ["نمودارهای پیشرفته", "اندیکاتورهای سفارشی", "اسکریپت نویسی", "هشدارهای نامحدود"],
      link: "https://www.tradingview.com/pricing/",
    },
    {
      name: "Coinigy",
      description: "نرم‌افزار معامله و مدیریت پورتفو",
      rating: 4.3,
      price: "$18.66/ماه",
      features: ["40+ صرافی", "Portfolio Tracking", "نمودار پیشرفته", "معامله مستقیم"],
      link: "https://www.coinigy.com/",
    },
    {
      name: "CryptoCompare",
      description: "ابزار تحلیل و مقایسه ارزها",
      rating: 4.5,
      price: "رایگان - $50/ماه",
      features: ["مقایسه ارزها", "Portfolio Tracker", "News Aggregator", "API Access"],
      link: "https://www.cryptocompare.com/",
    },
    {
      name: "TabTrader",
      description: "اپلیکیشن موبایل ترید",
      rating: 4.6,
      price: "رایگان",
      features: ["30+ صرافی", "معامله موبایل", "نمودار TradingView", "Price Alerts"],
      link: "https://tab-trader.com/",
    },
  ];

  const services = [
    {
      name: "سیگنال‌دهی VIP",
      description: "دریافت سیگنال‌های معاملاتی از تریدرهای حرفه‌ای",
      rating: 4.2,
      price: "$50-200/ماه",
      providers: ["Binance Killers", "Crypto Signals", "Fat Pig Signals"],
      link: "https://www.learnbonds.com/best-crypto-signals/",
    },
    {
      name: "کپی تریدینگ",
      description: "کپی خودکار معاملات تریدرهای موفق",
      rating: 4.4,
      price: "کارمزد 10-20%",
      providers: ["eToro", "Bybit Copy Trading", "Bitget Copy Trading"],
      link: "https://www.etoro.com/",
    },
    {
      name: "مدیریت سرمایه",
      description: "مدیریت حرفه‌ای پورتفو توسط کارشناسان",
      rating: 4.6,
      price: "کارمزد 2-5%",
      providers: ["Grayscale", "Pantera Capital", "BlockFi"],
      link: "https://grayscale.com/",
    },
    {
      name: "مشاوره شخصی",
      description: "مشاوره یک‌به‌یک برای توسعه استراتژی",
      rating: 4.8,
      price: "$100-500/جلسه",
      providers: ["Private Coaches", "Trading Mentors", "Crypto Consultants"],
      link: "https://www.linkedin.com/learning/topics/cryptocurrency",
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
          <ShoppingCart className="w-20 h-20 text-[#8A2BE2] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("marketplaceTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("marketplaceSubtitle")}
          </p>
        </motion.div>

        {/* Trading Bots */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("tradingBots")}</h2>
            <p className="text-gray-400">ربات‌های معاملاتی معتبر و کارآمد</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {tradingBots.map((bot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#8A2BE2]/20 border-2 border-[#8A2BE2] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-7 h-7 text-[#8A2BE2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{bot.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{bot.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(bot.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({bot.rating})</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#8A2BE2]/10 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#8A2BE2]" />
                    <span className="text-[#8A2BE2] font-bold text-lg">{bot.price}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-2">ویژگی‌ها:</h4>
                  <div className="flex flex-wrap gap-2">
                    {bot.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#8A2BE2]/20 text-[#8A2BE2] rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={bot.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
                >
                  {t("viewProduct")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Software */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("software")}</h2>
            <p className="text-gray-400">نرم‌افزارهای تخصصی برای تحلیل و معامله</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {software.map((soft, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#00D4FF]/20 border-2 border-[#00D4FF] flex items-center justify-center flex-shrink-0">
                    <Laptop className="w-7 h-7 text-[#00D4FF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{soft.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{soft.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(soft.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({soft.rating})</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#00D4FF]/10 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#00D4FF]" />
                    <span className="text-[#00D4FF] font-bold text-lg">{soft.price}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-2">ویژگی‌ها:</h4>
                  <ul className="space-y-2">
                    {soft.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-[#00D4FF] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={soft.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#00D4FF] text-[#0a0a0f] rounded-lg font-bold hover:bg-[#00b8db] transition-all duration-300"
                >
                  {t("viewProduct")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("services")}</h2>
            <p className="text-gray-400">سرویس‌های حرفه‌ای معامله‌گری</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="w-12 h-12 text-[#8A2BE2] flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="bg-[#8A2BE2]/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-[#8A2BE2]" />
                    <span className="text-[#8A2BE2] font-bold">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({service.rating})</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-2">ارائه‌دهندگان:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.providers.map((provider, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#8A2BE2]/20 text-[#8A2BE2] rounded-full text-sm"
                      >
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
                >
                  {t("viewProduct")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl border-2 border-yellow-500/50 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-3">⚠️ تذکر مهم</h3>
          <p className="text-gray-300 leading-relaxed">
            XOLabs هیچ وابستگی مالی با محصولات و سرویس‌های معرفی شده ندارد. این لیست صرفاً جنبه آموزشی و اطلاع‌رسانی دارد.
            لطفاً قبل از خرید هر محصول یا سرویس، تحقیقات کامل انجام دهید و ریسک‌های احتمالی را بررسی کنید.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
