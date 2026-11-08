import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  Palette, 
  Layers, 
  Search, 
  Smartphone, 
  ArrowUpRight 
} from 'lucide-react';
import { motion } from 'motion/react';

export const ServicesSection: React.FC = () => {
  const { isDark } = useTheme();

  const services = [
    {
      id: 'product-design',
      title: 'Product Design',
      description: 'Designing intuitive and engaging user interfaces for web and mobile products.',
      icon: Smartphone,
      accentBg: 'bg-[#FEF3C7] text-[#D97706]', // Soft Amber
      darkAccentBg: 'bg-amber-500/20 text-amber-300',
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Creating seamless user experiences through research, wireframing and prototyping.',
      icon: Palette,
      accentBg: 'bg-[#EDE9FE] text-[#7C3AED]', // Soft Lavender/Purple
      darkAccentBg: 'bg-purple-500/20 text-purple-300',
    },
    {
      id: 'design-systems',
      title: 'Design Systems',
      description: 'Building scalable design systems and component libraries for consistent experiences.',
      icon: Layers,
      accentBg: 'bg-[#DBEAFE] text-[#2563EB]', // Soft Blue
      darkAccentBg: 'bg-blue-500/20 text-blue-300',
    },
    {
      id: 'user-research',
      title: 'User Research',
      description: 'Understanding users deeply through research and data to inform better design.',
      icon: Search,
      accentBg: 'bg-[#CCFBF1] text-[#0D9488]', // Soft Teal/Cyan
      darkAccentBg: 'bg-teal-500/20 text-teal-300',
    },
  ];

  return (
    <section 
      id="services" 
      aria-labelledby="services-heading"
      className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A58AF2] mb-1.5">
            WHAT I DO
          </div>
          <h2 
            id="services-heading"
            className={`text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[#171725]'
            }`}
          >
            Services I Offer
          </h2>
        </div>

        {/* 4-Column Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group rounded-3xl border p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isDark
                    ? 'bg-[#161926]/75 border-white/10 shadow-[0_16px_35px_-12px_rgba(0,0,0,0.5)] hover:border-white/20'
                    : 'bg-white/75 border-white/90 shadow-[0_16px_35px_-12px_rgba(165,138,242,0.12),0_1px_3px_rgba(0,0,0,0.02)] hover:border-white'
                }`}
              >
                <div>
                  {/* Minimal Colorful Icon Badge */}
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 ${
                    isDark ? service.darkAccentBg : service.accentBg
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Service Title */}
                  <h3 className={`text-base font-bold tracking-tight mb-2 ${
                    isDark ? 'text-white' : 'text-[#171725]'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className={`text-xs sm:text-[13px] leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-[#777787]'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Small Arrow Icon (Bottom Right) */}
                <div className="mt-6 flex justify-end">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isDark 
                      ? 'text-slate-400 group-hover:text-white group-hover:bg-white/10' 
                      : 'text-[#777787] group-hover:text-[#171725] group-hover:bg-slate-100'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
