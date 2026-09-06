import { motion } from 'framer-motion';
import { Download, MapPin } from 'lucide-react';
import { kevin } from '../assets';
import { socials } from '../data/socials';

const affiliations = [
  { role: 'Founder & CEO', org: 'Guild Code' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-slate-900 pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white tracking-tight mb-12"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-[17px]"
          >
            <p>
              I&apos;m an explorer, dreamer, and builder. Someone who&apos;s just as likely to be lost in a
              stochastic processes textbook as I am lost in thought under a clear night sky.
              Swimming, reading, writing, poetry, stargazing, long walks in nature: these aren&apos;t side
              notes to my work. They calm my mind and bring me joy, and that&apos;s where most of my best
              thinking happens.
            </p>
            <p>
              What drives me is an insatiable curiosity. I followed it from pure mathematics, through
              topology, functional analysis, and abstract algebra, into computer science, and from there
              into the part of AI that interests me most: building systems that actually work for people
              who&apos;ve been left out of the AI conversation so far. Most foundational models are trained
              on English, on data-rich contexts, on assumptions that don&apos;t hold across the languages
              and economies most of the world actually lives in. I build for the exceptions.
            </p>
            <p>
              That&apos;s the thread running through my work: Sema Sasa, an ASR system for African languages
              built to address linguistic exclusion; published research on Swahili speech recognition and
              the first documented ASR baseline for Kalenjin; and applied ML work on financial inclusion,
              credit scoring, and telecom analytics. All aimed at the same question: how do you build AI
              that holds up under noise, scarcity, and the kind of complexity that textbook datasets
              conveniently ignore?
            </p>
            <p>
              I move between three registers fairly fluidly: research, engineering, and the product and
              people work that turns either into something real. I hold an MSc in Data Science and
              Analytics from Strathmore University, and I founded and lead Guild Code. Earlier, I was
              a Research Scholar at iLabAfrica.
            </p>
            <p>
              I&apos;ve taught and mentored data science learners across Africa through iLabAfrica and
              Genesys Tech Hub, because I think the most interesting problems in this field won&apos;t get
              solved by a handful of well-resourced labs. They&apos;ll get solved by a lot more people
              having the tools to try.
            </p>
            <p>
              This site is where I keep track of all of it: current work, published research, what
              I&apos;m building next, and the occasional dispatch from wherever curiosity has taken me.
              Like most things I care about, it&apos;s a living document.
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="aspect-[4/5] max-w-xs rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
              <img src={kevin} alt="Kevin Obote" className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-teal-600" />
              Nairobi, Kenya
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                Currently
              </h2>
              <ul className="space-y-3">
                {affiliations.map((a) => (
                  <li key={a.role}>
                    <p className="text-sm font-semibold text-navy-900 dark:text-white">{a.role}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{a.org}</p>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.open('/Kevin_Obote.pdf', '_blank')}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 dark:bg-white text-white dark:text-navy-900 px-5 py-3 text-sm font-medium hover:bg-navy-800 dark:hover:bg-slate-100 transition-colors"
            >
              <Download className="w-4 h-4" /> Download CV
            </button>

            <div className="flex flex-wrap gap-2">
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
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
