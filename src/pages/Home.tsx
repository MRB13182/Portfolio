import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolio';
import { usePortfolioData } from '../context/DataContext';
import { 
  ArrowUpRight, 
  Briefcase, 
  FolderCheck, 
  Users, 
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../components/common/AnimatedCounter';

// Hero components
import { Hero } from '../components/sections/Hero';
import { NeonHero } from '../components/theme2/NeonHero';
import { SafeImage } from '../components/common/SafeImage';

export const Home: React.FC = () => {
  const { isNeon } = useTheme();
  const { profile } = usePortfolioData();

  const fullName = profile?.name || portfolioConfig.personal.name || (isNeon ? 'Abdullah Tariq' : 'Aarav Singh');
  const yearsExp = profile?.years_of_experience || portfolioConfig.personal.yearsOfExperience || 5;
  const bio = profile?.bio || portfolioConfig.personal.bio || 'I build modern web and mobile applications with clean design, powerful functionality and AI-driven solutions.';
  
  // Selected 3 featured projects for homepage
  const featuredProjects = portfolioConfig.projects.slice(0, 3);

  const stats = [
    {
      value: `${yearsExp}+`,
      label: 'Years Experience',
      sublabel: 'Modern web & AI applications',
      icon: Briefcase,
    },
    {
      value: '50+',
      label: 'Projects Delivered',
      sublabel: 'Full-stack & AI products',
      icon: FolderCheck,
    },
    {
      value: '20+',
      label: 'Happy Clients',
      sublabel: 'Across global markets',
      icon: Users,
    },
    {
      value: '99%',
      label: 'Client Satisfaction',
      sublabel: 'High quality & reliability',
      icon: Award,
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          1. HERO INTRODUCTION
          ========================================================================= */}
      {isNeon ? <NeonHero /> : <Hero />}

      {/* =========================================================================
          2. SHORT PROFESSIONAL SUMMARY
          ========================================================================= */}
      <section 
        id="home-summary"
        aria-label="Professional Summary"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className={`p-6 sm:p-10 lg:p-12 rounded-[32px] border transition-all duration-300 ${
            isNeon
              ? 'bg-white border-[#E6E8E1] shadow-xs'
              : 'bg-white/80 border-white/90 shadow-[0_16px_40px_-15px_rgba(165,138,242,0.12)] backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-2 h-2 rounded-full ${isNeon ? 'bg-[#B7F32B]' : 'bg-[#A58AF2]'}`} />
            <span className={`text-[11px] font-mono font-bold uppercase tracking-[0.2em] ${
              isNeon ? 'text-[#10110F]' : 'text-[#8B5CF6]'
            }`}>
              PROFESSIONAL SUMMARY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className={`font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-4 ${
                isNeon ? 'text-[#10110F]' : 'text-[#171725]'
              }`}>
                Designing with Empathy.<br />
                <span className={
                  isNeon 
                    ? 'italic font-normal underline decoration-[#B7F32B] decoration-4 underline-offset-4' 
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600'
                }>
                  Engineering with Purpose.
                </span>
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed ${
                isNeon ? 'text-[#686B65]' : 'text-[#777787]'
              }`}>
                {bio} I believe in user-centered design, clean modular architectures, and thoughtful micro-details that balance human usability with robust, scalable engineering.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/about"
                id="home-summary-read-about-btn"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition duration-200 active:scale-95 ${
                  isNeon
                    ? 'bg-[#10110F] text-white hover:bg-black shadow-xs'
                    : 'bg-[#171725] text-white hover:bg-black shadow-sm'
                }`}
              >
                <span>Read Full Bio &amp; Journey</span>
                <ArrowUpRight className={`w-4 h-4 ${isNeon ? 'text-[#B7F32B]' : 'text-violet-300'}`} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          3. SELECTED FEATURED PROJECTS
          ========================================================================= */}
      <section 
        id="home-projects"
        aria-label="Selected Featured Projects"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${isNeon ? 'bg-[#B7F32B]' : 'bg-[#A58AF2]'}`} />
              <span className={`text-[11px] font-mono font-bold uppercase tracking-[0.2em] ${
                isNeon ? 'text-[#10110F]' : 'text-[#8B5CF6]'
              }`}>
                SELECTED WORK
              </span>
            </div>

            <h2 className={`font-display font-bold text-2xl sm:text-4xl tracking-tight ${
              isNeon ? 'text-[#10110F]' : 'text-[#171725]'
            }`}>
              Featured{' '}
              <span className={
                isNeon 
                  ? 'italic font-normal underline decoration-[#B7F32B] decoration-4 underline-offset-4' 
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600'
              }>
                Projects
              </span>
            </h2>
          </div>

          <Link
            to="/projects"
            id="home-view-all-projects-btn"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition duration-200 active:scale-95 ${
              isNeon
                ? 'bg-white border-[#E6E8E1] text-[#10110F] hover:border-[#10110F]'
                : 'bg-white/80 border-slate-200 text-[#171725] hover:bg-white'
            }`}
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                isNeon
                  ? 'bg-[#11130F] text-white border-white/10 hover:border-[#B7F32B]/50 shadow-md'
                  : 'bg-white/80 border-white/90 hover:border-violet-300 shadow-[0_12px_32px_-12px_rgba(165,138,242,0.12)] backdrop-blur-xl'
              }`}
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-900">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    fallbackType="project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isNeon
                        ? 'bg-[#10110F]/80 text-[#B7F32B] border border-white/10'
                        : 'bg-white/90 text-violet-700 shadow-xs'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6">
                  <h3 className={`font-display font-bold text-lg mb-1.5 transition-colors ${
                    isNeon ? 'text-white group-hover:text-[#B7F32B]' : 'text-[#171725] group-hover:text-violet-700'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs line-clamp-2 leading-relaxed mb-4 ${
                    isNeon ? 'text-slate-300' : 'text-[#777787]'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          isNeon
                            ? 'bg-white/5 border-white/10 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className={`p-5 sm:p-6 pt-0 flex items-center justify-between border-t ${
                isNeon ? 'border-white/10 pt-4' : 'border-slate-100 pt-4'
              }`}>
                <Link
                  to="/projects"
                  className={`text-xs font-bold inline-flex items-center gap-1.5 ${
                    isNeon ? 'text-[#B7F32B] hover:underline' : 'text-violet-700 hover:underline'
                  }`}
                >
                  <span>Explore details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition ${
                      isNeon
                        ? 'border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. KEY STATISTICS
          ========================================================================= */}
      <section 
        id="home-statistics"
        aria-label="Key Statistics"
        className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className={`p-5 sm:p-6 rounded-2xl border flex flex-col justify-between ${
                  isNeon
                    ? 'bg-white border-[#E6E8E1] shadow-xs'
                    : 'bg-white/80 border-white/90 shadow-[0_12px_30px_-12px_rgba(165,138,242,0.1)] backdrop-blur-xl'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isNeon ? 'bg-[#ECF9D3] text-[#10110F]' : 'bg-violet-100 text-violet-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className={`font-display font-black text-2xl sm:text-4xl tracking-tight mb-1 ${
                    isNeon ? 'text-[#10110F]' : 'text-[#171725]'
                  }`}>
                    {typeof item.value === 'string' && /^\d+(\.\d+)?\+?$/.test(item.value)
                      ? <AnimatedCounter value={Number(item.value.replace('+', ''))} suffix={item.value.endsWith('+') ? '+' : ''} />
                      : item.value}
                  </div>
                  <div className={`font-bold text-xs sm:text-sm mb-0.5 ${
                    isNeon ? 'text-[#10110F]' : 'text-[#171725]'
                  }`}>
                    {item.label}
                  </div>
                  <div className={`text-[11px] ${
                    isNeon ? 'text-[#686B65]' : 'text-[#777787]'
                  }`}>
                    {item.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5. SHORT CONTACT CTA
          ========================================================================= */}
      <section 
        id="home-contact-cta"
        aria-label="Contact Call to Action"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className={`relative rounded-[32px] p-8 sm:p-12 lg:p-14 overflow-hidden border ${
            isNeon
              ? 'bg-[#B7F32B] text-[#10110F] border-[#C4FF32] shadow-[0_16px_40px_rgba(183,243,43,0.3)]'
              : 'bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white border-violet-400 shadow-[0_20px_45px_-12px_rgba(124,58,237,0.35)]'
          }`}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${isNeon ? 'bg-[#10110F]' : 'bg-white'}`} />
              <span className={`text-[11px] font-mono font-bold uppercase tracking-[0.2em] ${
                isNeon ? 'text-[#10110F]' : 'text-violet-200'
              }`}>
                LET'S COLLABORATE
              </span>
            </div>

            <h2 className={`font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4 ${
              isNeon ? 'text-[#10110F]' : 'text-white'
            }`}>
              Have something extraordinary in mind?
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-8 ${
              isNeon ? 'text-[#10110F]/80' : 'text-white/80'
            }`}>
              I'm open to exciting projects, full-time engineering roles, creative collaborations and consulting opportunities.
            </p>

            <Link
              to="/contact"
              id="home-cta-contact-btn"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition duration-200 active:scale-95 shadow-md ${
                isNeon
                  ? 'bg-[#10110F] text-white hover:bg-black'
                  : 'bg-white text-violet-900 hover:bg-slate-100'
              }`}
            >
              <span>Let's Make It Happen</span>
              <ArrowUpRight className={`w-4 h-4 ${isNeon ? 'text-[#B7F32B]' : 'text-violet-700'}`} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
