import { ArrowRight } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/kevinobote/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/KevinObote6", label: "Twitter" },
    { icon: FaSquareGithub, href: "https://github.com/Kevinobote", label: "GitHub" },
    { icon: BiLogoGmail, href: "mailto:kevinobote49@gmail.com", label: "Email" },
    { icon: FiInstagram, href: "https://www.instagram.com/kevin_obote_/", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/+254700885748", label: "WhatsApp" },
  ];

  const services = [
    "Product Management",
    "Machine Learning",
    "Data Science",
    "Software Testing",
    "Software Development"
  ];

  const workLinks = [
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Volunteering", href: "/volunteer" },
    { label: "Testimonials", href: "#testimonials" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Kevin Obote
            </h3>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Building innovative solutions with cutting-edge technology. 
              Data Scientist, Software Engineer, and Product Manager creating 
              exceptional digital experiences.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 text-sm font-semibold transition-colors duration-200"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Work</h4>
            <ul className="space-y-3">
              {workLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:kevinobote49@gmail.com"
                className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm"
              >
                kevinobote49@gmail.com
              </a>
              <a
                href="tel:+254700885748"
                className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm"
              >
                +254 700 885748
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Kevin Obote. All rights reserved.
            </p>
            <span className="text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-400 text-sm">Available for new projects</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-500">Nairobi, Kenya</span>
            <span className="text-slate-700">•</span>
            <p className="text-slate-500">
              Powered by{' '}
              <a
                href="https://guild-code.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Guild Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;