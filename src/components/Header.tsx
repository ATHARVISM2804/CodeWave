import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Calendar, Users, DollarSign, Mail } from 'lucide-react';
import Codewavelogo from "../assets/logo.png";

// Sidebar nav items with icons
const navItems = [
  { label: 'Home', href: '/', icon: <Home size={22} /> },
  { label: 'About Us', href: '/about', icon: <Info size={22} /> },
  { label: 'Services', href: '/services', icon: <Calendar size={22} /> },
  { label: 'Portfolio', href: '/portfolio', icon: <Users size={22} /> },
  { label: 'Pricing', href: '/pricing', icon: <DollarSign size={22} /> },
  { label: 'Contact', href: '/contact', icon: <Mail size={22} /> },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top header (only visible when not scrolled) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'pointer-events-none opacity-0' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img src={Codewavelogo} alt="" className='w-40 mt-20' />
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' us', '').replace(' ', '')}`}
                  className="transition-all duration-300 font-medium relative group magnetic-effect"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r transition-all duration-500 group-hover:w-full"
                    style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r blur-sm opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"
                    style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}></span>
                </a>
              ))}
            </nav>
            <button className="hidden md:block liquid-button mt-6 font-semibold"
              style={{ color: 'var(--text-primary)', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
              Book a 30-min consult
            </button>
            <button
              className="md:hidden hover-lift magnetic-effect"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: 'var(--text-primary)' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden morph-card animate-slide-in-bottom"
            style={{
              background: 'var(--bg-primary)',
              borderBottom: '1px solid var(--glass-border)',
              color: 'var(--text-primary)'
            }}>
            <div className="px-4 py-4 space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' us', '').replace(' ', '')}`}
                  className={`block transition-all duration-300 font-medium hover:translate-x-2 stagger-animation stagger-${index + 1}`}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full liquid-button font-semibold glare-effect stagger-animation stagger-6"
                style={{ color: 'var(--text-primary)', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                Book a 30-min consult
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating glassmorphism sidebar when scrolled */}
      {isScrolled && (
        <nav
          className="fixed top-1/2 left-6 z-50 -translate-y-1/2 flex flex-col items-center gap-6 rounded-2xl px-2 py-6 shadow-2xl transition-all duration-500"
          style={{
            background: 'var(--glass-bg)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid var(--glass-border)',
            minHeight: '340px',
            width: '60px',
          }}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center group transition"
              title={item.label}
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              <span>{item.icon}</span>
              {/* Optionally show label on hover */}
              <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-14 px-2 py-1 rounded pointer-events-none"
                style={{ background: 'rgba(0,0,0,0.8)', color: 'var(--text-primary)' }}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      )}
    </>
  );
};

export default Header;