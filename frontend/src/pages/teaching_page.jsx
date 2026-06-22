import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';

const teachingExperience = [
  {
    role: "Course Facilitator & Teaching Assistant",
    org: "iLabAfrica, Strathmore University — Nairobi, Kenya",
    period: "May 2024 – May 2026 (Completed)",
    description: "Teaching assistant, facilitator, and course supporter for the CDAV, ICDS, and Professional AI programmes, supporting over 100+ working professionals. Facilitated instruction in data analysis, data science, machine learning, history of AI, CRISP-DM methodology, and foundational statistics. Delivered practical lessons on transformer architectures, data simulation, and applied ML.",
    icon: GraduationCap,
  },
  {
    role: "Data Analysis Path Lead (Volunteer)",
    org: "Genesys Tech Hub — Pan-African (Remote)",
    period: "September 2024 – September 2025",
    description: "Designed and developed the data analysis curriculum and course content for learners across Africa. Mentored and tutored data analysis students, providing personalised 1:1 guidance and technical support. Coordinated with fellow mentors and tutors to ensure cohesive and effective content delivery across the programme.",
    icon: Users,
  },
];

const TeachingPage = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-slate-900 pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white tracking-tight mb-4">
            Teaching & Mentorship
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            I believe the most interesting problems in AI won't get solved by a handful of 
            well-resourced labs — they'll get solved by a lot more people having the tools to try.
          </p>
        </motion.div>

        <div className="space-y-6">
          {teachingExperience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{item.role}</h3>
                    <p className="text-sm text-teal-700 dark:text-teal-400 font-medium">{item.org}</p>
                    <p className="text-sm text-slate-400 mb-3">{item.period}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeachingPage;
