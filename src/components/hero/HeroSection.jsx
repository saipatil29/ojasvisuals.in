import React from 'react';
import { HeroShutterEmblem } from '../../assets/icons/ShutterLogo';
import { studioData } from '../../data/content';
import { Play, Sparkles, MessageSquare, ArrowRight, Video, Flame, CheckCircle2 } from 'lucide-react';

export const HeroSection = ({ onBookClick, onExploreClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="ambient-glow-bg top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Shutter Camera Emblem with Viewfinder Focus Brackets */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
          <HeroShutterEmblem className="w-52 h-auto sm:w-60 md:w-64" />
        </div>

        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/40 text-gold-light text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-lg shadow-gold-primary/10 animate-pulse-slow">
          <Sparkles className="w-4 h-4 text-gold-primary" />
          <span>{studioData.badge}</span>
        </div>

        {/* Hero Headline with Golden Dual Gradient */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-slate-100">
          Crafting <span className="text-gold-gradient">Radiance &amp; Viral Energy</span> in Every Frame.
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
          {studioData.subHeadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#portfolio"
            onClick={onExploreClick}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-primary via-amber-500 to-gold-dark hover:from-gold-light hover:to-gold-primary text-black font-bold text-sm tracking-wide shadow-xl shadow-gold-primary/25 hover:shadow-gold-primary/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Explore Work</span>
          </a>

          <a
            href={studioData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-dark-800/90 hover:bg-dark-700 border border-gold-primary/30 hover:border-gold-primary text-slate-100 hover:text-gold-light font-semibold text-sm shadow-lg shadow-black/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-whatsapp-green" />
            <span>📲 Book Shoot (+91 7990102448)</span>
          </a>
        </div>

        {/* Live Studio Metrics Bar */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl glass-panel">
          {studioData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-2">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-gold-light">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-xs text-slate-400 font-medium text-center mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};