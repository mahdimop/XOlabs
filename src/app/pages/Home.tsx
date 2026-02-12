import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  BookOpen, 
  Shield, 
  Users, 
  Zap, 
  Globe,
  ArrowRight,
  Star,
  Award,
  Target
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t("feature1Title"),
      description: t("feature1Desc"),
      color: "#8A2BE2",
    },
    {
      icon: Zap,
      title: t("feature2Title"),
      description: t("feature2Desc"),
      color: "#00D4FF",
    },
    {
      icon: Shield,
      title: t("feature3Title"),
      description: t("feature3Desc"),
      color: "#8A2BE2",
    },
    {
      icon: Globe,
      title: t("feature4Title"),
      description: t("feature4Desc"),
      color: "#00D4FF",
    },
  ];

  const stats = [
    { value: "100+", label: t("lessons"), icon: BookOpen },
    { value: "50+", label: t("tools"), icon: Zap },
    { value: "20+", label: t("articles"), icon: Star },
    { value: "1000+", label: t("users"), icon: Users },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#8A2BE2] rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D4FF] rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <TrendingUp className="w-20 h-20 text-[#8A2BE2] mx-auto" />
                <div className="absolute inset-0 blur-2xl bg-[#8A2BE2] opacity-50"></div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              {t("heroTitle")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              {t("heroSubtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              {t("heroDescription")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/dashboard"
                className="group px-8 py-4 bg-[#8A2BE2] text-white rounded-lg font-bold text-lg hover:bg-[#7021be] transition-all duration-300 glow-purple flex items-center justify-center gap-2"
              >
                {t("exploreDashboard")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/academy"
                className="group px-8 py-4 bg-[#1a1a25] text-white rounded-lg font-bold text-lg border-2 border-[#8A2BE2] hover:bg-[#8A2BE2] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t("startLearning")}
                <BookOpen className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#12121a]/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover:glow-purple transition-all duration-300 group"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#8A2BE2] group-hover:text-[#00D4FF] transition-colors" />
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              {t("features")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                style={{
                  borderColor: feature.color + "50",
                }}
              >
                <div className="relative w-16 h-16 mb-6">
                  <feature.icon
                    className="w-16 h-16 transition-colors duration-300"
                    style={{ color: feature.color }}
                  />
                  <div
                    className="absolute inset-0 blur-xl opacity-50"
                    style={{ backgroundColor: feature.color }}
                  ></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/20 to-[#00D4FF]/20"></div>
            <div className="relative z-10">
              <Award className="w-20 h-20 mx-auto mb-6 text-[#8A2BE2]" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                {t("heroSubtitle")}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t("heroDescription")}
              </p>
              <Link
                to="/academy"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#8A2BE2] text-white rounded-lg font-bold text-lg hover:bg-[#7021be] transition-all duration-300 glow-purple"
              >
                <Target className="w-6 h-6" />
                {t("startLearning")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
