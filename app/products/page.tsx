'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { MobileFilter } from '@/components/MobileFilter';
import { SvgLeavesBackground, SvgLeafPair } from '@/components/SvgLeaves';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('category') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [priceRange, setPriceRange] = useState<number>(2000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Category counts
  const categoryCounts = useMemo(() => {
    return {
      All: products.length,
      'Weight Gain': products.filter((p) => p.category === 'Weight Gain').length,
      'Weight Management': products.filter((p) => p.category === 'Weight Management').length,
      'General Wellness': products.filter((p) => p.category === 'General Wellness').length,
    };
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price range
    result = result.filter((p) => p.price <= priceRange);

    // Stock
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // Rating
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    // Sorting
    if (sortBy === 'popularity') {
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    } else if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, priceRange, inStockOnly, minRating, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('');
    setPriceRange(2000);
    setInStockOnly(false);
    setMinRating(0);
    setSortBy('popularity');
  };

  const categoriesList = [
    { label: 'All Products', value: '' },
    { label: 'Weight Gain', value: 'Weight Gain' },
    { label: 'Weight Management', value: 'Weight Management' },
    { label: 'General Wellness', value: 'General Wellness' },
  ];

  return (
    <div className="relative bg-[#FAF7F2] min-h-screen py-8 sm:py-12 overflow-hidden">
      {/* Background with Ambient Radial Glows and Floating SVG Leaves */}
      <SvgLeavesBackground density="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="text-xs sm:text-sm text-stone-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0E4431]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#0E4431] font-medium">Products</span>
        </nav>

        {/* Top Header / Botanical Banner with Framing Leaves */}
        <div className="relative rounded-3xl bg-white p-6 sm:p-10 border border-stone-200/80 shadow-sm overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Top-Right Decorative Botanical Leaf Branch Framing the Banner */}
          <div className="absolute -top-10 -right-8 w-44 sm:w-56 pointer-events-none opacity-80 z-20 animate-leaf-sway">
            <Image
              src="/images/leaves/leaf-branch-glossy-hd.png"
              alt="Botanical branch"
              width={260}
              height={360}
              className="object-contain leaf-shadow transform rotate-45"
            />
          </div>

          <div className="space-y-2 max-w-xl z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800">
                Herpo Formulations
              </span>
              <div className="animate-float-slow">
                <Image
                  src="/images/leaves/leaf-pair-floating-hd.png"
                  alt="Leaf"
                  width={20}
                  height={18}
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-[#0E4431]">
              Our Products
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Explore our range of herpo-based wellness products for a healthier and better you.
            </p>
          </div>

          <div className="relative w-36 h-28 sm:w-48 sm:h-36 shrink-0 rounded-2xl overflow-hidden self-end md:self-center z-10 border-2 border-emerald-100 shadow-md">
            <Image
              src="/images/banners/herbal_mortar_pestle.jpg"
              alt="Natural botanicals"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Category Pills & Sorting Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-2 border-b border-stone-200/70">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categoriesList.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#0E4431] text-white shadow-md'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Side: Mobile Filter button + Sort Dropdown */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200 text-stone-800 text-xs sm:text-sm font-semibold shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-emerald-800" />
              <span>Filter ({filteredProducts.length})</span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative inline-flex items-center">
              <span className="text-xs sm:text-sm text-stone-500 mr-2 hidden sm:inline">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-stone-200 text-stone-800 text-xs sm:text-sm font-medium rounded-full px-4 py-2.5 pr-8 focus:outline-none focus:border-emerald-600 appearance-none shadow-sm cursor-pointer"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating: High to Low</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Grid & Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              priceRange={priceRange}
              onChangePriceRange={setPriceRange}
              inStockOnly={inStockOnly}
              onToggleInStock={setInStockOnly}
              minRating={minRating}
              onSelectRating={setMinRating}
              onResetFilters={handleResetFilters}
              categoryCounts={categoryCounts}
            />
          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto text-2xl">
                  🍃
                </div>
                <h3 className="text-xl font-bold font-poppins text-stone-900">
                  No products matched your criteria
                </h3>
                <p className="text-stone-500 text-sm max-w-sm mx-auto">
                  Try adjusting the price range, availability or category filter to discover more wellness options.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-full bg-[#0E4431] text-white text-sm font-semibold shadow-md"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilter
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        priceRange={priceRange}
        onChangePriceRange={setPriceRange}
        inStockOnly={inStockOnly}
        onToggleInStock={setInStockOnly}
        minRating={minRating}
        onSelectRating={setMinRating}
        onResetFilters={handleResetFilters}
        categoryCounts={categoryCounts}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading catalogue...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
