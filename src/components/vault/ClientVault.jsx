import React, { useState } from 'react';
import { Lock, Unlock, KeyRound, Download, Film, CheckCircle2, AlertCircle, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ClientVault = ({ onToast }) => {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const correctCode = 'ojas2026';

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passcode.trim().toLowerCase() === correctCode) {
      setIsUnlocked(true);
      setErrorMessage('');
      onToast && onToast('Access Granted! Loading Client Cloudinary Vault...', 'success');
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    } else {
      setErrorMessage('Invalid Passcode. Please contact Om Parmar on WhatsApp (+91 7990102448).');
      onToast && onToast('Invalid Passcode. Access Denied.', 'error');
    }
  };

  const handleSendFeedback = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    const msg = `Hello Om (Ojas Visuals),%0A%0AClient Vault Revision Notes:%0A${encodeURIComponent(feedbackText)}`;
    window.open(`https://wa.me/917990102448?text=${msg}`, '_blank');
    setFeedbackSent(true);
    onToast && onToast('Revision notes prepared on WhatsApp!', 'success');
  };

  return (
    <section id="vault" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div data-reveal className="inline-block bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
          Client Area
        </div>
        <h2 data-reveal data-reveal-delay="80" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Private Review Vault
        </h2>
        <p data-reveal data-reveal-delay="140" className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Review unreleased rough cuts, color grading variations, and download dedicated project deliverables securely.
        </p>
      </div>

      {!isUnlocked ? (
        /* Locked State */
        <div data-reveal="scale" className="glass-panel p-8 sm:p-12 rounded-3xl border-2 border-dashed border-gold-primary/40 shadow-2xl max-w-xl mx-auto text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center mx-auto mb-6 text-gold-primary animate-glow-pulse">
            <Lock className="w-8 h-8" />
          </div>

          <h3 className="font-heading text-2xl font-bold text-slate-100 mb-2">
            Enter Project Access Key
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Enter your brand's unique passcode to access high-res master files and active review timelines.
          </p>

          <form onSubmit={handleUnlock} className="space-y-4 max-w-sm mx-auto">
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                id="vaultPass"
                placeholder="Enter Access Code (e.g. ojas2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-dark-900 border border-slate-700 text-center font-heading font-semibold text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-primary focus:shadow-[0_0_0_4px_rgba(245,158,11,0.15)] text-sm tracking-wider transition-shadow"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-primary to-amber-600 hover:from-gold-light hover:to-gold-primary text-black font-bold text-sm shadow-xl shadow-gold-primary/25 hover:shadow-gold-primary/40 transition-all"
            >
              Unlock Vault
            </button>
          </form>

          {/* Status feedback */}
          {errorMessage && (
            <div className="mt-4 flex items-center justify-center gap-2 text-rose-400 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span id="vaultStatus">{errorMessage}</span>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
            Forgot your passcode? Contact <span className="text-gold-light font-medium">Om Parmar</span> directly on WhatsApp for instant client token provisioning.
          </div>
        </div>
      ) : (
        /* Unlocked Client Area Dashboard */
        <div className="p-6 sm:p-10 rounded-3xl bg-dark-800 border border-emerald-500/30 shadow-2xl space-y-8 animate-fadeIn">
          {/* Top Status Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Unlock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  Authentication Verified • Session Active
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                  Client Project Vault: <span className="text-gold-light">Active Showcase Delivery</span>
                </h3>
              </div>
            </div>

            <button
              onClick={() => setIsUnlocked(false)}
              className="px-3.5 py-1.5 rounded-full bg-dark-700 hover:bg-dark-600 text-slate-300 text-xs font-semibold border border-slate-600 transition-colors"
            >
              Lock Vault
            </button>
          </div>

          {/* Deliverables Grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Ready Master Deliverables (ProRes &amp; 4K H.264)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-700/80 flex items-center justify-between hover:border-gold-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Film className="w-8 h-8 text-gold-primary shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm text-slate-100">Reel_01_Artisan_Cafe_Final_4K.mp4</h5>
                    <span className="text-xs text-slate-400">9:16 Vertical • 60fps • 4K UHD Master (142 MB)</span>
                  </div>
                </div>
                <a
                  href="#vault"
                  onClick={() => onToast && onToast('Cloudinary Secure 4K Download Stream Triggered', 'info')}
                  className="p-2.5 rounded-xl bg-gold-primary text-black font-bold hover:bg-gold-light transition-colors"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-700/80 flex items-center justify-between hover:border-gold-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Film className="w-8 h-8 text-gold-primary shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm text-slate-100">Commercial_Perfume_Spec_4K.mp4</h5>
                    <span className="text-xs text-slate-400">9:16 Vertical • 4K UHD DaVinci Master (188 MB)</span>
                  </div>
                </div>
                <a
                  href="#vault"
                  onClick={() => onToast && onToast('Cloudinary Secure 4K Download Stream Triggered', 'info')}
                  className="p-2.5 rounded-xl bg-gold-primary text-black font-bold hover:bg-gold-light transition-colors"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Feedback & Timestamped Revision Notes */}
          <div className="p-6 rounded-2xl bg-dark-900/90 border border-gold-primary/20">
            <h4 className="font-heading font-bold text-base text-slate-100 mb-2">
              Submit Direct Timestamped Revision Notes
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Drop timecode feedback (e.g. "0:12 please speed ramp the transition") to send directly to Om Parmar.
            </p>

            <form onSubmit={handleSendFeedback} className="space-y-3">
              <textarea
                rows="3"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="E.g. Clip 01: Timecode 0:08 look great! In Clip 02 can we brighten the shadow in the cafe shot?"
                className="w-full p-3 rounded-xl bg-dark-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-gold-primary focus:shadow-[0_0_0_4px_rgba(245,158,11,0.15)] transition-shadow"
                required
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-whatsapp-green to-emerald-600 text-white text-xs font-bold shadow-md shadow-whatsapp-green/20 hover:opacity-95 transition-opacity"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Submit Notes via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
