import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "John Doe",
    role: "CEO, Tech Corp",
    content: "CodeWave transformed our digital presence. Their expertise in web development is unmatched!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director",
    content: "Working with CodeWave was a game-changer for our company. They delivered beyond our expectations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Startup Founder",
    content: "The team's attention to detail and technical prowess made our project a huge success.",
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'var(--accent-primary)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'var(--accent-secondary)' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            <span style={{ color: 'var(--text-primary)' }}>What Our</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              Clients Say
            </span>
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full" 
            style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} 
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-10 md:p-16 rounded-3xl transition-all duration-500 group"
            style={{ 
              background: 'linear-gradient(145deg, rgba(var(--card-bg-rgb), 0.75), rgba(var(--card-bg-rgb), 0.85))',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(var(--card-border-rgb), 0.5)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Metallic inner highlights */}
            <div className="absolute inset-0 rounded-2xl opacity-70"
              style={{ 
                background: 'linear-gradient(145deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                pointerEvents: 'none'
              }}
            ></div>
            
            {/* Subtle metallic edge effect */}
            <div className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15)',
                pointerEvents: 'none'
              }}
            ></div>
            
            {/* Animated glare effect on hover - more pronounced */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 overflow-hidden"
              style={{ pointerEvents: 'none' }}>
              <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-[-100%] group-hover:animate-[metallicGlare_1.5s_ease_forwards] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
            
            {/* Bold border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{ 
                boxShadow: `0 0 30px 2px rgba(var(--accent-primary-rgb), 0.4), inset 0 0 20px rgba(var(--accent-primary-rgb), 0.1)`,
                pointerEvents: 'none'
              }}
            ></div>
            
            {/* Quote icon with more metallic look */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500"
              style={{ 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                border: '4px solid rgba(var(--bg-secondary-rgb), 0.8)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
              }}>
              <Quote className="w-10 h-10 text-white drop-shadow-md" />
            </div>

            <div className="flex flex-col items-center relative z-10">
              {/* Profile image with metallic ring */}
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    transform: 'scale(1.15)',
                    opacity: 0.7,
                    filter: 'blur(5px)'
                  }}
                ></div>
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-24 h-24 rounded-full object-cover relative z-10 ring-2 group-hover:shadow-lg transition-all duration-500"
                  style={{ 
                    ringColor: 'rgba(var(--accent-primary-rgb), 0.7)',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(var(--accent-primary-rgb), 0.3)'
                  }}
                />
              </div>
              
              {/* Testimonial text with bolder styling */}
              <p className="text-xl md:text-2xl leading-relaxed text-center max-w-3xl mb-10 group-hover:text-[var(--text-primary)] transition-colors duration-500 font-medium"
                style={{ 
                  color: 'var(--text-secondary)', 
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}>
                "{testimonials[current].content}"
              </p>
              
              {/* Name with metallic underline effect */}
              <h3 className="text-2xl font-bold mb-2 relative inline-block"
                style={{ 
                  color: 'var(--text-primary)', 
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
                {testimonials[current].name}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
                  style={{ 
                    background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
                    boxShadow: '0 0 8px rgba(var(--accent-primary-rgb), 0.5)'
                  }}></div>
              </h3>
              
              {/* Role with metallic text effect */}
              <p className="text-lg" style={{ 
                color: 'var(--text-muted)',
                letterSpacing: '0.5px'
              }}>{testimonials[current].role}</p>
            </div>
          </motion.div>

          {/* Navigation buttons with metallic look */}
          <div className="flex justify-center mt-12 gap-6">
            <button
              onClick={prev}
              className="p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(145deg, rgba(var(--card-bg-rgb), 0.75), rgba(var(--card-bg-rgb), 0.85))',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 4px 10px rgba(0, 0, 0, 0.1)',
                color: 'var(--text-primary)'
              }}
            >
              <ArrowLeft className="w-7 h-7" />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(145deg, rgba(var(--card-bg-rgb), 0.75), rgba(var(--card-bg-rgb), 0.85))',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 4px 10px rgba(0, 0, 0, 0.1)',
                color: 'var(--text-primary)'
              }}
            >
              <ArrowRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Updated animation keyframe for metallic effect */}
      <style jsx>{`
        @keyframes metallicGlare {
          0% {
            transform: translateX(-100%) rotate(45deg);
            opacity: 0.7;
          }
          100% {
            transform: translateX(100%) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
