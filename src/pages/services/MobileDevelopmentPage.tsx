import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone,  Monitor, Zap, MapPin, Bell } from 'lucide-react';

const MobileDevelopmentPage: React.FC = () => {
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
      title: 'Cross-Platform Apps That Run Seamlessly on iOS & Android',
      description: 'Single codebase, multiple platforms for faster development',
      icon: Monitor
    },
    {
      title: 'Native Apps for Performance-Driven Use Cases',
      description: 'Maximum performance for demanding applications',
      icon: Zap
    },
    {
      title: 'Real-Time Features Like GPS, Notifications, and Messaging',
      description: 'Connected experiences that keep users engaged',
      icon: MapPin
    },
    {
      title: 'End-to-End Launch Support, from Testing to App Store Deployment',
      description: 'Complete support from development to market launch',
      icon: Bell
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
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>MOBILE APP DEVELOPMENT</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span style={{ color: 'var(--text-primary)' }}>Apps Built for People,</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                      Not Just Screens
                    </span>
                  </h1>
                  
                  <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Your users are mobile. Your product should be too. We design and deliver intuitive, scalable mobile apps that perform under real-world conditions — whether for startups, enterprises, or government teams in the field.
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
                    Explore Mobile Apps →
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
                    View App Portfolio
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* Add image here */}
                <img
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
                  alt="Mobile Development Illustration"
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
                      A great app doesn't just sit on a device — it makes life easier, faster, and more connected for users every day.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
              <span style={{ color: 'var(--accent-primary)' }}>Go Mobile?</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Let's discuss your mobile app vision and create something users will love.
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
                Start Mobile Project
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
                Discuss App Ideas
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopmentPage;
