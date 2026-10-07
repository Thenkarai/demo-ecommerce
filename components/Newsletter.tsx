'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/context/ToastContext';
import { SvgLeavesBackground, SvgLeafPair } from '@/components/SvgLeaves';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setIsSubscribed(true);
    showToast('Thank you for subscribing to our wellness community!', 'success');
    setEmail('');
  };

  return (
    <section className="relative py-20 bg-[#FAF7F2] border-t border-stone-200/60 overflow-hidden">
      {/* Background with Ambient Radial Glows and Floating SVG Leaves */}
      <SvgLeavesBackground density="medium" />

      {/* Bottom-Left Corner Leaf Branch (Matching Template Design) */}
      <div className="absolute -bottom-8 -left-8 w-40 sm:w-52 pointer-events-none z-10 opacity-90 animate-leaf-sway">
        <Image
          src="/images/leaves/leaf-branch-frame-hd.png"
          alt="Botanical leaves"
          width={280}
          height={180}
          className="object-contain leaf-shadow transform rotate-12 scale-110"
        />
      </div>

      {/* Bottom-Right Corner Leaf Branch (Matching Template Design) */}
      <div className="absolute -bottom-10 -right-8 w-44 sm:w-56 pointer-events-none z-10 opacity-90 animate-float-slow">
        <Image
          src="/images/leaves/leaf-branch-glossy-hd.png"
          alt="Botanical foliage"
          width={280}
          height={380}
          className="object-contain leaf-shadow transform -rotate-12 scale-110"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800">
              Stay Updated
            </span>
            <div className="animate-float-slow">
              <Image
                src="/images/leaves/leaf-pair-floating-hd.png"
                alt="Leaf"
                width={20}
                height={18}
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-[#0E4431]">
            Join Our Wellness Community
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto">
            Get the latest product updates, wellness tips and special offers directly to your inbox.
          </p>
        </div>

        {isSubscribed ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold shadow-sm">
            <Check className="w-4 h-4 text-emerald-700" />
            <span>You&apos;re subscribed! Welcome to our wellness family.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
          >
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-stone-300 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200/50 text-sm text-stone-800 placeholder:text-stone-400 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white text-sm font-semibold shadow-md transition-all shrink-0 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
