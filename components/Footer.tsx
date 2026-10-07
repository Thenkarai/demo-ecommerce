import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import { SvgLeafPair } from '@/components/SvgLeaves';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#122B1E] text-stone-200 pt-16 pb-10 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/60">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 flex items-center justify-center p-1">
                <SvgLeafPair size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-poppins">
                  Wellness Center
                </span>
                <span className="text-[9px] tracking-[0.2em] font-medium text-emerald-400 uppercase -mt-0.5">
                  Natural Care, For A Healthier You
                </span>
              </div>
            </Link>

            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              We bring you pure, authentic herpo-based nutritional formulations to support healthy weight gain, active weight management, and vibrant daily living naturally.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-[#25D366] text-stone-300 hover:text-white flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-pink-600 text-stone-300 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-blue-600 text-stone-300 hover:text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-red-600 text-stone-300 hover:text-white flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 font-poppins">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-300 transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-300 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-emerald-300 transition">
                  View Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Wellness Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 font-poppins">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products?category=Weight+Gain"
                  className="hover:text-emerald-300 transition"
                >
                  Weight Gain
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Weight+Management"
                  className="hover:text-emerald-300 transition"
                >
                  Weight Management
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=General+Wellness"
                  className="hover:text-emerald-300 transition"
                >
                  General Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Nutrition"
                  className="hover:text-emerald-300 transition"
                >
                  Daily Nutrition
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 font-poppins">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>123, Gandhipuram Main Road, Coimbatore, Tamil Nadu - 641012</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-emerald-300 transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition"
                >
                  WhatsApp Ordering Support
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:support@wellnesscenter.com"
                  className="hover:text-emerald-300 transition"
                >
                  support@wellnesscenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 Wellness Center. All rights reserved. Crafted for holistic health.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
