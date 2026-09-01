import React from 'react';
import { ShutterLogo } from '../../assets/icons/ShutterLogo';
import { studioData } from '../../data/content';
import { ArrowUp, Instagram, MessageSquare, Mail, MapPin, Globe, Phone, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-slate-800 text-slate-400 overflow-hidden pt-16 pb-12">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShutterLogo size={36} />
              <span className="font-heading font-bold text-xl tracking-[0.18em] text-gold-primary">
                {studioData.brandName}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              High-converting vertical reels, cinematic commercials, and end-to-end social media growth engineered for modern brands.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-slate-700 text-xs font-semibold text-gold-light">
              <span>📍 Ahmedabad, Gujarat, India</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#hero" className="hover:text-gold-light transition-colors">Home Studio</a></li>
              <li><a href="#about" className="hover:text-gold-light transition-colors">About Om Parmar</a></li>
              <li><a href="#services" className="hover:text-gold-light transition-colors">Creative Services</a></li>
              <li><a href="#calculator" className="hover:text-gold-light transition-colors">Package Estimator</a></li>
              <li><a href="#portfolio" className="hover:text-gold-light transition-colors">Featured Showcase</a></li>
              <li><a href="#vault" className="hover:text-gold-light transition-colors">Client Review Vault</a></li>
            </ul>
          </div>

          {/* Col 3: Services & Specializations */}
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider mb-4">
              Specializations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-slate-300">🎬 4K Instagram Vertical Reels</li>
              <li className="text-slate-300">☕ Café, Dining & Food Commercials</li>
              <li className="text-slate-300">💎 Luxury Product Advertisements</li>
              <li className="text-slate-300">⚡ DaVinci Color Grading & SFX</li>
              <li className="text-slate-300">📈 Monthly Content Retainers</li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm">
              <a href={`tel:${studioData.contact.phoneRaw}`} className="flex items-center gap-2 text-slate-300 hover:text-gold-light transition-colors">
                <Phone className="w-4 h-4 text-gold-primary" />
                <span>{studioData.contact.phone}</span>
              </a>
              <a href={`mailto:${studioData.contact.email}`} className="flex items-center gap-2 text-slate-300 hover:text-gold-light transition-colors">
                <Mail className="w-4 h-4 text-gold-primary" />
                <span>{studioData.contact.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-gold-primary" />
                <span>{studioData.contact.domain}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={studioData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-800 border border-slate-700 text-pink-400 hover:text-white hover:bg-pink-600 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={studioData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-800 border border-slate-700 text-whatsapp-green hover:text-white hover:bg-whatsapp-green transition-all"
                aria-label="WhatsApp Message"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © 2026 <span className="text-gold-primary font-semibold">Ojas Visuals</span>. All Rights Reserved. • Founder & Lead Director: <span className="text-slate-300 font-semibold">Om Parmar</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-800 border border-slate-700 text-slate-400 hover:text-gold-light hover:border-gold-primary/50 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};