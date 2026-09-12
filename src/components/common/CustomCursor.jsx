import React, { useEffect, useRef, useState } from 'react';

/**
 * Premium custom cursor — desktop / fine-pointer only.
 * Any element can opt in with a `data-cursor="Label"` attribute to expand
 * the ring and show a short label (e.g. "VIEW", "WATCH", "EXPLORE").
 * Automatically disabled on touch/coarse-pointer devices and never
 * interferes with clicking or scrolling (pointer-events: none throughout).
 */
export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isFinePointer =
      window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setEnabled(true);

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let dotX = ringX;
    let dotY = ringY;
    let targetX = ringX;
    let targetY = ringY;
    let frame;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const hovered = e.target.closest('[data-cursor]');
      if (hovered) {
        setActive(true);
        setLabel(hovered.getAttribute('data-cursor') || '');
      } else {
        setActive(false);
        setLabel('');
      }
    };

    const animate = () => {
      dotX += (targetX - dotX) * 0.9;
      dotY += (targetY - dotY) * 0.9;
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className={`custom-cursor-ring ${active ? 'is-active' : ''}`}>
        {active && label}
      </div>
    </>
  );
};

export default CustomCursor;
