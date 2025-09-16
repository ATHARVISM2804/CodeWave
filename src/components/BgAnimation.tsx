import React from 'react';

interface BgAnimationProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const BgAnimation: React.FC<BgAnimationProps> = ({ 
  intensity = 'medium', 
  className = '' 
}) => {
  const particleCount = intensity === 'low' ? 15 : intensity === 'medium' ? 25 : 40;
  const geometricCount = intensity === 'low' ? 3 : intensity === 'medium' ? 5 : 8;

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: 1 }}>
      {/* Gradient Background Waves */}
      <div className="absolute inset-0">
        {/* Primary gradient wave */}
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20 animate-wave-slow">
          <div 
            className="w-full h-full rounded-[50%]"
            style={{
              background: `radial-gradient(ellipse at center, rgba(var(--accent-primary-rgb), 0.15) 0%, rgba(var(--accent-primary-rgb), 0.05) 40%, transparent 70%)`
            }}
          />
        </div>
        
        {/* Secondary gradient wave */}
        <div className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] opacity-15 animate-wave-medium">
          <div 
            className="w-full h-full rounded-[50%]"
            style={{
              background: `radial-gradient(ellipse at center, rgba(var(--accent-secondary-rgb), 0.12) 0%, rgba(var(--accent-secondary-rgb), 0.04) 50%, transparent 80%)`
            }}
          />
        </div>

        {/* Tertiary accent wave */}
        <div className="absolute top-1/4 left-1/4 w-[150%] h-[150%] opacity-10 animate-wave-fast">
          <div 
            className="w-full h-full rounded-[50%]"
            style={{
              background: `conic-gradient(from 0deg, rgba(var(--accent-primary-rgb), 0.08), rgba(var(--accent-secondary-rgb), 0.06), rgba(var(--accent-primary-rgb), 0.08))`
            }}
          />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: particleCount }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-float-random opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          >
            <div
              className="w-1 h-1 rounded-full animate-pulse-glow"
              style={{
                background: Math.random() > 0.5 
                  ? 'var(--accent-primary)' 
                  : 'var(--accent-secondary)',
                boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: geometricCount }, (_, i) => {
          const shapes = ['circle', 'square', 'triangle', 'hexagon'];
          const shape = shapes[Math.floor(Math.random() * shapes.length)];
          const size = 20 + Math.random() * 40;
          
          return (
            <div
              key={`geo-${i}`}
              className={`absolute animate-drift opacity-20 ${shape}-shape`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 20}s`,
              }}
            >
              {shape === 'circle' && (
                <div 
                  className="w-full h-full rounded-full border animate-rotate-slow"
                  style={{
                    borderColor: Math.random() > 0.5 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                    borderWidth: '1px',
                  }}
                />
              )}
              {shape === 'square' && (
                <div 
                  className="w-full h-full border animate-rotate-reverse"
                  style={{
                    borderColor: Math.random() > 0.5 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                    borderWidth: '1px',
                  }}
                />
              )}
              {shape === 'triangle' && (
                <div 
                  className="w-full h-full animate-rotate-slow"
                  style={{
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    background: `linear-gradient(45deg, rgba(var(--accent-primary-rgb), 0.3), rgba(var(--accent-secondary-rgb), 0.3))`,
                  }}
                />
              )}
              {shape === 'hexagon' && (
                <div 
                  className="w-full h-full animate-rotate-reverse"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    background: `linear-gradient(60deg, rgba(var(--accent-primary-rgb), 0.2), rgba(var(--accent-secondary-rgb), 0.2))`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full animate-grid-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(var(--accent-primary-rgb), 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--accent-primary-rgb), 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Code-like Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute animate-matrix-rain"
            style={{
              left: `${i * 12.5}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          >
            <div className="text-xs font-mono space-y-2" style={{ color: 'var(--accent-primary)' }}>
              {['01', '10', '11', '00', '01', '10'].map((code, idx) => (
                <div key={idx} className="animate-fade-in-out" style={{ animationDelay: `${idx * 0.5}s` }}>
                  {code}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--accent-primary)', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: 'var(--accent-secondary)', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        
        {/* Animated neural network paths */}
        <g className="animate-neural-pulse">
          <path
            d="M50,50 Q200,150 400,100 T800,200"
            stroke="url(#neural-gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-dash-flow"
            strokeDasharray="10,5"
          />
          <path
            d="M100,300 Q300,200 500,250 T900,150"
            stroke="url(#neural-gradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-dash-flow-reverse"
            strokeDasharray="8,4"
            style={{ animationDelay: '2s' }}
          />
          <path
            d="M0,400 Q250,300 450,350 T750,400"
            stroke="url(#neural-gradient)"
            strokeWidth="1"
            fill="none"
            className="animate-dash-flow"
            strokeDasharray="6,3"
            style={{ animationDelay: '4s' }}
          />
        </g>
      </svg>
    </div>
  );
};

export default BgAnimation;
