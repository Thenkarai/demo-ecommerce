'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = searchTerm.trim()
    ? products.filter((p) => {
        const query = searchTerm.toLowerCase();
        return (
          p.name.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(query))
        );
      })
    : products.slice(0, 4); // Show top 4 trending when input is empty

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Search Header Input */}
          <div className="flex items-center gap-3 p-5 border-b border-stone-100 bg-[#FAF7F2]">
            <Search className="w-5 h-5 text-emerald-800 shrink-0 ml-1" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products, goals, herbal ingredients..."
              className="w-full bg-transparent text-stone-900 text-base md:text-lg focus:outline-none placeholder:text-stone-400 font-inter"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-200/50 transition"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="ml-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 transition"
            >
              ESC
            </button>
          </div>

          {/* Search Body Content */}
          <div className="p-5 overflow-y-auto flex-1">
            <div className="flex items-center justify-between mb-3 text-xs font-bold uppercase tracking-wider text-stone-500">
              <span>{searchTerm.trim() ? `Search Results (${filteredProducts.length})` : 'Popular Searches'}</span>
              {!searchTerm.trim() && (
                <span className="flex items-center gap-1 text-emerald-700 lowercase font-medium">
                  <Sparkles className="w-3.5 h-3.5" /> recommended
                </span>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center text-stone-500">
                <p className="text-base font-medium mb-1">No products found</p>
                <p className="text-xs text-stone-400">
                  Try searching for &quot;weight&quot;, &quot;ashwagandha&quot;, or &quot;immunity&quot;.
                </p>
              </div>
            ) : (
              <div className="grid gap-2">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-100 transition group"
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200/60">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                          {product.category}
                        </span>
                        {product.badge && (
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-stone-900 truncate mt-1 group-hover:text-emerald-800 transition">
                        {product.name}
                      </h4>
                      <p className="text-xs text-stone-500 truncate">{product.subtitle}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-bold text-stone-900 font-poppins">
                        ₹{product.price.toLocaleString('en-IN')}
                      </div>
                      <span className="text-xs text-emerald-700 group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                        View <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quick Categories Footer */}
          <div className="p-4 bg-stone-50 border-t border-stone-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500 font-medium">Quick categories:</span>
            {['Weight Gain', 'Weight Management', 'General Wellness'].map((cat) => (
              <Link
                key={cat}
                href={`/products?category=${encodeURIComponent(cat)}`}
                onClick={onClose}
                className="px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700 hover:border-emerald-600 hover:text-emerald-700 transition"
              >
                {cat}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
