import React, { useState } from 'react';
import { studioData } from '../../data/content';

export const WhatsAppFloating = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip banner */}
      <div className={`mr-3 px-3.5 py-1.5 rounded-full bg-dark-800/95 border border-whatsapp-green/40 shadow-2xl text-xs font-semibold text-slate-100 whitespace-nowrap transition-all duration-300 hidden md:flex items-center gap-1.5 ${
        showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
      }`}>
        <span className="w-2 h-2 rounded-full bg-whatsapp-green animate-ping" />
        <span>Chat with Om Parmar • Instant Response</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={studioData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="CHAT"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-2xl shadow-whatsapp-green/40 hover:shadow-whatsapp-green/60 hover:scale-110 hover:-rotate-6 transition-all duration-300"
        title="Chat with Om Parmar on WhatsApp"
        aria-label="Direct WhatsApp Chat with Ojas Visuals"
      >
        {/* Slow ambient pulse ring */}
        <span className="absolute inset-0 rounded-full bg-whatsapp-green/40 animate-glow-pulse" />

        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-dark-900"></span>
        </span>

        {/* WhatsApp Official SVG Icon */}
        <svg className="relative w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 32 32">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.766.804 5.344 2.188 7.516L2.094 30l6.703-2.078C10.875 29.196 13.359 30 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5c-2.344 0-4.547-.703-6.406-1.922l-.469-.312-4.219 1.312 1.328-4.109-.312-.469C4.703 20.047 4 18.094 4 16 4 9.383 9.383 4 16 4s12 5.383 12 12-5.383 11.5-12 11.5zm6.547-8.625c-.359-.18-2.125-1.047-2.453-1.172-.328-.125-.562-.18-.812.18-.234.359-.922 1.172-1.125 1.406-.219.234-.438.266-.797.078-.359-.18-1.516-.562-2.891-1.781-1.078-.953-1.812-2.141-2.016-2.5-.219-.359-.016-.547.156-.734.156-.156.359-.406.547-.609.18-.219.234-.359.359-.609.125-.234.062-.453-.031-.641-.094-.18-.812-1.953-1.109-2.672-.297-.703-.594-.609-.812-.609h-.688c-.234 0-.609.094-.938.453-.328.359-1.25 1.219-1.25 2.969 0 1.75 1.281 3.438 1.453 3.672.18.234 2.516 3.844 6.094 5.391.859.375 1.531.594 2.062.766.859.281 1.641.25 2.266.156.688-.109 2.125-.875 2.422-1.719.312-.844.312-1.578.219-1.719-.094-.141-.328-.234-.688-.422z"/>
        </svg>
      </a>
    </div>
  );
};
