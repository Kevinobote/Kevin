import { ArrowRight } from 'lucide-react';
import { socials, contactLinks } from '../data/socials';

const Footer = () => {
  const socialLinks = [...socials, ...contactLinks];

  const expertise = [
    "AI & Speech Technology",
    "Machine Learning Engineering",
    "Data Science",
    "Product Management",
    "Training & Facilitation",
  ];

  const siteLinks = [
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Teaching", href: "/teaching" },
    { label: "Volunteering", href: "/volunteer" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white">
              Kevin Obote
            </h3>
            <p className="text-slate-400 max-w-md leading-relaxed">
              AI Researcher and Engineer building production-grade systems for 
              African languages and low-resource contexts. Published researcher, 
              technical mentor, and product builder.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Expertise */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Expertise</h4>
            <ul className="space-y-2.5">
              {expertise.map((item) => (
                <li key={item} className="text-sm text-slate-400">{item}</li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Site</h4>
            <ul className="space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Connect</h4>
            <div className="space-y-2.5 mb-5">
              <a href="mailto:kevinobote49@gmail.com" className="block text-sm text-slate-400 hover:text-white transition-colors">
                kevinobote49@gmail.com
              </a>
              <a href="https://wa.me/254700885748" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-400 hover:text-white transition-colors">
                +254 700 885 748
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-8 w-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Kevin Obote. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-500">Nairobi, Kenya</span>
            <span className="text-slate-700">&middot;</span>
            <p className="text-slate-500">
              Powered by{' '}
              <a href="https://guild-code.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
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
