import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Database, TestTube, Layers, X } from 'lucide-react';
import { logo } from '../assets';

// PinContainer Component
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
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
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
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 4 }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        </div>
        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
        <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
        <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
      </div>
    </motion.div>
  );
};

// Modal Component
const Modal = ({ skill, onClose }) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const colorMap = {
    blue: 'from-blue-600 to-blue-500',
    purple: 'from-purple-600 to-purple-500',
    pink: 'from-pink-600 to-pink-500',
    green: 'from-emerald-600 to-emerald-500',
    orange: 'from-orange-600 to-orange-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
      className="fixed inset-0 z-[6000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-200"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl px-6 py-5 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">{skill.name}</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Proficiency */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">Proficiency Level</span>
              <span className="text-2xl font-bold text-gray-900">{skill.level}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${colorMap[skill.color]}`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>

          {/* Companies Grid */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Where I Applied This</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skill.companies.map((company, idx) => (
                <a
                  key={idx}
                  href={company.website || '#'}
                  target={company.website ? "_blank" : undefined}
                  rel={company.website ? "noopener noreferrer" : undefined}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white p-4 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-medium text-white text-center">{company.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end bg-gray-50">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ExpertiseCard Component
const ExpertiseCard = ({ skill, onCardClick }) => {
  const colorMap = {
    blue: { icon: 'bg-blue-50 text-blue-600', progress: 'bg-blue-600', badge: 'bg-blue-50 text-blue-700' },
    purple: { icon: 'bg-purple-50 text-purple-600', progress: 'bg-purple-600', badge: 'bg-purple-50 text-purple-700' },
    pink: { icon: 'bg-pink-50 text-pink-600', progress: 'bg-pink-600', badge: 'bg-pink-50 text-pink-700' },
    green: { icon: 'bg-emerald-50 text-emerald-600', progress: 'bg-emerald-600', badge: 'bg-emerald-50 text-emerald-700' },
    orange: { icon: 'bg-orange-50 text-orange-600', progress: 'bg-orange-600', badge: 'bg-orange-50 text-orange-700' }
  };

  const colors = colorMap[skill.color];
  const Icon = skill.icon;

  return (
    <div onClick={() => onCardClick(skill)}>
      <PinContainer>
        <div className="relative bg-white rounded-xl p-6 w-[320px]">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.icon}`}>
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
            </div>
            <div className={`rounded-full px-3 py-1 text-sm font-medium ${colors.badge}`}>
              {skill.level}%
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-5">
            {skill.name}
          </h3>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div 
                className={`h-full rounded-full ${colors.progress}`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>

          {/* Companies Preview */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
              Applied At
            </p>
            <div className="flex -space-x-2">
              {skill.companies.slice(0, 4).map((company, idx) => (
                <img
                  key={idx}
                  src={company.logo}
                  alt={company.alt}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
              {skill.companies.length > 4 && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-medium text-gray-600">
                  +{skill.companies.length - 4}
                </div>
              )}
            </div>
          </div>

          {/* Click indicator */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center text-xs text-gray-500">
            Click to view details
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

// Main Expertise Component
const Expertise = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

const skills = [
  {
    icon: Code,
    name: "Product Management",
    level: 90,
    color: "blue",
    companies: [
      { name: "Guild Code", logo: logo, alt: "Guild Code Logo", website: "https://guild-code.com"},
      { name: "eProd", logo: logo, alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
      { name: "Alx", logo: logo, alt: "ALx Logo", website: "https://www.alxafrica.com/" }
    ]
  },
  {
    icon: Brain,
    name: "Machine Learning",
    level: 93,
    color: "purple",
    companies: [
      { name: "Guild Code", logo: logo, alt: "Guild Code Logo", website: "https://guild-code.com" },
      { name: "eProd", logo: logo, alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
      { name: "AfroCom", logo: logo, alt: "AfroCom Logo", website: "" },
      { name: "ExploreAI Academy", logo: logo, alt: "ExploreAI Academy Logo", website: "" },
      { name: "Strathmore Uni", logo: logo, alt: "Strathmore Uni Logo", website: "https://strathmore.edu/" },
      { name: "Machakos Uni", logo: logo, alt: "MKSU Logo", website: "https://mksu.ac.ke" }
    ]
  },
  {
    icon: Database,
    name: "Data Science",
    level: 88,
    color: "pink",
    companies: [
      { name: "iLabAfrica", logo: logo, alt: "iLabAfrica Logo", website: "https://ilabafrica.strathmore.edu/" },
      { name: "AfroCom", logo: logo, alt: "AfroCom Logo", website: "" },
      { name: "ExploreAI Academy", logo: logo, alt: "ExploreAI Academy Logo", website: "" }
    ]
  },
  {
    icon: TestTube,
    name: "Software Testing",
    level: 92,
    color: "green",
    companies: [
      { name: "Guild Code", logo: logo, alt: "Guild Code Logo", website: "https://guild-code.com" },
      { name: "eProd", logo: logo, alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
      { name: "Roman Solutions", logo: logo, alt: "Roman Solutions Logo", website: "" }
    ]
  },
  {
    icon: Layers,
    name: "Software Development",
    level: 85,
    color: "orange",
    companies: [
      { name: "Guild Code", logo: logo, alt: "Guild Code Logo", website: "https://guild-code.com" },
      { name: "eProd", logo: logo, alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" }
    ]
  }
];

  return (
    <>
      <section className="w-full bg-slate-50 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Expertise
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Core competencies developed through hands-on experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-h-[400px]"
              >
                <ExpertiseCard skill={skill} onCardClick={setSelectedSkill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedSkill && (
          <Modal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Expertise;