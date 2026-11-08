import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolioData } from '../context/DataContext';
import { portfolioConfig } from '../config/portfolio';
import { 
  Briefcase, 
  FolderCheck, 
  Users, 
  ArrowUpRight, 
  Award, 
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const { isNeon } = useTheme();
  const { profile } = usePortfolioData();

  const fullName = profile?.name || portfolioConfig.personal.name || (isNeon ? 'Abdullah Tariq' : 'Aarav Singh');
  const yearsExp = profile?.years_of_experience || portfolioConfig.personal.yearsOfExperience || 5;
  const bio = profile?.bio || portfolioConfig.personal.bio;
  const extendedBio = profile?.extended_bio || portfolioConfig.personal.extendedBio;
  const profileImg = profile?.profile_image || portfolioConfig.assets.profileImage || '/profile/profile.png';

  const stats = [
    {
      icon: Briefcase,
      value: `${yearsExp}+`,
      label: 'Years Experience',
      desc: 'Developing scalable web & mobile products',
    },
    {
      icon: FolderCheck,
      value: '50+',
      label: 'Projects Delivered',
      desc: 'End-to-end applications launched',
    },
    {
      icon: Users,
      value: '20+',
      label: 'Happy Clients',
      desc: 'Across North America, Europe & Asia',
    },
    {
      icon: Award,
      value: '99%',
      label: 'Success Rate',
      desc: 'On-time delivery & satisfaction',
    },
  ];

  const philosophies = [
    {
      title: 'Human-Centered Utility',
      desc: 'Every line of code and UI element exists to solve a real human problem simply and gracefully.',
    },
    {
      title: 'High-Performance Architecture',
      desc: 'Prioritizing sub-second loading, clean state isolation, and zero-compromise runtime responsiveness.',
    },
    {
      title: 'Enduring Craftsmanship',
      desc: 'Writing maintainable, type-safe, and self-documenting code built to scale over years, not months.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
      
      {/* Top Banner / Hero of About */}
      <div className="mb-16 sm:mb-20">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border ${
          isNeon
            ? 'bg-white text-[#10110F] border-[#E6E8E1]'
            : 'bg-white/80 text-[#8B5CF6] border-slate-200/80 shadow-xs'
        }`}>
          {isNeon ? (
            <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
          ) : (
            <Sparkles className="w-3.5 h-3.5" />
          )}
          <span className="font-mono uppercase tracking-wider text-[11px]">
            BIOGRAPHY & PHILOSOPHY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Headline & Bio */}
          <div className="lg:col-span-7">
            <h1 className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6 ${
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
            </h1>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
              isNeon ? 'text-[#686B65]' : 'text-[#777787]'
            }`}>
              <p>{bio}</p>
              <p>{extendedBio}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition duration-200 active:scale-95 ${
                  isNeon
                    ? 'bg-[#B7F32B] text-[#10110F] hover:bg-[#C4FF32] shadow-sm'
                    : 'bg-[#171725] text-white hover:bg-black'
                }`}
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold border transition duration-200 active:scale-95 ${
                  isNeon
                    ? 'bg-white border-[#E6E8E1] text-[#10110F] hover:border-[#10110F]'
                    : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>

          {/* Right: Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Back glow */}
              <div className={`absolute -inset-2 rounded-3xl blur-xl opacity-60 ${
                isNeon ? 'bg-[#B7F32B]/40' : 'bg-violet-400/30'
              }`} />

              <div className={`relative rounded-3xl overflow-hidden border p-3 ${
                isNeon 
                  ? 'bg-white border-[#E6E8E1] shadow-xl' 
                  : 'bg-white border-white/80 shadow-xl'
              }`}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  <img 
                    src={profileImg} 
                    alt={fullName}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className={`font-display font-bold text-base ${isNeon ? 'text-[#10110F]' : 'text-[#171725]'}`}>
                      {fullName}
                    </h3>
                    <span className="text-xs text-[#686B65]">
                      Full-Stack &amp; AI Engineer
                    </span>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                    isNeon ? 'bg-[#ECF9D3] text-[#10110F]' : 'bg-violet-100 text-violet-700'
                  }`}>
                    Active
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 4 Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`p-6 rounded-2xl border ${
                isNeon
                  ? 'bg-white border-[#E6E8E1] hover:border-[#10110F] shadow-xs'
                  : 'bg-white/80 border-slate-200/80 shadow-xs backdrop-blur-md'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                isNeon
                  ? 'bg-[#ECF9D3] text-[#10110F]'
                  : 'bg-violet-100 text-violet-600'
              }`}>
                <Icon className="w-5 h-5" />
              </div>

              <div className={`font-display font-black text-3xl tracking-tight mb-1 ${
                isNeon ? 'text-[#10110F]' : 'text-[#171725]'
              }`}>
                {s.value}
              </div>

              <div className={`font-bold text-sm mb-1 ${
                isNeon ? 'text-[#10110F]' : 'text-[#171725]'
              }`}>
                {s.label}
              </div>

              <p className="text-xs text-[#686B65]">
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Engineering Philosophy */}
      <div className={`p-8 sm:p-12 rounded-3xl border mb-16 ${
        isNeon
          ? 'bg-white border-[#E6E8E1] shadow-xs'
          : 'bg-white/80 border-slate-200/80 shadow-md backdrop-blur-xl'
      }`}>
        <div className="flex items-center gap-2 mb-3">
          <span className={`w-2 h-2 rounded-full ${isNeon ? 'bg-[#B7F32B]' : 'bg-violet-500'}`} />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#686B65]">
            CORE PRINCIPLES
          </span>
        </div>

        <h2 className={`font-display font-bold text-2xl sm:text-4xl mb-8 ${
          isNeon ? 'text-[#10110F]' : 'text-[#171725]'
        }`}>
          How I Approach Software Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {philosophies.map((p, i) => (
            <div key={i} className="flex flex-col">
              <span className={`text-xl font-mono font-black mb-2 ${
                isNeon ? 'text-[#B7F32B]' : 'text-violet-600'
              }`}>
                0{i + 1}.
              </span>
              <h3 className={`font-bold text-base sm:text-lg mb-2 ${
                isNeon ? 'text-[#10110F]' : 'text-[#171725]'
              }`}>
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#686B65] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
