import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badgeIcon?: React.ReactNode;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  return (
    <div className="group relative bg-[#F7F4EC] hover:bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Arched image container matching reference */}
        <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden mb-6 bg-stone-200/50 shadow-inner">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent opacity-60" />
        </div>

        {/* Text Details */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold font-poppins text-[#0E4431]">
            {title}
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Explore Button */}
      <Link
        href={href}
        className="inline-flex items-center justify-between w-full py-3 px-5 rounded-2xl bg-[#0E4431] group-hover:bg-[#0A3324] text-white text-sm font-semibold transition-all duration-200 shadow-sm"
      >
        <span>Explore</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
