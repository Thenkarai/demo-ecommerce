'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, HeartHandshake, Leaf, Award } from 'lucide-react';
import { buildConsultationUrl } from '@/lib/whatsapp';
import { SvgLeavesBackground, SvgSingleLeaf, SvgLeafPair } from '@/components/SvgLeaves';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    const url = buildConsultationUrl('general wellness');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/50">
      {/* Botanical Background with Floating SVG Leaves & Glows */}
      <SvgLeavesBackground density="low" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 sm:space-y-8 relative"
          >
            {/* Pill Badge with Floating Leaf Pair */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/60 text-emerald-900 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pure Herpo-Based Wellness</span>
              </div>
            </div>

            {/* Main Heading with Floating Botanical Leaf */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-[#0E4431] leading-[1.15] tracking-tight">
                Natural <br />
                Wellness for <br />
                <span className="text-[#20754E]">a Healthier You</span>
              </h1>

              {/* Floating Leaf Pair right above heading accent matching template */}
              <div className="absolute -top-6 left-52 sm:left-64 pointer-events-none animate-float-slow hidden sm:block">
                <Image
                  src="/images/leaves/leaf-pair-floating-hd.png"
                  alt="Floating leaf"
                  width={48}
                  height={42}
                  className="leaf-shadow"
                />
              </div>
            </div>

            {/* Supporting Content */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Herpo-based products to support your weight goals, boost nutrition and enhance your overall wellness. Formulated with authentic botanical traditions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white font-semibold text-base shadow-lg shadow-emerald-950/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-emerald-50 text-[#0E4431] font-semibold text-base border-2 border-emerald-800/25 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
                </div>
                <span>Order via WhatsApp</span>
              </button>
            </div>

            {/* Feature trust items under Hero */}
            <div className="pt-6 border-t border-stone-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4 text-[#0E4431]" />
                </div>
                <span className="text-xs font-semibold text-stone-800 leading-tight">
                  100% Natural Ingredients
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#0E4431]" />
                </div>
                <span className="text-xs font-semibold text-stone-800 leading-tight">
                  Herpo-Based Formulations
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#0E4431]" />
                </div>
                <span className="text-xs font-semibold text-stone-800 leading-tight">
                  Supports Healthy Living
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#0E4431]" />
                </div>
                <span className="text-xs font-semibold text-stone-800 leading-tight">
                  Trusted by Many
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Main Arched/Organic Hero Image */}
              <div className="relative aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/80 bg-stone-100 z-10">
                <Image
                  src="/images/banners/hero_wellness_woman.jpg"
                  alt="Pure Natural Wellness - Wellness Center"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Handwritten Floating Note: "Good Health, Brighter Days" with Leaf Pair */}
              <div className="absolute -top-5 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-stone-100 flex items-center gap-3 rotate-[-4deg] max-w-[220px] z-20">
                <div className="relative w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/leaves/leaf-pair-floating-hd.png"
                    alt="Leaves"
                    width={28}
                    height={24}
                    className="leaf-shadow"
                  />
                </div>
                <div className="leading-tight">
                  <p className="font-handwriting text-xl text-[#0E4431] font-semibold">
                    Good Health
                  </p>
                  <p className="font-handwriting text-base text-emerald-700">
                    Brighter Days
                  </p>
                </div>
              </div>

              {/* Circular Stamp Badge: "100% NATURAL HERPO BASED FORMULA" */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0E4431] text-white p-2 shadow-2xl border-4 border-white flex flex-col items-center justify-center text-center rotate-[8deg] z-20">
                <div className="w-full h-full rounded-full border border-dashed border-emerald-300/60 flex flex-col items-center justify-center p-2">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-emerald-300">
                    100% NATURAL
                  </span>
                  <span className="text-[11px] font-extrabold uppercase font-poppins leading-tight mt-0.5">
                    HERPO BASED
                  </span>
                  <span className="text-[8px] tracking-wider uppercase text-emerald-200 mt-0.5">
                    FORMULA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

