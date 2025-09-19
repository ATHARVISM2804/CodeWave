import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

// This key will be used for localStorage
const THEME_STORAGE_KEY = 'theme';

const useTheme = (): [Theme, () => void] => {
  // Check for stored theme or system preference
  const getInitialTheme = (): Theme => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // First check localStorage
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (storedTheme && (storedTheme === 'dark' || storedTheme === 'light')) {
        return storedTheme;
      }

      // If no stored theme, check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }

    // Default to dark theme if no preference found
    return 'dark';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme changes to document
  useEffect(() => {
    // If window not available, we're server-side rendering
    if (typeof window === 'undefined') return;

    // Set theme in localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Apply to document
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      console.log('Theme toggled to:', newTheme);
      return newTheme;
    });
  };

  return [theme, toggleTheme];
};

export default useTheme;
