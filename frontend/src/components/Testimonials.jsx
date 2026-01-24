import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Star } from "lucide-react";

/* =======================
   IMAGE IMPORTS
   ======================= */
import chris from "../assets/images/team/chris.jpeg";
import nicole from "../assets/images/team/nicole.jpeg";
import moses from "../assets/images/team/moses.jpeg";
import jackline from "../assets/images/team/jackline.jpeg";
import derek from "../assets/images/team/derek.jpeg";
import norbert from "../assets/images/team/nobert.jpeg";
import stephen from "../assets/images/team/stephen.jpeg";
import immaculate from "../assets/images/team/immaculate.jpeg";

/* =======================
   CONSTANTS
   ======================= */
const FULL_ASPECT_RATIO = 16 / 9;
const COLLAPSED_ASPECT_RATIO = 1 / 3;
const MARGIN = 2;
const GAP = 2;

/* =======================
   COMPONENT
   ======================= */
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "Kevin Obote is the kind of colleague you look forward to working with. He possesses deep expertise and applies his knowledge with precision.",
      author: "Chris Achinga",
      role: "Software Engineer (Python & JavaScript)",
      rating: 5,
      date: "August 28, 2024",
      image: chris,
    },
    {
      id: 2,
      content:
        "Kevin brings his best self to every project and always delivers on his promises.",
      author: "Nicole G. O. Apondi",
      role:
        "Civil Engineering Graduate | Researcher | Environmentalist | STEM Mentor",
      rating: 4,
      date: "August 24, 2024",
      image: nicole,
    },
    {
      id: 3,
      content:
        "Kevin is great at planning and perfectly executing all the projects he's working on.",
      author: "Moses Mutuku",
      role: "Software Developer",
      rating: 5,
      date: "August 24, 2024",
      image: moses,
    },
    {
      id: 4,
      content:
        "Kevin’s expertise in data science, Power BI, and ML models is exceptional. He excels in collaboration.",
      author: "Achieng' Jackline",
      role: "Research Scholar | Data Scientist | AI",
      rating: 5,
      date: "August 21, 2024",
      image: jackline,
    },
    {
      id: 5,
      content:
        "Yes, he is great at project testing, evaluation, and implementation.",
      author: "Derek Kigen",
      role: "Technical Field Officer",
      rating: 4,
      date: "August 21, 2024",
      image: derek,
    },
    {
      id: 6,
      content: "You can always count on Kevin to deliver quality services.",
      author: "Norbert Osiemo",
      role: "Software Engineer",
      rating: 5,
      date: "August 21, 2024",
      image: norbert,
    },
    {
      id: 7,
      content: "Great teamwork that resulted in massive success.",
      author: "Stephen Ndunge",
      role: "Network Administrator",
      rating: 5,
      date: "August 21, 2024",
      image: stephen,
    },
    {
      id: 8,
      content:
        "Kevin is exceptionally professional with strong communication skills and delivers outstanding results.",
      author: "Immaculate Wakio",
      role: "Data Analyst | Data Scientist",
      rating: 5,
      date: "August 22, 2024",
      image: immaculate,
    },
  ];

  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const slideToIndex = (i) => {
    const width = containerRef.current.offsetWidth || 1;
    animate(x, -i * width, { type: "spring", stiffness: 300, damping: 30 });
    setIndex(i);
  };

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const width = containerRef.current.offsetWidth || 1;
      animate(x, -index * width, { type: "spring", stiffness: 300, damping: 30 });
    }
  }, [index, isDragging, x]);

  return (
    <section className="w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex justify-center gap-2">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="text-sm uppercase tracking-wider text-slate-600">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">
            What People Say About Me
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl bg-white border"
        >
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            style={{ x }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const width = containerRef.current.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              } else if (Math.abs(offset) > width * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              setIndex(Math.max(0, Math.min(testimonials.length - 1, newIndex)));
            }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full shrink-0 p-12 text-center">
                <div className="mb-4 flex justify-center">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-xl text-slate-700 mb-8">“{t.content}”</p>

                <img
                  src={t.image}
                  alt={t.author}
                  className="mx-auto h-16 w-16 rounded-full object-cover border"
                />

                <p className="mt-3 font-semibold text-slate-900">{t.author}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
                <p className="mt-1 text-xs text-slate-500">{t.date}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <Thumbnails
          testimonials={testimonials}
          index={index}
          slideToIndex={slideToIndex}
        />
      </div>
    </section>
  );
};

/* =======================
   THUMBNAILS
   ======================= */
function Thumbnails({ testimonials, index, slideToIndex }) {
  return (
    <div className="flex h-20 justify-center overflow-hidden mt-6 gap-2">
      {testimonials.map((t, i) => (
        <button
          key={t.id}
          onClick={() => slideToIndex(i)}
          className={`h-full rounded-lg overflow-hidden border-2 transition-all duration-300 ${
            i === index ? "border-blue-500 scale-105" : "border-transparent scale-100"
          }`}
        >
          <img
            src={t.image}
            alt={t.author}
            className="h-full w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}

export default Testimonials;
