import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Phone, Mail, Calendar, Send } from 'lucide-react';

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

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat instantly with our team',
      action: 'Start Chat',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Our AI wants to chat with you',
      action: 'Chat Now',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Write to hello@codewave.it',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a time slot for call',
      action: 'Book Call',
      color: 'from-orange-500 to-red-500'
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
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Let's Create Something{' '}
            <span className="text-[#ff6a3d]">Extraordinary Together</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            Where human creativity meets technological innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className={`group card-premium glass-premium p-6 hover-lift glare-effect cursor-pointer ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 hover-glow glare-effect`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-shimmer transition-all duration-300">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 font-medium">
                    {option.description}
                  </p>
                  <button className="text-shimmer font-semibold hover:text-white transition-all duration-300 hover:translate-x-1">
                    {option.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Contact Form */}
            <div className={`card-premium glass-premium p-8 glare-effect ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-[#ff6a3d] rounded-lg flex items-center justify-center hover-glow">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-semibold">Find the right fix - try ML integration or general</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['Discuss a Project', 'Need Support?', 'Explore Ideas'].map((option, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 glass-premium border-animate rounded-full text-sm hover-lift glare-effect font-medium"
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-300 mb-4 font-medium">Popular: Pricing, Support, Integration</p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Find the best - try ML integration or general"
                    className="w-full input-premium"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-shimmer hover:text-white transition-all duration-300 hover-lift">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`card-premium glass-premium p-8 glare-effect ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold mb-6">Tell us about your vision</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full input-premium"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full input-premium"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                    className="w-full input-premium"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Services Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full input-premium"
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full input-premium resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-premium glare-effect text-lg"
              >
                Send Message →
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Meet your design partners</h4>
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
                
                <div className="text-right text-sm text-gray-400">
                  <p>We respond within 24 hours on business days</p>
                  <p className="mt-1">Your data is secure and never shared.</p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <h5 className="font-semibold mb-3">Why clients choose us</h5>
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
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
  );
};

export default ContactSection;