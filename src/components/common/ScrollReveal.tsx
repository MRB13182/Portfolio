import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  scale?: number;
  blur?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
  id?: string;
}

export const PREMIUM_EASE = [0.21, 0.47, 0.32, 0.98] as const;

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.58,
  direction = 'up',
  distance = 22,
  scale = 1,
  blur = 0,
  once = true,
  amount = 0.12,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return <div className={className} id={id}>{children}</div>;
  }

  const initial = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, ...initial, scale: scale < 1 ? scale : 1, filter: blur ? `blur(${blur}px)` : 'blur(0px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


export const BlurReveal: React.FC<Omit<ScrollRevealProps, 'direction'>> = (props) => (
  <ScrollReveal {...props} direction="none" blur={8} />
);

export const RevealUp: React.FC<Omit<ScrollRevealProps, 'direction'>> = (props) => (
  <ScrollReveal {...props} direction="up" />
);

export const RevealLeft: React.FC<Omit<ScrollRevealProps, 'direction'>> = (props) => (
  <ScrollReveal {...props} direction="left" />
);

export const RevealRight: React.FC<Omit<ScrollRevealProps, 'direction'>> = (props) => (
  <ScrollReveal {...props} direction="right" />
);

export const FadeIn: React.FC<Omit<ScrollRevealProps, 'direction'>> = (props) => (
  <ScrollReveal {...props} direction="none" />
);

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  id?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  initialDelay = 0,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className} id={id}>{children}</div>;

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -40px 0px' }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: initialDelay, staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  distance = 20,
  duration = 0.5,
}) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, transition: { duration, ease: PREMIUM_EASE } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement: React.FC<{
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}> = ({ children, className = '', distance = 8, duration = 5 }) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};
