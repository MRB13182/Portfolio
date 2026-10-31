import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <footer id="main-footer" className={`relative z-20 w-full border-t backdrop-blur-2xl transition-colors duration-300 ${isDark ? 'border-white/10 bg-[#08080C]/60 text-slate-500' : 'border-slate-200/80 bg-white/60 text-slate-500'}`}>
      <div className="mx-auto max-w-6xl px-4 py-5 text-center">
        <span className="text-[10px] font-medium tracking-[.18em]">© {new Date().getFullYear()} MOSHIUR RAHMAN</span>
      </div>
    </footer>
  );
};
