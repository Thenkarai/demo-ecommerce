'use client';

import React from 'react';
import { Star, RotateCcw } from 'lucide-react';
import { ProductCategory } from '@/types/product';

interface FilterSidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  priceRange: number;
  onChangePriceRange: (price: number) => void;
  inStockOnly: boolean;
  onToggleInStock: (val: boolean) => void;
  minRating: number;
  onSelectRating: (rating: number) => void;
  onResetFilters: () => void;
  categoryCounts: Record<string, number>;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  priceRange,
  onChangePriceRange,
  inStockOnly,
  onToggleInStock,
  minRating,
  onSelectRating,
  onResetFilters,
  categoryCounts,
}) => {
  const categories: { label: string; value: string }[] = [
    { label: 'All Products', value: 'All' },
    { label: 'Weight Gain', value: 'Weight Gain' },
    { label: 'Weight Management', value: 'Weight Management' },
    { label: 'General Wellness', value: 'General Wellness' },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-7">
      <div className="flex items-center justify-between pb-3 border-b border-stone-100">
        <h3 className="text-base font-bold font-poppins text-stone-900">
          Filters
        </h3>
        <button
          onClick={onResetFilters}
          className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 transition"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold font-poppins text-stone-900">
          Categories
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => {
            const isChecked =
              selectedCategory === cat.value ||
              (cat.value === 'All' && !selectedCategory);
            const count = categoryCounts[cat.value] || 0;

            return (
              <label
                key={cat.value}
                onClick={() => onSelectCategory(cat.value === 'All' ? '' : cat.value)}
                className="flex items-center justify-between text-sm text-stone-700 hover:text-[#0E4431] cursor-pointer group select-none py-0.5"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="category"
                    checked={isChecked}
                    onChange={() => {}}
                    className="w-4 h-4 text-emerald-700 border-stone-300 focus:ring-emerald-600 accent-emerald-800 cursor-pointer"
                  />
                  <span className={isChecked ? 'font-semibold text-emerald-900' : ''}>
                    {cat.label}
                  </span>
                </div>
                <span className="text-xs text-stone-400 group-hover:text-stone-600">
                  ({count})
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3 pt-3 border-t border-stone-100">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold font-poppins text-stone-900">
            Price Range
          </h4>
          <span className="text-xs font-bold text-emerald-800">
            ₹0 – ₹{priceRange.toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min="500"
          max="2000"
          step="50"
          value={priceRange}
          onChange={(e) => onChangePriceRange(Number(e.target.value))}
          className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-800"
        />
        <div className="flex justify-between text-[11px] text-stone-400 font-medium">
          <span>₹0</span>
          <span>₹2,000</span>
        </div>
      </div>

      {/* Availability */}
      <div className="space-y-3 pt-3 border-t border-stone-100">
        <h4 className="text-sm font-semibold font-poppins text-stone-900">
          Availability
        </h4>
        <label className="flex items-center justify-between text-sm text-stone-700 hover:text-[#0E4431] cursor-pointer group select-none">
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onToggleInStock(e.target.checked)}
              className="w-4 h-4 rounded text-emerald-700 border-stone-300 focus:ring-emerald-600 accent-emerald-800 cursor-pointer"
            />
            <span>In Stock</span>
          </div>
          <span className="text-xs text-stone-400">(6)</span>
        </label>
      </div>

      {/* Rating */}
      <div className="space-y-3 pt-3 border-t border-stone-100">
        <h4 className="text-sm font-semibold font-poppins text-stone-900">
          Rating
        </h4>
        <div className="space-y-2">
          {[
            { label: '4.5 & above', rating: 4.5, count: 5 },
            { label: '4.0 & above', rating: 4.0, count: 6 },
          ].map((item) => (
            <label
              key={item.rating}
              onClick={() => onSelectRating(minRating === item.rating ? 0 : item.rating)}
              className="flex items-center justify-between text-sm text-stone-700 hover:text-[#0E4431] cursor-pointer group select-none"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={minRating === item.rating}
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-emerald-700 border-stone-300 focus:ring-emerald-600 accent-emerald-800 cursor-pointer"
                />
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs text-stone-700 font-medium">
                    {item.label}
                  </span>
                </div>
              </div>
              <span className="text-xs text-stone-400">({item.count})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
