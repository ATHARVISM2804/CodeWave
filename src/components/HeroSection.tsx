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
      className="relative min-h-[90vh] px-4 sm:px-6 lg:px-8 flex items-center justify-center md:pt-20"
    >

      {/* Background Elements - Updated gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'var(--accent-primary)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'var(--accent-secondary)' }}
        />
      </div>

      <div className="container mx-auto px-0 sm:px-4 lg:px-8 z-10 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" 
                style={{ color: 'var(--text-primary)' }}>
                We Speak Fluent Code.
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  And AI Has Joined the Team.
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We build powerful digital solutions that help startups and businesses work smarter—with custom web, mobile,
                and AI technology—while supporting government projects with secure, scalable innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <button
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(var(--accent-primary-rgb), 0.3)'
                }}
                onClick={() => window.location.href = '/contact'}
              >
                <span>Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full flex justify-center items-center gap-3 font-semibold text-base sm:text-lg border-2 transform hover:scale-105 transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-white"
                style={{
                  borderColor: 'var(--accent-primary)',
                  color: 'var(--accent-primary)',
                  background: 'transparent'
                }}
                onClick={() => window.location.href = '/services'}
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
              maxWidth: '60vw'
            }}
          >
            <div 
              className="relative w-full sm:w-[220px] md:w-[260px] xl:w-[320px] rounded-2xl overflow-visible backdrop-blur-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: '0 15px 30px rgba(var(--accent-primary-rgb), 0.08)'
              }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

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