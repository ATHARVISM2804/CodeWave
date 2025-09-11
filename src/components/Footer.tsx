import React from 'react';
import { Twitter, Linkedin, Github, Mail, ChevronRight, Phone } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" width={20} height={20} fill="currentColor" {...props}>
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.58 2.236 6.364L4 29l7.818-2.236A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.468-.46-4.94-1.32l-.352-.207-4.65 1.33 1.33-4.65-.207-.352A9.956 9.956 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.145-1.71-.844-1.974-.94-.264-.098-.456-.145-.648.145-.192.29-.744.94-.912 1.134-.168.193-.336.217-.626.072-.29-.145-1.224-.451-2.33-1.44-.861-.767-1.443-1.713-1.613-2.003-.168-.29-.018-.447.127-.592.13-.13.29-.336.435-.504.145-.168.193-.29.29-.483.097-.193.048-.362-.024-.506-.072-.145-.648-1.566-.888-2.146-.234-.563-.472-.486-.648-.495-.168-.007-.362-.009-.555-.009-.193 0-.506.072-.772.362-.266.29-1.016.994-1.016 2.425 0 1.43 1.04 2.81 1.186 3.004.145.193 2.05 3.13 5.07 4.267.709.244 1.262.39 1.694.499.712.18 1.36.155 1.872.094.571-.067 1.71-.698 1.953-1.372.24-.674.24-1.252.168-1.372-.072-.12-.264-.193-.555-.338z" />
  </svg>
);

const Footer: React.FC = () => {
  const navigationLinks = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Contact', href: '/contact' }
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
                className="w-56 h-14 mb-12 bg-black rounded-lg object-cover"
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
                  href="mailto:careersparushapandey@gmail.com" 
                  className="flex items-center gap-2 hover:text-[var(--accent-primary)] transition-colors duration-300"
                >
                  <Mail size={18} /> careersparushapandey@gmail.com
                </a>
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-2 hover:text-[var(--accent-primary)] transition-colors duration-300"
                >
                  <Phone size={18} /> +91 89299 42819
                </a>
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                <a 
                  href="https://wa.me/+918929942819" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--accent-primary)] transition-colors duration-300"
                >
                  <WhatsAppIcon /> +91 89299 42819
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
                  <a target='_blank' href="https://calendly.com/codewave/30min">
                  Schedule a consult
                  </a>
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
              © 2025 CodeWave.it • <a href="#privacy" className="hover:text-[var(--accent-primary)]">Privacy</a> • <a href="#terms" className="hover:text-[var(--accent-primary)]">Terms</a>
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