import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain,  Bot, FileText, BarChart3, Workflow } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate(); // add this line

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
      title: 'Chatbots That Reduce Support Load and Work 24/7',
      description: 'Intelligent assistants that handle routine inquiries',
      icon: Bot
    },
    {
      title: 'Document Summarization & Knowledge Assistants',
      description: 'AI that processes and extracts insights from documents',
      icon: FileText
    },
    {
      title: 'Automated Reporting & Decision-Support Tools',
      description: 'Real-time analytics and intelligent recommendations',
      icon: BarChart3
    },
    {
      title: 'Smart Workflows That Connect Systems Seamlessly',
      description: 'Automated processes that eliminate manual handoffs',
      icon: Workflow
    }
  ];

  // Back button handler
  const handleBack = () => {
    navigate('/', { replace: false });
    setTimeout(() => {
      const el = document.getElementById('services-provided');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback: scroll to top if services section not found
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300); // Increased timeout to allow page to load
  };

  return (
    <div className="pt-16" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-4">
        <button
          onClick={handleBack}
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
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>AI-POWERED AUTOMATION & SMART TOOLS</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span style={{ color: 'var(--text-primary)' }}>Smarter Workflows.</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                      Faster Results.
                    </span>
                  </h1>
                  
                  <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Repetitive tasks drain time across startups, businesses, enterprises, and government teams. We design AI-powered assistants, bots, and workflows that automate the routine so people can focus on the meaningful.
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
                    Automate My Workflow →
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
                    View AI Solutions
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* Add image here */}
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                  alt="AI Automation Illustration"
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
                      AI isn't about replacing people — it's about giving them back time. With the right automation, organizations reduce costs, improve accuracy, and accelerate growth.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
              <span style={{ color: 'var(--accent-primary)' }}>Automate Your Workflows?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Let's identify which processes can benefit from intelligent automation.
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
                Start Automation Project
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
                Schedule AI Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;
