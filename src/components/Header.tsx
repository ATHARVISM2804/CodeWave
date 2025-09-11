import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Calendar, Users, Mail } from 'lucide-react';

const Codewavelogo = "https://res.cloudinary.com/dikisauij/image/upload/v1756993391/logo_ycihzq.png";

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all mt-5 duration-500 ${isScrolled ? 'pointer-events-none opacity-0' : 'bg-transparent'}`}>
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center">
                <img src={Codewavelogo} alt="CodeWave" className="w-52 rounded-lg h-auto" />
              </a>
            </div>
            <nav className="hidden md:flex flex-1 justify-center">
              <div className="nav-pill flex items-center gap-8 px-4 py-2 rounded-full">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link relative font-medium px-4 py-1"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCalendlyClick}
                className="cta-pill hidden md:inline-flex items-center gap-3 px-5 py-2 rounded-full cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'white',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
                  border: 'none'
                }}
              >
                <span className="font-semibold">Book a 30-min consult</span>
                <span className="cta-count inline-flex items-center justify-center ml-3 px-3 py-1 rounded-full"
                  style={{ background: 'rgba(0,0,0,0.25)', color: 'white', fontWeight: 700 }}>
                  →
                </span>
              </button>
              <button
                className="md:hidden hover-lift magnetic-effect p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                style={{ color: 'var(--text-primary)' }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden morph-card animate-slide-in-bottom"
            style={{
              background: 'var(--bg-primary)',
              borderBottom: '1px solid var(--glass-border)',
              color: 'var(--text-primary)'
            }}>
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block transition-all duration-300 font-medium hover:translate-x-2 stagger-animation stagger-${index + 1}`}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={handleCalendlyClick}
                className="w-full liquid-button font-semibold glare-effect stagger-animation stagger-6"
                style={{ color: 'var(--text-primary)', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
              >
                Book a 30-min consult
              </button>
            </div>
          </div>
        )}
      </header>

      {isScrolled && (
        <nav
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 flex flex-row items-center gap-6 rounded-2xl backdrop-blur-lg px-6 py-4 shadow-2xl transition-all duration-500"
          style={{
            background: 'var(--glass-bg)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid var(--glass-border)',
            minHeight: '64px',
            width: 'auto',
          }}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center group transition relative"
              title={item.label}
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              <span>{item.icon}</span>
              <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-1/2 -translate-x-1/2 top-12 px-2 py-1 rounded pointer-events-none"
                style={{ background: 'rgba(0,0,0,0.8)', color: 'var(--text-primary)' }}>
                {item.label}
              </span>
            </a>
          ))}
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
