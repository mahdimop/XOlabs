import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  HeadphonesIcon, 
  BookOpen,
  MessageSquare,
  Mail,
  Send,
  Phone,
  Clock,
  ExternalLink,
  CheckCircle2
} from "lucide-react";

export default function Support() {
  const { t } = useLanguage();

  const siteGuide = [
    {
      title: "تور مجازی سایت",
      description: "آشنایی با تمام بخش‌ها و امکانات",
      icon: BookOpen,
      color: "#8A2BE2",
      topics: [
        "راهنمای استفاده از داشبورد",
        "نحوه جست‌وجو در آکادمی",
        "استفاده از ابزارها و ماشین‌حساب‌ها",
        "دسترسی به منابع کتابخانه",
      ],
    },
    {
      title: "سوالات متداول (FAQ)",
      description: "پاسخ به رایج‌ترین سوالات",
      icon: MessageSquare,
      color: "#00D4FF",
      topics: [
        "چگونه حساب کاربری بسازم؟",
        "آیا استفاده از سایت رایگان است؟",
        "چگونه پیشرفت خود را ردیابی کنم؟",
        "نحوه دریافت گواهی دوره",
      ],
    },
  ];

  const supportChannels = [
    {
      title: "تیکت پشتیبانی",
      description: "ارسال تیکت برای مشکلات تخصصی",
      icon: Mail,
      response: "پاسخ در کمتر از 24 ساعت",
      color: "#8A2BE2",
      link: "mailto:support@xolabs.io",
    },
    {
      title: "چت آنلاین",
      description: "گفت‌وگوی مستقیم با پشتیبانی",
      icon: MessageSquare,
      response: "پاسخ فوری در ساعات کاری",
      color: "#00D4FF",
      link: "#",
    },
    {
      title: "تلگرام",
      description: "کانال پشتیبانی تلگرام",
      icon: Send,
      response: "پاسخ در کمتر از 1 ساعت",
      color: "#8A2BE2",
      link: "https://t.me/xolabs_support",
    },
    {
      title: "تماس تلفنی",
      description: "پشتیبانی تلفنی",
      icon: Phone,
      response: "شنبه تا پنجشنبه 9-18",
      color: "#00D4FF",
      link: "tel:+982112345678",
    },
  ];

  const updates = [
    {
      date: "4 فوریه 2026",
      title: "افزودن بخش آینده‌نگاری بازار",
      description: "اضافه شدن محتوای جدید درباره تکنولوژی‌های نوظهور",
      type: "محتوا",
    },
    {
      date: "1 فوریه 2026",
      title: "بهبود سرعت سایت",
      description: "بهینه‌سازی بارگذاری صفحات و کاهش زمان پاسخ",
      type: "تکنیکال",
    },
    {
      date: "28 ژانویه 2026",
      title: "افزودن 50 درس جدید به آکادمی",
      description: "دوره‌های جدید در بخش استراتژی‌های معاملاتی",
      type: "محتوا",
    },
    {
      date: "20 ژانویه 2026",
      title: "راه‌اندازی سیستم ترجمه",
      description: "قابلیت تغییر زبان سایت به انگلیسی",
      type: "ویژگی",
    },
  ];

  const faqItems = [
    {
      question: "آیا XOLabs رایگان است؟",
      answer: "بله، تمام محتوا و ابزارهای XOLabs کاملاً رایگان است. ما معتقدیم دسترسی به آموزش باکیفیت باید برای همه فراهم باشد.",
    },
    {
      question: "چگونه می‌توانم پیشرفت خود را پیگیری کنم؟",
      answer: "با ساخت حساب کاربری، تمام دروس تکمیل شده و پیشرفت شما در آکادمی ذخیره و نمایش داده می‌شود.",
    },
    {
      question: "آیا گواهی دریافت می‌کنم؟",
      answer: "بله، پس از تکمیل هر سطح از آکادمی، گواهی دیجیتال قابل دانلود و اشتراک‌گذاری دریافت خواهید کرد.",
    },
    {
      question: "ابزارها واقعاً کار می‌کنند؟",
      answer: "تمام ابزارها به منابع معتبر و API های رسمی متصل هستند. برخی ابزارها آموزشی بوده و از داده‌های نمونه استفاده می‌کنند.",
    },
    {
      question: "چگونه می‌توانم با تیم XOLabs ارتباط برقرار کنم؟",
      answer: "از طریق ایمیل، تلگرام یا فرم تماس در همین صفحه می‌توانید با ما در ارتباط باشید. پاسخگویی معمولاً کمتر از 24 ساعت طول می‌کشد.",
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
          <HeadphonesIcon className="w-20 h-20 text-[#8A2BE2] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("supportTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("supportSubtitle")}
          </p>
        </motion.div>

        {/* Site Guide */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("siteGuide")}</h2>
            <p className="text-gray-400">راهنمای جامع استفاده از XOLabs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {siteGuide.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl"
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
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-400">{guide.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {guide.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: guide.color }} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support Channels */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("userSupport")}</h2>
            <p className="text-gray-400">راه‌های ارتباط با پشتیبانی</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.a
                key={index}
                href={channel.link}
                target={channel.link.startsWith('http') ? "_blank" : "_self"}
                rel={channel.link.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group text-center"
              >
                <div
                  className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{
                    backgroundColor: channel.color + "20",
                    border: `2px solid ${channel.color}`,
                  }}
                >
                  <channel.icon className="w-8 h-8" style={{ color: channel.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Clock className="w-4 h-4" style={{ color: channel.color }} />
                  <span className="text-gray-400">{channel.response}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">سوالات متداول</h2>
            <p className="text-gray-400">پاسخ به رایج‌ترین سوالات کاربران</p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-[#8A2BE2] flex-shrink-0" />
                  {item.question}
                </h3>
                <p className="text-gray-300 pr-9">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Updates */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("updates")}</h2>
            <p className="text-gray-400">آخرین به‌روزرسانی‌ها و تغییرات</p>
          </motion.div>

          <div className="glass rounded-2xl p-8">
            <div className="space-y-6">
              {updates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 pb-6 border-b border-[#8A2BE2]/20 last:border-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#8A2BE2]/20 border-2 border-[#8A2BE2] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-[#8A2BE2]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{update.title}</h3>
                        <p className="text-gray-400">{update.description}</p>
                      </div>
                      <span className="px-3 py-1 bg-[#8A2BE2]/20 text-[#8A2BE2] rounded-full text-sm whitespace-nowrap">
                        {update.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{update.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl"
        >
          <div className="text-center mb-8">
            <Mail className="w-16 h-16 mx-auto mb-6 text-[#8A2BE2]" />
            <h2 className="text-3xl font-bold gradient-text mb-4">
              {t("contactUs")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              سوال یا پیشنهادی دارید؟ دوست داریم از شما بشنویم
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a
              href="mailto:info@xolabs.io"
              className="flex items-center gap-4 p-6 bg-[#8A2BE2]/10 rounded-xl hover:bg-[#8A2BE2]/20 transition-all duration-300 group"
            >
              <Mail className="w-10 h-10 text-[#8A2BE2] group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-gray-400">ایمیل</p>
                <p className="text-white font-bold">wandermanki@gmail.com</p>
              </div>
            </a>

            <a
              href="https://t.me/xolabscom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#00D4FF]/10 rounded-xl hover:bg-[#00D4FF]/20 transition-all duration-300 group"
            >
              <Send className="w-10 h-10 text-[#00D4FF] group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm text-gray-400">تلگرام</p>
                <p className="text-white font-bold">xo labs</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
