import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Cpu, Check, Mail } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaSquareGithub } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';
import { kevin } from '../assets';

// First Hero - Cinematic Introduction
const HeroMain = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="Background"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold leading-none tracking-tighter text-white"
              >
                Kevin
                <br />
                Obote
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 text-xl sm:text-2xl lg:text-3xl leading-relaxed text-white/70 tracking-tight"
              >
                Data Scientist | Software Engineer | Product Manager
              </motion.h2>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium tracking-tight text-slate-900 hover:bg-white/90 border border-white/10 transition-all duration-300"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>View Work</span>
                </a>
                <a
                  href="mailto:kevinobote49@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium tracking-tight text-white backdrop-blur hover:bg-white/15 transition-all duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span>kevinobote49@gmail.com</span>
                </a>
              </motion.div>

              {/* Info Cards Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <MapPin className="w-[18px] h-[18px] text-white/50 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium tracking-tight text-white">Based in Kenya</p>
                    <p className="text-xs text-white/60 mt-0.5">Open to remote work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <Cpu className="w-[18px] h-[18px] text-white/50 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium tracking-tight text-white">Data Science + Engineering</p>
                    <p className="text-xs text-white/60 mt-0.5">ML, analytics, systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <Check className="w-[18px] h-[18px] text-white/50 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium tracking-tight text-white">Currently available</p>
                    <p className="text-xs text-white/60 mt-0.5">Ready for new projects</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Profile Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="relative aspect-[4/5] sm:aspect-[5/6] max-w-md mx-auto w-full overflow-hidden mt-8 rounded-3xl border border-white/10 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              >
                <img
                  src={kevin}
                  alt="Kevin at work"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Stats Cards at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <div className="text-lg font-semibold tracking-tight text-white">50+</div>
                    </div>
                    <p className="text-[11px] text-white/70">projects</p>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <div className="text-lg font-semibold tracking-tight text-white">5+</div>
                    </div>
                    <p className="text-[11px] text-white/70">years exp</p>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <div className="text-lg font-semibold tracking-tight text-white">98%</div>
                    </div>
                    <p className="text-[11px] text-white/70">satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Second Hero - About & Social
const HeroAbout = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80"
          alt="Background"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/98 via-slate-900/95 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - About Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                About Me
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-white/70 tracking-tight mb-8">
                I am an explorer, dreamer, developer, thinker, and more. I am a multifaceted individual who
                finds joy in activities like swimming, reading, stargazing, and immersing myself in nature.
                Fueling my pursuits is an insatiable curiosity for knowledge that drives me to explore new
                projects, guided by curiosity, and diligence. I use this space to showcase my current and past
                work, detail upcoming plans, and make my presence felt in the world. I'm constantly changing
                and evolving, so what you see here today might not be here tomorrow!
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/kevinobote/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg bg-slate-800/80 text-white/80 hover:bg-slate-700/80 hover:text-white transition-all duration-200 border border-white/5"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://x.com/KevinObote6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="p-3 rounded-lg bg-slate-800/80 text-white/80 hover:bg-slate-700/80 hover:text-white transition-all duration-200 border border-white/5"
                >
                  <FaXTwitter size={20} />
                </a>
                <a
                  href="https://github.com/Kevinobote"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-lg bg-slate-800/80 text-white/80 hover:bg-slate-700/80 hover:text-white transition-all duration-200 border border-white/5"
                >
                  <FaSquareGithub size={20} />
                </a>
                <a
                  href="mailto:kevinobote49@gmail.com"
                  aria-label="Email"
                  className="p-3 rounded-lg bg-slate-800/80 text-white/80 hover:bg-slate-700/80 hover:text-white transition-all duration-200 border border-white/5"
                >
                  <BiLogoGmail size={20} />
                </a>
                <a
                  href="https://www.instagram.com/kevin_obote_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-lg bg-slate-800/80 text-white/80 hover:bg-slate-700/80 hover:text-white transition-all duration-200 border border-white/5"
                >
                  <FiInstagram size={20} />
                </a>
                <a
                  href="https://wa.me/+254700885748"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-3 rounded-lg bg-slate-800/80 text-white/80 hover:bg-slate-700/80 hover:text-white transition-all duration-200 border border-white/5"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Achievements Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-slate-800/40 backdrop-blur-xl p-8"
            >
              <div className="mb-6">
                <div className="text-5xl font-bold text-white mb-2">150+</div>
                <div className="text-sm font-medium text-slate-300">Projects Delivered</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400 mt-1">
                    YEARS
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400 mt-1">
                    SUPPORT
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400 mt-1">
                    QUALITY
                  </div>
                </div>
              </div>

              {/* Satisfaction Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-300">Client Satisfaction</span>
                  <span className="font-bold text-white">98%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
                </div>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  ACTIVE
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                  <Check className="h-3 w-3" />
                  AVAILABLE
                </span>
              </div>
            </motion.div>

            {/* Skills Card with Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-3xl border border-white/10 bg-slate-800/40 backdrop-blur-xl p-8 overflow-hidden"
            >
              <div className="mb-6 text-lg font-semibold text-white">Core Skills</div>
              <div className="relative">
                <motion.div
                  className="flex items-center gap-3"
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    x: {
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  {/* Skills - First Set */}
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    Python
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    Machine Learning
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    Data Analysis
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    Product Management
                  </span>
                  {/* Skills - Duplicate Set for Seamless Loop */}
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    Python
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    Machine Learning
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    Data Analysis
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-700/50 px-4 py-2 text-sm font-medium text-white whitespace-nowrap">
                    Product Management
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component Export
const Hero = () => {
  return (
    <>
      <HeroMain />
      <HeroAbout />
    </>
  );
};

export default Hero;