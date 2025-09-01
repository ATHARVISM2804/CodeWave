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
                  className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group magnetic-effect"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] transition-all duration-500 group-hover:w-full"></span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] blur-sm opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></span>
                </a>
              ))}
            </nav>
            <button className="hidden md:block liquid-button mt-6 text-white px-6 py-3 font-semibold ">
              Book a 30-min consult
            </button>
            <button
              className="md:hidden hover-lift magnetic-effect"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0b0e17]/95 backdrop-blur-xl border-b border-white/10 animate-slide-in-bottom morph-card">
            <div className="px-4 py-4 space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' us', '').replace(' ', '')}`}
                  className={`block text-gray-300 hover:text-white transition-all duration-300 font-medium hover:translate-x-2 stagger-animation stagger-${index + 1}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full liquid-button text-white px-6 py-3 font-semibold glare-effect stagger-animation stagger-6">
                Book a 30-min consult
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating glassmorphism sidebar when scrolled */}
      {isScrolled && (
        <nav
          className="fixed top-1/2 left-6 z-50 -translate-y-1/2 flex flex-col items-center gap-6
            bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-2 py-6 shadow-2xl
            transition-all duration-500"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255,255,255,0.18)',
            minHeight: '340px',
            width: '60px',
          }}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center group text-white hover:text-[#ff6a3d] transition"
              title={item.label}
            >
              <span>{item.icon}</span>
              {/* Optionally show label on hover */}
              <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-14 bg-black/80 px-2 py-1 rounded text-white pointer-events-none">
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