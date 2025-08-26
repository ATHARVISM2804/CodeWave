import React, { useEffect, useState } from 'react';
// import { Code, Terminal, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const codeSnippets = [
    { 
      code: 'const ai = new Intelligence();',
      position: { top: '25%', right: '6%' }, 
      delay: 0,
      rotate: 5,
    },
    { 
      code: 'function buildFuture() { return innovation; }',
      position: { top: '25%', right: '25%' }, 
      delay: 200,
      rotate: 0
    },
    { 
      code: 'if (problem) solve();',
      position: { top: '55%', right: '24%' }, 
      delay: 400,
      rotate: 0
    },
    { 
      code: 'AI.merge(creativity)',
      position: { top: '56%', right: '8%' }, 
      delay: 600,
      rotate: 0
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-premium"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                We Speak Fluent Code. 
                <span className="parallax-text neon-glow">
                  {' '}And AI Has Joined the Team.
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                We build powerful digital solutions that help startups and businesses work smarter—with custom web, mobile, 
                and AI technology—while supporting government projects with secure, scalable innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="liquid-button text-white px-8 py-4 font-semibold glare-effect text-lg ">
                Experience The Demo
              </button>
              <button className="morph-card px-8 py-4 rounded-full font-semibold hover-lift-premium glare-card border-animate text-lg ">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-right delay-300">
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

        {/* Floating Code Snippets */}
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className={`absolute hidden lg:block ${isVisible ? 'float-enhanced particle-glow' : 'opacity-0'}`}
            style={{
              ...snippet.position,
              animationDelay: `${snippet.delay}ms`,
              animationDuration: `${4 + index * 0.8}s`,
              zIndex: 30,
            }}
          >
            <div className="relative w-[320px] glass-card shadow-xl rounded-2xl overflow-visible backdrop-blur-lg border border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-white/10 rounded-t-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#ff6a3d] rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-xs text-white/80 font-semibold tracking-wide">AI Suggestion</span>
                <span className="text-cyan-300 text-lg font-bold">{'{}'}</span>
              </div>
              {/* Code Block */}
              <div className="px-4 pt-3 pb-8 font-mono text-sm text-cyan-200 min-h-[70px]">
                <span className="block whitespace-pre-line leading-relaxed">{snippet.code}</span>
              </div>
              {/* Code Analysis Bar (just below code block, not overlapping metrics) */}
              <div className="absolute left-6 right-6" style={{ top: '100px' }}>
                <div className="flex items-center justify-between px-4 py-2 bg-white/10 rounded-xl shadow-lg border border-white/10 backdrop-blur-md">
                  <span className="text-xs text-white/80 font-semibold">Code Analysis</span>
                </div>
              </div>
              {/* Performance Metrics */}
              <div className="mt-16 px-4 pb-4">
                <div className="text-xs text-white/70 font-semibold mb-2">Performance Metrics</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/60 w-16">Runtime</span>
                    <div className="flex-1 h-2 rounded bg-white/10 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-2 rounded bg-orange-500" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/60 w-16">Memory</span>
                    <div className="flex-1 h-2 rounded bg-white/10 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-2 rounded bg-orange-500" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/60 w-16">Optimization</span>
                    <div className="flex-1 h-2 rounded bg-white/10 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-2 rounded bg-orange-500" style={{ width: '80%' }}></div>
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