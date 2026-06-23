import { useState } from 'react';
import { Calendar, ArrowUpRight, Plus, Minus } from 'lucide-react';
import PropTypes from 'prop-types';
import { logo, ilab, eProd, afrocom, mksu, roman } from '../assets';

const work_experiences = [
  {
    id: 1,
    role: "Lead AI Systems Engineer",
    company: "Guild Code, Nairobi, Kenya",
    duration: "February 2023 – Present",
    startDate: "2023",
    logo: logo,
    achievements: [
      "Architected and deployed production-ready agentic AI pipelines for autonomous decision-making under noisy, incomplete data conditions.",
      "Built Sema Sasa: an end-to-end ASR system fine-tuned on African language speech data (Wav2Vec2 + T5), addressing linguistic exclusion. Winner of the Deep Learning Indaba Community Challenge 2025.",
      "Developed multilingual, code-switching AI agents for low-resource African languages across financial access and agribusiness domains.",
      "Built eKuza: an AI-driven agribusiness management platform digitising smallholder farmer tracking and real-time payment automation.",
      "Deployed production ML systems on GCP; built TypeScript-based API layers for model serving and real-time inference.",
      "Championed an OpenSourceFirst architectural philosophy, advising regional startups on data sovereignty and preventing vendor lock-in.",
    ],
    skills: ["ASR", "Agentic AI", "GCP", "FastAPI", "PyTorch", "HuggingFace"],
  },
  {
    id: 2,
    role: "Research Scholar",
    company: "iLabAfrica, Strathmore University, Nairobi, Kenya",
    duration: "May 2024 – May 2026",
    startDate: "2024",
    logo: ilab,
    achievements: [
      "Leading autonomous modelling research for large-scale analytics, with focus on adaptive time-series and spatio-temporal systems.",
      "Conducting Responsible AI and AI governance research, ensuring ethical compliance of deployed AI systems in sensitive domains (finance, public policy).",
      "Developing adaptive modelling frameworks for learning under distributional shift and data scarcity.",
      "Collaborating with multidisciplinary teams across mathematics, computer science, and biostatistics.",
      "Applied research on credit scoring for unbanked populations using national financial access datasets (FinAccess).",
      "Implemented SHAP and LIME explainability guardrails to eliminate proxy discrimination.",
    ],
    skills: ["Responsible AI", "Spatio-Temporal ML", "Bayesian Inference", "SHAP/LIME"],
  },
  {
    id: 3,
    role: "Associate Product Manager",
    company: "eProd Solutions Limited, Nairobi, Kenya",
    duration: "May 2023 – June 2024",
    startDate: "2023.5",
    logo: eProd,
    achievements: [
      "Owned the full SaaS product lifecycle for ERP modules used by 20+ agribusinesses across East and West Africa.",
      "Integrated data-driven forecasting and predictive logistics systems into ERP platforms; utilised Power BI and SQL to drive a 20% improvement in system accuracy.",
      "Translated complex logistics and payment workflows into technical user stories for engineering teams.",
      "Unified fragmented data modules (inventory, logistics, sales) into single-source-of-truth architectures, eliminating 40% of manual intervention overhead.",
      "Initiated a Data Literacy programme for interns and clients, reducing onboarding time by 30%.",
    ],
    skills: ["Product Management", "Power BI", "SQL", "Agile/Scrum", "ERP"],
  },
  {
    id: 4,
    role: "Election Project Manager (Data & System Operations)",
    company: "Roman Solutions Limited, Machakos, Kenya",
    duration: "February 2022 – March 2023",
    startDate: "2022",
    logo: roman,
    achievements: [
      "Managed digital infrastructure for 7,000+ concurrent users; ensured system integrity, monitoring, and rapid incident response under mission-critical conditions.",
      "Led cross-functional team under high-pressure timelines, achieving 100% execution of product deliverables.",
      "Conducted training and outreach sessions for non-technical stakeholders; enforced strict regulatory and audit requirements.",
    ],
    skills: ["Project Management", "Data Infrastructure", "Compliance"],
  },
  {
    id: 5,
    role: "Data Analyst & Client Relations Officer",
    company: "eProd Solutions Limited, Nairobi, Kenya",
    duration: "September 2022 – May 2023",
    startDate: "2022.7",
    logo: eProd,
    achievements: [
      "Conducted in-depth analysis and extraction of clients' data using SQL.",
      "Developed and managed reports and dashboards for clients utilizing Power BI and SQL.",
      "Provided quality assurance, software testing, and client support services.",
      "Trained clients on setup, installation, and operation of the eProd software.",
    ],
    skills: ["SQL", "Power BI", "QA", "Client Relations"],
  },
  {
    id: 6,
    role: "Research Enumerator",
    company: "Nutrition International, Kiambu, Kenya",
    duration: "January 2025 – February 2025",
    startDate: "2025",
    logo: null,
    achievements: [
      "Supported endline surveys in Kiambu County; reviewed data instruments and improved survey quality.",
      "Trained community health workers, strengthening data reliability in real-world deployments.",
    ],
    skills: ["Survey Design", "Data Quality", "Field Research"],
  },
].sort((a, b) => parseFloat(b.startDate) - parseFloat(a.startDate));

const earlyCareer = [
  { role: "Software Engineer Intern", company: "eProd Solutions", duration: "January 2022 – February 2023" },
  { role: "IT Intern", company: "Swahilipot Hub Foundation", duration: "January 2021 – April 2021" },
];

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="relative pb-10 last:pb-0">
      <div className="flex gap-5">
        <div className="flex flex-col items-center flex-shrink-0">
          {experience.logo ? (
            <img src={experience.logo} alt="" className="w-10 h-10 rounded-full object-contain bg-white border border-slate-200 dark:border-slate-700 p-1" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-teal-500 dark:bg-teal-400 flex items-center justify-center">
              <span className="text-white dark:text-slate-900 text-xs font-bold">{experience.company.charAt(0)}</span>
            </div>
          )}
          <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />
        </div>

        <div className="flex-1 pt-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
            aria-expanded={isExpanded}
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-lg font-semibold text-navy-900 dark:text-white tracking-tight">
                {experience.role}
              </h3>
              <div className="flex-shrink-0 mt-1 text-slate-400">
                {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-medium text-teal-700 dark:text-teal-400 inline-flex items-center gap-1">
                {experience.company}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} />
                {experience.duration}
              </span>
            </div>
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-out"
            style={{ maxHeight: isExpanded ? '2000px' : '0', opacity: isExpanded ? 1 : 0 }}
          >
            <div className="pt-4 space-y-4">
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {experience.achievements.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                {experience.skills.map((skill, i) => (
                  <span key={i} className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400">
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

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-offwhite dark:bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          {work_experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
            Early Career
          </h3>
          <div className="space-y-3">
            {earlyCareer.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                <span className="font-medium">{item.role}</span>
                <span className="text-slate-400">·</span>
                <span>{item.company}</span>
                <span className="text-slate-400 text-xs ml-auto">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
