import React, { useEffect, useRef, useState } from 'react';
import { Globe, Zap, Brain, Palette, Smartphone, Shield, Code, Database, Cloud, Lock, Cpu, Layers } from 'lucide-react';

const ServicesPage: React.FC = () => {
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

  const mainServices = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge frameworks and intelligent features.',
      features: ['React/Next.js Applications', 'Progressive Web Apps', 'E-commerce Platforms', 'Content Management Systems'],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to solve your unique business challenges with intelligence built-in.',
      features: ['Enterprise Applications', 'Workflow Automation', 'API Development', 'System Integration'],
      technologies: ['Python', 'Java', 'C#', 'Microservices', 'Docker'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Intelligent systems that learn, adapt, and provide actionable insights for your business.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS ML'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality and intelligent user experiences.',
      features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design Systems', 'Accessibility Optimization'],
      technologies: ['Figma', 'Adobe Creative Suite', 'Framer', 'Principle', 'InVision'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications with intelligent features and seamless performance.',
      features: ['iOS & Android Apps', 'Cross-platform Solutions', 'App Store Optimization', 'Mobile-first Design'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'GovTech Solutions',
      description: 'Secure, compliant, and scalable solutions for government and public sector organizations.',
      features: ['Compliance & Security', 'Citizen Portals', 'Data Management', 'Digital Transformation'],
      technologies: ['FISMA Compliance', 'Section 508', 'Cloud.gov', 'FedRAMP', 'NIST'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and analytics infrastructure.'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions with intelligent auto-scaling.'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Comprehensive security audits and implementation.'
    },
    {
      icon: Cpu,
      title: 'DevOps & Automation',
      description: 'Streamlined deployment and continuous integration.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business needs, challenges, and goals to create a comprehensive strategy.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the user experience and technical architecture with intelligence at the core.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Agile development with continuous integration, testing, and client feedback loops.',
      duration: '4-12 weeks'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security validation.',
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing support, monitoring, and continuous improvement.',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="pt-16" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                Engineering Intelligence Into{' '}
                <span className="parallax-text neon-glow" style={{ color: 'var(--accent-primary)' }}>Every Solution</span>
              </h1>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                We don't just build software—we craft intelligent digital experiences that adapt, learn, and evolve with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Our Core Services
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Comprehensive solutions designed to transform your digital presence with intelligence at the core.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`morph-card glare-card p-8 hover-lift-premium magnetic-effect ripple-effect ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 magnetic-effect`}>
                    <service.icon className="w-8 h-8" style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 neon-glow" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                    <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>KEY FEATURES</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                              <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ background: 'var(--accent-primary)' }}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>TECHNOLOGIES</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300"
                              style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-secondary)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Additional Expertise
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Specialized services to complement your core development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`morph-card glare-card p-6 hover-lift-premium magnetic-effect text-center ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 magnetic-effect"
                  style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>
                  <service.icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2 neon-glow" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Our Development Process
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              A proven methodology that ensures quality, transparency, and intelligent solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                >
                  <div className="morph-card glare-card p-6 hover-lift-premium magnetic-effect h-full"
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg magnetic-effect"
                        style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}>
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold mb-3 neon-glow" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                      <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                      <div className="text-xs font-semibold" style={{ color: 'var(--accent-primary)' }}>{step.duration}</div>
                    </div>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5"
                      style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="morph-card glare-card p-12 text-center hover-lift-premium"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)'
            }}
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Ready to Build Something{' '}
              <span style={{ color: 'var(--accent-primary)' }}>Intelligent?</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Let's discuss your project and explore how we can bring intelligence to your digital solutions.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <button className="liquid-button px-8 py-4 font-semibold glare-effect text-lg magnetic-effect"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'var(--text-primary)'
                }}>
                Start Your Project
              </button>
              <button className="morph-card px-8 py-4 rounded-full font-semibold hover-lift-premium glare-card text-lg ripple-effect"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}>
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;