import React, { useEffect, useRef, useState } from "react";
import { Globe, Zap, Brain, Palette, Smartphone, Shield } from "lucide-react";

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2, rootMargin: "50px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Front-end & full-stack solutions built with cutting-edge frameworks. Fast, responsive and future-ready.",
      features: ["React/Next.js", "Node.js APIs", "Performance optimized"],
    },
    {
      icon: Zap,
      title: "Custom Software",
      description:
        "Tailored systems for unique operational challenges — built for scale and designed to last.",
      features: ["Scalable architecture", "API integrations", "Cloud deployment"],
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description:
        "Intelligent insights, automation, and predictive models — bringing artificial intelligence to real business problems.",
      features: ["Machine learning", "Data analysis", "Intelligent automation"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Experiences that convert and interfaces users love. Beautiful, functional and strategically designed.",
      features: ["User research", "Prototyping", "Design systems"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native iOS and Android applications plus cross-platform solutions — built with app store standards in mind.",
      features: ["React Native", "Native development", "App store optimization"],
    },
    {
      icon: Shield,
      title: "GovTech Solutions",
      description:
        "Secure, compliant, scalable solutions for government and public sector. Built for transparency and built to last.",
      features: ["Security compliant", "Scalable platforms", "Transparent processes"],
    },
  ];

  const handleToggle = (i: number) => {
    // toggle flip for mobile/tap
    setFlippedIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative"
      style={{  color: 'var(--text-primary)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block text-sm font-semibold mb-4 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ color: 'var(--accent-primary)' }}
          >
            OUR SERVICES
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ color: 'var(--text-primary)' }}
          >
            Engineering Intelligence Into Every Solution
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ color: 'var(--text-secondary)' }}
          >
            We craft advanced digital products and platforms with precision,
            performance, and purpose — designing for impact.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFlipped = flippedIndex === index;
            return (
              <div
                key={index}
                className={`perspective group relative w-full h-64 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 120}ms` }}
                onClick={() => handleToggle(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleToggle(index);
                }}
              >
                {/* inner card that actually flips */}
                <div
                  className={`card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
                    isFlipped ? "is-flipped" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div
                    className="card-face card-front absolute inset-0 rounded-2xl shadow-sleek dark:shadow-sleek-dark flex flex-col items-center justify-center p-6 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark border border-primary-light/10 dark:border-primary-dark/10"
                  >
                    <Icon className="w-12 h-12 mb-4 text-primary-light dark:text-primary-dark" />
                    <h3 className="text-2xl font-display font-bold">{service.title}</h3>
                  </div>

                  {/* BACK */}
                  <div
                    className="card-face card-back absolute inset-0 rounded-2xl shadow-sleek dark:shadow-sleek-dark p-6 text-left flex flex-col justify-start bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm text-text-light dark:text-text-dark border border-accent-light/20 dark:border-accent-dark/20">
                    <p className="text-lg mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-light dark:bg-primary-dark mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                    }}
                  >
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>

                    <ul className="space-y-2 text-sm">
                      {service.features.map((f, fi) => (
                        <li key={fi} className="flex items-center" style={{ color: 'var(--text-secondary)' }}>
                          <span className="w-2 h-2 rounded-full mr-2" style={{ background: 'var(--accent-primary)' }}></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
