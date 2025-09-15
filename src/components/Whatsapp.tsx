import React from "react";

const WHATSAPP_LINK = "https://wa.me/918929942819?text=Hello%20CodeWave!%20I%20would%20like%20to%20discuss%20a%20project.";

const Whatsapp: React.FC = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-24 right-8 z-50"
    aria-label="Chat on WhatsApp"
  >
    <div className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center transition-all duration-300">
      <i className="ri-whatsapp-line text-white text-3xl"></i>
    </div>
  </a>
);

export default Whatsapp;