import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home } from 'lucide-react';
import { SvgLeavesBackground, SvgLeafPair, SvgSingleLeaf } from '@/components/SvgLeaves';

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-[#FAF7F2] px-4 py-24 overflow-hidden">
      {/* Background with Ambient Radial Glows and Floating SVG Leaves */}
      <SvgLeavesBackground density="high" />

      {/* --- Botanical Leaf Branches Framing the 4 Corners (Matching Template Design) --- */}
      
      {/* 1. Top-Left Branch Framing */}
      <div className="absolute -top-10 -left-10 w-48 sm:w-64 md:w-80 pointer-events-none z-10 animate-leaf-sway">
        <Image
          src="/images/leaves/leaf-branch-frame-hd.png"
          alt="Botanical foliage"
          width={400}
          height={250}
          className="object-contain leaf-shadow transform -rotate-12 scale-110"
        />
      </div>

      {/* 2. Middle-Left Branch Draping Inward */}
      <div className="absolute top-1/2 -left-14 -translate-y-1/2 w-44 sm:w-56 pointer-events-none z-10 opacity-90 animate-float-slow">
        <Image
          src="/images/leaves/leaf-branch-glossy-hd.png"
          alt="Botanical branch"
          width={300}
          height={400}
          className="object-contain leaf-shadow transform rotate-45"
        />
      </div>

      {/* 3. Bottom-Left Branch Framing */}
      <div className="absolute -bottom-10 -left-10 w-44 sm:w-60 md:w-72 pointer-events-none z-10 animate-float-reverse">
        <Image
          src="/images/leaves/leaf-branch-frame-hd.png"
          alt="Botanical leaves"
          width={360}
          height={220}
          className="object-contain leaf-shadow transform rotate-45"
        />
      </div>

      {/* 4. Top-Right Branch Framing */}
      <div className="absolute -top-12 -right-12 w-48 sm:w-64 md:w-80 pointer-events-none z-10 animate-leaf-sway">
        <Image
          src="/images/leaves/leaf-branch-glossy-hd.png"
          alt="Botanical foliage"
          width={350}
          height={450}
          className="object-contain leaf-shadow transform rotate-180 scale-105"
        />
      </div>

      {/* 5. Bottom-Right Branch Framing */}
      <div className="absolute -bottom-12 -right-12 w-48 sm:w-64 md:w-80 pointer-events-none z-10 animate-float-slow">
        <Image
          src="/images/leaves/leaf-branch-frame-hd.png"
          alt="Botanical leaves"
          width={380}
          height={240}
          className="object-contain leaf-shadow transform -rotate-45 scale-110"
        />
      </div>

      {/* Center Botanical Content */}
      <div className="relative z-20 text-center max-w-lg mx-auto space-y-6 px-4">
        {/* Floating Leaf Pair right above 404 */}
        <div className="flex justify-center -mb-2">
          <div className="animate-float-slow leaf-shadow">
            <Image
              src="/images/leaves/leaf-pair-floating-hd.png"
              alt="Floating leaf"
              width={56}
              height={48}
              className="object-contain"
            />
          </div>
        </div>

        {/* Huge 404 Number matching approved reference */}
        <div className="space-y-1 relative">
          <h1 className="text-8xl sm:text-9xl font-extrabold font-poppins text-[#0E4431] tracking-tight drop-shadow-sm select-none">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-stone-900">
            Page Not Found
          </h2>
        </div>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist <br className="hidden sm:inline" />
          or has been moved.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white text-sm font-semibold shadow-xl shadow-emerald-950/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
