import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { MessageCircle, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/products";
import { WHATSAPP_NUMBER } from "@/lib/products";

type CustomerOrderFormProps = {
  product: Product;
};

export function CustomerOrderForm({ product }: CustomerOrderFormProps) {
  const [qty, setQty] = useState(1);
  const [details, setDetails] = useState({ name: "", phone: "", city: "", address: "" });

  const whatsappLink = useMemo(() => {
    const message = [
      `Hi! I want to order ${qty} x ${product.name} from DesiCart.`,
      `Price: ${product.price}`,
      details.name ? `Name: ${details.name}` : "",
      details.phone ? `Phone: ${details.phone}` : "",
      details.city ? `City: ${details.city}` : "",
      details.address ? `Address: ${details.address}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  }, [details, product.name, product.price, qty]);

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submitOrder} className="space-y-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-foreground">Quantity</span>
        <div className="inline-flex items-center border border-border rounded-full">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-2 text-foreground hover:text-accent" aria-label="Decrease">−</button>
          <span className="px-4 font-bold text-foreground min-w-[2ch] text-center">{qty}</span>
          <button type="button" onClick={() => setQty((q) => q + 1)} className="px-4 py-2 text-foreground hover:text-accent" aria-label="Increase">+</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input required aria-label="Customer name" placeholder="Your name" value={details.name} onChange={(e) => setDetails((d) => ({ ...d, name: e.target.value }))} className="h-11 rounded-full border border-input bg-background px-4 text-sm text-foreground outline-none focus:border-accent" />
        <input required aria-label="Customer phone" placeholder="Phone number" value={details.phone} onChange={(e) => setDetails((d) => ({ ...d, phone: e.target.value }))} className="h-11 rounded-full border border-input bg-background px-4 text-sm text-foreground outline-none focus:border-accent" />
        <input required aria-label="Customer city" placeholder="City" value={details.city} onChange={(e) => setDetails((d) => ({ ...d, city: e.target.value }))} className="h-11 rounded-full border border-input bg-background px-4 text-sm text-foreground outline-none focus:border-accent" />
        <input required aria-label="Customer address" placeholder="Delivery address" value={details.address} onChange={(e) => setDetails((d) => ({ ...d, address: e.target.value }))} className="h-11 rounded-full border border-input bg-background px-4 text-sm text-foreground outline-none focus:border-accent" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            // Validate form fields before navigating
            const form = e.currentTarget.closest("form") as HTMLFormElement | null;
            if (form && !form.reportValidity()) {
              e.preventDefault();
            }
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-whatsapp text-primary-foreground font-bold uppercase tracking-wider text-sm px-6 py-4 rounded-full hover:scale-[1.02] transition-transform"
        >
          <MessageCircle className="h-5 w-5" /> Buy Now on WhatsApp
        </a>
        <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground font-bold uppercase tracking-wider text-sm px-6 py-4 rounded-full hover:bg-foreground hover:text-background transition-colors">
          <ShoppingCart className="h-5 w-5" /> Add to Cart
        </button>
      </div>
    </form>
  );
}