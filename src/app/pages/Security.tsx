import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  Shield, 
  AlertTriangle,
  Lock,
  Eye,
  Key,
  Smartphone,
  FileWarning,
  ExternalLink,
  CheckCircle2
} from "lucide-react";

export default function Security() {
  const { t } = useLanguage();

  const securityGuides = [
    {
      title: "ساخت کیف پول امن",
      description: "راهنمای گام‌به‌گام ساخت و مدیریت کیف پول‌های سخت‌افزاری و نرم‌افزاری",
      icon: Lock,
      color: "#8A2BE2",
      topics: [
        "انتخاب نوع کیف پول (سخت‌افزاری، نرم‌افزاری، کاغذی)",
        "نصب و راه‌اندازی کیف پول‌های معتبر",
        "ذخیره امن Seed Phrase و کلیدهای خصوصی",
        "بک‌آپ گیری چندگانه از اطلاعات کیف پول",
      ],
      link: "https://www.ledger.com/academy/crypto-hardware-wallet",
    },
    {
      title: "احراز هویت دو مرحله‌ای (2FA)",
      description: "فعال‌سازی و مدیریت امنیت حساب‌های صرافی و پلتفرم‌ها",
      icon: Smartphone,
      color: "#00D4FF",
      topics: [
        "انتخاب اپلیکیشن احراز هویت (Google Authenticator, Authy)",
        "فعال‌سازی 2FA در صرافی‌های مختلف",
        "ذخیره کدهای پشتیبان",
        "مدیریت دستگاه‌های معتمد",
      ],
      link: "https://www.binance.com/en/support/faq/how-to-enable-2fa-360002502072",
    },
    {
      title: "تشخیص فیشینگ",
      description: "شناسایی سایت‌ها، ایمیل‌ها و پیام‌های کلاهبرداری",
      icon: Eye,
      color: "#8A2BE2",
      topics: [
        "بررسی URL و گواهی SSL سایت‌ها",
        "تشخیص ایمیل‌های جعلی",
        "هشدارهای امنیتی مرورگر",
        "استفاده از بوکمارک برای سایت‌های مهم",
      ],
      link: "https://www.kaspersky.com/resource-center/threats/how-to-recognize-phishing",
    },
    {
      title: "ذخیره Seed Phrase",
      description: "روش‌های امن ذخیره‌سازی عبارت بازیابی کیف پول",
      icon: Key,
      color: "#00D4FF",
      topics: [
        "هرگز Seed Phrase را دیجیتال نگه ندارید",
        "استفاده از صفحات فلزی ضد آب و آتش",
        "ذخیره در چندین مکان امن فیزیکی",
        "عدم اشتراک‌گذاری با هیچ کس",
      ],
      link: "https://www.ledger.com/academy/how-to-protect-your-seed-phrase",
    },
  ];

  const scams = [
    {
      type: "پروژه‌های اسکم (Rug Pull)",
      warning: "پروژه‌هایی که پس از جمع‌آوری سرمایه، توسعه‌دهندگان آن را رها می‌کنند",
      signs: [
        "وایت‌پیپر ضعیف یا کپی شده",
        "تیم ناشناس یا جعلی",
        "وعده‌های غیرواقعی سود",
        "فشار برای سرمایه‌گذاری سریع",
      ],
      color: "#ef4444",
    },
    {
      type: "صرافی‌های مشکوک",
      warning: "صرافی‌هایی که امکان برداشت دارایی را محدود یا قطع می‌کنند",
      signs: [
        "عدم مجوز و رگوله شدن",
        "کارمزدهای غیرمعمول",
        "مشکلات مکرر در برداشت",
        "پشتیبانی ضعیف یا غیرموجود",
      ],
      color: "#ef4444",
    },
    {
      type: "گروه‌های تلگرامی کلاهبرداری",
      warning: "گروه‌های پامپ و دامپ و سیگنال‌های جعلی",
      signs: [
        "وعده سود قطعی و تضمینی",
        "درخواست پول برای عضویت VIP",
        "سیگنال‌های پامپ و دامپ",
        "نمایش سودهای جعلی",
      ],
      color: "#ef4444",
    },
    {
      type: "شیت‌کوین‌ها (Shitcoins)",
      warning: "توکن‌های بدون ارزش با هدف کلاهبرداری",
      signs: [
        "حجم معاملات جعلی",
        "لیست شدن فقط در صرافی‌های کوچک",
        "تبلیغات گسترده در شبکه‌های اجتماعی",
        "عدم استفاده واقعی",
      ],
      color: "#ef4444",
    },
  ];

  const digitalSecurity = [
    {
      title: "VPN برای تریدرها",
      description: "حفظ حریم خصوصی و امنیت هنگام معامله",
      icon: Shield,
      link: "https://www.expressvpn.com/",
    },
    {
      title: "مرورگر امن",
      description: "استفاده از مرورگرهای امن مثل Brave",
      icon: Eye,
      link: "https://brave.com/",
    },
    {
      title: "ضد ویروس",
      description: "محافظت از دستگاه در برابر بدافزارها",
      icon: Shield,
      link: "https://www.kaspersky.com/",
    },
    {
      title: "مدیریت رمز عبور",
      description: "ذخیره امن رمزهای عبور با LastPass یا 1Password",
      icon: Key,
      link: "https://www.lastpass.com/",
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
          <Shield className="w-20 h-20 text-[#8A2BE2] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("securityTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("securitySubtitle")}
          </p>
        </motion.div>

        {/* Security Guides */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("securityGuide")}</h2>
            <p className="text-gray-400">راهنماهای جامع برای محافظت از دارایی‌های شما</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300"
                style={{ borderColor: guide.color + "30" }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: guide.color + "20",
                      border: `2px solid ${guide.color}`,
                    }}
                  >
                    <guide.icon className="w-8 h-8" style={{ color: guide.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-400 text-sm">{guide.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {guide.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: guide.color }} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={guide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold transition-all duration-300 text-white"
                  style={{ backgroundColor: guide.color }}
                >
                  {t("learnMore")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Scam Database */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("scamDatabase")}</h2>
            <p className="text-gray-400">انواع کلاهبرداری‌ها و نحوه تشخیص آن‌ها</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {scams.map((scam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl border-2"
                style={{ borderColor: scam.color }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-12 h-12 flex-shrink-0" style={{ color: scam.color }} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{scam.type}</h3>
                    <p className="text-gray-400 text-sm">{scam.warning}</p>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                    <FileWarning className="w-4 h-4" />
                    نشانه‌های هشدار:
                  </h4>
                  <ul className="space-y-2">
                    {scam.signs.map((sign, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-red-400 mt-1">•</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Digital Security */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("digitalSecurity")}</h2>
            <p className="text-gray-400">ابزارهای امنیتی برای حفاظت از حریم خصوصی</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalSecurity.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#8A2BE2] group-hover:text-[#00D4FF] transition-colors" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <ExternalLink className="w-5 h-5 mx-auto text-gray-500 group-hover:text-[#8A2BE2] transition-colors" />
              </motion.a>
            ))}
          </div>
        </section>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center border-2 border-[#ef4444]"
        >
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-[#ef4444]" />
          <h2 className="text-3xl font-bold text-white mb-4">
            هشدار امنیتی مهم
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
            هیچ‌گاه Seed Phrase، کلید خصوصی یا رمز عبور خود را با کسی به اشتراک نگذارید. 
            هیچ تیم پشتیبانی معتبری هرگز این اطلاعات را از شما درخواست نمی‌کند.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://support.metamask.io/hc/en-us/articles/360015489591-Basic-Safety-and-Security-Tips-for-MetaMask"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
            >
              نکات امنیتی MetaMask
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.ledger.com/academy/security"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0a0a0f] rounded-lg font-bold hover:bg-[#00b8db] transition-all duration-300"
            >
              آکادمی امنیت Ledger
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
