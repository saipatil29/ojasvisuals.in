import React from 'react';

/**
 * Fixed, whole-page cinematic atmosphere: two slow-drifting ambient glows
 * (gold + cyan) plus a very subtle film-grain overlay. Pure CSS/keyframes
 * (see index.css .atmosphere-bg / .film-grain) — no canvas, no WebGL, so
 * it stays GPU-cheap and never affects layout or scroll performance.
 */
export const AmbientAtmosphere = () => {
  return (
    <>
      <div className="atmosphere-bg" />
      <div className="film-grain" />
    </>
  );
};

export default AmbientAtmosphere;
