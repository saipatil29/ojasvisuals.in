import React from 'react';
import { studioData } from '../../data/content';
import { CheckCircle, Sparkles, ArrowRight, Layers, Film, Award, Clock } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { services } = studioData;

  const workflows = [
    { step: "01", title: "Concept & Hook Design", desc: "Brainstorming high-retention viral angles & script flow tailored to your audience." },
    { step: "02", title: "4K Cinematic Shoot", desc: "High-grade lighting, gimbal stabilization, and multi-angle 120fps slow-motion capture." },
    { step: "03", title: "DaVinci Color & Sound", desc: "Speed ramps, kinetic subtitles, crisp multi-layered sound design (SFX), and studio color grading." },
    { step: "04", title: "Master Export & Review", desc: "Delivery through our Private Review Vault with 48h turnaround for quick revisions." }
  ];

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
          Our Expertise
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Creative Services
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          From high-energy Instagram Reels to end-to-end commercial video production and social media management.
        </p>
      </div>

      {/* Services 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((srv) => (
          <div
            key={srv.id}
            className="group relative p-8 rounded-3xl bg-gradient-to-b from-dark-800/90 to-dark-900 border border-gold-primary/15 hover:border-gold-primary/50 shadow-xl shadow-black/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-4xl p-3 rounded-2xl bg-dark-700/60 border border-slate-700/50 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light">
                {srv.badge}
              </span>
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <h3 className="font-heading text-xl font-bold text-slate-100 group-hover:text-gold-light transition-colors mb-3">
                {srv.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {srv.description}
              </p>

              {/* Key Features list */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800">
                {srv.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For + CTA */}
            <div className="pt-6 border-t border-slate-800">
              <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wider mb-4">
                Ideal For: <span className="text-slate-400 normal-case font-normal">{srv.idealFor}</span>
              </p>
              
              <a
                href="#contact"
                onClick={() => onSelectService && onSelectService(srv.title)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-700/70 group-hover:bg-gold-primary group-hover:text-black text-slate-200 font-bold text-xs transition-all duration-200"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Production Workflow Timeline Banner */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-gold-primary/20">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">Our Seamless Process</span>
          <h3 className="font-heading text-2xl font-bold text-slate-100 mt-1">
            How We Bring Your Story to Life
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((wf, idx) => (
            <div key={idx} className="relative p-5 rounded-2xl bg-dark-800/60 border border-slate-700/50">
              <span className="font-heading text-3xl font-extrabold text-gold-primary/30 mb-2 block">
                {wf.step}
              </span>
              <h4 className="font-heading font-bold text-base text-slate-100 mb-2">
                {wf.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {wf.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};