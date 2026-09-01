import React, { useState } from 'react';
import { Calculator, Sparkles, Check, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { studioData } from '../../data/content';

export const PackageCalculator = ({ onSendQuote }) => {
  const [reelCount, setReelCount] = useState(4);
  const [duration, setDuration] = useState('half-day'); // 'half-day' | 'full-day' | 'multi-day'
  const [addons, setAddons] = useState({
    drone: false,
    colorGrade: true,
    sfx: true,
    rush: false,
    rawFootage: true
  });

  const durationMultipliers = {
    'half-day': { label: 'Half-Day Shoot (4 Hours)', base: 6000 },
    'full-day': { label: 'Full-Day Shoot (8 Hours)', base: 11000 },
    'multi-day': { label: 'Multi-Day Campaign (2-3 Days)', base: 22000 }
  };

  const addonPrices = {
    drone: { label: '4K Drone Aerial Footage', price: 3500 },
    colorGrade: { label: 'DaVinci Studio Color Grade', price: 2000 },
    sfx: { label: 'Advanced Sound Design & SFX', price: 1500 },
    rush: { label: '24-Hour Rush Turnaround', price: 3000 },
    rawFootage: { label: 'Full Raw Footage Cloud Access', price: 1500 }
  };

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Estimate calculation
  const calculateTotal = () => {
    const baseShoot = durationMultipliers[duration].base;
    const reelCost = reelCount * 2200;
    const addonCost = Object.keys(addons).reduce((sum, key) => {
      return addons[key] ? sum + addonPrices[key].price : sum;
    }, 0);
    return baseShoot + reelCost + addonCost;
  };

  const total = calculateTotal();

  const handleWhatsAppQuote = () => {
    const selectedAddonList = Object.keys(addons)
      .filter(k => addons[k])
      .map(k => addonPrices[k].label)
      .join(', ');

    const msg = `Hello Om (Ojas Visuals),%0A%0AI used your website Package Calculator to configure a shoot estimate:%0A%0A• Reals Needed: ${reelCount} Vertical 4K Reels%0A• Shoot Duration: ${durationMultipliers[duration].label}%0A• Add-ons Selected: ${selectedAddonList || 'Standard package'}%0A• Estimated Total: ₹${total.toLocaleString('en-IN')}%0A%0ALet's discuss availability for this shoot!`;
    
    window.open(`https://wa.me/917990102448?text=${msg}`, '_blank');
  };

  return (
    <section id="calculator" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 border border-gold-primary/30 shadow-2xl shadow-black/60 relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-100">
            Build Your Custom Shoot Package
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Select your project requirements to calculate an instant estimated investment and get a direct quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Reel Count Slider */}
            <div className="p-5 rounded-2xl bg-dark-900/60 border border-slate-700/50">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Number of 4K Vertical Reels
                </label>
                <span className="font-heading font-extrabold text-lg text-gold-primary">
                  {reelCount} {reelCount === 1 ? 'Reel' : 'Reels'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={reelCount}
                onChange={(e) => setReelCount(Number(e.target.value))}
                className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-gold-primary"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-medium">
                <span>1 Reel (Single Drop)</span>
                <span>5 Reels (Standard)</span>
                <span>15 Reels (Monthly Retainer)</span>
              </div>
            </div>

            {/* 2. Shoot Duration Radio Options */}
            <div className="p-5 rounded-2xl bg-dark-900/60 border border-slate-700/50">
              <label className="block text-sm font-semibold text-slate-200 mb-3">
                Select Production Time &amp; Location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.keys(durationMultipliers).map((dKey) => {
                  const isSelected = duration === dKey;
                  return (
                    <button
                      key={dKey}
                      type="button"
                      onClick={() => setDuration(dKey)}
                      className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-gold-primary/15 border-gold-primary text-gold-light shadow-md shadow-gold-primary/10"
                          : "bg-dark-800 border-slate-700 text-slate-300 hover:border-slate-600"
                      }`}
                    >
                      <div className="font-bold text-sm mb-1 text-slate-100">
                        {dKey === 'half-day' ? 'Half Day' : dKey === 'full-day' ? 'Full Day' : 'Multi-Day'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {dKey === 'half-day' ? '4-5 Hours' : dKey === 'full-day' ? '8-9 Hours' : '2-3 Days Camp'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Add-ons Checkboxes */}
            <div className="p-5 rounded-2xl bg-dark-900/60 border border-slate-700/50">
              <label className="block text-sm font-semibold text-slate-200 mb-3">
                Select Production Add-ons
              </label>
              <div className="space-y-2.5">
                {Object.keys(addonPrices).map((aKey) => {
                  const item = addonPrices[aKey];
                  const checked = addons[aKey];
                  return (
                    <div
                      key={aKey}
                      onClick={() => toggleAddon(aKey)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all text-xs ${
                        checked
                          ? "bg-dark-800 border-gold-primary/40 text-slate-100"
                          : "bg-dark-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          checked ? "bg-gold-primary border-gold-primary text-black" : "border-slate-600 bg-dark-700"
                        }`}>
                          {checked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <span className="font-bold text-gold-light font-heading">
                        +₹{item.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Price Summary Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-dark-900 border border-gold-primary/40 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-bold text-gold-primary uppercase tracking-widest">
                Estimated Investment
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
                  ₹{total.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400 font-medium">approx.</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Includes Sony Cinema Line 4K recording, stabilization, prime lenses, and master export files.
              </p>
            </div>

            {/* Breakdown summary list */}
            <div className="space-y-2 text-xs border-t border-b border-slate-800 py-4 text-slate-300">
              <div className="flex justify-between">
                <span>Production Base:</span>
                <span className="font-semibold text-slate-100">₹{durationMultipliers[duration].base.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>{reelCount}x Vertical 4K Edits:</span>
                <span className="font-semibold text-slate-100">₹{(reelCount * 2200).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Selected Add-ons:</span>
                <span className="font-semibold text-slate-100">
                  ₹{Object.keys(addons).filter(k => addons[k]).reduce((s, k) => s + addonPrices[k].price, 0).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-whatsapp-green to-emerald-600 hover:from-emerald-400 hover:to-whatsapp-green text-white font-bold text-sm shadow-xl shadow-whatsapp-green/20 hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp with this Quote</span>
              </button>

              <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No obligation quote • Custom corporate packages available</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};