import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const navigationLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Contact', href: '#contact' }
  ];

  // const resourceLinks = [
  //   { title: 'Case Studies', href: '#case-studies' },
  //   { title: 'Insights', href: '#insights' },
  //   { title: 'How We Work', href: '#how-we-work' },
  //   { title: 'FAQ', href: '#faq' }
  // ];

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-28 items-center">
          {/* Left Column with Tagline */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span style={{ color: 'var(--text-primary)' }}>We don't just write code.</span> <br />
              <span style={{ color: 'var(--accent-primary)' }}>We make it think.</span>
            </h2>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
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
            <ul className="space-y-3">
              <li style={{ color: 'var(--text-secondary)' }}>info@codewave.it</li>
              <li style={{ color: 'var(--text-secondary)' }}>Schedule a consult</li>
              <li className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t px-28"
          style={{ borderTop: '1px solid var(--glass-border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              © 2024 CodeWave.it • Privacy • Terms
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