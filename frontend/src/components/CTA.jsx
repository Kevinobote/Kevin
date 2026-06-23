import { Calendar, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-slate-800/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl mx-auto">
            Open to research collaborations, consulting, and new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 dark:bg-white text-white dark:text-navy-900 text-sm font-medium hover:bg-navy-800 dark:hover:bg-slate-100 transition-colors"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://calendar.app.google/UszKGyodyaZDg2K46"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Calendar className="h-4 w-4" /> Schedule a Call
            </a>
            <button
              onClick={() => window.open('/Kevin_Obote.pdf', '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Download className="h-4 w-4" /> Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
