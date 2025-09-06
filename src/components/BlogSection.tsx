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
    <section ref={sectionRef} className="py-20 relative" >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-block text-4xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ color: 'var(--text-primary)' }}>
            BLOG & INSIGHTS
          </div>
          <h2 className={`text-xl sm:text-xl lg:text-xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-primary)' }}>
            Fresh Thinking. Smart Tech.{ ' ' }
            <span style={{ color: 'var(--accent-primary)' }}>Real Impact.</span>
          </h2>
          {/* <p className={`text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms', color: 'var(--text-secondary)' }}>
            We publish 2-3 times a month.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${600 + index * 100}ms`,
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              }}
            >
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{post.category}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors duration-300 leading-tight"
                  style={{ color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>
                
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center font-semibold transition-colors duration-300 cursor-pointer group-hover:translate-x-2 group-hover:transition-transform"
                  style={{ color: 'var(--accent-primary)' }}>
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
          <button
            className="px-8 py-3 rounded-full transition-all duration-300 font-semibold"
            style={{
              background: 'var(--accent-primary)',
              color: 'var(--text-primary)',
              boxShadow: '0 4px 24px var(--accent-primary)',
            }}
          >
            Read All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;