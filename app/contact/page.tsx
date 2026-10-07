'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { useToast } from '@/context/ToastContext';

export default function ContactPage() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      showToast('Please fill all required fields', 'error');
      return;
    }

    // Direct WhatsApp enquiry message creation
    const text = `Hello Wellness Center, my name is ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nEnquiry: ${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    showToast('Enquiry prepared! Opening WhatsApp...', 'success');
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-poppins text-[#0E4431]">
            Contact Wellness Center
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            Have questions about our herbal formulations or need customized product guidance? Connect with us directly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick WhatsApp Banner Card */}
            <div className="bg-[#0E4431] text-white p-7 rounded-3xl shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-white">
                  Chat on WhatsApp
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  Fastest response for order placement, stock inquiries, and free personalized wellness consultations.
                </p>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold shadow-md transition"
              >
                <span>Message Now</span>
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              </a>
            </div>

            {/* Contact Details Cards */}
            <div className="bg-white p-7 rounded-3xl border border-stone-200/80 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Phone Support
                  </h4>
                  <a
                    href="tel:+919876543210"
                    className="text-base font-semibold text-stone-900 hover:text-emerald-800 transition"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Email
                  </h4>
                  <a
                    href="mailto:support@wellnesscenter.com"
                    className="text-base font-semibold text-stone-900 hover:text-emerald-800 transition"
                  >
                    support@wellnesscenter.com
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">We reply within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Address
                  </h4>
                  <p className="text-sm font-semibold text-stone-900 leading-snug">
                    123, Gandhipuram Main Road, <br />
                    Coimbatore, Tamil Nadu - 641012
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-stone-200/80 shadow-md">
            <h3 className="text-2xl font-bold font-poppins text-stone-900 mb-2">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-6">
              Fill in your details and we will answer your questions promptly via WhatsApp or email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Message / Wellness Query <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your wellness goal (e.g. Weight Gain, Weight Management, etc.)..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm text-stone-900 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white text-sm font-semibold shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
