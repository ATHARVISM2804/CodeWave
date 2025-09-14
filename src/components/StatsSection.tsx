import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RollingGallery from './RollingGallary';
import { useNavigate } from 'react-router-dom';



const services = [
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    label: 'Web Development',
    description: 'Fast, scalable, and AI-friendly websites designed for tomorrow\'s digital landscape',
    gradient: 'from-blue-500 to-cyan-500',
    slug: '/services/web-development'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    label: 'Custom Software Solutions',
    description: 'Tailored solutions that adapt to your workflows and scale with your growth',
    gradient: 'from-purple-500 to-pink-500',
    slug: '/services/custom-software'
  },
  {
    icon: 'https://landing.bismart.com/hubfs/genAI%20logo.jpg',
    label: 'AI-Powered Automation',
    description: 'Smart tools and workflows that automate routine tasks and boost efficiency',
    gradient: 'from-green-500 to-emerald-500',
    slug: '/services/ai-automation'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/3523/3523887.png',
    label: 'GovTech Applications',
    description: 'Secure, compliant solutions for government and public sector services',
    gradient: 'from-teal-500 to-blue-500',
    slug: '/services/govtech'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    label: 'Mobile Development',
    description: 'Cross-platform and native apps that deliver exceptional user experiences',
    gradient: 'from-indigo-500 to-purple-500',
    slug: '/services/mobile-development'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    label: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality',
    gradient: 'from-orange-500 to-red-500',
    slug: '/services/ui-ux-design'
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7mgTzfml9-fyRSDxIFT0GiGK1loPmUxNeA0p_ZuMA5hwO1Gxg3X5otZim6Mivh9e8Gw&usqp=CAU',
    label: 'API Integration',
    description: 'Seamless system integrations that connect your business tools',
    gradient: 'from-cyan-500 to-teal-500',
    slug: '/services/api-integration'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    label: 'Digital Marketing',
    description: 'Data-driven strategies that grow your online presence and ROI',
    gradient: 'from-pink-500 to-rose-500',
    slug: '/services/digital-marketing'
  }
];


const StatsSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const navigate = useNavigate();
  
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
        className="w-full max-w-4xl mx-auto text-center mt-2 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Headline */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
            <span className="block" style={{ color: 'var(--text-primary)' }}>
              Where Intelligence Meets
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] animate-pulse-slow">
              Engineering Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mt-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            A Technology-Driven Intelligence Studio
          </p>
        </motion.div>
        
        {/* Main Description */}
        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="relative">
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We thrive on transforming complex challenges into elegant solutions through the perfect blend of 
              <span className="relative inline-block px-2">
                <span className="relative z-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  smart engineering
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 blur-sm"></span>
              </span>
              and
              <span className="relative inline-block px-2">
                <span className="relative z-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  artificial intelligence
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 blur-sm"></span>
              </span>
            </p>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 my-8"
          >
            {['Web Innovation', 'GovTech Solutions', 'AI Automation', 'Digital Growth'].map((item, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-full text-sm border"
                style={{ 
                  background: 'var(--card-bg)',
                  borderColor: 'var(--card-border)',
                  color: 'var(--text-secondary)'
                }}
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5 rounded-2xl p-6 backdrop-blur-sm border border-[var(--card-border)]"
          >
            <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              From startup vision to enterprise scale, we partner with innovators globally — 
              <span className="font-bold" style={{ color: 'var(--accent-primary)' }}>
                helping teams move faster, work smarter, and build for tomorrow
              </span>
            </p>
            <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"></div>
          </motion.div>
          
          {/* Final Statement */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg font-medium"
            style={{ color: 'var(--text-primary)' }}
          >
            Our mission is clear: 
            <span className="block mt-2 text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Turning Complexity into Clarity, Making Technology Think for You
            </span>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Services Section with Enhanced Cards */}
      <motion.div 
        className="w-full mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Our Services
            </span>
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Comprehensive solutions powered by intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => navigate(service.slug)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') navigate(service.slug);
              }}
              role="button"
            >
              <div className={`morph-card h-full p-6 flex flex-col transition-all duration-300 overflow-hidden
                ${hoveredService === idx ? 'shadow-lg shadow-[var(--accent-primary)]/20' : ''}
                hover:border-[var(--accent-primary)]`}
              >
                <div className="relative mb-6 flex items-center gap-4">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 
                      bg-gradient-to-r ${service.gradient} group-hover:scale-110`}
                  >
                    <img 
                      src={service.icon} 
                      alt={service.label} 
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    {service.label}
                  </h3>
                </div>
                
                <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                  <span style={{ color: 'var(--accent-primary)' }}>Learn More</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    style={{ color: 'var(--accent-primary)' }}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {hoveredService === idx && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-transparent 
                    pointer-events-none opacity-60" />
                )}
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