import React, { useState } from 'react';
import { studioData } from '../../data/content';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
          Got Questions?
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Everything you need to know about booking, deliverables, turnaround times, and shoot logistics.
        </p>
      </div>

      {/* Interactive Accordion List */}
      <div className="space-y-4">
        {studioData.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-dark-800 border-gold-primary/40 shadow-xl shadow-gold-primary/10"
                  : "bg-dark-900/80 border-slate-800 hover:border-slate-700"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-gold-primary" : "text-slate-500"}`} />
                  <span className="font-heading font-semibold text-sm sm:text-base text-slate-100">
                    {faq.q}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-gold-primary" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
                  <p className="pl-8">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions banner */}
      <div className="mt-8 p-6 rounded-2xl bg-dark-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="font-heading font-bold text-sm text-slate-100">Have a custom question or specific timeline?</h4>
          <p className="text-xs text-slate-400">Om Parmar is available directly on WhatsApp to assist you.</p>
        </div>
        <a
          href={studioData.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-dark-800 hover:bg-gold-primary hover:text-black border border-gold-primary/30 text-gold-light text-xs font-bold transition-all whitespace-nowrap"
        >
          Ask on WhatsApp →
        </a>
      </div>
    </section>
  );
};
