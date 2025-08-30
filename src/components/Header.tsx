import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0b0e17]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <div className="flex items-center space-x-2 hover-lift">
            <div className="w-8 h-8 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] rounded-lg flex items-center justify-center glare-effect hover-glow magnetic-effect">
              <span className="text-white font-bold text-sm">CW</span>
            </div>
            <span className="text-xl font-bold parallax-text neon-glow">CodeWave.it</span>
          </div> */}

          <img src="https://sdmntprcentralus.oaiusercontent.com/files/00000000-2268-61f5-b6a5-780b835ed81b/raw?se=2025-08-30T19%3A03%3A04Z&sp=r&sv=2024-08-04&sr=b&scid=711f6e83-89f9-54b4-8e17-0f7c6f3cd0f9&skoid=ec8eb293-a61a-47e0-abd0-6051cc94b050&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-29T20%3A15%3A49Z&ske=2025-08-30T20%3A15%3A49Z&sks=b&skv=2024-08-04&sig=oYzbu7AC5lGSCIzd0tlf0xZTpIBeQt1xB%2BO1/kmZONs%3D" 
          alt=""
          className='w-64' />

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
  );
};

export default Header;