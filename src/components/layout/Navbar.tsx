import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/DataContext';
import { portfolioConfig } from '../../config/portfolio';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Sun,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { portfolioTheme, isNeon, togglePortfolioTheme } = useTheme();
  const { profile } = usePortfolioData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const fullName = profile?.name || portfolioConfig.personal.name || (isNeon ? 'Abdullah Tariq' : 'Aarav Singh');
  const primaryTitle = (profile?.titles && profile.titles[0]) || (isNeon ? 'Software Developer • AI Engineer' : 'Digital Product Designer');
  const initials = isNeon ? 'AT' : (fullName.charAt(0) || 'A');

  // Strict 6 multipage routes
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      id="main-navbar-wrapper"
      className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
    >
      <div 
        className={`pointer-events-auto w-full max-w-6xl rounded-full border transition-all duration-300 px-4 py-2 sm:px-6 sm:py-2.5 flex items-center justify-between gap-3 backdrop-blur-xl ${
          isNeon
            ? 'bg-white/95 border-[#E6E8E1] shadow-[0_12px_32px_-12px_rgba(0,0,0,0.08)] text-[#10110F]'
            : 'bg-white/75 border-white/90 shadow-[0_14px_35px_-12px_rgba(165,138,242,0.18),0_1px_3px_rgba(0,0,0,0.03)] text-[#171725]'
        } ${scrolled ? 'py-1.5 sm:py-2 shadow-lg' : ''}`}
      >
        {/* Left: Brand Identity (Monogram Badge + Name) */}
        <Link 
          to="/"
          id="navbar-brand-logo"
          className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F32B] rounded-full"
        >
          {isNeon ? (
            /* Theme 2: Black rounded logo container matching reference */
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#10110F] text-white flex items-center justify-center font-display font-extrabold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
              {initials}
            </div>
          ) : (
            /* Theme 1: Soft rounded badge */
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-[#171725] text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
              {initials}
            </div>
          )}

          <div className="flex flex-col leading-tight min-w-0">
            <span className={`font-display font-bold text-xs sm:text-[13px] tracking-tight truncate ${
              isNeon ? 'text-[#10110F] uppercase' : 'text-[#171725]'
            }`}>
              {fullName}
            </span>
            <span className={`text-[9px] sm:text-[10px] font-medium tracking-tight truncate ${
              isNeon ? 'text-[#686B65]' : 'text-[#777787]'
            }`}>
              {primaryTitle}
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links Pill */}
        <nav 
          aria-label="Primary multipage navigation"
          className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-full"
        >
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                id={`nav-link-${item.name.toLowerCase()}`}
                className={`relative px-3 sm:px-3.5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 ${
                  isNeon
                    ? active
                      ? 'text-[#10110F] font-bold'
                      : 'text-[#686B65] hover:text-[#10110F]'
                    : active 
                      ? 'text-[#171725] font-semibold'
                      : 'text-[#777787] hover:text-[#171725]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="desktop-nav-active-pill"
                    className={`absolute inset-0 rounded-full ${
                      isNeon
                        ? 'bg-[#F7F8F5] border border-[#E6E8E1] shadow-xs'
                        : 'bg-white/90 border border-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                    }`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.name}
                  {isNeon && active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7F32B]" />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Theme Switcher Button & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* 
            STRICT REQUIREMENT 1 & 2:
            Replaces old Moon button!
            Clicking this button toggles directly between:
            - Theme 1: Lavender / Purple / White (Default)
            - Theme 2: White / Black / Neon Lime Green
            The previous black/dark mode is completely removed.
          */}
          <button
            type="button"
            onClick={togglePortfolioTheme}
            id="theme-switcher-btn"
            title={`Current: ${isNeon ? 'Lime Theme' : 'Lavender Theme'}. Click to switch to ${isNeon ? 'Theme 1 (Lavender)' : 'Theme 2 (Neon Lime)'}`}
            aria-label={`Toggle theme between Lavender and Neon Lime (Currently ${isNeon ? 'Neon Lime' : 'Lavender'})`}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer shadow-xs active:scale-95 focus-visible:outline-none focus-visible:ring-2 ${
              isNeon
                ? 'bg-[#10110F] text-[#B7F32B] border-[#10110F] hover:bg-black'
                : 'bg-white hover:bg-slate-50 text-violet-700 border-violet-200 hover:border-violet-300'
            }`}
          >
            {isNeon ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-[#B7F32B]" />
                <span className="hidden sm:inline">Lime Theme</span>
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5 text-violet-600" />
                <span className="hidden sm:inline">Lavender Theme</span>
              </>
            )}
          </button>

          {/* "Let's Talk ↗" Primary CTA */}
          <Link
            to="/contact"
            id="navbar-lets-talk-cta"
            className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs font-bold border transition duration-200 active:scale-95 shadow-xs ${
              isNeon
                ? 'bg-[#10110F] text-white border-[#10110F] hover:bg-black'
                : 'bg-white/90 hover:bg-white border-slate-200/80 text-[#171725] hover:shadow-sm'
            }`}
          >
            <span>Let's Talk</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isNeon ? 'text-[#B7F32B]' : 'text-[#8B5CF6]'}`} />
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`md:hidden w-8 h-8 rounded-full border flex items-center justify-center transition ${
              isNeon
                ? 'border-[#E6E8E1] bg-white text-[#10110F]'
                : 'border-slate-200/80 bg-white/80 text-[#171725]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Touch-Friendly Dropdown) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto absolute top-14 sm:top-16 inset-x-4 max-w-lg mx-auto rounded-3xl border p-4 backdrop-blur-2xl shadow-2xl ${
              isNeon
                ? 'bg-white/98 border-[#E6E8E1] text-[#10110F]'
                : 'bg-white/95 border-white/90 text-[#171725]'
            }`}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold transition ${
                      active
                        ? isNeon
                          ? 'bg-[#F7F8F5] text-[#10110F] font-bold'
                          : 'bg-[#F7F7FB] text-violet-700 font-bold'
                        : isNeon
                          ? 'text-[#686B65] hover:bg-slate-50'
                          : 'text-[#777787] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    {active && (
                      <span className={`w-2 h-2 rounded-full ${isNeon ? 'bg-[#B7F32B]' : 'bg-[#A58AF2]'}`} />
                    )}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200/70 flex flex-col gap-2">
                {/* Theme Switcher in Mobile Drawer */}
                <button
                  type="button"
                  onClick={togglePortfolioTheme}
                  className={`w-full py-2.5 px-4 rounded-2xl text-xs font-bold flex items-center justify-between border cursor-pointer ${
                    isNeon
                      ? 'bg-[#10110F] text-[#B7F32B] border-[#10110F]'
                      : 'bg-violet-50 text-violet-700 border-violet-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isNeon ? <Sparkles className="w-4 h-4 text-[#B7F32B]" /> : <Zap className="w-4 h-4 text-violet-600" />}
                    <span>Visual Theme:</span>
                  </span>
                  <span className="font-mono">
                    {isNeon ? 'Lime Theme (Theme 2)' : 'Lavender Theme (Theme 1)'}
                  </span>
                </button>

                <Link
                  to="/contact"
                  className={`w-full py-2.5 rounded-2xl text-xs font-bold text-center flex items-center justify-center gap-1.5 ${
                    isNeon
                      ? 'bg-[#10110F] text-white'
                      : 'bg-[#171725] text-white'
                  }`}
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className={`w-4 h-4 ${isNeon ? 'text-[#B7F32B]' : 'text-white'}`} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
