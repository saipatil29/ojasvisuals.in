import React, { useEffect, useRef } from 'react';

/**
 * Minimal thin gold line at the very top of the page showing scroll
 * progress. Uses a ref + direct style mutation (no re-renders) so it
 * stays smooth and cheap even on long pages.
 */
export const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress-bar" style={{ width: '0%' }} />;
};

export default ScrollProgress;
