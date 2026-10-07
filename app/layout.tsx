import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/context/ToastContext';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppModal } from '@/components/WhatsAppModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://wellnesscenter.com'),
  title: 'Wellness Center | Natural Care, For A Healthier You',
  description:
    'Pure herpo-based wellness products to support healthy weight gain, weight management, and general vitality naturally.',
  keywords: [
    'herpo wellness',
    'weight gain support',
    'weight management',
    'ayurvedic nutrition',
    'herbal supplements',
    'natural health',
  ],
  openGraph: {
    title: 'Wellness Center | Pure Herpo-Based Wellness',
    description:
      'Herpo-based products to support your weight goals, boost nutrition and enhance your overall wellness.',
    url: 'https://wellnesscenter.com',
    siteName: 'Wellness Center',
    images: [
      {
        url: '/images/banners/hero_wellness_woman.jpg',
        width: 1200,
        height: 630,
        alt: 'Wellness Center Natural Products',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] text-[#1A2820] flex flex-col min-h-screen">
        <ToastProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppModal />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
