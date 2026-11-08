import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/DataContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const { isDark } = useTheme();
  const { testimonials: dbTestimonials } = usePortfolioData();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reference testimonials matching exact style and client roles
  const defaultTestimonials = [
    {
      id: 't-1',
      name: 'Rohit Sharma',
      role: 'Product Manager, Google',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
      content: 'Aarav is an exceptional designer. He understands user needs deeply and delivers outstanding results on every project.',
    },
    {
      id: 't-2',
      name: 'Neha Verma',
      role: 'Design Lead, Microsoft',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
      content: 'Working with Aarav was a smooth and inspiring experience. His attention to detail and user empathy are truly impressive.',
    },
    {
      id: 't-3',
      name: 'Karan Malhotra',
      role: 'Founder, StartupX',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
      content: "Aarav's designs not only look amazing but also solve real user problems. Highly recommended for any high-impact digital product.",
    },
  ];

  const items = (dbTestimonials && dbTestimonials.length >= 3)
    ? dbTestimonials.map(t => ({
        id: t.id,
        name: t.name,
        role: `${t.role}${t.company ? `, ${t.company}` : ''}`,
        avatar: t.avatar,
        content: t.content,
      }))
    : defaultTestimonials;

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      aria-labelledby="testimonials-heading"
      className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Carousel Controls */}
        <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
          <div className="text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A58AF2] mb-1.5">
              TESTIMONIALS
            </div>
            <h2 
              id="testimonials-heading"
              className={`text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-[#171725]'
              }`}
            >
              What Clients Say
            </h2>
          </div>

          {/* Carousel Arrows (Matching Reference Pill Buttons) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition active:scale-95 ${
                isDark
                  ? 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                  : 'border-slate-200/80 bg-white text-[#171725] hover:bg-slate-50 shadow-xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition active:scale-95 ${
                isDark
                  ? 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                  : 'border-slate-200/80 bg-white text-[#171725] hover:bg-slate-50 shadow-xs'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Column Testimonial Cards Grid (Exact Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`p-6 rounded-3xl border flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#161926]/75 border-white/10 shadow-[0_16px_35px_-12px_rgba(0,0,0,0.5)]'
                  : 'bg-white/80 border-white/95 shadow-[0_16px_35px_-12px_rgba(165,138,242,0.12),0_1px_3px_rgba(0,0,0,0.02)]'
              }`}
            >
              <div>
                {/* Quotation Icon (Lavender Accent) */}
                <div className="text-[#A58AF2] mb-3 flex justify-between items-center">
                  <Quote className="w-5 h-5 fill-current opacity-80" />
                </div>

                {/* Testimonial Quote Prose */}
                <p className={`text-xs sm:text-[13px] leading-relaxed mb-6 ${
                  isDark ? 'text-slate-300' : 'text-[#171725]'
                }`}>
                  "{item.content}"
                </p>
              </div>

              {/* Client Info Lockup */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-white/10">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 border border-white/80 dark:border-white/20">
                  <img
                    src={item.avatar || '/profile/profile.png'}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                <div className="min-w-0">
                  <h4 className={`text-xs sm:text-sm font-bold tracking-tight truncate ${
                    isDark ? 'text-white' : 'text-[#171725]'
                  }`}>
                    {item.name}
                  </h4>
                  <p className={`text-[10px] sm:text-[11px] truncate ${
                    isDark ? 'text-slate-400' : 'text-[#777787]'
                  }`}>
                    {item.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
