import React from 'react';
import { Hero } from '@/components/Hero';
import { GoalsSection } from '@/components/GoalsSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { WhySection } from '@/components/WhySection';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';
import { Newsletter } from '@/components/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <GoalsSection />
      <FeaturedProducts />
      <WhySection />
      <Testimonials />
      <CTASection />
      <Newsletter />
    </>
  );
}
