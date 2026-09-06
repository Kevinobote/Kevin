import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Sema Sasa",
    subtitle: "Inclusive ASR for African Languages",
    description: "An end-to-end ASR system fine-tuned on African language speech data using Wav2Vec2 + T5, addressing linguistic exclusion for underserved communities. The system transcribes audio into text in multiple African languages and conducts sentiment analysis on the transcribed text.",
    impact: "Winner: Deep Learning Indaba Community Challenge 2025, Kigali, Rwanda",
    tags: ["Wav2Vec2", "T5", "Low-Resource NLP", "Speech Recognition", "GCP"],
    github: "https://github.com/Kevinobote/Sema",
    featured: true,
    caseStudy: {
      problem: "Most ASR systems are trained almost exclusively on high-resource languages, leaving African-language speakers without working speech interfaces. That is a direct barrier to voice-based financial and information access.",
      approach: "Fine-tuned Wav2Vec2 for acoustic modelling on African-language speech, paired with a T5 model for downstream text normalisation and sentiment analysis on the resulting transcript.",
      evaluation: "Evaluated on held-out African-language speech across multiple dialect variants; judged winner of the Deep Learning Indaba Community Challenge 2025 against competing regional submissions.",
      deployment: "Deployed on GCP with a TypeScript API layer for real-time transcription and inference serving.",
      outcome: "Working transcription + sentiment pipeline for underserved-language speech, and the seed project for Kevin's continued ASR research (Kalenjin, Swahili).",
    },
  },
  {
    id: 2,
    title: "Kalenjin ASR Baseline",
    subtitle: "First Documented Speech Recognition for Kalenjin",
    description: "Developed a two-stage fine-tuning strategy on Wav2Vec2-XLS-R for Kalenjin, an under-resourced Kenyan language. Integrated KenLM language model achieving a 55.3% relative CER reduction and 10.7% WER improvement. Establishes the first documented ASR baseline for this language.",
    impact: "Accepted: AAIAC 2026 (IEEE Xplore), Dar es Salaam, Tanzania",
    tags: ["Wav2Vec2-XLS-R", "KenLM", "ASR", "Low-Resource", "IEEE"],
    github: null,
    featured: true,
    caseStudy: {
      problem: "Kalenjin, spoken by millions in Kenya, had no documented ASR baseline at all: zero prior benchmark to build against or improve on.",
      approach: "Two-stage fine-tuning of Wav2Vec2-XLS-R: an initial acoustic adaptation stage on limited Kalenjin speech, followed by a targeted fine-tune, with a KenLM n-gram language model integrated at decode time to correct acoustic-only errors.",
      evaluation: "Measured Character Error Rate (CER) and Word Error Rate (WER) against a Wav2Vec2-XLS-R-only baseline: 55.3% relative CER reduction and 10.7% WER improvement from the KenLM integration alone.",
      deployment: "Research artifact: model and methodology documented for reproducibility; accepted for publication at AAIAC 2026 (IEEE Xplore).",
      outcome: "First published, reproducible ASR baseline for Kalenjin, and a reference point other researchers can now build on.",
    },
  },
  {
    id: 3,
    title: "Telecom Customer Churn ML Pipeline",
    subtitle: "End-to-End Production ML for B2B Telecom",
    description: "Full ML pipeline on 8,454 real B2B telecom accounts: dataset curation and feature engineering (14 to 22 variables), benchmarking 10 classifier families, SVMSMOTE resampling, post-hoc SHAP/LIME explainability, and FastAPI deployment with real-time and batch scoring.",
    impact: "Published: American Journal of Networks and Communications, 2026",
    tags: ["Classification", "SHAP/LIME", "FastAPI", "Feature Engineering"],
    github: null,
    featured: true,
    caseStudy: {
      problem: "A B2B telecom operator needed to predict which of its 8,454 real accounts were at risk of churning, from a raw dataset that wasn't analysis-ready and with severe class imbalance between churned and retained accounts.",
      approach: "Curated and engineered the dataset from 14 up to 22 informative variables, benchmarked 10 classifier families (from linear baselines to ensemble methods) under a common evaluation protocol, and applied SVMSMOTE to correct class imbalance before final model selection.",
      evaluation: "Compared classifiers on held-out accounts; layered SHAP and LIME on the selected model for post-hoc, per-prediction explainability so churn-risk flags could be audited rather than trusted blindly.",
      deployment: "Shipped as a FastAPI service supporting both real-time single-account scoring and batch scoring for portfolio-wide risk review.",
      outcome: "Production-usable churn scoring pipeline; methodology and results published in the American Journal of Networks and Communications, 2026.",
    },
  },
  {
    id: 4,
    title: "eKuza",
    subtitle: "AI-Driven Agribusiness Management Platform",
    description: "A full-stack agribusiness management platform digitising smallholder farmer onboarding, produce tracking, and real-time payment automation. Built with AI-powered forecasting for yield prediction and logistics optimisation, deployed across East African agricultural value chains serving multiple cooperatives.",
    impact: "Pilot, Guild Code",
    github: null,
    featured: false,
  },
  {
    id: 5,
    title: "GIE-POS",
    subtitle: "Guild Integrated Enterprise Point-of-Sale System",
    description: "Led the development of an enterprise-grade, offline-first POS and operational management platform for multi-service premises (Restaurant, Bar, Car Wash). Features unified sales and billing, centralized inventory with recipe-based deductions, supplier and procurement management, role-based access control, and executive dashboards with consolidated reporting across all business units.",
    impact: "Pilot, Guild Code",
    github: null,
    featured: false,
  },
  {
    id: 8,
    title: "NAIRA",
    subtitle: "Benchmarking Deep Learning for Nigerian Naira Currency Classification",
    description: "Systematic benchmark of 11 models (from a logistic regression baseline through VGG16, ResNet50, InceptionV3, EfficientNet-B0/B3, MobileNetV3-Large, and ViT-Small/16) for classifying 8 Naira banknote denominations. Includes cryptographic data-integrity auditing (removing cross-split leaks and duplicates), McNemar's test and bootstrap confidence intervals for statistical rigor, and Grad-CAM/t-SNE interpretability analysis.",
    impact: "Work in progress: preparing for conference submission",
    tags: ["CNN", "Transfer Learning", "Vision Transformer", "Ensemble Methods", "PyTorch"],
    github: null,
    featured: false,
  },
  {
    id: 6,
    title: "Transit Prediction (GNN + LSTM)",
    subtitle: "Spatio-Temporal ML for Urban Mobility",
    description: "Hybrid Graph Neural Network + LSTM architecture modelling complex spatio-temporal dependence structures in African urban transit networks for travel time prediction.",
    impact: "Under Review: Spatio-Temporal Discovery Journal, 2026",
    tags: ["GNN", "LSTM", "Spatio-Temporal ML", "Urban Transit"],
    github: null,
    featured: false,
  },
  {
    id: 7,
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
            diversity. Translating research into production systems for low-resource and multilingual contexts.
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

                {project.caseStudy && (
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    {[
                      ["Problem", project.caseStudy.problem],
                      ["Approach & Architecture", project.caseStudy.approach],
                      ["Evaluation", project.caseStudy.evaluation],
                      ["Deployment", project.caseStudy.deployment],
                      ["Outcome", project.caseStudy.outcome],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400 mb-1">
                          {label}
                        </dt>
                        <dd className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
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
