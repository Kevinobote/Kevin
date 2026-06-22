import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../contexts/theme-context";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Research", link: "/research" },
    { name: "Projects", link: "/projects" },
    { name: "Experience", link: "/experience" },
    { name: "Teaching", link: "/teaching" },
    { name: "Contact", link: "/contact" },
  ];

  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkTheme, toggleTheme] = useTheme();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
        if (direction >= 0) setMobileMenuOpen(false);
      }
    }
  });

  const handleDownloadCV = () => window.open("/Kevin_Obote.pdf", "_blank");

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="hidden md:flex fixed z-[5000] top-4 inset-x-0 mx-auto max-w-fit px-8 py-3.5 rounded-full items-center gap-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm"
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="text-sm text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-700">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {isDarkTheme ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 dark:bg-white text-white dark:text-navy-900 text-sm font-medium hover:bg-navy-800 dark:hover:bg-slate-100 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              CV
            </button>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Hamburger */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-4 right-4 z-[5001]"
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            )}
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[4999]"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden fixed top-16 right-4 z-[5000] w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col py-2">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white">
                    {isDarkTheme ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                  <button onClick={handleDownloadCV} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 dark:bg-white text-white dark:text-navy-900 text-sm font-medium">
                    <Download className="w-3.5 h-3.5" /> CV
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
