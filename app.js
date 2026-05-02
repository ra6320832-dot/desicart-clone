// Hostinger / Node.js production entry point.
// Builds should be created with: npm run build
// Starts with: npm start
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";

import server from "./dist/server/server.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const CLIENT_DIR = resolve(__dirname, "dist/client");
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
};

function nodeReqToWebRequest(req) {
  const proto = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["x-forwarded-host"] || req.headers.host || `${HOST}:${PORT}`;
  const url = new URL(req.url, `${proto}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) value.forEach((item) => headers.append(key, item));
    else if (value != null) headers.set(key, String(value));
  }

  const init = { method: req.method, headers };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = Readable.toWeb(req);
    init.duplex = "half";
  }
  return new Request(url.toString(), init);
}

async function sendStatic(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") return false;

  const url = new URL(req.url, "http://localhost");
  const rel = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  if (!rel) return false;

  const filePath = join(CLIENT_DIR, rel);
  if (!filePath.startsWith(CLIENT_DIR)) return false;
  if (!existsSync(filePath)) return false;

  const fileStat = await stat(filePath).catch(() => null);
  if (!fileStat || !fileStat.isFile()) return false;

  const type = MIME[extname(filePath).toLowerCase()] || "application/octet-stream";
  const isHashed = /\/assets\//.test(`/${rel}`);
  res.setHeader("Content-Type", type);
  res.setHeader("Cache-Control", isHashed ? "public, max-age=31536000, immutable" : "public, max-age=300");
  res.setHeader("Content-Length", fileStat.size);

  if (req.method === "HEAD") {
    res.end();
    return true;
  }

  res.end(await readFile(filePath));
  return true;
}

const httpServer = createServer(async (req, res) => {
  try {
    if (await sendStatic(req, res)) return;

    const webReq = nodeReqToWebRequest(req);
    const webRes = await server.fetch(webReq);

    res.statusCode = webRes.status;
    webRes.headers.forEach((value, key) => res.setHeader(key, value));

    if (webRes.body) {
      Readable.fromWeb(webRes.body).pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error("[server] request failed:", error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
    }
    res.end("Internal Server Error");
  }
});

httpServer.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});