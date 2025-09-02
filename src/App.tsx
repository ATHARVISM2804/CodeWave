import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const HomePage = () => (
  <>
    <HeroSection />
    <MovingData />
    <StatsSection />
    {/* <ServicesSection /> */}
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
    <Router>
      <div className="relative min-h-screen  text-white overflow-x-hidden" style={{ background: 'var(--bg-primary)' }}>
        <ParticleBackground />
        <ThemeToggle />
        <MouseFollower />
        <Header />
        {isLoading ? (
          <LoadingAnimation duration={2500} onComplete={handleLoadingComplete} />
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
  );
}

export default App;