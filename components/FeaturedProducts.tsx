import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from './ProductCard';
import { SvgLeavesBackground } from '@/components/SvgLeaves';

export const FeaturedProducts: React.FC = () => {
  // Take the 4 popular products matching the reference design
  const featured = products.filter((p) => p.popular).slice(0, 4);

  return (
    <section className="relative py-20 bg-white border-y border-stone-200/60 overflow-hidden">
      {/* Background with Ambient Radial Glows and Floating SVG Leaves */}
      <SvgLeavesBackground density="low" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800">
                Featured Products
              </span>
              <div className="animate-float-slow">
                <Image
                  src="/images/leaves/leaf-pair-floating-hd.png"
                  alt="Leaf"
                  width={18}
                  height={16}
                />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-[#0E4431]">
              Our Popular Wellness Products
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E4431] hover:text-emerald-700 transition group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-column responsive grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
