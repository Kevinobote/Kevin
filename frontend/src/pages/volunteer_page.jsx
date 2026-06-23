import { motion } from 'framer-motion';
import { afrocom, genesys, wissa, apdk, redcross, swahilipot, watotogogreen, lic } from '../assets';

const volunteerExperience = [
  {
    role: "Co-Creator & Data Science Lead",
    org: "AfroCom, Nairobi, Kenya (Remote)",
    period: "May 2024 – April 2025",
    description: "Part-time role focused on data science leadership, research skills, and data mining within the AfroCom community initiative.",
    logo: afrocom,
  },
  {
    role: "Data Analysis Path Lead",
    org: "Genesys Tech Hub, Pan-African (Remote)",
    period: "September 2024 – September 2025",
    description: "Designed and developed the data analysis curriculum and course content for learners across Africa. Mentored and tutored data analysis students, providing personalised 1:1 guidance and technical support.",
    logo: genesys,
  },
  {
    role: "Research and Development Volunteer",
    org: "Watoto Go Green, Nairobi, Kenya",
    period: "March 2024 – March 2025",
    description: "Focused on advancing Watoto Go Green's mission through innovative solutions, evidence-based practices, and capacity-building initiatives. Conducted grant applications and research across needs identification, program design, evidence generation, policy advocacy, partnership development, capacity building, innovation, knowledge sharing, monitoring and evaluation, and resource mobilization.",
    logo: watotogogreen,
  },
  {
    role: "Monitoring and Evaluation Specialist",
    org: "Lessons in Conservation",
    period: "May 2024 – August 2024",
    description: "Analysed pre and post survey data to quantify knowledge gained by learners through conservation lessons. Produced comprehensive reports interpreting survey findings with clear statistics and visualisations. Proactively alerted management to concerning statistics and provided informed recommendations for lesson refinements.",
    logo: lic,
  },
  {
    role: "Online Educator",
    org: "WiSSAfrica",
    period: "November 2023 – October 2024",
    description: "Enforcing equitable and inclusive education for all through online instruction and mentorship.",
    logo: wissa,
  },
  {
    role: "Web Development Mentor",
    org: "Genesys Tech Hub",
    period: "May 2022 – October 2023",
    description: "Tutored and mentored students in the web development track, providing guidance on modern web technologies and emerging industry trends.",
    logo: genesys,
  },
  {
    role: "Mathematics Tutor",
    org: "Association for the Physically Disabled of Kenya (APDK), Machakos Branch",
    period: "May 2021 – August 2021",
    description: "Volunteered as a mathematics tutor, teaching primary school students at the APDK Machakos Branch.",
    logo: apdk,
  },
  {
    role: "IT Support Specialist",
    org: "Swahilipot Hub Foundation",
    period: "January 2021 – March 2026",
    description: "Organising and participating in IT hackathons. Providing back office support for the hub's technology initiatives.",
    logo: swahilipot,
  },
  {
    role: "Volunteer",
    org: "Kenya Red Cross",
    period: "August 2019 – Present",
    description: "Emergency response operations during the COVID-19 pandemic. Delivered educational mentorship and organised community outreach programmes. Certified in First Aid through the Red Cross Foundation.",
    logo: redcross,
  },
];

const VolunteerPage = () => {
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
            Volunteering
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Community service, conservation, humanitarian work, and capacity building 
            across Africa.
          </p>
        </motion.div>

        <div className="space-y-6">
          {volunteerExperience.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {item.logo ? (
                      <img src={item.logo} alt="" className="w-10 h-10 rounded-lg object-contain bg-white border border-slate-200 dark:border-slate-700 p-1" />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center">
                        <span className="text-teal-700 dark:text-teal-400 text-sm font-bold">{item.org.charAt(0)}</span>
                      </div>
                    )}
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

export default VolunteerPage;
