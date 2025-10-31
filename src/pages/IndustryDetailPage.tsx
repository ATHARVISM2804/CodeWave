import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Award, GraduationCap, ArrowLeft, CheckCircle, Users, Code, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import CalendlyPopup from '../components/Calendlypopup';

// Map slugs to their respective icons and colors
const INDUSTRY_ICONS: Record<string, any> = {
  'startups-scaleups': { icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
  'government-law': { icon: Shield, color: 'from-green-500 to-emerald-500' },
  'logistics-delivery': { icon: Zap, color: 'from-purple-500 to-pink-500' },
  'fintech-professional': { icon: Award, color: 'from-orange-500 to-red-500' },
  'education-elearning': { icon: GraduationCap, color: 'from-indigo-500 to-blue-500' },
};

const INDUSTRY_DATA: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  caseStudies: Array<{title: string; description: string}>;
}> = {
  'startups-scaleups': {
    title: 'Startups & Scaleups',
    description: 'We help founders launch faster and scale smarter with MVPs, dashboards, automation, and AI-driven insights.',
    longDescription: 'For startups and scaling businesses, speed and flexibility are critical. We specialize in helping innovative companies validate ideas quickly, build standout products, and create technical foundations that can grow with your ambitions. Our solutions focus on rapid time-to-market without sacrificing quality or future scalability.',
    features: ['MVP Development', 'Growth Dashboards', 'Process Automation', 'AI Analytics'],
    challenges: [
      'Limited time and resources to validate market ideas',
      'Need to iterate quickly based on user feedback',
      'Technical architecture that can scale with growth',
      'Balancing innovation with operational efficiency'
    ],
    solutions: [
      'Rapid MVP development with core features only',
      'Data-driven dashboards for growth metrics',
      'Scalable cloud architecture built for future expansion',
      'AI-powered workflow automation to reduce operational overhead'
    ],
    caseStudies: [
      {
        title: 'FinTech Startup Launch',
        description: 'Helped a fintech startup go from concept to market in just 3 months with an MVP that secured their first 1,000 users.'
      },
      {
        title: 'E-commerce Scale-up',
        description: 'Built custom inventory management system that helped an e-commerce company scale from $1M to $10M in annual revenue.'
      }
    ]
  },
  // Add similar detailed content for other industries
  'government-law': {
    title: 'Government & Law Enforcement',
    description: 'We design secure GovTech platforms for complaint handling, citizen services, and internal workflows — built for trust and compliance.',
    longDescription: 'Government agencies and law enforcement bodies face unique challenges in digitizing services while maintaining strict security and compliance standards. We build robust, secure, and user-friendly systems that streamline complex bureaucratic processes, enhance transparency, and improve citizen engagement.',
    features: ['Complaint Portals', 'Citizen Services', 'Security Compliance', 'Audit-Ready Systems'],
    challenges: [
      'Strict security and compliance requirements',
      'Integration with legacy government systems',
      'Handling sensitive citizen data safely',
      'Creating accessible interfaces for all citizens'
    ],
    solutions: [
      'Secure, compliant platforms with audit logs',
      'Citizen service portals with accessibility features',
      'Workflow automation for administrative processes',
      'Legacy system integrations with modern APIs'
    ],
    caseStudies: [
      {
        title: 'Citizen Complaint System',
        description: 'Developed a secure portal for a police department that streamlined citizen complaint filing and reduced processing time by 60%.'
      },
      {
        title: 'Municipal Services Platform',
        description: 'Created a comprehensive digital services platform for a city government, enabling citizens to access 24 different services online.'
      }
    ]
  },
  'logistics-delivery': {
    title: 'Logistics & Delivery',
    description: 'Real-time GPS, AI-powered ETAs, and apps that keep deliveries on time and optimized.',
    longDescription: 'Modern logistics companies need real-time visibility, intelligent routing, and seamless communication between drivers, warehouses, and customers. Our solutions provide end-to-end tracking, optimized routes, and AI-powered prediction systems that keep your operations running at peak efficiency.',
    features: ['Real-time Tracking', 'Route Optimization', 'AI-powered ETAs', 'Fleet Management'],
    challenges: [
      'Real-time visibility across distributed operations',
      'Optimizing delivery routes for efficiency',
      'Accurate delivery time predictions',
      'Coordinating fleets of drivers and vehicles'
    ],
    solutions: [
      'GPS tracking systems with real-time dashboard',
      'AI-driven route optimization algorithms',
      'Predictive ETA models using machine learning',
      'Mobile apps for drivers with turn-by-turn navigation'
    ],
    caseStudies: [
      {
        title: 'Last-Mile Delivery Optimization',
        description: 'Helped a delivery company reduce fuel costs by 22% with AI-powered route optimization.'
      },
      {
        title: 'Fleet Management System',
        description: 'Built a comprehensive fleet management platform for a logistics company managing 500+ vehicles across 3 countries.'
      }
    ]
  },
  'fintech-professional': {
    title: 'Fintech & Professional Services',
    description: 'Data-secure platforms, client dashboards, and responsive apps for high-trust industries like finance, consulting, and legal.',
    longDescription: 'Financial services and professional consultancies require platforms that balance sophisticated functionality with ironclad security. We develop solutions that streamline complex financial workflows, protect sensitive data, and provide clients with intuitive self-service options.',
    features: ['Secure Platforms', 'Client Dashboards', 'Compliance Tools', 'Risk Management'],
    challenges: [
      'Handling highly sensitive financial data',
      'Compliance with industry regulations (GDPR, CCPA, etc.)',
      'Creating intuitive interfaces for complex financial products',
      'Integrating with banking and payment systems'
    ],
    solutions: [
      'End-to-end encrypted data storage and transmission',
      'Compliance-ready platforms with audit trails',
      'Custom client portals with personalized dashboards',
      'API integrations with major financial services providers'
    ],
    caseStudies: [
      {
        title: 'Investment Management Platform',
        description: 'Created a secure platform for financial advisors to manage $100M+ in client assets with automated reporting.'
      },
      {
        title: 'Legal Practice Management',
        description: 'Developed case management software for a law firm that increased billable hours by reducing administrative tasks.'
      }
    ]
  },
  'education-elearning': {
    title: 'Education & eLearning',
    description: 'Mobile-first learning platforms, LMS, and interactive student portals that keep education engaging and accessible.',
    longDescription: 'Educational institutions and eLearning providers need digital platforms that engage learners, track progress, and deliver content across multiple devices. We build learning management systems and educational apps that combine powerful administrative features with engaging student experiences.',
    features: ['Learning Management', 'Student Portals', 'Interactive Content', 'Mobile Learning'],
    challenges: [
      'Creating engaging digital learning experiences',
      'Supporting various content types and assessments',
      'Tracking student progress and performance',
      'Making education accessible on all devices'
    ],
    solutions: [
      'Custom learning management systems',
      'Interactive content delivery platforms',
      'Progress tracking and analytics dashboards',
      'Mobile-first learning applications'
    ],
    caseStudies: [
      {
        title: 'University Learning Platform',
        description: 'Built a comprehensive LMS for a university that increased student engagement and improved course completion rates by 35%.'
      },
      {
        title: 'Corporate Training System',
        description: 'Developed a training platform for a multinational corporation that streamlined onboarding and reduced training costs by 45%.'
      }
    ]
  },
};

const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? INDUSTRY_DATA[slug] : undefined;
  const iconData = slug ? INDUSTRY_ICONS[slug] : undefined;
  const [isVisible, setIsVisible] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false); // Add state for Calendly popup
  
  useEffect(() => {
    // Animation trigger
    setIsVisible(true);
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry || !iconData) {
    return (
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Industry Not Found</h1>
          <p style={{ color: 'var(--text-secondary)' }}>The industry you are looking for does not exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
            <ArrowLeft size={20} />
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const { icon: Icon, color } = iconData;

  return (
    <>
      <Helmet>
        <title>{industry.title} | CodeWave Solutions</title>
        <meta name="description" content={industry.description} />
      </Helmet>

      {/* Calendly Popup */}
      <CalendlyPopup
        url="https://calendly.com/careersparushapandey/30min"
        open={showCalendly}
        onClose={() => setShowCalendly(false)}
        title="Schedule a Consultation"
      />

      <div className="py-20 px-4" style={{ color: 'var(--text-primary)' }}>
        {/* Back navigation */}
        {/* <div className="container mx-auto mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm hover:bg-[var(--card-bg)] transition-all duration-300"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft size={16} />
            Back to Industries
          </Link>
        </div> */}

        <div className="container mt-10 mx-auto">
          {/* Hero Section */}
          <div className={`relative rounded-3xl overflow-hidden mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br" style={{ 
              background: `linear-gradient(135deg, var(--card-bg), rgba(var(--accent-primary-rgb), 0.1))`,
              backdropFilter: 'blur(20px)'
            }}></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center px-6 py-12 md:p-16 gap-8">
              {/* Icon */}
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-r ${color}`}>
                <Icon size={48} color="white" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {industry.title}
                </h1>
                <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                  {industry.description}
                </p>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Left sidebar */}
            <div className="md:col-span-1">
              <div className={`space-y-6 sticky top-28 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Features */}
                <div className="rounded-2xl p-6" style={{ 
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)'
                }}>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--accent-primary)' }}>KEY FEATURES</h3>
                  <ul className="space-y-3">
                    {industry.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} style={{ color: 'var(--accent-primary)' }} />
                        <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="rounded-2xl p-6 text-center bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                  <h3 className="text-lg font-bold mb-2 text-white">Ready to get started?</h3>
                  <p className="text-white/80 mb-4">Let's discuss your specific requirements</p>
                  <button 
                    className="w-full py-3 px-6 rounded-xl bg-white/20 text-white font-medium hover:bg-white/30 transition-colors"
                    onClick={() => setShowCalendly(true)}
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Overview</h2>
                <div className="prose prose-lg max-w-none" style={{ color: 'var(--text-secondary)' }}>
                  <p>{industry.longDescription}</p>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Challenges */}
                <div className="rounded-2xl p-6" style={{ 
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full" style={{ background: 'rgba(var(--accent-primary-rgb), 0.1)' }}>
                      <Lightbulb size={24} style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Challenges</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {industry.challenges.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-0.5" 
                          style={{ 
                            background: 'rgba(var(--accent-primary-rgb), 0.1)',
                            color: 'var(--accent-primary)'
                          }}>
                          {index + 1}
                        </span>
                        <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="rounded-2xl p-6" style={{ 
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)'
                }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full" style={{ background: 'rgba(var(--accent-primary-rgb), 0.1)' }}>
                      <Code size={24} style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Our Solutions</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {industry.solutions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Case Studies */}
              <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Case Studies</h2>
                
                <div className="space-y-6">
                  {industry.caseStudies.map((study, index) => (
                    <div key={index} className="rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer" style={{ 
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)'
                    }}>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full" style={{ background: 'rgba(var(--accent-primary-rgb), 0.1)' }}>
                          <Users size={24} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{study.title}</h4>
                          <p style={{ color: 'var(--text-secondary)' }}>{study.description}</p>
                          
                          <div className="mt-4 flex items-center">
                            <span className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>Read full case study</span>
                            <ArrowRight size={16} style={{ color: 'var(--accent-primary)' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Industries */}
              <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Explore Other Industries</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(INDUSTRY_DATA)
                    .filter(([key]) => key !== slug)
                    .slice(0, 3)
                    .map(([key, data]) => {
                      const RelatedIcon = INDUSTRY_ICONS[key].icon;
                      return (
                        <Link 
                          key={key} 
                          to={`/industries/${key}`}
                          className="rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                          style={{ 
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)'
                          }}
                        >
                          <RelatedIcon size={32} style={{ color: 'var(--accent-primary)' }} className="mb-3" />
                          <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{data.title}</h4>
                        </Link>
                      );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryDetailPage;
