import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Eye, Share2, BookmarkPlus, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/blog.css';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  trending?: boolean;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Mock blog post data - In a real app, fetch from API
    const blogPosts: { [key: string]: BlogPostData } = {
      'future-intelligent-software': {
        id: 'future-intelligent-software',
        title: 'The Future of Intelligent Software Development',
        excerpt: 'How AI is revolutionizing the way we build, test, and deploy software solutions. A deep dive into practical applications that are changing the industry right now.',
        category: 'AI & Development',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
        trending: true,
        content: `
          <h2>The Dawn of Intelligent Development</h2>
          <p>Artificial Intelligence is no longer a distant dream—it's actively reshaping how we approach software development. From code generation to automated testing, AI is becoming an integral part of the development workflow.</p>
          
          <h3>Code Generation and Assistance</h3>
          <p>Modern AI tools like GitHub Copilot and ChatGPT are transforming how developers write code. These tools can:</p>
          <ul>
            <li>Generate boilerplate code instantly</li>
            <li>Suggest optimizations and best practices</li>
            <li>Help debug complex issues</li>
            <li>Translate code between programming languages</li>
          </ul>
          
          <h3>Automated Testing and Quality Assurance</h3>
          <p>AI-powered testing tools are revolutionizing quality assurance by automatically generating test cases, identifying edge cases, and predicting potential failures before they occur.</p>
          
          <blockquote>
            "The future of software development lies not in replacing developers, but in augmenting their capabilities with intelligent tools."
          </blockquote>
          
          <h3>Deployment and Monitoring</h3>
          <p>Intelligent deployment systems can now predict the best times to deploy, automatically rollback problematic releases, and monitor system health with unprecedented accuracy.</p>
          
          <h3>The Road Ahead</h3>
          <p>As we look toward the future, we can expect to see even more sophisticated AI tools that will continue to enhance developer productivity while maintaining the creative and problem-solving aspects that make development an art form.</p>
          
          <p>At CodeWave, we're actively integrating these AI capabilities into our development process, ensuring our clients benefit from the latest technological advances while maintaining the highest standards of code quality and security.</p>
        `
      },
      'startups-digital-transformation': {
        id: 'startups-digital-transformation',
        title: 'Why Startups Fail at Digital Transformation',
        excerpt: 'Most startups think they need to digitize everything. Here\'s why strategic digital transformation is different and more effective.',
        category: 'Strategy',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
          <h2>The Digital Transformation Misconception</h2>
          <p>Many startups believe that digital transformation means digitizing every single process in their organization. This approach often leads to confusion, wasted resources, and ultimately, failure.</p>
          
          <h3>Common Mistakes Startups Make</h3>
          <ol>
            <li><strong>Technology-first approach:</strong> Choosing tools before understanding needs</li>
            <li><strong>Lack of clear strategy:</strong> Digitizing without a coherent plan</li>
            <li><strong>Ignoring company culture:</strong> Not preparing the team for change</li>
            <li><strong>Unrealistic timelines:</strong> Expecting overnight transformation</li>
          </ol>
          
          <h3>The Strategic Approach</h3>
          <p>Successful digital transformation starts with understanding your core business objectives and customer needs. It's about using technology to enhance value delivery, not just adopting the latest trends.</p>
          
          <h3>Building a Foundation for Success</h3>
          <p>Before implementing any digital solution, startups should focus on creating solid foundations: clear processes, skilled teams, and a culture that embraces change and continuous learning.</p>
        `
      },
      'govtech-security': {
        id: 'govtech-security',
        title: 'GovTech Security: Beyond Compliance',
        excerpt: 'Building secure government solutions requires more than checking compliance boxes. Here\'s our approach to real security.',
        category: 'Security',
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
          <h2>Security in GovTech</h2>
          <p>Security is not just about compliance. It\'s about building trust and resilience into every layer of a government solution.</p>
          <h3>Our Approach</h3>
          <ul>
            <li>End-to-end encryption</li>
            <li>Continuous compliance monitoring</li>
            <li>Incident response readiness</li>
          </ul>
          <blockquote>"Real security is proactive, not reactive."</blockquote>
        `
      },
      'psychology-ui-design': {
        id: 'psychology-ui-design',
        title: 'The Psychology of User Interface Design',
        excerpt: 'Great UX isn\'t just about pretty interfaces. It\'s about understanding human psychology and behavior patterns.',
        category: 'Design',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
          <h2>Designing for the Mind</h2>
          <p>Effective UI design is rooted in psychology. We use cognitive science to guide users toward the right actions.</p>
          <h3>Principles We Use</h3>
          <ul>
            <li>Visual hierarchy</li>
            <li>Consistency and feedback</li>
            <li>Reducing cognitive load</li>
          </ul>
          <blockquote>"Design is not just what it looks like and feels like. Design is how it works."</blockquote>
        `
      },
      'api-design-future': {
        id: 'api-design-future',
        title: 'API Design for the Next Decade',
        excerpt: 'APIs are the backbone of modern applications. Here\'s how to design APIs that will scale and evolve with your business.',
        category: 'Development',
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
          <h2>Future-Proof API Design</h2>
          <p>APIs must be robust, scalable, and easy to use. We focus on best practices that stand the test of time.</p>
          <h3>Best Practices</h3>
          <ul>
            <li>Versioning and backward compatibility</li>
            <li>Comprehensive documentation</li>
            <li>Security and rate limiting</li>
          </ul>
          <blockquote>"A great API is a product, not just a code interface."</blockquote>
        `
      }
      // Add more blog posts as needed
    };

    if (id && blogPosts[id]) {
      setPost(blogPosts[id]);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-secondary)' }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Post Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full font-semibold"
            style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 mb-20" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300 hover:scale-105"
            style={{ borderColor: 'var(--card-border)', color: 'var(--text-primary)', background: 'var(--card-bg)' }}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            {/* Enhanced gradient overlay for better text visibility on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                  style={{ 
                    background: 'var(--accent-primary)', 
                    color: 'white',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}>
                  {post.category}
                </span>
                {post.trending && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                    style={{ 
                      background: 'var(--accent-secondary)', 
                      color: 'white',
                      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                    }}>
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-white drop-shadow-lg">
                {post.title}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-4 sm:mb-6 max-w-3xl drop-shadow-md">
                {post.excerpt}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl p-8 md:p-12 shadow-lg"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              
              <div 
                className="prose prose-lg max-w-none blog-content"
                style={{ 
                  color: 'var(--text-primary)',
                  textAlign: 'justify'
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-8">
              {/* About the Author */}
              <div className="rounded-2xl p-6 shadow-lg"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  About the Author
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Shivam Jand</h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Senior Developer</p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Passionate about creating intelligent software solutions and sharing knowledge with the developer community.
                </p>
              </div>
              
              {/* Newsletter Signup */}
              <div className="rounded-2xl p-6 shadow-lg"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Stay Updated
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Get the latest insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                    style={{ 
                      background: 'var(--bg-secondary)', 
                      borderColor: 'var(--card-border)', 
                      color: 'var(--text-primary)' 
                    }}
                  />
                  <button className="w-full px-4 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105"
                    style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--text-primary)' }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;