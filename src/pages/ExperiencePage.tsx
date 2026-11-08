import React from 'react';
import { portfolioConfig } from '../config/portfolio';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const ExperiencePage: React.FC = () => {
  const { isNeon } = useTheme();
  const experiences = portfolioConfig.experience;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
      
      {/* Header */}
      <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border ${
          isNeon
            ? 'bg-white text-[#10110F] border-[#E6E8E1]'
            : 'bg-white/80 text-[#8B5CF6] border-slate-200/80 shadow-xs'
        }`}>
          {isNeon ? (
            <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
          ) : (
            <Briefcase className="w-3.5 h-3.5" />
          )}
          <span className="font-mono uppercase tracking-wider text-[11px]">
            CAREER & PROFESSIONAL HISTORY
          </span>
        </div>

        <h1 className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-4 ${
          isNeon ? 'text-[#10110F]' : 'text-[#171725]'
        }`}>
          Professional{' '}
          <span className={
            isNeon 
              ? 'italic font-normal underline decoration-[#B7F32B] decoration-4 underline-offset-4' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600'
          }>
            Experience
          </span>
        </h1>

        <p className={`text-sm sm:text-base leading-relaxed ${
          isNeon ? 'text-[#686B65]' : 'text-[#777787]'
        }`}>
          A proven track record of engineering scalable digital architectures, enterprise SaaS applications, and human-centered user experiences.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id || idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className={`p-6 sm:p-8 lg:p-10 rounded-3xl border transition-all duration-300 ${
              isNeon
                ? 'bg-white border-[#E6E8E1] hover:border-[#10110F] shadow-xs hover:shadow-lg'
                : 'bg-white/80 border-white/90 shadow-[0_14px_35px_-12px_rgba(165,138,242,0.14)] backdrop-blur-xl'
            }`}
          >
            {/* Top row: Role, Company, Period badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 inline-block ${
                  isNeon
                    ? 'bg-[#ECF9D3] text-[#10110F] border border-[#B7F32B]/40'
                    : 'bg-violet-100 text-violet-700'
                }`}>
                  {exp.type || 'Full-time'}
                </span>
                
                <h2 className={`font-display font-bold text-xl sm:text-2xl tracking-tight ${
                  isNeon ? 'text-[#10110F]' : 'text-[#171725]'
                }`}>
                  {exp.position}
                </h2>
                
                <div className={`text-sm font-semibold mt-1 ${
                  isNeon ? 'text-[#686B65]' : 'text-[#777787]'
                }`}>
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-mono font-medium ${
                  isNeon
                    ? 'bg-[#F7F8F5] border-[#E6E8E1] text-[#10110F]'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  <Calendar className={`w-3.5 h-3.5 ${isNeon ? 'text-[#B7F32B]' : 'text-violet-600'}`} />
                  <span>{exp.duration}</span>
                </span>

                {exp.location && (
                  <span className={`inline-flex items-center gap-1 text-[11px] ${
                    isNeon ? 'text-[#686B65]' : 'text-[#777787]'
                  }`}>
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
              isNeon ? 'text-[#686B65]' : 'text-[#777787]'
            }`}>
              {exp.description}
            </p>

            {/* Achievements bullets */}
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="mb-6 space-y-2">
                <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isNeon ? 'text-[#10110F]' : 'text-[#171725]'
                }`}>
                  Key Accomplishments:
                </h3>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                        isNeon ? 'bg-[#B7F32B]' : 'bg-violet-500'
                      }`} />
                      <span className={isNeon ? 'text-[#10110F]' : 'text-[#171725]'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack tags */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="pt-4 border-t border-[#E6E8E1] flex flex-wrap items-center gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-lg border ${
                      isNeon
                        ? 'bg-[#F7F8F5] border-[#E6E8E1] text-[#10110F]'
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <Link
          to="/contact"
          className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition duration-200 active:scale-95 ${
            isNeon
              ? 'bg-[#B7F32B] text-[#10110F] hover:bg-[#C4FF32] shadow-[0_4px_16px_rgba(183,243,43,0.30)]'
              : 'bg-[#171725] text-white hover:bg-black shadow-md'
          }`}
        >
          <span>Discuss Opportunities</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
