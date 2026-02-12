import { Link, useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/dashboard", label: t("dashboard") },
    { path: "/academy", label: t("academy") },
    { path: "/tools", label: t("tools") },
    { path: "/security", label: t("security") },
    { path: "/iranian-hub", label: t("iranianHub") },
    { path: "/future", label: t("future") },
    { path: "/library", label: t("library") },
    { path: "/community", label: t("community") },
    { path: "/marketplace", label: t("marketplace") },
    { path: "/support", label: t("support") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#8A2BE2]/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <TrendingUp className="w-10 h-10 text-[#8A2BE2] group-hover:text-[#00D4FF] transition-colors duration-300" />
              <div className="absolute inset-0 blur-lg bg-[#8A2BE2] opacity-50 group-hover:bg-[#00D4FF] transition-colors duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">XOLabs</h1>
              <p className="text-xs text-gray-400">{language === "fa" ? "" : "Crypto Encyclopedia"}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-[#8A2BE2] text-white glow-purple"
                    : "text-gray-300 hover:text-white hover:bg-[#1a1a25]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a25] text-white hover:bg-[#8A2BE2] transition-all duration-300 hover:glow-purple"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "fa" ? "EN" : "فا"}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-[#1a1a25] text-white hover:bg-[#8A2BE2] transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-[#8A2BE2]/30 glass"
          >
            <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-center ${
                    isActive(link.path)
                      ? "bg-[#8A2BE2] text-white glow-purple"
                      : "text-gray-300 hover:text-white hover:bg-[#1a1a25]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
