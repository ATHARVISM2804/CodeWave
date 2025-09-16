import React, { useEffect, useRef, useState } from 'react';
import { Globe, ArrowRight, CheckCircle, Search, Zap, Shield, Smartphone, Users, Code, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const WebDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();
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

  const features = [
    {
      icon: Search,
      title: 'SEO & AI-Ready Architecture',
      description: 'Structured for search engines and future AI discovery'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Performance',
      description: 'Optimized loading speeds and responsive design'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Built-in security and compliance features'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Perfect experience across all devices'
    }
  ];

  const services = [
    {
      title: 'High-Conversion Landing Pages',
      description: 'Optimized for both SEO and AI-driven search',
      icon: TrendingUp
    },
    {
      title: 'Business Websites',
      description: 'Balance speed, security, and brand identity',
      icon: Users
    },
    {
      title: 'Enterprise-Ready Platforms',
      description: 'Integrate smoothly with existing systems',
      icon: Code
    },
    {
      title: 'Secure Citizen-Facing Portals',
      description: 'Improve accessibility and trust for government services',
      icon: Shield
    }
  ];

  return (
    <div className="pt-16" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>WEB DEVELOPMENT</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span style={{ color: 'var(--text-primary)' }}>Websites That Perform.</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                      Platforms That Think.
                    </span>
                  </h1>
                  
                  <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Your website is more than a digital presence — it's where trust begins. At Codewave, we build fast, scalable, and AI-friendly websites designed not only for today's search engines but also for tomorrow's AI agents.
                  </p>

                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We don't just design for clicks — we design for discoverability, engagement, and growth. Whether you're a startup launching your first product, an enterprise scaling globally, a business building digital credibility, or a government agency digitizing citizen services, we create web platforms that perform and adapt.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="px-8 py-4 font-semibold text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                      color: 'var(--text-primary)'
                    }}
                    onClick={() => navigate('/contact')}
                  >
                    Launch My Website
                  </button>
                  <a
                    href="https://calendly.com/codewave/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full font-semibold text-lg border-2 transform hover:scale-105 transition-all duration-300"
                    style={{
                      borderColor: 'var(--accent-primary)',
                      color: 'var(--accent-primary)',
                      background: 'transparent'
                    }}
                  >
                    Book a Call
                  </a>
                </div>
              </div>

              <div className="relative">
                {/* Add image here */}
                <img
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg   "
                  alt="Web Development Illustration"
                  className="rounded-2xl shadow-xl mb-8 w-full object-cover"
                  style={{ maxHeight: 320 }}
                />
                <div className="morph-card glare-card p-8"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)'
                  }}>
                  <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Why It Matters</h3>
                  <div className="space-y-4">
                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      The way people search is changing. AI is becoming the new search interface — and your website must be ready.
                    </p>
                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      A Codewave-built site doesn't just load faster and rank higher; it's structured for AI discoverability, future SEO, and long-term relevance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section ref={sectionRef} className="py-20" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              What We Do
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              From startups to enterprises, we create web solutions that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`morph-card glare-card p-8 hover-lift-premium ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Built for the Future of Search
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="morph-card glare-card p-6 text-center hover-lift-premium"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)'
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="morph-card glare-card p-12 text-center"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)'
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Ready to Launch Your{' '}
              <span style={{ color: 'var(--accent-primary)' }}>AI-Ready Website?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Let's discuss your project and create a website that's built for tomorrow's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 font-semibold text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'var(--text-primary)'
                }}
                onClick={() => navigate('/contact')}
              >
                Start My Project
              </button>
              <a
                href="https://calendly.com/codewave/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 transform hover:scale-105 transition-all duration-300"
                style={{
                  borderColor: 'var(--accent-primary)',
                  color: 'var(--accent-primary)',
                  background: 'transparent'
                }}
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
