import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Sema Sasa",
    subtitle: "Inclusive ASR for African Languages",
    description: "An end-to-end ASR system fine-tuned on African language speech data using Wav2Vec2 + T5, addressing linguistic exclusion for underserved communities. The system transcribes audio into text in multiple African languages and conducts sentiment analysis on the transcribed text.",
    impact: "Winner — Deep Learning Indaba Community Challenge 2025, Kigali, Rwanda",
    tags: ["Wav2Vec2", "T5", "Low-Resource NLP", "Speech Recognition", "GCP"],
    github: "https://github.com/Kevinobote/Sema",
    featured: true,
  },
  {
    id: 2,
    title: "Kalenjin ASR Baseline",
    subtitle: "First Documented Speech Recognition for Kalenjin",
    description: "Developed a two-stage fine-tuning strategy on Wav2Vec2-XLS-R for Kalenjin, an under-resourced Kenyan language. Integrated KenLM language model achieving a 55.3% relative CER reduction and 10.7% WER improvement. Establishes the first documented ASR baseline for this language.",
    impact: "Accepted — AAIAC 2026 (IEEE Xplore), Dar es Salaam, Tanzania",
    tags: ["Wav2Vec2-XLS-R", "KenLM", "ASR", "Low-Resource", "IEEE"],
    github: null,
    featured: true,
  },
  {
    id: 3,
    title: "Telecom Customer Churn ML Pipeline",
    subtitle: "End-to-End Production ML for B2B Telecom",
    description: "Full ML pipeline on 8,454 real B2B telecom accounts: dataset curation and feature engineering (14 to 22 variables), benchmarking 10 classifier families, SVMSMOTE resampling, post-hoc SHAP/LIME explainability, and FastAPI deployment with real-time and batch scoring.",
    impact: "Published — American Journal of Networks and Communications, 2026",
    tags: ["Classification", "SHAP/LIME", "FastAPI", "Feature Engineering"],
    github: null,
    featured: true,
  },
  {
    id: 4,
    title: "eKuza",
    subtitle: "AI-Driven Agribusiness Platform",
    description: "An AI-driven agribusiness management platform digitising smallholder farmer tracking and real-time payment automation, deployed across East African agricultural value chains.",
    impact: null,
    tags: ["Agentic AI", "Agribusiness", "Real-Time Systems"],
    github: null,
    featured: false,
  },
  {
    id: 5,
    title: "Transit Prediction (GNN + LSTM)",
    subtitle: "Spatio-Temporal ML for Urban Mobility",
    description: "Hybrid Graph Neural Network + LSTM architecture modelling complex spatio-temporal dependence structures in African urban transit networks for travel time prediction.",
    impact: "Under Review — Spatio-Temporal Discovery Journal, 2026",
    tags: ["GNN", "LSTM", "Spatio-Temporal ML", "Urban Transit"],
    github: null,
    featured: false,
  },
  {
    id: 6,
    title: "Wave Energy Farm Optimization",
    subtitle: "Renewable Energy + Optimization",
    description: "Optimization of wave energy converter placements using machine learning to maximize energy capture from ocean waves under uncertainty.",
    impact: null,
    tags: ["Optimization", "Energy", "Machine Learning"],
    github: "https://github.com/Kevinobote/WEC",
    featured: false,
  },
];

const ProjectsPage = () => {
  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);

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
            Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            The connective thread: building AI that holds up under noise, scarcity, and linguistic 
            diversity — translating research into production systems for low-resource and multilingual contexts.
          </p>
        </motion.div>

        <div className="mb-14">
          <h2 className="text-sm font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400 mb-6">
            Flagship Projects
          </h2>
          <div className="space-y-6">
            {featured.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-1">{project.title}</h3>
                <p className="text-sm text-teal-700 dark:text-teal-400 font-medium mb-3">{project.subtitle}</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">{project.description}</p>
                
                {project.impact && (
                  <div className="flex items-center gap-2 text-sm text-navy-900 dark:text-white font-medium bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2 mb-3 border-l-2 border-teal-400">
                    <Award className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    {project.impact}
                  </div>
                )}

                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-teal-700">
                    <Github className="w-4 h-4" /> View on GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">
            Other Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {other.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <h3 className="font-semibold text-navy-900 dark:text-white mb-1">{project.title}</h3>
                <p className="text-sm text-teal-700 dark:text-teal-400 font-medium mb-2">{project.subtitle}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">{project.description}</p>
                {project.impact && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">{project.impact}</p>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
