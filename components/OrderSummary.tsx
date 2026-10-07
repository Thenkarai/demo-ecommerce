'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CustomerOrderDetails } from '@/types/product';

interface OrderSummaryProps {
  customerDetails: CustomerOrderDetails;
  onSendOrder: () => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  customerDetails,
  onSendOrder,
}) => {
  const { items, subtotal } = useCart();
  const delivery = 0;
  const total = subtotal + delivery;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md space-y-6">
      <div className="border-b border-stone-100 pb-4">
        <h3 className="text-xl font-bold font-poppins text-stone-900">
          Order Summary ({items.length} items)
        </h3>
      </div>

      {/* Mini Product List */}
      <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between gap-3 py-2 border-b border-stone-100 text-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-stone-900 truncate text-xs sm:text-sm">
                  {item.product.name}
                </h4>
                <p className="text-xs text-stone-500">
                  {item.quantity} × ₹{item.product.price.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            <span className="font-bold font-poppins text-stone-900 shrink-0 text-xs sm:text-sm">
              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
            </span>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-3 pt-2 text-sm text-stone-600">
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

      {/* Primary WhatsApp Order CTA */}
      <div className="pt-2">
        <button
          onClick={onSendOrder}
          type="button"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20be5b] text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
          </div>
          <span>Send Order via WhatsApp</span>
        </button>
      </div>

      {/* Offline Payment Note */}
      <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-stone-200/60 flex items-start gap-3 text-xs text-stone-600 leading-relaxed">
        <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
        <div>
          Your order will be sent to Wellness Center on WhatsApp. <br />
          <strong className="text-emerald-950">(No online payment)</strong>
        </div>
      </div>
    </div>
  );
};
