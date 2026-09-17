import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist");

const publicPaths = [
  "404.html",
  "_headers",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "apple-touch-icon.png",
  "assets",
  "favicon.ico",
  "index.html",
  "privacy.html",
  "robots.txt",
  "site.webmanifest",
  "sitemap.xml",
  "terms.html",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const relativePath of publicPaths) {
  await cp(join(root, relativePath), join(output, relativePath), {
    recursive: true,
  });
}

console.log(`Cloudflare Pages output: ${output}`);
