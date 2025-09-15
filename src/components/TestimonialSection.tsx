import React, { useEffect, useRef, useState } from 'react';
import Testimonial, { TestimonialProps } from './Testimonial';

interface TestimonialSectionProps {
  title: string;
  subtitle?: string;
  testimonials: TestimonialProps[];
  gradientFrom?: string;
  gradientTo?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ 
  title, 
  subtitle, 
  testimonials, 
  gradientFrom = 'blue-500', 
  gradientTo = 'cyan-500' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20" style={{ background: 'var(--bg-primary)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ color: 'var(--text-primary)' }}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
               style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
