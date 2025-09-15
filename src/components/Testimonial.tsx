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
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" 
            style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} 
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="morph-card glare-card p-8 md:p-12 hover-lift-premium"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                border: '4px solid var(--bg-secondary)'
              }}>
              <Quote className="w-8 h-8 text-white" />
            </div>

            <div className="flex flex-col items-center">
              <img 
                src={testimonials[current].image} 
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full mb-6 object-cover ring-4"
                style={{ ringColor: 'var(--accent-primary)' }}
              />
              <p className="text-lg md:text-xl leading-relaxed text-center max-w-2xl mb-8"
                style={{ color: 'var(--text-secondary)' }}>
                "{testimonials[current].content}"
              </p>
              <h3 className="text-xl font-bold mb-2 neon-glow"
                style={{ color: 'var(--text-primary)' }}>
                {testimonials[current].name}
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>{testimonials[current].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ 
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)'
              }}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ 
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)'
              }}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
