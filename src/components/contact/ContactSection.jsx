import React, { useState } from 'react';
import { studioData } from '../../data/content';
import { useMagnetic } from '../../hooks/useMagnetic';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Globe,
  Copy,
  Sparkles
} from 'lucide-react';

export const ContactSection = ({ selectedService, onToast }) => {
  const { contact } = studioData;
  const submitRef = useMagnetic(0.15);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || 'Cinematic Reel Production',
    budget: '₹1,000 - ₹1,500',
    message: ''
  });

  const [copiedField, setCopiedField] = useState('');

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);

    setCopiedField(fieldName);

    onToast &&
      onToast(`Copied ${fieldName} to clipboard!`, 'success');

    setTimeout(() => setCopiedField(''), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      phone,
      service,
      budget,
      message
    } = formData;

    const waUrl = `https://wa.me/${contact.phoneRaw}?text=Hello%20Om%20(Ojas%20Visuals),%0A%0A•%20My%20Name:%20${encodeURIComponent(
      name
    )}%0A•%20Phone:%20${encodeURIComponent(
      phone
    )}%0A•%20Service:%20${encodeURIComponent(
      service
    )}%0A•%20Budget:%20${encodeURIComponent(
      budget
    )}%0A•%20Project%20Details:%20${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank');

    onToast &&
      onToast(
        'Opening WhatsApp with your project details...',
        'success'
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header — final cinematic CTA moment */}
      <div className="text-center mb-16">
        <div data-reveal className="inline-block bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
          Get In Touch
        </div>

        <h2 data-reveal data-reveal-delay="80" className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 text-balance">
          Ready to Create Something{' '}
          <span className="text-gold-gradient">Impossible?</span>
        </h2>

        <p data-reveal data-reveal-delay="140" className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Talk to us about cinematic video production, social media
          management, commercial campaigns, or modern website development
          for your brand.
        </p>
      </div>

      {/* Main Container */}
      <div data-reveal="scale" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 rounded-3xl bg-dark-800/90 border border-gold-primary/20 shadow-2xl relative overflow-hidden">

        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">

          <div>

            <h3 className="font-heading text-2xl font-bold text-gold-light mb-3">
              Ready to elevate your brand presence?
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Reach out directly to Ojas Visuals for custom quotes,
              creative consultations, video production, social media
              management, or website development.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-700/60 flex items-center justify-between hover:border-gold-primary/30 transition-colors">

                <div className="flex items-center gap-3">

                  <div className="p-2.5 rounded-xl bg-whatsapp-green/20 text-whatsapp-green">
                    <Phone className="w-5 h-5" />
                  </div>

                  <div>

                    <span className="text-[11px] text-slate-500 font-bold uppercase block">
                      WhatsApp / Direct Call
                    </span>

                    <a
                      href={`tel:${contact.phoneRaw}`}
                      className="font-semibold text-sm text-slate-200 hover:text-gold-light transition-colors"
                    >
                      {contact.phone}
                    </a>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      contact.phone,
                      'Phone Number'
                    )
                  }
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-dark-700 text-xs transition-colors"
                  title="Copy Phone"
                >
                  <Copy className="w-4 h-4" />
                </button>

              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-700/60 flex items-center gap-3 hover:border-gold-primary/30 transition-colors">

                <div className="p-2.5 rounded-xl bg-gold-primary/20 text-gold-primary">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>

                  <span className="text-[11px] text-slate-500 font-bold uppercase block">
                    Studio HQ Location
                  </span>

                  <span className="font-semibold text-sm text-slate-200">
                    {contact.location}
                  </span>

                </div>

              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-700/60 flex items-center justify-between hover:border-gold-primary/30 transition-colors">

                <div className="flex items-center gap-3">

                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>

                  <div>

                    <span className="text-[11px] text-slate-500 font-bold uppercase block">
                      Official Email
                    </span>

                    <a
                      href={`mailto:${contact.email}`}
                      className="font-semibold text-sm text-slate-200 hover:text-gold-light transition-colors"
                    >
                      {contact.email}
                    </a>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      contact.email,
                      'Email Address'
                    )
                  }
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-dark-700 text-xs transition-colors"
                  title="Copy Email"
                >
                  <Copy className="w-4 h-4" />
                </button>

              </div>

              {/* Domain */}
              <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-700/60 flex items-center gap-3 hover:border-gold-primary/30 transition-colors">

                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <Globe className="w-5 h-5" />
                </div>

                <div>

                  <span className="text-[11px] text-slate-500 font-bold uppercase block">
                    Web Domain
                  </span>

                  <span className="font-semibold text-sm text-slate-200">
                    {contact.domain}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Quick Turnaround */}
          <div className="p-4 rounded-2xl bg-gold-primary/10 border border-gold-primary/20 text-xs text-gold-light">
            ⚡ Quick Turnaround: Most project proposals are quoted within
            30 minutes via WhatsApp.
          </div>

        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-900/95 border border-slate-700/80 shadow-xl">

          <h4 className="font-heading font-bold text-xl text-slate-100 mb-6 flex items-center gap-2">
            <span>Project Inquiry Form</span>
            <Sparkles className="w-4 h-4 text-gold-primary" />
          </h4>

          <form
            onSubmit={handleSubmit}
            id="leadForm"
            className="space-y-4"
          >

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>

                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Name / Brand Name *
                </label>

                <input
                  type="text"
                  id="clientName"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                  }
                  placeholder="e.g. Om Parmar / Velvet Cafe"
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-primary focus:shadow-[0_0_0_4px_rgba(245,158,11,0.15)] transition-shadow"
                  required
                />

              </div>

              <div>

                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Phone / WhatsApp Number *
                </label>

                <input
                  type="tel"
                  id="clientPhone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value
                    })
                  }
                  placeholder="e.g. +91 7990102448"
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-primary focus:shadow-[0_0_0_4px_rgba(245,158,11,0.15)] transition-shadow"
                  required
                />

              </div>

            </div>

            {/* Service & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Service */}
              <div>

                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Desired Service
                </label>

                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-gold-primary focus:shadow-[0_0_0_4px_rgba(245,158,11,0.15)] transition-shadow"
                >

                  <option value="Cinematic Reel Production">
                    Cinematic Reel Production
                  </option>

                  <option value="Pro Video Editing & Grading">
                    Pro Video Editing & Grading
                  </option>

                  <option value="Social Media Management">
                    Social Media Management
                  </option>

                  <option value="Web Development">
                    💻 Web Development
                  </option>

                  <option value="Commercial Product Shoot">
                    Commercial Product Shoot
                  </option>

                  <option value="Custom Project Inquiry">
                    Custom Project Inquiry
                  </option>

                </select>

              </div>

              {/* Budget */}
              <div>

                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Estimated Budget Range
                </label>

                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      budget: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-gold-primary focus:shadow-[0_0_0_4px_rgba(245,158,11,0.15)] transition-shadow"
                >

                  <option value="₹1,000 - ₹1,500">
                    ₹1,000 - ₹1,500
                  </option>

                  <option value="₹1,500 - ₹2,500">
                    ₹1,500 - ₹2,500
                  </option>

                  <option value="₹2,500 - ₹5,000">
                    ₹2,500 - ₹5,000
                  </option>

                  <option value="₹5,000 - ₹10,000">
                    ₹5,000 - ₹10,000
                  </option>

                  <option value="₹10,000 - ₹20,000">
                    ₹10,000 - ₹20,000
                  </option>

                  <option value="₹20,000 - ₹50,000">
                    ₹20,000 - ₹50,000
                  </option>

                  <option value="₹50,000+">
                    ₹50,000+
                  </option>

                  <option value="Custom Monthly Retainer">
                    Custom Monthly Retainer
                  </option>

                  <option value="Custom Web Development Quote">
                    Custom Web Development Quote
                  </option>

                </select>

              </div>

            </div>

            {/* Project Details */}
            <div>

              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Project Details / Requirement *
              </label>

              <textarea
                id="clientMsg"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value
                  })
                }
                placeholder="Tell us about your video project, social media requirements, website, business, preferred style, pages, features, or references..."
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-primary focus:shadow-[0_0_0_4px_rgba(245,158,11,0.15)] transition-shadow"
                required
              />

            </div>

            {/* Submit Button */}
            <button
              ref={submitRef}
              type="submit"
              data-cursor="SEND"
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-whatsapp-green to-emerald-600 hover:from-emerald-400 hover:to-whatsapp-green text-white font-bold text-sm shadow-xl shadow-whatsapp-green/25 hover:shadow-whatsapp-green/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Message on WhatsApp</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};
