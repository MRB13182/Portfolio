import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isNeon } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          id="scroll-to-top-floating-btn"
          aria-label="Scroll back to top of the page"
          title="Scroll back to top"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
          className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${isNeon ? 'bg-[#B7F32B] hover:bg-[#C4FF32] text-[#10110F] border-[#10110F]/10 focus-visible:ring-[#B7F32B]' : 'bg-[#A58AF2] hover:bg-[#906FE8] text-white border-white/40 focus-visible:ring-[#A58AF2]'}`}
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
