import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const contentRoot = path.join(root, 'src', 'content');

async function markdownFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(target);
    if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) return [target];
    return [];
  }));
  return nested.flat();
}

function dimensions(assetPath) {
  if (assetPath.includes('pozadina')) return [1600, 720];
  if (assetPath.includes('/hero/')) return [1600, 1100];
  if (assetPath.endsWith('/hero.jpg')) return [1600, 900];
  if (assetPath.includes('galerija')) return [1200, 900];
  return [1200, 900];
}

function escapeXml(value) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;',
  })[character]);
}

function artwork(label, width, height) {
  const shortLabel = escapeXml(label.replace('~/assets/', '').replace('.jpg', ''));
  return Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#12100e"/><stop offset=".55" stop-color="#2b211b"/><stop offset="1" stop-color="#7b281c"/></linearGradient>
      <radialGradient id="sun"><stop stop-color="#d4472a" stop-opacity=".95"/><stop offset="1" stop-color="#c1361f" stop-opacity="0"/></radialGradient>
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".55" numOctaves="2"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .09 0"/></filter>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)"/>
    <circle cx="${Math.round(width * .76)}" cy="${Math.round(height * .28)}" r="${Math.round(Math.min(width, height) * .25)}" fill="url(#sun)"/>
    <path d="M0 ${Math.round(height * .72)} Q ${Math.round(width * .22)} ${Math.round(height * .42)} ${Math.round(width * .45)} ${Math.round(height * .72)} T ${width} ${Math.round(height * .56)} V ${height} H0Z" fill="#0d0c0a" fill-opacity=".72"/>
    <path d="M0 ${Math.round(height * .79)} Q ${Math.round(width * .27)} ${Math.round(height * .58)} ${Math.round(width * .55)} ${Math.round(height * .82)} T ${width} ${Math.round(height * .69)}" fill="none" stroke="#c8a24b" stroke-opacity=".44" stroke-width="2"/>
    <rect width="${width}" height="${height}" filter="url(#grain)" opacity=".8"/>
    <text x="${Math.round(width * .06)}" y="${Math.round(height * .9)}" fill="#f3eee6" fill-opacity=".78" font-family="Arial, sans-serif" font-size="${Math.max(22, Math.round(width * .022))}" letter-spacing="3">${shortLabel}</text>
  </svg>`);
}

const files = await markdownFiles(contentRoot);
const imagePaths = new Set();
for (const file of files) {
  const source = await fs.readFile(file, 'utf8');
  for (const match of source.matchAll(/~\/assets\/[\w./-]+\.jpg/g)) imagePaths.add(match[0]);
}

for (const assetPath of imagePaths) {
  const relative = assetPath.replace('~/assets/', 'src/assets/');
  const target = path.join(root, relative);
  const [width, height] = dimensions(assetPath);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await sharp(artwork(assetPath, width, height)).jpeg({ quality: 68, progressive: true }).toFile(target);
}

for (const name of ['default', 'homepage']) {
  const target = path.join(root, 'public', 'og', `${name}.jpg`);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await sharp(artwork(`Kina sa Ksenijom · ${name}`, 1200, 630)).jpeg({ quality: 72, progressive: true }).toFile(target);
}

console.log(`Generisano ${imagePaths.size} asset placeholdera i 2 OG slike.`);
