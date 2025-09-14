import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Brain, Palette, Smartphone, Shield, Database, TrendingUp, User, Briefcase, Phone, FileText } from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: FileText,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to CodeWave Intelligence Studio' },
        { name: 'About Us', path: '/about', description: 'Learn about our mission, values, and team' },
        { name: 'Portfolio', path: '/portfolio', description: 'Explore our projects and case studies' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with our team' }
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      pages: [
        { 
          name: 'All Services', 
          path: '/services', 
          description: 'Complete overview of our service offerings',
          icon: Briefcase
        },
        { 
          name: 'Web Development', 
          path: '/services/web-development', 
          description: 'Websites that perform and platforms that think',
          icon: Globe
        },
        { 
          name: 'Custom Software', 
          path: '/services/custom-software', 
          description: 'Software built around you, not the other way around',
          icon: Zap
        },
        { 
          name: 'AI Automation', 
          path: '/services/ai-automation', 
          description: 'Smarter workflows and faster results',
          icon: Brain
        },
        { 
          name: 'GovTech Applications', 
          path: '/services/govtech', 
          description: 'Secure tech for public impact',
          icon: Shield
        },
        { 
          name: 'Mobile Development', 
          path: '/services/mobile-development', 
          description: 'Apps built for people, not just screens',
          icon: Smartphone
        },
        { 
          name: 'UI/UX Design', 
          path: '/services/ui-ux-design', 
          description: 'Design that thinks before it looks',
          icon: Palette
        },
        { 
          name: 'API Integration', 
          path: '/services/api-integration', 
          description: 'When systems talk, businesses move faster',
          icon: Database
        },
        { 
          name: 'Digital Marketing', 
          path: '/services/digital-marketing', 
          description: 'Marketing that\'s data-driven and AI-backed',
          icon: TrendingUp
        }
      ]
    }
  ];

  return (
    <div className="py-20" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Site Map
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Navigate through all our pages and services to find exactly what you're looking for.
            </p>
          </div>

          {/* Site Structure */}
          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{section.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <Link
                      key={pageIndex}
                      to={page.path}
                      className="morph-card glare-card p-6 hover-lift-premium transition-all duration-300 group"
                      style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {page.icon && (
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                            style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                            <page.icon className="w-5 h-5 text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                            {page.name}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {page.description}
                          </p>
                          <div className="mt-3 text-xs font-medium" style={{ color: 'var(--accent-primary)' }}>
                            {page.path}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-16 text-center">
            <div className="morph-card glare-card p-8"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)'
              }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Quick Links
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'var(--text-primary)'
                  }}
                >
                  Get Started
                </Link>
                <Link 
                  to="/portfolio" 
                  className="px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'var(--accent-primary)',
                    color: 'var(--accent-primary)',
                    background: 'transparent'
                  }}
                >
                  View Our Work
                </Link>
                <Link 
                  to="/about" 
                  className="px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'var(--card-border)',
                    color: 'var(--text-primary)',
                    background: 'transparent'
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
