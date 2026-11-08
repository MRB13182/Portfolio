import React, { createContext, useContext, useEffect, useState } from 'react';
import { PortfolioTheme } from '../types';

interface ThemeContextType {
  // Theme 1: Lavender / Purple / White (Default)
  // Theme 2: White / Black / Neon Lime Green
  portfolioTheme: PortfolioTheme;
  isNeon: boolean;
  setPortfolioTheme: (theme: PortfolioTheme) => void;
  togglePortfolioTheme: () => void;
  // Low-power performance mode for hardware acceleration
  isLowPowerMode: boolean;
  toggleLowPowerMode: () => void;
  setLowPowerMode: (enabled: boolean) => void;
  // Backward compatibility helpers
  isDark: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme 1 (Lavender) is the DEFAULT theme; Theme 2 (Neon Lime) is the ALTERNATIVE
  const [portfolioTheme, setPortfolioThemeState] = useState<PortfolioTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_portfolio_visual_theme') as PortfolioTheme | null;
      if (saved === 'lavender' || saved === 'neon') {
        return saved;
      }
    }
    return 'lavender';
  });

  const [isLowPowerMode, setIsLowPowerModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_portfolio_low_power');
      if (saved !== null) {
        return saved === 'true';
      }
      const prefersReducedTransparency = window.matchMedia('(prefers-reduced-transparency: reduce)').matches;
      const isLowSpecMobile = (typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 8) <= 4) &&
                              window.matchMedia('(max-width: 768px)').matches;
      return prefersReducedTransparency || isLowSpecMobile;
    }
    return false;
  });

  const isNeon = portfolioTheme === 'neon';

  // Synchronize visual design theme class on document element
  // STRICT REQUIREMENT: Only two primary themes (Lavender vs Neon Lime).
  // The previous black/dark mode is completely removed so the public app is never black.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-visual-theme', portfolioTheme);
    
    // Always remove the legacy dark class from public site root
    root.classList.remove('dark');
    root.classList.add('light');
    root.style.colorScheme = 'light';

    if (portfolioTheme === 'neon') {
      root.classList.add('theme-neon');
      root.classList.remove('theme-lavender');
    } else {
      root.classList.add('theme-lavender');
      root.classList.remove('theme-neon');
    }
    
    localStorage.setItem('app_portfolio_visual_theme', portfolioTheme);
  }, [portfolioTheme]);

  useEffect(() => {
    const root = document.documentElement;
    if (isLowPowerMode) {
      root.classList.add('low-power-mode');
      root.setAttribute('data-low-power', 'true');
    } else {
      root.classList.remove('low-power-mode');
      root.removeAttribute('data-low-power');
    }
    localStorage.setItem('app_portfolio_low_power', String(isLowPowerMode));
  }, [isLowPowerMode]);

  const togglePortfolioTheme = () => {
    setPortfolioThemeState((prev) => (prev === 'lavender' ? 'neon' : 'lavender'));
  };

  const setPortfolioTheme = (newTheme: PortfolioTheme) => {
    setPortfolioThemeState(newTheme);
  };

  const toggleLowPowerMode = () => {
    setIsLowPowerModeState((prev) => !prev);
  };

  const setLowPowerMode = (enabled: boolean) => {
    setIsLowPowerModeState(enabled);
  };

  return (
    <ThemeContext.Provider value={{ 
      portfolioTheme,
      isNeon,
      setPortfolioTheme,
      togglePortfolioTheme,
      isLowPowerMode,
      toggleLowPowerMode,
      setLowPowerMode,
      // Backward-compat (never triggers black dark mode)
      isDark: false,
      theme: 'light',
      toggleTheme: togglePortfolioTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
