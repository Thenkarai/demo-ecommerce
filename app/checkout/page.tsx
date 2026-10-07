'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { CustomerOrderDetails } from '@/types/product';
import { CustomerForm } from '@/components/CustomerForm';
import { OrderSummary } from '@/components/OrderSummary';
import { SvgLeavesBackground } from '@/components/SvgLeaves';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, openWhatsAppModal } = useCart();
  const { showToast } = useToast();

  const [customerDetails, setCustomerDetails] = useState<CustomerOrderDetails>({
    fullName: 'Pravin',
    phoneNumber: '+91 98765 43210',
    deliveryAddress: '123, Gandhipuram Main Road, Coimbatore, Tamil Nadu - 641012',
    additionalNotes: 'Please deliver in the evening.',
  });

  const handleOrderSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!customerDetails.fullName.trim()) {
      showToast('Please enter your full name', 'error');
      return;
    }
    if (!customerDetails.phoneNumber.trim()) {
      showToast('Please enter your phone number', 'error');
      return;
    }
    if (!customerDetails.deliveryAddress.trim()) {
      showToast('Please enter your delivery address', 'error');
      return;
    }

    // Open the approved "Almost There!" WhatsApp modal
    openWhatsAppModal(customerDetails);
  };

  if (items.length === 0) {
    return (
      <div className="relative bg-[#FAF7F2] min-h-[75vh] flex items-center justify-center py-16 px-4 overflow-hidden">
        <SvgLeavesBackground density="low" />
        <div className="max-w-md w-full bg-white rounded-3xl p-10 border border-stone-200 text-center space-y-6 shadow-sm relative z-10">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto text-2xl">
            🛍️
          </div>
          <h2 className="text-2xl font-bold font-poppins text-stone-900">
            No items to checkout
          </h2>
          <p className="text-stone-500 text-sm">
            Your cart is currently empty. Please add items to your cart before proceeding to checkout.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center w-full py-3.5 rounded-full bg-[#0E4431] text-white font-semibold text-sm shadow-md"
          >
            Browse Products
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
      <div className="absolute top-10 -right-12 w-48 sm:w-60 pointer-events-none opacity-80 z-0 animate-leaf-sway">
        <Image
          src="/images/leaves/leaf-branch-glossy-hd.png"
          alt="Botanical foliage"
          width={280}
          height={380}
          className="object-contain leaf-shadow transform rotate-12"
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
            <Link href="/cart" className="hover:text-[#0E4431]">
              Cart
            </Link>
            <span>/</span>
            <span className="text-[#0E4431] font-medium">Checkout</span>
          </nav>

          <Link
            href="/cart"
            className="text-xs sm:text-sm font-semibold text-[#0E4431] hover:underline flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cart</span>
          </Link>
        </div>

        {/* Heading */}
        <div className="border-b border-stone-200/70 pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-stone-900">
            Checkout
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Complete your delivery details to generate your WhatsApp order.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Customer Details Form */}
          <div className="lg:col-span-7">
            <CustomerForm
              customerDetails={customerDetails}
              onChangeDetails={setCustomerDetails}
              onSubmit={handleOrderSubmit}
            />
          </div>

          {/* Order Summary & WhatsApp CTA */}
          <div className="lg:col-span-5 sticky top-28">
            <OrderSummary
              customerDetails={customerDetails}
              onSendOrder={handleOrderSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
