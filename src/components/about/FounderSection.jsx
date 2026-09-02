import React from 'react';
import { studioData } from '../../data/content';
import founderImg from '../../assets/images/founder_om_parmar.jpg';
import ghanshyamImg from '../../assets/images/ghanshyam_patel.png';
import raviImg from '../../assets/images/ravi_panchal.png';
import { Sparkles, MessageSquare, ExternalLink, Award, CheckCircle2, Instagram, Phone, ShieldCheck } from 'lucide-react';

export const FounderSection = () => {
  const { founder, team } = studioData;

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
          The Minds Behind Ojas Visuals
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Leadership &amp; Core Creative Team
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Dedicated directors, cinematographers, and brand strategists committed to bringing high-voltage visual excellence to your brand.
        </p>
      </div>

      {/* Main Founder Profile Card (Om Parmar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-dark-800/95 via-dark-700/70 to-dark-800/95 border border-gold-primary/30 shadow-2xl shadow-black/70 relative overflow-hidden mb-12">

        {/* Ambient Corner Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Left Column: Om's Image */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-2xl overflow-hidden border-2 border-gold-primary/40 shadow-2xl shadow-gold-primary/20 aspect-[3/4] max-h-[500px] w-full mx-auto bg-dark-900">
            <img
              src={founderImg}
              alt="Om Parmar - Founder & Director at Ojas Visuals"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent pointer-events-none" />

            {/* Director Badge Tag */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-dark-900/95 border border-gold-primary/50 text-gold-light text-xs font-semibold backdrop-blur-md">
                {founder.tag}
              </span>

              <span className="text-[11px] text-slate-300 font-medium bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-sm">
                Ahmedabad, India
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Core Skills */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100 mb-1">
              {founder.name}
            </h3>

            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold tracking-wide">
              <span className="text-gold-light">{founder.title}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-200">Videographer | Editor</span>
            </div>
          </div>

          {/* Fully Preserved Bio Paragraphs */}
          <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="border-l-2 border-gold-primary/50 pl-4 py-1 text-slate-200">
              {founder.bio1}
            </p>

            <p className="text-slate-400">
              {founder.bio2}
            </p>
          </div>

          {/* Interactive Skills Badges */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Core Technical Capabilities
            </h4>

            <div className="flex flex-wrap gap-2">
              {founder.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-dark-700/90 hover:bg-dark-600 border border-gold-primary/20 hover:border-gold-primary/50 text-slate-200 text-xs font-medium transition-all"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={founder.buttons.vipLine.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold-primary to-amber-600 hover:from-gold-light hover:to-gold-primary text-black font-bold text-xs sm:text-sm shadow-lg shadow-gold-primary/25 hover:-translate-y-0.5 transition-all"
            >
              <span>{founder.buttons.vipLine.label}</span>
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-dark-700/80 hover:bg-dark-600 border border-slate-700 hover:border-gold-primary/40 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
            >
              <span>View Work</span>
            </a>

            <a
              href={founder.buttons.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-pink-500/40 hover:border-pink-400 text-pink-300 hover:text-white hover:bg-pink-600/20 text-xs sm:text-sm font-semibold transition-all"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Core Creative Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Ghanshyam Patel Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-dark-800/90 to-dark-900 border border-gold-primary/20 hover:border-gold-primary/50 shadow-xl shadow-black/50 transition-all duration-300 flex flex-col items-center text-center relative group">

          {/* Ghanshyam Photo */}
          <div className="relative w-36 h-48 rounded-2xl overflow-hidden mb-6 border-2 border-gold-primary/30 shadow-lg shadow-gold-primary/10 group-hover:scale-105 transition-transform bg-dark-900">
            <img
              src={ghanshyamImg}
              alt="Ghanshyam Patel - Creative Lead at Ojas Visuals"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-dark-900/90 px-3 py-0.5 rounded-full border border-gold-primary text-[10px] font-bold text-gold-light whitespace-nowrap shadow">
              🎨 Creative Lead
            </div>
          </div>

          <h3 className="font-heading text-2xl font-bold text-slate-100 mb-1">
            Ghanshyam Patel
          </h3>

          <p className="text-gold-light text-xs font-semibold tracking-wide mb-3">
            Videographer | Editor | Graphics Designer
          </p>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
            Capturing moments, shaping visions, and telling compelling stories. Delivering high-impact visuals, precision video editing, and modern graphics design.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="skill-pill">🎥 Videography</span>
            <span className="skill-pill">✂️ Video Editing</span>
            <span className="skill-pill">🎨 Motion &amp; Graphic Design</span>
          </div>

          <a
            href="https://wa.me/917990102448?text=Hi%20Ghanshyam,%20I%20want%20to%20collaborate%20on%20design%20and%20video%20production."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-700/80 hover:bg-gold-primary hover:text-black text-slate-200 text-xs font-bold border border-slate-700 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>💬 Connect with Ghanshyam</span>
          </a>
        </div>

        {/* Ravi Panchal Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-dark-800/90 to-dark-900 border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl shadow-black/50 transition-all duration-300 flex flex-col items-center text-center relative group">

          {/* Ravi Photo */}
          <div className="relative w-36 h-48 rounded-2xl overflow-hidden mb-6 border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform bg-dark-900">

            <img
              src={raviImg}
              alt="Ravi Panchal - Advisor & Marketing Manager at Ojas Visuals"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-dark-900/90 px-3 py-0.5 rounded-full border border-cyan-400 text-[10px] font-bold text-cyan-400 whitespace-nowrap shadow">
              📈 Strategic Lead
            </div>
          </div>

          <h3 className="font-heading text-2xl font-bold text-slate-100 mb-1">
            Ravi Panchal
          </h3>

          <p className="text-cyan-400 text-xs font-semibold tracking-wide mb-3">
            Advisor &amp; Marketing Manager
          </p>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
            Strategizing brand narratives and driving visual excellence for the next era. Focused on full-funnel marketing management, client acquisition, and advisory.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-dark-700/80 border border-cyan-500/30 text-cyan-200 text-xs font-medium">
              📈 Marketing Strategy
            </span>

            <span className="px-3 py-1 rounded-full bg-dark-700/80 border border-cyan-500/30 text-cyan-200 text-xs font-medium">
              🤝 Brand Consulting
            </span>

            <span className="px-3 py-1 rounded-full bg-dark-700/80 border border-cyan-500/30 text-cyan-200 text-xs font-medium">
              🚀 Client Acquisition
            </span>
          </div>

          <a
            href="https://wa.me/917990102448?text=Hi%20Ravi,%20I%20want%20to%20discuss%20brand%20strategy%20and%20marketing%20consulting."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-700/80 hover:bg-cyan-500 hover:text-black text-slate-200 text-xs font-bold border border-slate-700 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>💬 Connect with Ravi</span>
          </a>
        </div>

      </div>
    </section>
  );
};