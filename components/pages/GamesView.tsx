'use client';

import { Heading, Text, VStack } from '@chakra-ui/react';
import { GameGrid } from '@/components/GameGrid';
import type { Game } from '@/types/game';
import { studioInfo } from '@/data/studio';

export function GamesView({ games }: { games: Game[] }) {
  return (
    <VStack align="stretch" spacing={12} className="page games-page">
      <VStack align="stretch" spacing={3} className="section-header">
        <Text className="section-eyebrow">Portfolio</Text>
        <Heading as="h1" size="xl">
          Our cozy game collection
        </Heading>
        <Text color="var(--text-muted)">
          Discover the painterly worlds, hummable soundtracks, and accessible design that define every {studioInfo.name} release.
        </Text>
      </VStack>
      <GameGrid games={games} />
    </VStack>
  );
}
