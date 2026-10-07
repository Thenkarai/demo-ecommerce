import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { SvgLeavesBackground, SvgLeafWatermark, SvgLeafPair } from '@/components/SvgLeaves';

export const WhySection: React.FC = () => {
  const whyFeatures = [
    {
      icon: <Leaf className="w-5 h-5 text-emerald-800" />,
      title: 'Natural Ingredients',
      description: 'Sourced directly from verified organic farms and wild herbal harvesters.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-800" />,
      title: 'Quality Assured',
      description: 'Strict standardized botanical potency tests for every batch.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-800" />,
      title: 'Safe & Effective',
      description: 'Time-tested Ayurvedic synergy with zero synthetic fillers or steroids.',
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-800" />,
      title: 'Trusted by Customers',
      description: 'Thousands of happy wellness journeys across India with real results.',
    },
  ];

  return (
    <section className="relative py-20 bg-[#FAF7F2] overflow-hidden">
      {/* Background with floating SVG leaves & botanical watermarks */}
      <SvgLeavesBackground density="medium" />

      {/* Right Edge Leaf Branch extending inward (Matching Template Design) */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-48 sm:w-60 pointer-events-none opacity-85 z-0 animate-leaf-sway">
        <Image
          src="/images/leaves/leaf-branch-glossy-hd.png"
          alt="Botanical branch"
          width={280}
          height={380}
          className="object-contain leaf-shadow transform -rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Visual Image with 100% Natural Badge, Leaf Accents and Button */}
          <div className="lg:col-span-5 relative">
            {/* Top-Left Botanical Leaf framing around Mortar & Pestle (Matching Template) */}
            <div className="absolute -top-12 -left-12 w-40 sm:w-48 pointer-events-none z-20 animate-leaf-sway">
              <Image
                src="/images/leaves/leaf-branch-frame-hd.png"
                alt="Botanical branch"
                width={260}
                height={160}
                className="object-contain leaf-shadow transform rotate-12 scale-110"
              />
            </div>

            {/* Bottom-Left Botanical Leaf Branch */}
            <div className="absolute -bottom-10 -left-8 w-36 pointer-events-none z-0 opacity-80 animate-float-slow">
              <Image
                src="/images/leaves/leaf-branch-glossy-hd.png"
                alt="Botanical leaves"
                width={180}
                height={240}
                className="object-contain transform rotate-45"
              />
            </div>

            {/* Main Image Container */}
            <div className="relative aspect-square w-full rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-stone-100 z-10">
              <Image
                src="/images/banners/herbal_mortar_pestle.jpg"
                alt="Natural Herpo Ingredients - Wellness Center"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Circular Stamp Badge: "100% NATURAL" */}
            <div className="absolute top-6 left-6 w-24 h-24 rounded-full bg-[#EADCC8] text-[#0E4431] shadow-xl border-2 border-white flex flex-col items-center justify-center text-center p-2 z-20">
              <span className="text-[10px] font-bold tracking-widest uppercase">100%</span>
              <span className="text-xs font-extrabold uppercase font-poppins">NATURAL</span>
            </div>

            {/* Our Story Button floating on bottom left */}
            <div className="absolute -bottom-4 left-6 z-20">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white text-sm font-semibold shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3 relative">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block">
                  Why Wellness Center
                </span>
                <div className="animate-float-slow">
                  <Image
                    src="/images/leaves/leaf-pair-floating-hd.png"
                    alt="Leaf"
                    width={24}
                    height={20}
                  />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-[#0E4431] leading-tight">
                Pure Ingredients. <br />
                Real Results.
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
                We bring you carefully formulated herpo-based products to support your health goals naturally, combining ancient botanical wisdom with modern scientific precision.
              </p>
            </div>

            {/* 4 Feature Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {whyFeatures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold font-poppins text-stone-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
