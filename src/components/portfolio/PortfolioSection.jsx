import React, { useState } from 'react';
import { portfolioCategories, portfolioItems } from '../../data/portfolioData';
import { studioData } from '../../data/content';
import { VideoPreviewModal } from './VideoPreviewModal';
import { Instagram, Play, Eye, Heart, Search, Filter, Sparkles, ExternalLink } from 'lucide-react';

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Filter items
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
          Portfolio
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Selected Showcase
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          High-energy cinematic vertical reels, spec commercials, and branded storytelling crafted for high engagement.
        </p>
      </div>

      {/* Instagram Live Feed Banner */}
      <div className="text-center mb-10">
        <a
          href={studioData.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-xl shadow-pink-600/30 hover:scale-105 transition-all duration-300"
        >
          <Instagram className="w-4 h-4" />
          <span>Watch Latest 4K Reels on @ojasvisuals.official</span>
          <span className="text-white/80">↗</span>
        </a>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Pills */}
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

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search reel styles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-dark-800 border border-slate-700/60 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-primary"
          />
        </div>

      </div>

      {/* 9:16 Vertical Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl bg-dark-800/40 border border-slate-800">
          <p className="text-slate-400 text-sm">No portfolio items found matching your filter.</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-3 text-xs text-gold-primary hover:underline font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[9/16] max-h-[540px] border border-gold-primary/20 hover:border-gold-primary shadow-xl shadow-black/50 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-primary/20 bg-dark-800 flex flex-col justify-between p-5"
            >
              {/* Background gradient simulating video look */}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} transition-transform duration-700 group-hover:scale-105`} />
              
              {/* Top Header info */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gold-primary/30 text-[10px] font-bold text-gold-light uppercase tracking-wider">
                  {item.tag}
                </span>
                
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-slate-200">
                  <Eye className="w-3 h-3 text-gold-primary" /> {item.views}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-16 h-16 rounded-full bg-gold-primary/90 text-black flex items-center justify-center shadow-2xl shadow-gold-primary/50 group-hover:scale-110 group-hover:bg-gold-light transition-all duration-300">
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Details Overlay */}
              <div className="relative z-10 p-4 rounded-xl bg-dark-900/90 backdrop-blur-md border border-slate-700/50 group-hover:border-gold-primary/40 transition-colors">
                <h4 className="font-heading font-bold text-base text-slate-100 group-hover:text-gold-light transition-colors mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gold-light/90 font-medium">
                  {item.subtitle}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>⏱ {item.duration} Reel</span>
                  <span className="text-gold-primary font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Preview 4K →
                  </span>
                </div>
              </div>

              {/* Ambient border glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-primary/40 rounded-2xl pointer-events-none transition-colors" />
            </div>
          ))}
        </div>
      )}

      {/* Video Preview Modal */}
      <VideoPreviewModal
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        item={selectedVideo}
      />
    </section>
  );
};