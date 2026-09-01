import React, { useState, useEffect } from 'react';
import { Modal } from '../common/Modal';
import { Play, Pause, Volume2, VolumeX, Eye, Heart, Instagram, Sparkles, Film, ArrowUpRight } from 'lucide-react';
import { studioData } from '../../data/content';

export const VideoPreviewModal = ({ isOpen, onClose, item }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    let interval;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={item.title} maxWidth="max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* 9:16 Vertical Video Player Simulation */}
        <div className="md:col-span-6 flex justify-center">
          <div className={`relative w-full max-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-gold-primary/40 shadow-2xl bg-gradient-to-br ${item.gradient} flex flex-col justify-between p-4`}>
            
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-gold-light tracking-wider uppercase border border-gold-primary/30">
                4K 60FPS
              </span>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-gold-primary hover:text-black transition-colors"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Center Animated Reel Graphic & Play/Pause */}
            <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-gold-primary/90 hover:bg-gold-light text-black flex items-center justify-center shadow-xl shadow-gold-primary/40 hover:scale-110 transition-all mb-3"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
              </button>

              {/* Dynamic Audio Visualizer Waves */}
              {isPlaying && (
                <div className="flex items-center gap-1 h-6">
                  <span className="w-1 bg-gold-light rounded-full animate-bounce" style={{ height: '70%', animationDelay: '0.1s' }} />
                  <span className="w-1 bg-gold-light rounded-full animate-bounce" style={{ height: '100%', animationDelay: '0.2s' }} />
                  <span className="w-1 bg-gold-light rounded-full animate-bounce" style={{ height: '40%', animationDelay: '0.3s' }} />
                  <span className="w-1 bg-gold-light rounded-full animate-bounce" style={{ height: '85%', animationDelay: '0.15s' }} />
                  <span className="w-1 bg-gold-light rounded-full animate-bounce" style={{ height: '60%', animationDelay: '0.25s' }} />
                </div>
              )}
            </div>

            {/* Bottom Reel Overlay */}
            <div className="z-10 space-y-2">
              <div className="flex items-center justify-between text-xs text-white drop-shadow font-semibold">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-gold-primary" /> {item.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" /> {item.likes}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                <div className="bg-gold-primary h-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-dark-900/40 pointer-events-none" />
          </div>
        </div>

        {/* Project Details Column */}
        <div className="md:col-span-6 space-y-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-bold uppercase tracking-wider mb-2">
              {item.tag}
            </div>
            <h4 className="font-heading text-2xl font-bold text-slate-100">
              {item.title}
            </h4>
            <p className="text-xs text-gold-light font-medium mt-0.5">
              {item.subtitle}
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {item.description}
          </p>

          {/* Technical Specs */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-dark-900/80 border border-slate-700/60 text-xs">
            <div>
              <span className="text-slate-500 block font-medium">Client / Brand:</span>
              <span className="text-slate-200 font-semibold">{item.client}</span>
            </div>
            <div>
              <span className="text-slate-500 block font-medium">Camera Format:</span>
              <span className="text-slate-200 font-semibold">4K UHD S-Log3</span>
            </div>
            <div>
              <span className="text-slate-500 block font-medium">Soundscape:</span>
              <span className="text-slate-200 font-semibold">{item.soundtrack}</span>
            </div>
            <div>
              <span className="text-slate-500 block font-medium">Signature Cut:</span>
              <span className="text-slate-200 font-semibold">{item.highlight}</span>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1.5">
              Package Deliverables:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.deliverables?.map((del, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-dark-700 text-slate-300 text-[11px] font-medium border border-slate-700">
                  ✓ {del}
                </span>
              ))}
            </div>
          </div>

          {/* Direct Actions */}
          <div className="pt-2 flex items-center gap-3">
            <a
              href={studioData.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-white font-bold text-xs shadow-lg shadow-pink-600/20 hover:opacity-95 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              <span>Watch on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://wa.me/917990102448?text=Hi%20Om,%20I%20love%20the%20${encodeURIComponent(item.title)}%20reel!%20Can%20we%20make%20something%20similar%20for%20my%20brand?`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-700 hover:bg-dark-600 border border-slate-700 text-whatsapp-green font-bold text-xs flex items-center justify-center transition-colors"
              title="Inquire about this style on WhatsApp"
            >
              <span>Inquire</span>
            </a>
          </div>
        </div>

      </div>
    </Modal>
  );
};