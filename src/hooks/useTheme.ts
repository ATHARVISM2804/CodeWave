import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useTheme = (): [Theme, () => void] => {
  // Check for stored theme or system preference
  const getInitialTheme = (): Theme => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // First check localStorage
      const storedTheme = localStorage.getItem('theme') as Theme | null;
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
    localStorage.setItem('theme', theme);

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
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme];
};

export default useTheme;
