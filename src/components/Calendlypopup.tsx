
import React, { useState } from 'react';

interface CalendlyPopupProps {
  url: string;
  open: boolean;
  onClose: () => void;
  title?: string;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ url, open, onClose, title }) => {
  const [loaded, setLoaded] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{title || 'Schedule a Meeting'}</span>
          <button onClick={onClose} className="text-xl font-bold px-2" style={{ color: 'var(--accent-primary)' }}>×</button>
        </div>
        <div className="relative flex-1 w-full">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="flex flex-col items-center">
                <svg className="animate-spin h-8 w-8 text-[var(--accent-primary)] mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span className="text-sm text-[var(--accent-primary)]">Loading calendar...</span>
              </div>
            </div>
          )}
          <iframe
            src={url}
            title="Calendly Scheduling"
            className="flex-1 w-full border-0 h-full"
            style={{ minHeight: 0 }}
            allow="camera; microphone; fullscreen"
            onLoad={() => setLoaded(true)}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendlyPopup;


// How to use it 
  // <CalendlyPopup
  //       url="https://calendly.com/careersparushapandey/30min"
  //       open={showCalendly}
  //       onClose={() => setShowCalendly(false)}
  //       title="Schedule a Meeting"
  //     />