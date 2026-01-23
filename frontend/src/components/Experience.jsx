import { useState } from 'react';
import { Calendar, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { GiArchiveResearch } from "react-icons/gi";
import { FaUserInjured } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { GiWheelbarrow } from "react-icons/gi";

import PropTypes from 'prop-types';

const work_experiences = [
    {
      id: 1,
      role: "Research Scholar",
      company: "iLabAfrica - Nairobi, Kenya",
      duration: "May 2024 - Present",
      startDate: "2024",
      achievements: [
        "Analyzing data to uncover patterns and insights using statistical techniques and exploratory data analysis (EDA).",
        "Developing machine learning models for predictive analytics and optimizing model performance through feature engineering and tuning.",
        "Conducting research on data science topics, authoring reports, and contributing to industry publications and conferences.",
        "Ensuring ethical AI development by assessing risks and compliance with data privacy and ethical frameworks.",
        "Collaborating with cross-disciplinary teams to align research outcomes with stakeholder needs.",
        "Delivering findings through technical publications and presentations.",
        "Building an ERP system using Frappe Framework.",
        "Conducted training sessions on web development using Python, Django, SQL, HTML, CSS, and JavaScript.",
        "Preparing technical write ups for integrated APIs like Mpesa for secure payment solutions.",
        "Guided students in Big Data Technologies.",
        "Collaborated with stakeholders to align curriculum development with market needs.",
        "Created engaging course materials to simplify complex technical concepts for learners.",
      ],
      skills: ["Leadership", "Strategic Planning", "Digital Transformation"],
      icon: GiArchiveResearch
    },
    {
      id: 2,
      role: "Data Analyst & Client Relations Officer",
      company: "eProd Solutions Limited - Nairobi, kenya",
      duration: "September 2022 - May 2023",
      startDate: "2022",
      achievements: [
        "Overseeing product enhancements to improve user experience.",
        "Conducted in-depth analysis and extraction of clients' data using SQL.",
        "Developed and managed reports and dashboards for clients utilizing Power BI and SQL.",
        "Provided quality assurance and software testing support.",
        "Quality Assurance and Software testing.",
        "Offered client support services.",
      ],
      skills: ["Operations Management", "Process Optimization", "Team Leadership"],
      icon: FaDatabase,
    },
    {
      id: 3,
      role: "Client Relations Officer",
      company: "eProd Solutions Limited - Nairobi, kenya",
      duration: "September 2022 - May 2023",
      startDate: "2022",
      achievements: [
        "Conducted software testing and provided customer support for technology solutions.",
        "Conducted in-depth analysis and extraction of clients' data using SQL.",
        "Developed and managed reports and dashboards for clients utilizing Power BI and SQL.",
        "Provided quality assurance and software testing support.",
        "Quality Assurance and Software testing.",
        "Offered client support services.",
        "Trained clients on how to set up, install and operate the eprod Software.",
      ],
      skills: ["Operations Management", "Process Optimization", "Team Leadership"],
      icon: FaUserInjured,
    },
    {
      id: 4,
      role: "Supervisor",
      company: "Kazi Mtaani programme - Mombasa, kenya",
      duration: "April 2020 - August 2021",
      startDate: "2020",
      achievements: [
        "Analyzed and prepared Ziwa la ng'ombe ward community payment scheme.",
        "Supervised Ziwa la ng'ombe and Kadzandani ward youths doing community-based activities.",
        "Mentored Ziwa la ng'ombe and Kadzandani youth on entrepreneurship, digital and financial literacy.",
      ],
      skills: ["Operations Management", "Process Optimization", "Team Leadership"],
      icon: GiWheelbarrow,
    }
].sort((a, b) => parseInt(b.startDate) - parseInt(a.startDate));

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  ExperienceCard.propTypes = {
    experience: PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };

  return (
    <article className="relative pb-12 last:pb-0">
      <div className="flex gap-6">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <experience.icon className="text-gray-600 dark:text-gray-400" size={18} />
          </div>
          <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800 mt-3" />
        </div>

        <div className="flex-1 pt-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
            aria-expanded={isExpanded}
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                {experience.role}
              </h3>
              <div className="flex-shrink-0 mt-1 text-gray-400 dark:text-gray-500 transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(0deg)' }}>
                {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors inline-flex items-center gap-1">
                {experience.company}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} />
                {experience.duration}
              </span>
            </div>
          </button>

          <div 
            className="overflow-hidden transition-all duration-300 ease-out"
            style={{
              maxHeight: isExpanded ? '2000px' : '0',
              opacity: isExpanded ? 1 : 0
            }}
          >
            <div className="pt-6 space-y-6">
              <div>
                <ul className="space-y-2.5 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-gray-400 dark:text-gray-600 mt-2 flex-shrink-0">—</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-12">
            Work Experience
          </h2>
          <div>
            {work_experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;