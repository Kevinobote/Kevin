import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { skills } from '../constants';

// PinContainer Component (Internal Logic Untouched - Themed Styles)
const PinContainer = ({ children, className = "" }) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className="relative group/pin z-50 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform: transform }}
          className="absolute left-1/2 p-0 top-1/2 flex justify-start items-start rounded-3xl shadow-2xl transition duration-700 overflow-hidden bg-transparent"
        >
          <div className={`relative z-50 ${className}`}>{children}</div>
        </div>
      </div>
      <PinPerspective />
    </div>
  );
};

const PinPerspective = () => {
  return (
    <motion.div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 0 }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.1] dark:bg-sky-500/[0.15] blur-xl"
          />
        </div>
        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-sky-400/60 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
        <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-sky-400 dark:bg-white translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
      </div>
    </motion.div>
  );
};

// Modal Component (Dual-Theme Enabled)
// Modal Component - Refined for Premium Aesthetic
const Modal = ({ skill, onClose }) => {
  const colorMap = {
    blue: 'from-blue-600 via-sky-500 to-cyan-400',
    purple: 'from-purple-600 via-indigo-500 to-violet-400',
    pink: 'from-pink-600 via-rose-500 to-orange-400',
    green: 'from-emerald-600 via-teal-500 to-cyan-400',
    orange: 'from-orange-600 via-amber-500 to-yellow-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[6000] flex items-center justify-center p-4 md:p-8 bg-neutral-950/40 dark:bg-black/80 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] md:h-auto overflow-hidden bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] flex flex-col md:flex-row"
      >
        {/* Left Panel: Hero Info */}
        <div className="w-full md:w-2/5 p-8 md:p-12 bg-neutral-50 dark:bg-white/[0.02] border-b md:border-b-0 md:border-r border-neutral-100 dark:border-white/5 flex flex-col justify-between">
          <div>
            <button 
              onClick={onClose}
              className="mb-8 group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <X size={14} className="group-hover:rotate-90 transition-transform" /> 
              Close Escape
            </button>
            
            <div className="space-y-4">
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter border ${skill.color === 'blue' ? 'border-blue-200 text-blue-600 bg-blue-50' : 'border-neutral-200 text-neutral-500' } dark:border-white/10 dark:text-white/60 dark:bg-white/5`}>
                Specialization
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-none">
                {skill.name}<span className="text-blue-500">.</span>
              </h2>
            </div>
          </div>

          <div className="mt-12 md:mt-0 space-y-6">
            <div className="flex items-end justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Mastery Level</span>
              <span className="text-3xl font-mono font-light text-neutral-900 dark:text-white">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-white/5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "circOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${colorMap[skill.color]}`}
              />
            </div>
          </div>
        </div>

        {/* Right Panel: Content Grid */}
        <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-white dark:bg-transparent">
          <div className="mb-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-6">
              Applied Experience
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skill.companies.map((company, idx) => (
                <a
                  key={idx}
                  href={company.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center p-8 rounded-2xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Background Text for Hover State */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                     <span className="text-4xl font-black text-neutral-900/[0.03] dark:text-white/[0.03] uppercase scale-150 rotate-12 select-none">
                       {company.name}
                     </span>
                  </div>

                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="relative z-10 max-w-[120px] max-h-[44px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 dark:invert dark:brightness-200"
                  />
                  
                  {/* Sliding Name Badge on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-neutral-900 dark:bg-white flex justify-center items-center">
                    <p className="text-[10px] font-bold text-white dark:text-black uppercase tracking-widest leading-none">
                      {company.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-neutral-100 dark:border-white/5">
            <p className="text-sm text-neutral-400 leading-relaxed italic">
              "Demonstrated core competency in {skill.name} through large-scale deployments and architectural ownership across these organizations."
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ExpertiseCard Component
const ExpertiseCard = ({ skill, onCardClick }) => {
  const colorMap = {
    blue: { icon: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20', progress: 'from-blue-600 to-sky-400' },
    purple: { icon: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20', progress: 'from-purple-600 to-indigo-400' },
    pink: { icon: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20', progress: 'from-pink-600 to-rose-400' },
    green: { icon: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', progress: 'from-emerald-600 to-teal-400' },
    orange: { icon: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20', progress: 'from-orange-600 to-amber-400' }
  };

  const colors = colorMap[skill.color];
  const Icon = skill.icon;

  return (
    <div onClick={() => onCardClick(skill)}>
      <PinContainer>
        <div className="relative bg-white dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-2xl p-8 w-[340px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-2xl overflow-hidden group/card hover:border-neutral-300 dark:hover:border-white/30 transition-all duration-500">
          <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.03]" />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-8">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${colors.icon} bg-white dark:bg-transparent shadow-sm`}>
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <span className="text-xl font-mono font-black text-neutral-900 dark:text-white/90">{skill.level}%</span>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6">{skill.name}</h3>

            <div className="h-[3px] w-full rounded-full bg-neutral-100 dark:bg-white/5 mb-8">
              <div className={`h-full rounded-full bg-gradient-to-r ${colors.progress}`} style={{ width: `${skill.level}%` }} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-3">
                {skill.companies.slice(0, 4).map((c, i) => (
                  <img key={i} src={c.logo} alt={c.alt} className="h-9 w-9 rounded-full border-2 border-white dark:border-neutral-800 bg-neutral-50 dark:bg-black p-1" />
                ))}
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-white/5 group-hover/card:bg-neutral-900 dark:group-hover/card:bg-white group-hover/card:text-white dark:group-hover/card:text-black transition-all duration-500">
                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M8.14645 3.14645L12.8536 7.5L8.14645 11.8536" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

// Main Expertise Component
const Expertise = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <section className="relative w-full bg-white dark:bg-black py-24 lg:py-40 transition-colors duration-500">
        {/* Themed Background Accents */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/5 dark:bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-400/5 dark:bg-purple-600/10 blur-[100px] rounded-full" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-24 flex flex-col items-center text-center">
            <span className="mb-4 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 dark:text-white/60">Skills & Stack</span>
            <h2 className="text-5xl font-black tracking-tighter text-neutral-900 dark:text-white sm:text-7xl lg:text-8xl">
               Expertise<span className="text-neutral-300 dark:text-white/20">.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Merging deep technical proficiency with a product-driven mindset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-center min-h-[450px]">
                <ExpertiseCard skill={skill} onCardClick={setSelectedSkill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedSkill && <Modal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />}
      </AnimatePresence>
    </>
  );
};

export default Expertise;