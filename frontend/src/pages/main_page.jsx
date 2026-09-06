import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import CTASection from "../components/CTA";
import Testimonials from "../components/Testimonials";

const AboutTeaser = () => (
  <section className="w-full py-20 lg:py-28 bg-white dark:bg-slate-800/50">
    <div className="mx-auto max-w-3xl px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-6 tracking-tight">
          About
        </h2>
        <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-[17px]">
          <p>
            I followed my curiosity from pure mathematics into the part of AI that interests me
            most: building systems that actually work for people left out of the AI conversation
            so far. Most foundational models assume English, data abundance, and conditions that
            don&apos;t hold across most of the world. I build for the exceptions.
          </p>
          <p>
            That thread runs through everything I do, from ASR for African languages to applied
            ML for financial inclusion. I move between research, engineering, and the people work
            that turns either into something real.
          </p>
        </div>
        <a
          href="/about"
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800"
        >
          Read more about me <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

const Main = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-slate-900">
      <Hero />
      <AboutTeaser />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Main;
