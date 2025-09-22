import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../hooks/useTheme';

interface LoadingAnimationProps {
  duration?: number; // in milliseconds
  onComplete?: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ 
  duration = 100, // Faster loading (was 2000ms)
  onComplete 
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Add a small delay before fading out
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500); // wait for fade out animation
        }, 300);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        background: 'var(--bg-primary)',
        transition: 'opacity 0.5s ease-out'
      }}
    >
      <div className="relative mb-8">
        {/* Main circular container with logo centered */}
        <div className="w-24 h-24 relative flex items-center justify-center mx-auto">
          <img
            src="https://code-wave-sage.vercel.app/assets/logo-CUgePuug.png"
            alt="CodeWave logo"
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain z-10"
            style={{ display: 'block' }}
          />
           {/* Animated ring around logo */}
           <div className="absolute inset-0 rounded-full animate-spin-slow"
             style={{
               border: '2px solid transparent',
               borderTopColor: 'var(--accent-primary)',
               borderLeftColor: 'var(--accent-secondary)',
               width: '100%',
               height: '100%'
             }}
           ></div>
           
           {/* Second ring rotating in opposite direction */}
           <div className="absolute inset-0 rounded-full animate-spin-reverse"
             style={{
               border: '1px solid transparent',
               borderRightColor: 'var(--accent-secondary)',
               borderBottomColor: 'var(--accent-primary)',
               width: '90%',
               height: '90%',
               top: '5%',
               left: '5%'
             }}
           ></div>
         </div>
         
         {/* Outer pulsing ring */}
         <div
           className="absolute inset-0 rounded-full animate-ping"
           style={{ 
             border: '2px solid var(--accent-primary)',
             opacity: 0.3,
             width: '120%',
             height: '120%',
             top: '-10%',
             left: '-10%'
           }}
         ></div>
       </div>
      
      {/* Progress bar */}
      <div className="w-64 h-1 bg-opacity-20 rounded-full overflow-hidden mb-4" 
        style={{ background: 'var(--glass-bg)' }}
      >
        <div 
          className="h-full rounded-full" 
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            transition: 'width 0.3s ease-out',
            boxShadow: '0 0 10px var(--accent-primary)'
          }}
        ></div>
      </div>
      
      {/* Loading text */}
      <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
        {progress < 100 ? 'Loading...' : 'Ready!'}
      </div>
      
      {/* Animated dots */}
      <div className="flex space-x-2 mt-2">
        {[0, 1, 2].map(i => (
          <div 
            key={i}
            className="w-1.5 h-1.5 rounded-full animate-pulse" 
            style={{ 
              background: 'var(--accent-primary)',
              animationDelay: `${i * 200}ms`,
              animationDuration: '1.5s'
            }}
          ></div>
        ))}
      </div>
      
      {/* Tech stack or subtle branding element */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Powered by <span style={{ color: 'var(--accent-primary)' }}>Intelligence</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;

// New: lightweight ThemeToggleButton for header
export const ThemeToggleButton: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative w-12 h-7 flex items-center rounded-full transition-colors duration-300 focus:outline-none"
      style={{
        background: isDark
          ? 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))'
          : 'var(--card-bg)',
        border: '1.5px solid var(--card-border)',
        boxShadow: isDark ? '0 0 8px var(--accent-primary)' : 'none',
        padding: 0
      }}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {/* Track */}
      <span
        className="absolute left-2 top-1/2 -translate-y-1/2 text-yellow-400 transition-opacity duration-200"
        style={{ opacity: isDark ? 0 : 1 }}
      >
        <Sun size={16} />
      </span>
      <span
        className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-400 transition-opacity duration-200"
        style={{ opacity: isDark ? 1 : 0 }}
      >
        <Moon size={16} />
      </span>
      {/* Thumb */}
      <span
        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-all duration-300"
        style={{
          left: isDark ? 'calc(100% - 28px)' : '4px',
          background: isDark
            ? 'var(--bg-primary)'
            : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          color: isDark ? 'var(--accent-primary)' : 'white',
          border: isDark ? '1.5px solid var(--accent-primary)' : 'none',
          boxShadow: isDark ? '0 0 6px var(--accent-primary)' : '0 1px 4px rgba(0,0,0,0.08)'
        }}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </span>
    </button>
  );
};