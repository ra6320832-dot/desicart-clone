import watchImg from "@/assets/bolt-pro-watch.png";
import earbudsImg from "@/assets/earbuds.png";
import headphonesImg from "@/assets/headphones.png";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  oldPrice?: string;
  img: string;
  tag?: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "bolt-pro",
    name: "BOLT PRO Smartwatch",
    tagline: "Pakistan's 1st Flat Edge Design Smartwatch",
    price: "PKR 12,999",
    oldPrice: "PKR 17,999",
    img: watchImg,
    tag: "Best Seller",
    description:
      "BOLT PRO is engineered for the bold — a flat-edge design, AMOLED display, Bluetooth calling, and 7-day battery life.",
    features: [
      "1.85\" AMOLED Always-On Display",
      "Bluetooth Calling & Voice Assistant",
      "100+ Sports Modes",
      "IP68 Water Resistance",
      "7-Day Battery Life",
    ],
  },
  {
    slug: "sonic-buds-x1",
    name: "Sonic Buds X1",
    tagline: "True Wireless. Pure Sound.",
    price: "PKR 4,499",
    oldPrice: "PKR 6,999",
    img: earbudsImg,
    tag: "New",
    description:
      "Sonic Buds X1 deliver crystal clear audio with active noise cancellation and an all-day battery in a feather-light shell.",
    features: [
      "Active Noise Cancellation",
      "13mm Bass Drivers",
      "30H Total Playtime",
      "Bluetooth 5.3",
      "Touch Controls",
    ],
  },
  {
    slug: "aurora-headphones",
    name: "Aurora Headphones",
    tagline: "Studio-Grade Wireless Headphones",
    price: "PKR 8,999",
    oldPrice: "PKR 12,999",
    img: headphonesImg,
    tag: "Limited",
    description:
      "Aurora wraps you in immersive 360° sound with plush memory-foam earcups and 40-hour playback.",
    features: [
      "40mm Dynamic Drivers",
      "Hybrid ANC + Transparency",
      "40H Battery Life",
      "Foldable Design",
      "Premium Memory Foam",
    ],
  },
];

export const WHATSAPP_NUMBER = "923214028277"; // 0321-4028277 in international format

export function waLinkFor(productName: string) {
  const text = `Hi! I want to order the ${productName} from DesiCart.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
