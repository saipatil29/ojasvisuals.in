import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { FounderSection } from './components/about/FounderSection';
import { ServicesSection } from './components/services/ServicesSection';
import { PackageCalculator } from './components/services/PackageCalculator';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { ProductionGear } from './components/portfolio/ProductionGear';
import { ClientVault } from './components/vault/ClientVault';
import { FaqSection } from './components/common/FaqSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { Toast } from './components/common/Toast';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState('');
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast({ message: '', type: 'success' });
  };

  // Section Observer for active navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'calculator', 'portfolio', 'gear', 'vault', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col relative selection:bg-gold-primary selection:text-black">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <FounderSection />
        <ServicesSection onSelectService={(srv) => setSelectedService(srv)} />
        <PackageCalculator onSendQuote={() => showToast('Quote formulated! Opening WhatsApp...', 'success')} />
        <PortfolioSection />
        <ProductionGear />
        <ClientVault onToast={showToast} />
        <FaqSection />
        <ContactSection selectedService={selectedService} onToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppFloating />
    </div>
  );
}

export default App;