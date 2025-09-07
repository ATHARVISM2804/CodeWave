import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Note: You'll need to install react-helmet-async

const PortfolioPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const categories = ['All', 'Web Development', 'Mobile', 'AI & ML', 'GovTech', 'E-commerce'];

  const projects = [
    {
      title: 'AI-Powered CRM Dashboard',
      category: 'Web Development',
      description: 'Intelligent customer relationship management system with predictive analytics and automated insights.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Real-time Analytics', 'AI Predictions', 'Automated Workflows', 'Custom Reporting'],
      technologies: ['React', 'Node.js', 'TensorFlow', 'PostgreSQL'],
      results: ['60% reduction in support tickets', '18% increase in conversion', '40% faster response time'],
      color: 'from-blue-500 to-cyan-500',
      year: '2024',
      url: '/portfolio/ai-crm-dashboard'
    },
    {
      title: 'Government Complaint Portal',
      category: 'GovTech',
      description: 'Secure, compliant citizen portal for government complaint management with intelligent routing.',
      image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['FISMA Compliant', 'Automated Routing', 'Multi-language Support', 'Analytics Dashboard'],
      technologies: ['React', 'Node.js', 'AWS GovCloud', 'PostgreSQL'],
      results: ['2x faster resolution', '95% citizen satisfaction', '50% reduction in processing time'],
      color: 'from-green-500 to-emerald-500',
      year: '2023',
      url: '/portfolio/government-complaint-portal'
    },
    {
      title: 'Smart Delivery Mobile App',
      category: 'Mobile',
      description: 'Intelligent delivery tracking app with real-time GPS, route optimization, and predictive delivery times.',
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Real-time Tracking', 'Route Optimization', 'Push Notifications', 'Offline Support'],
      technologies: ['React Native', 'Node.js', 'Google Maps API', 'Firebase'],
      results: ['25% reduction in delays', '70% improvement in on-time delivery', '4.8 app store rating'],
      color: 'from-purple-500 to-pink-500',
      year: '2024',
      url: '/portfolio/smart-delivery-mobile-app'
    },
    {
      title: 'E-commerce Intelligence Platform',
      category: 'E-commerce',
      description: 'AI-driven e-commerce platform with personalized recommendations and inventory optimization.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['AI Recommendations', 'Inventory Management', 'Payment Integration', 'Analytics Suite'],
      technologies: ['Next.js', 'Stripe', 'TensorFlow', 'MongoDB'],
      results: ['35% increase in sales', '50% better conversion rate', '90% customer retention'],
      color: 'from-orange-500 to-red-500',
      year: '2023',
      url: '/portfolio/ecommerce-intelligence-platform'
    },
    {
      title: 'ML-Powered Knowledge Bot',
      category: 'AI & ML',
      description: 'Intelligent knowledge management system with natural language processing and automated document analysis.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['NLP Processing', 'Document Analysis', 'Smart Search', 'Auto-categorization'],
      technologies: ['Python', 'OpenAI', 'Elasticsearch', 'FastAPI'],
      results: ['80% faster information retrieval', '95% accuracy in responses', '60% reduction in support queries'],
      color: 'from-indigo-500 to-blue-500',
      year: '2024',
      url: '/portfolio/ml-knowledge-bot'
    },
    {
      title: 'Healthcare Management System',
      category: 'Web Development',
      description: 'Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Patient Records', 'Appointment Scheduling', 'Telemedicine', 'Billing Integration'],
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      results: ['40% improvement in patient satisfaction', '30% reduction in wait times', 'HIPAA compliant'],
      color: 'from-teal-500 to-green-500',
      year: '2023'
    }
  ];

  const stats = [
    { icon: Award, label: 'Projects Completed', value: '120+' },
    { icon: Users, label: 'Happy Clients', value: '85+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Calendar, label: 'Years Experience', value: '5+' }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
    
  // Create structured data for projects
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredProjects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "applicationCategory": project.category,
        "description": project.description,
        "image": project.image,
        "operatingSystem": "Cross-platform",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "Custom",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "95"
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | CodeWave Intelligence Studio - AI & Digital Transformation Projects</title>
        <meta name="description" content="Explore our portfolio of innovative AI-powered solutions and digital transformation projects. See how we've helped businesses across industries achieve remarkable results." />
        <meta name="keywords" content="AI projects, digital transformation case studies, software development portfolio, intelligence solutions, CRM dashboard, ecommerce platform, mobile apps" />
        <link rel="canonical" href="https://codewave.it.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="pt-16" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                  See What Intelligence Builds.{ ' ' }
                  <span className="parallax-text neon-glow" style={{ color: 'var(--accent-primary)' }}>Then Learn Why.</span>
                </h1>
                <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Explore our portfolio of intelligent solutions that have transformed businesses across industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`morph-card glare-card p-8 text-center hover-lift-premium magnetic-effect ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 magnetic-effect"
                    style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>
                    <stat.icon className="w-8 h-8" style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <div className="text-3xl font-bold parallax-text neon-glow mb-2" style={{ color: 'var(--accent-primary)' }}>{stat.value}</div>
                  <div className="font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section ref={sectionRef} className="py-10 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 magnetic-effect ${
                    selectedCategory === category
                      ? 'liquid-button glare-effect'
                      : 'morph-card glare-card hover-lift-premium'
                  }`}
                  style={{
                    background: selectedCategory === category
                      ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                      : 'var(--card-bg)',
                    color: 'var(--text-primary)',
                    border: selectedCategory === category
                      ? 'none'
                      : '1px solid var(--card-border)'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 relative" aria-label="Project showcase">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <article
                  key={index}
                  className={`morph-card glare-card overflow-hidden hover-lift-premium magnetic-effect ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-primary)'
                  }}
                  itemScope 
                  itemType="https://schema.org/CreativeWork"
                >
                  <div className={`h-64 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.category} project by CodeWave`}
                      className="w-full h-full object-cover mix-blend-overlay hover:scale-110 transition-transform duration-700"
                      itemProp="image"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #00000099, transparent)' }}></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'var(--glass-bg)', color: 'var(--text-primary)' }}
                        itemProp="datePublished">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'var(--accent-primary)', color: 'var(--text-primary)' }}
                        itemProp="applicationCategory">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 neon-glow" style={{ color: 'var(--text-primary)' }} itemProp="name">{project.title}</h3>
                    <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }} itemProp="description">{project.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--accent-primary)' }}>KEY FEATURES</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                              <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ background: 'var(--accent-primary)' }}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--accent-primary)' }}>TECHNOLOGIES</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
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

                      <div>
                        <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--accent-primary)' }}>RESULTS</h4>
                        <div className="space-y-2">
                          {project.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                              <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ background: 'var(--accent-secondary)' }}></div>
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <a href={project.url} className="flex items-center space-x-2 px-4 py-2 morph-card rounded-lg hover-lift-premium glare-card text-sm font-semibold"
                          style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-primary)'
                          }}
                          aria-label={`View ${project.title} live demo`}>
                          <ExternalLink className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                          <span>View Live</span>
                        </a>
                        <a href={`${project.url}/case-study`} className="flex items-center space-x-2 px-4 py-2 morph-card rounded-lg hover-lift-premium glare-card text-sm font-semibold"
                          style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-primary)'
                          }}
                          aria-label={`Read ${project.title} case study`}>
                          <Github className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                          <span>Case Study</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
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
                Ready to Join Our{' '}
                <span style={{ color: 'var(--accent-primary)' }}>Success Stories?</span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
                Let's discuss how we can create an intelligent solution that transforms your business.
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
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;