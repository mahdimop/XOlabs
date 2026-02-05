import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  Sparkles, 
  TrendingUp,
  Cpu,
  Zap,
  Brain,
  Globe,
  Rocket,
  ExternalLink
} from "lucide-react";

export default function FutureInsights() {
  const { t } = useLanguage();

  const emergingTech = [
    {
      title: "DeFi 2.0",
      description: "نسل بعدی امور مالی غیرمتمرکز",
      icon: Zap,
      color: "#8A2BE2",
      trends: [
        "پروتکل‌های Liquidity Mining پیشرفته",
        "استیبل‌کوین‌های الگوریتمی بهبود یافته",
        "Cross-Chain DeFi",
        "Real World Assets (RWA) Tokenization",
      ],
      resources: [
        { name: "DeFi Pulse", link: "https://www.defipulse.com/" },
        { name: "DeFi Llama", link: "https://defillama.com/" },
      ]
    },
    {
      title: "NFT و متاورس",
      description: "دارایی‌های دیجیتال و دنیاهای مجازی",
      icon: Sparkles,
      color: "#00D4FF",
      trends: [
        "NFT های کاربردی (Utility NFTs)",
        "متاورس و فضاهای مجازی",
        "Real Estate دیجیتال",
        "NFT Gaming و Play-to-Earn",
      ],
      resources: [
        { name: "OpenSea", link: "https://opensea.io/" },
        { name: "Decentraland", link: "https://decentraland.org/" },
      ]
    },
    {
      title: "Web3",
      description: "نسل سوم وب - مالکیت و کنترل کاربران",
      icon: Globe,
      color: "#8A2BE2",
      trends: [
        "اپلیکیشن‌های غیرمتمرکز (dApps)",
        "هویت غیرمتمرکز (DID)",
        "ذخیره‌سازی غیرمتمرکز",
        "سازمان‌های خودگردان (DAOs)",
      ],
      resources: [
        { name: "Web3 Foundation", link: "https://web3.foundation/" },
        { name: "Ethereum.org", link: "https://ethereum.org/en/web3/" },
      ]
    },
    {
      title: "GameFi",
      description: "ترکیب Gaming و Finance",
      icon: Rocket,
      color: "#00D4FF",
      trends: [
        "Play-to-Earn Games",
        "In-Game NFTs و اقتصاد بازی",
        "GameFi DAOs",
        "VR/AR Gaming در بلاکچین",
      ],
      resources: [
        { name: "Axie Infinity", link: "https://axieinfinity.com/" },
        { name: "The Sandbox", link: "https://www.sandbox.game/" },
      ]
    },
  ];

  const marketPredictions = [
    {
      title: "سیکل‌های بازار کریپتو",
      description: "درک الگوهای تکرار شونده در بازار",
      icon: TrendingUp,
      color: "#8A2BE2",
      points: [
        "Halving Bitcoin و تاثیر آن بر قیمت",
        "فصل Altcoin ها (Alt Season)",
        "مراحل بازار: Accumulation, Bull Run, Distribution, Bear Market",
        "شاخص‌های سیکل: MVRV, Stock-to-Flow",
      ],
    },
    {
      title: "ترندهای فصلی",
      description: "تحلیل روندهای فصلی و کوتاه‌مدت",
      icon: Sparkles,
      color: "#00D4FF",
      points: [
        "تاثیر رویدادهای کلان اقتصادی",
        "نقش بانک‌های مرکزی و سیاست‌های پولی",
        "ورود نهادها و تاثیر ETF ها",
        "Narrative ها و هایپ بازار",
      ],
    },
  ];

  const aiInTrading = [
    {
      title: "Machine Learning در تحلیل",
      description: "استفاده از الگوریتم‌های یادگیری ماشین",
      icon: Brain,
      color: "#8A2BE2",
      applications: [
        "پیش‌بینی قیمت با Neural Networks",
        "Sentiment Analysis از اخبار و شبکه‌های اجتماعی",
        "Pattern Recognition در نمودارها",
        "Anomaly Detection برای تشخیص معاملات غیرعادی",
      ],
      tools: [
        { name: "TensorFlow", link: "https://www.tensorflow.org/" },
        { name: "PyTorch", link: "https://pytorch.org/" },
      ]
    },
    {
      title: "Trading Bots هوشمند",
      description: "ربات‌های معاملاتی مبتنی بر AI",
      icon: Cpu,
      color: "#00D4FF",
      applications: [
        "Grid Trading با بهینه‌سازی هوشمند",
        "Arbitrage Bots با سرعت بالا",
        "Market Making Algorithms",
        "Portfolio Rebalancing خودکار",
      ],
      tools: [
        { name: "3Commas", link: "https://3commas.io/" },
        { name: "Cryptohopper", link: "https://www.cryptohopper.com/" },
      ]
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
          <Sparkles className="w-20 h-20 text-[#8A2BE2] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("futureTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("futureSubtitle")}
          </p>
        </motion.div>

        {/* Emerging Tech */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("emergingTech")}</h2>
            <p className="text-gray-400">تکنولوژی‌هایی که آینده بازار را شکل می‌دهند</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {emergingTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300"
                style={{ borderColor: tech.color + "30" }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: tech.color + "20",
                      border: `2px solid ${tech.color}`,
                    }}
                  >
                    <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">ترندهای کلیدی:</h4>
                  <ul className="space-y-2">
                    {tech.trends.map((trend, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="mt-1" style={{ color: tech.color }}>•</span>
                        <span>{trend}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-400 mb-2">منابع:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.resources.map((resource, i) => (
                      <a
                        key={i}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300"
                        style={{
                          backgroundColor: tech.color + "20",
                          color: tech.color,
                        }}
                      >
                        {resource.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Market Analysis */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("marketAnalysis")}</h2>
            <p className="text-gray-400">پیش‌بینی و تحلیل روندهای آینده بازار</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {marketPredictions.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl"
                style={{ borderColor: prediction.color + "30" }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <prediction.icon className="w-12 h-12 flex-shrink-0" style={{ color: prediction.color }} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{prediction.title}</h3>
                    <p className="text-gray-400">{prediction.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {prediction.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="mt-1" style={{ color: prediction.color }}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* AI in Trading */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("aiInTrading")}</h2>
            <p className="text-gray-400">نقش هوش مصنوعی در آینده معامله‌گری</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiInTrading.map((ai, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl"
                style={{ borderColor: ai.color + "30" }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: ai.color + "20",
                      border: `2px solid ${ai.color}`,
                    }}
                  >
                    <ai.icon className="w-8 h-8" style={{ color: ai.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{ai.title}</h3>
                    <p className="text-gray-400 text-sm">{ai.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">کاربردها:</h4>
                  <ul className="space-y-2">
                    {ai.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="mt-1" style={{ color: ai.color }}>•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-400 mb-2">ابزارها:</h4>
                  <div className="flex flex-wrap gap-2">
                    {ai.tools.map((tool, i) => (
                      <a
                        key={i}
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300"
                        style={{
                          backgroundColor: ai.color + "20",
                          color: ai.color,
                        }}
                      >
                        {tool.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/20 to-[#00D4FF]/20"></div>
          <div className="relative z-10">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-[#8A2BE2]" />
            <h2 className="text-3xl font-bold gradient-text mb-4">
              آماده برای ورود به آینده هستید؟
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              با یادگیری مداوم و پیگیری ترندهای جدید، همیشه جلوتر از بازار باشید
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.coindesk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
              >
                اخبار روز CoinDesk
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://cointelegraph.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0a0a0f] rounded-lg font-bold hover:bg-[#00b8db] transition-all duration-300"
              >
                تحلیل‌های Cointelegraph
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
