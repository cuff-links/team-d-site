import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllGames, getGameBySlug } from '@/lib/games';
import { GameDetailView } from '@/components/pages/GameDetailView';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return getAllGames().map((game) => ({ slug: game.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const game = getGameBySlug(params.slug);

  if (!game) {
    return {
      title: 'Game not found'
    };
  }

  return {
    title: `${game.name} · Cozy Game Spotlight`,
    description: game.summary,
    openGraph: {
      title: `${game.name} · Cozy Game Spotlight`,
      description: game.summary,
      images: [game.thumbnail]
    }
  };
}

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    notFound();
  }

  return <GameDetailView game={game} />;
}
