import React, { useEffect, useRef, useState } from 'react';
import { Globe, Zap, Brain, Palette, Smartphone, Shield, Code, Database, Cloud, Lock, Cpu, Layers, ArrowRight, Sparkles, Target, CheckCircle } from 'lucide-react';

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
    <div style={{ background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="pt-16 py-12 md:py-20 relative overflow-hidden" style={{ background: 'transparent' }}>
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Service Icons - Hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <Globe className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
            </div>
          </div>
          <div className="absolute top-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <Brain className="w-5 h-5" style={{ color: 'var(--accent-secondary)' }} />
            </div>
          </div>
          <div className="absolute bottom-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shadow-lg backdrop-blur-sm"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <Smartphone className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
            </div>
          </div>
        </div>

        <div className="container mt-20 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-fade-in-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm"
                      style={{ borderColor: 'var(--accent-primary)', background: 'var(--card-bg)' }}>
                      <Sparkles className="w-3 h-3" style={{ color: 'var(--accent-primary)' }} />
                      <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Premium Services</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span style={{ color: 'var(--text-primary)' }}>Build Tomorrow's</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                      Digital Solutions
                    </span>
                  </h1>
                  
                  <p className="text-lg lg:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We craft intelligent, scalable, and future-ready digital experiences that transform businesses and delight users.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>150+</div>
                    <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>99%</div>
                    <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>5+</div>
                    <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Years Experience</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button className="group px-6 py-3 rounded-full font-semibold text-base flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                      color: 'var(--text-primary)',
                      boxShadow: '0 8px 25px rgba(var(--accent-primary-rgb), 0.3)'
                    }}>
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-3 rounded-full font-semibold text-base border-2 transform hover:scale-105 transition-all duration-300"
                    style={{
                      borderColor: 'var(--accent-primary)',
                      color: 'var(--text-primary)',
                      background: 'transparent'
                    }}>
                    View Our Work
                  </button>
                </div>
              </div>

              {/* Right Content - Service Showcase - Hidden on mobile */}
              <div className={`relative hidden lg:block animate-fade-in-right`} style={{ animationDelay: '200ms' }}>
                <div className="relative">
                  {/* Main Service Card */}
                  <div className="rounded-2xl p-6 shadow-xl backdrop-blur-lg transform hover:scale-105 transition-all duration-500"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                        <Code className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Smart Development</h3>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>AI-Powered Solutions</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Intelligent code generation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Real-time monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Automated deployment</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold" style={{ color: 'var(--accent-primary)' }}>Project Progress</span>
                        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>92%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--card-bg)' }}>
                        <div className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                            width: '92%'
                          }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Mini Cards */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg animate-bounce backdrop-blur-sm"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                    <Target className="w-6 h-6" style={{ color: 'var(--accent-secondary)' }} />
                  </div>

                  <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-lg flex items-center justify-center shadow-lg animate-pulse backdrop-blur-sm"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                    <Layers className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={sectionRef} className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Our Core Services
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Comprehensive solutions designed to transform your digital presence with intelligence at the core.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`morph-card glare-card p-6 hover-lift-premium magnetic-effect ripple-effect ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 magnetic-effect`}>
                    <service.icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 neon-glow" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                    <p className="mb-4 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>KEY FEATURES</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs" style={{ color: 'var(--text-secondary)' }}>
                              <div className="w-1 h-1 rounded-full mr-2" style={{ background: 'var(--accent-primary)' }}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>TECHNOLOGIES</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300"
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
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Additional Expertise
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Specialized services to complement your core development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`morph-card glare-card p-4 hover-lift-premium magnetic-effect text-center ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 magnetic-effect"
                  style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>
                  <service.icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-base font-bold mb-2 neon-glow" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Our Development Process
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              A proven methodology that ensures quality, transparency, and intelligent solutions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                >
                  <div className="morph-card glare-card p-4 hover-lift-premium magnetic-effect h-full"
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm magnetic-effect"
                        style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}>
                        {step.step}
                      </div>
                      <h3 className="text-base font-bold mb-2 neon-glow" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                      <div className="text-xs font-semibold" style={{ color: 'var(--accent-primary)' }}>{step.duration}</div>
                    </div>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5"
                      style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="morph-card glare-card p-8 text-center hover-lift-premium"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)'
            }}
          >
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Ready to Build Something{' '}
              <span style={{ color: 'var(--accent-primary)' }}>Intelligent?</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Let's discuss your project and explore how we can bring intelligence to your digital solutions.
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <button className="liquid-button px-6 py-3 font-semibold glare-effect text-base magnetic-effect"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'var(--text-primary)'
                }}>
                Start Your Project
              </button>
              <button className="morph-card px-6 py-3 rounded-full font-semibold hover-lift-premium glare-card text-base ripple-effect"
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