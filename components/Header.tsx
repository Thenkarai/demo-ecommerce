'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, X, MessageCircle, Leaf } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { SearchModal } from './SearchModal';
import { buildConsultationUrl } from '@/lib/whatsapp';
import { SvgLeafPair } from '@/components/SvgLeaves';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Weight Gain', href: '/products?category=Weight+Gain' },
    { name: 'Weight Management', href: '/products?category=Weight+Management' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleWhatsAppClick = () => {
    const url = buildConsultationUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-stone-200/50 py-3'
            : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-4 border-b border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center shadow-md shadow-emerald-900/20 group-hover:bg-emerald-900 transition p-1">
                <SvgLeafPair size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0E4431] font-poppins">
                  Wellness Center
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold text-emerald-700 uppercase -mt-0.5">
                  Natural Care, For A Healthier You
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors py-1 relative ${
                      isActive
                        ? 'text-[#0E4431] font-semibold'
                        : 'text-stone-700 hover:text-[#0E4431]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0E4431] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full text-stone-700 hover:text-[#0E4431] hover:bg-stone-100/80 transition"
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart Icon */}
              <Link
                href="/cart"
                className="relative p-2.5 rounded-full text-stone-700 hover:text-[#0E4431] hover:bg-stone-100/80 transition"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-emerald-800 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* WhatsApp CTA Button */}
              <button
                onClick={handleWhatsAppClick}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0E4431] hover:bg-[#093022] text-white text-xs sm:text-sm font-medium shadow-md shadow-emerald-950/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
                </div>
                <span>Order via WhatsApp</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-stone-700 hover:bg-stone-100"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-stone-800 hover:text-[#0E4431] py-2 border-b border-stone-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-stone-400">→</span>
                </Link>
              ))}
            </nav>

            <div className="pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-[#0E4431] text-white font-medium text-sm shadow-md"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
                </div>
                <span>Order via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};
