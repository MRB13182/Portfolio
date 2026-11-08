import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export const ScrollProgressBar: React.FC = () => {
  const { isNeon } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 350,
    damping: 38,
    restDelta: 0.0005,
  });
  const progressColor = isNeon ? '#B7F32B' : '#A58AF2';

  useEffect(() => {
    const unsubscribe = scrollY.on('change', latest => setHasScrolled(latest > 2));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 z-[60] pointer-events-none select-none">
      <div className={`relative h-[2px] w-full transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0'} bg-black/[0.025]`}>
        <motion.div
          style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX, transformOrigin: '0% 50%', backgroundColor: progressColor }}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
