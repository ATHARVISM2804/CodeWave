import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration issues by mounting after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      className="theme-toggle fixed top-[90vh] right-6 z-[100]"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
      style={{
        width: 48,
        height: 24,
        borderRadius: '50px',
        background: theme === 'dark' 
          ? 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))'
          : '#e2e8f0',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        padding: 0,
        position: 'relative'
      }}
    >
      {mounted && (
        <div 
          className="toggle-circle" 
          style={{
            position: 'absolute',
            top: '2px',
            left: theme === 'dark' ? '26px' : '2px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Icon inside toggle circle */}
          <span
            style={{
              fontSize: '10px',
              color: theme === 'dark' ? 'var(--accent-primary)' : '#718096',
            }}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
        </div>
      )}
      
      {/* Hide label visually, keep for accessibility */}
      <span className="sr-only">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;
               