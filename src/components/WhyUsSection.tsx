import React, { useEffect, useRef, useState } from 'react';
import { Zap, Shield, TrendingUp, Award, Target } from 'lucide-react';

const WhyUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

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

  // New resize handler to update container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    // Initial measurement
    updateDimensions();

    // Set up resize listener
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
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

  // Updated getCardPosition function with mobile support
  const getCardPosition = (index: number, totalItems: number) => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // For mobile, return centered position with no offset
      return {
        transform: 'translate(-50%, 0)',
        position: 'relative',
        opacity: 1
      };
    }

    // Desktop circular layout
    const angleInRadians = (2 * Math.PI * index) / totalItems - Math.PI / 2;
    const radius = Math.min(containerSize.width, containerSize.height) * 0.35;
    const x = Math.cos(angleInRadians) * radius;
    const y = Math.sin(angleInRadians) * radius;

    return {
      transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
      angle: angleInRadians,
      position: 'absolute'
    };
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ color: 'var(--text-primary)' }}
    >
      {/* Enhanced background with subtle gradients */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div> */}

      {/* Floating particles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(var(--accent-primary-rgb), ${Math.random() * 0.3 + 0.1})`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(var(--accent-primary-rgb), 0.3)`,
              animation: `pulse ${Math.random() * 4 + 3}s ease-in-out infinite alternate, float ${Math.random() * 10 + 10}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl mb-2 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
          >
            Why CodeWave.it?
          </h2>
          {/* Underline */}
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
          <p
            className={`text-xl max-w-3xl mx-auto transition-all duration-700 ease-out delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ color: 'var(--text-secondary)' }}
          >
            Because building smarter means partnering with the ones who think ahead.
          </p>
        </div>

        {/* Updated Network Visualization with responsive layout */}
        <div
          ref={containerRef}
          className="relative w-full max-w-4xl mx-auto md:aspect-square"
        >
          {/* Central Circle - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out delay-300 z-20">
            <div className="relative">
              <div
                className="w-32 h-32 lg:w-48 lg:h-48 border-2 rounded-full flex items-center justify-center"
                style={{
                  borderColor: 'var(--accent-primary)',
                  background: 'rgba(var(--accent-primary-rgb), 0.08)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 0 40px rgba(var(--accent-primary-rgb), 0.2), inset 0 0 15px rgba(var(--accent-primary-rgb), 0.15)'
                }}
              >
                {/* Circle content with animated overlay */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-cyan-500/30 to-transparent animate-pulse-premium"></div>
                </div>
                <div className="flex items-center justify-center relative z-10">
                  <img
                    src="https://res.cloudinary.com/dikisauij/image/upload/v1756993391/logo_ycihzq.png"
                    alt="CodeWave logo"
                    className="w-24 h-24 lg:w-56 lg:h-56 object-contain"
                  />
                </div>
              </div>
              {/* Multiple Pulsing Rings */}
              <div
                className="absolute inset-0 w-32 h-32 lg:w-48 lg:h-48 border-2 rounded-full animate-ping"
                style={{ borderColor: 'var(--accent-primary)', opacity: 0.3, animationDuration: '3s' }}
              ></div>
              <div
                className="absolute -inset-3 w-38 h-38 lg:w-54 lg:h-54 border border-cyan-400/20 rounded-full"
                style={{ opacity: 0.6 }}
              ></div>
            </div>
          </div>

          {/* Mobile Logo - Shown only on mobile */}
          {/* <div className="md:hidden flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <div
                className="w-full h-full border-2 rounded-full flex items-center justify-center"
                style={{
                  borderColor: 'var(--accent-primary)',
                  background: 'rgba(var(--accent-primary-rgb), 0.08)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <img
                  src="https://res.cloudinary.com/dikisauij/image/upload_v1756993391/logo_ycihzq.png"
                  alt="CodeWave logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div> */}

          {/* Feature Nodes - Updated for responsive layout */}
          <div className="md:absolute md:inset-0">
            {/* Use flex-col and gap for mobile, block for desktop */}
            <div className="flex flex-col items-center gap-6 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:h-full md:block">
              {features.map((feature, index) => {
                const position = getCardPosition(index, features.length);

                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out w-full max-w-md mx-auto ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    } ${position.position === 'absolute' ? 'md:absolute md:left-1/2 md:top-1/2 md:max-w-none' : ''}`}
                    style={{
                      // Only apply transform and width for desktop
                      ...(position.position === 'absolute'
                        ? {
                            transform: position.transform,
                            width: '240px',
                          }
                        : {
                            // For mobile, reset transform and use full width
                            transform: 'none',
                            width: '100%',
                          }),
                      transitionDelay: `${400 + index * 150}ms`,
                    }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <div className="group h-full">
                      <div
                        className="backdrop-blur-md border rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-300"
                        style={{
                          background: hoverIndex === index
                            ? 'linear-gradient(135deg, rgba(var(--accent-primary-rgb), 0.15), rgba(var(--accent-secondary-rgb), 0.05))'
                            : 'rgba(var(--glass-bg), 0.8)',
                          borderColor: hoverIndex === index
                            ? 'var(--accent-primary)'
                            : 'var(--glass-border)',
                          transform: hoverIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                        }}
                      >
                        <div
                          className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                          style={{
                            background: hoverIndex === index
                              ? 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))'
                              : 'linear-gradient(to right, rgba(var(--accent-primary-rgb), 0.8), rgba(var(--accent-secondary-rgb), 0.8))',
                            transform: hoverIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
                            boxShadow: hoverIndex === index ? '0 10px 20px rgba(var(--accent-primary-rgb), 0.3)' : 'none'
                          }}
                        >
                          <feature.icon className="w-7 h-7" style={{ color: 'var(--text-primary)' }} />
                        </div>
                        <h3
                          className="text-lg font-bold mb-2 transition-colors duration-300 text-center"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed flex-grow text-center" style={{ color: 'var(--text-secondary)' }}>
                          {feature.description}
                        </p>

                        {/* Animated underline - centered */}
                        <div
                          className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 rounded-full transition-all duration-300 mx-auto"
                          style={{ width: hoverIndex === index ? '100%' : '30%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lines connecting nodes - Hidden on mobile */}
          <div className="hidden md:block absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            {features.map((_, index) => {
              const position = getCardPosition(index, features.length);
              const angle = (position.angle * 180) / Math.PI;

              return (
                <div
                  key={`line-${index}`}
                  className={`absolute top-1/2 left-1/2 h-px transition-all duration-500 ${isVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-0'
                    } ${hoverIndex === index ? '!opacity-80' : ''}`}
                  style={{
                    background: `linear-gradient(90deg, rgba(var(--accent-primary-rgb), 0.7), rgba(var(--accent-primary-rgb), 0.1))`,
                    transformOrigin: 'left center',
                    width: Math.min(containerSize.width, containerSize.height) * 0.35,
                    transform: `rotate(${angle}deg)`,
                    transitionDelay: `${600 + index * 100}ms`
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced background code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 font-mono text-xs transform rotate-12 animate-pulse-premium"
          style={{ color: 'var(--accent-primary)' }}>
          {'{ intelligence: "core" }'}
        </div>
        <div className="absolute top-40 right-20 font-mono text-xs transform -rotate-6 animate-pulse-premium"
          style={{ color: 'var(--accent-primary)', animationDelay: '1s' }}>
          {'security.byDesign()'}
        </div>
        <div className="absolute bottom-20 left-20 font-mono text-xs transform rotate-6 animate-pulse-premium"
          style={{ color: 'var(--accent-primary)', animationDelay: '0.5s' }}>
          {'scale.infinitely()'}
        </div>
        <div className="absolute bottom-40 right-10 font-mono text-xs transform -rotate-12 animate-pulse-premium"
          style={{ color: 'var(--accent-primary)', animationDelay: '1.5s' }}>
          {'impact.measure()'}
        </div>
      </div>

      {/* Call to Action */}
      <div className={`text-center mt-12 transition-all duration-700 ease-out delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
        <button
          className="px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          style={{
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            boxShadow: '0 10px 25px rgba(var(--accent-primary-rgb), 0.3)'
          }}
          onClick={() => window.location.href = '/contact'}
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
};

export default WhyUsSection;
