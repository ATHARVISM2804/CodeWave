import React, { useEffect, useRef } from "react";
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
      gif: 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NGtkMXNjdTlxNmx1bzI5Z2F3MzhwbnBlbGlqd3BpZW0zd2g4dHcyYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0hv8d4HrDVI6m7w7pF/giphy.gif',
      title: "AI at the Core",
      description: "AI guides our design and development. Every solution designed to learn, adapt, and evolve.",
      color: "from-[var(--accent-primary)] to-[var(--accent-secondary)]",
    },
    {
      gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmt2Zmc3azlnaXU4cmRsNGxtYXkzeDY1NmtqeHB0Mm8wdDNrd3YxdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RDZo7znAdn2u7sAcWH/giphy.gif',
      title: "Security by Design",
      description: "Every layer engineered with encryption, compliance, and resilience.",
      color: "from-green-500 to-[var(--accent-primary)]",
    },
    {
      gif: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJwbjNmbm9ycnNkNmx1NzYyMTVvZ3pxeTRidjJjazZlaDBlNjN4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6gbchrcNIt4Ma8Tu/giphy.gif',
      title: "Scale Without Fear",
      description: "From lean startups to government platforms — serving millions — our architecture is built to grow.",
      color: "from-[var(--accent-secondary)] to-cyan-400",
    },
    {
      gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZmNDlkNzBiNDFkZTUzOTIzOGNkYTU5ZmM5MzAzNjI4ZDUyNTc0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qE1YN7aBOFPRw8E/giphy.gif',
      title: "Trusted in High-Stakes",
      description: "Government contractors, high-growth startups, and mission-critical organizations trust us to deliver.",
      color: "from-purple-500 to-[var(--accent-secondary)]",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
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
           {/* Underline */}
          <div className="w-24 h-1 mx-auto rounded-full mb-6 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
          <p className="text-xl mb-28" style={{ color: 'var(--text-secondary)' }}>
            Building tomorrow's solutions with today's most advanced technology
          </p>
        </div>
        

        {/* Cards */}
        <div className="relative max-w-4xl mx-auto space-y-16">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el!)}
              className="p-12 rounded-3xl transform transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'var(--card-bg)',
                border: '1.5px solid var(--card-border)',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(var(--accent-primary-rgb),0.08)'
              }}
            >
              {/* Responsive Container */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* GIF Container - Full width on mobile, left side on desktop */}
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 flex-shrink-0">
                  <img 
                    src={feature.gif} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content - Centered on mobile, right side on desktop */}
                <div className="flex flex-col text-center lg:text-left lg:justify-center">
                  <h3 
                    className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mb-4"
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-xl leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feature.description}
                  </p>
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