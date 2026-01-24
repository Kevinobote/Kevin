import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

// Duplicate the list to create a seamless loop
const DUPLICATED_TEAM = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

const Team = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-black overflow-hidden transition-colors duration-500">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      
      <div className="relative max-w-7xl mx-auto px-6 mb-16 text-center">
       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-400/10 border border-indigo-400/20 text-indigo-600 dark:text-indigo-300 text-[11px] font-bold uppercase tracking-widest mb-6">
        <Users size={14} /> Recommenders
        </div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
        The people building your digital future.
        </h2>
      </div>

      {/* The Infinite Slider Container */}
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{
            x: ['0%', '-50%'], // Move exactly half the width of the duplicated list
          }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust this for speed (higher = slower)
            repeat: Infinity,
          }}
          // Pause on hover for accessibility
          whileHover={{ animationPlayState: 'paused' }}
        >
          {DUPLICATED_TEAM.map((member, index) => (
            <div 
              key={index} 
              className="relative flex-shrink-0 w-72 h-[400px] rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/10 group bg-neutral-50 dark:bg-neutral-900"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 px-2 py-1 w-fit rounded-lg bg-white/10 backdrop-blur-md border border-white/10 mb-2">
                  <member.icon size={12} className="text-lime-400" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider">{member.role}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Edge Fades for a premium look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent" />
    </section>
  );
};

export default Team;