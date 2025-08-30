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
      description: 'AI guides our design and development. Every solution designed to learn, adapt, and evolve.'
    },
    {
      icon: Shield,
      title: 'Security by Design',
      description: 'Every layer engineered with encryption, compliance, and resilience.'
    },
    {
      icon: TrendingUp,
      title: 'Scale Without Fear',
      description: 'From lean startups to government platforms — serving millions — our architecture is built to grow.'
    },
    {
      icon: Award,
      title: 'Trusted in High-Stakes',
      description: 'Government contractors, high-growth startups, and mission-critical organizations trust us to deliver.'
    },
    {
      icon: Target,
      title: 'Real Impact, Measured',
      description: 'We support targets, actionable what matters, and give you real numbers on performance.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Why CodeWave.it?
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-700 ease-out delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Because building smarter means partnering with the ones who think ahead.
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative max-w-6xl mx-auto h-[600px] md:h-[700px] lg:h-[800px]">
          {/* Central Circle */}
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
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
          <div className="absolute inset-0 text-center">
            {features.map((feature, index) => {
              const totalItems = features.length;
              const angle = index * (360 / totalItems) - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 30;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);

              return (
                <div
                  key={index}
                  className={`absolute w-64 transition-all duration-700 ease-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                    transitionDelay: `${400 + index * 150}ms`
                  }}
                >
                  <div className="group h-full">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full flex flex-col items-center hover:border-[#ff6a3d]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6a3d]/20">
                      <div className="w-12 h-12  bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white " />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-[#ff6a3d] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
