import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isNeon } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down approximately 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
          initial={{ opacity: 0, scale: 0.75, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isNeon
              ? 'bg-[#B7F32B] hover:bg-[#C4FF32] text-[#10110F] shadow-[0_8px_24px_rgba(183,243,43,0.45)] focus-visible:ring-[#B7F32B] border border-[#10110F]/10'
              : 'bg-[#A58AF2] hover:bg-[#906FE8] text-white shadow-[0_8px_24px_rgba(165,138,242,0.40)] focus-visible:ring-[#A58AF2] border border-white/40'
          }`}
        >
          <ArrowUp className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
