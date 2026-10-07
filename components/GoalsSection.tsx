import React from 'react';
import Image from 'next/image';
import { wellnessGoals } from '@/data/products';
import { CategoryCard } from './CategoryCard';
import { SvgLeavesBackground } from '@/components/SvgLeaves';

export const GoalsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#FAF7F2] overflow-hidden">
      {/* Background with Ambient Radial Glows and Floating SVG Leaves */}
      <SvgLeavesBackground density="low" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block">
              Your Wellness Goals
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-[#0E4431] tracking-tight">
            Support for Every Step of Your Journey
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Discover tailored, plant-powered solutions designed to match your specific lifestyle aspirations.
          </p>
        </div>

        {/* 3 Goal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wellnessGoals.map((goal) => (
            <CategoryCard
              key={goal.id}
              title={goal.title}
              description={goal.description}
              image={goal.image}
              href={goal.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
