import React, { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/918929942819?text=Hello%20CodeWave!%20I%20would%20like%20to%20discuss%20a%20project.";

const Whatsapp: React.FC<{ onChatbotClick?: () => void }> = ({ onChatbotClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-44 right-4 md:bottom-24 md:right-6 z-50 flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{ outline: "none" }}
    >
      {/* WhatsApp Icon */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`transition-all duration-300 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center absolute ${
          hovered ? "-translate-y-20 opacity-100 pointer-events-auto" : "translate-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 2 }}
        tabIndex={-1}
      >
        <i className="ri-whatsapp-line text-white text-3xl"></i>
      </a>
      {/* Chatbot Icon */}
      <button
        aria-label="Open chat"
        className={`transition-all duration-300 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl flex items-center justify-center absolute ${
          hovered ? "translate-y-20 opacity-100 pointer-events-auto" : "translate-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 2 }}
        onClick={onChatbotClick}
        tabIndex={-1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="10" x2="14" y1="10" y2="10" />
          <line x1="10" x2="14" y1="14" y2="14" />
        </svg>
      </button>
      {/* Main Combined Icon */}
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer relative ${
          hovered ? "scale-110" : ""
        }`}
        aria-label="Open actions"
        tabIndex={0}
      >
        <i className="ri-whatsapp-line text-white text-3xl absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300" style={{ opacity: hovered ? 0.5 : 1 }}></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${hovered ? "opacity-50" : "opacity-100"}`}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="10" x2="14" y1="10" y2="10" />
          <line x1="10" x2="14" y1="14" y2="14" />
        </svg>
      </div>
    </div>
  );
};

export default Whatsapp;