import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Home, UserRound, Layers3, Send, Award, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: UserRound },
    { name: 'Projects', path: '/projects', icon: Layers3 },
    { name: 'Certificates', path: '/certificates', icon: Award },
    { name: 'Contact', path: '/contact', icon: Send },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header id="main-navbar-wrapper" aria-label="Primary navigation" className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-2 pb-[max(8px,env(safe-area-inset-bottom))]">
      <nav id="glass-navbar" className={`pointer-events-auto flex w-full max-w-[560px] items-stretch justify-around gap-0.5 rounded-[25px] border px-1.5 py-1.5 backdrop-blur-2xl transition-colors duration-300 sm:gap-1 sm:px-2 ${isDark ? 'border-white/10 bg-[#0b1020]/92 text-slate-100 shadow-[0_16px_45px_-12px_rgba(0,0,0,.75),0_0_25px_rgba(89,70,255,.12)]' : 'border-white/80 bg-white/90 text-slate-800 shadow-[0_14px_38px_-12px_rgba(43,52,92,.22)]'}`}>
        {navItems.map(({ name, path, icon: Icon }) => {
          const active = isActive(path);
          return (
            <Link key={name} to={path} aria-current={active ? 'page' : undefined} aria-label={name}
              className={`relative flex min-h-[55px] min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[17px] px-0.5 py-1.5 text-[9px] font-semibold transition-colors sm:min-h-[60px] sm:text-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${active ? (isDark ? 'text-white' : 'text-slate-950') : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900')}`}>
              {active && <motion.span layoutId="bottom-nav-active" className={`absolute inset-0 rounded-[17px] ${isDark ? 'bg-gradient-to-br from-blue-500/25 via-violet-500/20 to-transparent ring-1 ring-inset ring-violet-300/20' : 'bg-gradient-to-br from-blue-100/90 via-violet-100/80 to-white ring-1 ring-inset ring-white'}`} transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              <Icon className={`relative z-10 h-[18px] w-[18px] sm:h-5 sm:w-5 ${active ? 'drop-shadow-[0_0_8px_rgba(139,92,246,.55)]' : ''}`} strokeWidth={active ? 2.3 : 1.9} />
              <span className="relative z-10 whitespace-nowrap leading-none">{name}</span>
            </Link>
          );
        })}
        <button type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          className={`my-auto ml-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:ml-1 sm:h-10 sm:w-10 ${isDark ? 'border-white/10 bg-white/[0.05] text-cyan-300 hover:bg-white/10' : 'border-slate-200 bg-white/80 text-violet-600 hover:bg-white'}`}>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </nav>
    </header>
  );
};
