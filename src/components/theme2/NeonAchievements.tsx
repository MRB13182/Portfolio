import React from 'react';
import { motion } from 'motion/react';

export const NeonAchievements: React.FC = () => {
  const metrics = [
    {
      number: '50+',
      label: 'Projects Completed',
      sublabel: 'Web, Mobile & AI solutions',
    },
    {
      number: '20+',
      label: 'Happy Clients',
      sublabel: 'From around the world',
    },
    {
      number: '3+',
      label: 'Years Experience',
      sublabel: 'In product development',
    },
    {
      number: '∞',
      label: 'Still Learning',
      sublabel: 'New technologies, always',
    },
  ];

  return (
    <section 
      id="neon-achievements"
      aria-labelledby="neon-achievements-heading"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="relative rounded-[36px] bg-[#11130F] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Glowing Neon Green Curved Horizon Arc Across Top (Exact Reference Visual) */}
        <div 
          className="absolute -top-32 inset-x-0 h-48 pointer-events-none opacity-80"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(183,243,43,0.55) 0%, rgba(196,255,50,0.25) 45%, transparent 75%)',
            filter: 'blur(30px)',
          }}
        />

        {/* Sharp Curved Arc Line */}
        <div 
          className="absolute top-0 inset-x-8 sm:inset-x-16 h-[2px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(183,243,43,0.9) 0%, rgba(183,243,43,0.3) 60%, transparent 100%)',
            boxShadow: '0 0 15px rgba(183,243,43,0.8)',
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B7F32B] shadow-[0_0_8px_#B7F32B]" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#B7F32B]">
                ACHIEVEMENTS
              </span>
            </div>

            <h2 
              id="neon-achievements-heading"
              className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight"
            >
              Consistent <span className="italic font-normal">growth, real impact.</span>
            </h2>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4 border-t border-white/10">
            {metrics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#B7F32B] tracking-tight mb-1 drop-shadow-[0_2px_12px_rgba(183,243,43,0.3)]">
                  {item.number}
                </span>
                <span className="text-sm sm:text-base font-bold text-white mb-0.5">
                  {item.label}
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-[#B7F32B]" />
                  <span>{item.sublabel}</span>
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
