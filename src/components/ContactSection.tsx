import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail, Calendar, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // <-- added: submission state + handler
  const [submitResult, setSubmitResult] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Add thank you popup state
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult('Sending...');

    try {
      const formEl = e.currentTarget;
      const payload = new FormData(formEl);

      // replace with your Web3Forms access key if desired
      payload.append('access_key', '8cf5247d-b96a-4f34-a3ab-b5990f93409d');
      // payload.append('access_key', '94eef6d5-373f-4730-b7a1-ac117be18f20');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });

      const data = await res.json();

      if (data.success) {
        setSubmitResult('');
        setShowThankYou(true); // Show thank you popup
        formEl.reset();
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setSubmitResult(data.message || 'Submission failed');
      }
    } catch (err) {
      setSubmitResult('Network error, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat instantly with our team',
      action: 'Start Chat',
      color: 'from-green-500 to-emerald-500',
      href: 'https://wa.me/+918929942819?text=Hello%20CodeWave%21%20I%20would%20like%20to%20discuss%20a%20project.' // phone from UI, replace if needed
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Our AI wants to chat with you',
      action: 'Chat Now',
      color: 'from-blue-500 to-cyan-500',
      href: '#live-chat'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Write to hello@codewave.it',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500',
      href: 'mailto:hello@codewave.it?subject=Website%20Inquiry'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a time slot for call',
      action: 'Book Call',
      color: 'from-orange-500 to-red-500',
      href: 'https://calendly.com/codewave/30min' // replace with real scheduling URL
    }
  ];

  const teamMembers = [
    'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
  ];

  const whyChooseUs = [
    'Expert team with 10+ years experience',
    'Cutting-edge tech solutions for modern challenges',
    'Dedicated support throughout your project'
  ];

  return (
    <>
      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4">
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={() => setShowThankYou(false)}></div>
          <div className="relative morph-card glare-card p-8 md:p-10 text-center max-w-md w-full animate-fade-in-up"
            style={{
              background: 'var(--card-bg)',
              border: '2px solid var(--card-border)',
              boxShadow: '0 0 30px rgba(var(--accent-primary-rgb), 0.3)'
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mx-auto flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 neon-glow" style={{ color: 'var(--text-primary)' }}>Thank You!</h3>
            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
              Your message has been received. We will get back to you soon!
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="liquid-button px-8 py-3 font-semibold glare-effect text-base magnetic-effect"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                color: 'var(--bg-secondary)'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section
        ref={sectionRef}
        className="py-20 relative z-0"
        style={{ color: 'var(--text-primary)' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs shadow-lg"
                style={{
                  borderColor: 'var(--accent-primary)',
                  background: 'var(--card-bg)',
                  boxShadow: '0 4px 15px rgba(var(--accent-primary-rgb), 0.10)'
                }}>
                <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Contact</span>
              </span>
            </div>
            <div
              className="inline-block text-5xl font-bold mb-2 "
            >
              <span style={{ color: 'var(--text-primary)' }}>CONTACT</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                US
              </span>
            </div>
            {/* Underline */}
            <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
            <h2
              className="text-xl sm:text-xl lg:text-xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Let's Build Something Great Together
            </h2>
            {/* <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Reach out for a free consult, project quote, or partnership.
            </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Options */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {contactOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group card-premium glass-premium p-6 cursor-pointer transition-all duration-300 hover:scale-105 block"
                   >
                    <div className={`w-14 h-14 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {option.title}
                    </h3>
                    <p className={`text-sm ${option.color} mb-3 font-medium`}>
                      {option.description}
                    </p>
                    <span className="font-semibold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                      {option.action}
                    </span>
                  </a>
                ))}
              </div>

              {/* Quick Contact Form */}
              <div className="card-premium glass-premium p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-[#ff6a3d] rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-semibold">Find the right fix - try ML integration or general</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['Discuss a Project', 'Need Support?', 'Explore Ideas'].map((option, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 glass-premium 
                       rounded-full text-sm font-medium"
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="mt-6">
                  <p
                    style={{ color: 'var(--text-secondary)' }}
                    className="text-sm mb-4 font-medium">Popular: Pricing, Support, Integration</p>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Find the best - try ML integration or general"
                      className="w-full input-premium"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-premium glass-premium p-8 glare-effect">
              <h3 className="text-2xl font-bold mb-6">Tell us about your vision</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full input-premium"
                      style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--card-border)' }}
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full input-premium"
                      style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--card-border)' }}
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company"
                      className="w-full input-premium"
                      style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--card-border)' }}
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Services Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full input-premium"
                      style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--card-border)' }}
                    >
                      <option value="">Select service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="ai">AI & ML Solutions</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="govtech">GovTech</option>
                      <option value="custom">Custom Software</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your project"
                      className="w-full input-premium resize-none"
                      style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--card-border)' }}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', color: 'white' }}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>

                {/* submission result - making it more visible */}
                {submitResult && (
                  <div className="mt-3 text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
                    {submitResult}
                  </div>
                )}
              </form>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Meet your design partners</h4>
                    <div className="flex -space-x-3">
                      {teamMembers.map((avatar, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 rounded-full border-2 border-[#0b0e17] overflow-hidden"
                        >
                          <img src={avatar} alt="Team member" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-right text-sm" style={{ color: 'var(--text-primary)' }}>
                    <p>We respond within 24 hours on business days</p>
                    <p className="mt-1">Your data is secure and never shared.</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <h5 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Why clients choose us</h5>
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="w-2 h-2 bg-[#ff6a3d] rounded-full mr-3"></div>
                      {reason}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;