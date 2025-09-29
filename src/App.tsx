import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from '@studio-freight/lenis';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import WhyUsSection from './components/WhyUsSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPost from './pages/BlogPost';
import MouseFollower from './components/CursorFollower';
import LoadingAnimation from './components/LoadingAnimation';
import MovingData from './components/MovingData';
import Chatbot from './components/Chatbot';
import Industries from './components/Industries';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import CustomSoftwarePage from './pages/services/CustomSoftwarePage';
import AIAutomationPage from './pages/services/AIAutomationPage';
import GovTechPage from './pages/services/GovTechPage';
import MobileDevelopmentPage from './pages/services/MobileDevelopmentPage';
import UIUXDesignPage from './pages/services/UIUXDesignPage';
import APIIntegrationPage from './pages/services/APIIntegrationPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import NotFound from './pages/NotFound';
import ToolsPage from './pages/Tools';
import Testimonial from './components/Testimonial';
import Whatsapp from './components/Whatsapp';
import BgAnimation from './components/BgAnimation';
import ScrollToTop from './components/ScrollToTop';

gsap.registerPlugin(ScrollToPlugin);

// Global Lenis instance (shared via module, not window)
export let lenisInstance: Lenis | null = null;

function useLenis() {
  useEffect(() => {
    lenisInstance = new Lenis({
      lerp: 0.03,
      smoothWheel: true,
      orientation: 'vertical',
    });
    function raf(time: number) {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);
}

// Context to expose scrollToServices function
export const ServicesScrollContext = React.createContext<{ scrollToServices: () => void }>({ scrollToServices: () => {} });

const HomePage = React.memo(() => {
  const servicesRef = useRef<HTMLDivElement>(null);

  // Expose scroll function
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ServicesScrollContext.Provider value={{ scrollToServices }}>
      <HeroSection />
      <MovingData />
      <StatsSection servicesRef={servicesRef} />
      <WhyUsSection />
      <PortfolioSection />
      <Industries />
      <Testimonial />
      <BlogSection />
      <ContactSection />
    </ServicesScrollContext.Provider>
  );
});

function AppWithLenis() {
  const [isLoading, setIsLoading] = useState(() => {
    return window.performance && performance.navigation.type === 1;
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // Enable Lenis globally
  useLenis();

  // Use React Router's useLocation for route changes
  const location = useLocation();
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initialTheme = storedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);

    const handleThemeChange = () => {
      const currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      setTheme(currentTheme);
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${theme}`}>
        <div
          className="fixed top-0 left-0 w-full h-screen -z-10"
          style={{
            background:
              theme === 'light'
                ? `
                  radial-gradient(circle at 50% 50%, rgb(255, 255, 255) 0%, rgb(230, 232, 235) 25%, rgb(220, 222, 225) 50%, rgb(210, 212, 215) 75%, rgb(205, 207, 210) 100%),
                  linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%)
                `
                : 'var(--bg-primary)',
            backgroundBlendMode: theme === 'light' ? 'overlay' : 'normal',
            backgroundSize: theme === 'light' ? '100% 100%, 20px 20px' : 'auto',
          }}
        />
        <Whatsapp onChatbotClick={() => setChatbotOpen(true)} />
        <MouseFollower />
        <Chatbot open={chatbotOpen} onClose={() => setChatbotOpen(false)} />
        <Header />
        <BgAnimation />
        {isLoading ? (
          <LoadingAnimation duration={500} onComplete={handleLoadingComplete} />
        ) : (
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/web-development" element={<WebDevelopmentPage />} />
              <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
              <Route path="/services/ai-automation" element={<AIAutomationPage />} />
              <Route path="/services/govtech" element={<GovTechPage />} />
              <Route path="/services/mobile-development" element={<MobileDevelopmentPage />} />
              <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
              <Route path="/services/api-integration" element={<APIIntegrationPage />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/blogs" element={<BlogSection limit={100} showAllButton={true} />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage chatbotOpen={chatbotOpen} setChatbotOpen={setChatbotOpen} />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/industries/:slug" element={<IndustryDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        )}
        <Footer />
      </div>
    </HelmetProvider>
  );
}

// App must be inside Router for useLocation to work
function App() {
  return (
    <Router>
      <AppWithLenis />
    </Router>
  );
}

export default App;
