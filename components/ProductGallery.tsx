'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-md">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border-2 transition-all ${
                selectedImage === img
                  ? 'border-[#0E4431] ring-2 ring-emerald-600/20 shadow-sm'
                  : 'border-transparent hover:border-stone-300 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
