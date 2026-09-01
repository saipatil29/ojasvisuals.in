import React, { useState, useEffect } from 'react';
import { ShutterLogo } from '../../assets/icons/ShutterLogo';
import { studioData } from '../../data/content';
import { Menu, X, Instagram, MessageSquare, Sparkles, ChevronRight, Lock } from 'lucide-react';

export const Navbar = ({ activeSection, onOpenVault }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Team", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Calculator", href: "#calculator" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Gear", href: "#gear" },
    { label: "Client Vault", href: "#vault" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-dark-900/90 backdrop-blur-xl border-b border-gold-primary/20 py-3 shadow-xl shadow-black/40"
        : "bg-gradient-to-b from-dark-900/80 to-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Container */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <ShutterLogo size={38} className="transition-transform duration-500 group-hover:rotate-45" />
            <div className="absolute inset-0 bg-gold-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-[0.2em] text-gold-primary group-hover:text-gold-light transition-colors">
              {studioData.brandName}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-semibold">
              Reels &amp; Films Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-dark-800/80 border border-slate-700/50 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gold-primary text-black font-semibold shadow-md shadow-gold-primary/20"
                    : "text-slate-300 hover:text-gold-light hover:bg-slate-800/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Instagram Button */}
          <a
            href={studioData.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-pink-500/40 text-pink-300 hover:text-white hover:bg-pink-600/20 text-xs font-semibold transition-all duration-200 hover:border-pink-400 group"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>Instagram</span>
          </a>

          {/* WhatsApp Direct Connect */}
          <a
            href={studioData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-whatsapp-green to-emerald-600 hover:from-emerald-400 hover:to-whatsapp-green text-white text-xs font-bold shadow-lg shadow-whatsapp-green/25 hover:shadow-whatsapp-green/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-dark-800 border border-slate-700 text-slate-300 hover:text-gold-light hover:border-gold-primary/40 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-dark-900/95 backdrop-blur-2xl border-b border-gold-primary/20 shadow-2xl px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-gold-light hover:bg-dark-800 border border-transparent hover:border-slate-700 transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={studioData.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 text-pink-200 text-sm font-semibold"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Follow @ojasvisuals.official</span>
            </a>

            <a
              href={studioData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-whatsapp-green to-emerald-600 text-white text-sm font-bold shadow-lg shadow-whatsapp-green/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 7990102448)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};