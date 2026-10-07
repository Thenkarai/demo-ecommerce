'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const CartSummary: React.FC = () => {
  const { subtotal, openWhatsAppModal } = useCart();
  const delivery = 0;
  const total = subtotal + delivery;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md space-y-6">
      <h3 className="text-xl font-bold font-poppins text-stone-900 border-b border-stone-100 pb-4">
        Order Summary
      </h3>

      {/* Totals */}
      <div className="space-y-3 text-sm text-stone-600">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span className="font-semibold text-stone-900 font-poppins">
            ₹{subtotal.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="flex justify-between items-center text-xs">
          <span>Delivery</span>
          <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
            To be arranged via WhatsApp (₹0)
          </span>
        </div>

        <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline">
          <span className="text-base font-bold text-stone-900 font-poppins">
            Total
          </span>
          <span className="text-2xl font-bold font-poppins text-[#0E4431]">
            ₹{total.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3 pt-2">
        <Link
          href="/checkout"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white font-semibold text-sm sm:text-base shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Proceed to Checkout</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <button
          onClick={() => openWhatsAppModal()}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-emerald-50 text-[#0E4431] font-semibold text-sm border-2 border-emerald-800/25 transition-all"
        >
          <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
            <MessageCircle className="w-3 h-3 fill-white stroke-none" />
          </div>
          <span>Order via WhatsApp</span>
        </button>
      </div>

      {/* Offline Payment Note */}
      <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-stone-200/60 flex items-start gap-3 text-xs text-stone-600 leading-relaxed">
        <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
        <div>
          You will review and send this order via WhatsApp. <br />
          <strong className="text-emerald-950">(No online payment)</strong>
        </div>
      </div>
    </div>
  );
};
