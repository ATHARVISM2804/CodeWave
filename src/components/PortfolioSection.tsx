import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection: React.FC = () => {
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
        <div className="text-center mb-16">
          <div className={`inline-block text-[#ff6a3d] text-sm font-semibold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            OUR WORK & INSIGHTS
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            See What Intelligence Builds.{' '}
            <span className="text-[#ff6a3d]">Then Learn Why.</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            Intelligence-driven solutions that transform how you work and connect.
          </p>
        </div>

        {/* Featured Project */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#ff6a3d]/20 to-[#ff8c42]/20 p-1">
            <div className="bg-[#0b0e17] rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Featured project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-[#ff6a3d] text-sm font-semibold mb-2">OUR WORK IN ACTION</div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Where Code Meets Impact</h3>
                    <p className="text-gray-300 text-lg">
                      Intelligence-driven solutions that transform how you work and connect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group card-premium glass-premium overflow-hidden hover-lift glare-effect ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className={`h-52 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="p-3 glass-premium rounded-lg hover-lift glare-effect">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-3 glass-premium rounded-lg hover-lift glare-effect">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="text-shimmer text-sm font-semibold mb-3">{project.category}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-shimmer transition-all duration-300">
                  {project.title}
                </h3>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-300 font-medium">
                      <div className="w-2 h-2 bg-[#ff6a3d] rounded-full mr-3 mt-2 group-hover:animate-pulse-premium particle-glow"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff6a3d]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;