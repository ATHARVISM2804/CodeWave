import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration issues by mounting after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle the toggle event with a debug log
  const handleToggle = () => {
    console.log('Current theme before toggle:', theme);
    toggleTheme();
    // We can't log after toggle immediately as state updates are asynchronous
  };

  // Only render the toggle after mounting to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <button
      className="theme-toggle fixed bottom-6 left-6 z-40 p-2 rounded-full hover-lift-premium"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
      onClick={handleToggle}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    >
      <div className="relative w-10 h-5 rounded-full flex items-center p-0.5"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' 
            : '#e2e8f0',
          transition: 'all 0.3s ease',
        }}
      >
        <div 
          className="absolute w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center transition-all duration-300 ease-in-out"
          style={{
            transform: `translateX(${theme === 'dark' ? '150%' : '0%'})`,
          }}
        >
          {theme === 'dark' ? (
            <Moon size={12} className="text-blue-500" />
          ) : (
            <Sun size={12} className="text-yellow-500" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
