'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { buildProductEnquiryUrl, buildConsultationUrl } from '@/lib/whatsapp';
import { ProductGallery } from './ProductGallery';
import { ProductCard } from './ProductCard';

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  relatedProducts,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    'description' | 'ingredients' | 'benefits' | 'usage' | 'reviews'
  >('description');
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleOrderWhatsApp = () => {
    const url = buildProductEnquiryUrl(product, quantity);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFreeConsultation = () => {
    const url = buildConsultationUrl(product.name);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16">
      {/* Top Breadcrumb */}
      <nav className="text-xs sm:text-sm text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-[#0E4431]">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#0E4431]">
          Products
        </Link>
        <span>/</span>
        <span className="text-[#0E4431] font-medium">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Gallery */}
        <div className="lg:col-span-6">
          <ProductGallery
            images={product.gallery && product.gallery.length ? product.gallery : [product.image]}
            productName={product.name}
          />
        </div>

        {/* Right Column: Info & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-stone-900 mt-3">
              {product.name}
            </h1>
            <p className="text-base text-stone-600 mt-1 font-medium">
              {product.subtitle}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-stone-900">
                {product.rating}
              </span>
              <span className="text-sm text-stone-500">
                ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Description summary */}
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed border-t border-b border-stone-200/70 py-4">
            {product.description}
          </p>

          {/* 4 Feature Badges Grid */}
          <div className="grid grid-cols-2 gap-3">
            {product.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-stone-200/80 text-xs sm:text-sm font-medium text-stone-800"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-emerald-800" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="space-y-1 pt-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-bold font-poppins text-[#0E4431]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-stone-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-xs text-stone-500 block">
              Inclusive of all taxes • {product.unit}
            </span>
          </div>

          {/* Quantity Stepper & Buttons */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Stepper */}
              <div className="inline-flex items-center justify-between border border-stone-300 rounded-full bg-white px-4 py-2.5 min-w-[130px] shadow-sm">
                <button
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className="p-1 text-stone-600 hover:text-stone-900 disabled:opacity-40 transition"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold text-stone-900 text-base">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="p-1 text-stone-600 hover:text-stone-900 transition"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0E4431] hover:bg-[#082C20] text-white font-semibold text-sm sm:text-base shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Order via WhatsApp direct button */}
            <button
              onClick={handleOrderWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-emerald-50 text-[#0E4431] font-semibold text-sm sm:text-base border-2 border-emerald-800/25 shadow-sm transition-all"
            >
              <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
              </div>
              <span>Order via WhatsApp</span>
            </button>

            {/* Free consultation link */}
            <div className="text-center pt-1">
              <button
                onClick={handleFreeConsultation}
                className="text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1.5 hover:underline"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Free consultation via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm space-y-8">
        {/* Tab Headers */}
        <div className="flex items-center gap-4 sm:gap-8 border-b border-stone-200 overflow-x-auto no-scrollbar">
          {[
            { id: 'description', label: 'Description' },
            { id: 'ingredients', label: 'Ingredients' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'usage', label: 'How to Use' },
            { id: 'reviews', label: 'Reviews' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 text-sm sm:text-base font-semibold whitespace-nowrap transition-colors relative ${
                activeTab === tab.id
                  ? 'text-[#0E4431]'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0E4431]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="prose max-w-none text-stone-700 text-sm sm:text-base leading-relaxed">
          {activeTab === 'description' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-poppins text-stone-900">
                Product Description
              </h3>
              <p>{product.description}</p>
              <ul className="space-y-2 mt-4">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-poppins text-stone-900">
                Pure Botanical Ingredients
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {product.ingredients.map((ing, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 flex items-center gap-3"
                  >
                    <Leaf className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="font-medium text-stone-800">{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-poppins text-stone-900">
                Core Health Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {product.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-3"
                  >
                    <Sparkles className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                    <span className="text-stone-800 font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-poppins text-stone-900">
                Recommended Usage & Dosage
              </h3>
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                <p className="text-stone-800 font-medium leading-relaxed">
                  {product.howToUse}
                </p>
                <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-500">
                  Tip: For optimal results, maintain regular sleep patterns and daily hydration alongside supplement intake.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold font-poppins text-stone-900">
                  Customer Reviews ({product.reviews?.length || 0})
                </h3>
              </div>

              <div className="space-y-4">
                {product.reviews && product.reviews.length > 0 ? (
                  product.reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-stone-900 font-poppins text-sm">
                            {rev.userName}
                          </span>
                          {rev.verified && (
                            <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                              Verified Buyer
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-stone-400">{rev.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-stone-700 leading-relaxed">
                        {rev.comment}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-stone-500">No reviews yet.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="space-y-8 pt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-[#0E4431]">
              Related Products
            </h2>
            <Link
              href="/products"
              className="text-sm font-semibold text-[#0E4431] hover:text-emerald-700 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
