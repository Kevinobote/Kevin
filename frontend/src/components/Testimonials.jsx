import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, animate } from 'framer-motion';
import { Star } from 'lucide-react';

const FULL_ASPECT_RATIO = 16 / 9;
const COLLAPSED_ASPECT_RATIO = 1 / 3;
const MARGIN = 2;
const GAP = 2;

const Testimonials = () => {
  
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  return (
    <section className="w-full bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium uppercase tracking-wider text-slate-600">
              Customer Feedback Highlights
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What People Say About Me
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200" ref={containerRef}>
            <motion.div
              className="flex"
              drag="x"
              dragElastic={0.2}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, info) => {
                setIsDragging(false);
                const containerWidth = containerRef.current?.offsetWidth || 1;
                const offset = info.offset.x;
                const velocity = info.velocity.x;

                let newIndex = index;

                if (Math.abs(velocity) > 500) {
                  newIndex = velocity > 0 ? index - 1 : index + 1;
                } else if (Math.abs(offset) > containerWidth * 0.3) {
                  newIndex = offset > 0 ? index - 1 : index + 1;
                }

                newIndex = Math.max(0, Math.min(testimonials.length - 1, newIndex));
                setIndex(newIndex);
              }}
              style={{ x }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="shrink-0 w-full p-8 sm:p-12 md:p-16">
                  <div className="max-w-4xl mx-auto">
                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                        <Star key={i + testimonial.rating} className="w-5 h-5 text-slate-300" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-center">
                      <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-700 mb-8">
                        "{testimonial.content}"
                      </p>
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-16 w-16 rounded-full object-cover border-2 border-slate-200"
                      />
                      <div className="text-center">
                        <p className="font-semibold text-slate-900 text-lg">{testimonial.author}</p>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                      </div>

                      {/* Tags & Date */}
                      <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                        {testimonial.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="text-xs text-slate-500">• {testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Buttons */}
            <motion.button
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10
                ${
                  index === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-200'
                    : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
                }`}
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              disabled={index === testimonials.length - 1}
              onClick={() => setIndex((i) => Math.min(testimonials.length - 1, i + 1))}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10
                ${
                  index === testimonials.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-200'
                    : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
                }`}
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Thumbnails */}
          <Thumbnails testimonials={testimonials} index={index} setIndex={setIndex} />
        </div>
      </div>
    </section>
  );
};

function Thumbnails({ testimonials, index, setIndex }) {
  let x = index * 100 * (COLLAPSED_ASPECT_RATIO / FULL_ASPECT_RATIO) + MARGIN + index * GAP;
  let xSpring = useSpring(x, { bounce: 0 });
  let xPercentage = useMotionTemplate`-${xSpring}%`;

  useEffect(() => {
    xSpring.set(x);
  }, [x, xSpring]);

  return (
    <div className="flex h-20 justify-center overflow-hidden">
      <motion.div
        style={{
          aspectRatio: FULL_ASPECT_RATIO,
          gap: `${GAP}%`,
          x: xPercentage,
        }}
        className="flex min-w-0"
      >
        {testimonials.map((testimonial, i) => (
          <motion.button
            key={testimonial.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                aspectRatio: FULL_ASPECT_RATIO,
                marginLeft: `${MARGIN}%`,
                marginRight: `${MARGIN}%`,
              },
              inactive: {
                aspectRatio: COLLAPSED_ASPECT_RATIO,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            className="h-full shrink-0 rounded-lg overflow-hidden border-2 border-transparent data-[active=true]:border-blue-500 transition-all"
            data-active={i === index}
          >
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="h-full w-full object-cover pointer-events-none select-none"
            />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default Testimonials;