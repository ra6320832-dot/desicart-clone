import { createFileRoute } from "@tanstack/react-router";
import { Search, ShoppingCart, Menu, MessageCircle, Truck, ShieldCheck, Headphones as HeadphonesIcon, Zap, Star, ChevronRight } from "lucide-react";
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

const marqueeText = "Congratulations! FREE DELIVERY applied.";

function TopBar() {
  return (
    <div className="bg-neon-green text-black overflow-hidden py-2 text-sm font-semibold">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="mx-8 flex items-center gap-2">
            <Truck className="h-4 w-4" /> {marqueeText}
          </span>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const links = ["Home", "Smart Watches", "Earbuds", "Headphones", "Support"];
  return (
    <nav className="sticky top-0 z-40 bg-deep-purple/90 backdrop-blur-xl border-b border-border" style={{ backgroundColor: "oklch(0.1 0.05 290 / 0.9)" }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-display text-3xl font-black tracking-tighter">
          Desi<span className="text-accent">Cart</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground/80">
          {links.map((l) => (
            <li key={l}><a href="#" className="hover:text-accent transition-colors">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hover:text-accent transition-colors"><Search className="h-5 w-5" /></button>
          <button aria-label="Cart" className="relative hover:text-accent transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] h-4 w-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <button aria-label="Menu" className="md:hidden"><Menu className="h-6 w-6" /></button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, oklch(0.55 0.25 300 / 0.4), transparent 50%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center md:text-left z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-xs font-semibold uppercase tracking-widest text-accent">
            <Zap className="h-3 w-3" /> New Launch
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9]">
            BOLT PRO
            <span className="block text-3xl md:text-4xl font-light mt-3 text-foreground/70">by DesiCart</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-md mx-auto md:mx-0">
            Pakistan's 1st Flat Edge Design Smartwatch — engineered for the bold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-wider text-sm px-9 py-4 rounded-full hover:scale-105 transition-transform shadow-glow"
            >
              Pre-Order Now
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-neon-green text-neon-green" style={{ color: "var(--neon-green)" }} />)}</div>
              <span>4.9 / 12k reviews</span>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-accent/30 blur-3xl" />
          <img
            src={watchImg}
            alt="BOLT PRO Smartwatch"
            width={1024}
            height={1024}
            className="relative z-10 w-full max-w-lg animate-float drop-shadow-2xl"
          />
        </div>
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
    <section className="border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <span className="font-semibold text-sm">{label}</span>
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
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Shop the Drop</p>
          <h2 className="font-display text-4xl md:text-6xl font-black">Featured Products</h2>
        </div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
          View All <ChevronRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="group bg-card-gradient border border-border rounded-3xl p-6 hover:border-accent/50 transition-all hover:-translate-y-2 duration-300">
            <div className="relative aspect-square rounded-2xl bg-black/40 overflow-hidden mb-6 flex items-center justify-center">
              <span className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-widest font-bold bg-accent text-accent-foreground px-3 py-1 rounded-full">{p.tag}</span>
              <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current text-neon-green" style={{ color: "var(--neon-green)" }} />)}</div>
            </div>
            <p className="text-foreground/60 text-sm mb-5">Premium build. Flagship performance.</p>
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl font-black">{p.price}</span>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors">
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
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-hero-gradient p-12 md:p-20 text-center">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 70% 30%, oklch(0.7 0.18 150 / 0.3), transparent 50%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-4xl md:text-6xl font-black">Join the Movement.</h2>
          <p className="text-foreground/80 text-lg">Be the first to wear the future. Pre-order BOLT PRO today and get free delivery nationwide.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-glow">
            Order on WhatsApp <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <p className="font-display text-2xl font-black mb-3">Desi<span className="text-accent">Cart</span></p>
          <p className="text-sm text-foreground/60">Premium tech. Pakistani roots.</p>
        </div>
        {["Shop", "Support", "Company"].map((h) => (
          <div key={h}>
            <p className="font-bold mb-3 text-sm uppercase tracking-widest">{h}</p>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-accent">Link one</a></li>
              <li><a href="#" className="hover:text-accent">Link two</a></li>
              <li><a href="#" className="hover:text-accent">Link three</a></li>
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-foreground/50">
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
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-whatsapp flex items-center justify-center shadow-2xl animate-pulse-ring hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" />
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
        <FeatureStrip />
        <Products />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
