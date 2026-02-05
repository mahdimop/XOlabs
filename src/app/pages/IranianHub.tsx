import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  Globe, 
  Building2,
  Users,
  Scale,
  Shield,
  ExternalLink,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react";

export default function IranianHub() {
  const { t } = useLanguage();

  const vpnGuides = [
    {
      name: "ExpressVPN",
      description: "سریع‌ترین و پایدارترین VPN برای ایران",
      rating: 5,
      price: "حدود $8/ماه",
      link: "https://www.expressvpn.com/",
      pros: ["سرعت بالا", "پایداری عالی", "پشتیبانی 24/7"],
    },
    {
      name: "NordVPN",
      description: "امنیت بالا با قیمت مناسب",
      rating: 4.5,
      price: "حدود $4/ماه",
      link: "https://nordvpn.com/",
      pros: ["قیمت مناسب", "سرورهای متنوع", "Kill Switch"],
    },
    {
      name: "ProtonVPN",
      description: "VPN رایگان با امنیت بالا",
      rating: 4,
      price: "رایگان تا $10/ماه",
      link: "https://protonvpn.com/",
      pros: ["نسخه رایگان", "امنیت عالی", "بدون لاگ"],
    },
  ];

  const exchanges = [
    {
      name: "Binance",
      support: true,
      kyc: "با VPN قابل استفاده",
      deposit: "P2P، کارت اعتباری جهانی",
      withdraw: "P2P، Transfer",
      fees: "0.1% - 0.02%",
      rating: 5,
      link: "https://www.binance.com/",
    },
    {
      name: "KuCoin",
      support: true,
      kyc: "اختیاری تا سقف 5 BTC",
      deposit: "P2P، Transfer",
      withdraw: "P2P، Transfer",
      fees: "0.1%",
      rating: 4.5,
      link: "https://www.kucoin.com/",
    },
    {
      name: "OKX",
      support: true,
      kyc: "با VPN قابل استفاده",
      deposit: "P2P، Transfer",
      withdraw: "P2P، Transfer",
      fees: "0.08% - 0.1%",
      rating: 4.5,
      link: "https://www.okx.com/",
    },
    {
      name: "MEXC",
      support: true,
      kyc: "اختیاری",
      deposit: "P2P، Transfer",
      withdraw: "Transfer",
      fees: "0.2%",
      rating: 4,
      link: "https://www.mexc.com/",
    },
  ];

  const p2pTips = [
    {
      title: "انتخاب فروشنده معتبر",
      icon: CheckCircle2,
      color: "#10b981",
      tips: [
        "نرخ تکمیل معاملات بالای 95%",
        "حداقل 100 معامله انجام شده",
        "زمان پاسخگویی کمتر از 5 دقیقه",
        "بررسی نظرات کاربران قبلی",
      ],
    },
    {
      title: "فرآیند معامله امن",
      icon: Shield,
      color: "#8A2BE2",
      tips: [
        "حتماً از قابلیت Escrow صرافی استفاده کنید",
        "قبل از انتقال، ارز را در Escrow ببینید",
        "از چت داخل پلتفرم برای ارتباط استفاده کنید",
        "فقط به حساب تایید شده واریز کنید",
      ],
    },
    {
      title: "هشدارهای امنیتی",
      icon: AlertCircle,
      color: "#ef4444",
      tips: [
        "هرگز خارج از پلتفرم معامله نکنید",
        "از لینک‌های مشکوک کلیک نکنید",
        "به هیچ‌وجه رمز عبور را به اشتراک نگذارید",
        "در صورت مشکل، فوراً Support تماس بگیرید",
      ],
    },
  ];

  const taxInfo = [
    {
      title: "قوانین ایران",
      description: "وضعیت قانونی کریپتو در ایران",
      points: [
        "معامله کریپتو در ایران قانونی نیست اما غیرقانونی هم اعلام نشده",
        "استخراج با مجوز قانونی است",
        "واردات با ارز دیجیتال برای برخی کالاها مجاز شده",
        "پیشنهاد می‌شود از وکیل مشاوره بگیرید",
      ],
      link: "https://www.cbi.ir/",
    },
    {
      title: "قوانین بین‌المللی",
      description: "مالیات و قوانین در کشورهای مختلف",
      points: [
        "آمریکا: مالیات بر درآمد سرمایه",
        "اروپا: قوانین متفاوت در هر کشور",
        "امارات: بدون مالیات بر ارز دیجیتال",
        "سنگاپور: معافیت مالیاتی برای هولد بلندمدت",
      ],
      link: "https://www.oecd.org/tax/tax-policy/crypto-asset-reporting-framework-and-amendments-to-the-common-reporting-standard.pdf",
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
          <Globe className="w-20 h-20 text-[#8A2BE2] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("iranianTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("iranianSubtitle")}
          </p>
        </motion.div>

        {/* VPN Guide */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("bypassGuide")}</h2>
            <p className="text-gray-400">بهترین VPN ها برای دسترسی به صرافی‌های بین‌المللی</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {vpnGuides.map((vpn, index) => (
              <motion.a
                key={index}
                href={vpn.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Shield className="w-12 h-12 text-[#8A2BE2] group-hover:text-[#00D4FF] transition-colors" />
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#8A2BE2] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{vpn.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{vpn.description}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(vpn.rating) ? "text-yellow-400" : "text-gray-600"
                      }`}
                    >
                      ⭐
                    </div>
                  ))}
                  <span className="text-gray-400 text-sm mr-2">({vpn.rating})</span>
                </div>

                <div className="bg-[#8A2BE2]/10 rounded-lg p-3 mb-4">
                  <p className="text-[#8A2BE2] font-bold">{vpn.price}</p>
                </div>

                <ul className="space-y-2">
                  {vpn.pros.map((pro, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Exchange Comparison */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("exchangeComparison")}</h2>
            <p className="text-gray-400">مقایسه صرافی‌های سازگار با کاربران ایرانی</p>
          </motion.div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#8A2BE2]/30 bg-[#1a1a25]">
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">صرافی</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">احراز هویت</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">واریز</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">برداشت</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">کارمزد</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">امتیاز</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400"></th>
                  </tr>
                </thead>
                <tbody>
                  {exchanges.map((exchange, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-[#8A2BE2]/10 hover:bg-[#1a1a25] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {exchange.support ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          <span className="font-bold text-white">{exchange.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{exchange.kyc}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{exchange.deposit}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{exchange.withdraw}</td>
                      <td className="px-6 py-4 text-[#8A2BE2] font-bold text-sm">{exchange.fees}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={i < Math.floor(exchange.rating) ? "text-yellow-400" : "text-gray-600"}
                            >
                              ⭐
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={exchange.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8A2BE2] hover:text-[#00D4FF] transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* P2P Guide */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("p2pGuide")}</h2>
            <p className="text-gray-400">راهنمای کامل معاملات P2P امن</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {p2pTips.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl"
                style={{ borderColor: section.color + "50" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <section.icon className="w-10 h-10" style={{ color: section.color }} />
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>

                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="mt-1" style={{ color: section.color }}>•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tax & Laws */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("taxAndLaws")}</h2>
            <p className="text-gray-400">اطلاعات قانونی و مالیاتی</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {taxInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Scale className="w-12 h-12 text-[#8A2BE2] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-gray-400">{info.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {info.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#8A2BE2] flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#8A2BE2] hover:text-[#00D4FF] transition-colors font-bold"
                >
                  مطالعه بیشتر
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
          className="glass p-8 rounded-2xl border-2 border-yellow-500/50"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">تذکر مهم</h3>
              <p className="text-gray-300 leading-relaxed">
                این اطلاعات صرفاً جنبه آموزشی دارد و توصیه به استفاده از VPN یا دور زدن قوانین نیست. 
                لطفاً قبل از هرگونه فعالیت، قوانین کشور خود را بررسی کنید و در صورت نیاز از مشاور حقوقی کمک بگیرید.
                XOLabs هیچ مسئولیتی در قبال استفاده از این اطلاعات ندارد.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
