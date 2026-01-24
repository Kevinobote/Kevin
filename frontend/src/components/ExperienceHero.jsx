import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Briefcase, Globe, Zap, Layers, ArrowDown } from 'lucide-react';

// Reusable Counter Component
const CountUp = ({ to, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Spring physics for the "smooth butter" feel
  const springValue = useSpring(count, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      count.set(to);
    }
  }, [isInView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const ExperienceHero = () => {
  const stats = [
    { label: 'Years Experience', value: 8, suffix: '+', icon: Zap, color: 'text-amber-500' },
    { label: 'Projects Delivered', value: 40, suffix: '+', icon: Layers, color: 'text-blue-500' },
    { label: 'Global Clients', value: 12, suffix: '', icon: Globe, color: 'text-emerald-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      
      {/* Background Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-neutral-900 dark:text-white leading-none tracking-tighter"
        >
          PAST
        </motion.h1>
      </div>

      {/* Grid Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`, 
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle, black, transparent 70%)'
        }} 
      />

      {/* Content Layer */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-6 z-10 text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 mb-10 group cursor-default">
          <Briefcase size={16} className="text-blue-500 group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400">
            Professional History
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black tracking-tighter text-neutral-900 dark:text-white mb-10 leading-[0.9]">
          The art of <br />
          <span className="italic font-serif font-light text-blue-600 dark:text-blue-400">execution.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mb-20 font-medium">
          Transforming complex problems into elegant, scalable digital systems 
          for over a decade.
        </motion.p>

        {/* Interactive Stats Cards with Counters */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 ${stat.color} mb-6 transition-transform group-hover:scale-110 duration-500`}>
                  <stat.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-6xl font-black text-neutral-900 dark:text-white mb-2 tabular-nums">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-blue-500 transition-colors">Scroll Journey</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-neutral-200 dark:border-white/10 group-hover:border-blue-500/50 transition-colors"
        >
          <ArrowDown size={16} className="text-neutral-400 group-hover:text-blue-500 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceHero;