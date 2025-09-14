import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // detect current theme class on <html> to switch snippet shadow colors
  const isDarkTheme = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  const codeSnippets = [
    {
      code: 'const ai = new Intelligence();',
      position: { top: '15%', right: '12%' },
      delay: 0,
      rotate: 5,
    },
    {
      code: 'function buildFuture() { return innovation; }',
      position: { top: '22%', right: '38%' },
      delay: 200,
      rotate: 0
    },
    {
      code: 'if (problem) solve();',
      position: { top: '60%', right: '36%' },
      delay: 400,
      rotate: 0
    },
    {
      code: 'AI.merge(creativity)',
      position: { top: '62%', right: '14%' },
      delay: 600,
      rotate: 0
    }
  ];

  return (
    <section
      className="relative h-[50vh] md:h-[90vh] px-4 sm:px-6 lg:px-8 flex items-center md:pt-20"
      style={{ minHeight: '80vh' }}
    >

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-0 sm:px-4 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words" style={{ color: 'var(--text-primary)' }}>
                We Speak Fluent Code.
                <span
                  style={{
                    color: 'var(--accent-primary)',
                    textShadow: document.documentElement.classList.contains('dark')
                      ? `0 0 8px rgba(var(--accent-primary-rgb), 0.4)`
                      : `0 0 8px rgba(16, 185, 129, 0.3)` // Emerald glow for light theme
                  }}
                >
                  {' '}And AI Has Joined the Team.
                </span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
                We build powerful digital solutions that help startups and businesses work smarter—with custom web, mobile,
                and AI technology—while supporting government projects with secure, scalable innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="group px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'var(--text-primary)',
                  boxShadow: '0 10px 30px rgba(var(--accent-primary-rgb), 0.3)'
                }}
              >
                <span>Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                className="group px-8 py-4 rounded-full font-semibold text-lg border-2 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                style={{
                  borderColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)',
                  background: 'transparent'
                }}
              >
                <span>View Our Work</span>
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hide right column on small screens */}
          <div className="relative animate-fade-in-right delay-300 hidden md:block">
            {/* Stats Display */}
            {/* <div className="space-y-8">
              <div className={`morph-card glare-card p-8 hover-lift-premium ${isVisible ? 'animate-bounce-in delay-500' : 'opacity-0'}`}>
                <div className="text-right">
                  <div className="text-4xl font-bold parallax-text neon-glow mb-2">98%</div>
                  <div className="text-sm text-gray-300 font-medium">Projects delivered without compromise</div>
                </div>
              </div>

              <div className={`morph-card glare-card p-8 hover-lift-premium ${isVisible ? 'animate-bounce-in delay-700' : 'opacity-0'}`}>
                <div className="text-left">
                  <div className="text-4xl font-bold parallax-text neon-glow mb-2">120+</div>
                  <div className="text-sm text-gray-300 font-medium">Launched with trusted business impact</div>
                </div>
              </div>

              <div className={`morph-card glare-card p-8 hover-lift-premium ${isVisible ? 'animate-bounce-in delay-900' : 'opacity-0'}`}>
                <div className="text-right">
                  <div className="text-4xl font-bold parallax-text neon-glow mb-2">10+</div>
                  <div className="text-sm text-gray-300 font-medium">Delivering digital solutions across industries</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Floating Code Snippets - show on md+ screens, responsive width */}
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className={`absolute hidden md:block ${isVisible ? 'float-enhanced particle-glow' : 'opacity-0'}`}
            style={{
              ...snippet.position,
              animationDelay: `${snippet.delay}ms`,
              animationDuration: `${4 + index * 0.8}s`,
              zIndex: 30,
              width: '180px',
              maxWidth: '60vw',
              // theme-aware shadow: blue glow in dark, subtle black in light
              boxShadow: isDarkTheme
                ? `0 20px 60px rgba(var(--accent-primary-rgb), 0.18), 0 6px 20px rgba(2,6,23,0.35)`
                : `0 18px 40px rgba(0,0,0,0.12), 0 6px 18px rgba(0,0,0,0.08)`
            }}
          >
            <div className="relative w-full sm:w-[220px] md:w-[260px] xl:w-[320px] morph-card glare-card shadow-xl rounded-2xl overflow-visible backdrop-blur-lg"
              style={{ border: '1px solid var(--card-border)' }}>
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2" style={{ background: 'var(--glass-bg)' }}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ background: '#27ca3f' }}></div>
                </div>
                <span className="text-xs" style={{ color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>AI Suggestion</span>
                <span style={{ color: 'var(--accent-secondary)' }} className="text-lg font-bold">{'{}'}</span>
              </div>
              {/* Code Block */}
              <div className="px-4 pt-3 pb-8 font-mono text-xs xl:text-sm" style={{ color: 'var(--accent-secondary)', minHeight: '70px' }}>
                <span className="block whitespace-pre-line leading-relaxed">{snippet.code}</span>
              </div>
              {/* Code Analysis Bar */}
              <div className="absolute left-6 right-6" style={{ top: '100px' }}>
                <div className="flex items-center justify-between px-4 py-2 rounded-xl shadow-lg backdrop-blur-md"
                // style={{ 
                //   background: 'var(--glass-bg)', 
                //   border: '1px solid var(--glass-border)' 
                // }}
                >
                  <span className="text-xs" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Code Analysis</span>
                </div>
              </div>
              {/* Performance Metrics */}
              <div className="mt-16 px-4 pb-4">
                <div className="text-xs mb-2" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Performance Metrics</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs w-16" style={{ color: 'var(--text-muted)' }}>Runtime</span>
                    <div className="flex-1 h-2 rounded" style={{ background: 'var(--glass-bg)', position: 'relative', overflow: 'hidden' }}>
                      <div className="absolute left-0 top-0 h-2 rounded" style={{ background: 'var(--accent-primary)', width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs w-16" style={{ color: 'var(--text-muted)' }}>Memory</span>
                    <div className="flex-1 h-2 rounded" style={{ background: 'var(--glass-bg)', position: 'relative', overflow: 'hidden' }}>
                      <div className="absolute left-0 top-0 h-2 rounded" style={{ background: 'var(--accent-primary)', width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs w-16" style={{ color: 'var(--text-muted)' }}>Optimization</span>
                    <div className="flex-1 h-2 rounded" style={{ background: 'var(--glass-bg)', position: 'relative', overflow: 'hidden' }}>
                      <div className="absolute left-0 top-0 h-2 rounded" style={{ background: 'var(--accent-primary)', width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HeroSection;