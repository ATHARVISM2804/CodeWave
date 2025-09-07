import React, { useEffect, useState } from 'react';

interface CalendlyPopupProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ url, isOpen, onClose }) => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        console.log('Calendly script loaded successfully');
        setCalendlyLoaded(true);
        setLoading(false);
      };
      script.onerror = () => {
        console.error('Failed to load Calendly script');
        setLoading(false);
      };
      document.head.appendChild(script);
    } else {
      setCalendlyLoaded(true);
      setLoading(false);
    }

    // Cleanup function
    return () => {
      // Remove script if component unmounts
      const script = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restore body scroll when popup is closed
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && calendlyLoaded && (window as any).Calendly) {
      try {
        (window as any).Calendly.initPopupWidget({
          url: url,
          parentElement: document.getElementById('calendly-popup-container')
        });
      } catch (error) {
        console.error('Error initializing Calendly popup:', error);
      }
    }
  }, [isOpen, calendlyLoaded, url]);

  const handleClose = () => {
    // Ensure scroll is restored before closing
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle ESC key to close popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      style={{ zIndex: 9999 }}
    >
      <div
        className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{
          background: 'var(--bg-primary)',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          <h2
            className="text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Schedule a Consultation
          </h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-opacity-20 transition-colors"
            style={{
              background: 'rgba(var(--accent-primary-rgb), 0.1)',
              color: 'var(--accent-primary)'
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Calendly Container */}
        <div
          id="calendly-popup-container"
          className="flex-1 w-full h-full min-h-[500px]"
        >
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div
                  className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                  style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }}
                ></div>
                <p style={{ color: 'var(--text-secondary)' }}>Loading calendar...</p>
              </div>
            </div>
          )}
          
          {!calendlyLoaded && !loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Unable to load calendar. Please try again later.
                </p>
                <button
                  onClick={() => window.open(url, '_blank')}
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white'
                  }}
                >
                  Open in New Tab
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendlyPopup;
