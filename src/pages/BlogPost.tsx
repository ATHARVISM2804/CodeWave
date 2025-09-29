import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, TrendingUp } from 'lucide-react';
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

  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterResult, setNewsletterResult] = useState('');
  const [showNewsletterThankYou, setShowNewsletterThankYou] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Mock blog post data - In a real app, fetch from API
    const blogPosts: { [key: string]: BlogPostData } = {
      'startup-needs-ai': {
        id: 'startup-needs-ai',
        title: 'Why Your Startup Needs AI — Even If You Think It Doesn’t',
        excerpt: 'AI isn’t a luxury anymore — it’s a necessity. Here’s why even the youngest startups should embrace AI for growth, efficiency, and investor confidence.',
        category: 'AI & Startups',
        image: companyLogo,
        content: `
<h2>Introduction</h2>
<p>Startups live on speed, focus, and smart execution. But when you’re racing against time with limited resources, it can feel like you’re always one step behind bigger competitors. Many founders think Artificial Intelligence (AI) is something only mature companies can afford to implement.</p>
<p>Here’s the truth: AI isn’t a luxury anymore — it’s a necessity. And it’s not just for Fortune 500 companies. Even a one-year-old startup can use AI to reduce costs, work smarter, and grow faster.</p>
<p>At Codewave.it, a technology-first company just one year young, we’ve already helped startups, enterprises, and even government teams harness AI to solve real problems. Our fresh perspective, modern approach, and fast execution prove that AI is not about size or age — it’s about mindset.</p>

<h3>1. AI Levels the Playing Field for Startups</h3>
<ul>
<li><strong>Automation that saves money:</strong> AI-powered chatbots can handle customer queries around the clock, cutting down on support costs.</li>
<li><strong>Insights in real time:</strong> Instead of manually analyzing reports, AI tools can help founders see patterns instantly.</li>
<li><strong>Lean growth:</strong> A small team can do the work of a much larger one by letting AI manage repetitive tasks.</li>
</ul>
<h4>SEO keyword angle:</h4> <em>AI automation for startups, AI tools for small business, startup efficiency with AI.</em>

<h3>2. Real AI Use Cases You Can Apply Today</h3>
<ul>
<li>AI customer support: Reduce tickets by 50–60% with bots that actually learn from your knowledge base.</li>
<li>Smarter marketing: Predict which campaigns will work and adjust ad spend automatically.</li>
<li>Document summarization: Get market research highlights in minutes instead of hours.</li>
<li>Sales intelligence: AI-driven CRMs can help founders focus on the hottest leads.</li>
<li>Recruitment & onboarding: Screen resumes, schedule interviews, and train new hires with AI assistants.</li>
</ul>
<p>At Codewave.it, even in our first year, we’ve built knowledge bots for SaaS startups, GovTech complaint portals with AI workflows, and smart dashboards that save founders countless hours.</p>
<h4>SEO keyword angle:</h4> <em>AI use cases for startups, practical AI automation tools, how startups use AI today.</em>

<h3>3. AI Builds Trust With Investors</h3>
<ul>
<li><strong>Scalability:</strong> Once automated, processes can handle 10x growth with minimal extra cost.</li>
<li><strong>Data-backed decisions:</strong> AI-powered reports make your pitch stronger than gut-feel projections.</li>
<li><strong>Competitive edge:</strong> Investors notice when a small team leverages AI better than a larger competitor.</li>
</ul>
<p>When you can say, “We’ve automated 40% of our manual workload with AI, allowing us to serve twice as many customers without doubling costs” — it’s powerful.</p>
<h4>SEO keyword angle:</h4> <em>AI for investors, AI-driven startups, scalability with AI.</em>

<h3>4. Myths That Hold Startups Back From AI</h3>
<ul>
<li>“AI is too expensive.” → Affordable SaaS tools and custom solutions make AI accessible for all.</li>
<li>“AI replaces jobs.” → AI replaces tasks, not people — freeing teams to focus on innovation.</li>
<li>“We don’t have enough data.” → Pre-trained models like GPT need very little data to start adding value.</li>
<li>  “It’s only for tech companies.” → From logistics to healthcare, startups in any industry can use AI.</li>
</ul>
<h4>SEO keyword angle:</h4> <em>AI myths for startups, affordable AI tools, small business AI adoption.</em>

<h3>5. How to Start Small With AI</h3>
<ol>
<li>Identify one bottleneck (support tickets, reporting, or lead generation).</li>
<li>Start with one AI tool or partner to solve it.</li>
<li>Measure results — track time saved, tickets reduced, or conversions increased.</li>
<li>Scale AI into more workflows.</li>
</ol>
<p>At Codewave.it, we encourage startups to start small but start now. Even one AI-powered workflow can create momentum and free resources to focus on growth.</p>
<h4>SEO keyword angle:</h4> <em>how to implement AI in startups, AI roadmap for founders, first steps with AI.</em>

<h3>6. The Next Wave of Startups Will Be AI-Native</h3>
<p>The next unicorns won’t just “use AI” — they’ll be AI-native. That means AI will be at the heart of their products, customer experiences, and operations.</p>
<p>If you wait to “figure AI out later,” you risk falling behind founders who are already experimenting, learning, and scaling with it.</p>
<h4>SEO keyword angle:</h4> <em>AI-native startups, AI-first companies, future of startups with AI.</em>

<h3>Conclusion</h3>
<p>AI isn’t just for the giants. It’s for the ambitious, the lean, and the bold — exactly what startups are.</p>
<p>Even though Codewave.it is only one year old, we’ve already seen firsthand how AI can help startups reduce costs, scale faster, and gain investor confidence. Being young has been our strength — we move fast, stay current, and deliver results that matter.</p>
<p>Ready to make AI your startup’s secret weapon?</p>
<p><a href="#" style="color:var(--accent-primary);text-decoration:underline;">[Schedule a Call with Codewave.it]</a></p>
        `
      },
      'govtech-india-3-things': {
        id: 'govtech-india-3-things',
        title: 'GovTech in India: 3 Things Nobody’s Talking About',
        excerpt: 'India’s digital governance journey is remarkable, but there are crucial, less-discussed factors shaping the future of GovTech. Here are three key areas that matter most.',
        category: 'GovTech',
        image: govtech,
        content: `
<h2>The Invisible Backbone: Data Interoperability Challenges</h2>
<p>India’s government landscape is sprawling, comprising thousands of departments spanning sectors like health, finance, agriculture, and urban development. Each operates with its own legacy IT systems and data silos. The real challenge with GovTech is not just launching apps but ensuring these diverse systems can talk seamlessly through interoperable data frameworks.</p>
<ul>
<li><strong>Siloed systems cause inefficiencies:</strong> Citizens often submit documents multiple times across departments due to lack of backend data sharing. For example, identity verification processes can be slow and redundant without unified data access.</li>
<li><strong>Standardization is complex:</strong> Creating common data standards and secure APIs requires significant policy and technical coordination. India’s recent Data Empowerment and Protection Architecture (DEPA) aims to give citizens control over their data sharing, but adoption is still nascent.</li>
<li><strong>Privacy and Security:</strong> Interoperability must be balanced with strong privacy protections. India’s Personal Data Protection Bill highlights the need for robust consent frameworks and data minimization principles in government tech.</li>
</ul>
<p>Solving data interoperability means shifting from standalone projects to a connected digital ecosystem that anticipates user needs and automates backend workflows across ministries. This foundational work is critical but gets overshadowed by more visible citizen-facing apps.</p>

<h2>The Procurement Maze: An Invisible Barrier for Startups</h2>
<ul>
<li><strong>Long, bureaucratic timelines:</strong> The procurement cycle can take 6+ months, incompatible with startup agility and rapid iteration demands. Startups face difficulty competing against well-established providers with deeper pockets.</li>
<li><strong>Overly rigid contract terms:</strong> Standard contracts often emphasize fixed scopes and deliverables instead of outcomes, discouraging experimental implementations needed for breakthrough solutions.</li>
<li><strong>Certification and compliance hurdles:</strong> Navigating government compliance requirements and certifications can divert startup focus and resources away from product development.</li>
</ul>
<p>Encouragingly, some states and central bodies are piloting innovative procurement practices such as sandbox environments and challenge-based models where startups can demonstrate proof-of-concept before full-scale deployment. Expanding these initiatives is critical for fostering a vibrant GovTech startup ecosystem.</p>

<h2>Bridging the Digital Divide: Inclusivity Beyond Access</h2>
<ul>
<li><strong>Language and literacy barriers:</strong> Many GovTech services remain available primarily in English or Hindi, excluding hundreds of millions more comfortable in regional languages. Incorporating multilingual UI/UX design is vital.</li>
<li><strong>Network Constraints:</strong> Low-bandwidth or intermittent internet access remains common in rural and remote regions. Hence, apps designed with offline-first capabilities or SMS-based services better serve these users.</li>
<li><strong>Cultural and trust factors:</strong> Adoption depends heavily on social trust and community endorsement. States and NGOs working alongside technology providers to promote digital literacy and trust-building can improve usage.</li>
</ul>
<p>Inclusion demands more than infrastructure; it requires intentional design and outreach geared toward the most disadvantaged populations, ensuring GovTech’s benefits reach all strata of society.</p>

<h3>Why These Overlooked Factors Matter</h3>
<p>Addressing GovTech’s hidden challenges shifts the conversation from flashy apps to sustainable systems that deliver real, wide-ranging impact. A truly digital government goes beyond convenience—it is a catalyst for equity, efficiency, and transparency.</p>
<ul>
<li><strong>For founders:</strong> Understanding these layers helps create products aligned with real constraints and opportunities in public sector contexts.</li>
<li><strong>For policymakers:</strong> Prioritizing interoperability, procurement reform, and inclusion creates an enabling environment for innovation that maximizes taxpayer value.</li>
<li><strong>For citizens:</strong> A seamless, inclusive digital experience enhances trust and participation in governance itself.</li>
</ul>
<p>India has the potential to pioneer a new paradigm in GovTech, breaking traditional molds through thoughtful integration and people-centric design. Recognizing and tackling these “unspoken” obstacles is the key to unlocking that future.</p>

<h3>Actionable Takeaways</h3>
<ul>
<li>Advocate for and contribute to interoperable data standards like DEPA.</li>
<li>Push for procurement reforms offering flexibility for startups and innovation.</li>
<li>Champion inclusive design tailored to diverse linguistic and infrastructural realities.</li>
<li>Collaborate across sectors—government, startups, NGOs—to build trust and adoption pathways.</li>
</ul>
<p>By focusing beyond the surface, GovTech in India can evolve from isolated projects to a truly connected, inclusive ecosystem empowering every citizen with the promise of digital governance.</p>
        `
      },
      'custom-software-mistakes': {
        id: 'custom-software-mistakes',
        title: 'What Founders Get Wrong About Custom Software',
        excerpt: 'Custom software can be a game changer, but founders often make costly mistakes. Here’s how to avoid the most common pitfalls and build for sustainable growth.',
        category: 'Development',
        image: api,
        content: `
<h2>What Founders Get Wrong About Custom Software</h2>
<p>In the startup ecosystem, custom software development is often seen as a silver bullet for competitive advantage—a way to build exactly what the business needs without compromise. While custom solutions can indeed serve as powerful differentiators, founders frequently make critical mistakes that turn these supposed assets into costly liabilities. Understanding these common errors and learning how to approach custom software pragmatically can save startups time, money, and significant headaches down the road.</p>

<h3>Mistake 1: Treating Custom Software as a Long-Term Asset Without Considering Maintenance</h3>
<p>Founders often assume once custom software is built, it becomes a lasting asset that appreciates in value independent of further work. In reality, custom software requires:</p>
<ul>
<li>Ongoing maintenance to fix bugs and patch security vulnerabilities.</li>
<li>Regular updates to stay compatible with changing platforms and integrations.</li>
<li>Continuous enhancement to meet evolving user needs and market changes.</li>
</ul>
<p>Neglecting these inevitable costs leads to technical debt, where outdated or poorly designed software slows growth and adds operational risk. Viewing custom code as a fixed asset, rather than a dynamic product requiring stewardship, is a fundamental misunderstanding.</p>

<h3>Mistake 2: Ignoring Mature Off-the-Shelf Solutions for Non-Core Needs</h3>
<p>Many founders rush into custom builds for functionalities already well-addressed by SaaS or open-source solutions. Billing, payments, CRMs, analytics, and communication tools often have modular, configurable software that is:</p>
<ul>
<li>Faster to deploy.</li>
<li>Cost-effective compared to building from scratch.</li>
<li>Supported with continual updates and security management.</li>
</ul>
<p>The majority of startups can leverage off-the-shelf SaaS for these components and focus custom development strictly on unique, revenue-generating differentiators. Overbuilding drives up costs and increases time-to-market unnecessarily.</p>

<h3>Mistake 3: Underestimating Timeline and Staffing Requirements</h3>
<p>Custom software projects regularly exceed planned timelines and budgets due to unforeseen complexities, changing scopes, and technical challenges. Founders often:</p>
<ul>
<li>Underestimate the time needed for architecture, development, testing, and deployment.</li>
<li>Fail to allocate dedicated internal resources with software and product management expertise.</li>
<li>Overlook the importance of iterative development, preferring “big bang” launches that delay user feedback.</li>
</ul>
<p>This results in missed market windows, frustrated teams, and sometimes abandoned projects. Adopting agile methodologies and incremental releases helps manage risks and keeps builds aligned with user needs.</p>

<h3>Mistake 4: Lack of Scalability and Technical Architecture Planning</h3>
<p>Cheap development outsourcing or quick MVP launches are usually not built for scale. As the user base grows, errors like:</p>
<ul>
<li>System crashes under load.</li>
<li>Slow response times degrading user experience.</li>
<li>Data inconsistencies and security vulnerabilities</li>
</ul>
<p>become more frequent. Scalable architecture needs to be designed upfront, even if costly initially, to avoid expensive refactors or platform migrations later on. Working with experienced engineers and emphasizing clean, modular codebases is critical.</p>

<h3>How to Approach Custom Software the Right Way</h3>
<ul>
<li>Use SaaS whenever possible: Leverage platforms like Stripe for payments, HubSpot for CRM, and Google Analytics for metrics.</li>
<li>Build custom only for core differentiators: Save engineering for features that directly drive unique value or competitive edge.</li>
<li>Emphasize strong project management: Use product managers, frequent check-ins, and detailed specs to keep development on track.</li>
<li>Plan for maintenance and scalability: Document code thoroughly and invest in infrastructure that supports growth.</li>
<li>Incorporate user feedback early and often: Release minimum viable versions and iterate based on real-world usage.</li>
</ul>

<h3>Why This Matters</h3>
<p>Custom software can be a game changer if done thoughtfully but remains one of the leading causes of startup struggle when mismanaged. By understanding the common pitfalls and adopting a balanced mindset toward build vs buy, startup founders can harness technology as a sustainable growth engine rather than a drain on resources.</p>
        `
      },
      'design-for-action-ux': {
        id: 'design-for-action-ux',
        title: 'Design for Action: How Great UX Drives Better Decisions',
        excerpt: 'Great UX is about shaping behavior, not just aesthetics. Learn how design can drive better user decisions and business outcomes.',
        category: 'UX & Design',
        image: inter,
        content: `
<h2>Understanding the Psychology Behind UX and Decision Making</h2>
<p>Human decision-making is complex, often driven more by emotion, habit, and cognitive biases than cold rationality. UX design informed by behavioral science can nudge users towards positive outcomes by reducing friction and providing clarity.</p>
<ul>
<li><strong>Cognitive Load Reduction:</strong> Simplifying interfaces and removing unnecessary elements reduces mental effort, making desired actions feel easier to take.</li>
<li><strong>Social Proof and Trust Signals:</strong> Displaying reviews, testimonials, or usage stats builds confidence, encouraging commitment.</li>
<li><strong>Choice Architecture:</strong> Presenting options thoughtfully helps avoid decision paralysis and guides users towards preferred choices.</li>
</ul>
<p>Microcopy—the small bits of text in buttons, tooltips, or error messages—is a powerful vehicle for reducing anxiety and uncertainty by setting expectations and addressing user concerns.</p>

<h3>Real-World Examples of Action-Oriented UX</h3>
<h4>Health Apps Encouraging Habits</h4>
<p>Popular health apps use gamification and progress indicators (e.g., daily step streaks) to motivate users to establish healthy routines rather than rely on willpower alone. Subtle prompts and rewards turn abstract goals into tangible, ongoing tasks.</p>
<h4>Financial Services Simplifying Complex Choices</h4>
<p>Fintech apps provide default portfolio recommendations or simplified investment options tailored to risk appetite. This removes overwhelming jargon and presents users tailored paths, increasing likelihood of engagement and trust.</p>
<h4>E-Commerce Designs Reducing Friction</h4>
<p>Simplified checkout processes, auto-filled forms, and transparent shipping information reduce barriers that often cause cart abandonment. Clear call-to-action buttons with action verbs and countdown timers drive urgency while avoiding pushiness.</p>

<h3>Building Trust Through Design</h3>
<ul>
<li>Consistent branding, color schemes, and layout reassure users they remain within a trusted environment.</li>
<li>Easy-to-find privacy policies and transparent data handling statements further build confidence.</li>
<li>Responsive design ensures accessibility across devices, reducing frustration.</li>
</ul>
<p>Great UX is not just aesthetics, it is a strategic growth driver embedded at every interaction point.</p>

<h3>Principles for Founders and Designers to Drive Action</h3>
<ul>
<li>Start with the Desired Action: Define the key decision or behavior you want prior to designing navigation or screens. Let this goal shape every element.</li>
<li>Minimize Barriers: Remove unnecessary clicks or form fields. Use defaults wisely so users grasp the best choice without overthinking.</li>
<li>Use Clear and Consistent Language: Avoid jargon, explain benefits simply, and reassure users about steps they take.</li>
<li>Test Extensively with Real Users: Usability testing reveals blockers and confusion points that analytics alone miss. Incorporate feedback into iterative design cycles.</li>
<li>Leverage Data to Personalize: Tailor UX based on user preferences, history, or demographics to create relevant journeys.</li>
</ul>

<h3>Future Trends in UX Driving Decisions</h3>
<ul>
<li>Conversational UI and Voice Assistants: Natural language interfaces offer intuitive, low-friction pathways toward actions.</li>
<li>AI-Powered Personalization: Predictive UX customizes content and suggestions to individual users, enhancing relevance.</li>
<li>Ethical Design Emphasizing Transparency: As awareness grows, users expect honesty in nudges and data use, pushing designers toward ethically responsible experiences.</li>
</ul>

<h3>Conclusion</h3>
<p>Designing for action means going beyond visual appeal to deeply understand human psychology and user context. When UX embraces this mindset, it transforms passive users into engaged decision-makers, accelerating business outcomes while creating delightful, trusted experiences.</p>
        `
      },
      'chatbot-era-automation': {
        id: 'chatbot-era-automation',
        title: 'The Chatbot Era: Foundations of Automation',
        excerpt: 'Automation in India is evolving from chatbots to intelligent, embedded systems. Here’s how startups can prepare for the next wave.',
        category: 'Automation',
        image: companyLogo,
        content: `
<h2>The Chatbot Era: Foundations of Automation</h2>
<p>Initial automation efforts heavily relied on chatbots to handle routine, repetitive queries. These early bots:</p>
<ul>
<li>Operated on scripted decision trees with limited natural language understanding.</li>
<li>Improved customer response times and reduced call center loads.</li>
<li>Struggled with complex, ambiguous requests requiring human intervention.</li>
</ul>
<p>While chatbots laid the groundwork for automation, their capabilities remain narrowly focused on reactionary customer service tasks.</p>

<h3>Stage Two: AI-Powered Assistants and Context Awareness</h3>
<p>Advances in natural language processing (NLP) and machine learning ushered in AI-powered virtual assistants that understand context, tone, and history. Unlike simple bots, these systems:</p>
<ul>
<li>Integrate with enterprise software like CRMs and ERPs to access relevant data.</li>
<li>Personalize interactions based on user profiles and past behavior.</li>
<li>Handle multi-turn conversations and escalate only complex issues to humans.</li>
</ul>
<p>Examples include voice assistants integrated into banking apps or HR onboarding chatbots that guide employees through benefits enrollment.</p>

<h3>Stage Three: Invisible Automation Embedded in Workflows</h3>
<p>The future lies in automation that works invisibly behind the scenes, augmenting human decision-making and streamlining business processes without explicit user commands. Key developments include:</p>
<ul>
<li>AI-driven invoice approvals matching purchase orders to reduce manual audits.</li>
<li>Predictive analytics suggesting optimal inventory levels to prevent stock-outs.</li>
<li>Automated candidate shortlisting using historic hiring data and skills assessments.</li>
<li>Intelligent routing of customer tickets based on urgency and agent availability.</li>
</ul>
<p>This stage dramatically reduces human effort on repetitive tasks, allowing focus on higher-value activities.</p>

<h3>Stage Four: Cognitive Automation and Decision Intelligence</h3>
<p>The most advanced stage goes beyond execution to cognitive automation—systems that simulate human judgment to recommend optimal decisions by:</p>
<ul>
<li>Analyzing large volumes of structured and unstructured data for insights.</li>
<li>Learning continuously from outcomes to improve predictions.</li>
<li>Collaborating with humans through explainable AI to build trust.</li>
</ul>
<p>Use cases include:</p>
<ul>
<li>AI-guided supply chain reconfiguration responding dynamically to disruptions.</li>
<li>Real-time policy simulation tools aiding government decision-makers.</li>
<li>Fraud detection systems identifying anomalies across financial transactions proactively.</li>
</ul>
<p>These platforms transform automation from task execution into strategic intelligence.</p>

<h3>Preparing for The Automation Future in India</h3>
<ul>
<li>Broaden perceptions beyond chatbots: Founders and business leaders must envision automation as an end-to-end augmentation tool, not only customer service assistants.</li>
<li>Invest in interoperable AI and API infrastructure: Scalable automation requires seamless connections between data sources and workflows.</li>
<li>Adopt ethical AI frameworks: Automation systems should respect privacy, accountability, and mitigate bias — especially crucial in sensitive public sector and financial use cases.</li>
<li>Upskill workforce: Human teams need training to work effectively alongside AI, focusing on decision validation and exception handling.</li>
<li>Encourage innovation ecosystems: Partnerships between startups, academia, and government spur new cognitive automation applications.</li>
</ul>

<h3>Conclusion</h3>
<p>Automation in India is transitioning from visible chatbots toward embedded, intelligent systems that elevate human decision-making at scale. The future belongs to those who embrace this broader automation paradigm and invest strategically in technology, ethics, and talent development. Winning startups will integrate cognitive automation deeply into customer journeys and corporate workflows, creating new value while enhancing trust and user experience.</p>
        `
      }
    };

    if (id && blogPosts[id]) {
      setPost(blogPosts[id]);
    }
  }, [id]);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterSubmitting(true);
    setNewsletterResult('Sending...');
    try {
      const payload = new FormData();
      payload.append('access_key', '8cf5247d-b96a-4f34-a3ab-b5990f93409d'); // Use your real access key
      payload.append('email', newsletterEmail);
      payload.append('subject', 'Newsletter Signup');
      payload.append('message', 'Newsletter signup from blog post page.');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });

      const data = await res.json();

      if (data.success) {
        setNewsletterResult('');
        setNewsletterEmail('');
        setShowNewsletterThankYou(true);
      } else {
        setNewsletterResult(data.message || 'Submission failed');
      }
    } catch (err) {
      setNewsletterResult('Network error, please try again.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

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
    <>
      {/* Thank You Modal for Newsletter */}
      {showNewsletterThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4">
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={() => setShowNewsletterThankYou(false)}></div>
          <div className="relative morph-card glare-card p-8 md:p-10 text-center max-w-md w-full animate-fade-in-up"
            style={{
              background: 'var(--card-bg)',
              border: '2px solid var(--card-border)',
              boxShadow: '0 0 30px rgba(var(--accent-primary-rgb), 0.3)'
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mx-auto flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 neon-glow" style={{ color: 'var(--text-primary)' }}>Thank You!</h3>
            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
              You have successfully subscribed to our newsletter.
            </p>
            <button
              onClick={() => setShowNewsletterThankYou(false)}
              className="liquid-button px-8 py-3 font-semibold glare-effect text-base magnetic-effect"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                color: 'var(--bg-secondary)'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="min-h-screen pt-20 pb-20" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300 hover:scale-105"
              style={{ borderColor: 'var(--card-border)', color: 'var(--text-primary)', background: 'var(--card-bg)' }}>
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button> */}
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
                  className="prose prose-lg max-w-none blog-content enhanced-blog-content"
                  style={{ 
                    color: 'var(--text-primary)',
                    textAlign: 'justify'
                  }}
                  dangerouslySetInnerHTML={{ __html: enhanceBlogContent(post.content) }}
                ></div>
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
                  <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                      style={{
                        background: 'var(--bg-secondary)',
                        borderColor: 'var(--card-border)',
                        color: 'var(--text-primary)'
                      }}
                      value={newsletterEmail}
                      onChange={e => setNewsletterEmail(e.target.value)}
                      required
                      disabled={newsletterSubmitting}
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105"
                      style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', color: 'var(--bg-primary)' }}
                      disabled={newsletterSubmitting}
                    >
                      {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                    {newsletterResult && (
                      <div className="mt-2 text-sm" style={{ color: 'var(--accent-primary)' }}>
                        {newsletterResult}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
// --- Add this helper at the very end of the file, outside BlogPost ---

function enhanceBlogContent(html: string) {
  // Highlight important sections and add custom formatting
  html = html.replace(/(<h3>.*?Actionable Takeaways.*?<\/h3>)/gi, '<div class="callout-box callout-action">$1');
  html = html.replace(/(<h3>.*?Conclusion.*?<\/h3>)/gi, '<div class="callout-box callout-conclusion">$1');
  html = html.replace(/(<h2>.*?<\/h2>)/gi, '<span class="highlight-heading">$1</span>');
  html = html.replace(/(<h3>.*?<\/h3>)/gi, '<span class="highlight-subheading">$1</span>');
  html = html.replace(/(<h4>SEO keyword angle:<\/h4>)/gi, '<span class="highlight-seo">$1</span>');
  html = html.replace(/(<em>.*?<\/em>)/gi, '<span class="highlight-seo">$1</span>');

  // Custom bullet icons for <ul>
  html = html.replace(/<ul>/g, '<ul class="custom-bullets">');
  html = html.replace(/<li>/g, '<li><span class="bullet-icon">✔️</span> ');

  // Callout box closing after actionable/conclusion sections
  html = html.replace(/(<\/ul>)/g, '$1</div>');

  // Blockquotes for impactful statements
  html = html.replace(/<p>([^<]*?\bAI isn’t\b[^<]*?)<\/p>/gi, '<blockquote class="impact-quote">$1</blockquote>');

  // Highlight actionable steps in ordered lists
  html = html.replace(/<ol>/g, '<ol class="action-steps">');
  html = html.replace(/<li>/g, '<li><span class="step-icon">👉</span> ');

  return html;
}