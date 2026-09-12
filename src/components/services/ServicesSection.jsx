import React from 'react';
import { studioData } from '../../data/content';
import {
  CheckCircle,
  Sparkles,
  ArrowRight,
  Code2,
  Film,
  Smartphone,
  Globe
} from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { services } = studioData;

  const workflows = [
    {
      step: '01',
      title: 'Strategy & Concept',
      desc: 'We understand your brand, audience, goals, and create the right creative or digital strategy.'
    },
    {
      step: '02',
      title: 'Creative Production',
      desc: 'From cinematic shoots and social content to UI design and website development, we turn ideas into experiences.'
    },
    {
      step: '03',
      title: 'Build, Edit & Refine',
      desc: 'Professional editing, color grading, responsive development, performance optimization, and detailed quality checks.'
    },
    {
      step: '04',
      title: 'Launch & Growth',
      desc: 'Final delivery, website deployment, revisions, content systems, and ongoing support to help your brand grow.'
    }
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >

      {/* ================================================== */}
      {/* SECTION HEADER */}
      {/* ================================================== */}

      <div className="text-center mb-16">

        <div data-reveal className="inline-flex items-center gap-2 bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">

          <Sparkles className="w-3.5 h-3.5 text-gold-primary" />

          <span>
            Our Expertise
          </span>

        </div>

        <h2 data-reveal data-reveal-delay="80" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Creative &{' '}
          <span className="text-gold-gradient">
            Digital Services
          </span>
        </h2>

        <p data-reveal data-reveal-delay="140" className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          From cinematic video production and social media growth to modern
          website development, we build complete digital experiences for
          ambitious brands.
        </p>

      </div>


      {/* ================================================== */}
      {/* SERVICES GRID */}
      {/* ================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

        {services.map((srv, idx) => (

          <div
            key={srv.id}
            data-reveal="scale"
            data-reveal-delay={idx * 90}
            className="group relative p-7 rounded-3xl bg-gradient-to-b from-dark-800/90 to-dark-900 border border-gold-primary/15 hover:border-gold-primary/50 shadow-xl shadow-black/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >

            {/* Hover glow */}
            <div className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-gold-primary/0 via-gold-primary/0 to-gold-primary/0 group-hover:from-gold-primary/10 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />

            {/* Large index number */}
            <span className="absolute -top-2 -right-1 font-heading text-6xl font-extrabold text-slate-800/60 group-hover:text-gold-primary/10 transition-colors duration-500 select-none">
              {String(idx + 1).padStart(2, '0')}
            </span>

            {/* Top Area */}
            <div className="relative">

              {/* Icon + Badge */}
              <div className="flex items-center justify-between mb-6">

                <div className="text-4xl p-3 rounded-2xl bg-dark-700/60 border border-slate-700/50 group-hover:scale-110 group-hover:border-gold-primary/40 transition-all duration-300">

                  {srv.icon}

                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light">

                  {srv.badge}

                </span>

              </div>


              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-slate-100 group-hover:text-gold-light transition-colors mb-3">

                {srv.title}

              </h3>


              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">

                {srv.description}

              </p>


              {/* Features */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800">

                {srv.features.map((feat, i) => (

                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-slate-300"
                  >

                    <CheckCircle className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />

                    <span>
                      {feat}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* Bottom Area */}
            <div className="relative pt-6 mt-6 border-t border-slate-800">

              {/* Ideal For */}
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-4">

                Ideal For:{' '}

                <span className="text-slate-400 normal-case font-normal">

                  {srv.idealFor}

                </span>

              </p>


              {/* CTA */}
              <a
                href="#contact"
                data-cursor="START"
                onClick={() =>
                  onSelectService && onSelectService(srv.title)
                }
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-700/70 group-hover:bg-gold-primary group-hover:text-black text-slate-200 font-bold text-xs transition-all duration-200"
              >

                <span>
                  Start a Project
                </span>

                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />

              </a>

            </div>

          </div>

        ))}

      </div>


      {/* ================================================== */}
      {/* SERVICE TYPES */}
      {/* ================================================== */}

      <div data-reveal className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-2xl bg-dark-800/50 border border-slate-800 text-center hover:border-gold-primary/30 transition-colors">

          <Film className="w-5 h-5 text-gold-primary" />

          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            Film & Video
          </span>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-2xl bg-dark-800/50 border border-slate-800 text-center hover:border-gold-primary/30 transition-colors">

          <Smartphone className="w-5 h-5 text-gold-primary" />

          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            Social Content
          </span>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-2xl bg-dark-800/50 border border-slate-800 text-center hover:border-gold-primary/30 transition-colors">

          <Code2 className="w-5 h-5 text-gold-primary" />

          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            Web Development
          </span>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-2xl bg-dark-800/50 border border-slate-800 text-center hover:border-gold-primary/30 transition-colors">

          <Globe className="w-5 h-5 text-gold-primary" />

          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            Digital Growth
          </span>

        </div>

      </div>


      {/* ================================================== */}
      {/* WORKFLOW */}
      {/* ================================================== */}

      <div data-reveal="scale" className="p-8 sm:p-10 rounded-3xl glass-panel border border-gold-primary/20">

        <div className="text-center mb-8">

          <span className="text-xs font-bold text-gold-primary uppercase tracking-widest">
            Our Seamless Process
          </span>

          <h3 className="font-heading text-2xl font-bold text-slate-100 mt-1">
            From Idea to{' '}
            <span className="text-gold-gradient">
              Digital Impact
            </span>
          </h3>

          <p className="text-slate-400 text-sm max-w-2xl mx-auto mt-3">
            A streamlined process designed to take your project from the first
            idea to a polished final result.
          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {workflows.map((wf, idx) => (

            <div
              key={idx}
              data-reveal
              data-reveal-delay={idx * 90}
              className="relative p-5 rounded-2xl bg-dark-800/60 border border-slate-700/50 hover:border-gold-primary/30 hover:-translate-y-1 transition-all duration-300"
            >

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
