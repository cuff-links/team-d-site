import { Metadata } from 'next';
import { HomeView } from '@/components/pages/HomeView';
import { getAllGames } from '@/lib/games';
import { studioInfo } from '@/data/studio';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Cozy Game Worlds',
  description:
    `${studioInfo.name} builds cozy, family-friendly games filled with painterly art, hummable soundtracks, and gentle pacing.`
};

export default function HomePage() {
  const games = getAllGames();
  return <HomeView games={games} />;
}
