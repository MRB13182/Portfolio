import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { TechLogo } from '../common/TechLogo';
import { motion } from 'motion/react';

export const SkillsSection: React.FC = () => {
  const { isDark } = useTheme();

  // Selected technologies matching actual skills in the portfolio
  const featuredTools = [
    { name: 'Figma', logo: 'figma' },
    { name: 'React', logo: 'react' },
    { name: 'TypeScript', logo: 'typescript' },
    { name: 'Next.js', logo: 'nextjs' },
    { name: 'Tailwind CSS', logo: 'tailwind' },
    { name: 'Node.js', logo: 'nodejs' },
    { name: 'Python', logo: 'python' },
    { name: 'Git & GitHub', logo: 'github' },
  ];

  return (
    <section 
      id="skills" 
      aria-labelledby="skills-heading"
      className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-left">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A58AF2] mb-1.5">
            TOOLS &amp; SKILLS
          </div>
          <h2 
            id="skills-heading"
            className={`text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[#171725]'
            }`}
          >
            Technologies I Use
          </h2>
        </div>

        {/* Horizontal Collection of Individual Technology Cards (Matching Reference) */}
        <div className="overflow-x-auto pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-3.5 min-w-[620px] sm:min-w-0">
            {featuredTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default backdrop-blur-xl group ${
                  isDark
                    ? 'bg-[#161926]/75 border-white/10 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)] hover:border-white/20'
                    : 'bg-white/80 border-white/95 shadow-[0_10px_25px_-10px_rgba(165,138,242,0.12),0_1px_3px_rgba(0,0,0,0.02)] hover:border-white'
                }`}
              >
                {/* Tech Logo */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110">
                  <TechLogo logo={tool.logo} size={26} className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Tech Name */}
                <span className={`text-[11px] sm:text-xs font-semibold tracking-tight truncate w-full ${
                  isDark ? 'text-slate-200' : 'text-[#171725]'
                }`}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
