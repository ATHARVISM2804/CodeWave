import React, { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  duration?: number; // in milliseconds
  onComplete?: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ 
  duration = 800, // Even faster loading (was 100ms)
  onComplete 
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrameId: number;
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Add a small delay before fading out
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600); // Slower fade out for smoother transition
        }, 300); // Longer display of completed state
      }
    };
    
    // Ensure DOM is fully loaded before starting animation
    setTimeout(() => {
      animationFrameId = requestAnimationFrame(updateProgress);
    }, 100);

    // Clean up animation frame on unmount
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [duration, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ 
        background: 'var(--bg-primary)',
        transition: 'opacity 0.6s ease-out'
      }}
    >
      {/* Logo container with animations */}
      <div className="relative mb-8">
        {/* Main circular container with logo centered */}
        <div className="w-32 h-32 relative flex items-center justify-center mx-auto">
          {/* animated gradient overlay (matches WhyUsSection) */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" style={{ zIndex: 12 }}>
            <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/20 to-transparent animate-pulse-premium" />
          </div>

          <img
            src="/src/assets/logo.png" 
            alt="CodeWave logo"
            className="w-24 h-24 object-contain z-20 animate-pulse-premium"
            style={{ display: 'block' }}
            onError={(e) => {
              // Fallback to the cloudinary URL if local image fails
              e.currentTarget.src = "https://res.cloudinary.com/dikisauij/image/upload/v1756993391/logo_ycihzq.png";
            }}
          />
          
          {/* Animated rings around logo with accent colors (reduced opacity) */}
          <div className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              border: '2px solid transparent',
              borderTopColor: 'var(--accent-primary)',
              borderLeftColor: 'var(--accent-secondary)',
              width: '110%',
              height: '110%',
              top: '-5%',
              left: '-5%',
              opacity: 0.85
            }}
          ></div>
          
          {/* Second ring rotating in opposite direction (subtle) */}
          <div className="absolute inset-0 rounded-full animate-spin-reverse"
            style={{
              border: '1px solid transparent',
              borderRightColor: 'var(--accent-secondary)',
              borderBottomColor: 'var(--accent-primary)',
              width: '120%',
              height: '120%',
              top: '-10%',
              left: '-10%',
              opacity: 0.7
            }}
          ></div>
        </div>
        
        {/* Outer pulsing ring */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{ 
            border: '2px solid var(--accent-primary)',
            opacity: 0.3,
            width: '140%',
            height: '140%',
            top: '-20%',
            left: '-20%'
          }}
        ></div>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-1.5 bg-opacity-20 rounded-full overflow-hidden mb-2" 
        style={{ background: 'var(--glass-bg)' }}
      >
        <div 
          className="h-full rounded-full" 
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            transition: 'width 0.2s ease-out',
            boxShadow: '0 0 15px var(--accent-primary)'
          }}
        ></div>
      </div>
      
      {/* Loading text with accent color */}
      <div className="text-sm font-medium mb-2" style={{ color: 'var(--accent-primary)' }}>
        {progress < 100 ? 'Loading...' : 'Ready!'}
      </div>
      
      {/* Animated dots with brand colors */}
      <div className="flex space-x-2 mt-1">
        {[0, 1, 2].map(i => (
          <div 
            key={i}
            className="w-2 h-2 rounded-full animate-pulse" 
            style={{ 
              background: i === 0 ? 'var(--accent-primary)' : 
                        i === 1 ? 'var(--accent-secondary)' : 
                        'var(--accent-primary)',
              animationDelay: `${i * 150}ms`,
              animationDuration: '1s'
            }}
          ></div>
        ))}
      </div>
      
      {/* Branding element */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
          CODEWAVE<span style={{ color: 'var(--accent-primary)' }}>.it</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
