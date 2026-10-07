import { CartItem, CustomerOrderDetails, Product } from '@/types/product';

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';

/**
 * Builds the WhatsApp direct order URL for the cart + customer details
 */
export function buildWhatsAppOrderUrl(
  items: CartItem[],
  customerDetails?: CustomerOrderDetails,
  customTotal?: number
): string {
  const total =
    customTotal !== undefined
      ? customTotal
      : items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  let message = `Hello, I would like to place an order.\n\nOrder Details:\n`;

  items.forEach((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    message += `${index + 1}. ${item.product.name} x ${item.quantity} - ₹${itemTotal.toLocaleString('en-IN')}\n`;
  });

  message += `\nTotal: ₹${total.toLocaleString('en-IN')}\n`;

  if (customerDetails && customerDetails.fullName.trim()) {
    message += `\nCustomer Details:\n`;
    message += `Name: ${customerDetails.fullName.trim()}\n`;
    message += `Phone: ${customerDetails.phoneNumber.trim()}\n`;
    message += `Address: ${customerDetails.deliveryAddress.trim()}\n`;
    if (customerDetails.additionalNotes && customerDetails.additionalNotes.trim()) {
      message += `Notes: ${customerDetails.additionalNotes.trim()}\n`;
    }
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Builds quick WhatsApp product enquiry link
 */
export function buildProductEnquiryUrl(product: Product, quantity = 1): string {
  const message = `Hello Wellness Center, I am interested in ordering:
*${product.name}* (${product.subtitle})
Quantity: ${quantity}
Price: ₹${(product.price * quantity).toLocaleString('en-IN')}

Could you please assist me with the order and delivery?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds free consultation WhatsApp link
 */
export function buildConsultationUrl(topic = 'general'): string {
  const message = `Hello Wellness Center, I would like to get a free natural wellness consultation regarding ${topic} support.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
