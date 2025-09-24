
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import Lenis for smooth scrolling
import Lenis from '@studio-freight/lenis';

// Initialize Lenis smooth scrolling
function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.03,
      smoothWheel: true,
      orientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

function AppWithLenis() {
  useLenis();
  return <App />;
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithLenis />
  </StrictMode>
);
