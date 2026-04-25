import { createFileRoute } from "@tanstack/react-router";
import { Search, ShoppingCart, Menu, MessageCircle, Truck, ShieldCheck, Headphones as HeadphonesIcon, Zap, Star, ChevronRight, User } from "lucide-react";
import watchImg from "@/assets/bolt-pro-watch.png";
import earbudsImg from "@/assets/earbuds.png";
import headphonesImg from "@/assets/headphones.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DesiCart — BOLT PRO Smartwatch | Pakistan's 1st Flat Edge Design" },
      { name: "description", content: "Pre-order the BOLT PRO by DesiCart — Pakistan's 1st Flat Edge Design Smartwatch. Premium audio & wearables." },
    ],
  }),
});

const WA_LINK = "https://wa.me/03214028277?text=I%20want%20to%20order%20the%20Bolt%20Pro";

function TopBar() {
  const text = "Congratulations 🎉! FREE DELIVERY applied.";
  return (
    <div className="bg-neon-green text-black overflow-hidden py-2 text-xs sm:text-sm font-semibold">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="mx-4 sm:mx-6 flex items-center gap-2">
            {text} <span className="opacity-60">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const links = ["Home", "Smart Watches", "Earbuds", "Headphones", "Support"];
  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Menu" className="md:hidden text-foreground"><Menu className="h-6 w-6" /></button>
          <a href="#" className="font-display text-xl sm:text-2xl font-black tracking-tight text-foreground">
            Desi<span className="text-accent">Cart</span>
          </a>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3 sm:gap-4 text-foreground">
          <button aria-label="Search" className="hover:text-accent transition-colors"><Search className="h-5 w-5" /></button>
          <button aria-label="Account" className="hidden sm:inline hover:text-accent transition-colors"><User className="h-5 w-5" /></button>
          <button aria-label="Cart" className="relative hover:text-accent transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] h-4 w-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center min-h-[480px] md:min-h-[600px]">
        <div className="space-y-5 sm:space-y-6 text-center md:text-left z-10 order-2 md:order-1">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
            <Zap className="h-3 w-3" /> New Launch
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black leading-[0.85] text-white drop-shadow-lg">
            BOLT PRO
          </h1>
          <p className="font-display text-base sm:text-lg md:text-xl text-white/90 uppercase tracking-[0.2em] font-semibold">
            Premium Smartwatch Series
          </p>
          <p className="text-sm sm:text-base text-white/80 max-w-md mx-auto md:mx-0">
            Pakistan's 1st Flat Edge Design Smartwatch — engineered for the bold.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start justify-center md:justify-start pt-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-xs sm:text-sm px-7 sm:px-9 py-3.5 sm:py-4 rounded-full hover:scale-105 transition-transform shadow-glow"
            >
              Pre-Order Now
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current text-neon-green" style={{ color: "var(--neon-green)" }} />)}</div>
              <span>4.9 / 12k reviews</span>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center order-1 md:order-2">
          <div className="absolute h-56 w-56 sm:h-72 sm:w-72 md:h-[28rem] md:w-[28rem] rounded-full bg-white/20 blur-3xl" />
          <img
            src={watchImg}
            alt="BOLT PRO Smartwatch"
            width={1024}
            height={1024}
            className="relative z-10 w-56 sm:w-72 md:w-full md:max-w-lg animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

const categories = [
  { label: "Smart Watches", img: watchImg },
  { label: "New Launch", img: earbudsImg },
  { label: "Best Offers", img: watchImg },
  { label: "Headphones", img: headphonesImg },
  { label: "Earbuds", img: earbudsImg },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="grid grid-cols-5 gap-3 sm:gap-6">
        {categories.map((c) => (
          <a key={c.label} href="#" className="flex flex-col items-center gap-2 group">
            <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-secondary border border-border flex items-center justify-center overflow-hidden group-hover:border-accent transition-colors">
              <img src={c.img} alt={c.label} loading="lazy" className="h-3/4 w-3/4 object-contain" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-center text-foreground">{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function FeatureStrip() {
  const items = [
    { icon: Truck, label: "Free Delivery" },
    { icon: ShieldCheck, label: "1 Year Warranty" },
    { icon: HeadphonesIcon, label: "24/7 Support" },
    { icon: Zap, label: "Fast Charging" },
  ];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
            </div>
            <span className="font-semibold text-xs sm:text-sm text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const products = [
  { name: "BOLT PRO Smartwatch", price: "PKR 12,999", img: watchImg, tag: "Best Seller" },
  { name: "Sonic Buds X1", price: "PKR 4,499", img: earbudsImg, tag: "New" },
  { name: "Aurora Headphones", price: "PKR 8,999", img: headphonesImg, tag: "Limited" },
];

function Products() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="flex items-end justify-between mb-8 sm:mb-12">
        <div>
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Shop the Drop</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black text-foreground">Featured Products</h2>
        </div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">
          View All <ChevronRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {products.map((p) => (
          <div key={p.name} className="group bg-card border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-product duration-300">
            <div className="relative aspect-square rounded-xl sm:rounded-2xl bg-secondary overflow-hidden mb-4 sm:mb-6 flex items-center justify-center">
              <span className="absolute top-3 left-3 z-10 text-[10px] uppercase tracking-widest font-bold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">{p.tag}</span>
              <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display text-base sm:text-xl font-bold text-foreground">{p.name}</h3>
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" style={{ color: "var(--neon-green)" }} />)}</div>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4">Premium build. Flagship performance.</p>
            <div className="flex items-center justify-between">
              <span className="font-display text-lg sm:text-2xl font-black text-foreground">{p.price}</span>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-foreground text-background px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-accent transition-colors">
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-hero-gradient p-8 sm:p-12 md:p-20 text-center">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black text-white drop-shadow">Join the Movement.</h2>
          <p className="text-white/90 text-sm sm:text-lg">Be the first to wear the future. Pre-order BOLT PRO today and get free delivery nationwide.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-wider text-xs sm:text-sm px-7 sm:px-10 py-3.5 sm:py-4 rounded-full hover:scale-105 transition-transform shadow-glow">
            Order on WhatsApp <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-2xl font-black mb-3 text-foreground">Desi<span className="text-accent">Cart</span></p>
          <p className="text-sm text-muted-foreground">Premium tech. Pakistani roots.</p>
        </div>
        {["Shop", "Support", "Company"].map((h) => (
          <div key={h}>
            <p className="font-bold mb-3 text-xs sm:text-sm uppercase tracking-widest text-foreground">{h}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent">Link one</a></li>
              <li><a href="#" className="hover:text-accent">Link two</a></li>
              <li><a href="#" className="hover:text-accent">Link three</a></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 DesiCart. All rights reserved.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-whatsapp flex items-center justify-center shadow-2xl animate-pulse-ring hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="white" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeatureStrip />
        <Products />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
