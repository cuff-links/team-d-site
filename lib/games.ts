import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Game } from '@/types/game';

const gamesDirectory = path.join(process.cwd(), 'content', 'games');

function parseGameFile(fileName: string): Game {
  const fullPath = path.join(gamesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: data.slug,
    name: data.name,
    tagline: data.tagline,
    releaseDate: data.releaseDate,
    genre: data.genre,
    engine: data.engine,
    summary: data.summary,
    thumbnail: data.thumbnail,
    trailer: data.trailer,
    features: data.features ?? [],
    gallery: data.gallery ?? [],
    order: typeof data.order === 'number' ? data.order : Number.MAX_SAFE_INTEGER,
    content: content.trim()
  } satisfies Game;
}

export function getAllGames(): Game[] {
  if (!fs.existsSync(gamesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(gamesDirectory).filter((file) => file.endsWith('.md'));

  return fileNames
    .map((fileName) => parseGameFile(fileName))
    .sort((a, b) => a.order - b.order);
}

export function getGameBySlug(slug: string): Game | undefined {
  const fileName = `${slug}.md`;
  if (!fs.existsSync(path.join(gamesDirectory, fileName))) {
    return undefined;
  }

  return parseGameFile(fileName);
}
