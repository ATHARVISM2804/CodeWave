import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import MouseFollower from './components/CursorFollower';
import LoadingAnimation from './components/LoadingAnimation';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';
import BgAnimation from './components/BgAnimation';
import PageTransition from './components/PageTransition';

// Components for HomePage
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import WhyUsSection from './components/WhyUsSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import MovingData from './components/MovingData';
import Industries from './components/Industries';
import Testimonial from './components/Testimonial';
import Whatsapp from './components/Whatsapp';

// Lazily load pages for better performance
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ToolsPage = lazy(() => import('./pages/Tools'));

// Lazily load service pages
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage'));
const CustomSoftwarePage = lazy(() => import('./pages/services/CustomSoftwarePage'));
const AIAutomationPage = lazy(() => import('./pages/services/AIAutomationPage'));
const GovTechPage = lazy(() => import('./pages/services/GovTechPage'));
const MobileDevelopmentPage = lazy(() => import('./pages/services/MobileDevelopmentPage'));
const UIUXDesignPage = lazy(() => import('./pages/services/UIUXDesignPage'));
const APIIntegrationPage = lazy(() => import('./pages/services/APIIntegrationPage'));
const DigitalMarketingPage = lazy(() => import('./pages/services/DigitalMarketingPage'));

const HomePage = ({ onChatbotClick }: { onChatbotClick: () => void }) => {
  // Code splitting with Suspense for HomePage sections
  // Only load sections as they come into view
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: true,
    movingData: false,
    stats: false,
    whyUs: false,
    portfolio: false,
    industries: false,
    testimonial: false,
    blog: false,
    contact: false
  });

  useEffect(() => {
    // Load sections after a short delay to prioritize initial render speed
    const timer = setTimeout(() => {
      setSectionsVisible({
        hero: true,
        movingData: true,
        stats: true,
        whyUs: true,
        portfolio: true,
        industries: true,
        testimonial: true,
        blog: true,
        contact: true
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeroSection />
      {sectionsVisible.movingData && <MovingData />}
      {sectionsVisible.stats && <StatsSection />}
      <Whatsapp onChatbotClick={onChatbotClick} />
      {sectionsVisible.whyUs && <WhyUsSection />}
      {sectionsVisible.portfolio && <PortfolioSection />}
      {sectionsVisible.industries && <Industries />}
      {sectionsVisible.testimonial && <Testimonial />}
      {sectionsVisible.blog && <BlogSection />}
      {sectionsVisible.contact && <ContactSection />}
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true); // Show loading animation initially
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
  }, []);

  // Handle completion of loading animation
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <HelmetProvider>
      <Router>
        <div
          className="relative min-h-screen overflow-x-hidden transition-colors duration-300"  style={{ background: 'var(--bg-primary)' }}  >
          <MouseFollower />
          <Chatbot open={chatbotOpen} onClose={() => setChatbotOpen(false)} />
          <Header />
          <BgAnimation intensity="high" className="opacity-100" />
          <ScrollToTop />
          {isLoading ? (
            <LoadingAnimation duration={1000} onComplete={handleLoadingComplete} />
          ) : (
            <main>
              <PageTransition>
                <Routes>
                  <Route path="/" element={<HomePage onChatbotClick={() => setChatbotOpen(true)} />} />
                <Route path="/about" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <AboutPage />
                  </Suspense>
                } />
                <Route path="/services" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <ServicesPage />
                  </Suspense>
                } />
                <Route path="/services/web-development" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <WebDevelopmentPage />
                  </Suspense>
                } />
                <Route path="/services/custom-software" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <CustomSoftwarePage />
                  </Suspense>
                } />
                <Route path="/services/ai-automation" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <AIAutomationPage />
                  </Suspense>
                } />
                <Route path="/services/govtech" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <GovTechPage />
                  </Suspense>
                } />
                <Route path="/services/mobile-development" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <MobileDevelopmentPage />
                  </Suspense>
                } />
                <Route path="/services/ui-ux-design" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <UIUXDesignPage />
                  </Suspense>
                } />
                <Route path="/services/api-integration" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <APIIntegrationPage />
                  </Suspense>
                } />
                <Route path="/services/digital-marketing" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <DigitalMarketingPage />
                  </Suspense>
                } />
                <Route path="/blog/:id" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <BlogPost />
                  </Suspense>
                } />
                <Route path="/portfolio" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <PortfolioPage />
                  </Suspense>
                } />
                <Route path="/contact" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <ContactPage />
                  </Suspense>
                } />
                <Route path="/tools" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <ToolsPage />
                  </Suspense>
                } />
                <Route path="/industries/:slug" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <IndustryDetailPage />
                  </Suspense>
                } />
                <Route path="*" element={
                  <Suspense fallback={<div className="page-transition-loader"></div>}>
                    <NotFound />
                  </Suspense>
                } />
              </Routes>
              </PageTransition>
            </main>
          )}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;