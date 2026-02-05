import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  Users, 
  MessageSquare,
  Trophy,
  UserPlus,
  ExternalLink,
  Send,
  Award
} from "lucide-react";

export default function Community() {
  const { t } = useLanguage();

  const forumCategories = [
    {
      title: "سوالات مبتدیان",
      description: "محل طرح سوالات اولیه و کسب دانش پایه",
      icon: MessageSquare,
      posts: "2,500+",
      members: "5,000+",
      color: "#8A2BE2",
      link: "https://www.reddit.com/r/CryptoCurrency/",
    },
    {
      title: "تحلیل‌های کاربران",
      description: "به اشتراک گذاری تحلیل‌های تکنیکال و فاندامنتال",
      icon: Trophy,
      posts: "1,800+",
      members: "3,500+",
      color: "#00D4FF",
      link: "https://www.tradingview.com/ideas/",
    },
    {
      title: "اشتراک تجربیات",
      description: "داستان‌های موفقیت و درس‌های گرفته شده",
      icon: Users,
      posts: "1,200+",
      members: "4,000+",
      color: "#8A2BE2",
      link: "https://bitcointalk.org/",
    },
    {
      title: "پرسش و پاسخ",
      description: "پاسخ سریع به سوالات تخصصی",
      icon: MessageSquare,
      posts: "3,000+",
      members: "6,000+",
      color: "#00D4FF",
      link: "https://bitcoin.stackexchange.com/",
    },
  ];

  const competitions = [
    {
      title: "مسابقه تحلیل هفتگی",
      description: "بهترین تحلیل تکنیکال هفته را ارائه دهید",
      prize: "جایزه: 100 USDT",
      participants: "500+ شرکت‌کننده",
      deadline: "هر یکشنبه",
      color: "#8A2BE2",
    },
    {
      title: "چالش معامله‌گری ماهانه",
      description: "رقابت در معاملات دمو با سرمایه مجازی",
      prize: "جایزه: 500 USDT",
      participants: "1000+ تریدر",
      deadline: "پایان هر ماه",
      color: "#00D4FF",
    },
    {
      title: "مسابقه استراتژی",
      description: "خلق بهترین استراتژی معاملاتی",
      prize: "جایزه: 300 USDT",
      participants: "300+ استراتژی",
      deadline: "فصلی",
      color: "#8A2BE2",
    },
  ];

  const networking = [
    {
      title: "پیدا کردن منتور",
      description: "یادگیری از تریدرهای با تجربه",
      icon: UserPlus,
      features: [
        "جست‌وجوی منتور بر اساس تخصص",
        "برنامه‌ریزی جلسات آنلاین",
        "دریافت بازخورد روی معاملات",
        "یادگیری از تجربیات واقعی",
      ],
      link: "https://www.linkedin.com/learning/topics/cryptocurrency",
    },
    {
      title: "همکاری حرفه‌ای",
      description: "یافتن شرکای تجاری و همکاران",
      icon: Users,
      features: [
        "تشکیل گروه‌های تحلیلی",
        "همکاری در پروژه‌های کریپتو",
        "اشتراک‌گذاری منابع و ابزار",
        "شبکه‌سازی حرفه‌ای",
      ],
      link: "https://www.meetup.com/topics/cryptocurrency/",
    },
    {
      title: "اشتراک استراتژی",
      description: "به اشتراک گذاری و دریافت استراتژی",
      icon: Trophy,
      features: [
        "کپی تریدینگ از تریدرهای موفق",
        "بک‌تست استراتژی‌های دیگران",
        "دریافت نظرات و پیشنهادات",
        "رتبه‌بندی استراتژی‌ها",
      ],
      link: "https://www.etoro.com/",
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
          <Users className="w-20 h-20 text-[#8A2BE2] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("communityTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("communitySubtitle")}
          </p>
        </motion.div>

        {/* Forum Categories */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("forum")}</h2>
            <p className="text-gray-400">دسته‌بندی‌های مختلف فروم تخصصی</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <motion.a
                key={index}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
                style={{ borderColor: category.color + "30" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: category.color + "20",
                      border: `2px solid ${category.color}`,
                    }}
                  >
                    <category.icon className="w-8 h-8" style={{ color: category.color }} />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#8A2BE2] transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>

                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">پست‌ها</p>
                    <p className="font-bold" style={{ color: category.color }}>{category.posts}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">اعضا</p>
                    <p className="font-bold" style={{ color: category.color }}>{category.members}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Competitions */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("competitions")}</h2>
            <p className="text-gray-400">مسابقات و چالش‌های هیجان‌انگیز</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {competitions.map((competition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
                style={{ borderColor: competition.color + "50" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-bl-full" style={{ backgroundColor: competition.color }}></div>
                
                <Trophy className="w-12 h-12 mb-4" style={{ color: competition.color }} />
                <h3 className="text-xl font-bold text-white mb-2">{competition.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{competition.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">جایزه:</span>
                    <span className="font-bold" style={{ color: competition.color }}>{competition.prize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">شرکت‌کنندگان:</span>
                    <span className="text-white">{competition.participants}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">مهلت:</span>
                    <span className="text-white">{competition.deadline}</span>
                  </div>
                </div>

                <button
                  className="w-full py-3 rounded-lg font-bold text-white transition-all duration-300"
                  style={{ backgroundColor: competition.color }}
                >
                  شرکت در مسابقه
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Networking */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("networking")}</h2>
            <p className="text-gray-400">ارتباط با دیگر تریدرها و متخصصان</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {networking.map((network, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <network.icon className="w-12 h-12 text-[#8A2BE2] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{network.title}</h3>
                <p className="text-gray-400 mb-6">{network.description}</p>

                <ul className="space-y-3 mb-6">
                  {network.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-[#8A2BE2] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={network.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
                >
                  شروع کنید
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-[#8A2BE2]" />
          <h2 className="text-3xl font-bold gradient-text mb-4">
            به جامعه ما بپیوندید
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            در شبکه‌های اجتماعی با ما همراه شوید و از آخرین اخبار، مسابقات و رویدادها با خبر شوید
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/xolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0a0a0f] rounded-lg font-bold hover:bg-[#00b8db] transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              کانال تلگرام
            </a>
            <a
              href="https://discord.gg/xolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
            >
              <Users className="w-4 h-4" />
              سرور Discord
            </a>
            <a
              href="https://twitter.com/xolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0a0a0f] rounded-lg font-bold hover:bg-[#00b8db] transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Twitter/X
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
