import React from 'react';
import { studioData } from '../../data/content';
import {
  Camera,
  Aperture,
  Video,
  Mic,
  Sliders,
  Smartphone
} from 'lucide-react';

export const ProductionGear = () => {
  const icons = [
    Camera,
    Aperture,
    Video,
    Mic,
    Sliders,
    Smartphone
  ];

  return (
    <section
      id="gear"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div data-reveal="scale" className="p-8 sm:p-12 rounded-3xl bg-dark-800/80 border border-slate-700/60 shadow-2xl relative overflow-hidden">

        {/* Ambient corner glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 relative">
          <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
            Cinema Grade Standards
          </span>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-100 mt-1">
            Production Equipment &amp; Studio Suite
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Every frame is captured with industry-standard 10-bit cinema cameras,
            high-aperture prime optics, and master studio color science.
          </p>
        </div>

        {/* Equipment Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {studioData.productionGear.map((gear, idx) => {
            const IconComp = icons[idx];

            return (
              <div
                key={idx}
                data-reveal
                data-reveal-delay={idx * 80}
                className="group p-5 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-gold-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-dark-800 border border-slate-700 text-gold-primary shrink-0 group-hover:scale-110 group-hover:border-gold-primary/50 group-hover:shadow-lg group-hover:shadow-gold-primary/20 transition-all duration-300">
                  <IconComp className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[11px] font-bold text-gold-light uppercase tracking-wider block mb-1">
                    {gear.category}
                  </span>

                  <h4 className="font-heading font-bold text-sm text-slate-100 mb-1">
                    {gear.item}
                  </h4>

                  <p className="text-xs text-slate-400">
                    {gear.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
