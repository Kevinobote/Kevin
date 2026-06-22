import { motion } from 'framer-motion';

const ExperienceHero = () => {
  return (
    <section className="pt-24 pb-12 bg-offwhite dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white tracking-tight mb-4">
            Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            A condensed timeline of professional experience spanning research, 
            engineering, data science, and community development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceHero;
