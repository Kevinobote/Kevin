import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from '../contexts/theme-context';
import BackToTop from './BackToTop';
import AccessibilityMenu from './AccessibilityMenu';
import PropTypes from 'prop-types';

const AppWrapper = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <AccessibilityMenu />
      <BackToTop />
    </ThemeProvider>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
