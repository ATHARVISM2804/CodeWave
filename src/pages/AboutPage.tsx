import React, { useEffect, useRef, useState } from 'react';
import { Users, Target, Award, Lightbulb, Code, Brain, Shield, Zap } from 'lucide-react';

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

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & Lead AI Engineer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Google AI researcher with 12+ years in machine learning and intelligent systems.'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Head of Design & UX',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning designer who has crafted experiences for Fortune 500 companies.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Senior Full-Stack Developer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack expert specializing in scalable architectures and modern web technologies.'
    },
    {
      name: 'Priya Patel',
      role: 'GovTech Solutions Lead',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Government technology specialist with deep expertise in compliance and security.'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Intelligence First',
      description: 'We believe every solution should be smart, adaptive, and continuously learning.'
    },
    {
      icon: Shield,
      title: 'Security by Design',
      description: 'Security isn\'t an afterthought—it\'s built into every layer of our solutions.'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'We measure success by the real-world impact our solutions create for clients.'
    },
    {
      icon: Zap,
      title: 'Innovation Obsessed',
      description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.'
    }
  ];

  const milestones = [
    { year: '2019', event: 'CodeWave founded with a vision to merge AI with traditional development' },
    { year: '2020', event: 'First major GovTech contract secured, establishing our compliance expertise' },
    { year: '2021', event: 'Expanded to serve 50+ clients across 10 industries' },
    { year: '2022', event: 'Launched AI-powered development tools, reducing project timelines by 40%' },
    { year: '2023', event: 'Achieved 98% client satisfaction rate and 120+ successful project deliveries' },
    { year: '2024', event: 'Recognized as a leading intelligence studio in the tech industry' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                We're Not Just Developers.{' '}
                <span className="parallax-text neon-glow">We're Intelligence Architects.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At CodeWave, we merge human creativity with artificial intelligence to build software that doesn't just work—it thinks, adapts, and evolves with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={sectionRef} className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div>
                <div className="text-[#ff6a3d] text-sm font-semibold mb-4">OUR STORY</div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Born from Frustration with{' '}
                  <span className="text-[#ff6a3d]">Status Quo</span>
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    CodeWave was founded in 2019 when our team realized that most development shops were still building software the same way they did a decade ago—without intelligence, without adaptability, without real innovation.
                  </p>
                  <p>
                    We saw an opportunity to revolutionize how software is conceived, designed, and built. By integrating AI into every aspect of our development process, we create solutions that don't just meet today's requirements—they anticipate tomorrow's challenges.
                  </p>
                  <p>
                    Today, we're proud to be recognized as an intelligence studio that builds software that thinks, serving everyone from fast-growing startups to secure government platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="morph-card glare-card p-8 hover-lift-premium">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] rounded-xl flex items-center justify-center magnetic-effect">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 neon-glow">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To democratize intelligent software development, making AI-powered solutions accessible to businesses of all sizes while maintaining the highest standards of security, scalability, and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our Core Values
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              The principles that guide every decision, every line of code, and every client interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`morph-card glare-card p-8 hover-lift-premium magnetic-effect ripple-effect ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] rounded-xl flex items-center justify-center mb-6 magnetic-effect">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 neon-glow">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Meet the Intelligence Behind{' '}
              <span className="text-[#ff6a3d]">CodeWave</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              A diverse team of experts united by a passion for intelligent software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`morph-card glare-card overflow-hidden hover-lift-premium magnetic-effect ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 neon-glow">{member.name}</h3>
                  <p className="text-[#ff6a3d] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our Journey to Intelligence
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              Key milestones that shaped CodeWave into the intelligence studio we are today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff6a3d] to-[#ff8c42]"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start space-x-8 ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] rounded-full flex items-center justify-center font-bold text-white magnetic-effect glare-effect">
                      {milestone.year}
                    </div>
                    <div className="flex-1 morph-card glare-card p-6 hover-lift-premium">
                      <p className="text-gray-300 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Ready to Build Something{' '}
              <span className="text-[#ff6a3d]">Intelligent?</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              Let's discuss how we can bring intelligence to your next project.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <button className="liquid-button text-white px-8 py-4 font-semibold glare-effect text-lg magnetic-effect">
                Start Your Project
              </button>
              <button className="morph-card px-8 py-4 rounded-full font-semibold hover-lift-premium glare-card text-lg ripple-effect">
                Learn About Our Process
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;