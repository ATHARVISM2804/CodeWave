import React from 'react';
import { Menu } from 'lucide-react';
import Codewavelogo from '../assets/Logo_Orginal.png';

interface MobileNavbarProps {
  onOpenMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ onOpenMenu }) => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 my-4 px-4 py-2 rounded-2xl bg-[var(--card-bg)]/95 backdrop-blur-lg border border-[var(--card-border)] shadow-lg">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="CodeWave home">
            <div className="relative flex items-center">
              <img
                src={Codewavelogo}
                alt="CodeWave"
                className="h-8 w-auto object-contain"
              />
            </div>
            {/* <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              CodeWave
            </span> */}
          </a>
          <button
            onClick={onOpenMenu}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
