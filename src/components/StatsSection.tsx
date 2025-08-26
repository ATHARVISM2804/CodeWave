import React, { useEffect, useRef, useState } from 'react';

const StatsSection: React.FC = () => {
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

  // AnimatedText now fades in the whole line
  const AnimatedText: React.FC<{ text: string; delay: number; className?: string }> = ({ text, delay, className }) => {
    return (
      <span
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
          transitionDelay: isVisible ? `${delay}ms` : '0ms',
          display: 'inline-block'
        }}
      >
        {text}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="relative h-[120vh] py-20 overflow-hidden">
      {/* Slanted Divider */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-[#ff6a3d]/10 to-transparent transform -skew-y-2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mt-10 space-y-12">
          {/* Animated Tagline */}
          <div className="space-y-6">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <div className="mb-4">
                <AnimatedText text="We're not a dev " delay={0} />
                <AnimatedText text="shop." delay={200} className="text-[#ff6a3d]" />
              </div>
              <div className="mb-4">
                <AnimatedText text="We're an intelligence " delay={400} />
                <AnimatedText text="studio." delay={600} className="text-[#ff6a3d]" />
              </div>
              <div>
                <AnimatedText text="We build software " delay={800} />
                <AnimatedText text="that thinks." delay={1000} className="text-[#ff6a3d]" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className="max-w-4xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
              transitionDelay: isVisible ? '1200ms' : '0ms'
            }}
          >
            <p className="text-xl text-gray-300 mb-8">
              At CodeWave, we merge clean code with strategic AI to build intelligent digital products—fast, reliable, scalable, and engineered to solve real-world problems.
            </p>
            <p className="text-lg text-gray-400">
              From fast-growing startups to secure government platforms, we bring structure to chaos — and intelligence to code.
            </p>
          </div>

          {/* Decorative Quote */}
          <div
            className="max-w-3xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
              transitionDelay: isVisible ? '1400ms' : '0ms'
            }}
          >
            <div className="bg-gradient-to-r from-[#ff6a3d]/20 to-transparent p-8 rounded-2xl border-l-4 border-[#ff6a3d]">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#ff6a3d] mb-4">
                We don't just write code. We make it think.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slanted Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-l from-[#ff6a3d]/10 to-transparent transform skew-y-2"></div>
    </section>
  );
};

export default StatsSection;