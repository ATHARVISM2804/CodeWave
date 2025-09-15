import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Code, Database, Terminal, Zap } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
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
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white'
                      : 'hover:border-[var(--accent-primary)]'
                  }`}
                  style={{
                    background: selectedCategory === category ? '' : 'var(--card-bg)',
                    border: `1px solid ${selectedCategory === category ? 'transparent' : 'var(--card-border)'}`,
                    color: selectedCategory === category ? 'white' : 'var(--text-primary)'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredTool(idx)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <div className={`morph-card h-full p-6 transition-all duration-300
                  ${hoveredTool === idx ? 'shadow-lg shadow-[var(--accent-primary)]/20' : ''}
                  hover:border-[var(--accent-primary)]`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 
                      bg-gradient-to-r ${tool.gradient} group-hover:scale-110`}
                    >
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {tool.name}
                      </h3>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-base mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {tool.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
                      {tool.stats}
                    </span>
                    <Link
                      to={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 text-sm font-medium hover:underline"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      Try Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="morph-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-secondary)]/5"></div>
              <div className="relative z-10">
                {/* <Tool className="w-12 h-12 mx-auto mb-6" style={{ color: 'var(--accent-primary)' }} /> */}
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Need a Custom Tool?
                </h2>
                <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                  We can build specialized tools tailored to your specific workflow and requirements
                </p>
                <button
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    color: 'white'
                  }}
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;
