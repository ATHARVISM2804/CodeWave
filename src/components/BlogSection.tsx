import React, { useRef, useState } from 'react';
import { ArrowRight, Calendar, Clock, BookOpen, TrendingUp, User, Eye } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BlogSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleBlogClick = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  const featuredPost = {
    id: 'future-intelligent-software',
    title: 'The Future of Intelligent Software Development',
    excerpt: 'How AI is revolutionizing the way we build, test, and deploy software solutions. A deep dive into practical applications that are changing the industry right now.',
    category: 'AI & Development',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
    author: 'CodeWave Team',
    views: '2.4K',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    trending: true
  };

  const blogPosts = [
    {
      id: 'startups-digital-transformation',
      title: 'Why Startups Fail at Digital Transformation',
      excerpt: 'Most startups think they need to digitize everything. Here\'s why strategic digital transformation is different and more effective.',
      category: 'Strategy',
      readTime: '5 min read',
      date: 'Dec 12, 2024',
      author: 'Sarah Chen',
      views: '1.8K',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'govtech-security',
      title: 'GovTech Security: Beyond Compliance',
      excerpt: 'Building secure government solutions requires more than checking compliance boxes. Here\'s our approach to real security.',
      category: 'Security',
      readTime: '7 min read',
      date: 'Dec 10, 2024',
      author: 'Alex Kumar',
      views: '1.2K',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'psychology-ui-design',
      title: 'The Psychology of User Interface Design',
      excerpt: 'Great UX isn\'t just about pretty interfaces. It\'s about understanding human psychology and behavior patterns.',
      category: 'Design',
      readTime: '6 min read',
      date: 'Dec 8, 2024',
      author: 'Maya Patel',
      views: '2.1K',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'api-design-future',
      title: 'API Design for the Next Decade',
      excerpt: 'APIs are the backbone of modern applications. Here\'s how to design APIs that will scale and evolve with your business.',
      category: 'Development',
      readTime: '9 min read',
      date: 'Dec 5, 2024',
      author: 'Dev Team',
      views: '1.7K',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative z-0"
      // style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}
      >
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-primary)] opacity-5 rounded-full blur-3xl"></div>
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
            <BookOpen className="w-8 h-8 text-[var(--accent-primary)] animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Insights & Ideas
            </h2>
          </div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Fresh perspectives on technology, design, and digital transformation from our team.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            onClick={() => handleBlogClick(featuredPost.id)}>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] p-1">
              <div className="w-full h-full rounded-3xl" style={{ background: 'var(--card-bg)' }}>
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      {featuredPost.trending && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ background: 'var(--accent-primary)', color: 'var(--text-primary)' }}>
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'var(--card-bg)', color: 'var(--text-primary)' }}>
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="font-semibold px-3 py-1 rounded-full"
                          style={{ background: 'var(--accent-primary)/20', color: 'var(--accent-primary)' }}>
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-[var(--accent-primary)] transition-colors duration-300" 
                        style={{ color: 'var(--text-primary)' }}>
                        {featuredPost.title}
                      </h3>
                      <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {featuredPost.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 group/btn"
                      style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBlogClick(featuredPost.id);
                      }}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredPost(index)}
                onMouseLeave={() => setHoveredPost(null)}
                onClick={() => handleBlogClick(post.id)}
              >
                <div className="rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                  
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'var(--card-bg)', color: 'var(--accent-primary)' }}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors duration-300 line-clamp-2" 
                      style={{ color: 'var(--text-primary)' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                      <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: 'var(--accent-primary)' }}>
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="rounded-3xl p-8 shadow-xl max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Stay Updated with Our Latest Insights
            </h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Get weekly updates on technology trends, development tips, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                style={{ 
                  background: 'var(--bg-secondary)', 
                  borderColor: 'var(--card-border)', 
                  color: 'var(--text-primary)' 
                }}
              />
              <button className="px-6 py-3 rounded-full font-semibold whitespace-nowrap transform hover:scale-105 transition-transform duration-200"
                style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}>
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;