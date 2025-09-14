import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Calendar, Users, Mail } from 'lucide-react';
import Codewavelogo from '../assets/Logo_Orginal.png';

const navItems = [
  { label: 'Home', href: '/', icon: <Home size={22} /> },
  { label: 'About Us', href: '/about', icon: <Info size={22} /> },
  { label: 'Services', href: '/services', icon: <Calendar size={22} /> },
  { label: 'Portfolio', href: '/portfolio', icon: <Users size={22} /> },
  { label: 'Contact', href: '/contact', icon: <Mail size={22} /> },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'pointer-events-none opacity-0' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* layout: 2 columns on small, 3 on md+:
              left: logo, center: nav (hidden on small), right: CTA/menu */}
          <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full">
            {/* Logo Section - left (rectangular) */}
            <div className="flex items-center justify-start col-start-1">
              <a href="/" className="flex items-center" aria-label="CodeWave home">
                <div
                  className="relative flex items-center gap-3 px-3 py-2 rounded-lg transition-transform duration-300 hover:scale-105"
                  style={{
                    border: '1.5px solid var(--card-border)',
                    background: 'linear-gradient(90deg, rgba(var(--accent-primary-rgb),0.04), rgba(var(--accent-secondary-rgb),0.02))',
                    backdropFilter: 'blur(6px)',
                    boxShadow: '0 6px 20px rgba(2,6,23,0.45)',
                  }}
                >
                  {/* animated rectangular gradient overlay (matches WhyUsSection) */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
                    <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/20 to-transparent animate-pulse-premium" />
                  </div>

                  <img
                    src={Codewavelogo}
                    alt="CodeWave"
                    className="h-8 w-auto object-contain relative z-10"
                    style={{ display: 'block' }}
                  />
                </div>
              </a>
            </div>

            {/* Navigation - center (hidden on small) */}
            <nav className="hidden md:flex justify-center col-start-2 md:col-start-2">
              <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-sm">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--accent-primary)] hover:to-[var(--accent-secondary)] hover:text-white group"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA Button - right (on small this is col 2; on md it's col 3) */}
            <div className="flex items-center justify-end gap-4 col-start-2 md:col-start-3">
              <button
                onClick={handleCalendlyClick}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(var(--accent-primary-rgb), 0.3)',
                }}
              >
                <span className="px-1.5">Book a Call</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  →
                </span>
              </button>

              <button
                className="md:hidden p-2 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                style={{ color: 'var(--text-primary)' }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Updated for clean design */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in-down">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl mt-2 p-4 backdrop-blur-md bg-[var(--card-bg)] border border-[var(--card-border)]">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-[var(--accent-primary)] hover:bg-opacity-10"
                      style={{ color: 'var(--text-secondary)' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </a>
                  ))}
                  <button
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleCalendlyClick(e);
                    }}
                    className="w-full mt-4 p-3 rounded-xl font-medium text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    }}
                  >
                    Book a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Navigation - Simplified design */}
      {isScrolled && (
        <nav
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full backdrop-blur-md p-1.5 animate-fade-in-up border border-[var(--card-border)] bg-[var(--card-bg)]"
        >
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="p-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--accent-primary)] hover:to-[var(--accent-secondary)] group"
                title={item.label}
              >
                <span className="text-[var(--text-secondary)] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* ✅ Calendly iframe popup */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="relative w-full max-w-3xl h-[600px] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-800 hover:text-red-600 text-3xl font-bold"
            >
              ×
            </button>
            <iframe
              src="https://calendly.com/ranjanashish9992/strategy-call?embed_domain=yourdomain.com&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduler"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
