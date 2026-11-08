import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const LuxuryBackground: React.FC = () => {
  const { isDark, portfolioTheme } = useTheme();
  const isNeon = portfolioTheme === 'neon';

  if (isNeon) {
    return (
      <div 
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-500"
      >
        {/* Theme 2 Base Canvas (Off-white #F7F8F5) */}
        <div className="absolute inset-0 bg-[#F7F8F5] transition-colors duration-500" />

        {/* Ambient Neon-Lime Gradient Glows (Matching Second Reference Image) */}
        <div 
          className="absolute -top-32 right-[-5%] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_45%_45%,rgba(183,243,43,0.30)_0%,rgba(196,255,50,0.18)_40%,rgba(236,249,211,0.25)_65%,transparent_80%)] blur-[90px] pointer-events-none transform-gpu"
          style={{ transform: 'translate3d(0,0,0)' }}
        />

        {/* Mid-right subtle lime ambient */}
        <div 
          className="absolute top-[45%] right-[-10%] w-[540px] h-[540px] rounded-full bg-[radial-gradient(circle,rgba(183,243,43,0.18)_0%,rgba(196,255,50,0.08)_50%,transparent_75%)] blur-[80px] pointer-events-none transform-gpu"
          style={{ transform: 'translate3d(0,0,0)' }}
        />

        {/* Bottom subtle lime aura */}
        <div 
          className="absolute -bottom-24 left-[15%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(183,243,43,0.15)_0%,rgba(236,249,211,0.20)_50%,transparent_80%)] blur-[95px] pointer-events-none transform-gpu"
          style={{ transform: 'translate3d(0,0,0)' }}
        />

        {/* Crisp minimal tech grain / grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(#10110F 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>
    );
  }

  // Theme 1: Lavender Glassmorphism Background
  return (
    <div 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-500"
    >
      {/* Base Canvas */}
      <div 
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? 'bg-[#0F111A]' : 'bg-[#F7F7FB]'
        }`} 
      />

      {/* Primary Lavender & Light Blue Fluid Ambiance */}
      {!isDark ? (
        <>
          {/* Ethereal Silk Lavender Glow - Top Center / Right */}
          <div 
            className="absolute -top-32 right-[-5%] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(196,180,250,0.45)_0%,rgba(165,138,242,0.22)_45%,rgba(185,213,255,0.15)_70%,transparent_85%)] blur-[80px] pointer-events-none transform-gpu"
            style={{ transform: 'translate3d(0,0,0)' }}
          />

          {/* Soft Sky Blue Gradient - Top Left */}
          <div 
            className="absolute -top-20 -left-24 w-[540px] h-[540px] rounded-full bg-[radial-gradient(circle,rgba(185,213,255,0.40)_0%,rgba(215,227,255,0.20)_50%,transparent_75%)] blur-[75px] pointer-events-none transform-gpu"
            style={{ transform: 'translate3d(0,0,0)' }}
          />

          {/* Central Lavender Wave Glow */}
          <div 
            className="absolute top-[38%] -left-32 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(196,180,250,0.30)_0%,rgba(165,138,242,0.12)_50%,transparent_80%)] blur-[95px] pointer-events-none transform-gpu"
            style={{ transform: 'translate3d(0,0,0)' }}
          />

          {/* Bottom Right Crystal Violet Ambient */}
          <div 
            className="absolute bottom-[-10%] -right-20 w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle,rgba(196,180,250,0.35)_0%,rgba(185,213,255,0.25)_45%,transparent_80%)] blur-[100px] pointer-events-none transform-gpu"
            style={{ transform: 'translate3d(0,0,0)' }}
          />

          {/* Decorative Translucent 3D Glass Spheres */}
          <div 
            className="hidden lg:block absolute top-[52%] -right-16 w-44 h-44 rounded-full opacity-65 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(220,214,254,0.6) 40%, rgba(165,138,242,0.35) 75%, rgba(185,213,255,0.2) 100%)',
              boxShadow: 'inset -10px -10px 25px rgba(165,138,242,0.3), 0 20px 40px -10px rgba(165,138,242,0.25)',
              filter: 'blur(1px)',
              backdropFilter: 'blur(12px)',
            }}
          />

          <div 
            className="hidden lg:block absolute bottom-[8%] right-8 w-28 h-28 rounded-full opacity-60 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(210,230,255,0.6) 45%, rgba(196,180,250,0.35) 80%)',
              boxShadow: 'inset -6px -6px 18px rgba(185,213,255,0.4), 0 15px 30px -8px rgba(165,138,242,0.2)',
              filter: 'blur(0.5px)',
            }}
          />
        </>
      ) : (
        <>
          <div 
            className="absolute -top-32 right-[-5%] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle,rgba(165,138,242,0.18)_0%,rgba(124,58,237,0.08)_50%,transparent_75%)] blur-[90px] pointer-events-none transform-gpu"
          />
          <div 
            className="absolute top-[40%] -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(185,213,255,0.12)_0%,rgba(165,138,242,0.06)_50%,transparent_75%)] blur-[90px] pointer-events-none transform-gpu"
          />
        </>
      )}

      {/* Gentle Subtle Ethereal Noise / Grid */}
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.015]'}`}
        style={{
          backgroundImage: 'radial-gradient(#A58AF2 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
