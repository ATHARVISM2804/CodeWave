import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Add this import
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import WhyUsSection from './components/WhyUsSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/BgAnimation';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPost from './pages/BlogPost';
import MouseFollower from './components/CursorFollower';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import LoadingAnimation from './components/LoadingAnimation';
import MovingData from './components/MovingData';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';

const HomePage = () => (
  <>
    <HeroSection />
    {/* <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  /> */}
    <MovingData />
    <StatsSection />
    <WhyUsSection />
    <PortfolioSection />
    <ParticleBackground />
    <BlogSection />
    <ContactSection />

  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading animation on first load, not on route change
    return window.performance && performance.navigation.type === 1;
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
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
    <HelmetProvider> {/* Add this provider */}
      <Router>
        <div
          className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${theme}`}
        // style={{ 
        //   background: 'var(--bg-primary)',
        //   color: 'var(--text-primary)'
        // }}
        >
          {/* <ParticleBackground /> */}
          <MouseFollower />
          <Chatbot />
          <Header />
          <ParticleBackground />
          <ThemeToggle /> 
          <ScrollToTop />

          {isLoading ? (
            <LoadingAnimation duration={1000} onComplete={handleLoadingComplete} />
          ) : (
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
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