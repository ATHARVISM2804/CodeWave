import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const navigationLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Contact', href: '#contact' }
  ];

  const resourceLinks = [
    { title: 'Case Studies', href: '#case-studies' },
    { title: 'Insights', href: '#insights' },
    { title: 'How We Work', href: '#how-we-work' },
    { title: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@codewave.it', name: 'Email' }
  ];

  return (
    <footer className="bg-[#0a0d16] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#ff6a3d] to-[#ff8c42] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CW</span>
              </div>
              <span className="text-2xl font-bold">CodeWave.it</span>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#ff6a3d] leading-tight">
                We don't just write code.<br />
                We make it think.
              </h3>
              <p className="text-gray-400 max-w-lg leading-relaxed">
                Join our mailing list for AI-powered insights, design challenges, and breakthrough innovations. 
                Stay connected with the intelligence studio that builds software that thinks.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 input-premium rounded-r-none"
                />
                <button className="btn-premium rounded-l-none glare-effect">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                *Trusted by SaaS founders. 14,000+ weekly readers.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong className="text-white">Contact Us:</strong></p>
              <p>📧 hello@codewave.it</p>
              <p>📱 Schedule a consult</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© CodeWave 2025 • Privacy • Terms • Cookie Preferences</p>
              <p className="mt-1">*Trusted by SaaS, GovTech, and Fast-Growing Startups</p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.name}
                  className="w-10 h-10 glass-premium rounded-lg flex items-center justify-center hover-lift glare-effect border-animate"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-shimmer transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-white/5">
            <p className="text-sm text-gray-500">
              Stay Connected: We make brands with intelligence insights, AI-powered insights, and breakthrough innovations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;