import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import ScrollToTop from './components/ScrollToTop';
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

const HomePage = ({ onChatbotClick }: { onChatbotClick: () => void }) => (
  <>
    <HeroSection />
    <MovingData />
    <StatsSection />
    <Whatsapp onChatbotClick={onChatbotClick} />
    <WhyUsSection />
    <PortfolioSection />
    <Industries />
    <Testimonial />
    <BlogSection />
    <ContactSection />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true); // Show loading animation initially
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [chatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    // Check if the user has visited the site before
    const hasVisitedBefore = localStorage.getItem('hasVisitedSite') === 'true';
    
    // If they've visited before, skip loading animation
    if (hasVisitedBefore) {
      setIsLoading(false);
    } else {
      // Set the flag for future visits
      localStorage.setItem('hasVisitedSite', 'true');
    }

    // Check for stored theme preference or system preference
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initialTheme = storedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);

    // Listen for theme changes
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
      setTheme(currentTheme);
    };

    // Create a MutationObserver to watch for class changes on html element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Handle completion of loading animation
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <HelmetProvider>
      <Router>
        <div
          className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${theme}`}  style={{ background: 'var(--bg-primary)' }}  >
          <MouseFollower />
          <Chatbot open={chatbotOpen} onClose={() => setChatbotOpen(false)} />
          <Header />
          <BgAnimation intensity="high" className="opacity-100" />
          <ScrollToTop />
          {isLoading ? (
            <LoadingAnimation duration={1500} onComplete={handleLoadingComplete} />
          ) : (
            <main>
              <Routes>
                <Route path="/" element={<HomePage onChatbotClick={() => setChatbotOpen(true)} />} />
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
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/industries/:slug" element={<IndustryDetailPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          )}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;