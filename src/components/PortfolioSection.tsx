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
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-[var(--accent-primary)] animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Our Portfolio
            </h2>
          </div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Intelligence-driven solutions that transform how businesses work and connect.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] p-1">
              <div className="w-full h-full rounded-3xl" style={{ background: 'var(--card-bg)' }}>
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                  <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                      <img 
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
                <div className="rounded-3xl p-6 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl relative overflow-hidden"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold px-3 py-1 rounded-full"
                          style={{ background: 'var(--accent-primary)/20', color: 'var(--accent-primary)' }}>
                          {project.category}
                        </span>
                        <span className="text-sm font-bold" style={{ color: 'var(--accent-secondary)' }}>
                          {project.metrics}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold group-hover:text-[var(--accent-primary)] transition-colors duration-300" 
                        style={{ color: 'var(--text-primary)' }}>
                        {project.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 rounded-full text-xs font-medium"
                            style={{ background: 'var(--glass-bg)', color: 'var(--text-secondary)' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
                          View Details
                          <ArrowRight className="w-4 h-4" />
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
          <div className="rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-500"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Ready to Build Something Amazing?
            </h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Let's discuss your project and create intelligent solutions together.
            </p>
            <button className="px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-200"
              style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}>
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
