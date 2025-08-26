import React, { useEffect, useRef, useState } from 'react';
import { Globe, Zap, Brain, Palette, Smartphone, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Front-end & full-stack solutions built with cutting-edge frameworks. Fast, responsive and future-ready.',
      features: ['React/Next.js', 'Node.js APIs', 'Performance optimized']
    },
    {
      icon: Zap,
      title: 'Custom Software',
      description: 'Tailored systems for unique operational challenges — built for scale and designed to last.',
      features: ['Scalable architecture', 'API integrations', 'Cloud deployment']
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Intelligent insights, automation, and predictive models — bringing artificial intelligence to real business problems.',
      features: ['Machine learning', 'Data analysis', 'Intelligent automation']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Experiences that convert and interfaces users love. Beautiful, functional and strategically designed.',
      features: ['User research', 'Prototyping', 'Design systems']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android applications plus cross-platform solutions — built with app store standards in mind.',
      features: ['React Native', 'Native development', 'App store optimization']
    },
    {
      icon: Shield,
      title: 'GovTech Solutions',
      description: 'Secure, compliant, scalable solutions for government and public sector. Built for transparency and built to last.',
      features: ['Security compliant', 'Scalable platforms', 'Transparent processes']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-block text-[#ff6a3d] text-sm font-semibold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            OUR SERVICES
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Engineering Intelligence Into Every Solution
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            We craft advanced digital products and platforms with precision, performance, and purpose — designing for impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group morph-card glare-card p-8 hover-lift-premium magnetic-effect ripple-effect ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              // style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] rounded-xl flex items-center justify-center mb-6 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-all duration-300 neon-glow">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300 font-medium">
                      <div className="w-2 h-2 bg-[#ff6a3d] rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6a3d]/10 to-[#ff8c42]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;