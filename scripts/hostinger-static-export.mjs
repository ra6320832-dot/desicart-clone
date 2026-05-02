import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist");
const clientDir = resolve(distDir, "client");
const indexFile = resolve(clientDir, "index.html");

if (!existsSync(indexFile)) {
  const server = (await import(resolve(distDir, "server/server.js"))).default;
  const response = await server.fetch(new Request("http://localhost/"));
  await writeFile(indexFile, await response.text());
}

await mkdir(distDir, { recursive: true });
await cp(clientDir, distDir, { recursive: true, force: true });

const indexHtml = await readFile(indexFile, "utf8");
await writeFile(resolve(distDir, "404.html"), indexHtml);

await writeFile(
  resolve(distDir, ".htaccess"),
  `DirectoryIndex index.html
Options -Indexes

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`,
);

console.log("Hostinger static export ready in dist/.");