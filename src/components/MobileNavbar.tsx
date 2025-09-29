import React from 'react';
import { Menu } from 'lucide-react';
import Codewavelogo from '../assets/Logo_Orginal.png';
import { ThemeToggleButton } from './ThemeToggle';

interface MobileNavbarProps {
  onOpenMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ onOpenMenu }) => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 my-4 px-4 py-2 rounded-2xl bg-[var(--card-bg)]/95 backdrop-blur-lg border border-[var(--card-border)] shadow-lg">
        <div className="flex items-center justify-between">
           <a href="/" className="inline-block" aria-label="CodeWave home">
                  <div className="relative flex items-center gap-3 px-3 py-2 rounded-lg transition-transform duration-300 hover:scale-105 logo-container">
                    <div className="logo-gradient"></div>
                    <img
                      src={Codewavelogo}
                      alt="CodeWave Logo"
                      className="h-8 sm:h-12 md:h-16 w-auto object-contain relative z-10"
                      style={{ display: 'block' }}
                    />
                  </div>
                </a>
          <div className="flex items-center gap-2">
            <ThemeToggleButton />
            <button
              onClick={onOpenMenu}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
