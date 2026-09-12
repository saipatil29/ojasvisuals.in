import React from 'react';
import { ShutterLogo } from '../../assets/icons/ShutterLogo';
import { studioData } from '../../data/content';
import {
  ArrowUp,
  Instagram,
  MessageSquare,
  Mail,
  Globe,
  Phone
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-slate-800 text-slate-400 overflow-hidden pt-16 pb-12">

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div
          data-reveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >

          {/* =====================================================
              COLUMN 1 — BRAND
          ====================================================== */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <ShutterLogo size={36} />

              <span className="font-heading font-bold text-xl tracking-[0.18em] text-gold-primary">
                {studioData.brandName}
              </span>

            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Ojas Visuals is a creative production and digital studio
              specializing in cinematic video production, social media
              growth, and modern web development for ambitious brands.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-slate-700 text-xs font-semibold text-gold-light">
              <span>📍 Ahmedabad, Gujarat, India</span>
            </div>

          </div>


          {/* =====================================================
              COLUMN 2 — EXPLORE
          ====================================================== */}
          <div>

            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider mb-4">
              Explore
            </h4>

            <ul className="space-y-2.5 text-sm">

              <li>
                <a
                  href="#hero"
                  className="hover:text-gold-light transition-colors"
                >
                  Home Studio
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-gold-light transition-colors"
                >
                  Creative Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="hover:text-gold-light transition-colors"
                >
                  Featured Showcase
                </a>
              </li>

              <li>
                <a
                  href="#gear"
                  className="hover:text-gold-light transition-colors"
                >
                  Production Gear
                </a>
              </li>

              <li>
                <a
                  href="#vault"
                  className="hover:text-gold-light transition-colors"
                >
                  Client Review Vault
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-gold-light transition-colors"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-gold-light transition-colors"
                >
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* =====================================================
              COLUMN 3 — SPECIALIZATIONS
          ====================================================== */}
          <div>

            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider mb-4">
              Specializations
            </h4>

            <ul className="space-y-2.5 text-sm">

              <li className="text-slate-300">
                🎬 4K Cinematic Instagram Reels
              </li>

              <li className="text-slate-300">
                🎥 Commercial Video Production
              </li>

              <li className="text-slate-300">
                💎 Luxury Product Advertisements
              </li>

              <li className="text-slate-300">
                ⚡ DaVinci Color Grading &amp; SFX
              </li>

              <li className="text-slate-300">
                📈 Social Media Growth &amp; Content Retainers
              </li>

              <li className="text-slate-300">
                💻 Modern Web Development
              </li>

              <li className="text-slate-300">
                📱 Responsive Business Websites
              </li>

              <li className="text-slate-300">
                🛒 E-commerce &amp; Digital Experiences
              </li>

            </ul>

          </div>


          {/* =====================================================
              COLUMN 4 — DIRECT CONTACT
          ====================================================== */}
          <div className="space-y-4">

            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider mb-4">
              Direct Contact
            </h4>

            <div className="space-y-2.5 text-sm">

              {/* =================================================
                  WHATSAPP NUMBER
              ================================================= */}
              <a
                href="https://wa.me/917990102448"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-gold-light transition-colors"
              >

                <MessageSquare className="w-4 h-4 text-whatsapp-green" />

                <span>
                  +91 7990102448
                </span>

              </a>


              {/* =================================================
                  PHONE NUMBER
              ================================================= */}
              <a
                href="tel:+919104903595"
                className="flex items-center gap-2 text-slate-300 hover:text-gold-light transition-colors"
              >

                <Phone className="w-4 h-4 text-gold-primary" />

                <span>
                  +91 9104903595
                </span>

              </a>


              {/* =================================================
                  EMAIL
              ================================================= */}
              <a
                href={`mailto:${studioData.contact.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-gold-light transition-colors"
              >

                <Mail className="w-4 h-4 text-gold-primary" />

                <span>
                  {studioData.contact.email}
                </span>

              </a>


              {/* =================================================
                  WEBSITE
              ================================================= */}
              <div className="flex items-center gap-2 text-slate-300">

                <Globe className="w-4 h-4 text-gold-primary" />

                <span>
                  {studioData.contact.domain}
                </span>

              </div>

            </div>


            {/* ===================================================
                SOCIAL BUTTONS
            ==================================================== */}
            <div className="flex items-center gap-3 pt-2">

              {/* Instagram */}
              <a
                href={studioData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-800 border border-slate-700 text-pink-400 hover:text-white hover:bg-pink-600 hover:scale-110 hover:border-pink-500 transition-all"
                aria-label="Instagram Profile"
              >

                <Instagram className="w-4 h-4" />

              </a>


              {/* WhatsApp */}
              <a
                href="https://wa.me/917990102448"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-800 border border-slate-700 text-whatsapp-green hover:text-white hover:bg-whatsapp-green hover:scale-110 hover:border-whatsapp-green transition-all"
                aria-label="WhatsApp Message"
              >

                <MessageSquare className="w-4 h-4" />

              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">

          <p className="text-slate-500 text-center sm:text-left">

            © 2026{' '}

            <span className="text-gold-primary font-semibold">
              Ojas Visuals
            </span>

            . All Rights Reserved. •{' '}

            <span className="text-slate-300 font-semibold">
              Creative Production &amp; Web Development Studio
            </span>

          </p>


          {/* Back To Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-800 border border-slate-700 text-slate-400 hover:text-gold-light hover:border-gold-primary/50 transition-all"
          >

            <span>
              Back to Top
            </span>

            <ArrowUp className="w-3.5 h-3.5" />

          </button>

        </div>

      </div>

    </footer>
  );
};