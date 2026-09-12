import React, { useEffect, useState } from 'react';
import { ShutterLogo } from '../../assets/icons/ShutterLogo';

/**
 * Cinematic first-load preloader.
 * - Shows once per browser session (sessionStorage flag), never on
 *   in-app navigation or route changes.
 * - Respects prefers-reduced-motion by skipping straight to the site.
 * - Total runtime is ~1.6s so it never makes the visitor wait.
 */
export const Preloader = ({ onDone }) => {
  const [stage, setStage] = useState('logo'); // logo -> text -> sweep -> exit -> done
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const alreadyVisited =
      typeof window !== 'undefined' &&
      window.sessionStorage.getItem('ojasVisualsPreloaderShown') === '1';

    if (prefersReducedMotion || alreadyVisited) {
      setSkip(true);
      onDone && onDone();
      return;
    }

    window.sessionStorage.setItem('ojasVisualsPreloaderShown', '1');
    document.body.style.overflow = 'hidden';

    const t1 = setTimeout(() => setStage('text'), 450);
    const t2 = setTimeout(() => setStage('sweep'), 1050);
    const t3 = setTimeout(() => setStage('exit'), 1450);
    const t4 = setTimeout(() => {
      document.body.style.overflow = '';
      onDone && onDone();
    }, 1850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (skip) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500 ${
        stage === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Ambient glow behind logo */}
      <div className="absolute w-72 h-72 bg-gold-primary/10 rounded-full blur-3xl animate-preloader-glow" />

      {/* Logo */}
      <div
        className={`relative transition-all duration-700 ease-out ${
          stage === 'logo'
            ? 'opacity-0 scale-75 -rotate-6'
            : 'opacity-100 scale-100 rotate-0'
        }`}
      >
        <ShutterLogo size={72} className="drop-shadow-[0_0_24px_rgba(245,158,11,0.45)]" />
      </div>

      {/* Wordmark */}
      <div
        className={`mt-6 flex flex-col items-center transition-all duration-700 ease-out ${
          stage === 'logo' ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
        }`}
      >
        <span className="font-heading font-bold text-2xl sm:text-3xl tracking-[0.3em] text-gold-gradient">
          OJAS VISUALS
        </span>
        <span className="mt-2 text-[10px] sm:text-xs tracking-[0.35em] text-slate-400 uppercase font-semibold">
          Creative Production × Digital Experiences
        </span>
      </div>

      {/* Light sweep */}
      {(stage === 'sweep' || stage === 'exit') && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-gold-light/25 to-transparent skew-x-[-15deg] animate-[sweepAcross_0.9s_ease-in-out_forwards]" />
        </div>
      )}
    </div>
  );
};

export default Preloader;
