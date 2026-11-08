import React from 'react';
import { Search, Compass, Layout, Code2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export const NeonProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand the problem and user needs.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'Research, strategy and technical planning.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Create clean, intuitive and engaging interfaces.',
      icon: Layout,
    },
    {
      num: '04',
      title: 'Develop',
      desc: 'Build, test and iterate with modern technologies.',
      icon: Code2,
    },
    {
      num: '05',
      title: 'Launch',
      desc: 'Deploy and measure real-world impact.',
      icon: Rocket,
    },
  ];

  return (
    <section 
      id="neon-process"
      aria-labelledby="neon-process-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#10110F]">
            MY PROCESS
          </span>
        </div>

        <h2 
          id="neon-process-heading"
          className="font-display font-bold text-3xl sm:text-5xl text-[#10110F] tracking-tight"
        >
          From idea <span className="italic font-normal">to impact.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#686B65] max-w-xl mt-3">
          A simple, focused process to turn ideas into meaningful digital products.
        </p>
      </div>

      {/* 5-Step Process Timeline */}
      <div className="relative">
        
        {/* Connecting Line across desktop steps */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#E6E8E1] z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                {/* Step Circle with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E6E8E1] text-[#10110F] flex items-center justify-center font-display font-bold text-sm shadow-xs group-hover:border-[#10110F] transition-colors relative">
                    <Icon className="w-5 h-5 text-[#10110F]" />
                    <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-[#B7F32B] text-[#10110F] font-mono text-[9px] font-bold">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-[#10110F] mb-1.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#686B65] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
