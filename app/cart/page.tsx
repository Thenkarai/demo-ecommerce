'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';
import { CartSummary } from '@/components/CartSummary';
import { SvgLeavesBackground } from '@/components/SvgLeaves';
import Image from 'next/image';

export default function CartPage() {
  const { items, itemCount, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="relative bg-[#FAF7F2] min-h-[75vh] flex items-center justify-center py-16 px-4 overflow-hidden">
        <SvgLeavesBackground density="low" />
        <div className="max-w-md w-full bg-white rounded-3xl p-10 border border-stone-200 text-center space-y-6 shadow-sm relative z-10">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto text-3xl shadow-inner">
            🌿
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-poppins text-stone-900">
              Your Cart is Empty
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">
              Explore our range of herpo-based nutritional formulations and start your healthy wellness journey today.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white font-semibold text-sm shadow-md transition-all"
          >
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#FAF7F2] min-h-screen py-10 sm:py-14 overflow-hidden">
      {/* Background with Ambient Radial Glows and Floating SVG Leaves */}
      <SvgLeavesBackground density="medium" />

      {/* Decorative Corner Leaf Branch */}
      <div className="absolute top-10 -right-10 w-44 sm:w-56 pointer-events-none opacity-80 z-0 animate-leaf-sway">
        <Image
          src="/images/leaves/leaf-branch-frame-hd.png"
          alt="Botanical foliage"
          width={280}
          height={180}
          className="object-contain leaf-shadow transform rotate-12 scale-110"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between">
          <nav className="text-xs sm:text-sm text-stone-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#0E4431]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0E4431] font-medium">Cart</span>
          </nav>

          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-[#0E4431] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-stone-200/70 pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-stone-900">
            Your Cart{' '}
            <span className="text-stone-500 font-normal text-xl sm:text-2xl">
              ({itemCount} {itemCount === 1 ? 'item' : 'items'})
            </span>
          </h1>

          <button
            onClick={clearCart}
            className="text-xs text-stone-500 hover:text-red-600 flex items-center gap-1 transition"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Cart</span>
          </button>
        </div>

        {/* Main Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-4 sticky top-28">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
