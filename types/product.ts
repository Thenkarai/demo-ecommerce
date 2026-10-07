export type ProductCategory = 'Weight Gain' | 'Weight Management' | 'General Wellness' | 'Nutrition';

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  popular?: boolean;
  image: string;
  gallery: string[];
  unit: string;
  badge?: string;
  description: string;
  features: string[];
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  reviews?: {
    id: string;
    userName: string;
    rating: number;
    date: string;
    comment: string;
    verified: boolean;
  }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerOrderDetails {
  fullName: string;
  phoneNumber: string;
  deliveryAddress: string;
  additionalNotes?: string;
}
