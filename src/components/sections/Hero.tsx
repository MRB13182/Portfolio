import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { portfolioConfig } from '../../config/portfolio';
import { usePortfolioData } from '../../context/DataContext';
import { SafeImage } from '../common/SafeImage';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const { profile } = usePortfolioData();

  const fullName = profile?.name || portfolioConfig.personal.name || 'Aarav Singh';
  const primaryTitle = (profile?.titles && profile.titles[0]) || 'Digital Product Designer';
  const profileImg = (typeof profile?.profile_image === 'string' && profile.profile_image.trim())
    ? profile.profile_image.trim()
    : portfolioConfig.assets.profileImage || '/profile/profile.png';
  
  const introText = profile?.bio || 'I craft meaningful digital experiences that are intuitive, beautiful and built with purpose.';
  const yearsExp = profile?.years_of_experience || portfolioConfig.personal.yearsOfExperience || 5;

  const trustedBrands = [
    { name: 'Google', icon: 'Google' },
    { name: 'Microsoft', icon: 'Microsoft' },
    { name: 'airbnb', icon: 'airbnb' },
    { name: 'HubSpot', icon: 'HubSpot' },
    { name: 'dribbble', icon: 'dribbble' },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      aria-label="Introduction & Hero"
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ============================================================
              LEFT COLUMN: Editorial Typography & Actions (Cols 1-7)
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Greeting Label */}
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#A58AF2] mb-3">
              <span>HELLO, I'M</span>
            </div>

            {/* Large Personal Name */}
            <h1 className={`text-4xl sm:text-6xl lg:text-[62px] font-black tracking-tight leading-[1.04] mb-2 sm:mb-3 ${
              isDark ? 'text-white' : 'text-[#171725]'
            }`}>
              {fullName}
            </h1>

            {/* Gradient-Highlighted Professional Designation */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-5 bg-gradient-to-r from-[#A58AF2] via-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent">
              {primaryTitle}
            </h2>

            {/* Short Professional Introduction */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-xl mb-7 sm:mb-9 ${
              isDark ? 'text-slate-300' : 'text-[#777787]'
            }`}>
              {introText}
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
              {/* Primary Action Button (Charcoal / Reference Button) */}
              <Link
                to="/projects"
                id="hero-view-work-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-[13px] font-bold bg-[#171725] text-white hover:bg-[#252538] transition-all duration-200 shadow-md shadow-black/10 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Secondary Action Button (Frosted Glass Pill) */}
              <Link
                to="/contact"
                id="hero-contact-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-[13px] font-semibold border backdrop-blur-md transition-all duration-200 active:scale-95 border-slate-200/80 bg-white/80 hover:bg-white text-[#171725] hover:shadow-xs"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </Link>
            </div>

            {/* Trusted Brands / Technologies Indicators */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/60 dark:border-white/10 w-full max-w-lg">
              <span className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase ${
                isDark ? 'text-slate-400' : 'text-[#777787]'
              }`}>
                Trusted by
              </span>

              <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                {trustedBrands.map((brand) => (
                  <span
                    key={brand.name}
                    className={`text-xs sm:text-sm font-semibold tracking-tight transition-opacity opacity-55 hover:opacity-100 ${
                      isDark ? 'text-slate-300' : 'text-[#777787]'
                    }`}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* ============================================================
              RIGHT COLUMN: Glass Arch Composition with Floating Cards (Cols 8-12)
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient Back Glow for Arch */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 rounded-[60px] bg-gradient-to-tr from-[#A58AF2]/25 via-[#C4B4FA]/30 to-[#B9D5FF]/35 blur-2xl pointer-events-none transform -rotate-1 scale-105" 
            />

            {/* Main Arch Frame Container (Matching Reference Silhouette) */}
            <div 
              className={`relative z-10 w-[290px] sm:w-[350px] h-[380px] sm:h-[450px] rounded-t-[130px] sm:rounded-t-[150px] rounded-b-[44px] p-2 sm:p-2.5 border backdrop-blur-xl transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-white/15 to-[#161926]/90 border-white/20 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.7)]'
                  : 'bg-gradient-to-b from-white/95 via-white/80 to-[#F7F7FB]/90 border-white/95 shadow-[0_24px_50px_-15px_rgba(165,138,242,0.22),0_4px_12px_rgba(0,0,0,0.02)]'
              }`}
            >
              {/* Inner Picture Container with Curved Top Arch */}
              <div className="w-full h-full rounded-t-[120px] sm:rounded-t-[140px] rounded-b-[38px] overflow-hidden relative bg-slate-900">
                <SafeImage
                  src={profileImg}
                  alt={fullName}
                  fallbackType="profile"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Card 1: Experience Badge (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className={`absolute -top-3 right-0 sm:-right-4 z-20 px-4 py-3 rounded-2xl border backdrop-blur-xl shadow-lg ${
                isDark
                  ? 'bg-[#161926]/90 border-white/15 text-white shadow-black/40'
                  : 'bg-white/90 border-white text-[#171725] shadow-[0_12px_28px_-8px_rgba(165,138,242,0.25)]'
              }`}
            >
              <div className="text-xl sm:text-2xl font-black leading-none mb-0.5">
                {yearsExp}+
              </div>
              <div className={`text-[10px] sm:text-[11px] font-semibold leading-tight ${isDark ? 'text-slate-300' : 'text-[#777787]'}`}>
                Years of<br />Experience
              </div>
            </motion.div>

            {/* Floating Card 2: Design Impact +120% (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className={`absolute -bottom-4 right-[-10px] sm:-right-6 z-20 px-4 py-3 rounded-2xl border backdrop-blur-xl shadow-lg w-40 sm:w-44 ${
                isDark
                  ? 'bg-[#161926]/90 border-white/15 text-white shadow-black/40'
                  : 'bg-white/90 border-white text-[#171725] shadow-[0_14px_30px_-8px_rgba(165,138,242,0.25)]'
              }`}
            >
              <div className={`text-[10px] font-semibold uppercase tracking-wider mb-0.5 ${isDark ? 'text-slate-400' : 'text-[#777787]'}`}>
                Design Impact
              </div>
              <div className="text-base sm:text-lg font-black tracking-tight mb-1 text-[#171725] dark:text-white">
                +120%
              </div>

              {/* Lavender Mini Sparkline Wave (Reference Element) */}
              <svg className="w-full h-5 overflow-visible" viewBox="0 0 100 20" fill="none">
                <path
                  d="M0 16 C 20 18, 35 12, 50 14 C 65 16, 75 4, 100 2"
                  stroke="#A58AF2"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Floating Decorative Sparkle Badge (Left of Portrait) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, type: 'spring' }}
              className={`absolute top-[48%] left-[-12px] sm:left-[-18px] z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center backdrop-blur-xl shadow-md ${
                isDark
                  ? 'bg-[#161926]/90 border-white/20 text-[#C4B4FA]'
                  : 'bg-white/95 border-white text-[#8B5CF6] shadow-[0_8px_20px_rgba(165,138,242,0.3)]'
              }`}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
