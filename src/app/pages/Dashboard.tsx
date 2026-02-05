import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"crypto" | "forex">("crypto");

  // Mock crypto data (in real app, this would come from API)
  const cryptoData = [
    { symbol: "BTC", name: "Bitcoin", price: "$45,230", change: "+2.34%", isUp: true, marketCap: "$880B", volume: "$45B" },
    { symbol: "ETH", name: "Ethereum", price: "$2,450", change: "+1.85%", isUp: true, marketCap: "$295B", volume: "$18B" },
    { symbol: "BNB", name: "Binance Coin", price: "$315", change: "-0.45%", isUp: false, marketCap: "$47B", volume: "$2.5B" },
    { symbol: "SOL", name: "Solana", price: "$98", change: "+5.67%", isUp: true, marketCap: "$42B", volume: "$3.2B" },
    { symbol: "XRP", name: "Ripple", price: "$0.62", change: "+0.89%", isUp: true, marketCap: "$35B", volume: "$1.8B" },
    { symbol: "ADA", name: "Cardano", price: "$0.48", change: "-1.23%", isUp: false, marketCap: "$17B", volume: "$890M" },
    { symbol: "AVAX", name: "Avalanche", price: "$36.50", change: "+3.45%", isUp: true, marketCap: "$14B", volume: "$760M" },
    { symbol: "DOGE", name: "Dogecoin", price: "$0.085", change: "+0.56%", isUp: true, marketCap: "$12B", volume: "$650M" },
    { symbol: "DOT", name: "Polkadot", price: "$7.25", change: "-0.78%", isUp: false, marketCap: "$9.5B", volume: "$420M" },
    { symbol: "MATIC", name: "Polygon", price: "$0.92", change: "+2.10%", isUp: true, marketCap: "$8.5B", volume: "$380M" },
  ];

  const forexData = [
    { pair: "EUR/USD", price: "1.0850", change: "+0.12%", isUp: true, high: "1.0875", low: "1.0820" },
    { pair: "GBP/USD", price: "1.2640", change: "-0.08%", isUp: false, high: "1.2680", low: "1.2615" },
    { pair: "USD/JPY", price: "148.50", change: "+0.25%", isUp: true, high: "148.80", low: "148.10" },
    { pair: "AUD/USD", price: "0.6580", change: "+0.18%", isUp: true, high: "0.6595", low: "0.6560" },
    { pair: "USD/CAD", price: "1.3420", change: "-0.15%", isUp: false, high: "1.3450", low: "1.3400" },
    { pair: "NZD/USD", price: "0.6120", change: "+0.22%", isUp: true, high: "0.6135", low: "0.6095" },
    { pair: "USD/CHF", price: "0.8750", change: "-0.10%", isUp: false, high: "0.8775", low: "0.8730" },
    { pair: "EUR/GBP", price: "0.8585", change: "+0.05%", isUp: true, high: "0.8600", low: "0.8570" },
    { pair: "EUR/JPY", price: "161.15", change: "+0.35%", isUp: true, high: "161.50", low: "160.80" },
    { pair: "GBP/JPY", price: "187.75", change: "+0.18%", isUp: true, high: "188.20", low: "187.30" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">{t("livePrices")}</h1>
          <p className="text-xl text-gray-400">{t("newsAndEvents")}</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab("crypto")}
            className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
              activeTab === "crypto"
                ? "bg-[#8A2BE2] text-white glow-purple"
                : "bg-[#1a1a25] text-gray-400 hover:text-white"
            }`}
          >
            {t("topCrypto")}
          </button>
          <button
            onClick={() => setActiveTab("forex")}
            className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
              activeTab === "forex"
                ? "bg-[#8A2BE2] text-white glow-purple"
                : "bg-[#1a1a25] text-gray-400 hover:text-white"
            }`}
          >
            {t("topForex")}
          </button>
        </div>

        {/* Crypto Table */}
        {activeTab === "crypto" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#8A2BE2]/30 bg-[#1a1a25]">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">#</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">نام</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">{t("price")}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">{t("change24h")}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">{t("marketCap")}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">{t("volume24h")}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400"></th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((crypto, index) => (
                    <motion.tr
                      key={crypto.symbol}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-[#8A2BE2]/10 hover:bg-[#1a1a25] transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-400">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00D4FF] flex items-center justify-center font-bold">
                            {crypto.symbol.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-white">{crypto.name}</p>
                            <p className="text-sm text-gray-400">{crypto.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-white">{crypto.price}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`flex items-center gap-1 font-bold ${
                            crypto.isUp ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {crypto.isUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {crypto.change}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{crypto.marketCap}</td>
                      <td className="px-6 py-4 text-gray-300">{crypto.volume}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`https://www.coingecko.com/en/coins/${crypto.name.toLowerCase()}`}
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
          </motion.div>
        )}

        {/* Forex Table */}
        {activeTab === "forex" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#8A2BE2]/30 bg-[#1a1a25]">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">#</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">جفت ارز</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">{t("price")}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">{t("change24h")}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">بالاترین</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">پایین‌ترین</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-400"></th>
                  </tr>
                </thead>
                <tbody>
                  {forexData.map((forex, index) => (
                    <motion.tr
                      key={forex.pair}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-[#8A2BE2]/10 hover:bg-[#1a1a25] transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-400">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2] flex items-center justify-center font-bold text-sm">
                            {forex.pair.split('/')[0]}
                          </div>
                          <p className="font-bold text-white">{forex.pair}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-white">{forex.price}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`flex items-center gap-1 font-bold ${
                            forex.isUp ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {forex.isUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {forex.change}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{forex.high}</td>
                      <td className="px-6 py-4 text-gray-300">{forex.low}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`https://www.investing.com/currencies/${forex.pair.toLowerCase().replace('/', '-')}`}
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
          </motion.div>
        )}

        {/* TradingView Widgets */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">نمودار Bitcoin</h3>
            <div className="aspect-video bg-[#1a1a25] rounded-lg flex items-center justify-center">
              <a
                href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 text-gray-400 hover:text-[#8A2BE2] transition-colors"
              >
                <TrendingUp className="w-16 h-16" />
                <span className="text-lg font-bold">مشاهده نمودار در TradingView</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">تقویم اقتصادی</h3>
            <div className="aspect-video bg-[#1a1a25] rounded-lg flex items-center justify-center">
              <a
                href="https://www.investing.com/economic-calendar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 text-gray-400 hover:text-[#8A2BE2] transition-colors"
              >
                <ExternalLink className="w-16 h-16" />
                <span className="text-lg font-bold">مشاهده تقویم اقتصادی</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* External Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <a
            href="https://www.coingecko.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl hover:glow-purple transition-all duration-300 group"
          >
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#8A2BE2] transition-colors">
              CoinGecko
            </h4>
            <p className="text-gray-400">مشاهده قیمت‌های زنده و اطلاعات بازار کریپتو</p>
          </a>

          <a
            href="https://www.tradingview.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl hover:glow-purple transition-all duration-300 group"
          >
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
              TradingView
            </h4>
            <p className="text-gray-400">نمودارهای پیشرفته و ابزارهای تحلیل تکنیکال</p>
          </a>

          <a
            href="https://www.investing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl hover:glow-purple transition-all duration-300 group"
          >
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#8A2BE2] transition-colors">
              Investing.com
            </h4>
            <p className="text-gray-400">اخبار مالی، تقویم اقتصادی و تحلیل بازارها</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
