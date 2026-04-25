import ultra3Img from "@/assets/ultra3-watch.png";
import airpodsImg from "@/assets/airpods-pro-2.png";
import kts1185Img from "@/assets/kts-1185-speaker.png";
import powerbankImg from "@/assets/powerbank.png";
import akgImg from "@/assets/akg-handsfree.png";
import solarSpeakerImg from "@/assets/solar-speaker.png";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  oldPrice?: string;
  img: string;
  tag?: string;
  category: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "ultra-3-smartwatch",
    name: "Ultra 3 Smartwatch",
    tagline: "Pakistan's Most Versatile 7-Strap Luxury Watch",
    price: "Rs. 4,500",
    oldPrice: "Rs. 12,000",
    img: ultra3Img,
    tag: "7-in-1 Edition",
    category: "Smart Watch",
    description:
      "The ultimate smartwatch package for DesiCart customers. Featuring a stunning Super AMOLED display and 7 different interchangeable straps to match every outfit.",
    features: [
      "Big Full HD Infinite Display",
      "7 Premium Straps Included in Box",
      "Wireless Fast Charging",
      "Bluetooth Calling & Heart Rate Monitoring",
      "Sports Mode & Calculator Built-in",
    ],
  },
  {
    slug: "airpods-pro-2-black",
    name: "Airpods Pro 2 Black",
    tagline: "Master Copy | ANC & Deep Bass",
    price: "Rs. 1,500",
    oldPrice: "Rs. 3,500",
    img: airpodsImg,
    tag: "Best Seller",
    category: "Earbuds",
    description:
      "Experience premium sound with the sleek Airpods Pro 2 in a stunning matte black finish. Designed for comfort and high-quality audio, these are the perfect daily drivers for music and calls.",
    features: [
      "Active Noise Cancellation (ANC) support",
      "Superior Bass & Crisp Treble",
      "3-4 Hours Playback Time",
      "Touch Controls for Music & Calls",
      "Wireless Charging Case",
    ],
  },
  {
    slug: "kts-1185-speaker",
    name: "KTS-1185 Wireless Speaker",
    tagline: "3-Inch Drive | Built-in Emergency Torch",
    price: "Rs. 1,800",
    oldPrice: "Rs. 3,500",
    img: kts1185Img,
    tag: "New",
    category: "Speakers",
    description:
      "A portable powerhouse for music lovers. This wireless speaker features a 3-inch high-bass driver and a built-in emergency light, making it the perfect outdoor companion.",
    features: [
      "3\" Powerful Audio Drive",
      "Built-in High-Power Emergency Light",
      "FM Radio & USB/TF Card Support",
      "Wireless Bluetooth Connectivity",
      "Rugged, Portable Design with Handle",
    ],
  },
  {
    slug: "super-charger-powerbank",
    name: "Super Charger Power Bank",
    tagline: "LED Digital Display | PD Fast Charging",
    price: "Rs. 2,999",
    oldPrice: "Rs. 6,000",
    img: powerbankImg,
    tag: "Limited",
    category: "Accessories",
    description:
      "Never run out of juice again. This intelligent super-fast charging power bank features a digital percentage display and PD Type-C input/output.",
    features: [
      "Intelligent Super Fast Charging",
      "LED Digital Battery Percentage Display",
      "Type-C PD 20W Output",
      "Travel-Friendly Design (Check-in OK)",
      "Multiple Device Protection Circuit",
    ],
  },
  {
    slug: "akg-handsfree",
    name: "AKG Type-C Handsfree",
    tagline: "Best Sound and Bass | Samsung Optimized",
    price: "Rs. 600",
    oldPrice: "Rs. 1,200",
    img: akgImg,
    category: "Headphones",
    description:
      "Original-quality AKG tuned earphones featuring deep bass and crystal clear audio. Available in both Type-C and 3.5mm jack versions to fit any smartphone.",
    features: [
      "Tuned by AKG for Studio Quality Sound",
      "Tangle-free Fabric Cable",
      "In-line Mic with Volume Control",
      "Extra Bass Boost Technology",
      "Ergonomic In-ear Design",
    ],
  },
  {
    slug: "kts-1706-solar-speaker",
    name: "KTS-1706 Solar Speaker",
    tagline: "4-Inch Drive | Solar Powered Music",
    price: "Rs. 2,500",
    oldPrice: "Rs. 4,500",
    img: solarSpeakerImg,
    tag: "Outdoor",
    category: "Speakers",
    description:
      "A rugged outdoor speaker that never stops playing. With a built-in solar panel, you can charge it under the sun while enjoying your favorite hits with the massive 4-inch driver.",
    features: [
      "Built-in Solar Charging Panel",
      "Large 4\" High-Output Driver",
      "High-Power LED Flashlight",
      "Bluetooth, USB, and SD Card Support",
      "Long-lasting Rechargeable Battery",
    ],
  },
];

export const WHATSAPP_NUMBER = "923214028277"; // 0321-4028277

export function waLinkFor(productName: string) {
  const text = `Hi! I want to order the ${productName} from DesiCart.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
