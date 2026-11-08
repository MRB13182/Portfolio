import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  Compass, 
  Target, 
  Lightbulb, 
  PenTool, 
  RefreshCw,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProcessSection: React.FC = () => {
  const { isDark } = useTheme();

  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understanding user needs and project goals.',
      icon: Compass,
      accent: '#8B5CF6',
    },
    {
      number: '02',
      title: 'Define',
      description: 'Research, analyze and define the problem.',
      icon: Target,
      accent: '#3B82F6',
    },
    {
      number: '03',
      title: 'Ideate',
      description: 'Brainstorm and create wireframes & concepts.',
      icon: Lightbulb,
      accent: '#06B6D4',
    },
    {
      number: '04',
      title: 'Design',
      description: 'Crafting clean, intuitive and engaging interfaces.',
      icon: PenTool,
      accent: '#A855F7',
    },
    {
      number: '05',
      title: 'Test & Iterate',
      description: 'Testing with users and refining for the best experience.',
      icon: RefreshCw,
      accent: '#EC4899',
    },
  ];

  return (
    <section 
      id="process" 
      aria-labelledby="process-heading"
      className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A58AF2] mb-1.5">
            MY PROCESS
          </div>
          <h2 
            id="process-heading"
            className={`text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[#171725]'
            }`}
          >
            Design Process I Follow
          </h2>
        </div>

        {/* 5 Process Steps Container (Horizontal on Desktop, Connected on Mobile) */}
        <div className="relative">
          
          {/* Subtle Horizontal Connecting Track (Desktop only) */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-[#C4B4FA]/60 to-transparent pointer-events-none" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`relative p-5 rounded-3xl border flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-[#161926]/75 border-white/10 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] hover:border-white/20'
                      : 'bg-white/80 border-white/95 shadow-[0_12px_30px_-10px_rgba(165,138,242,0.10),0_1px_3px_rgba(0,0,0,0.02)] hover:border-white'
                  }`}
                >
                  <div>
                    {/* Top Row: Minimal Icon + Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <span className={`text-xs font-mono font-bold tracking-wider ${
                        isDark ? 'text-slate-400' : 'text-[#777787]'
                      }`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className={`text-sm sm:text-base font-bold tracking-tight mb-1.5 ${
                      isDark ? 'text-white' : 'text-[#171725]'
                    }`}>
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-[#777787]'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Arrow for Desktop between steps */}
                  {index < steps.length - 1 && (
                    <div 
                      aria-hidden="true" 
                      className="hidden lg:flex absolute -right-2.5 top-7 z-20 text-[#A58AF2]/60"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
