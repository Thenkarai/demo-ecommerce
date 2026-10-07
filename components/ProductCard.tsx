'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Star, Check } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !isWishlisted;
    setIsWishlisted(nextState);
    showToast(
      nextState
        ? `Added ${product.name} to your favorites`
        : `Removed ${product.name} from favorites`,
      'info'
    );
  };

  return (
    <div className="group relative bg-white rounded-3xl p-4 sm:p-5 border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(14,68,49,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        {/* Image Container with Badges */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF7F2] mb-4">
          <Link href={`/products/${product.slug}`} className="block w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            {product.badge && (
              <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-full bg-emerald-800 text-white shadow-sm">
                {product.badge}
              </span>
            )}
            {!product.inStock && (
              <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-stone-800 text-white shadow-sm">
                Out of Stock
              </span>
            )}
          </div>

          {/* Wishlist Heart Icon */}
          <button
            onClick={handleToggleWishlist}
            aria-label="Wishlist"
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-stone-600 hover:text-red-500 hover:bg-white shadow-md transition transform active:scale-90 z-10"
          >
            <Heart
              className={`w-4 h-4 transition ${
                isWishlisted ? 'fill-red-500 text-red-500' : ''
              }`}
            />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-1.5 mb-4">
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-base sm:text-lg font-bold font-poppins text-stone-900 group-hover:text-[#0E4431] transition line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-stone-500 line-clamp-1 font-normal">
            {product.subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-xs font-semibold text-stone-800">
              {product.rating}
            </span>
            <span className="text-xs text-stone-400">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>

      {/* Price and Add to Cart Button */}
      <div className="pt-2 border-t border-stone-100 flex flex-col gap-3">
        <div className="flex items-baseline gap-2">
          <span className="text-lg sm:text-xl font-bold font-poppins text-[#0E4431]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-stone-400 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
            !product.inStock
              ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
              : isAdded
              ? 'bg-emerald-700 text-white shadow-md'
              : 'bg-[#0E4431] hover:bg-[#093022] text-white shadow-sm hover:shadow-md'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 text-emerald-300" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
