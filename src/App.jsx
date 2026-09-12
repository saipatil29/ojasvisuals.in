import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { FounderSection } from './components/about/FounderSection';
import { ServicesSection } from './components/services/ServicesSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { ProductionGear } from './components/portfolio/ProductionGear';
import { ClientVault } from './components/vault/ClientVault';
import { FaqSection } from './components/common/FaqSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { Toast } from './components/common/Toast';
import { Preloader } from './components/common/Preloader';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { AmbientAtmosphere } from './components/common/AmbientAtmosphere';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState('');
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [toast, setToast] = useState({
    message: '',
    type: 'success'
  });

  // Cinematic scroll-reveal system — observes every [data-reveal] element
  // rendered across the whole site and fades/translates it into view once.
  useScrollReveal();

  const showToast = (message, type = 'success') => {
    setToast({
      message,
      type
    });
  };

  const closeToast = () => {
    setToast({
      message: '',
      type: 'success'
    });
  };


  // Section Observer for active navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'services',
        'portfolio',
        'gear',
        'vault',
        'faq',
        'contact',
        'about'
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run once when page loads
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col relative selection:bg-gold-primary selection:text-black">

      {/* ================================================== */}
      {/* CINEMATIC PRELOADER — first visit only */}
      {/* ================================================== */}

      <Preloader onDone={() => setPreloaderDone(true)} />


      {/* ================================================== */}
      {/* GLOBAL CINEMATIC ATMOSPHERE (grain + ambient glow) */}
      {/* ================================================== */}

      <AmbientAtmosphere />


      {/* ================================================== */}
      {/* SCROLL PROGRESS + CUSTOM CURSOR (desktop only) */}
      {/* ================================================== */}

      <ScrollProgress />
      <CustomCursor />


      {/* ================================================== */}
      {/* TOAST NOTIFICATION */}
      {/* ================================================== */}

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />


      {/* ================================================== */}
      {/* NAVIGATION */}
      {/* ================================================== */}

      <Navbar
        activeSection={activeSection}
      />


      {/* ================================================== */}
      {/* MAIN CONTENT */}
      {/* ================================================== */}

      <main className="flex-grow">

        {/* HOME */}
        <HeroSection />


        {/* SERVICES */}
        <ServicesSection
          onSelectService={(srv) => setSelectedService(srv)}
        />


        {/* PORTFOLIO */}
        <PortfolioSection />


        {/* PRODUCTION GEAR */}
        <ProductionGear />


        {/* CLIENT VAULT */}
        <ClientVault
          onToast={showToast}
        />


        {/* FAQ */}
        <FaqSection />


        {/* CONTACT */}
        <ContactSection
          selectedService={selectedService}
          onToast={showToast}
        />


        {/* ================================================== */}
        {/* OUR TEAM - LAST MAIN SECTION */}
        {/* ================================================== */}

        <FounderSection />

      </main>


      {/* ================================================== */}
      {/* FOOTER */}
      {/* ================================================== */}

      <Footer />


      {/* FLOATING WHATSAPP */}
      <WhatsAppFloating />

    </div>
  );
}

export default App;