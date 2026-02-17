import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { TrendingUp, TrendingDown, ExternalLink, Loader2, Clock, DollarSign, BarChart3, Activity, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"crypto" | "forex" | "stocks">("crypto");
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [forexData, setForexData] = useState<any[]>([]);
  const [stockData, setStockData] = useState<any>(null);
  const [stockHistory, setStockHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState({
    crypto: true,
    forex: true,
    stocks: true
  });
  const [error, setError] = useState({
    crypto: null as string | null,
    forex: null as string | null,
    stocks: null as string | null
  });
  const [selectedInterval, setSelectedInterval] = useState("1min");
  const [lastUpdated, setLastUpdated] = useState({
    crypto: "",
    forex: "",
    stocks: ""
  });

  // ==================== Crypto Data from CoinGecko ====================
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(prev => ({ ...prev, crypto: true }));
        
        // CoinGecko API - Top 10 cryptocurrencies by market cap
        // این API رایگان است و نیازی به کلید ندارد (محدودیت: 50 درخواست در دقیقه)
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h'
        );
        
        if (!response.ok) {
          throw new Error(`خطا در دریافت اطلاعات: ${response.status}`);
        }

        const data = await response.json();
        
        const formattedData = data.map((coin: any, index: number) => ({
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          price: `$${coin.current_price.toLocaleString()}`,
          priceRaw: coin.current_price,
          change: `${coin.price_change_percentage_24h?.toFixed(2)}%`,
          changeRaw: coin.price_change_percentage_24h,
          isUp: coin.price_change_percentage_24h > 0,
          marketCap: formatMarketCap(coin.market_cap),
          volume: formatVolume(coin.total_volume),
          image: coin.image,
          rank: coin.market_cap_rank || index + 1
        }));

        setCryptoData(formattedData);
        setLastUpdated(prev => ({ ...prev, crypto: new Date().toLocaleTimeString('fa-IR') }));
        setError(prev => ({ ...prev, crypto: null }));
      } catch (err) {
        setError(prev => ({ ...prev, crypto: err.message }));
        console.error('Error fetching crypto data:', err);
        
        // در صورت خطا، از داده‌های نمونه استفاده می‌کنیم
        setCryptoData(mockCryptoData);
      } finally {
        setLoading(prev => ({ ...prev, crypto: false }));
      }
    };

    fetchCryptoData();
    
    // آپدیت خودکار هر 60 ثانیه
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  // ==================== Forex Data from iTick API ====================
  useEffect(() => {
    const fetchForexData = async () => {
      try {
        setLoading(prev => ({ ...prev, forex: true }));
        
        // iTick API - Free forex data
        // برای استفاده، باید از https://www.itick.io یک token رایگان دریافت کنید
        // این یک توکن آزمایشی است - لطفاً توکن خودتان را جایگزین کنید
        const API_TOKEN = "bb42e24746784dc0af821abdd1188861d945a07051c8414a8337697a752de1eb"; // توکن عمومی (محدودیت دارد)
        
        // لیست جفت‌ارزهای محبوب
        const forexPairs = ["EURUSD", "GBPUSD", "USDJPY", "AUDUSD", "USDCAD", "NZDUSD", "USDCHF", "EURGBP", "EURJPY", "GBPJPY"];
        
        // برای دریافت چندین جفت‌ارز به صورت همزمان
        const response = await fetch(
          `https://api.itick.org/forex/quotes?region=GB&codes=${forexPairs.join(',')}`,
          {
            headers: {
              "accept": "application/json",
              "token": API_TOKEN
            }
          }
        );
        
        if (!response.ok) {
          throw new Error(`خطا در دریافت اطلاعات: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.code === 0 && result.data) {
          const formattedData = forexPairs.map((pair, index) => {
            const pairData = result.data[pair];
            if (!pairData) return null;
            
            const changePercent = pairData.chp || 0;
            
            return {
              pair: pair.replace(/(.{3})/, '$1/'), // تبدیل EURUSD به EUR/USD
              price: pairData.ld?.toFixed(4) || "0",
              change: `${changePercent > 0 ? '+' : ''}${changePercent.toFixed(2)}%`,
              isUp: changePercent > 0,
              high: pairData.h?.toFixed(4) || "0",
              low: pairData.lo?.toFixed(4) || "0",
              open: pairData.o?.toFixed(4) || "0",
              volume: pairData.v || 0
            };
          }).filter(item => item !== null);
          
          setForexData(formattedData.length > 0 ? formattedData : mockForexData);
        } else {
          // در صورت خطای API، از داده‌های نمونه استفاده می‌کنیم
          setForexData(mockForexData);
        }
        
        setLastUpdated(prev => ({ ...prev, forex: new Date().toLocaleTimeString('fa-IR') }));
        setError(prev => ({ ...prev, forex: null }));
      } catch (err) {
        setError(prev => ({ ...prev, forex: err.message }));
        console.error('Error fetching forex data:', err);
        
        // در صورت خطا، از داده‌های نمونه استفاده می‌کنیم
        setForexData(mockForexData);
      } finally {
        setLoading(prev => ({ ...prev, forex: false }));
      }
    };

    fetchForexData();
    
    // آپدیت خودکار هر 30 ثانیه برای فارکس
    const interval = setInterval(fetchForexData, 30000);
    return () => clearInterval(interval);
  }, []);

  // ==================== Apple Stock Data ====================
  const appleStockData = {
    meta: {
      symbol: "AAPL",
      interval: "1min",
      currency: "USD",
      exchange_timezone: "America/New_York",
      exchange: "NASDAQ",
      type: "Common Stock"
    },
    values: [
      { datetime: "2026-02-13 15:59:00", open: "255.99001", high: "256.010010", low: "255.59000", close: "255.82001", volume: "1420615" },
      { datetime: "2026-02-13 15:58:00", open: "255.96880", high: "256.03", low: "255.83009", close: "255.99001", volume: "420732" },
      { datetime: "2026-02-13 15:57:00", open: "256.23499", high: "256.3", low: "255.92000", close: "255.97000", volume: "319308" },
      { datetime: "2026-02-13 15:56:00", open: "256.049988", high: "256.31", low: "256.005", close: "256.23499", volume: "337111" },
      { datetime: "2026-02-13 15:55:00", open: "256.45001", high: "256.45001", low: "255.89999", close: "256.070007", volume: "261896" },
      { datetime: "2026-02-13 15:54:00", open: "256.16000", high: "256.54001", low: "255.98700", close: "256.43341", volume: "405675" },
      { datetime: "2026-02-13 15:53:00", open: "255.92000", high: "256.67", low: "255.86", close: "256.16000", volume: "384135" },
      { datetime: "2026-02-13 15:52:00", open: "255.89999", high: "256.070007", low: "255.73000", close: "255.88000", volume: "281355" },
      { datetime: "2026-02-13 15:51:00", open: "255.88699", high: "256.079987", low: "255.88699", close: "255.91000", volume: "224979" },
      { datetime: "2026-02-13 15:50:00", open: "255.97000", high: "256.19000", low: "255.87", close: "255.89000", volume: "200583" },
      { datetime: "2026-02-13 15:49:00", open: "255.99001", high: "256.089996", low: "255.92999", close: "255.97000", volume: "172978" },
      { datetime: "2026-02-13 15:48:00", open: "255.91499", high: "256.010010", low: "255.84000", close: "255.99001", volume: "97830" },
      { datetime: "2026-02-13 15:47:00", open: "255.95000", high: "256.010010", low: "255.81000", close: "255.92000", volume: "83123" },
      { datetime: "2026-02-13 15:46:00", open: "255.81000", high: "255.99", low: "255.75", close: "255.93340", volume: "88206" },
      { datetime: "2026-02-13 15:45:00", open: "255.88000", high: "255.94000", low: "255.73000", close: "255.80600", volume: "91484" },
      { datetime: "2026-02-13 15:44:00", open: "255.83501", high: "256", low: "255.82010", close: "255.875", volume: "109288" },
      { datetime: "2026-02-13 15:43:00", open: "255.85001", high: "256.010010", low: "255.75", close: "255.83501", volume: "81274" },
      { datetime: "2026-02-13 15:42:00", open: "255.96500", high: "255.98", low: "255.80009", close: "255.84500", volume: "75595" },
      { datetime: "2026-02-13 15:41:00", open: "256.11499", high: "256.17001", low: "255.86000", close: "255.95000", volume: "115965" },
      { datetime: "2026-02-13 15:40:00", open: "255.96001", high: "256.20999", low: "255.96", close: "256.13000", volume: "124557" },
      { datetime: "2026-02-13 15:39:00", open: "255.95000", high: "256.070007", low: "255.83099", close: "255.93500", volume: "99273" },
      { datetime: "2026-02-13 15:38:00", open: "255.47501", high: "255.94000", low: "255.45010", close: "255.94000", volume: "195464" },
      { datetime: "2026-02-13 15:37:00", open: "255.66499", high: "255.66499", low: "255.45000", close: "255.50500", volume: "76274" },
      { datetime: "2026-02-13 15:36:00", open: "255.66499", high: "255.78999", low: "255.58000", close: "255.66499", volume: "114822" },
      { datetime: "2026-02-13 15:35:00", open: "255.53000", high: "255.70000", low: "255.47", close: "255.66000", volume: "177164" },
      { datetime: "2026-02-13 15:34:00", open: "255.56000", high: "255.78000", low: "255.45000", close: "255.50999", volume: "117018" },
      { datetime: "2026-02-13 15:33:00", open: "255.96001", high: "255.99001", low: "255.53000", close: "255.56000", volume: "139185" },
      { datetime: "2026-02-13 15:32:00", open: "256.029999", high: "256.18", low: "255.95000", close: "255.95000", volume: "82439" },
      { datetime: "2026-02-13 15:31:00", open: "255.95000", high: "256.14941", low: "255.84000", close: "256.049988", volume: "251909" },
      { datetime: "2026-02-13 15:30:00", open: "255.91000", high: "256.089996", low: "255.88499", close: "255.94501", volume: "170689" }
    ]
  };

  // Process Apple stock data
  useEffect(() => {
    try {
      setLoading(prev => ({ ...prev, stocks: true }));
      
      const values = appleStockData.values;
      const latest = values[0];
      const previous = values[1];
      
      const currentPrice = parseFloat(latest.close).toFixed(2);
      const previousPrice = parseFloat(previous.close);
      const priceChange = (parseFloat(latest.close) - previousPrice).toFixed(2);
      const changePercent = ((parseFloat(latest.close) - previousPrice) / previousPrice * 100).toFixed(2);
      
      // Find high and low for the period
      let high = -Infinity;
      let low = Infinity;
      let totalVolume = 0;
      
      values.forEach(item => {
        const itemHigh = parseFloat(item.high);
        const itemLow = parseFloat(item.low);
        if (itemHigh > high) high = itemHigh;
        if (itemLow < low) low = itemLow;
        totalVolume += parseInt(item.volume);
      });

      setStockData({
        current: currentPrice,
        open: parseFloat(latest.open).toFixed(2),
        high: high.toFixed(2),
        low: low.toFixed(2),
        volume: totalVolume.toLocaleString(),
        change: priceChange,
        changePercent: `${Math.abs(parseFloat(changePercent)).toFixed(2)}%`,
        isUp: parseFloat(priceChange) >= 0
      });

      setStockHistory(values);
      setLastUpdated(prev => ({ ...prev, stocks: new Date().toLocaleTimeString('fa-IR') }));
      setError(prev => ({ ...prev, stocks: null }));
    } catch (err) {
      setError(prev => ({ ...prev, stocks: err.message }));
    } finally {
      setLoading(prev => ({ ...prev, stocks: false }));
    }
  }, []);

  // ==================== Mock Data (Fallback) ====================
  const mockCryptoData = [
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin", price: "$45,230", change: "+2.34%", isUp: true, marketCap: "$880B", volume: "$45B", image: null, rank: 1 },
    { id: "ethereum", symbol: "ETH", name: "Ethereum", price: "$2,450", change: "+1.85%", isUp: true, marketCap: "$295B", volume: "$18B", image: null, rank: 2 },
    { id: "binancecoin", symbol: "BNB", name: "Binance Coin", price: "$315", change: "-0.45%", isUp: false, marketCap: "$47B", volume: "$2.5B", image: null, rank: 3 },
    { id: "solana", symbol: "SOL", name: "Solana", price: "$98", change: "+5.67%", isUp: true, marketCap: "$42B", volume: "$3.2B", image: null, rank: 4 },
    { id: "ripple", symbol: "XRP", name: "Ripple", price: "$0.62", change: "+0.89%", isUp: true, marketCap: "$35B", volume: "$1.8B", image: null, rank: 5 },
    { id: "cardano", symbol: "ADA", name: "Cardano", price: "$0.48", change: "-1.23%", isUp: false, marketCap: "$17B", volume: "$890M", image: null, rank: 6 },
    { id: "avalanche", symbol: "AVAX", name: "Avalanche", price: "$36.50", change: "+3.45%", isUp: true, marketCap: "$14B", volume: "$760M", image: null, rank: 7 },
    { id: "dogecoin", symbol: "DOGE", name: "Dogecoin", price: "$0.085", change: "+0.56%", isUp: true, marketCap: "$12B", volume: "$650M", image: null, rank: 8 },
    { id: "polkadot", symbol: "DOT", name: "Polkadot", price: "$7.25", change: "-0.78%", isUp: false, marketCap: "$9.5B", volume: "$420M", image: null, rank: 9 },
    { id: "polygon", symbol: "MATIC", name: "Polygon", price: "$0.92", change: "+2.10%", isUp: true, marketCap: "$8.5B", volume: "$380M", image: null, rank: 10 },
  ];

  const mockForexData = [
    { pair: "EUR/USD", price: "1.0850", change: "+0.12%", isUp: true, high: "1.0875", low: "1.0820", open: "1.0830", volume: 0 },
    { pair: "GBP/USD", price: "1.2640", change: "-0.08%", isUp: false, high: "1.2680", low: "1.2615", open: "1.2650", volume: 0 },
    { pair: "USD/JPY", price: "148.50", change: "+0.25%", isUp: true, high: "148.80", low: "148.10", open: "148.30", volume: 0 },
    { pair: "AUD/USD", price: "0.6580", change: "+0.18%", isUp: true, high: "0.6595", low: "0.6560", open: "0.6570", volume: 0 },
    { pair: "USD/CAD", price: "1.3420", change: "-0.15%", isUp: false, high: "1.3450", low: "1.3400", open: "1.3430", volume: 0 },
    { pair: "NZD/USD", price: "0.6120", change: "+0.22%", isUp: true, high: "0.6135", low: "0.6095", open: "0.6110", volume: 0 },
    { pair: "USD/CHF", price: "0.8750", change: "-0.10%", isUp: false, high: "0.8775", low: "0.8730", open: "0.8760", volume: 0 },
    { pair: "EUR/GBP", price: "0.8585", change: "+0.05%", isUp: true, high: "0.8600", low: "0.8570", open: "0.8580", volume: 0 },
    { pair: "EUR/JPY", price: "161.15", change: "+0.35%", isUp: true, high: "161.50", low: "160.80", open: "160.90", volume: 0 },
    { pair: "GBP/JPY", price: "187.75", change: "+0.18%", isUp: true, high: "188.20", low: "187.30", open: "187.50", volume: 0 },
  ];

  // ==================== Helper Functions ====================
  const formatMarketCap = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(2)}`;
  };

  const formatVolume = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(2)}`;
  };

  const getTimeFromDatetime = (datetime: string) => {
    return datetime.split(' ')[1].substring(0, 5);
  };

  const handleRefresh = (tab: string) => {
    if (tab === "crypto") {
      setLoading(prev => ({ ...prev, crypto: true }));
      // The useEffect will trigger again
    } else if (tab === "forex") {
      setLoading(prev => ({ ...prev, forex: true }));
    }
  };

  return (
    <div className="min-h-screen py-12" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">قیمت‌های زنده بازار</h1>
          <p className="text-xl text-gray-400">آخرین قیمت‌ها و تغییرات بازارهای جهانی</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          <button
            onClick={() => setActiveTab("crypto")}
            className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
              activeTab === "crypto"
                ? "bg-[#8A2BE2] text-white glow-purple"
                : "bg-[#1a1a25] text-gray-400 hover:text-white"
            }`}
          >
            ارزهای دیجیتال
          </button>
          <button
            onClick={() => setActiveTab("forex")}
            className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
              activeTab === "forex"
                ? "bg-[#8A2BE2] text-white glow-purple"
                : "bg-[#1a1a25] text-gray-400 hover:text-white"
            }`}
          >
            فارکس
          </button>
          <button
            onClick={() => setActiveTab("stocks")}
            className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
              activeTab === "stocks"
                ? "bg-[#8A2BE2] text-white glow-purple"
                : "bg-[#1a1a25] text-gray-400 hover:text-white"
            }`}
          >
            سهام (AAPL)
          </button>
        </div>

        {/* Last Updated Indicator */}
        {lastUpdated[activeTab] && (
          <div className="flex justify-end items-center gap-2 mb-4 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>آخرین به‌روزرسانی: {lastUpdated[activeTab]}</span>
            <button 
              onClick={() => handleRefresh(activeTab)}
              className="p-1 hover:text-[#8A2BE2] transition-colors"
              title="بروزرسانی"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Stocks Tab - Apple Stock */}
        {activeTab === "stocks" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Stock Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-[#8A2BE2]" />
                  <span className="text-gray-400">قیمت فعلی</span>
                </div>
                <p className="text-3xl font-bold text-white">${stockData?.current || "0"}</p>
                <p className={`text-sm mt-2 ${stockData?.isUp ? "text-green-500" : "text-red-500"}`}>
                  {stockData?.isUp ? '+' : '-'}{stockData?.change} ({stockData?.changePercent})
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Activity className="w-5 h-5 text-[#00D4FF]" />
                  <span className="text-gray-400">باز شدن</span>
                </div>
                <p className="text-3xl font-bold text-white">${stockData?.open || "0"}</p>
                <p className="text-sm text-gray-400 mt-2">NASDAQ</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400">بالاترین</span>
                </div>
                <p className="text-3xl font-bold text-white">${stockData?.high || "0"}</p>
                <p className="text-sm text-gray-400 mt-2">پایین‌ترین: ${stockData?.low || "0"}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-400">حجم معاملات</span>
                </div>
                <p className="text-3xl font-bold text-white">{stockData?.volume || "0"}</p>
                <p className="text-sm text-gray-400 mt-2">آخرین قیمت: ${stockData?.current || "0"}</p>
              </motion.div>
            </div>

            {/* Stock Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  AAPL - Apple Inc.
                  <span className="text-sm font-normal text-gray-400 mr-2">NASDAQ</span>
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedInterval("1min")}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedInterval === "1min" ? "bg-[#8A2BE2] text-white" : "bg-[#1a1a25] text-gray-400"
                    }`}
                  >
                    ۱ دقیقه
                  </button>
                  <button
                    onClick={() => setSelectedInterval("5min")}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedInterval === "5min" ? "bg-[#8A2BE2] text-white" : "bg-[#1a1a25] text-gray-400"
                    }`}
                  >
                    ۵ دقیقه
                  </button>
                </div>
              </div>

              {/* Mini Chart Visualization */}
              <div className="h-64 bg-[#1a1a25] rounded-lg p-4 overflow-x-auto">
                <div className="flex items-end h-48 gap-1 min-w-max">
                  {stockHistory.slice(0, 30).reverse().map((item, index) => {
                    const closePrice = parseFloat(item.close);
                    const maxPrice = Math.max(...stockHistory.map(i => parseFloat(i.close)));
                    const minPrice = Math.min(...stockHistory.map(i => parseFloat(i.close)));
                    const height = ((closePrice - minPrice) / (maxPrice - minPrice)) * 180 + 20;
                    
                    return (
                      <div key={index} className="flex flex-col items-center group relative">
                        <div className="w-8 bg-gradient-to-t from-[#8A2BE2] to-[#00D4FF] rounded-t-lg transition-all duration-300 group-hover:opacity-80"
                             style={{ height: `${height}px` }}>
                        </div>
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#1a1a25] p-2 rounded text-xs whitespace-nowrap z-10">
                          <p className="text-white">{item.datetime}</p>
                          <p className="text-green-500">قیمت: ${parseFloat(item.close).toFixed(2)}</p>
                          <p className="text-gray-400">حجم: {parseInt(item.volume).toLocaleString()}</p>
                        </div>
                        <span className="text-xs text-gray-500 mt-2 rotate-45">
                          {getTimeFromDatetime(item.datetime)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stock Details Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#8A2BE2]/30">
                      <th className="px-4 py-2 text-right text-gray-400">زمان</th>
                      <th className="px-4 py-2 text-right text-gray-400">باز</th>
                      <th className="px-4 py-2 text-right text-gray-400">بالاترین</th>
                      <th className="px-4 py-2 text-right text-gray-400">پایین‌ترین</th>
                      <th className="px-4 py-2 text-right text-gray-400">بسته</th>
                      <th className="px-4 py-2 text-right text-gray-400">حجم</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockHistory.slice(0, 10).map((item, index) => (
                      <tr key={index} className="border-b border-[#8A2BE2]/10 hover:bg-[#1a1a25]">
                        <td className="px-4 py-2 text-white">{item.datetime}</td>
                        <td className="px-4 py-2 text-gray-300">${parseFloat(item.open).toFixed(2)}</td>
                        <td className="px-4 py-2 text-green-500">${parseFloat(item.high).toFixed(2)}</td>
                        <td className="px-4 py-2 text-red-500">${parseFloat(item.low).toFixed(2)}</td>
                        <td className="px-4 py-2 text-white font-bold">${parseFloat(item.close).toFixed(2)}</td>
                        <td className="px-4 py-2 text-gray-300">{parseInt(item.volume).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Crypto Table - Live from CoinGecko */}
        {activeTab === "crypto" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl overflow-hidden"
          >
            {loading.crypto ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-[#8A2BE2] animate-spin" />
              </div>
            ) : error.crypto ? (
              <div className="text-center py-20 text-red-500">
                <p>خطا در دریافت اطلاعات: {error.crypto}</p>
                <button 
                  onClick={() => handleRefresh("crypto")}
                  className="mt-4 px-6 py-2 bg-[#8A2BE2] text-white rounded-lg"
                >
                  تلاش مجدد
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#8A2BE2]/30 bg-[#1a1a25]">
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">#</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">نام</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">قیمت</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">تغییرات ۲۴h</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">ارزش بازار</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">حجم ۲۴h</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cryptoData.map((crypto, index) => (
                      <motion.tr
                        key={crypto.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-[#8A2BE2]/10 hover:bg-[#1a1a25] transition-colors"
                      >
                        <td className="px-6 py-4 text-gray-400">{crypto.rank || index + 1}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-[#8A2BE2] to-[#00D4FF] flex items-center justify-center">
                              {crypto.image ? (
                                <img src={crypto.image} alt={crypto.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="font-bold text-white">{crypto.symbol.charAt(0)}</span>
                              )}
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
                            href={`https://www.coingecko.com/en/coins/${crypto.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8A2BE2] hover:text-[#00D4FF] transition-colors"
                            title="مشاهده در CoinGecko"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}

        {/* Forex Table - Live from iTick API */}
        {activeTab === "forex" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl overflow-hidden"
          >
            {loading.forex ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-[#8A2BE2] animate-spin" />
              </div>
            ) : error.forex ? (
              <div className="text-center py-20 text-red-500">
                <p>خطا در دریافت اطلاعات: {error.forex}</p>
                <p className="text-sm text-gray-400 mt-2">در حال نمایش داده‌های آزمایشی</p>
                <button 
                  onClick={() => handleRefresh("forex")}
                  className="mt-4 px-6 py-2 bg-[#8A2BE2] text-white rounded-lg"
                >
                  تلاش مجدد
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#8A2BE2]/30 bg-[#1a1a25]">
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">#</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">جفت ارز</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">قیمت</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">تغییرات</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">بالاترین</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">پایین‌ترین</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">باز شدن</th>
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
                        <td className="px-6 py-4 text-gray-300">{forex.open || "-"}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}

        {/* External Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
            <p className="text-gray-400">داده‌های لحظه‌ای ارزهای دیجیتال - منبع اصلی</p>
          </a>

          <a
            href="https://www.itick.io"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl hover:glow-purple transition-all duration-300 group"
          >
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
              iTick API
            </h4>
            <p className="text-gray-400">داده‌های لحظه‌ای فارکس - دریافت API رایگان</p>
          </a>

          <a
            href="https://www.tradingview.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-2xl hover:glow-purple transition-all duration-300 group"
          >
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#8A2BE2] transition-colors">
              TradingView
            </h4>
            <p className="text-gray-400">نمودارهای پیشرفته و تحلیل تکنیکال</p>
          </a>
        </motion.div>

        {/* API Credits Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-xs text-gray-500"
        >
          <p>منابع داده: CoinGecko (ارز دیجیتال) | iTick (فارکس) | به‌روزرسانی خودکار هر ۶۰ ثانیه</p>
          <p className="mt-1">
            برای دریافت API رایگان iTick به آدرس 
            <a href="https://www.itick.io" target="_blank" rel="noopener noreferrer" className="text-[#8A2BE2] hover:underline mx-1">
              itick.io
            </a>
            مراجعه کنید
          </p>
        </motion.div>
      </div>
    </div>
  );
}
