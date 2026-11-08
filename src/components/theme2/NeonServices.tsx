import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const NeonServices: React.FC = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Modern, scalable web applications with clean architecture, responsive layouts and optimal speed.',
      icon: Globe,
    },
    {
      title: 'Mobile App Development',
      desc: 'Cross-platform mobile solutions for iOS and Android built with React Native and modern native tooling.',
      icon: Smartphone,
    },
    {
      title: 'AI & Machine Learning',
      desc: 'Intelligent products, neural prompt chaining, automated workflows, and LLM integrations with real-world impact.',
      icon: Sparkles,
    },
    {
      title: 'Full-Stack Development',
      desc: 'End-to-end application development with resilient APIs, type-safe databases, and cloud infrastructure.',
      icon: Layers,
    },
  ];

  return (
    <section 
      id="neon-services"
      aria-labelledby="neon-services-heading"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#10110F]">
              WHAT I DO
            </span>
          </div>

          <h2 
            id="neon-services-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#10110F] tracking-tight leading-tight"
          >
            Turning ideas<br />
            into <span className="italic font-normal">digital products.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#686B65] max-w-xl mt-3">
            From concept to deployment, I create scalable, user-focused solutions with modern technologies and thoughtful design.
          </p>
        </div>

        <Link
          to="/about"
          id="neon-services-learn-more-btn"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white text-[#10110F] border border-[#E6E8E1] hover:border-[#10110F] transition duration-200 active:scale-95 shadow-xs shrink-0 self-start md:self-auto"
        >
          <span>Learn More</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 4 Clean White Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-6 sm:p-7 rounded-[28px] bg-white border border-[#E6E8E1] hover:border-[#10110F] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              <div>
                {/* Top Row: Icon & Circular Arrow Button */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F8F5] text-[#10110F] flex items-center justify-center border border-[#E6E8E1] group-hover:bg-[#B7F32B] transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#F7F8F5] text-[#10110F] flex items-center justify-center group-hover:bg-[#10110F] group-hover:text-white transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#10110F] mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#686B65] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
