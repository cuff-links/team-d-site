'use client';

import NextLink from 'next/link';
import { Box, Button, Card, CardBody, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { GameThumbnail } from '@/components/GameThumbnail';
import type { Game } from '@/types/game';
import { studioInfo } from '@/data/studio';

export function HomeView({ games }: { games: Game[] }) {
  return (
    <VStack align="stretch" spacing={16} className="page home-page">
      <VStack align="stretch" spacing={6} className="hero">
        <Text className="hero__eyebrow" textTransform="uppercase" letterSpacing="widest" fontWeight="semibold">
          Welcome to {studioInfo.name}
        </Text>
        <Heading as="h1" size="2xl">
          Cozy, family-friendly games that shine with art and music.
        </Heading>
        <Text className="hero__copy" color="var(--text-muted)">
          We design story-rich adventures and thoughtful sims that invite every player to slow down, breathe deep, and share playful moments together.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} className="hero__actions">
          <Button as={NextLink} href="#portfolio" colorScheme="teal" size="lg">
            Explore Our Games
          </Button>
          <Button as={NextLink} href="/contact" variant="outline" colorScheme="blue" size="lg">
            Connect With Us
          </Button>
        </Stack>
        <Card className="hero__highlight" shadow="2xl" borderRadius="xl">
          <CardBody>
            <Text color="var(--text-muted)">
              Our titles blend painterly visuals, layered soundtracks, and cozy mechanics to craft memories that feel like warm blankets and fresh pastries.
            </Text>
          </CardBody>
        </Card>
      </VStack>

      <VStack align="stretch" spacing={8} id="portfolio" className="game-section">
        <VStack align="stretch" spacing={3} className="section-header">
          <Text className="section-eyebrow">Featured worlds</Text>
          <Heading as="h2" size="xl">
            Peek at the cozy adventures in our pipeline
          </Heading>
          <Text color="var(--text-muted)">
            Each project begins with a mood board of paintings and melodies. Tap a game to step into the full portfolio and explore its features.
          </Text>
        </VStack>
        <Box className="game-thumb-grid">
          {games.map((game) => (
            <GameThumbnail key={game.slug} game={game} />
          ))}
        </Box>
        <Box className="game-section__cta">
          <Button as={NextLink} href="/games" colorScheme="teal" size="lg">
            View all projects
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
}
