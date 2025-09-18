import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Code, Database, Terminal, Zap, Sparkles } from 'lucide-react';

const tools = [
  {
    name: 'AI Code Assistant',
    description: 'Intelligent code suggestions and automated refactoring powered by advanced AI models',
    icon: Brain,
    category: 'Development',
    stats: '200K+ Lines Optimized',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'API Tester',
    description: 'Test, debug and document your APIs with our intuitive interface',
    icon: Terminal,
    category: 'Testing',
    stats: '1M+ API Calls',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Database Manager',
    description: 'Visual database management and optimization tools',
    icon: Database,
    category: 'Database',
    stats: '50K+ Queries Optimized',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Code Generator',
    description: 'Generate boilerplate code and components automatically',
    icon: Code,
    category: 'Development',
    stats: '100K+ Components',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'Performance Monitor',
    description: 'Real-time application performance monitoring and optimization',
    icon: Zap,
    category: 'Monitoring',
    stats: '1B+ Data Points',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'ChatBot Builder',
    description: 'Create and deploy AI-powered chatbots for your applications',
    icon: Bot,
    category: 'AI',
    stats: '10K+ Chatbots',
    gradient: 'from-pink-500 to-rose-500'
  }
];

const categories = ['All', 'Development', 'Testing', 'Database', 'Monitoring', 'AI'];

const ToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20" style={{ background: 'var(--bg-secondary)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'var(--accent-primary)' }}
        />
        <div className="absolute bottom-32 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'var(--accent-secondary)' }}
        />
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              {/* Badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs shadow-lg"
                  style={{
                    borderColor: 'var(--accent-primary)',
                    background: 'var(--card-bg)',
                    boxShadow: '0 4px 15px rgba(var(--accent-primary-rgb), 0.10)'
                  }}>
                  <Sparkles className="w-3 h-3" style={{ color: 'var(--accent-primary)' }} />
                  <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Developer Productivity</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span style={{ color: 'var(--text-primary)' }}>Powerful Developer</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  Tools & Utilities
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                Enhance your development workflow with our suite of intelligent tools
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                      : 'hover:border-[var(--accent-primary)] hover:shadow-md'
                  }`}
                  style={{
                    background: selectedCategory === category ? '' : 'var(--card-bg)',
                    border: `1px solid ${selectedCategory === category ? 'transparent' : 'var(--card-border)'}`,
                    color: selectedCategory === category ? 'white' : 'var(--text-primary)',
                    boxShadow: selectedCategory === category ? 
                      '0 10px 20px rgba(var(--accent-primary-rgb), 0.2)' : 'none'
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
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredTool(idx)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <div 
                  className="rounded-2xl p-6 border transition-all duration-500 relative overflow-hidden h-full
                    group-hover:shadow-[0_10px_25px_-5px_rgba(var(--accent-primary-rgb),0.3)]
                    group-hover:border-[var(--accent-primary)]/40"
                  style={{ 
                    background: 'var(--card-bg)', 
                    border: '1px solid var(--card-border)'
                  }}
                >
                  {/* Blue shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(var(--accent-primary-rgb), 0.12), transparent 70%)',
                    }}
                  ></div>
                  
                  {/* Glare effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden rounded-2xl pointer-events-none">
                    <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-[-100%] group-hover:animate-[toolGlare_2s_ease_forwards] bg-gradient-to-r from-transparent via-[var(--accent-primary)]/25 to-transparent"></div>
                  </div>
                  
                  {/* Top edge accent */}
                  <div className="absolute top-0 left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-0 group-hover:opacity-40 transition-all duration-700"></div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 
                      bg-gradient-to-r ${tool.gradient} group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <tool.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[var(--accent-primary)] transition-colors duration-300" 
                        style={{ color: 'var(--text-primary)' }}>
                        {tool.name}
                      </h3>
                      <span className="text-sm px-3 py-1 rounded-full inline-block mt-1 transition-all duration-300 group-hover:bg-[var(--accent-primary)]/10" 
                        style={{ 
                          background: 'var(--glass-bg)', 
                          color: 'var(--text-secondary)' 
                        }}>
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {tool.description}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t relative z-10" 
                    style={{ borderColor: 'var(--card-border)' }}>
                    <span className="text-sm font-medium bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                      {tool.stats}
                    </span>
                    <Link
                      to={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 text-sm font-medium relative group/button overflow-hidden px-4 py-2 rounded-lg"
                      style={{ 
                        background: 'var(--glass-bg)', 
                        color: 'var(--accent-primary)' 
                      }}
                    >
                      <span className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1">Try Now</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1 relative z-10" />
                      <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                        style={{ 
                          background: 'linear-gradient(to right, var(--accent-primary)/10, var(--accent-secondary)/10)' 
                        }}
                      ></div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-10 relative overflow-hidden group transition-all duration-500 
                hover:shadow-[0_20px_50px_-15px_rgba(var(--accent-primary-rgb),0.3)]"
              style={{ 
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)'
              }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5 transition-opacity duration-500 opacity-40 group-hover:opacity-70"></div>
              
              {/* Blue shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(var(--accent-primary-rgb), 0.15), transparent 70%)',
                }}
              ></div>
              
              {/* Glare effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-[-100%] group-hover:animate-[ctaToolGlare_2.5s_ease_forwards] bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-20 transition-all duration-500" 
                style={{ 
                  background: 'linear-gradient(135deg, var(--accent-primary), transparent)',
                  clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                }}>
              </div>
              
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-20 transition-all duration-500" 
                style={{ 
                  background: 'linear-gradient(315deg, var(--accent-secondary), transparent)',
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                }}>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-all duration-700"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' 
                  }}
                >
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-[var(--accent-primary)] transition-colors duration-300" 
                  style={{ color: 'var(--text-primary)' }}>
                  Need a Custom Tool?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  We can build specialized tools tailored to your specific workflow and requirements.
                  Our team of experts will work with you to create solutions that enhance your productivity.
                </p>
                <button
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg relative overflow-hidden group/btn"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white',
                    boxShadow: '0 10px 20px rgba(var(--accent-primary-rgb), 0.2)'
                  }}
                  onClick={() => window.location.href = '/contact'}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))',
                    }}
                  ></div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes toolGlare {
          0% {
            transform: translateX(-100%) rotate(45deg);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes ctaToolGlare {
          0% {
            transform: translateX(-100%) rotate(45deg);
            opacity: 0;
          }
          30% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(100%) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ToolsPage;
