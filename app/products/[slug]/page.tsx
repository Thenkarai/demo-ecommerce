'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/data/products';
import { ProductDetails } from '@/components/ProductDetails';
import { SvgLeavesBackground } from '@/components/SvgLeaves';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Related products from the same or other categories
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="relative bg-[#FAF7F2] min-h-screen py-10 sm:py-14 overflow-hidden">
      {/* Background with Ambient Radial Glows and Floating SVG Leaves */}
      <SvgLeavesBackground density="medium" />

      {/* Decorative Corner Leaf Branch Accent */}
      <div className="absolute top-16 -right-12 w-48 sm:w-60 pointer-events-none opacity-80 z-0 animate-leaf-sway">
        <Image
          src="/images/leaves/leaf-branch-glossy-hd.png"
          alt="Botanical branch"
          width={280}
          height={380}
          className="object-contain leaf-shadow transform rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ProductDetails
          product={product}
          relatedProducts={relatedProducts}
        />
      </div>
    </div>
  );
}
