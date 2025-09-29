import React, { useEffect, useRef } from "react";
import { Cpu, ShieldCheck, BarChart3, Award, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const navigate = useNavigate();

  // Updated icons and theme-matching gradients
  const features = [
    {
      icon: Cpu,
      title: "AI at the Core",
      description: "AI guides our design and development. Every solution designed to learn, adapt, and evolve.",
      color: "from-[var(--accent-primary)] to-[var(--accent-secondary)]",
      iconBg: "bg-[var(--accent-primary)]"
    },
    {
      icon: ShieldCheck,
      title: "Security by Design",
      description: "Every layer engineered with encryption, compliance, and resilience.",
      color: "from-green-500 to-[var(--accent-primary)]",
      iconBg: "bg-gradient-to-r from-green-500 to-[var(--accent-primary)]"
    },
    {
      icon: BarChart3,
      title: "Scale Without Fear",
      description: "From lean startups to government platforms — serving millions — our architecture is built to grow.",
      color: "from-[var(--accent-secondary)] to-cyan-400",
      iconBg: "bg-gradient-to-r from-[var(--accent-secondary)] to-cyan-400"
    },
    {
      icon: Award,
      title: "Trusted in High-Stakes",
      description: "Government contractors, high-growth startups, and mission-critical organizations trust us to deliver.",
      color: "from-purple-500 to-[var(--accent-secondary)]",
      iconBg: "bg-gradient-to-r from-purple-500 to-[var(--accent-secondary)]"
    },
    {
      icon: Target,
      title: "Real Impact, Measured",
      description: "We support targets, actionable what matters, and give you real numbers on performance.",
      color: "from-pink-500 to-[var(--accent-primary)]",
      iconBg: "bg-gradient-to-r from-pink-500 to-[var(--accent-primary)]"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotateX: 15, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sticky top-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold tracking-tight mb-3 leading-tight">
            <span style={{ color: "var(--text-primary)" }}>Why</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              CodeWave?
            </span>
          </h2>
          <p className="text-xl mb-28" style={{ color: 'var(--text-secondary)' }}>
            Building tomorrow's solutions with today's most advanced technology
          </p>
        </div>

        {/* Cards */}
        <div className="relative max-w-2xl mx-auto space-y-8">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el!)}
              className="p-8 rounded-3xl"
              style={{
                background: 'var(--card-bg)',
                border: '1.5px solid var(--card-border)',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(var(--accent-primary-rgb),0.08)'
              }}
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${feature.iconBg}`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>{feature.title}</h3>
                  <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            className="px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              color: 'white',
              boxShadow: '0 10px 25px rgba(var(--accent-primary-rgb), 0.3)'
            }}
            onClick={() => {
              navigate("/contact#contact-form");
              setTimeout(() => {
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};
export default WhyUsSection;