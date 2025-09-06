import React from 'react';
import { Twitter, Linkedin, Github, Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const navigationLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@codewave.it', name: 'Email' }
  ];

  return (
    <footer
      className="pt-20 pb-8"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-primary)'
      }}
    >
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 lg:px-28 items-start">
          {/* Logo and Tagline Column */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-start">
              <img 
                src="https://res.cloudinary.com/dikisauij/image/upload/v1756993391/logo_ycihzq.png" 
                alt="CodeWave Logo" 
                className="w-56 h-14 mb-12 object-cover"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span style={{ color: 'var(--text-primary)' }}>We don't just write code.</span> <br />
                <span style={{ color: 'var(--accent-primary)' }}>We make it think.</span>
              </h2>
              <p className="text-base mb-8 max-w-md" style={{ color: 'var(--text-secondary)' }}>
                Join hundreds of innovators who've partnered with CodeWave to build the future of digital experiences.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index} className="group flex items-center">
                  <ChevronRight 
                    size={16} 
                    className="mr-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    style={{ color: 'var(--accent-primary)' }}
                  />
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li style={{ color: 'var(--text-secondary)' }}>
                <a 
                  href="mailto:info@codewave.it" 
                  className="hover:text-[var(--accent-primary)] transition-colors duration-300"
                >
                  info@codewave.it
                </a>
              </li>
              <li>
                <a 
                  href="#schedule" 
                  className="px-4 py-2 rounded-lg inline-flex items-center transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white'
                  }}
                >
                  Schedule a consult
                </a>
              </li>
              <li className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      color: 'var(--text-secondary)',
                      background: 'var(--card-bg)', 
                      border: '1px solid var(--card-border)',
                      borderRadius: '50%',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--accent-primary)';
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                    }}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t px-6 lg:px-28"
          style={{ borderTop: '1px solid var(--glass-border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              © 2024 CodeWave.it • <a href="#privacy" className="hover:text-[var(--accent-primary)]">Privacy</a> • <a href="#terms" className="hover:text-[var(--accent-primary)]">Terms</a>
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Trusted by SaaS, GovTech, and Fast-Growing Startups
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;