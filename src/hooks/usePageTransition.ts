import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to handle page transitions with improved performance
 * Returns an object with isTransitioning state to indicate page transition status
 */
const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set transitioning state to true when navigation occurs
    setIsTransitioning(true);
    
    // Allow a short time for DOM updates and then mark transition as complete
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 100); // Very short delay - just enough for React to process the route change
    
    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return { isTransitioning };
};

export default usePageTransition;