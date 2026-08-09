import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true },
);

export function resolveImage(path: string): ImageMetadata {
  const key = path.replace('~/assets/', '/src/assets/');
  const exactImage = modules[key]?.default;
  if (exactImage) return exactImage;

  const basename = key.replace(/\.[^.]+$/, '');
  const fallbackKey = Object.keys(modules).find((candidate) => candidate.replace(/\.[^.]+$/, '') === basename);
  const image = fallbackKey ? modules[fallbackKey]?.default : undefined;

  if (!image) {
    throw new Error(`Slika nije pronađena: ${path}`);
  }

  return image;
}
