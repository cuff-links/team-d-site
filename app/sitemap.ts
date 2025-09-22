import { MetadataRoute } from 'next';
import { getAllGames } from '@/lib/games';

const baseUrl = 'https://teamdstudio.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/games', '/contact'];

  const gamePages = getAllGames().map((game) => `/games/${game.slug}`);

  return [...staticPages, ...gamePages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8
  }));
}
