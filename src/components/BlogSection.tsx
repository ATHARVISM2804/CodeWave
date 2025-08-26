import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const BlogSection: React.FC = () => {
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

  const blogPosts = [
    {
      title: 'Why Your Startup Needs AI (Even If You Think It Doesn\'t)',
      excerpt: 'Most founders think AI is for big tech companies. Here\'s why that\'s wrong and how small teams can leverage AI for competitive advantage.',
      category: 'AI & Strategy',
      readTime: '5 min read',
      date: 'Dec 15, 2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'GovTech in India: What No One Tells You',
      excerpt: 'Building for government clients requires a different approach. Here\'s what we learned from securing and scaling public sector solutions.',
      category: 'GovTech',
      readTime: '7 min read',
      date: 'Dec 12, 2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Design for Action: UX that Drives Better Decisions',
      excerpt: 'Beautiful interfaces don\'t guarantee results. Learn how we design experiences that guide users toward meaningful actions.',
      category: 'Design',
      readTime: '4 min read',
      date: 'Dec 10, 2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Automation Beyond Chatbots: What\'s Next?',
      excerpt: 'Everyone\'s building chatbots. But the real opportunity lies in intelligent process automation that works behind the scenes.',
      category: 'Automation',
      readTime: '6 min read',
      date: 'Dec 8, 2024',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-block text-[#ff6a3d] text-sm font-semibold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            BLOG & INSIGHTS
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Fresh Thinking. Smart Tech.{' '}
            <span className="text-[#ff6a3d]">Real Impact.</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            We publish 2-3 times a month.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6a3d]/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#ff6a3d]/10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className={`h-3 bg-gradient-to-r ${post.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-[#ff6a3d] font-semibold">{post.category}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff6a3d] transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-[#ff6a3d] font-semibold hover:text-white transition-colors duration-300 cursor-pointer group-hover:translate-x-2 group-hover:transition-transform">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
          <button className="bg-[#ff6a3d] hover:bg-[#ff8c42] text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6a3d]/30 font-semibold">
            Read All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;