import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  BookOpen, 
  Video,
  FileText,
  Download,
  Play,
  ExternalLink,
  Star
} from "lucide-react";

export default function Library() {
  const { t } = useLanguage();

  const ebooks = [
    {
      title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
      author: "Satoshi Nakamoto",
      language: "انگلیسی",
      pages: "9 صفحه",
      rating: 5,
      link: "https://bitcoin.org/bitcoin.pdf",
    },
    {
      title: "Mastering Bitcoin",
      author: "Andreas M. Antonopoulos",
      language: "انگلیسی",
      pages: "400 صفحه",
      rating: 5,
      link: "https://github.com/bitcoinbook/bitcoinbook",
    },
    {
      title: "The Bitcoin Standard",
      author: "Saifedean Ammous",
      language: "انگلیسی",
      pages: "300 صفحه",
      rating: 4.5,
      link: "https://saifedean.com/the-book",
    },
    {
      title: "Cryptoassets",
      author: "Chris Burniske & Jack Tatar",
      language: "انگلیسی",
      pages: "350 صفحه",
      rating: 4.5,
      link: "https://www.amazon.com/Cryptoassets-Innovative-Investors-Bitcoin-Beyond/dp/1260026671",
    },
    {
      title: "تحلیل تکنیکال بازارهای مالی",
      author: "John J. Murphy",
      language: "فارسی (ترجمه)",
      pages: "600 صفحه",
      rating: 5,
      link: "https://www.amazon.com/Technical-Analysis-Financial-Markets-Comprehensive/dp/0735200661",
    },
    {
      title: "روانشناسی معامله‌گری",
      author: "Brett N. Steenbarger",
      language: "فارسی (ترجمه)",
      pages: "400 صفحه",
      rating: 4.5,
      link: "https://www.amazon.com/Psychology-Trading-Tools-Techniques-Minding/dp/0471267619",
    },
  ];

  const videos = [
    {
      title: "Bitcoin Explained",
      channel: "3Blue1Brown",
      duration: "26 دقیقه",
      views: "10M+",
      link: "https://www.youtube.com/watch?v=bBC-nXj3Ng4",
    },
    {
      title: "How Does Blockchain Work?",
      channel: "Simply Explained",
      duration: "6 دقیقه",
      views: "5M+",
      link: "https://www.youtube.com/watch?v=SSo_EIwHSd4",
    },
    {
      title: "Technical Analysis Course",
      channel: "Rayner Teo",
      duration: "2 ساعت",
      views: "2M+",
      link: "https://www.youtube.com/watch?v=WTOz7IZFZIM",
    },
    {
      title: "DeFi Explained",
      channel: "Finematics",
      duration: "15 دقیقه",
      views: "1M+",
      link: "https://www.youtube.com/watch?v=k9HYC0EJU6E",
    },
    {
      title: "NFT Explained",
      channel: "Whiteboard Crypto",
      duration: "12 دقیقه",
      views: "3M+",
      link: "https://www.youtube.com/watch?v=4dkl5O9LOKg",
    },
    {
      title: "آموزش کامل فارکس",
      channel: "Forex Persian",
      duration: "10 ساعت",
      views: "500K+",
      link: "https://www.youtube.com/results?search_query=forex+farsi+tutorial",
    },
  ];

  const research = [
    {
      title: "Bitcoin Whitepaper",
      author: "Satoshi Nakamoto",
      date: "2008",
      type: "تحقیق بنیادی",
      link: "https://bitcoin.org/bitcoin.pdf",
    },
    {
      title: "Ethereum Whitepaper",
      author: "Vitalik Buterin",
      date: "2013",
      type: "تحقیق بنیادی",
      link: "https://ethereum.org/en/whitepaper/",
    },
    {
      title: "Global Crypto Market Analysis 2024",
      author: "CoinGecko",
      date: "2024",
      type: "گزارش بازار",
      link: "https://www.coingecko.com/research",
    },
    {
      title: "DeFi Report",
      author: "Messari",
      date: "2024",
      type: "گزارش تخصصی",
      link: "https://messari.io/research",
    },
    {
      title: "Blockchain Technology Overview",
      author: "NIST",
      date: "2018",
      type: "تحقیق آکادمیک",
      link: "https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf",
    },
    {
      title: "Cryptocurrency Market Analysis",
      author: "JPMorgan",
      date: "2024",
      type: "تحلیل بانکی",
      link: "https://www.jpmorgan.com/insights",
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
          <BookOpen className="w-20 h-20 text-[#8A2BE2] mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t("libraryTitle")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("librarySubtitle")}
          </p>
        </motion.div>

        {/* E-books Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("ebooks")}</h2>
            <p className="text-gray-400">کتاب‌های برگزیده فارسی و انگلیسی</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-20 bg-gradient-to-br from-[#8A2BE2] to-[#00D4FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-sm text-gray-400">{book.author}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">زبان:</span>
                    <span className="text-white">{book.language}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">تعداد صفحات:</span>
                    <span className="text-white">{book.pages}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">امتیاز:</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(book.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  {t("download")}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("videos")}</h2>
            <p className="text-gray-400">ویدیوهای آموزشی برگزیده</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative mb-4 aspect-video bg-gradient-to-br from-[#8A2BE2] to-[#00D4FF] rounded-lg flex items-center justify-center overflow-hidden">
                  <Video className="w-16 h-16 text-white" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{video.channel}</p>

                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-400">{video.duration}</span>
                  <span className="text-gray-400">{video.views} بازدید</span>
                </div>

                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#00D4FF] text-[#0a0a0f] rounded-lg font-bold hover:bg-[#00b8db] transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  {t("watch")}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">{t("research")}</h2>
            <p className="text-gray-400">تحقیقات و گزارش‌های معتبر</p>
          </motion.div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#8A2BE2]/30 bg-[#1a1a25]">
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">عنوان</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">نویسنده</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">نوع</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400">تاریخ</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-gray-400"></th>
                  </tr>
                </thead>
                <tbody>
                  {research.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-[#8A2BE2]/10 hover:bg-[#1a1a25] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-[#8A2BE2] flex-shrink-0" />
                          <span className="font-bold text-white">{item.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{item.author}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-[#8A2BE2]/20 text-[#8A2BE2] rounded-full text-sm">
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{item.date}</td>
                      <td className="px-6 py-4">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#8A2BE2] hover:text-[#00D4FF] transition-colors font-bold"
                        >
                          {t("read")}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl text-center"
        >
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-[#8A2BE2]" />
          <h2 className="text-3xl font-bold gradient-text mb-4">
            منابع بیشتر می‌خواهید؟
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            به پلتفرم‌های آموزشی معتبر برای دسترسی به هزاران کتاب و ویدیوی دیگر مراجعه کنید
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.coursera.org/search?query=cryptocurrency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
            >
              دوره‌های Coursera
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.udemy.com/courses/search/?q=cryptocurrency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0a0a0f] rounded-lg font-bold hover:bg-[#00b8db] transition-all duration-300"
            >
              دوره‌های Udemy
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://academy.binance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300"
            >
              آکادمی Binance
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
