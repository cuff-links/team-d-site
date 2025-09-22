'use client';

import { SimpleGrid, Box } from '@chakra-ui/react';
import type { Game } from '@/types/game';
import GameCard from './GameCard';

export function GameGrid({ games }: { games: Game[] }) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, xl: 3 }}
      spacing={{ base: 6, lg: 7 }}
      className="game-grid"
    >
      {games.map((game) => (
        <Box key={game.slug} id={game.slug} className="game-grid__item">
          <GameCard game={game} />
        </Box>
      ))}
    </SimpleGrid>
  );
}
