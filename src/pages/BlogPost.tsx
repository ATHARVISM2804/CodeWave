import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Eye, Share2, BookmarkPlus, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/blog.css';
import companyLogo from '../assets/company.jpeg';
import govtech from '../assets/govttech1.jpeg';
import inter from '../assets/user interface.jpeg';
import api from '../assets/user interface.jpeg'


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
          <p>With the rise of AI, developers can now focus more on creative problem-solving and less on repetitive tasks. This shift is leading to faster innovation cycles and more robust applications.</p>
          
          <h3>Code Generation and Assistance</h3>
          <p>Modern AI tools like GitHub Copilot and ChatGPT are transforming how developers write code. These tools can:</p>
          <ul>
            <li>Generate boilerplate code instantly</li>
            <li>Suggest optimizations and best practices</li>
            <li>Help debug complex issues</li>
            <li>Translate code between programming languages</li>
          </ul>
          <p>AI-powered code assistants are also learning from millions of open-source repositories, making their suggestions more relevant and context-aware. This means fewer bugs and higher code quality from the start.</p>
          
          <h3>Automated Testing and Quality Assurance</h3>
          <p>AI-powered testing tools are revolutionizing quality assurance by automatically generating test cases, identifying edge cases, and predicting potential failures before they occur.</p>
          <p>Continuous integration pipelines now leverage AI to analyze test coverage, prioritize critical paths, and even auto-fix minor issues. This results in faster release cycles and more reliable software.</p>
          
          <blockquote>
            "The future of software development lies not in replacing developers, but in augmenting their capabilities with intelligent tools."
          </blockquote>
          
          <h3>Deployment and Monitoring</h3>
          <p>Intelligent deployment systems can now predict the best times to deploy, automatically rollback problematic releases, and monitor system health with unprecedented accuracy.</p>
          <p>AI-driven monitoring tools can detect anomalies in real-time, alert teams instantly, and even trigger automated remediation scripts to minimize downtime.</p>
          
          <h3>AI in Collaboration and Code Review</h3>
          <p>AI is also making its way into collaborative coding and code review processes. Tools can now automatically review pull requests, suggest improvements, and even detect potential security vulnerabilities before code is merged. This not only saves time but also improves code quality and team productivity.</p>
          <p>Some platforms are experimenting with AI-driven pair programming, where an AI partner can help brainstorm solutions, refactor code, and explain complex logic to teammates.</p>
          
          <h3>Real-World Applications</h3>
          <p>Companies are leveraging AI to:</p>
          <ul>
            <li>Automate repetitive development tasks</li>
            <li>Analyze large codebases for technical debt</li>
            <li>Predict bugs and performance bottlenecks</li>
            <li>Personalize user experiences in real-time</li>
          </ul>
          <p>For example, e-commerce platforms use AI to recommend products, optimize pricing, and detect fraudulent transactions, all in real-time.</p>
          
          <h3>Challenges and Considerations</h3>
          <p>Despite the promise, integrating AI into software development comes with challenges:</p>
          <ul>
            <li><strong>Data Privacy:</strong> Ensuring sensitive code and data are protected when using cloud-based AI tools.</li>
            <li><strong>Bias and Fairness:</strong> Avoiding the introduction of bias in AI-generated code or recommendations.</li>
            <li><strong>Human Oversight:</strong> Maintaining a balance between automation and human judgment.</li>
          </ul>
          <p>It's crucial for teams to regularly audit AI outputs and maintain transparency in how AI-driven decisions are made.</p>
          
          <h3>The Road Ahead</h3>
          <p>As we look toward the future, we can expect to see even more sophisticated AI tools that will continue to enhance developer productivity while maintaining the creative and problem-solving aspects that make development an art form.</p>
          <p>AI will likely become a seamless part of the developer toolkit, integrated into IDEs, version control systems, and cloud platforms.</p>
          
          <p>At CodeWave, we're actively integrating these AI capabilities into our development process, ensuring our clients benefit from the latest technological advances while maintaining the highest standards of code quality and security.</p>
          
          <h3>Getting Started with AI in Your Workflow</h3>
          <p>If you're considering adopting AI in your development workflow, start small. Experiment with code completion tools, automated testing frameworks, or AI-powered analytics. Measure the impact, gather feedback from your team, and iterate. The journey to intelligent software development is ongoing, and every step forward brings new opportunities for innovation.</p>
          <p>Remember, the goal is not to replace developers, but to empower them to build better software, faster.</p>
          
          <h3>Conclusion</h3>
          <p>The future of intelligent software development is bright and full of potential. By embracing AI, developers and organizations can unlock new levels of efficiency, creativity, and quality. The key is to stay curious, keep learning, and leverage these tools to augment—not replace—the unique skills that developers bring to the table.</p>
        `
      },
      'startups-digital-transformation': {
        id: 'startups-digital-transformation',
        title: 'Why Startups Fail at Digital Transformation',
        excerpt: 'Most startups think they need to digitize everything. Here\'s why strategic digital transformation is different and more effective.',
        category: 'Strategy',
        image: companyLogo,
        content: `
          <h2>The Digital Transformation Misconception</h2>
          <p>Many startups believe that digital transformation means digitizing every single process in their organization. This approach often leads to confusion, wasted resources, and ultimately, failure.</p>
          <p>Digital transformation is not just about technology—it's about rethinking business models, processes, and customer experiences for the digital age.</p>
          
          <h3>Common Mistakes Startups Make</h3>
          <ol>
            <li><strong>Technology-first approach:</strong> Choosing tools before understanding needs</li>
            <li><strong>Lack of clear strategy:</strong> Digitizing without a coherent plan</li>
            <li><strong>Ignoring company culture:</strong> Not preparing the team for change</li>
            <li><strong>Unrealistic timelines:</strong> Expecting overnight transformation</li>
          </ol>
          <p>Startups often underestimate the importance of change management and the need for ongoing training and support.</p>
          
          <h3>The Strategic Approach</h3>
          <p>Successful digital transformation starts with understanding your core business objectives and customer needs. It's about using technology to enhance value delivery, not just adopting the latest trends.</p>
          <p>Leaders should involve all stakeholders in the transformation journey and set measurable goals for each phase.</p>
          
          <h3>Building a Foundation for Success</h3>
          <p>Before implementing any digital solution, startups should focus on creating solid foundations: clear processes, skilled teams, and a culture that embraces change and continuous learning.</p>
          <p>Investing in scalable infrastructure and robust cybersecurity from the outset can prevent costly issues down the line.</p>
          
          <h3>Case Study: A Startup's Journey</h3>
          <p>One fintech startup began its transformation by mapping customer journeys and identifying pain points. By digitizing only the most critical processes first, they achieved quick wins and built momentum for broader change.</p>
          
          <h3>Conclusion</h3>
          <p>Digital transformation is a marathon, not a sprint. Startups that approach it strategically and invest in people, processes, and technology will be best positioned for long-term success.</p>
        `
      },
      'govtech-security': {
        id: 'govtech-security',
        title: 'GovTech Security: Beyond Compliance',
        excerpt: 'Building secure government solutions requires more than checking compliance boxes. Here\'s our approach to real security.',
        category: 'Security',
        image: govtech,
        content: `
          <h2>Security in GovTech</h2>
          <p>Security is not just about compliance. It's about building trust and resilience into every layer of a government solution.</p>
          <p>Modern GovTech platforms must address evolving threats, from cyber attacks to insider risks, while maintaining transparency and accountability.</p>
          <h3>Our Approach</h3>
          <ul>
            <li>End-to-end encryption</li>
            <li>Continuous compliance monitoring</li>
            <li>Incident response readiness</li>
            <li>Regular security audits and penetration testing</li>
          </ul>
          <p>We work closely with government agencies to ensure all solutions meet the highest standards for data protection and privacy.</p>
          <blockquote>"Real security is proactive, not reactive."</blockquote>
          <h3>Emerging Trends</h3>
          <p>Zero-trust architectures, AI-driven threat detection, and blockchain-based record-keeping are shaping the future of GovTech security.</p>
          <h3>Conclusion</h3>
          <p>Security is a continuous journey. By staying ahead of threats and fostering a culture of vigilance, governments can protect citizen data and maintain public trust.</p>
        `
      },
      'psychology-ui-design': {
        id: 'psychology-ui-design',
        title: 'The Psychology of User Interface Design',
        excerpt: 'Great UX isn\'t just about pretty interfaces. It\'s about understanding human psychology and behavior patterns.',
        category: 'Design',
        image: inter,
        content: `
          <h2>Designing for the Mind</h2>
          <p>Effective UI design is rooted in psychology. We use cognitive science to guide users toward the right actions.</p>
          <p>Understanding how users perceive, process, and interact with information is key to creating intuitive interfaces.</p>
          <h3>Principles We Use</h3>
          <ul>
            <li>Visual hierarchy</li>
            <li>Consistency and feedback</li>
            <li>Reducing cognitive load</li>
            <li>Affordances and signifiers</li>
          </ul>
          <p>Microinteractions, color psychology, and accessibility are also crucial for a delightful user experience.</p>
          <blockquote>"Design is not just what it looks like and feels like. Design is how it works."</blockquote>
          <h3>Case Study: Redesigning a Dashboard</h3>
          <p>By applying principles of visual hierarchy and feedback, we helped a SaaS company reduce user errors by 30% and increase task completion rates.</p>
          <h3>Conclusion</h3>
          <p>Great UI design is both an art and a science. By putting users at the center, we create products that are not only beautiful but also effective and enjoyable to use.</p>
        `
      },
      'api-design-future': {
        id: 'api-design-future',
        title: 'API Design for the Next Decade',
        excerpt: 'APIs are the backbone of modern applications. Here\'s how to design APIs that will scale and evolve with your business.',
        category: 'Development',
        image: api,
        content: `
          <h2>Future-Proof API Design</h2>
          <p>APIs must be robust, scalable, and easy to use. We focus on best practices that stand the test of time.</p>
          <p>Modern APIs are the backbone of digital ecosystems, enabling seamless integration between services and platforms.</p>
          <h3>Best Practices</h3>
          <ul>
            <li>Versioning and backward compatibility</li>
            <li>Comprehensive documentation</li>
            <li>Security and rate limiting</li>
            <li>Consistent error handling</li>
          </ul>
          <p>OpenAPI specifications and automated testing help ensure APIs remain reliable as they evolve.</p>
          <blockquote>"A great API is a product, not just a code interface."</blockquote>
          <h3>API as a Product</h3>
          <p>Successful APIs are treated as products, with clear roadmaps, developer support, and active communities.</p>
          <h3>Conclusion</h3>
          <p>As APIs become more central to business strategy, investing in thoughtful design and developer experience will pay dividends for years to come.</p>
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