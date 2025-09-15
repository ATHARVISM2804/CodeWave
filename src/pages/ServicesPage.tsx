import React, { useEffect, useRef, useState } from 'react';
import { Globe, Zap, Brain, Palette, Smartphone, Shield, Database, TrendingUp, ArrowRight, Sparkles, Target, CheckCircle, Code, Cloud, Lock, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      headline: 'Websites That Perform. Platforms That Think.',
      description: 'Your website is more than a digital presence — it\'s where trust begins. We build fast, scalable, and AI-friendly websites designed for today\'s search engines and tomorrow\'s AI agents.',
      features: ['High-conversion landing pages', 'Business websites with speed & security', 'Enterprise-ready platforms', 'Secure citizen-facing portals'],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
      color: 'from-blue-500 to-cyan-500',
      ctaText: 'Launch My Website',
      slug: 'web-development'
    },
    {
      icon: Zap,
      title: 'Custom Software Solutions',
      headline: 'Software Built Around You — Not the Other Way Around',
      description: 'Every organization has its own rhythm. We create custom software that adapts to your workflows, scales with your growth, and makes complexity feel simple.',
      features: ['Internal tools for HR, finance & operations', 'Enterprise dashboards', 'Secure client portals', 'Automated workflow systems'],
      technologies: ['Python', 'Java', 'C#', 'Microservices', 'Docker'],
      color: 'from-purple-500 to-pink-500',
      ctaText: 'Explore Software Solutions',
      slug: 'custom-software'
    },
    {
      icon: Brain,
      title: 'AI-Powered Automation & Smart Tools',
      headline: 'Smarter Workflows. Faster Results.',
      description: 'Repetitive tasks drain time. We design AI-powered assistants, bots, and workflows that automate the routine so people can focus on the meaningful.',
      features: ['24/7 chatbots for support', 'Document summarization tools', 'Automated reporting systems', 'Smart workflow integrations'],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS ML'],
      color: 'from-green-500 to-emerald-500',
      ctaText: 'Automate My Workflow',
      slug: 'ai-automation'
    },
    {
      icon: Shield,
      title: 'GovTech Applications',
      headline: 'Secure Tech for Public Impact',
      description: 'Public service demands tools that are secure, reliable, and easy to use. We build GovTech applications that make citizen services faster and workflows smoother.',
      features: ['Complaint & grievance portals', 'Field-force dashboards', 'Citizen communication tools', 'Digital case management'],
      technologies: ['FISMA Compliance', 'Section 508', 'Cloud.gov', 'FedRAMP', 'NIST'],
      color: 'from-teal-500 to-blue-500',
      ctaText: 'Explore GovTech Projects',
      slug: 'govtech'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      headline: 'Apps Built for People, Not Just Screens',
      description: 'Your users are mobile. Your product should be too. We design intuitive, scalable mobile apps that perform under real-world conditions.',
      features: ['Cross-platform iOS & Android apps', 'Native performance-driven apps', 'Real-time GPS & notifications', 'End-to-end launch support'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
      color: 'from-indigo-500 to-purple-500',
      ctaText: 'Explore Mobile Apps',
      slug: 'mobile-development'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      headline: 'Design That Thinks Before It Looks',
      description: 'Good design isn\'t decoration — it\'s decision-making. We create user experiences that guide action, reduce friction, and delight users.',
      features: ['Brand-aligned interfaces', 'User-tested wireframes', 'Interactive prototypes', 'Scalable design systems'],
      technologies: ['Figma', 'Adobe Creative Suite', 'Framer', 'Principle', 'InVision'],
      color: 'from-orange-500 to-red-500',
      ctaText: 'Explore UI/UX Services',
      slug: 'ui-ux-design'
    },
    {
      icon: Database,
      title: 'API Integration & Data Intelligence',
      headline: 'When Systems Talk, Businesses Move Faster',
      description: 'Disconnected tools slow teams down. We build secure API integrations and intelligent dashboards that connect systems and eliminate silos.',
      features: ['Custom API development', 'CRM & ERP integrations', 'Data syncing & cleaning', 'Intelligent dashboards'],
      technologies: ['REST', 'GraphQL', 'AWS', 'Google Cloud', 'MongoDB'],
      color: 'from-cyan-500 to-teal-500',
      ctaText: 'Explore API & Data Services',
      slug: 'api-integration'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      headline: 'Marketing That\'s Data-Driven and AI-Backed',
      description: 'Even the smartest product won\'t shine if no one sees it. Our digital marketing combines strategy, creativity, and AI insights to grow visibility and revenue.',
      features: ['SEO & discoverability optimization', 'Content marketing strategy', 'Performance campaigns', 'Automated email workflows'],
      technologies: ['Google Analytics', 'HubSpot', 'Mailchimp', 'Facebook Ads', 'Google Ads'],
      color: 'from-pink-500 to-rose-500',
      ctaText: 'Grow My Audience',
      slug: 'digital-marketing'
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
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="pt-16 py-12 md:py-20 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 opacity-15 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 opacity-10 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))' }}></div>
        </div>

        {/* Floating Service Icons - Hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-xl backdrop-blur-sm"
              style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid var(--card-border)',
                boxShadow: '0 10px 25px rgba(var(--accent-primary-rgb), 0.1)'
              }}>
              <Globe className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
            </div>
          </div>
          <div className="absolute top-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-xl backdrop-blur-sm"
              style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid var(--card-border)',
                boxShadow: '0 8px 20px rgba(var(--accent-primary-rgb), 0.08)'
              }}>
              <Brain className="w-5 h-5" style={{ color: 'var(--accent-secondary)' }} />
            </div>
          </div>
          <div className="absolute bottom-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shadow-xl backdrop-blur-sm"
              style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid var(--card-border)',
                boxShadow: '0 9px 22px rgba(var(--accent-primary-rgb), 0.09)'
              }}>
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
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm shadow-lg"
                      style={{ 
                        borderColor: 'var(--accent-primary)', 
                        background: 'var(--card-bg)',
                        boxShadow: '0 4px 15px rgba(var(--accent-primary-rgb), 0.15)'
                      }}>
                      <Sparkles className="w-3 h-3" style={{ color: 'var(--accent-primary)' }} />
                      <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Intelligence-Driven Services</span>
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
                    We craft intelligent, scalable, and future-ready digital experiences that transform businesses and delight users across every industry.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="text-center p-4 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                    <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>150+</div>
                    <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                    <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>99%</div>
                    <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                    <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>5+</div>
                    <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Years Experience</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button className="group px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                      color: 'var(--text-primary)',
                      boxShadow: '0 10px 30px rgba(var(--accent-primary-rgb), 0.3)'
                    }}>
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-full font-semibold text-base border-2 transform hover:scale-105 transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-white"
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
                  <div className="rounded-2xl p-6 shadow-2xl backdrop-blur-lg transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
                    style={{ 
                      background: 'var(--card-bg)', 
                      border: '1px solid var(--card-border)',
                      boxShadow: '0 25px 50px rgba(var(--accent-primary-rgb), 0.15)'
                    }}>
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-50" />
                    </div>
                    
                    <div className="relative z-10">
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
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl flex items-center justify-center shadow-xl animate-bounce backdrop-blur-sm"
                    style={{ 
                      background: 'var(--card-bg)', 
                      border: '1px solid var(--card-border)',
                      boxShadow: '0 15px 30px rgba(var(--accent-primary-rgb), 0.2)'
                    }}>
                    <Target className="w-6 h-6" style={{ color: 'var(--accent-secondary)' }} />
                  </div>

                  <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-lg flex items-center justify-center shadow-xl animate-pulse backdrop-blur-sm"
                    style={{ 
                      background: 'var(--card-bg)', 
                      border: '1px solid var(--card-border)',
                      boxShadow: '0 12px 25px rgba(var(--accent-primary-rgb), 0.15)'
                    }}>
                    <Layers className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={sectionRef} className="py-12 md:py-16 relative" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Our Core Services
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
            <p className={`text-lg max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Comprehensive solutions designed to transform your digital presence with intelligence at the core.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border shadow-xl backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 20px 40px rgba(var(--accent-primary-rgb), 0.08)'
                }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 magnetic-effect`}>
                      <service.icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                      <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--accent-primary)' }}>{service.headline}</h4>
                      <p className="mb-4 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <h5 className="text-xs font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>WHAT WE DO</h5>
                          <div className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-xs" style={{ color: 'var(--text-secondary)' }}>
                                <div className="w-1 h-1 rounded-full mr-2" style={{ background: 'var(--accent-primary)' }}></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                          color: 'var(--text-primary)'
                        }}
                      >
                        {service.ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 md:py-16 relative" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Additional Expertise
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
            <p className={`text-lg max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Specialized services to complement your core development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 border shadow-xl backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden text-center ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 15px 30px rgba(var(--accent-primary-rgb), 0.06)'
                }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 magnetic-effect"
                  style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>
                  <service.icon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 relative" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Our Development Process
            </h2>
            <div className="w-28 h-1 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
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
                  <div className="rounded-2xl p-4 border shadow-xl backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden h-full"
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-primary)',
                      boxShadow: '0 12px 25px rgba(var(--accent-primary-rgb), 0.06)'
                    }}
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="relative z-10">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm magnetic-effect"
                        style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}>
                        {step.step}
                      </div>
                      <h3 className="text-base font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                      <div className="text-xs font-semibold" style={{ color: 'var(--accent-primary)' }}>{step.duration}</div>
                    </div>
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
      <section className="py-12 md:py-16 relative" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 border shadow-2xl backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group relative overflow-hidden text-center"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
              boxShadow: '0 25px 50px rgba(var(--accent-primary-rgb), 0.12)'
            }}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="relative z-10">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Ready to Build Something{' '}
              <span style={{ color: 'var(--accent-primary)' }}>Intelligent?</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Let's discuss your project and explore how we can bring intelligence to your digital solutions.
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <button className="px-8 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'white'
                }}>
                Start Your Project
              </button>
              <button className="px-8 py-4 rounded-full font-semibold text-base border-2 transition-all duration-300 hover:scale-105 hover:bg-[var(--accent-primary)] hover:text-white"
                style={{
                  borderColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)'
                }}>
                View Our Portfolio
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;