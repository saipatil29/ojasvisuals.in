import React, { useEffect, useRef } from 'react';
import { HeroShutterEmblem } from '../../assets/icons/ShutterLogo';
import { studioData } from '../../data/content';
import { useMagnetic } from '../../hooks/useMagnetic';
import { useCountUp } from '../../hooks/useCountUp';
import {
  Play,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Video,
  Monitor,
  TrendingUp
} from 'lucide-react';

const StatItem = ({ stat }) => {
  const [countRef, display] = useCountUp(stat.value + (stat.suffix || ''));

  return (
    <div
      ref={countRef}
      className="flex flex-col items-center px-4 py-2 min-w-[92px]"
    >
      <span className="font-heading text-xl sm:text-2xl font-extrabold text-gold-gradient tabular-nums">
        {display}
      </span>
      <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider text-center mt-1">
        {stat.label}
      </span>
    </div>
  );
};

export const HeroSection = ({ onBookClick, onExploreClick }) => {
  const exploreRef = useMagnetic(0.25);
  const whatsappRef = useMagnetic(0.25);
  const bgLayerRef = useRef(null);

  // Gentle parallax: the ambient glow drifts slightly slower than scroll.
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    let frame = null;

    const handleScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const offset = window.scrollY;
        if (bgLayerRef.current) {
          bgLayerRef.current.style.transform = `translate3d(-50%, calc(-50% + ${offset * 0.15}px), 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >

      {/* Background Radial Glow (parallax layer) */}
      <div
        ref={bgLayerRef}
        className="ambient-glow-bg top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Cinematic light sweep, hero-scoped */}
      <div className="light-sweep" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* Shutter Camera Emblem */}
        <div
          data-reveal="scale"
          className="mb-6 transform hover:scale-105 transition-transform duration-500 cursor-pointer"
        >
          <HeroShutterEmblem className="w-52 h-auto sm:w-60 md:w-64" />
        </div>


        {/* Section Badge */}
        <div
          data-reveal
          data-reveal-delay="80"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/40 text-gold-light text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-lg shadow-gold-primary/10 animate-pulse-slow"
        >

          <Sparkles className="w-4 h-4 text-gold-primary" />

          <span>
            {studioData.badge}
          </span>

        </div>


        {/* Hero Headline */}
        <h1
          data-reveal
          data-reveal-delay="160"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-slate-100 text-balance"
        >

          Visuals,{' '}

          <span className="text-gold-gradient">
            Digital Experiences
          </span>

          {' '}&amp; Growth.

        </h1>


        {/* Hero Subtitle */}
        <p
          data-reveal
          data-reveal-delay="260"
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed mb-8"
        >
          {studioData.subHeadline}
        </p>


        {/* Service Highlights */}
        <div
          data-reveal
          data-reveal-delay="340"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >

          {/* Video Production */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-slate-700/70 text-slate-300 text-xs sm:text-sm">

            <Video className="w-4 h-4 text-gold-primary" />

            <span>
              Video Production
            </span>

          </div>


          {/* Social Media */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-slate-700/70 text-slate-300 text-xs sm:text-sm">

            <TrendingUp className="w-4 h-4 text-gold-primary" />

            <span>
              Social Media Growth
            </span>

          </div>


          {/* Web Development */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-gold-primary/30 text-slate-300 text-xs sm:text-sm">

            <Monitor className="w-4 h-4 text-gold-primary" />

            <span>
              Web Development
            </span>

          </div>

        </div>


        {/* Action Buttons */}
        <div
          data-reveal
          data-reveal-delay="420"
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >

          {/* Explore Work */}
          <a
            ref={exploreRef}
            href="#portfolio"
            onClick={onExploreClick}
            data-cursor="VIEW"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-primary via-amber-500 to-gold-dark hover:from-gold-light hover:to-gold-primary text-black font-bold text-sm tracking-wide shadow-xl shadow-gold-primary/25 hover:shadow-gold-primary/40 hover:-translate-y-0.5 transition-all duration-200"
          >

            <Play className="w-4 h-4 fill-current" />

            <span>
              Explore Work
            </span>

          </a>


          {/* WhatsApp */}
          <a
            ref={whatsappRef}
            href={studioData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-dark-800/90 hover:bg-dark-700 border border-gold-primary/30 hover:border-gold-primary text-slate-100 hover:text-gold-light font-semibold text-sm shadow-lg shadow-black/40 hover:-translate-y-0.5 transition-all duration-200"
          >

            <MessageSquare className="w-4 h-4 text-whatsapp-green" />

            <span>
              📲 Start a Project
            </span>

            <ArrowRight className="w-4 h-4" />

          </a>

        </div>


        {/* Studio Stats — existing data only, animated on scroll into view */}
        <div
          data-reveal
          data-reveal-delay="500"
          className="flex flex-wrap items-center justify-center divide-x divide-slate-800 rounded-2xl bg-dark-800/50 border border-slate-800 px-2 py-3"
        >
          {studioData.stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>

      </div>

    </section>
  );
};
