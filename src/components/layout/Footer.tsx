import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioConfig } from '../../config/portfolio';
import { usePortfolioData } from '../../context/DataContext';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile } = usePortfolioData();

  const fullName = profile?.name || portfolioConfig.personal.name || 'MD. Moshiur Rahman';
  const primaryTitle = (profile?.titles && profile.titles[0]) || 'Full Stack Developer & AI Engineer';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialsList = Array.isArray(portfolioConfig.socials) ? portfolioConfig.socials : [];
  const githubUrl = socialsList.find(s => (s.platform || s.name).toLowerCase() === 'github')?.url || 'https://github.com/MRB13182';
  const linkedinUrl = socialsList.find(s => (s.platform || s.name).toLowerCase() === 'linkedin')?.url || 'https://linkedin.com';
  const twitterUrl = socialsList.find(s => ['twitter', 'x'].includes((s.platform || s.name).toLowerCase()))?.url;
  const emailUrl = `mailto:${portfolioConfig.personal.email || 'borshonsweb@gmail.com'}`;

  // STRICT REQUIREMENT 3:
  // The footer remains EXACTLY THE SAME in both themes.
  // One shared global Footer component across every page.
  // Maintains the identical background, typography, colors, border, layout and appearance regardless of active theme.
  return (
    <footer 
      id="main-footer"
      className="relative z-20 w-full bg-white/90 border-t border-slate-200/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 text-[#171725] transition-none shadow-[0_-4px_20px_rgba(0,0,0,0.02)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* Top Tier: Brand, Navigation, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/70">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#171725] text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              {fullName.charAt(0) || 'M'}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#171725]">
                {fullName}
              </span>
              <span className="text-[11px] text-[#777787] font-medium">
                {primaryTitle}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-semibold text-[#777787]">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-[#171725] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 rounded-sm px-1 py-0.5"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/80 text-[#171725] border border-slate-200/70 flex items-center justify-center transition"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/80 text-[#171725] border border-slate-200/70 flex items-center justify-center transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {twitterUrl && (
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/80 text-[#171725] border border-slate-200/70 flex items-center justify-center transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            <a
              href={emailUrl}
              aria-label="Send Email"
              className="w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/80 text-[#171725] border border-slate-200/70 flex items-center justify-center transition"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777787]">
          <span>
            &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
          </span>

          <span className="flex items-center gap-2">
            <span>Built with precision &amp; care for modern web experiences</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </span>
        </div>

      </div>
    </footer>
  );
};
