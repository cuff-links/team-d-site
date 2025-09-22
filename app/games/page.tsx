import { Metadata } from 'next';
import { GamesView } from '@/components/pages/GamesView';
import { getAllGames } from '@/lib/games';
import { studioInfo } from '@/data/studio';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Projects',
  description: `${studioInfo.name} portfolio featuring cozy, family-friendly games in development and release.`
};

export default function GamesPage() {
  const games = getAllGames();
  return <GamesView games={games} />;
}
