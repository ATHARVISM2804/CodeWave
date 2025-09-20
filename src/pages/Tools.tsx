import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Code, Database, Terminal, Zap, Sparkles, CheckCircle, Layers } from 'lucide-react';

const tools = [
  {
    name: 'AI Code Assistant',
    description: 'Intelligent code suggestions and automated refactoring powered by advanced AI models',
    icon: Brain,
    category: 'Development',
    stats: '200K+ Lines Optimized',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Smart code completion', 'Bug detection', 'Syntax optimization']
  },
  {
    name: 'API Tester',
    description: 'Test, debug and document your APIs with our intuitive interface',
    icon: Terminal,
    category: 'Testing',
    stats: '1M+ API Calls',
    gradient: 'from-purple-500 to-pink-500',
    features: ['Request builder', 'Response analysis', 'Authentication testing']
  },
  {
    name: 'Database Manager',
    description: 'Visual database management and optimization tools',
    icon: Database,
    category: 'Database',
    stats: '50K+ Queries Optimized',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Schema visualization', 'Query optimizer', 'Backup automation']
  },
  {
    name: 'Code Generator',
    description: 'Generate boilerplate code and components automatically',
    icon: Code,
    category: 'Development',
    stats: '100K+ Components',
    gradient: 'from-orange-500 to-red-500',
    features: ['Template customization', 'Multi-language support', 'Framework integration']
  },
  {
    name: 'Performance Monitor',
    description: 'Real-time application performance monitoring and optimization',
    icon: Zap,
    category: 'Monitoring',
    stats: '1B+ Data Points',
    gradient: 'from-indigo-500 to-purple-500',
    features: ['Load testing', 'Memory profiling', 'Bottleneck detection']
  },
  {
    name: 'ChatBot Builder',
    description: 'Create and deploy AI-powered chatbots for your applications',
    icon: Bot,
    category: 'AI',
    stats: '10K+ Chatbots',
    gradient: 'from-pink-500 to-rose-500',
    features: ['Conversation designer', 'NLP integration', 'Multi-platform deployment']
  }
];

const categories = ['All', 'Development', 'Testing', 'Database', 'Monitoring', 'AI'];

const ToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 opacity-15 rounded-full blur-3xl" 
            style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 opacity-10 rounded-full blur-3xl" 
            style={{ background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))' }}></div>
        </div>
        
        {/* Floating Tool Icons - Hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          <div className="absolute top-32 right-24 animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-xl backdrop-blur-sm"
              style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid var(--card-border)',
                boxShadow: '0 10px 25px rgba(var(--accent-primary-rgb), 0.1)'
              }}>
              <Brain className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
            </div>
          </div>
          <div className="absolute top-48 left-32 animate-float" style={{ animationDelay: '1.2s' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-xl backdrop-blur-sm"
              style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid var(--card-border)',
                boxShadow: '0 8px 20px rgba(var(--accent-primary-rgb), 0.08)'
              }}>
              <Database className="w-5 h-5" style={{ color: 'var(--accent-secondary)' }} />
            </div>
          </div>
          <div className="absolute bottom-32 right-48 animate-float" style={{ animationDelay: '0.6s' }}>
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shadow-xl backdrop-blur-sm"
              style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid var(--card-border)',
                boxShadow: '0 9px 22px rgba(var(--accent-primary-rgb), 0.09)'
              }}>
              <Code className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              {/* Badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm shadow-lg"
                  style={{
                    borderColor: 'var(--accent-primary)',
                    background: 'var(--card-bg)',
                    boxShadow: '0 4px 15px rgba(var(--accent-primary-rgb), 0.15)'
                  }}>
                  <Sparkles className="w-3 h-3" style={{ color: 'var(--accent-primary)' }} />
                  <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Accelerate Your Workflow</span>
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span style={{ color: 'var(--text-primary)' }}>Intelligent Developer</span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  Tools & Utilities
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Supercharge your development workflow with our suite of AI-powered tools designed for the modern developer
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 py-8 max-w-3xl mx-auto mb-8"
            >
              <div className="text-center p-4 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>25+</div>
                <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Productivity Tools</div>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>50K+</div>
                <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Daily Users</div>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>99%</div>
                <div className="text-xs lg:text-sm" style={{ color: 'var(--text-secondary)' }}>Time Saved</div>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-6"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category ? 'shadow-lg' : 'hover:shadow-md'
                  }`}
                  style={{
                    background: selectedCategory === category ? 
                      'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' : 
                      'var(--card-bg)',
                    border: `1px solid ${selectedCategory === category ? 'transparent' : 'var(--card-border)'}`,
                    color: selectedCategory === category ? 'white' : 'var(--text-primary)',
                    boxShadow: selectedCategory === category ? 
                      '0 10px 25px rgba(var(--accent-primary-rgb), 0.2)' : ''
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section ref={sectionRef} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border shadow-xl backdrop-blur-md transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${idx + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 20px 40px rgba(var(--accent-primary-rgb), 0.08)'
                }}
                onMouseEnter={() => setHoveredTool(idx)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {/* Blue shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(var(--accent-primary-rgb), 0.12), transparent 70%)',
                  }}
                ></div>
                
                {/* Main glare effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-[-100%] group-hover:animate-[enhancedToolGlare_2s_ease_forwards] bg-gradient-to-r from-transparent via-[var(--accent-primary)]/35 to-transparent"></div>
                </div>
                
                {/* Secondary subtle glare effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute -inset-full h-[200%] w-[200%] rotate-[135deg] translate-x-[-100%] group-hover:animate-[subtleToolGlare_2.3s_ease_0.4s_forwards] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                </div>
                
                {/* Edge highlight on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                  style={{ 
                    boxShadow: `inset 0 0 0 1px rgba(var(--accent-primary-rgb), 0.25), 0 0 15px rgba(var(--accent-primary-rgb), 0.15)`,
                  }}
                ></div>
                
                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tool.gradient} rounded-xl flex items-center justify-center magnetic-effect`}>
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[var(--accent-primary)] transition-colors duration-300" 
                        style={{ color: 'var(--text-primary)' }}>
                        {tool.name}
                      </h3>
                      <span className="text-sm px-3 py-1 rounded-full inline-block mt-1" 
                        style={{ 
                          background: 'var(--bg-secondary)', 
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--card-border)'
                        }}>
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {tool.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h5 className="text-xs font-semibold mb-3" style={{ color: 'var(--accent-primary)' }}>KEY FEATURES</h5>
                      <div className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs" style={{ color: 'var(--text-secondary)' }}>
                            <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t relative z-10" 
                    style={{ borderColor: 'var(--card-border)' }}>
                    <span className="text-sm font-medium bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                      {tool.stats}
                    </span>
                    <Link
                      to={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        color: 'var(--text-primary)'
                      }}
                    >
                      Try Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-10 border shadow-2xl backdrop-blur-md transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl group relative overflow-hidden text-center"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-primary)',
              boxShadow: '0 25px 50px rgba(var(--accent-primary-rgb), 0.12)'
            }}
          >
            {/* Blue shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(var(--accent-primary-rgb), 0.1), transparent 70%)',
              }}
            ></div>
            
            {/* Enhanced blue glare effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-[-100%] group-hover:animate-[ctaToolEnhancedGlare_2.2s_ease_forwards] bg-gradient-to-r from-transparent via-[var(--accent-primary)]/40 to-transparent"></div>
            </div>
            
            {/* Second glare effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden rounded-2xl pointer-events-none"
              style={{ animationDelay: "0.3s" }}>
              <div className="absolute -inset-full h-[200%] w-[200%] rotate-[225deg] translate-y-[-100%] group-hover:animate-[secondaryToolGlare_2s_ease_0.6s_forwards] bg-gradient-to-r from-transparent via-[var(--accent-primary)]/20 to-transparent"></div>
            </div>
            
            {/* Edge highlight */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
              style={{ 
                boxShadow: `inset 0 0 0 1px rgba(var(--accent-primary-rgb), 0.2), 0 0 20px rgba(var(--accent-primary-rgb), 0.15)`,
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                <Layers className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Need a Custom Tool Solution?
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
                We can build specialized tools tailored to your specific workflow and requirements.
                Let's create a solution that perfectly fits your development needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="group px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'var(--text-primary)',
                    boxShadow: '0 10px 30px rgba(var(--accent-primary-rgb), 0.3)'
                  }}
                  onClick={() => window.location.href = '/contact'}
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="px-8 py-4 rounded-full font-semibold text-base border-2 transform hover:scale-105 transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-white"
                  style={{
                    borderColor: 'var(--accent-primary)',
                    color: 'var(--text-primary)',
                    background: 'transparent'
                  }}
                  onClick={() => window.location.href = '/services'}
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes enhancedToolGlare {
          0% {
            transform: translateX(-100%) rotate(45deg);
            opacity: 0.1;
          }
          25% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes subtleToolGlare {
          0% {
            transform: translateX(-100%) rotate(135deg);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateX(100%) rotate(135deg);
            opacity: 0;
          }
        }
        
        @keyframes ctaToolEnhancedGlare {
          0% {
            transform: translateX(-100%) rotate(45deg);
            opacity: 0;
          }
          30% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(100%) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes secondaryToolGlare {
          0% {
            transform: translateY(-100%) rotate(225deg);
            opacity: 0;
          }
          40% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100%) rotate(225deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .stagger-animation {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .magnetic-effect:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ToolsPage;
