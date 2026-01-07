import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ContactSection from "../components/Contact";
import { ThemeProvider } from '../contexts/theme-context';
import BackToTop from './BackToTop';
import AccessibilityMenu from './AccessibilityMenu';

// Preloader Component
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-200 dark:bg-gray-900">
      <div className="relative">
        {/* Animated circles */}
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-800 dark:border-blue-400 rounded-full animate-spin"></div>
        </div>
        {/* Logo text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
            kevin Obote
          </span>
        </div>
      </div>
    </div>
  );
};

// Main App wrapper to include both components
const AppWrapper = ({ children }) => {
  return (
    <ThemeProvider>
      <Preloader />
      <Navbar />
      <main>
        {children}
      </main>
      <ContactSection />
      <Footer />
      <AccessibilityMenu />
      <BackToTop />
    </ThemeProvider>
  );
};

import PropTypes from 'prop-types';
import Footer from './Footer';

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;