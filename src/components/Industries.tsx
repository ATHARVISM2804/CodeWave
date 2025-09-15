import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Shield, Zap, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Industries: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

  const industries = [
    {
      icon: TrendingUp,
      title: 'Startups & Scaleups',
      description: 'We help founders launch faster and scale smarter with MVPs, dashboards, automation, and AI-driven insights.',
      features: ['MVP Development', 'Growth Dashboards', 'Process Automation', 'AI Analytics'],
      color: 'from-blue-500 to-cyan-500',
      slug: 'startups-scaleups'
    },
    {
      icon: Shield,
      title: 'Government & Law Enforcement',
      description: 'We design secure GovTech platforms for complaint handling, citizen services, and internal workflows — built for trust and compliance.',
      features: ['Complaint Portals', 'Citizen Services', 'Security Compliance', 'Audit-Ready Systems'],
      color: 'from-green-500 to-emerald-500',
      slug: 'government-law'
    },
    {
      icon: Zap,
      title: 'Logistics & Delivery',
      description: 'Real-time GPS, AI-powered ETAs, and apps that keep deliveries on time and optimized.',
      features: ['Real-time Tracking', 'Route Optimization', 'AI-powered ETAs', 'Fleet Management'],
      color: 'from-purple-500 to-pink-500',
      slug: 'logistics-delivery'
    },
    {
      icon: Award,
      title: 'Fintech & Professional Services',
      description: 'Data-secure platforms, client dashboards, and responsive apps for high-trust industries like finance, consulting, and legal.',
      features: ['Secure Platforms', 'Client Dashboards', 'Compliance Tools', 'Risk Management'],
      color: 'from-orange-500 to-red-500',
      slug: 'fintech-professional'
    },
    {
      icon: GraduationCap,
      title: 'Education & eLearning',
      description: 'Mobile-first learning platforms, LMS, and interactive student portals that keep education engaging and accessible.',
      features: ['Learning Management', 'Student Portals', 'Interactive Content', 'Mobile Learning'],
      color: 'from-indigo-500 to-blue-500',
      slug: 'education-elearning'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs shadow-lg"
              style={{
                borderColor: 'var(--accent-primary)',
                background: 'var(--card-bg)',
                boxShadow: '0 4px 15px rgba(var(--accent-primary-rgb), 0.10)'
              }}>
              <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Industries</span>
            </span>
          </div>
          <div
            className={`inline-block text-3xl font-bold mb-2 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]`}
          >
            INDUSTRIES WE SERVE
          </div>
          {/* Underline */}
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
          <h2
            className={`text-xl sm:text-xl lg:text-xl font-bold mb-3 transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ color: 'var(--text-primary)' }}
          >
            Smart Tech for Every Sector
          </h2>
          <p
            className={`text-xl max-w-4xl mx-auto transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ color: 'var(--text-secondary)' }}
          >
            At Codewave, we partner with ambitious teams across industries — from fast-moving startups 
            to mission-critical government departments — to build intelligent, scalable, and secure digital solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`morph-card glare-card p-8 hover-lift-premium magnetic-effect ripple-effect group ${
                  isVisible ? 'stagger-animation' : 'opacity-0'
                } stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  boxShadow:
                    // Blue shadow in dark mode, subtle black in light mode
                    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
                      ? '0 4px 24px 0 rgba(37,99,235,0.18), 0 1.5px 8px 0 #2563eb'
                      : '0 4px 24px 0 rgba(0,0,0,0.08), 0 1.5px 8px 0 #222',
                }}
                onClick={() => navigate(`/industries/${industry.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') navigate(`/industries/${industry.slug}`);
                }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div 
                    className={`w-14 h-14 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center flex-shrink-0 magnetic-effect group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 neon-glow group-hover:text-[var(--accent-primary)] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                      {industry.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-6 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {industry.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold mb-3" style={{ color: 'var(--accent-primary)' }}>
                    KEY SOLUTIONS
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ background: 'var(--accent-primary)' }}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-medium" style={{ color: 'var(--accent-primary)' }}>
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" style={{ color: 'var(--accent-primary)' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Don't see your industry? 
            <span style={{ color: 'var(--accent-primary)' }}> Let's talk.</span>
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We adapt our expertise to solve unique challenges across any sector. 
            Every industry has its own needs — and we build accordingly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="liquid-button px-8 py-3 font-semibold glare-effect text-lg magnetic-effect"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                color: 'var(--text-primary)'
              }}>
              Discuss Your Industry
            </button>
            <button className="morph-card px-8 py-3 rounded-full font-semibold hover-lift-premium glare-card text-lg ripple-effect"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)'
              }}>
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
