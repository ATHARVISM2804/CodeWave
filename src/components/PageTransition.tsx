import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * PageTransition component to handle smooth transitions between routes
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Mark start of transition
    setIsTransitioning(true);
    
    // Very short transition to avoid slow page loads
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      {isTransitioning && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-accent-primary to-accent-secondary h-1 animate-pulse" />
      )}
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-50' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;