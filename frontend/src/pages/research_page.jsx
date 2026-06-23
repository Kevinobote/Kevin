import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import { SiGooglescholar } from 'react-icons/si';

const publications = [
  {
    title: "Low-Resource ASR for Kalenjin: Two-Stage Fine-Tuning of Wav2Vec2-XLS-R with KenLM Integration",
    authors: "Kevin Obote et al.",
    venue: "AAIAC 2026: 2nd International Conference on Advancements of AI in the African Context, Dar es Salaam, Tanzania",
    volume: "To be published in IEEE Xplore",
    year: "2026",
    status: "accepted",
    doi: null,
    url: null,
    role: "Lead Author",
    tags: ["Conference (Accepted)"],
    note: "First documented ASR baseline for Kalenjin; 55.3% relative CER reduction and 10.7% WER improvement.",
  },
  {
    title: "The Case for Swahili NLP: Addressing Linguistic Gaps in a Vital African Language",
    authors: "Kevin Obote, Benjamin Kikwai",
    venue: "Arusha Working Papers in African Linguistics",
    volume: "8(1), 20–34",
    year: "2026",
    status: "published",
    doi: null,
    url: "https://arushalinguistics.org/publications/Obote_Kikwai_AWPAL_2026.pdf",
    role: "Lead Author",
    tags: ["Peer-Reviewed"],
    note: null,
  },
  {
    title: "Predicting Customer Churn in the Telecommunications Industry using Machine Learning Techniques",
    authors: "Adeline Makokha, Kevin Obote, Henry Muchiri, Kennedy Senagi",
    venue: "American Journal of Networks and Communications",
    volume: "15(1), 10–26",
    year: "2026",
    status: "published",
    doi: "10.11648/j.ajnc.20261501.12",
    url: null,
    role: "Co-Author",
    tags: ["Peer-Reviewed"],
    note: null,
  },
  {
    title: "Bridging Swahili Communication Gaps: Real-Time Audio-to-Text Sentiment Analysis via Pre-trained NLP",
    authors: "Kevin Obote, Benjamin Kikwai, Kennedy Senagi, Joyce Njiiri, John Olukuru, Joseph Sevilla",
    venue: "American Journal of Artificial Intelligence",
    volume: "9(2), 167–185",
    year: "2025",
    status: "published",
    doi: "10.11648/j.ajai.20250902.18",
    url: null,
    role: "Lead Author",
    tags: ["Peer-Reviewed"],
    note: "WER of 0.19 in low-resource Swahili speech recognition using Wav2Vec2 + T5.",
  },
  {
    title: "Enhancing Travel Time Prediction in African Public Transit Systems",
    authors: "S.A. Owino, Kevin Obote et al.",
    venue: "Spatio-Temporal Discovery Journal",
    volume: "",
    year: "2026",
    status: "under-review",
    doi: null,
    url: null,
    role: "Co-Author",
    tags: ["Under Review"],
    note: "Hybrid GNN + LSTM architecture modelling spatio-temporal dependence in urban transit networks.",
  },
];

const statusColors = {
  "published": "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800",
  "accepted": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
  "under-review": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800",
};

const ResearchPage = () => {
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
            Research & Publications
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            My research focuses on low-resource language AI, automatic speech recognition 
            for African languages, and applied machine learning for contexts where data 
            scarcity is the norm, not the exception.
          </p>
          <div className="flex items-center gap-3 mt-6 flex-wrap">
            <a
              href="https://scholar.google.com/citations?user=QzMwc7IAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-teal-700 dark:text-teal-400 hover:text-teal-800 font-medium"
            >
              <SiGooglescholar className="w-4 h-4" />
              Google Scholar <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://orcid.org/0009-0000-7099-2154"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-teal-700 dark:text-teal-400 hover:text-teal-800 font-medium"
            >
              ORCID: 0009-0000-7099-2154 <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${statusColors[pub.status]}`}
                  >
                    {tag}
                  </span>
                ))}
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                  {pub.role}
                </span>
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400">
                  {pub.year}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2 leading-snug">
                {pub.title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                {pub.authors}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                {pub.venue}{pub.volume && `, ${pub.volume}`}
              </p>

              {pub.note && (
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2 border-l-2 border-teal-400">
                  {pub.note}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 mt-3">
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-mono text-teal-700 dark:text-teal-400 hover:text-teal-800"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    DOI: {pub.doi}
                  </a>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-teal-700 dark:text-teal-400 hover:text-teal-800"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View PDF
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
