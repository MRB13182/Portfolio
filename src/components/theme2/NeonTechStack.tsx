import React from 'react';
import { motion } from 'motion/react';
import { TechLogo } from '../common/TechLogo';

export const NeonTechStack: React.FC = () => {
  const tools = [
    { name: 'JavaScript', id: 'javascript' },
    { name: 'TypeScript', id: 'typescript' },
    { name: 'React', id: 'react' },
    { name: 'Next.js', id: 'nextjs' },
    { name: 'Node.js', id: 'nodejs' },
    { name: 'Python', id: 'python' },
    { name: 'React Native', id: 'reactnative' },
    { name: 'MongoDB', id: 'mongodb' },
    { name: 'PostgreSQL', id: 'postgresql' },
    { name: 'Firebase', id: 'firebase' },
    { name: 'Docker', id: 'docker' },
    { name: 'AWS', id: 'aws' },
    { name: 'Figma', id: 'figma' },
  ];

  return (
    <section 
      id="neon-tech-stack" 
      aria-labelledby="neon-tech-heading"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#10110F]">
              TECH STACK
            </span>
          </div>

          <h2 
            id="neon-tech-heading"
            className="font-display font-bold text-3xl sm:text-4xl text-[#10110F] tracking-tight"
          >
            Tools I work with.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#686B65] max-w-md text-left md:text-right">
          Modern tools for modern problems.<br className="hidden sm:inline" />
          Continuously learning and exploring new technologies.
        </p>
      </div>

      {/* Horizontal collection of clean rounded cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
        {tools.map((tool, idx) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
            whileHover={{ y: -3 }}
            className="p-4 rounded-2xl bg-white border border-[#E6E8E1] hover:border-[#10110F] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F7F8F5] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <TechLogo logo={tool.id} size={24} className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-[#10110F] tracking-tight truncate max-w-full">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
