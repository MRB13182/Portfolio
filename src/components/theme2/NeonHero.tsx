import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { usePortfolioData } from '../../context/DataContext';
import { portfolioConfig } from '../../config/portfolio';

export const NeonHero: React.FC = () => {
  const { profile } = usePortfolioData();
  const fullName = profile?.name || portfolioConfig.personal.name || 'Abdullah Tariq';
  const firstName = fullName.split(' ')[0] || 'Abdullah';
  const lastName = fullName.split(' ').slice(1).join(' ') || 'Tariq';
  const profileImg = profile?.profile_image || portfolioConfig.assets.profileImage || '/profile/profile.png';

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Happy Clients' },
    { value: '∞', label: 'Learning & Building' },
  ];

  return (
    <section 
      id="neon-hero"
      aria-labelledby="hero-display-heading"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Bold Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          
          {/* Kicker Tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#B7F32B] shadow-[0_0_8px_#B7F32B]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#10110F]">
              SOFTWARE DEVELOPER / AI ENGINEER
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            id="hero-display-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-[#10110F] mb-6"
          >
            Hi, I’m<br />
            <span className="inline-block px-2.5 py-0.5 rounded-2xl bg-[#B7F32B] text-[#10110F] shadow-[0_4px_20px_rgba(183,243,43,0.35)]">
              {fullName}
            </span>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#686B65] max-w-xl leading-relaxed mb-8"
          >
            I build modern web and mobile applications with clean design, powerful functionality and AI-driven solutions that solve real problems and create meaningful experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Link
              to="/projects"
              id="neon-hero-explore-work-btn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#B7F32B] text-[#10110F] hover:bg-[#C4FF32] transition duration-200 active:scale-95 shadow-[0_4px_16px_rgba(183,243,43,0.30)] hover:shadow-[0_6px_22px_rgba(183,243,43,0.45)]"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              id="neon-hero-contact-btn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white text-[#10110F] border border-[#E6E8E1] hover:border-[#10110F] transition duration-200 active:scale-95 shadow-xs"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* 4 Stats in horizontal row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#E6E8E1]"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#10110F] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs text-[#686B65] font-medium mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Creative Visual with Portrait, Lime Shapes & Floating Snippet */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px]">
          
          {/* Neon-lime fluid organic background backdrop */}
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-[48px] bg-gradient-to-tr from-[#B7F32B] via-[#C4FF32] to-[#ECF9D3] -rotate-6 transform-gpu opacity-90 shadow-[0_20px_50px_rgba(183,243,43,0.35)]" />

          {/* Subtle secondary lime layer */}
          <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-[40px] bg-[#10110F] rotate-3 transform-gpu opacity-5" />

          {/* Top Handwritten Note & Doodles */}
          <div className="absolute -top-6 sm:-top-8 left-4 sm:left-6 z-20 pointer-events-none">
            <span className="font-handwriting text-xl sm:text-2xl text-[#10110F] font-bold block transform -rotate-12 leading-tight">
              Code Create<br />
              Innovate Repeat ↗
            </span>
          </div>

          {/* Top-Right Floating Status Capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-2 sm:top-4 right-0 sm:-right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#11130F] text-white text-[11px] font-semibold flex items-center gap-2 shadow-lg border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#B7F32B] animate-pulse" />
            <span>Turning Ideas Into Reality</span>
          </motion.div>

          {/* Developer Portrait Image */}
          <div className="relative z-10 w-[280px] h-[340px] sm:w-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-transparent to-[#10110F]/30 border-2 border-white/80">
            <img 
              src={profileImg} 
              alt={fullName}
              className="w-full h-full object-cover object-top filter contrast-[1.04]"
              onError={(e) => {
                // High-quality fallback portrait
                e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>

          {/* Bottom-Right Floating Dark Code Card (Matching Reference) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-6 sm:-bottom-8 -right-2 sm:-right-6 z-20 p-4 rounded-2xl bg-[#11130F] text-slate-100 border border-white/10 shadow-2xl max-w-[260px] sm:max-w-[280px] text-[11px] font-mono leading-relaxed"
          >
            <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
              <span className="text-[10px] text-slate-400 font-sans font-semibold">developer.config.ts</span>
            </div>
            <div>
              <span className="text-[#B7F32B]">const</span> developer = &#123;<br />
              &nbsp;&nbsp;name: <span className="text-[#ECF9D3]">"{fullName}"</span>,<br />
              &nbsp;&nbsp;role: [<span className="text-amber-300">"Developer"</span>, <span className="text-amber-300">"AI"</span>],<br />
              &nbsp;&nbsp;passion: <span className="text-[#ECF9D3]">"Building Solutions"</span>,<br />
              &nbsp;&nbsp;goal: <span className="text-[#B7F32B]">"Create Impact"</span><br />
              &#125;
            </div>
          </motion.div>

          {/* Handwritten Signature */}
          <div className="absolute bottom-2 left-0 sm:-left-6 z-20 pointer-events-none">
            <span className="font-handwriting text-lg sm:text-xl text-[#10110F] font-bold block transform -rotate-6">
              {fullName}<br />
              <span className="text-xs font-sans font-medium text-[#686B65]">Software Developer</span>
            </span>
          </div>

          {/* Far Right Vertical Availability Pill */}
          <div className="hidden xl:flex absolute -right-10 top-1/2 -translate-y-1/2 z-20 items-center gap-1.5 py-2 px-3 rounded-full bg-white border border-[#E6E8E1] text-[10px] font-mono font-bold tracking-widest text-[#10110F] rotate-90 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F32B]" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

        </div>

      </div>
    </section>
  );
};
