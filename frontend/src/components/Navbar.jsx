import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { logo } from "../assets";

const cn = (...args) => args.filter(Boolean).join(" ");

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Volunteer", link: "/volunteer" },
    { name: "Projects", link: "/projects" },
    { name: "Experience", link: "/experience" },
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
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setMobileMenuOpen(false);
        }
      }
    }
  });

  const handleLinkClick = () => setMobileMenuOpen(false);

  const handleBookTime = () => {
  window.open(
    "https://calendar.app.google/2MBsZrTo7t1ktbbF7",
    "_blank"
  );
};


  const handleDownloadCV = () => {
    window.open("/Kevin_Obote.pdf", "_blank");
  };

  return (
    <>
      {/* Floating Logo */}
      {/* <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 z-[5001]"
      >
        <a href="/" aria-label="Home">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
              <img
                src={logo}
                alt="Logo"
                className="object-contain w-full h-full"
              />
            </div>
          </motion.div>
        </a>
      </motion.div> */}

      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-4 md:top-10 inset-x-0 mx-auto px-6 md:px-10 py-4 md:py-5 rounded-lg items-center justify-center space-x-4",
            "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md",
            "border border-gray-200 dark:border-gray-700",
            "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
            "dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.3),0px_1px_0px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.08)]"
          )}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={handleLinkClick}
              className="relative text-gray-700 dark:text-gray-200 items-center flex space-x-1 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </a>
          ))}

          <div className="pl-2 ml-2 border-l border-gray-200 dark:border-gray-700 flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors text-sm"
            >
              Resume
            </button>
            <button
              onClick={handleBookTime}
              className="px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm"
            >
              Talk to Me
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Hamburger */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-4 sm:top-6 right-4 sm:right-6 z-[5001]"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 px-3 py-3 sm:px-4 sm:py-3 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-200" />
            )}
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 sm:top-20 right-4 sm:right-6 z-[5000] w-[calc(100vw-2rem)] sm:w-64"
          >
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden">
              <nav className="flex flex-col py-2">
                {navItems.map((navItem, idx) => (
                  <a
                    key={`mobile-link=${idx}`}
                    href={navItem.link}
                    onClick={handleLinkClick}
                    className="relative text-gray-700 dark:text-gray-200 flex items-center gap-3 px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:bg-gray-200 dark:active:bg-gray-700"
                  >
                    <span className="text-base font-medium">{navItem.name}</span>
                  </a>
                ))}

                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Theme</span>
                    <button
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="px-4 py-3">
                  <button
                    onClick={() => {
                      handleDownloadCV();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    Resume
                  </button>
                </div>
                <div className="px-4 pb-4">
                  <button
                    onClick={() => {
                      handleBookTime();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  >
                    Talk to Me
                  </button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[4999]"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;