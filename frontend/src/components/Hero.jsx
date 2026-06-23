import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaSquareGithub } from 'react-icons/fa6';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';
import { kevin } from '../assets';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
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
                  Award-winning ASR for African languages. Published research in low-resource 
                  NLP and spatio-temporal ML. MSc in Data Science & Analytics from Strathmore 
                  University. Currently leading applied AI research at Guild Code.
                </p>

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
                    href="mailto:kevinobote49@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-5 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Get in Touch</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/kevinobote/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors">
                    <FaLinkedin size={18} />
                  </a>
                  <a href="https://github.com/Kevinobote" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors">
                    <FaSquareGithub size={18} />
                  </a>
                  <a href="https://x.com/KevinObote6" target="_blank" rel="noopener noreferrer" aria-label="X" className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors">
                    <FaXTwitter size={18} />
                  </a>
                  <a href="https://scholar.google.com/citations?user=QzMwc7IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors">
                    <SiGooglescholar size={18} />
                  </a>
                  <a href="https://orcid.org/0009-0000-7099-2154" target="_blank" rel="noopener noreferrer" aria-label="ORCID" className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors">
                    <SiOrcid size={18} />
                  </a>
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

      {/* About Section */}
      <section id="about" className="w-full py-20 lg:py-28 bg-white dark:bg-slate-800/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-8 tracking-tight">
              About Me
            </h2>
            <div className="prose prose-slate dark:prose-invert prose-lg max-w-none space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I'm an explorer, dreamer, and builder. Someone who's just as likely to be lost in a 
                stochastic processes textbook as I am lost in thought under a clear night sky. 
                Swimming, reading, writing, poetry, stargazing, long walks in nature: these aren't 
                side notes to my work. They calm my mind and bring me joy, and that's where most 
                of my best thinking happens.
              </p>
              <p>
                What drives me is an insatiable curiosity. I followed it from pure mathematics, through 
                topology, functional analysis, and abstract algebra, into computer science, and from there 
                into the part of AI that interests me most: building systems that actually work for people 
                who've been left out of the AI conversation so far.
              </p>
              <p>
                That's the thread running through my work: Sema Sasa, an ASR system for African languages 
                built to address linguistic exclusion; published research on Swahili speech recognition and a 
                documented ASR baseline for Kalenjin; and applied ML work on financial inclusion, credit scoring, 
                and telecom analytics. All aimed at the same question: how do you build AI that holds up under 
                noise, scarcity, and the kind of complexity that textbook datasets conveniently ignore?
              </p>
              <p>
                I move between three registers fairly fluidly: research, engineering, and the product and 
                people work that turns either into something real. I hold an MSc in Data Science and 
                Analytics from Strathmore University, and I build production AI systems through Guild Code.
              </p>
              <p>
                I've taught and mentored data science learners across Africa through iLabAfrica and Genesys 
                Tech Hub, because I think the most interesting problems in this field won't get solved by a 
                handful of well-resourced labs. They'll get solved by a lot more people having the tools to try.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
