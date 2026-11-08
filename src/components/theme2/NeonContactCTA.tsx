import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { usePortfolioData } from '../../context/DataContext';
import { portfolioConfig } from '../../config/portfolio';

export const NeonContactCTA: React.FC = () => {
  const { profile } = usePortfolioData();
  const profileImg = profile?.profile_image || portfolioConfig.assets.profileImage || '/profile/profile.png';

  return (
    <section 
      id="neon-contact-cta"
      aria-labelledby="neon-contact-heading"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="relative rounded-[36px] bg-[#B7F32B] text-[#10110F] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(183,243,43,0.35)] border border-[#C4FF32]">
        
        {/* Subtle decorative radial shapes */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/20 blur-2xl pointer-events-none" />
        <div className="absolute -top-20 right-1/3 w-72 h-72 rounded-full bg-[#ECF9D3]/40 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Text & CTA */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#10110F]" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#10110F]">
                LET'S CONNECT
              </span>
            </div>

            <h2 
              id="neon-contact-heading"
              className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#10110F] tracking-tight leading-[1.08] mb-4"
            >
              Have something<br />
              extraordinary in mind?
            </h2>

            <p className="text-sm sm:text-base text-[#10110F]/80 max-w-xl mb-8 leading-relaxed">
              I'm open to exciting projects, creative collaborations and meaningful opportunities. Let's build something amazing together.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                id="neon-cta-make-it-happen-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#10110F] text-white hover:bg-black transition duration-200 active:scale-95 shadow-md"
              >
                <span>Let's Make It Happen</span>
                <ArrowUpRight className="w-4 h-4 text-[#B7F32B]" />
              </Link>

              <Link
                to="/projects"
                id="neon-cta-view-work-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white text-[#10110F] hover:bg-slate-50 transition duration-200 active:scale-95 shadow-xs"
              >
                <span>View My Work</span>
              </Link>
            </div>

          </div>

          {/* Right Cutout Portrait & Handwritten Note */}
          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="relative w-56 h-64 sm:w-64 sm:h-72">
              
              {/* Portrait container */}
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-2 border-white/80 bg-[#10110F]">
                <img 
                  src={profileImg} 
                  alt="Developer Portrait"
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>

              {/* Handwritten Note on side */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 p-3 bg-white rounded-2xl shadow-lg border border-[#E6E8E1] transform rotate-6 pointer-events-none">
                <span className="font-handwriting text-base sm:text-lg text-[#10110F] font-bold block leading-tight">
                  Ideas • Products<br />
                  People • Impact
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
