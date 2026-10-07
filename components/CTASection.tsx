import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-stone-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banners/promotional_banner.jpg"
          alt="Live A Healthier, Happier You"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Soft Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-stone-950/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-poppins tracking-tight drop-shadow-md">
            Live A Healthier, <br />
            Happier You
          </h2>

          <p className="text-base sm:text-lg text-stone-200 max-w-xl mx-auto drop-shadow-sm font-normal">
            Take the first natural step towards balanced nutrition, holistic weight goals, and lasting bodily vitality today.
          </p>

          <div className="pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white font-semibold text-base shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-emerald-500/30"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
