import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle2 } from 'lucide-react';
import { testimonials } from '@/data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-800">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-[#0E4431]">
            What Our Customers Say
          </h2>
          <p className="text-stone-600 text-sm">
            Honest feedback from people embracing pure botanical wellness.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-stone-200/70 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Stars */}
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote content */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  {t.content}
                </p>
              </div>

              {/* Customer Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-200/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone-200 border-2 border-white shadow-sm shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-stone-900 font-poppins">
                      {t.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                  </div>
                  <span className="text-xs text-stone-500 font-normal">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
