# WELLNESS CENTER - Product Catalogue & WhatsApp E-Commerce

A modern, responsive, animated wellness e-commerce catalogue website for **Wellness Center**, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. Customers can browse botanical wellness products, customize quantities, review their shopping cart, fill customer delivery details, and send orders directly via WhatsApp.

---

## 🌿 Approved Visual Design & Architecture

This implementation faithfully reproduces the approved customer reference design:
- **Natural Emerald Theme**: Deep emerald green (`#0E4431`), natural sage accents, warm cream surfaces (`#FAF7F2`), and charcoal typography.
- **Typography Hierarchy**: Poppins for bold headings, Inter for comfortable body text, Caveat for handwritten script accents.
- **E-Commerce Flow (No Online Payment Gateways)**:
  `Home` → `Explore Products` → `Filter / Search` → `Product Details` → `Add to Cart` → `Cart Summary` → `Checkout Details` → `Almost There Modal` → `WhatsApp wa.me Order Dispatch`.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: React Context API (`CartContext` & `ToastContext`)
- **Persistence**: `localStorage`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image with optimized local/remote assets
- **Order Dispatch**: WhatsApp wa.me URL scheme with `encodeURIComponent`

---

## 📁 Project Structure

```
app/
├── globals.css                # Custom design variables, typography & scrollbars
├── layout.tsx                 # Root layout with CartProvider, ToastProvider, Header, Footer & WhatsAppModal
├── page.tsx                   # Approved Home Page with all 8 sections
├── products/
│   ├── page.tsx               # Product catalogue with filter sidebar & sorting
│   └── [slug]/
│       └── page.tsx           # Product detail page with gallery, tabs, related items
├── cart/
│   └── page.tsx               # Shopping cart with quantity steppers & subtotal
├── checkout/
│   └── page.tsx               # Customer delivery info form & order review
├── about/
│   └── page.tsx               # About Wellness Center & Ayurvedic values
├── contact/
│   └── page.tsx               # Contact info & direct WhatsApp messaging
└── not-found.tsx              # Approved 404 botanical framed page

components/
├── Header.tsx                 # Desktop & mobile responsive header with search & cart badge
├── Footer.tsx                 # Complete footer with brand links & contact info
├── Hero.tsx                   # Hero section with woman visual & organic badges
├── ProductCard.tsx            # Product card with hover zoom, wishlist, and cart action
├── CategoryCard.tsx           # Arched goal cards for Weight Gain, Loss & Wellness
├── GoalsSection.tsx           # "Your Wellness Goals" section
├── FeaturedProducts.tsx       # "Our Popular Wellness Products" grid
├── WhySection.tsx             # Mortar & Pestle "Pure Ingredients. Real Results."
├── Testimonials.tsx           # Customer reviews with verified badges
├── CTASection.tsx             # "Live A Healthier, Happier You" panoramic banner
├── Newsletter.tsx             # Community subscription form
├── FilterSidebar.tsx          # Desktop filter sidebar with category, price slider & ratings
├── MobileFilter.tsx           # Mobile filter drawer
├── ProductGallery.tsx         # Interactive image selector
├── ProductDetails.tsx         # Detailed product layout with tab switcher
├── CartItem.tsx               # Cart line item with stepper and delete button
├── CartSummary.tsx            # Order totals and WhatsApp CTA
├── CustomerForm.tsx           # Customer details form for checkout
├── OrderSummary.tsx           # Order review with WhatsApp trigger
├── WhatsAppModal.tsx          # "Almost There!" confirmation pop-up
├── SearchModal.tsx            # Live instant product search overlay
├── LoadingSkeleton.tsx        # Skeleton loaders for product grids
└── Toast.tsx                  # Toast alert UI

context/
├── CartContext.tsx            # React Context with localStorage persistence
└── ToastContext.tsx           # Animated toast notification manager

data/
└── products.ts                # Realistic product catalogue & testimonials

lib/
└── whatsapp.ts                # WhatsApp message builder & encoder

types/
└── product.ts                 # TypeScript types & interfaces
```

---

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run locally**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 💬 WhatsApp Order Integration

Orders are automatically formatted and encoded for WhatsApp dispatch without needing third-party payment gateways:

```text
Hello, I would like to place an order.

Order Details:
1. Herpo Gain Plus x 1 - ₹1,299
2. Slim Herpo Blend x 2 - ₹2,398
3. Herpo Immunity x 1 - ₹899

Total: ₹4,596

Customer Details:
Name: Pravin
Phone: +91 98765 43210
Address: 123, Gandhipuram Main Road, Coimbatore, Tamil Nadu - 641012
Notes: Please deliver in the evening.
```

Configure your receiver phone number in `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```