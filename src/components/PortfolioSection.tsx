import React, { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featuredProject = {
    title: 'Enterprise AI Dashboard',
    category: 'Featured Project',
    description: 'A comprehensive dashboard that uses machine learning to predict business outcomes and automate decision-making processes.',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: [
      { label: 'Performance Boost', value: '85%', icon: TrendingUp },
      { label: 'Users Onboarded', value: '10K+', icon: Users },
      { label: 'Client Rating', value: '4.9', icon: Star }
    ],
    technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'AWS'],
    link: '#'
  };

  const projects = [
    {
      title: 'Smart CRM Platform',
      category: 'Web Development',
      description: 'AI-powered customer relationship management with predictive analytics and automated workflows.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'TensorFlow'],
      metrics: '60% ↓ Support Tickets'
    },
    {
      title: 'GovTech Portal',
      category: 'Government Solution',
      description: 'Secure citizen services portal with advanced compliance and reporting features.',
      image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Node.js', 'Security'],
      metrics: '2x Faster Resolution'
    },
    {
      title: 'Logistics Mobile App',
      category: 'Mobile Development',
      description: 'Real-time tracking and route optimization for delivery teams with GPS integration.',
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'GPS', 'Maps API'],
      metrics: '25% ↓ Delivery Time'
    },
    {
      title: 'Fintech Platform',
      category: 'Financial Technology',
      description: 'Modern financial platform with advanced security and seamless user experience.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Blockchain', 'Security'],
      metrics: '99.9% Uptime'
    },
    {
      title: 'AI Knowledge Bot',
      category: 'AI & Machine Learning',
      description: 'Intelligent document processing and knowledge extraction system for enterprises.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenAI', 'NLP'],
      metrics: '80% ↓ Processing Time'
    },
    {
      title: 'Healthcare Dashboard',
      category: 'Healthcare Technology',
      description: 'Patient management system with real-time monitoring and predictive health analytics.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'MongoDB', 'IoT'],
      metrics: '40% Better Outcomes'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative z-1" 
      style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs shadow-lg"
              style={{
                borderColor: 'var(--accent-primary)',
                background: 'var(--card-bg)',
                boxShadow: '0 4px 15px rgba(var(--accent-primary-rgb), 0.10)'
              }}>
              <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Our Work</span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">
              <span style={{ color: 'var(--text-primary)' }}>Our</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                Portfolio
              </span>
            </h2>
          </div>
          
          {/* Underline */}
          <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-6" style={{ color: 'var(--text-secondary)' }}>
            Intelligence-driven solutions that transform how businesses work and connect.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=""
        >
          <div className="relative rounded-3xl overflow-hidden transition-all duration-500 group hover:shadow-[0_5px_30px_-10px_rgba(var(--accent-primary-rgb),0.7)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] p-1">
              <div className="w-full h-full rounded-3xl overflow-hidden" style={{ background: 'var(--card-bg)' }}>
                {/* Sleek glowing border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary)20, transparent 30%, var(--accent-secondary)20, transparent 70%, var(--accent-primary)20)',
                    backgroundSize: '300% 300%',
                    animation: 'subtleFlow 4s ease infinite'
                  }}
                ></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" 
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary), transparent)',
                    clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                    opacity: 0.2
                  }}>
                </div>
                
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" 
                  style={{ 
                    background: 'linear-gradient(315deg, var(--accent-secondary), transparent)',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                    opacity: 0.2
                  }}>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 relative z-10">
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]">
                      <img 
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-64 lg:h-80 object-cover transition-all duration-700 group-hover:scale-105 group-hover:filter group-hover:contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-semibold mb-2 px-3 py-1 rounded-full inline-block" 
                        style={{ background: 'var(--accent-primary)/20', color: 'var(--accent-primary)' }}>
                        {featuredProject.category}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                        {featuredProject.title}
                      </h3>
                      <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {featuredProject.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {featuredProject.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center" 
                            style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>
                            <metric.icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                          </div>
                          <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{metric.value}</div>
                          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform hover:scale-105 transition-transform duration-200"
                        style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}>
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </button>
                      <button className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 border transform hover:scale-105 transition-transform duration-200"
                        style={{ borderColor: 'var(--card-border)', color: 'var(--text-primary)', background: 'var(--card-bg)' }}>
                        <Github className="w-4 h-4" />
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="rounded-3xl p-6 shadow-lg transition-all duration-700 relative overflow-hidden 
                  backdrop-blur-sm
                  before:absolute before:inset-0 before:rounded-3xl before:border before:border-transparent before:group-hover:border-[var(--accent-primary)]/20
                  before:transition-all before:duration-700
                  hover:shadow-[0_15px_35px_-10px_rgba(var(--accent-primary-rgb),0.25)]"
                  style={{ background: 'var(--card-bg)' }}
                >
                  
                  {/* Sleek background glow effect on hover */}
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md"
                    style={{ 
                      background: 'radial-gradient(circle at 50% -20%, rgba(var(--accent-primary-rgb), 0.15), transparent 70%)',
                    }}
                  ></div>
                  
                  {/* Border highlights */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-700 translate-y-1 group-hover:translate-y-0"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-secondary)] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-700 -translate-y-1 group-hover:translate-y-0"></div>
                  
                  <div className="relative z-10">
                    <div className="rounded-2xl overflow-hidden mb-4 shadow-lg transition-all duration-700">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-700 rounded-2xl"
                        style={{ 
                          boxShadow: 'inset 0 0 15px rgba(var(--accent-primary-rgb), 0.3)'
                        }}>
                      </div>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-[var(--accent-primary)]/30 group-hover:shadow-sm group-hover:shadow-[var(--accent-primary)]/20"
                          style={{ background: 'var(--accent-primary)/20', color: 'var(--accent-primary)' }}>
                          {project.category}
                        </span>
                        <span className="text-sm font-bold transition-all duration-300 group-hover:text-[var(--accent-secondary)] group-hover:translate-x-[-2px] group-hover:scale-105" 
                          style={{ color: 'var(--accent-secondary)' }}>
                          {project.metrics}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold transition-all duration-300 group-hover:text-[var(--accent-primary)] group-hover:translate-y-[-1px]" 
                        style={{ color: 'var(--text-primary)' }}>
                        {project.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-[var(--text-primary)]" 
                        style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} 
                            className="px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 
                              group-hover:bg-[var(--accent-primary)]/10 group-hover:border-[var(--accent-primary)]/30
                              group-hover:translate-y-[-1px] group-hover:shadow-sm"
                            style={{ 
                              background: 'var(--glass-bg)', 
                              color: 'var(--text-secondary)',
                              border: '1px solid transparent'
                            }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                        <button className="flex items-center gap-1 text-sm font-semibold relative overflow-hidden group/button" 
                          style={{ color: 'var(--accent-primary)' }}>
                          <span className="transition-transform duration-300 group-hover/button:translate-x-1">View Details</span>
                          <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/button:translate-x-1 relative" />
                          <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-current transform scale-x-0 group-hover/button:scale-x-100 origin-left transition-transform duration-300"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="rounded-3xl p-8 transition-all duration-500 
            hover:shadow-[0_10px_40px_-15px_rgba(var(--accent-primary-rgb),0.35)] relative overflow-hidden
            backdrop-blur-sm"
            style={{ background: 'var(--card-bg)' }}
          >
            {/* Border highlight effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-all duration-700"
              style={{
                background: 'transparent',
                boxShadow: 'inset 0 0 0 1px rgba(var(--accent-primary-rgb), 0.2)',
              }}
            ></div>
            
            {/* Sleek background glow effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
              style={{ 
                background: 'radial-gradient(circle at center, rgba(var(--accent-primary-rgb), 0.1) 0%, transparent 60%)',
              }}
            ></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 opacity-0 hover:opacity-100 transition-all duration-500" 
              style={{ 
                background: 'linear-gradient(135deg, var(--accent-primary)30, transparent)',
                clipPath: 'polygon(0 0, 40% 0, 0 40%)',
              }}>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 hover:opacity-100 transition-all duration-500" 
              style={{ 
                background: 'linear-gradient(315deg, var(--accent-secondary)30, transparent)',
                clipPath: 'polygon(60% 100%, 100% 100%, 100% 60%)',
              }}>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 transition-all duration-300 hover:translate-y-[-1px]" style={{ color: 'var(--text-primary)' }}>
                Ready to Build Something Amazing?
              </h3>
              <p className="mb-6 transition-colors duration-300 hover:text-[var(--text-primary)]" style={{ color: 'var(--text-secondary)' }}>
                Let's discuss your project and create intelligent solutions together.
              </p>
              <button className="px-8 py-3 rounded-full font-semibold relative overflow-hidden group transition-all duration-300
                hover:shadow-[0_8px_16px_-4px_rgba(var(--accent-primary-rgb),0.5)]"
                style={{ 
                  background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', 
                  color: 'var(--text-primary)' 
                }}
                onClick={() => window.location.href = '/contact'}
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to right, var(--accent-secondary), var(--accent-primary))',
                  }}
                ></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 group-hover:animate-pulse"
                  style={{
                    background: 'radial-gradient(circle at center, white, transparent 70%)',
                  }}
                ></div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes subtleFlow {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
