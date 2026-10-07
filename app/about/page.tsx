import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Award, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';

export const metadata = {
  title: 'About Us | Wellness Center',
  description:
    'Learn about Wellness Center, our traditional Ayurvedic roots, sustainable herbal sourcing, and commitment to natural wellness.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-800" />,
      title: '100% Herbal Purity',
      desc: 'We never compromise on clean ingredients. No steroids, synthetic binders, or unnatural stimulants.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-800" />,
      title: 'Rigorous Quality Standards',
      desc: 'Formulations are tested for heavy metals, microbial safety, and standardized active bio-compounds.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-800" />,
      title: 'Customer-Centric Guidance',
      desc: 'We offer personalized consultations via WhatsApp to assist customers on their wellness journeys.',
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-800" />,
      title: 'Traditional Ayurvedic Synergy',
      desc: 'Time-tested botanical wisdom blended with modern hygienic production methodologies.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 sm:py-24 border-b border-stone-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block">
              About Wellness Center
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-[#0E4431] leading-tight">
              Rooted in Nature. <br />
              Committed to Your Well-Being.
            </h1>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              We started Wellness Center with a single mission: to make authentic, safe, and effective herpo-based nutritional formulations accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
                <Image
                  src="/images/banners/hero_wellness_woman.jpg"
                  alt="Wellness Center Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800">
                Our Story & Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-[#0E4431]">
                Empowering Health Naturally
              </h2>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Modern lifestyles often bring challenges like unhealthy weight loss, lack of physical stamina, or sluggish metabolism. Instead of temporary synthetic fixes, we believe in restoring the body&apos;s natural balance through botanical nutrition.
                </p>
                <p>
                  Every capsule and blend we develop is derived from wild-crafted and organically cultivated herbs like Ashwagandha, Shatavari, Safed Musli, Garcinia, and Moringa.
                </p>
                <p>
                  With personalized customer care directly available over WhatsApp, we ensure that every person receiving our products understands how to combine them with good diet, water intake, and rest.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white text-sm font-semibold shadow-md transition-all"
                >
                  <span>Discover Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-[#0E4431]">
              Why Choose Wellness Center
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-[#FAF7F2] p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold font-poppins text-stone-900">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wide Promotional CTA */}
      <CTASection />
    </div>
  );
}
