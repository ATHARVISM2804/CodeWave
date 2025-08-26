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

  const AnimatedText: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, delay + currentIndex * 50);

      return () => clearTimeout(timeout);
    }, [currentIndex, text, delay, isVisible]);

    return <span>{displayedText}</span>;
  };

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Slanted Divider */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-[#ff6a3d]/10 to-transparent transform -skew-y-2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          {/* Animated Tagline */}
          <div className="space-y-6">
            <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
              <div className="mb-4">
                <AnimatedText 
                  text="We're not a dev " 
                  delay={0} 
                />
                <span className="text-[#ff6a3d]">
                  <AnimatedText text="shop." delay={800} />
                </span>
              </div>
              <div className="mb-4">
                <AnimatedText 
                  text="We're an intelligence " 
                  delay={1200} 
                />
                <span className="text-[#ff6a3d]">
                  <AnimatedText text="studio." delay={2000} />
                </span>
              </div>
              <div>
                <AnimatedText 
                  text="We build software " 
                  delay={2400} 
                />
                <span className="text-[#ff6a3d]">
                  <AnimatedText text="that thinks." delay={3200} />
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '3800ms' }}>
            <p className="text-xl text-gray-300 mb-8">
              At CodeWave, we merge clean code with strategic AI to build intelligent digital products—fast, reliable, scalable, and engineered to solve real-world problems.
            </p>
            <p className="text-lg text-gray-400">
              From fast-growing startups to secure government platforms, we bring structure to chaos — and intelligence to code.
            </p>
          </div>

          {/* Decorative Quote */}
          <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '4200ms' }}>
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