import React, { useState } from 'react';
import AiImage from "../assets/AI.png";
import { motion } from 'framer-motion';
import RollingGallery from './RollingGallary';

// Placeholder icon/image components (replace with actual images or SVGs as needed)
const GitHubCopilotBadge = () => (
  <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-gray-200">
    <img src="https://github.gallerycdn.vsassets.io/extensions/github/copilot/1.364.1768/1756484122606/Microsoft.VisualStudio.Services.Icons.Default" alt="GitHub Copilot" className="h-6" />
    <span className="font-semibold text-gray-800 text-sm">GitHub Copilot</span>
  </div>
);
const CursorAIBadge = () => (
  <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-gray-200">
    <img src="/badges/cursor-ai.svg" alt="Cursor AI" className="h-6" />
    <span className="font-semibold text-gray-800 text-sm">CURSOR <span className="text-[#7b61ff]">AI</span></span>
  </div>
);
const GeminiAIBadge = () => (
  <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-gray-200">
    <img src="https://i.pinimg.com/736x/e5/a2/52/e5a252b0d1ceae9c5a7ee8cea147ce6f.jpg" alt="Gemini AI" className="h-6" />
    <span className="font-semibold text-gray-800 text-sm">Gemini <span className="text-[#7b61ff]">AI</span></span>
  </div>
);
const OpenAIBadge = () => (
  <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-gray-200">
    <img src="https://freebiehive.com/wp-content/uploads/2023/02/OpenAI-Logo-PNG.jpg" alt="OpenAI" className="h-6" />
    <span className="font-semibold text-gray-800 text-sm"> </span>
  </div>
);

// Update ServiceIcon to use <img> for the icon
const ServiceIcon = ({ icon }: { icon: string }) => (
  <img src={icon} alt="" className="h-12 w-12 object-contain mb-2" />
);

// Placeholder tech stack icons (replace with actual SVGs)
const TechIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="h-10 w-10 object-contain" />
);

const services = [
  { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', label: 'Custom ERP & CRM Development' },
  { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7mgTzfml9-fyRSDxIFT0GiGK1loPmUxNeA0p_ZuMA5hwO1Gxg3X5otZim6Mivh9e8Gw&usqp=CAU', label: 'AI-Powered SaaS Applications' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', label: 'API-First & Microservices Architecture' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png', label: 'MVP Development For Startups' },
  { icon: AiImage, label: 'Generative AI Integration' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/3523/3523887.png', label: 'Legacy System Maintenance & Modernization' },
];


const StatsSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      className="relative py-20 px-4 flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(var(--accent-primary-rgb), ${Math.random() * 0.3 + 0.1})`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(var(--accent-primary-rgb), 0.3)`,
              animation: `pulse ${Math.random() * 4 + 3}s ease-in-out infinite alternate, float ${Math.random() * 10 + 10}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* Decorative gradient backgrounds */}
      <div className="absolute top-20 -left-64 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 -right-64 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      {/* Headline and Description */}
      <motion.div 
        className="w-full max-w-3xl mx-auto text-center mt-2 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter"
          variants={itemVariants}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
            At Codewave, we're a technology-driven
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse-premium">
            Intelligence Studio
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 font-medium" 
          style={{ color: 'var(--text-secondary)' }}
          variants={itemVariants}
        >
          We love solving the hardest problems with smart engineering and AI.<br className="hidden md:block" />
          Bring us a challenge — whether it's building a fast, scalable website, designing a secure GovTech platform, creating AI-powered automation, or launching a digital marketing strategy — we'll deliver solutions that are intelligent, reliable, and built for impact.
        </motion.p>
        
        <motion.div 
          className="mt-6 space-y-4"
          variants={containerVariants}
        >
          <motion.p 
            className="text-base md:text-lg mb-4" 
            style={{ color: 'var(--text-secondary)' }}
            variants={itemVariants}
          >
            We work with startups, enterprises, and government teams across the globe — helping founders scale faster, organizations automate smarter, and public-sector projects go digital with confidence.
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg mb-8" 
            style={{ color: 'var(--text-secondary)' }}
            variants={itemVariants}
          >
            Our mindset is geeky, our process is precise, and our mission is simple: <br className="hidden md:block" />
            <span className="font-semibold text-white">to turn complexity into clarity and make technology think for you.</span>
          </motion.p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mt-10 mb-16"
          variants={containerVariants}
        >
          <motion.button
            className="font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              color: 'white'
            }}
          >
            Get Started
          </motion.button>
          
          <motion.button
            className="font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              color: 'white'
            }}
          >
            Schedule a Meeting
          </motion.button>
          
          <motion.button
            className="font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(135deg, #ff7a4e, #ff4e4e)',
              color: 'white'
            }}
          >
            Video Demo
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Services Section with Enhanced Cards */}
      <motion.div 
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Our Services</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              className="group relative"
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className={`morph-card h-full p-6 flex flex-col items-center text-center transition-all duration-300 ${hoveredService === idx ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : ''}`}>
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${hoveredService === idx ? 'scale-110' : ''}`}
                    style={{ 
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                      boxShadow: hoveredService === idx ? '0 20px 25px -5px rgba(var(--accent-primary-rgb), 0.3), 0 10px 10px -5px rgba(var(--accent-primary-rgb), 0.2)' : 'none'
                    }}>
                    <img 
                      src={service.icon} 
                      alt="" 
                      className={`w-8 h-8 object-contain transition-all duration-500 ${hoveredService === idx ? 'scale-110' : ''}`}
                    />
                  </div>
                  {hoveredService === idx && (
                    <motion.div
                      className="absolute -inset-1 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(var(--accent-primary-rgb), 0.2), rgba(var(--accent-secondary-rgb), 0.2))',
                        filter: 'blur(8px)',
                        zIndex: -1
                      }}
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{service.label}</h3>
                <div className={`w-12 h-1 mx-auto rounded transition-all duration-500 ${hoveredService === idx ? 'w-24 bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gray-600'}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <RollingGallery autoplay={true} />


      {/* Enhanced Decorative Quote */}
      <motion.div 
        className="w-full max-w-3xl mx-auto text-center mt-16 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent rounded-2xl filter blur-xl transform scale-105"></div>
        <div
          className="p-8 rounded-2xl border-l-4 shadow-xl relative z-10 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(to right, rgba(var(--accent-primary-rgb), 0.15), rgba(0,0,0,0.05))',
            borderColor: 'var(--accent-primary)'
          }}
        >
          <h2 
            className="text-2xl sm:text-3xl font-bold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Codewave — your global partner in AI automation, software development, web innovation, and digital growth.
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;