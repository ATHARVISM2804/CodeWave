import React from 'react';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import AiImage from "../assets/AI.png"

// Placeholder icon/image components (replace with actual images or SVGs as needed)
const GitHubCopilotBadge = () => (
  <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-gray-200">
    <img src="https://github.gallerycdn.vsassets.io/extensions/github/copilot/1.364.1768/1756484122606/Microsoft.VisualStudio.Services.Icons.Default" alt="GitHub Copilot" className="h-6" />
    <span className="font-semibold text-gray-800 text-sm">GitHub Copilot</span>
  </div>
);
const CursorAIBadge = () => (
  <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-gray-200">
    <img src="/badges/cursor-ai.svg" alt="Cursor AI" className="h-6" />
    <span className="font-semibold text-gray-800 text-sm">CURSOR <span className="text-[#7b61ff]">AI</span></span>
  </div>
);
const GeminiAIBadge = () => (
  <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-gray-200">
    <img src="https://i.pinimg.com/736x/e5/a2/52/e5a252b0d1ceae9c5a7ee8cea147ce6f.jpg" alt="Gemini AI" className="h-6" />
    <span className="font-semibold text-gray-800 text-sm">Gemini <span className="text-[#7b61ff]">AI</span></span>
  </div>
);
const OpenAIBadge = () => (
  <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-gray-200">
    <img src="https://freebiehive.com/wp-content/uploads/2023/02/OpenAI-Logo-PNG.jpg" alt="OpenAI" className="h-6" />
    <span className="font-semibold text-gray-800 text-sm"> </span>
  </div>
);

// Update ServiceIcon to use <img> for the icon
const ServiceIcon = ({ icon }: { icon: string }) => (
  <img src={icon} alt="" className="h-12 w-12 object-contain mb-2" />
);

// Placeholder tech stack icons (replace with actual SVGs)
const TechIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="h-10 w-10 object-contain" />
);

const services = [
  { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', label: 'Custom ERP & CRM Development' },
  { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7mgTzfml9-fyRSDxIFT0GiGK1loPmUxNeA0p_ZuMA5hwO1Gxg3X5otZim6Mivh9e8Gw&usqp=CAU', label: 'AI-Powered SaaS Applications' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', label: 'API-First & Microservices Architecture' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png', label: 'MVP Development For Startups' },
  { icon: AiImage, label: 'Generative AI Integration' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/3523/3523887.png', label: 'Legacy System Maintenance & Modernization' },
];

const techStack = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', alt: 'React' },
  { src: 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png', alt: 'Node.js' },
  { src: 'https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png', alt: 'Next.js' },
  { src: 'https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png', alt: 'Django' },
  { src: 'https://icon2.cleanpng.com/20240131/ia/transparent-python-logo-python-icon-symbolizes-flexibility-1710891761988.webp', alt: 'Python' },
  { src: 'https://www.php.net/images/logos/new-php-logo.svg', alt: 'PHP' },
  { src: 'https://irislogic.com/wp-content/uploads/2024/07/Digital-Transformation.png', alt: 'Flutter' },
  { src: 'https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-adobe-illustrator-ai-icon-png-image_4899504.png', alt: 'AI' },
];

const StatsSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[100vh] py-16 px-2 flex flex-col items-center justify-start"
      
    >
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* AI Tool Badges */}
      {/* <div className="w-full flex justify-between items-center max-w-5xl mx-auto mb-4">
        <div className="flex flex-col gap-6">
          <GitHubCopilotBadge />
          <CursorAIBadge />
        </div>
        <div className="flex flex-col gap-6 items-end">
          <GeminiAIBadge />
          <OpenAIBadge />
        </div>
      </div> */}

      {/* Headline and Description */}
      <div className="w-full max-w-3xl mx-auto text-center mt-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          <span style={{ color: 'var(--text-primary)' }}>At Codewave, we’re a technology-driven</span>{' '}
          <span style={{ color: 'var(--accent-primary)' }}>Intelligence Studio</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 font-medium" style={{ color: 'var(--text-secondary)' }}>
          We love solving the hardest problems with smart engineering and AI.<br />
          Bring us a challenge — whether it’s building a fast, scalable website, designing a secure GovTech platform, creating AI-powered automation, or launching a digital marketing strategy — we’ll deliver solutions that are intelligent, reliable, and built for impact.
        </p>
        <p className="text-base md:text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
          We work with startups, enterprises, and government teams across the globe — helping founders scale faster, organizations automate smarter, and public-sector projects go digital with confidence.
        </p>
        <p className="text-base md:text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
          Our mindset is geeky, our process is precise, and our mission is simple: <br />
          to turn complexity into clarity and make technology think for you.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            className="font-semibold px-6 py-3 rounded-lg shadow transition"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              color: 'white'
            }}
          >
            Get Started
          </button>
          <button
            className="font-semibold px-6 py-3 rounded-lg shadow transition"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              color: 'white'
            }}
          >
            Schedule a Meeting
          </button>
          <button
            className="font-semibold px-6 py-3 rounded-lg shadow transition"
            style={{
              background: 'linear-gradient(135deg, #ff7a4e, #ff4e4e)',
              color: 'white'
            }}
          >
            Video Demo
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <ServiceIcon icon={service.icon} />
            <div className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>{service.label}</div>
          </div>
        ))}
      </div>

      {/* Tech Stack Row */}
      <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-6 mt-4">
        {techStack.map((tech, idx) => (
          <TechIcon key={idx} src={tech.src} alt={tech.alt} />
        ))}
      </div>

      {/* Decorative Quote */}
      <div className="w-full max-w-3xl mx-auto text-center mt-8">
        <div
          className="p-6 rounded-2xl border-l-4 shadow"
          style={{
            background: 'linear-gradient(to right, var(--accent-primary)20%, transparent 100%)',
            borderColor: 'var(--accent-primary)'
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-0" style={{ color: 'var(--text-primary)'  }}
          >
            Codewave — your global partner in AI automation, software development, web innovation, and digital growth.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;