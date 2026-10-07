'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const WhatsAppModal: React.FC = () => {
  const { isWhatsAppModalOpen, closeWhatsAppModal, currentWhatsAppUrl } = useCart();

  if (!isWhatsAppModalOpen) return null;

  const handleContinue = () => {
    if (currentWhatsAppUrl) {
      window.open(currentWhatsAppUrl, '_blank', 'noopener,noreferrer');
    }
    closeWhatsAppModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-emerald-100 text-center overflow-hidden"
        >
          {/* Decorative background glows */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-green-100/60 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={closeWhatsAppModal}
            className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* WhatsApp Icon Circle with Floating Leaves */}
          <div className="relative mx-auto mb-6 w-20 h-20 rounded-full bg-emerald-50 border-4 border-white shadow-lg flex items-center justify-center">
            {/* Floating leaf accent top-left */}
            <div className="absolute -top-3 -left-4 pointer-events-none animate-float-slow">
              <img
                src="/images/leaves/leaf-pair-floating-hd.png"
                alt="Leaf"
                className="w-7 h-6 object-contain leaf-shadow"
              />
            </div>
            {/* Floating leaf accent bottom-right */}
            <div className="absolute -bottom-2 -right-4 pointer-events-none animate-float-reverse">
              <img
                src="/images/leaves/leaf-pair-floating-hd.png"
                alt="Leaf"
                className="w-6 h-5 object-contain leaf-shadow transform rotate-45"
              />
            </div>
            <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-md shadow-emerald-500/30">
              <MessageCircle className="w-9 h-9 text-white fill-white stroke-none" />
            </div>
            <span className="absolute -bottom-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-800 text-emerald-100 shadow-sm">
              Ready
            </span>
          </div>

          {/* Heading and details */}
          <h3 className="text-2xl font-bold font-poppins text-stone-900 mb-2">
            Almost There!
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed mb-6 px-2">
            Click the button to send your order details directly to our WhatsApp.
            Our wellness team will confirm availability and guide you through delivery.
          </p>

          <div className="bg-emerald-50/80 border border-emerald-100/80 rounded-2xl p-3.5 mb-6 text-left flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900 leading-relaxed">
              <strong className="block font-semibold">No Online Payment Needed</strong>
              We will verify your order on WhatsApp and share delivery tracking details.
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleContinue}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>Continue to WhatsApp</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </button>

            <button
              onClick={closeWhatsAppModal}
              className="text-stone-500 hover:text-stone-800 text-sm font-medium py-2 transition"
            >
              Cancel & Review Order
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
