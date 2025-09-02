import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const PortfolioSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'CRM Dashboard for a SaaS Startup',
      category: 'Web Development',
      features: ['Unified pipeline analytics', '60% support tickets', '18% conversion'],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Complaint Portal (GovTech NDA)',
      category: 'Government',
      features: ['Modern easy secure intake', '2x faster resolution', '5 state incidents'],
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Delivery Team App',
      category: 'Mobile',
      features: ['GPS tracking and native geolocation', '25% delays', '70% on-time FTA'],
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Fintech Website',
      category: 'Web Development',
      features: ['Fast, SEO-optimized with CMS and lead capture tools'],
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'AI-Powered Knowledge Bot',
      category: 'AI & ML',
      features: ['Document summarization and knowledge retrieval for internal teams'],
      color: 'from-indigo-500 to-blue-500',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-sm font-semibold mb-4" style={{ color: 'var(--accent-primary)' }}>
            OUR WORK & INSIGHTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            See What Intelligence Builds.{ ' ' }
            <span style={{ color: 'var(--accent-primary)' }}>Then Learn Why.</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Intelligence-driven solutions that transform how you work and connect.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden p-1"
            style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary), var(--accent-primary))', }}>
            <div style={{ background: 'var(--bg-primary)', borderRadius: '1.5rem', padding: '2rem 0' }}>
              <div className="grid lg:grid-cols-2 pl-10 gap-8 items-center">
                <div>
                  <div  className="w-full   h-64 lg:h-80 rounded-2xl overflow-hidden"
                    style={{ background: 'linear-gradient(to right, var(--accent-secondary), var(--accent-primary))' ,  }}>
                    <img 
                      src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Featured project"
                      className="w-full h-full object-cover"
                      
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>OUR WORK IN ACTION</div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Where Code Meets Impact</h3>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                      Intelligence-driven solutions that transform how you work and connect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="group card-premium glass-premium overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)'
              }}
            >
              <div className={`h-52 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #00000099, transparent)' }}></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-3 glass-premium rounded-lg" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                    <ExternalLink className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
                  </button>
                  <button className="p-3 glass-premium rounded-lg" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                    <Github className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="text-sm font-semibold mb-3" style={{ color: 'var(--accent-primary)' }}>{project.category}</div>
                <h3 className="text-xl font-bold mb-4 transition-all duration-300" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm font-medium"
                      style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-2 h-2 rounded-full mr-3 mt-2" style={{ background: 'var(--accent-primary)' }}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
