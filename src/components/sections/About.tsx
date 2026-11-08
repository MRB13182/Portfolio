import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/DataContext';
import { portfolioConfig } from '../../config/portfolio';
import { Briefcase, FolderCheck, Users, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const { isDark } = useTheme();
  const { profile } = usePortfolioData();

  const yearsExp = profile?.years_of_experience || portfolioConfig.personal.yearsOfExperience || 5;

  const stats = [
    {
      icon: Briefcase,
      value: `${yearsExp}+`,
      label: 'Years Experience',
    },
    {
      icon: FolderCheck,
      value: '30+',
      label: 'Projects Completed',
    },
    {
      icon: Users,
      value: '15+',
      label: 'Happy Clients',
    },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about" 
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Main Rounded Glassmorphism Container (Matching Reference) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className={`rounded-3xl sm:rounded-[36px] border p-6 sm:p-10 lg:p-12 backdrop-blur-2xl transition-all duration-300 ${
            isDark
              ? 'bg-[#161926]/80 border-white/10 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.6)]'
              : 'bg-white/70 border-white/90 shadow-[0_20px_45px_-15px_rgba(165,138,242,0.14),0_1px_3px_rgba(0,0,0,0.02)]'
          }`}
        >
          {/* Section Kicker */}
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A58AF2] mb-3">
            ABOUT ME
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Sub-Column: Heading & 3 Compact Stat Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <h2 
                id="about-heading"
                className={`text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-snug mb-8 ${
                  isDark ? 'text-white' : 'text-[#171725]'
                }`}
              >
                Designing with Empathy<br />
                Building with Purpose
              </h2>

              {/* Three Compact Stat Cards (Horizontal Row) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg">
                {stats.map(({ icon: Icon, value, label }, index) => (
                  <div
                    key={index}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-center flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-0.5 ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white'
                        : 'bg-white/80 border-slate-200/60 shadow-[0_4px_16px_rgba(165,138,242,0.08)] text-[#171725]'
                    }`}
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#A58AF2]/15 text-[#8B5CF6] flex items-center justify-center mb-1.5 shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-base sm:text-xl font-black leading-tight">
                      {value}
                    </div>
                    <div className={`text-[9px] sm:text-[10px] font-medium leading-tight mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-[#777787]'
                    }`}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sub-Column: Bio Paragraph & "More About Me" CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1">
              <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed">
                <p className={isDark ? 'text-slate-300' : 'text-[#777787]'}>
                  I'm a digital product designer and full-stack engineer with 5+ years of experience turning complex problems into simple, intuitive and engaging experiences.
                </p>
                <p className={isDark ? 'text-slate-300' : 'text-[#777787]'}>
                  I believe in user-centered design, clean aesthetics and thoughtful details that balance human empathy with robust, scalable engineering.
                </p>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => handleScrollTo('services')}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border transition duration-200 active:scale-95 ${
                    isDark
                      ? 'bg-white/10 hover:bg-white/15 border-white/15 text-white'
                      : 'bg-white/90 hover:bg-white border-slate-200/80 text-[#171725] shadow-xs'
                  }`}
                >
                  <span>More About Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
