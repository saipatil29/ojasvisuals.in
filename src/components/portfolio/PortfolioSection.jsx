import React, { useState } from 'react';
import {
  portfolioCategories,
  portfolioItems
} from '../../data/portfolioData';

import { studioData } from '../../data/content';

import { VideoPreviewModal } from './VideoPreviewModal';

import {
  Instagram,
  Play,
  Eye,
  Search,
  ExternalLink,
  Monitor,
  Smartphone,
  Code2,
  ArrowUpRight
} from 'lucide-react';


export const PortfolioSection = () => {

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);


  /* ================================================== */
  /* FILTER PORTFOLIO */
  /* ================================================== */

  const filteredItems = portfolioItems.filter((item) => {

    const search = searchQuery.toLowerCase();

    const matchesCategory =
      activeCategory === 'all' ||
      item.category === activeCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(search) ||
      item.subtitle.toLowerCase().includes(search) ||
      item.tag.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });


  /* ================================================== */
  /* CHECK WEBSITE PROJECT */
  /* ================================================== */

  const isWebsiteProject = (item) => {
    return item.projectType === 'website';
  };


  return (
    <section
      id="portfolio"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >

      {/* ================================================== */}
      {/* SECTION HEADER */}
      {/* ================================================== */}

      <div className="text-center mb-12">

        <div data-reveal className="inline-block bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
          Portfolio
        </div>

        <h2 data-reveal data-reveal-delay="80" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Selected Showcase
        </h2>

        <p data-reveal data-reveal-delay="140" className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          From cinematic video production and branded storytelling to modern,
          responsive websites and digital experiences built for ambitious brands.
        </p>

      </div>


      {/* ================================================== */}
      {/* INSTAGRAM BANNER */}
      {/* ================================================== */}

      <div data-reveal className="text-center mb-10">

        <a
          href={studioData.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-xl shadow-pink-600/30 hover:scale-105 transition-all duration-300"
        >

          <Instagram className="w-4 h-4" />

          <span>
            Watch Latest 4K Reels on @ojasvisuals.official
          </span>

          <span className="text-white/80">
            ↗
          </span>

        </a>

      </div>


      {/* ================================================== */}
      {/* FILTER + SEARCH */}
      {/* ================================================== */}

      <div data-reveal className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

        {/* CATEGORY BUTTONS */}

        <div className="flex flex-wrap justify-center gap-2">

          {portfolioCategories.map((cat) => {

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gold-primary text-black shadow-lg shadow-gold-primary/20 scale-105"
                    : "bg-dark-800 border border-slate-700/60 text-slate-400 hover:text-white hover:border-slate-600"
                }`}
              >
                {cat.label}
              </button>
            );

          })}

        </div>


        {/* SEARCH */}

        <div className="relative w-full sm:w-64">

          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />

          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-dark-800 border border-slate-700/60 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-primary transition-colors"
          />

        </div>

      </div>


      {/* ================================================== */}
      {/* NO RESULTS */}
      {/* ================================================== */}

      {filteredItems.length === 0 ? (

        <div className="text-center py-16 p-8 rounded-2xl bg-dark-800/40 border border-slate-800">

          <p className="text-slate-400 text-sm">
            No portfolio items found matching your filter.
          </p>

          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs text-gold-primary hover:underline font-semibold"
          >
            Reset Filters
          </button>

        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredItems.map((item, idx) => {

            /* ================================================== */
            /* WEBSITE PROJECT CARD */
            /* ================================================== */

            if (isWebsiteProject(item)) {

              return (
                <div
                  key={item.id}
                  data-reveal="scale"
                  data-reveal-delay={(idx % 3) * 100}
                  data-cursor="EXPLORE"
                  className="group relative rounded-2xl overflow-hidden border border-gold-primary/20 hover:border-gold-primary shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-primary/20 bg-dark-800"
                >

                  {/* Project Number */}
                  <span className="absolute top-4 left-4 z-30 font-heading text-xs font-bold text-gold-light/70 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-gold-primary/20">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Browser Window */}

                  <div className="relative h-[360px] overflow-hidden">

                    {/* Background */}

                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}
                    />


                    {/* Browser Header */}

                    <div className="absolute top-4 left-4 right-4 z-20">

                      <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950/90 backdrop-blur-md">

                        {/* Browser Top Bar */}

                        <div className="h-9 px-3 flex items-center gap-2 border-b border-white/10">

                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />

                          <div className="ml-2 flex-1 h-5 rounded-md bg-white/5 border border-white/10 flex items-center px-3">

                            <span className="text-[8px] text-slate-500 truncate">
                              ojasvisuals.in
                            </span>

                          </div>

                        </div>


                        {/* Fake Website Preview */}

                        <div className="h-[260px] bg-dark-900 overflow-hidden">

                          {/* Mini Navigation */}

                          <div className="h-10 px-4 flex items-center justify-between border-b border-white/5">

                            <div className="flex items-center gap-2">

                              <div className="w-5 h-5 rounded-full bg-gold-primary/90" />

                              <div className="w-14 h-1.5 rounded-full bg-slate-700" />

                            </div>

                            <div className="flex gap-2">

                              <span className="w-8 h-1 rounded-full bg-slate-700" />
                              <span className="w-8 h-1 rounded-full bg-slate-700" />
                              <span className="w-8 h-1 rounded-full bg-slate-700" />

                            </div>

                          </div>


                          {/* Mini Hero */}

                          <div className="p-6">

                            <div className="max-w-[75%]">

                              <div className="text-[8px] uppercase tracking-widest text-gold-primary mb-2">
                                {item.tag}
                              </div>

                              <div className="text-xl font-bold text-white leading-tight mb-2">
                                Digital
                                <br />
                                Experiences.
                              </div>

                              <div className="w-32 h-1.5 rounded-full bg-slate-700 mb-2" />

                              <div className="w-24 h-1.5 rounded-full bg-slate-800 mb-4" />

                              <div className="inline-flex px-3 py-1.5 rounded-md bg-gold-primary text-black text-[8px] font-bold">
                                Explore
                              </div>

                            </div>


                            {/* Mini Cards */}

                            <div className="grid grid-cols-3 gap-2 mt-8">

                              <div className="h-12 rounded-md bg-slate-800/70 border border-slate-700" />
                              <div className="h-12 rounded-md bg-slate-800/70 border border-slate-700" />
                              <div className="h-12 rounded-md bg-slate-800/70 border border-slate-700" />

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>


                    {/* Website Badge */}

                    <div className="absolute top-7 left-7 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-gold-primary/40 text-[10px] font-bold text-gold-light uppercase tracking-wider">

                        <Code2 className="w-3 h-3" />

                        Web Development

                      </span>

                    </div>


                    {/* Responsive Icons */}

                    <div className="absolute bottom-5 right-5 z-30 flex items-center gap-1.5">

                      <span className="p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-slate-300">

                        <Monitor className="w-3.5 h-3.5" />

                      </span>

                      <span className="p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-slate-300">

                        <Smartphone className="w-3.5 h-3.5" />

                      </span>

                    </div>

                  </div>


                  {/* Website Details */}

                  <div className="relative p-5 bg-dark-900/95 border-t border-slate-800">

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <h4 className="font-heading font-bold text-base text-slate-100 group-hover:text-gold-light transition-colors mb-1">

                          {item.title}

                        </h4>

                        <p className="text-xs text-gold-light/90 font-medium">

                          {item.subtitle}

                        </p>

                      </div>

                      <ArrowUpRight className="w-5 h-5 text-gold-primary shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                    </div>


                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">

                      {item.description}

                    </p>


                    {/* Project Details */}

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">

                      <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400">

                        <Monitor className="w-3 h-3 text-gold-primary" />

                        {item.aspect}

                      </span>

                      <span className="text-[10px] font-semibold text-gold-primary">

                        {item.status || "Web Project"}

                      </span>

                    </div>


                    {/* Deliverables */}

                    {item.deliverables && item.deliverables.length > 0 && (

                      <div className="mt-3 flex flex-wrap gap-1.5">

                        {item.deliverables.slice(0, 3).map((deliverable, index) => (

                          <span
                            key={index}
                            className="px-2 py-1 rounded-md bg-dark-800 border border-slate-800 text-[9px] text-slate-500"
                          >
                            {deliverable}
                          </span>

                        ))}

                      </div>

                    )}

                  </div>


                  {/* Glow */}

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-primary/30 rounded-2xl pointer-events-none transition-colors" />

                </div>
              );
            }


            /* ================================================== */
            /* VIDEO PROJECT CARD */
            /* ================================================== */

            return (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                data-reveal="scale"
                data-reveal-delay={(idx % 3) * 100}
                data-cursor="WATCH"
                className="group relative rounded-2xl overflow-hidden aspect-[9/16] max-h-[540px] border border-gold-primary/20 hover:border-gold-primary shadow-xl shadow-black/50 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-primary/20 bg-dark-800 flex flex-col justify-between p-5"
              >

                {/* Project Number */}
                <span className="absolute top-4 right-4 z-20 font-heading text-xs font-bold text-gold-light/70 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-gold-primary/20">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Background Gradient */}

                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradient} transition-transform duration-700 group-hover:scale-110`}
                />


                {/* Top Header */}

                <div className="relative z-10 flex items-center justify-between">

                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gold-primary/30 text-[10px] font-bold text-gold-light uppercase tracking-wider">

                    {item.tag}

                  </span>


                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-slate-200">

                    <Eye className="w-3 h-3 text-gold-primary" />

                    {item.views}

                  </span>

                </div>


                {/* Play Button */}

                <div className="relative z-10 flex items-center justify-center my-auto">

                  <div className="w-16 h-16 rounded-full bg-gold-primary/90 text-black flex items-center justify-center shadow-2xl shadow-gold-primary/50 group-hover:scale-110 group-hover:bg-gold-light transition-all duration-300">

                    <Play className="w-7 h-7 fill-current translate-x-0.5" />

                  </div>

                </div>


                {/* Bottom Details */}

                <div className="relative z-10 p-4 rounded-xl bg-dark-900/90 backdrop-blur-md border border-slate-700/50 group-hover:border-gold-primary/40 transition-colors">

                  <h4 className="font-heading font-bold text-base text-slate-100 group-hover:text-gold-light transition-colors mb-1">

                    {item.title}

                  </h4>

                  <p className="text-xs text-gold-light/90 font-medium">

                    {item.subtitle}

                  </p>


                  <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">

                    <span>
                      ⏱ {item.duration} Reel
                    </span>

                    <span className="text-gold-primary font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">

                      Preview 4K →

                    </span>

                  </div>

                </div>


                {/* Ambient Border */}

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-primary/40 rounded-2xl pointer-events-none transition-colors" />

              </div>
            );

          })}

        </div>

      )}


      {/* ================================================== */}
      {/* VIDEO PREVIEW MODAL */}
      {/* ================================================== */}

      <VideoPreviewModal
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        item={selectedVideo}
      />

    </section>
  );
};
