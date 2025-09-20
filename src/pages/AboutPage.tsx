import React, { useEffect, useRef, useState } from 'react';
import { Shield, Award, TrendingUp, Zap, Users, Code, Brain, Palette, Smartphone } from 'lucide-react';
import HeroBG from '../assets/AboutBG.png'
const AboutPage: React.FC = () => {
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

  const missionVision = [
    {
      title: 'Our Mission',
      description: (
        <>
          To build <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>intelligent, future-ready</span> technology that actively solves real problems—beautifully, securely, and with measurable impact.
        </>
      ),
    },
    {
      title: 'Our Vision',
      description: (
        <>
          To become the <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>go-to tech team</span> for founders, enterprises, and governments looking to integrate <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>smart systems</span> into their digital stack.
        </>
      ),
    },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clarity over complexity',
      description: 'We believe in simple, elegant solutions that solve real problems effectively.'
    },
    {
      icon: Users,
      title: 'Human-first design',
      description: 'Technology should adapt to humans, not the other way around.'
    },
    {
      icon: Brain,
      title: 'Practical use of AI',
      description: 'We leverage AI to enhance productivity and creativity, not replace human ingenuity.'
    },
    {
      icon: Shield,
      title: 'Trust, security, and transparency',
      description: 'We build with integrity and prioritize data security in everything we create.'
    },
    {
      icon: Award,
      title: 'Results, not just deliverables',
      description: 'We measure success by the impact our solutions have on your business.'
    },
  ];

  const industries = [
    { icon: TrendingUp, title: 'Startups & Scaleups', description: 'Scalable products, dashboards, MVPs, and automation.' },
    { icon: Shield, title: 'Government & Law Enforcement', description: 'Secure digital tools for complaint handling, reporting, and citizen services.' },
    { icon: Zap, title: 'Logistics & Delivery', description: 'AI-powered coordination apps, GPS, and ETAs.' },
    { icon: Award, title: 'Fintech & Professional Services', description: 'Data-secure platforms, dashboards, and responsive web.' },
    { icon: Palette, title: 'Education & eLearning', description: 'Mobile-first apps and portals for interactive learning.' },
    { icon: Smartphone, title: 'Healthcare & Wellness', description: 'Secure portals, appointment systems, and data-centric reporting.' },
  ];

  const technologies = [
    {
      group: 'Frontend',
      items: ['React JS', 'HTML5', 'CSS3', 'TailwindCSS', 'Vue.js'],
    },
    {
      group: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'Firebase'],
    },
    {
      group: 'Mobile',
      items: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
    },
    {
      group: 'AI & Automation',
      items: ['OpenAI (GPT-4)', 'LangChain', 'Pinecone', 'Python', 'Zapier'],
    },
    {
      group: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase'],
    },
    {
      group: 'APIs',
      items: ['REST', 'GraphQL', 'WhatsApp API', 'Google APIs'],
    },
    {
      group: 'CMS & Hosting',
      items: ['Strapi', 'WordPress', 'Vercel', 'Netlify', 'AWS', 'Google Cloud'],
    },
    {
      group: 'Design',
      items: ['Figma', 'Adobe XD', 'Sketch', 'Framer'],
    },
  ];

  // Mission & Vision Section with animation
  const missionVisionRef = useRef<HTMLDivElement>(null);
  const [missionVisible, setMissionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMissionVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (missionVisionRef.current) {
      observer.observe(missionVisionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16" style={{color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="relative mt-10 min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay container */}
        <div className="absolute inset-0">
          {/* Main background image */}
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: HeroBG ? `url(${HeroBG})` : 'none' }}
          />
          
          {/* Gradient overlays - uncomment and adjust as needed */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(7,20,39,0.8)] via-[rgba(7,20,39,0.85)] to-[rgba(0,174,239,0.35)]" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,20,39,0.95)] via-transparent to-[rgba(7,20,39,0.75)]" /> */}
          
          {/* Accent glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
            style={{ background: 'linear-gradient(135deg, var(--accent-primary), transparent)' }}
          />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'linear-gradient(135deg, transparent, var(--accent-secondary))' }}
          />
        </div>

        {/* Content container */}
        <div className="container relative z-[2] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
              <span className="text-white drop-shadow-lg block mb-4">
                We're not just another tech company —
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] drop-shadow-lg">
                we're your innovation partner
              </span>
            </h1>
            
            <p className="text-xl mb-10 max-w-2xl font-medium text-gray-200">
              At CodeWave.it, we build smart, scalable, and meaningful digital solutions that power startups, scale-ups, and public-sector teams alike. Whether it's a sleek product for a growing SaaS startup or a secure platform for law enforcement — we treat every line of code like it matters. Because it does.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(var(--accent-primary-rgb), 0.3)'
                }} onClick={() => window.location.href = '/contact'}
              >
                Partner With Us
              </button>
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                style={{
                  borderColor: 'var(--accent-primary)',
                  color: 'white',
                  background: 'rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => window.location.href = '/contact'}
              >
                See The Impact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div
          ref={missionVisionRef}
          className={`container mx-auto px-4 sm:px-8 lg:px-16 transition-all duration-1000 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-center text-3xl font-extrabold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Driving Innovation: Our Pursuit & Purpose
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {missionVision.map((item, idx) => (
              <div key={idx}
                className="rounded-3xl p-10 border shadow-2xl backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group relative overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 20px 40px rgba(var(--accent-primary-rgb), 0.1)'
                }}
              >
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(var(--accent-primary-rgb), 0.05), transparent)' }}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent-primary)] transition-colors duration-300">{item.title}</h3>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-center text-3xl font-extrabold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>What We Value</h2>
          <div className="w-24 h-1 mx-auto mb-12 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-8 border flex flex-col items-center text-center shadow-xl backdrop-blur-md transform transition-all duration-500 hover:scale-110 hover:shadow-2xl group relative overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 15px 30px rgba(var(--accent-primary-rgb), 0.08)'
                }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">{value.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-center text-3xl font-extrabold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>Industries We Serve</h2>
          <div className="w-24 h-1 mx-auto mb-12 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {industries.map((industry, idx) => (
              <div key={idx}
                className="rounded-3xl p-8 border flex flex-col items-start shadow-xl backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 15px 30px rgba(var(--accent-primary-rgb), 0.08)'
                }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
                  >
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">{industry.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Work With Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-4" style={{ color: 'var(--text-primary)' }}>
              Technologies We Work With
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />
            <p className="text-center text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Modern tools for modern problems. We stay current with the latest tech to deliver high-performing, scalable, and secure digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {technologies.map((tech, idx) => (
              <div key={idx}
                className="rounded-3xl p-7 border shadow-xl backdrop-blur-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 15px 30px rgba(var(--accent-primary-rgb), 0.08)'
                }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full font-semibold text-xs tracking-wider uppercase"
                      style={{ 
                        background: 'rgba(var(--accent-primary-rgb), 0.15)', 
                        color: 'var(--accent-primary)' 
                      }}
                    >
                      {tech.group}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {tech.items.map((item, i) => (
                      <li key={i} className="text-sm pl-4 relative" style={{ color: 'var(--text-secondary)' }}>
                        <span 
                          className="absolute left-0 top-2 w-2 h-2 rounded-full"
                          style={{ background: 'var(--accent-primary)' }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div 
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: 'var(--accent-primary)' }}
          />
          <div 
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: 'var(--accent-secondary)' }}
          />
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;