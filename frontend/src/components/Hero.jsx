import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Mail } from 'lucide-react';
import { kevin } from '../assets';
import { socials } from '../data/socials';

const metrics = [
  { value: '0.19', label: 'Swahili ASR word error rate (Wav2Vec2 + T5)' },
  { value: '55%', label: 'CER reduction on the first Kalenjin ASR baseline' },
  { value: '4', label: 'peer-reviewed & accepted publications' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-offwhite dark:bg-slate-900 flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span className="text-sm text-slate-500 dark:text-slate-400">Nairobi, Kenya</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white leading-tight tracking-tight mb-6">
                Kevin Obote
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                I build AI systems for the languages and economies most models ignore.
                Award-winning ASR for African languages, published research in low-resource
                NLP and spatio-temporal ML, and an MSc in Data Science &amp; Analytics from
                Strathmore University. Currently: Founder &amp; CEO at Guild Code, building
                production AI systems for African languages and low-resource contexts.
              </p>

              {/* Proof points */}
              <dl className="grid grid-cols-3 gap-4 mb-10 max-w-lg">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-2xl sm:text-3xl font-semibold text-navy-900 dark:text-white">
                      {m.value}
                    </dt>
                    <dd className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-snug">
                      {m.label}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="/research"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 dark:bg-white px-5 py-3 text-sm font-medium text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-slate-100 transition-colors"
                >
                  <span>View Research</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Get in Touch</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <img src={kevin} alt="Kevin Obote" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
