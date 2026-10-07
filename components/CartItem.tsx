'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const lineTotal = item.product.price * item.quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 bg-white rounded-2xl border border-stone-200/80 shadow-sm transition hover:shadow-md">
      {/* Product Image and Name */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-stone-200/60">
          <Image
            src={item.product.image}
            alt={item.product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-1 min-w-0">
          <span className="text-[11px] font-semibold tracking-wide uppercase text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-full inline-block">
            {item.product.category}
          </span>
          <Link
            href={`/products/${item.product.slug}`}
            className="block text-base sm:text-lg font-bold font-poppins text-stone-900 hover:text-[#0E4431] truncate transition"
          >
            {item.product.name}
          </Link>
          <p className="text-xs text-stone-500 font-normal">
            ₹{item.product.price.toLocaleString('en-IN')} each
          </p>
        </div>
      </div>

      {/* Quantity Stepper, Line Total & Remove */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
        {/* Stepper */}
        <div className="flex items-center border border-stone-300 rounded-full bg-[#FAF7F2] px-3 py-1.5 shadow-inner">
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="p-1 text-stone-600 hover:text-stone-900 transition"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-sm font-semibold text-stone-900">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="p-1 text-stone-600 hover:text-stone-900 transition"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Total Price */}
        <div className="text-right min-w-[80px]">
          <span className="text-base sm:text-lg font-bold font-poppins text-[#0E4431]">
            ₹{lineTotal.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeFromCart(item.product.id)}
          className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-full transition"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
