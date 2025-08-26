import React, { useEffect, useState } from 'react';
import { Code, Terminal, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const codeSnippets = [
    { 
      code: 'const ai = new Intelligence();',
      position: { top: '15%', right: '8%' },
      delay: 0
    },
    { 
      code: 'function buildFuture() { return innovation; }',
      position: { top: '55%', right: '12%' },
      delay: 200
    },
    { 
      code: 'if (problem) solve();',
      position: { top: '35%', left: '3%' },
      delay: 400
    },
    { 
      code: 'AI.merge(creativity)',
      position: { bottom: '25%', right: '18%' },
      delay: 600
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
              <button className="liquid-button text-white px-8 py-4 font-semibold glare-effect text-lg magnetic-effect">
                Experience The Demo
              </button>
              <button className="morph-card px-8 py-4 rounded-full font-semibold hover-lift-premium glare-card border-animate text-lg ripple-effect">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-right delay-300">
            {/* Stats Display */}
            <div className="space-y-8">
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
            </div>
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
              animationDuration: `${4 + index * 0.8}s`
            }}
          >
            <div className="morph-card glare-card rounded-xl p-4 font-mono text-sm hover-lift-premium magnetic-effect">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-[#ff6a3d] rounded-full animate-pulse-premium"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse-premium delay-200"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-premium delay-400"></div>
              </div>
              <code className="text-white font-medium">{snippet.code}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;