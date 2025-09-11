import React, { useEffect, useRef, useState } from 'react';
import { Shield, Award, TrendingUp, Zap, Users, Code, Brain, Palette, Smartphone } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

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
          To build <span className="text- font-semibold">intelligent, future-ready</span> technology that actively solves real problems—beautifully, securely, and with measurable impact.
        </>
      ),
    },
    {
      title: 'Our Vision',
      description: (
        <>
          To become the <span className="text-[#ff6a3d] font-semibold">go-to tech team</span> for founders, enterprises, and governments looking to integrate <span className="text-[#ff6a3d] font-semibold">smart systems</span> into their digital stack.
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
    <div className="pt-16"
      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
    >
      {/* Hero Section */}
      <section className="relative mt-10 min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 z-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About CodeWave"
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
              style={{ minHeight: 320, minWidth: 320, background: 'var(--bg-primary)' }}
            />
          </div>
          {/* Right: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8"
              style={{ color: 'var(--text-primary)', lineHeight: 1.1 }}>
              We’re not just another tech company —<br className="hidden md:block" />
              we’re your innovation partner
            </h1>
            <p className="text-xl mb-10 max-w-xl font-medium"
              style={{ color: 'var(--text-secondary)' }}>
              At CodeWave.it, we build smart, scalable, and meaningful digital solutions that power startups, scale-ups, and public-sector teams alike. Whether it’s a sleek product for a growing SaaS startup or a secure platform for law enforcement — we treat every line of code like it matters. Because it does.
            </p>
            <div className="flex gap-6">
              <button
                className="px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-200"
                style={{
                  background: 'linear-gradient(to right, var(--accent-secondary), var(--accent-primary))',
                  color: 'var(--text-primary)',
                  boxShadow: '0 4px 24px 0 var(--accent-primary)'
                }}
              >
                Our Mission
              </button>
              <button
                className="px-8 py-3 rounded-full font-semibold text-lg border-2 transition-all duration-200"
                style={{
                  borderColor: 'var(--accent-secondary)',
                  color: 'var(--accent-secondary)',
                  background: 'transparent'
                }}
              >
                See Our Work
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
          <h2 className="text-center text-3xl font-extrabold mb-12 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            OUR MISSION & VISION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {missionVision.map((item, idx) => (
              <div key={idx}
                className="rounded-3xl p-10 border shadow-xl bg-opacity-80 backdrop-blur-md transform transition-transform duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl group"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent-primary)] transition-colors duration-300">{item.title}</h3>
                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="py-16 md:py-24 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-center text-3xl font-extrabold mb-12 tracking-tight" style={{ color: 'var(--text-primary)' }}>What We Value</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {values.map((value, idx) => (
              <SpotlightCard
                key={idx}
                className="custom-spotlight-card rounded-3xl p-8 border flex flex-col items-center text-center shadow-lg bg-opacity-80 backdrop-blur-md transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl group"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">{value.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{value.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-center text-3xl font-extrabold mb-12 tracking-tight" style={{ color: 'var(--text-primary)' }}>Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {industries.map((industry, idx) => (
              <div key={idx}
                className="rounded-3xl p-8 border flex flex-col items-start shadow-lg bg-opacity-80 backdrop-blur-md transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl group"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">{industry.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Work With Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--accent-secondary)/10] relative">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-2">
              <svg className="w-8 h-8 text-[var(--accent-primary)] animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.88 3.549A9 9 0 1021 12.001M19.07 4.93A9 9 0 0112 21a9 9 0 01-7.07-16.07" /></svg>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] select-none">
                Technologies We Work With
              </h2>
            </div>
            <p className="text-center mb-4 text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              Modern tools for modern problems. We stay current with the latest tech to deliver high-performing, scalable, and secure digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {technologies.map((tech, idx) => (
              <div key={idx}
                className="rounded-3xl p-7 border shadow-xl bg-white/10 backdrop-blur-lg border-[var(--accent-primary)] hover:border-[var(--accent-secondary)] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--card-bg) 80%, var(--accent-secondary) 100%)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-semibold text-xs tracking-wider uppercase animate-fade-in">
                    {tech.group}
                  </span>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-sm pl-2 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-[var(--accent-primary)]" style={{ color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[var(--accent-primary)] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--accent-secondary)] opacity-10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;