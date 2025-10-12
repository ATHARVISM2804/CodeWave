import React, { useState, useRef } from "react";

const WHATSAPP_LINK = "https://wa.me/918287941214?text=Hello%20CodeWave!%20I%20would%20like%20to%20discuss%20a%20project.";

const Whatsapp: React.FC<{ onChatbotClick?: () => void }> = ({ onChatbotClick }) => {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseEnter = () => {
    setHovered(true);
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  
  const handleMouseLeave = () => {
    // Set a timeout to close the icons after 3.5 seconds
    timeoutRef.current = setTimeout(() => {
      setHovered(false);
    }, 1500);
  };
  
  // Clear timeout when component unmounts
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed bottom-24 right-4 md:bottom-24 md:right-6 z-50 flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      style={{ outline: "none" }}
    >
      {/* WhatsApp Icon */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`transition-all duration-300 w-16 h-16 rounded-full shadow-xl flex items-center justify-center absolute ${
          hovered ? "-translate-y-20 opacity-100 pointer-events-auto" : "translate-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ 
          background: 'linear-gradient(145deg, #27d368, #1ea855)',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3), -2px -2px 8px rgba(255, 255, 255, 0.1)',
          zIndex: 2 
        }}
        tabIndex={-1}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
          <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-[-100%] animate-[glareEffect_2s_ease_infinite] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <i className="ri-whatsapp-line text-white text-3xl drop-shadow-md"></i>
      </a>
      
      {/* Chatbot Icon */}
      <button
        aria-label="Open chat"
        className={`transition-all duration-300 w-16 h-16 rounded-full shadow-xl flex items-center justify-center absolute ${
          hovered ? "translate-y-20 opacity-100 pointer-events-auto" : "translate-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ 
          background: 'linear-gradient(145deg, #3b9ce2, #1a7dcb)',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3), -2px -2px 8px rgba(255, 255, 255, 0.1)',
          zIndex: 2 
        }}
        onClick={onChatbotClick}
        tabIndex={-1}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
          <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-[-100%] animate-[glareEffect_2s_ease_infinite] bg-gradient-to-r from-transparent via-white to-transparent" style={{animationDelay: "1s"}}></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="10" x2="14" y1="10" y2="10" />
          <line x1="10" x2="14" y1="14" y2="14" />
        </svg>
      </button>
      
      {/* Main Combined Icon - Redesigned with metallic effect */}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer relative overflow-hidden ${
          hovered ? "scale-110" : ""
        }`}
        aria-label="Open actions"
        tabIndex={0}
        style={{
          boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.3), -2px -2px 8px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Metallic gradient background with improved visual separation */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #2acb5e 0%, #1d9e4e 45%, #1e95dd 55%, #0071b7 100%)',
        }}></div>
        
        {/* Inner highlight effect for metallic look */}
        <div className="absolute inset-[1px] rounded-full opacity-20" 
          style={{ 
            background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, transparent 60%, rgba(0,0,0,0.2) 100%)',
          }}>
        </div>
        
        {/* Subtle divider line with metallic style */}
        <div className="absolute h-full w-[2px] left-1/2 -translate-x-1/2 z-10" style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.8), rgba(255,255,255,0.3))'
        }}></div>
        
        {/* Glare effect animation */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
          <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-[-100%] animate-[glareEffect_3s_ease_infinite] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        
        {/* WhatsApp icon - positioned on left side */}
        <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
          <i className="ri-whatsapp-line text-white text-2xl drop-shadow-md"></i>
        </div>
        
        {/* Chatbot icon - positioned on right side */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <line x1="10" x2="14" y1="10" y2="10" />
            <line x1="10" x2="14" y1="14" y2="14" />
          </svg>
        </div>
        
        {/* Enhanced glowing effect on hover */}
        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            boxShadow: 'inset 0 0 15px rgba(255,255,255,0.5)',
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}></div>
      </div>
      
      {/* Add keyframe animation for glare effect */}
      <style jsx>{`
        @keyframes glareEffect {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Whatsapp;