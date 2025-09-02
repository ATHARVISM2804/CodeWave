import React, { useEffect, useRef, useState } from 'react';
import { Shield, Award, TrendingUp, Zap, Users, Code, Brain, Palette, Smartphone } from 'lucide-react';

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
          To build <span className="text-[#ff6a3d] font-semibold">intelligent, future-ready</span> technology that actively solves real problems—beautifully, securely, and with measurable impact.
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

  return (
    <div className="pt-16"
      style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
    >
      {/* Hero Section */}
      <section className="relative mt-10 min-h-[70vh] flex items-center justify-center overflow-hidden">
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
              At CodeWave.ai, we build smart, scalable, and meaningful digital solutions that power startups, scale-ups, and public-sector teams alike. Whether it’s a sleek product for a growing SaaS startup or a secure platform for law enforcement — we treat every line of code like it matters. Because it does.
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
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold mb-8"
            style={{ color: 'var(--accent-primary)' }}>
            OUR MISSION & VISION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionVision.map((item, idx) => (
              <div key={idx}
                className="rounded-2xl p-8 border"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>What We Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, idx) => (
              <div key={idx}
                className="rounded-2xl p-8 border flex flex-col items-center text-center"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))'
                  }}>
                  <value.icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx}
                className="rounded-2xl p-8 border flex flex-col items-start"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))'
                  }}>
                  <industry.icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Work With Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>Technologies We Work With</h2>
          <p className="text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
            Modern tools for modern problems. We stay current with the latest tech to deliver high-performing, scalable, and secure digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, idx) => (
              <div key={idx}
                className="rounded-2xl p-6 border"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--accent-primary)' }}>{tech.group}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;