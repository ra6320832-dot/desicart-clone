// Production Vite config for self-hosted Node.js (e.g. Hostinger VPS).
// Disables the Cloudflare Workers plugin so TanStack Start outputs a Node SSR server.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "node-server",
  },
});
