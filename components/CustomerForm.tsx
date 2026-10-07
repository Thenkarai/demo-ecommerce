'use client';

import React, { useState } from 'react';
import { CustomerOrderDetails } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

interface CustomerFormProps {
  customerDetails: CustomerOrderDetails;
  onChangeDetails: (details: CustomerOrderDetails) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({
  customerDetails,
  onChangeDetails,
  onSubmit,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChangeDetails({
      ...customerDetails,
      [name]: value,
    });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form id="checkout-form" onSubmit={onSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md space-y-6">
      <div className="border-b border-stone-100 pb-4">
        <h3 className="text-xl font-bold font-poppins text-stone-900">
          Customer Details
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Please enter your delivery information to prepare your WhatsApp order.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={customerDetails.fullName}
            onChange={handleChange}
            placeholder="e.g. Pravin"
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm text-stone-900 transition"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            required
            value={customerDetails.phoneNumber}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm text-stone-900 transition"
          />
        </div>

        {/* Delivery Address */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Delivery Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="deliveryAddress"
            required
            rows={3}
            value={customerDetails.deliveryAddress}
            onChange={handleChange}
            placeholder="e.g. 123, Gandhipuram Main Road, Coimbatore, Tamil Nadu - 641012"
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm text-stone-900 transition resize-none"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Additional Notes (Optional)
          </label>
          <input
            type="text"
            name="additionalNotes"
            value={customerDetails.additionalNotes || ''}
            onChange={handleChange}
            placeholder="e.g. Please deliver in the evening, near landmarks..."
            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 text-sm text-stone-900 transition"
          />
        </div>
      </div>
    </form>
  );
};
