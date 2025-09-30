import React, { useState } from 'react';
import { Twitter, Linkedin, Github, Mail, ChevronRight, Phone } from 'lucide-react';
import codeWaveLogo from "../assets/Logo_Orginal.png"
import CalendlyPopup from './Calendlypopup';

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
    { title: 'Tools', href: '/tools' },
    { title: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Mail, href: 'mailto:contact.codewave.it@gmail.com', name: 'Email' }
  ];

  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <>
      {/* Calendly Popup */}
      <CalendlyPopup
        url="https://calendly.com/careersparushapandey/30min"
        open={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
        title="Book Free Consultation"
      />
      <footer
        className="pt-8 sm:pt-16 pb-4 sm:pb-8"
        style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--glass-border)',
          color: 'var(--text-primary)'
        }}
      >
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-6 lg:px-16">
            {/* Logo and Tagline Column */}
            <div className="sm:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <div className="mb-2 sm:mb-6">
                <a href="/" className="inline-block" aria-label="CodeWave home">
                  <div className="relative flex items-center gap-3 px-3 py-2 rounded-lg transition-transform duration-300 hover:scale-105 logo-container">
                    <div className="logo-gradient"></div>
                    <img
                      src={codeWaveLogo}
                      alt="CodeWave Logo"
                      className="h-8 sm:h-12 md:h-16 w-auto object-contain relative z-10"
                      style={{ display: 'block' }}
                    />
                  </div>
                </a>
              </div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight">
                <span style={{ color: 'var(--text-primary)' }}>We don't just write code.</span> <br />
                <span style={{ color: 'var(--accent-primary)' }}>We make it think.</span>
              </h2>
              <p className="text-sm sm:text-base max-w-md" style={{ color: 'var(--text-secondary)' }}>
                Join hundreds of innovators who've partnered with CodeWave to build the future of digital experiences.
              </p>
            </div>

            {/* Navigation Links - Mobile Optimized */}
            <div className="flex flex-col items-center sm:items-start space-y-4">
              <h3 className="text-base sm:text-lg font-bold relative" style={{ color: 'var(--text-primary)' }}>
                <span className="relative">
                  Navigation
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto sm:mx-0 w-8 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"></span>
                </span>
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3 w-full sm:w-auto">
                {navigationLinks.map((link, index) => (
                  <li key={index} className="group">
                    <a
                      href={link.href}
                      className="flex items-center justify-start px-2 py-1.5 sm:py-1 rounded-md transition-colors text-sm sm:text-base hover:bg-[var(--card-bg)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <ChevronRight size={14} className="mr-1.5 text-[var(--accent-primary)]" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column - Mobile Optimized */}
            <div className="flex flex-col items-center sm:items-start space-y-4">
              <h3 className="text-base sm:text-lg font-bold relative" style={{ color: 'var(--text-primary)' }}>
                <span className="relative">
                  Contact Us
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto sm:mx-0 w-8 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"></span>
                </span>
              </h3>
              <ul className="space-y-4 w-full max-w-xs">
                <li style={{ color: 'var(--text-secondary)' }}>
                  <a
                    href="mailto:contact.codewave.it@gmail.com"
                    className="flex items-center gap-2 justify-center md:justify-start hover:text-[var(--accent-primary)] transition-colors duration-300 text-sm sm:text-base"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ 
                        background: 'rgba(var(--accent-primary-rgb), 0.1)', 
                        color: 'var(--accent-primary)' 
                      }}>
                      <Mail size={18} />
                    </div>
                    <span className="truncate">contact.codewave.it@gmail.com</span>
                  </a>
                </li>
                <li style={{ color: 'var(--text-secondary)' }}>
                  <a
                    href="tel:+918287941214"
                    className="flex items-center gap-2 justify-center md:justify-start hover:text-[var(--accent-primary)] transition-colors duration-300 text-sm sm:text-base"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ 
                        background: 'rgba(var(--accent-primary-rgb), 0.1)', 
                        color: 'var(--accent-primary)' 
                      }}>
                      <Phone size={18} />
                    </div>
                    +91 82879 41214
                  </a>
                </li>
                <li style={{ color: 'var(--text-secondary)' }}>
                    <a
                    href="https://wa.me/+918287941214?text=Hi%20CodeWave%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center md:justify-start hover:text-[var(--accent-primary)] transition-colors duration-300 text-sm sm:text-base"
                    >
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ 
                        background: 'rgba(var(--accent-primary-rgb), 0.1)', 
                        color: 'var(--accent-primary)' 
                      }}>
                      <WhatsAppIcon />
                    </div>
                    WhatsApp Chat
                  </a>
                </li>
                <li className="pt-1">
                  <button
                    type="button"
                    onClick={() => setCalendlyOpen(true)}
                    className="px-4 py-2.5 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg text-base w-full"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(var(--accent-primary-rgb), 0.3)'
                    }}
                  >
                    Book Free Consultation
                  </button>
                </li>
                
                {/* Social Links for larger screens */}
                <li className="hidden md:flex flex-wrap items-center justify-center md:justify-start space-x-3 mt-4 sm:mt-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.name}
                      className="transition-all duration-300 hover:-translate-y-1 mb-2"
                      style={{
                        color: 'var(--text-secondary)',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '50%',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--accent-primary)';
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(var(--accent-primary-rgb), 0.2)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'var(--card-border)';
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                      }}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Mobile Optimized */}
          <div className="mt-6 sm:mt-10 pt-4 border-t"
            style={{ borderTop: '1px solid var(--glass-border)' }}>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-2 sm:space-y-0 text-center">
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                © 2025 CodeWave.it • <a href="#privacy" className="hover:text-[var(--accent-primary)]">Privacy</a> • <a href="#terms" className="hover:text-[var(--accent-primary)]">Terms</a>
              </p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                Trusted by SaaS, GovTech, and Fast-Growing Startups
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;