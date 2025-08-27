import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
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

const HomePage = () => (
  <>
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <WhyUsSection />
    <PortfolioSection />
    <BlogSection />
    <ContactSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#0b0e17] text-white overflow-x-hidden">
        <ParticleBackground />
        <MouseFollower />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;