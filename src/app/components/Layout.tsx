import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnimatedBackground } from "./AnimatedBackground";
import { ScrollToTop } from "./ScrollToTop";
import { useLanguage } from "../context/LanguageContext";

export function Layout() {
  const { language } = useLanguage();

  return (
    <div className={`min-h-screen bg-[#0a0a0f] grid-bg ${language === "fa" ? "rtl" : "ltr"}`} dir={language === "fa" ? "rtl" : "ltr"}>
      <AnimatedBackground />
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}