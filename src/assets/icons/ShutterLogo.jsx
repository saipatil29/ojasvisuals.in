import React from 'react';

export const ShutterLogo = ({ size = 42, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Ojas Visuals Shutter Logo"
    >
      <defs>
        <linearGradient id="navGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0BE" />
          <stop offset="30%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="navCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Outer Golden Ring */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="url(#navGoldGrad)" strokeWidth="3.5" opacity="0.95" />
      
      {/* Shutter Blades */}
      <path d="M 50 10 A 40 40 0 0 1 84.6 30 L 61 43 Z" fill="url(#navGoldGrad)" opacity="0.95" />
      <path d="M 84.6 30 A 40 40 0 0 1 84.6 70 L 61 57 Z" fill="url(#navGoldGrad)" opacity="0.85" />
      <path d="M 84.6 70 A 40 40 0 0 1 50 90 L 50 63 Z" fill="url(#navGoldGrad)" opacity="0.95" />
      <path d="M 50 90 A 40 40 0 0 1 15.4 70 L 39 57 Z" fill="url(#navGoldGrad)" opacity="0.85" />
      <path d="M 15.4 70 A 40 40 0 0 1 15.4 30 L 39 43 Z" fill="url(#navGoldGrad)" opacity="0.95" />
      <path d="M 15.4 30 A 40 40 0 0 1 50 10 L 50 37 Z" fill="url(#navGoldGrad)" opacity="0.85" />
      
      {/* Inner Lens Element */}
      <circle cx="50" cy="50" r="14" fill="#070a12" stroke="url(#navGoldGrad)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="7" fill="url(#navCyanGrad)" />
      <circle cx="50" cy="50" r="2.5" fill="#ffffff" />
    </svg>
  );
};

export const HeroShutterEmblem = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 320"
      width="240"
      height="192"
      className={className}
      style={{ filter: "drop-shadow(0 0 28px rgba(245, 158, 11, 0.4))" }}
      role="img"
      aria-label="Ojas Visuals Main Emblem"
    >
      <defs>
        <linearGradient id="heroGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0BE" />
          <stop offset="25%" stopColor="#F59E0B" />
          <stop offset="65%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="heroCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      
      {/* Viewfinder Focus Brackets */}
      <path d="M 110 50 L 110 30 L 130 30" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
      <path d="M 290 50 L 290 30 L 270 30" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
      <path d="M 110 170 L 110 190 L 130 190" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
      <path d="M 290 170 L 290 190 L 270 190" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
      
      {/* Main Shutter Assembly */}
      <g transform="translate(200, 110)">
        <circle cx="0" cy="0" r="62" fill="none" stroke="url(#heroGoldGrad)" strokeWidth="4" opacity="0.95" />
        <path d="M 0 -56 A 56 56 0 0 1 48 -28 L 15 -9 Z" fill="url(#heroGoldGrad)" opacity="0.95" />
        <path d="M 48 -28 A 56 56 0 0 1 48 28 L 15 9 Z" fill="url(#heroGoldGrad)" opacity="0.85" />
        <path d="M 48 28 A 56 56 0 0 1 0 56 L 0 18 Z" fill="url(#heroGoldGrad)" opacity="0.95" />
        <path d="M 0 56 A 56 56 0 0 1 -48 28 L -15 9 Z" fill="url(#heroGoldGrad)" opacity="0.85" />
        <path d="M -48 28 A 56 56 0 0 1 -48 -28 L -15 -9 Z" fill="url(#heroGoldGrad)" opacity="0.95" />
        <path d="M -48 -28 A 56 56 0 0 1 0 -56 L 0 -18 Z" fill="url(#heroGoldGrad)" opacity="0.85" />
        
        {/* Core Optical Element */}
        <circle cx="0" cy="0" r="18" fill="#070a12" stroke="url(#heroGoldGrad)" strokeWidth="2" />
        <circle cx="0" cy="0" r="9" fill="url(#heroCyanGrad)" />
        <circle cx="0" cy="0" r="3.5" fill="#ffffff" />
      </g>
      
      {/* Typography */}
      <text x="200" y="240" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="28" fontWeight="700" letterSpacing="8" fill="url(#heroGoldGrad)">OJAS</text>
      <text x="200" y="275" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="600" letterSpacing="10" fill="#E2E8F0">VISUALS</text>
      
      <line x1="120" y1="295" x2="185" y2="295" stroke="#334155" strokeWidth="1.2" />
      <polygon points="200,292 203,295 200,298 197,295" fill="#F59E0B" />
      <line x1="215" y1="295" x2="280" y2="295" stroke="#334155" strokeWidth="1.2" />
    </svg>
  );
};