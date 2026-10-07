'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal } from 'lucide-react';
import { FilterSidebar } from './FilterSidebar';

interface MobileFilterProps {
  isOpen: boolean;
  onClose: () => void;
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

export const MobileFilter: React.FC<MobileFilterProps> = ({
  isOpen,
  onClose,
  ...filterProps
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end bg-stone-900/60 backdrop-blur-sm lg:hidden">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full max-w-xs bg-white h-full shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-emerald-800" />
              <h3 className="font-bold font-poppins text-stone-900">Filters</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4">
            <FilterSidebar {...filterProps} />
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-stone-200 bg-stone-50">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#0E4431] text-white font-semibold text-sm shadow-md"
            >
              Apply Filters
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
