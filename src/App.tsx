import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Add this import
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import PortfolioSection from './components/PortfolioSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import MouseFollower from './components/CursorFollower';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import LoadingAnimation from './components/LoadingAnimation';
import MovingData from './components/MovingData';
import LightRays from './components/LightRays';
import Chatbot from './components/Chatbot';

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
    <BlogSection />
    <ContactSection />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // You can add actual resource loading checks here
    // For now, we'll just use the animation with a fixed duration
  }, []);

  // Handle completion of loading animation
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <HelmetProvider> {/* Add this provider */}
      <Router>
        <div className="relative min-h-screen  text-white overflow-x-hidden" style={{ background: 'var(--bg-primary)' }}>
          <ParticleBackground />
          <MouseFollower />
          <Chatbot />
          <Header />
          <ThemeToggle />

          {isLoading ? (
            <LoadingAnimation duration={1000} onComplete={handleLoadingComplete} />
          ) : (
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
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