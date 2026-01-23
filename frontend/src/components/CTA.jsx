import { Calendar, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const handleBookTime = () => {
  window.open(
    "https://calendar.app.google/2MBsZrTo7t1ktbbF7",
    "_blank"
  );
};


  const handleDownloadCV = () => {
    window.open('/Kevin_Obote.pdf', '_blank');
  };

  const cards = [
    {
      id: 'booking',
      title: 'Schedule a Meeting',
      description: 'Book a 15-minute intro call',
      icon: Calendar,
      action: handleBookTime,
      accentColor: 'blue'
    },
    {
      id: 'cv',
      title: 'Download CV',
      description: 'View my full resume',
      icon: Download,
      action: handleDownloadCV,
      accentColor: 'emerald'
    }
  ];

  const accentColors = {
    blue: {
      iconBg: 'bg-blue-50',
      iconText: 'text-blue-600',
      hoverBorder: 'hover:border-blue-200',
      hoverShadow: 'hover:shadow-blue-100/50'
    },
    emerald: {
      iconBg: 'bg-emerald-50',
      iconText: 'text-emerald-600',
      hoverBorder: 'hover:border-emerald-200',
      hoverShadow: 'hover:shadow-emerald-100/50'
    }
  };

  return (
    <section className="relative py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let's Connect
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Ready to discuss your project or learn more about my work
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {cards.map((card, index) => {
            const colors = accentColors[card.accentColor];
            const Icon = card.icon;

            return (
              <motion.button
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={card.action}
                className={`
                  group relative w-full text-left
                  bg-white rounded-2xl border border-slate-200
                  p-8 transition-all duration-200
                  ${colors.hoverBorder} ${colors.hoverShadow}
                  hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
                  cursor-pointer
                `}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`
                    inline-flex items-center justify-center
                    h-12 w-12 rounded-xl mb-4
                    ${colors.iconBg}
                  `}
                >
                  <Icon className={`h-6 w-6 ${colors.iconText}`} strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {card.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-8"
                >
                  <svg
                    className="h-5 w-5 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASection;