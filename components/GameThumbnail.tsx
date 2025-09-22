'use client';

import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import type { Game } from '@/types/game';

export function GameThumbnail({ game }: { game: Game }) {
  return (
    <Box as={NextLink} href={`/games#${game.slug}`} className="game-thumb">
      <Box className="game-thumb__media">
        <Image
          src={game.thumbnail}
          alt={`${game.name} key art`}
          width={320}
          height={240}
          className="game-thumb__image"
        />
      </Box>
      <Box className="game-thumb__label">
        <Text as="h3" fontSize="lg" fontWeight="semibold">
          {game.name}
        </Text>
        <Text color="var(--text-muted)">{game.genre}</Text>
      </Box>
    </Box>
  );
}
