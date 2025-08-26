import React, { useEffect, useRef, useState } from 'react';
import { Zap, Shield, TrendingUp, Award, Target } from 'lucide-react';

const WhyUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'AI at the Core',
      description: 'AI guides our design and development. Every solution designed to learn, adapt, and evolve.',
      position: { top: '10%', left: '15%' }
    },
    {
      icon: Shield,
      title: 'Security by Design',
      description: 'Every layer engineered with encryption, compliance, and resilience.',
      position: { top: '10%', right: '15%' }
    },
    {
      icon: TrendingUp,
      title: 'Scale Without Fear',
      description: 'From lean startups to government platforms — serving millions — our architecture is built to grow.',
      position: { bottom: '20%', left: '15%' }
    },
    {
      icon: Award,
      title: 'Trusted in High-Stakes',
      description: 'Government contractors, high-growth startups, and mission-critical organizations trust us to deliver.',
      position: { bottom: '20%', right: '15%' }
    },
    {
      icon: Target,
      title: 'Real Impact, Measured',
      description: 'We support targets, actionable what matters, and give you real numbers on performance.',
      position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Why CodeWave.it?
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Because building smarter means partnering with the ones who think ahead.
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative max-w-6xl mx-auto h-96 lg:h-[500px]">
          {/* Central Hexagon */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isVisible ? 'animate-fade-in scale-100' : 'opacity-0 scale-50'}`} style={{ animationDelay: '400ms' }}>
            <div className="relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 border-2 border-[#ff6a3d] rounded-full bg-gradient-to-r from-[#ff6a3d]/20 to-[#ff8c42]/20 backdrop-blur-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff6a3d]">CW</div>
                  <div className="text-xs text-white mt-1">Intelligence</div>
                </div>
              </div>
              {/* Pulsing Ring */}
              <div className="absolute inset-0 w-32 h-32 lg:w-40 lg:h-40 border-2 border-[#ff6a3d]/50 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Feature Nodes */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                ...feature.position,
                animationDelay: `${600 + index * 150}ms`
              }}
            >
              <div className="group">
                {/* Connection Line */}
                <svg className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="50%"
                    stroke="rgba(255, 106, 61, 0.3)"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                </svg>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 max-w-xs hover:border-[#ff6a3d]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6a3d]/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#ff6a3d] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 font-mono text-xs text-[#ff6a3d] transform rotate-12">
          {'{ intelligence: "core" }'}
        </div>
        <div className="absolute top-40 right-20 font-mono text-xs text-[#ff6a3d] transform -rotate-6">
          {'security.byDesign()'}
        </div>
        <div className="absolute bottom-20 left-20 font-mono text-xs text-[#ff6a3d] transform rotate-6">
          {'scale.infinitely()'}
        </div>
        <div className="absolute bottom-40 right-10 font-mono text-xs text-[#ff6a3d] transform -rotate-12">
          {'impact.measure()'}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;