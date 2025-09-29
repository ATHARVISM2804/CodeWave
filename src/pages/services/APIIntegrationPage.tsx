import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Database, Settings, Link2, BarChart, Workflow } from 'lucide-react';

const APIIntegrationPage: React.FC = () => {
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

  const services = [
    {
      title: 'Custom API Development for Business Workflows',
      description: 'Tailored APIs that support your unique business processes',
      icon: Settings
    },
    {
      title: 'Integrations with CRMs, ERPs, and Internal Tools',
      description: 'Connect all your business systems seamlessly',
      icon: Link2
    },
    {
      title: 'Data Syncing, Structuring, and Cleaning',
      description: 'Ensure data consistency across all platforms',
      icon: Workflow
    },
    {
      title: 'Dashboards That Turn Raw Data into Insights',
      description: 'Visual analytics that drive better decisions',
      icon: BarChart
    }
  ];

  // Back button handler
  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('services-provided');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="pt-16" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      {/* Back Button */}
      <div
      onClick={handleBack}
      className="container mx-auto px-4 pt-4">
        <button
          className="mt-10 md:mt-5 px-6 py-2 rounded-full bg-[var(--accent-primary)] text-white font-semibold shadow hover:bg-[var(--accent-secondary)] transition"
          
        >
          ← Back to Services
        </button>
      </div>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>API INTEGRATION & DATA INTELLIGENCE</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span style={{ color: 'var(--text-primary)' }}>When Systems Talk,</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                      Businesses Move Faster
                    </span>
                  </h1>
                  
                  <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Disconnected tools slow teams down. We build secure API integrations and intelligent dashboards that connect systems, eliminate silos, and put data to work.
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
                    Explore API & Data Services →
                  </button>
                  <button
                    className="px-8 py-4 rounded-full font-semibold text-lg border-2 transform hover:scale-105 transition-all duration-300"
                    style={{
                      borderColor: 'var(--accent-primary)',
                      color: 'var(--accent-primary)',
                      background: 'transparent'
                    }}
                    onClick={() => navigate('/portfolio')}
                  >
                    View Integration Projects
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* Add image here */}
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="API Integration Illustration"
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
                      When systems work together, people work smarter. Data-driven decisions become faster, more accurate, and more impactful.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="morph-card glare-card p-12 text-center"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)'
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Ready to{' '}
              <span style={{ color: 'var(--accent-primary)' }}>Connect Your Systems?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Let's eliminate data silos and create intelligent workflows for your business.
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
                Start Integration Project
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
                API Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIIntegrationPage;
