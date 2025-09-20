import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Phone, Mail, Calendar, Send, MapPin, Clock, Users, CheckCircle, Twitter, Linkedin, Github } from 'lucide-react';
import { color } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);

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

  // new: submission state + handler for web3forms
  const [submitResult, setSubmitResult] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult('Sending....');

    try {
      const formEl = e.currentTarget;
      const payload = new FormData(formEl);

      // TODO: replace with your real access key
      payload.append('access_key', '8cf5247d-b96a-4f34-a3ab-b5990f93409d');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });

      const data = await res.json();

      if (data.success) {
        setSubmitResult('Form Submitted Successfully');
        formEl.reset();
        // clear local controlled form state as well
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
        // Show thank you modal
        setShowThankYouModal(true);
      } else {
        console.error('Submission error', data);
        setSubmitResult(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      setSubmitResult('Network error, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat instantly with our team',
      detail: '+91 89299 42819',
      action: 'Start Chat',
      color: 'from-green-500 to-emerald-500',
      href: 'https://wa.me/+918929942819?text=Hello%20CodeWave%21%20I%20would%20like%20to%20discuss%20a%20project.'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Our AI wants to chat with you',
      detail: 'Available 24/7',
      action: 'Chat Now',
      color: 'from-blue-500 to-cyan-500',
      href: '#live-chat'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Write to hello@codewave.it',
      detail: 'hello@codewave.it',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500',
      href: 'mailto:hello@codewave.it?subject=Website%20Inquiry'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a time slot for call',
      detail: '30-min free consultation',
      action: 'Book Call',
      color: 'from-orange-500 to-red-500',
      href: 'https://calendly.com/codewave/30min'
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Service Locations',
      details: ['Worldwide Service Coverage', 'Serving Clients Across the Globe']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM PST', 'Saturday: 10:00 AM - 2:00 PM PST', 'Sunday: Closed']
    },
    {
      icon: Users,
      title: 'Response Time',
      details: ['Email: Within 4 hours', 'Phone: Immediate', 'Project inquiries: Same day']
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

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most projects range from 4-16 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with startups?',
      answer: 'Absolutely! We love working with startups and offer flexible engagement models to fit different budgets and growth stages.'
    },
    {
      question: 'What makes CodeWave different?',
      answer: 'We integrate AI and intelligence into every solution we build, ensuring your software doesn\'t just work—it thinks and adapts.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages including maintenance, updates, and continuous optimization of your solutions.'
    }
  ];

  const socialLinks = [
    { icon: Phone, href: 'tel:+1234567890' },
    { icon: Mail, href: 'mailto:hello@codewave.it' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/codewave-tech/mycompany/' },
    { icon: Twitter, href: 'https://twitter.com/codewave_tech' },
    { icon: Github, href: '#' }
  ];

  return (
    <div
      className="pt-12"
      style={{
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        fontSize: '0.97rem', // Slightly scale down font size
        letterSpacing: '0.01em'
      }}
    >
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                Let's Create Something{' '}
                <span className="parallax-text neon-glow" style={{ color: 'var(--accent-primary)' }}>Extraordinary Together</span>
              </h1>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Where human creativity meets technological innovation. Ready to transform your ideas into intelligent solutions?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section ref={sectionRef} className="py-16 relative" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Choose Your Preferred Way to Connect
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              We're here to help you bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`morph-card glare-card p-8 text-center hover-lift-premium magnetic-effect ripple-effect cursor-pointer ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6 magnetic-effect`}>
                  <method.icon className="w-8 h-8" style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-xl font-bold mb-3 neon-glow" style={{ color: 'var(--text-primary)' }}>{method.title}</h3>
                <p className="mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>{method.description}</p>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{method.detail}</p>
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  <button className="liquid-button px-6 py-2 font-semibold glare-effect text-sm magnetic-effect"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', color: 'var(--bg-secondary)' }}>
                    {method.action}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={() => setShowThankYouModal(false)}></div>
          <div 
            className="relative morph-card glare-card p-8 md:p-10 text-center max-w-md w-full animate-fade-in-up"
            style={{ 
              background: 'var(--card-bg)', 
              border: '2px solid var(--card-border)',
              boxShadow: '0 0 30px rgba(var(--accent-primary-rgb), 0.3)'
            }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mx-auto flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 neon-glow" style={{ color: 'var(--text-primary)' }}>Thank You!</h3>
            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
              Your message has been sent successfully. We appreciate your interest and will be in touch shortly.
            </p>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              Our team reviews all inquiries and typically responds within 4 business hours.
            </p>
            
            <button
              onClick={() => setShowThankYouModal(false)}
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

      {/* Main Contact Form */}
      <section className="py-16 relative" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`morph-card glare-card p-8 hover-lift-premium ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
              style={{ 
                background: 'var(--card-bg)', 
                border: '2px solid var(--card-border)', 
                boxShadow: '0 0 0 1px rgba(var(--accent-primary-rgb), 0.2), 0 8px 20px rgba(var(--accent-primary-rgb), 0.15)', 
                color: 'var(--text-primary)' 
              }}>
              <h3 className="text-3xl font-bold mb-8 neon-glow" style={{ color: 'var(--text-primary)' }}>Tell Us About Your Vision</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ color: 'var(--text-primary)' }}>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full input-premium"
                      style={{
                        border: '1px solid rgba(var(--accent-primary-rgb), 0.3)',
                        background: 'var(--bg-secondary)',
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                        padding: '0.75rem',
                        borderRadius: '0.5rem'
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full input-premium"
                      style={{
                        border: '1px solid rgba(var(--accent-primary-rgb), 0.3)',
                        background: 'var(--bg-secondary)',
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                        padding: '0.75rem',
                        borderRadius: '0.5rem'
                      }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full input-premium"
                    style={{
                      border: '1px solid rgba(var(--accent-primary-rgb), 0.3)',
                      background: 'var(--bg-secondary)',
                      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem'
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full input-premium"
                      style={{
                        border: '1px solid rgba(var(--accent-primary-rgb), 0.3)',
                        background: 'var(--bg-secondary)',
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        appearance: 'auto'
                      }}
                    >
                      <option value="">Select service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="ai">AI & ML Solutions</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="govtech">GovTech Solutions</option>
                      <option value="custom">Custom Software</option>
                      <option value="consultation">Consultation Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full input-premium"
                      style={{
                        border: '1px solid rgba(var(--accent-primary-rgb), 0.3)',
                        background: 'var(--bg-secondary)',
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        appearance: 'auto'
                      }}
                    >
                      <option value="">Select budget</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full input-premium"
                    style={{
                      border: '1px solid rgba(var(--accent-primary-rgb), 0.3)',
                      background: 'var(--bg-secondary)',
                      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      appearance: 'auto'
                    }}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full input-premium resize-none"
                    style={{
                      border: '1px solid rgba(var(--accent-primary-rgb), 0.3)',
                      background: 'var(--bg-secondary)',
                      boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                      padding: '0.75rem',
                      borderRadius: '0.5rem'
                    }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full liquid-button  px-8 py-4 font-semibold glare-effect text-lg magnetic-effect"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  style={{ color: isSubmitting ? 'var(--text-muted)' : 'var(--bg-secondary)', background: isSubmitting ? 'var(--card-border)' : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>

                {/* submission result */}
                {submitResult && (
                  <div className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {submitResult}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Team */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className={`morph-card glare-card p-8 hover-lift-premium ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '200ms', background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}>
                <h3 className="text-2xl font-bold mb-6 neon-glow" style={{ color: 'var(--text-primary)' }}>Get in Touch</h3>
                
                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 magnetic-effect"
                        style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>
                        <info.icon className="w-6 h-6" style={{ color: 'var(--bg-secondary)' }} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm" style={{ color: 'var(--text-secondary)' }}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Section */}
              <div className={`morph-card glare-card p-8 hover-lift-premium ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '400ms', background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}>
                <h3 className="text-2xl font-bold mb-6 neon-glow" style={{ color: 'var(--text-primary)' }}>Meet Your Design Partners</h3>
                <div className="flex -space-x-4 mb-6">
                  {teamMembers.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 rounded-full border-4 overflow-hidden magnetic-effect"
                      style={{ borderColor: 'var(--bg-primary)' }}
                    >
                      <img src={avatar} alt="Team member" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Why clients choose us:</h4>
                  <div className="space-y-3">
                    {whyChooseUs.map((reason, index) => (
                      <div key={index} className="flex items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle className="w-4 h-4" style={{ color: 'var(--accent-secondary)', marginRight: '0.75rem' }} />
                        {reason}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t" style={{ borderTop: '1px solid var(--glass-border)' }}>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    <strong>Response guarantee:</strong> We respond within 4 hours on business days. Your data is secure and never shared.
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="transition-all duration-300 hover:-translate-y-1"
                      style={{
                        color: 'var(--text-secondary)',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '50%',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--accent-primary)';
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'var(--card-border)';
                      }}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Quick answers to common questions about working with CodeWave.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`morph-card glare-card p-8 hover-lift-premium ${isVisible ? 'stagger-animation' : 'opacity-0'} stagger-${index + 1}`}
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
              >
                <h3 className="text-xl font-bold mb-4 neon-glow" style={{ color: 'var(--text-primary)' }}>{faq.question}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 relative" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="morph-card glare-card p-12 text-center hover-lift-premium"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ color: 'var(--text-primary)' }}>
              Still Have Questions?
            </h2>
            <p className={`text-xl max-w-3xl mx-auto mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', color: 'var(--text-secondary)' }}>
              Schedule a free 30-minute consultation to discuss your project and get expert advice.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <a href="https://calendly.com/codewave/30min" target="_blank" rel="noopener noreferrer">
                <button className="liquid-button px-8 py-4 font-semibold glare-effect text-lg magnetic-effect"
                  style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', color: 'var(--bg-secondary)' }}>
                  Book Free Consultation
                </button>
              </a>
              <a href="#portfolio" className="morph-card px-8 py-4 rounded-full font-semibold hover-lift-premium glare-card text-lg ripple-effect"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}>
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;