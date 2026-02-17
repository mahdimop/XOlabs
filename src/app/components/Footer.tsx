import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { Mail, Send, Github, Instagram, TrendingUp, Heart, Coffee } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const quickLinks = [
    { path: "/", label: t("home") },
    { path: "/dashboard", label: t("dashboard") },
    { path: "/academy", label: t("academy") },
    { path: "/tools", label: t("tools") },
  ];
  const resources = [
    { path: "/library", label: t("library") },
    { path: "/security", label: t("security") },
    { path: "/iranian-hub", label: t("iranianHub") },
    { path: "/future", label: t("future") },
  ];

  const supportLinks = [
    { name: "حمایت از پروژه", url: "https://daramet.com/xolabs", icon: Heart },
    { name: "حمایت مالی", url: "https://daramet.com/xolabs", icon: Coffee },
  ];

  return (
    <footer className="glass border-t border-[#8A2BE2]/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <TrendingUp className="w-8 h-8 text-[#8A2BE2] group-hover:text-[#00D4FF] transition-colors duration-300" />
                <div className="absolute inset-0 blur-lg bg-[#8A2BE2] opacity-50 group-hover:bg-[#00D4FF] transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-bold gradient-text">XOLabs</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("aboutText")}
            </p>
            
            {/* Support Button in About Section */}
            <a
              href="https://daramet.com/xolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-lg bg-gradient-to-r from-[#8A2BE2] to-[#00D4FF] text-white hover:shadow-lg hover:shadow-[#8A2BE2]/50 transition-all duration-300 group"
            >
              <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold">حمایت از ما</span>
            </a>

            <div className="flex gap-3 mt-4">
              <a
                href="https://t.me/xolabscom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#1a1a25] text-gray-400 hover:text-[#8A2BE2] hover:bg-[#8A2BE2]/20 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/xolabscom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#1a1a25] text-gray-400 hover:text-[#E1306C] hover:bg-[#E1306C]/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/xolabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#1a1a25] text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t("resources")}</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#8A2BE2] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Support Links in Resources */}
            <div className="mt-6">
              <h5 className="text-sm font-bold text-[#8A2BE2] mb-3">حمایت از پروژه</h5>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-[#00D4FF] transition-colors duration-300 text-sm group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t("contact")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@xolabs.io"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#8A2BE2] transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>wandermanki@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/xolabscom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#8A2BE2] transition-colors duration-300 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>@xolabscom</span>
                </a>
              </li>
            </ul>

            {/* Direct Support Card */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#8A2BE2]/20 to-[#00D4FF]/20 border border-[#8A2BE2]/30">
              <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#8A2BE2]" />
                حمایت از XOLabs
              </h5>
              <p className="text-xs text-gray-400 mb-3">
                با حمایت مالی خود به ما در توسعه پروژه‌های بیشتر کمک کنید
              </p>
              <a
                href="https://daramet.com/xolabs"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-2 rounded-lg bg-[#8A2BE2] text-white text-sm font-bold hover:bg-[#00D4FF] transition-colors duration-300"
              >
                daramet.com/xolabs
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8A2BE2]/30 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 XO labs {t("allRights")}.
          </p>
          
          {/* Bottom Support Link */}
          <a
            href="https://daramet.com/xolabs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#8A2BE2] transition-colors duration-300 group"
          >
            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:text-red-500" />
            <span className="text-sm">حمایت از پروژه</span>
          </a>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              {t("madeBy")} <span className="text-[#8A2BE2] font-bold">{t("mopCommunity")}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
