import React from 'react';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm animate-pulse space-y-4">
      <div className="aspect-square w-full rounded-2xl bg-stone-200" />
      <div className="space-y-2">
        <div className="h-4 bg-stone-200 rounded w-3/4" />
        <div className="h-3 bg-stone-200 rounded w-1/2" />
        <div className="h-3 bg-stone-200 rounded w-1/4" />
      </div>
      <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
        <div className="h-5 bg-stone-200 rounded w-1/3" />
        <div className="h-10 bg-stone-200 rounded-xl w-full" />
      </div>
    </div>
  );
};

export const ProductGridSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
