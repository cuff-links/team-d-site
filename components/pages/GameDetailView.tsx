'use client';

import NextLink from 'next/link';
import Image from 'next/image';
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  List,
  ListItem,
  Tag,
  Text,
  VStack
} from '@chakra-ui/react';
import type { Game } from '@/types/game';

export function GameDetailView({ game }: { game: Game }) {
  const paragraphs = game.content.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean);

  return (
    <VStack align="stretch" spacing={10} className="page game-detail">
      <VStack align="stretch" spacing={3} className="section-header">
        <Text className="section-eyebrow">Game Spotlight</Text>
        <Heading as="h1" size="2xl">
          {game.name}
        </Heading>
        <Text color="var(--text-muted)">{game.tagline}</Text>
        <HStack spacing={3} flexWrap="wrap" className="game-detail__meta">
          <Tag colorScheme="teal" variant="subtle">
            {game.genre}
          </Tag>
          <Tag colorScheme="blue" variant="subtle">
            {game.engine}
          </Tag>
          <Tag colorScheme="gray" variant="subtle">
            Releases {game.releaseDate}
          </Tag>
        </HStack>
      </VStack>

      <VStack align="stretch" spacing={6} className="game-detail__media">
        <AspectRatio ratio={16 / 9} className="modal-body__video">
          <iframe
            title={`${game.name} trailer`}
            src={game.trailer}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
        <Box className="game-detail__gallery">
          {game.gallery.map((src) => (
            <Box key={src} borderRadius="lg" overflow="hidden">
              <Image
                src={src}
                alt={`${game.name} artwork`}
                width={640}
                height={400}
                className="modal-body__image"
              />
            </Box>
          ))}
        </Box>
      </VStack>

      <Divider />

      <Box className="game-detail__copy">
        <Box className="markdown">
          {paragraphs.map((paragraph, index) => (
            <Text as="p" key={index} mb={index === paragraphs.length - 1 ? 0 : 4} color="var(--text-muted)">
              {paragraph}
            </Text>
          ))}
        </Box>
        <Box className="game-detail__features">
          <Heading as="h2" size="lg" mb={3}>
            Key Features
          </Heading>
          <List spacing={2} styleType="disc" pl={5} color="var(--text-muted)">
            {game.features.map((feature) => (
              <ListItem key={feature}>{feature}</ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box className="game-detail__footer">
        <Button as={NextLink} href="/games" variant="outline" colorScheme="blue">
          ← Back to all games
        </Button>
      </Box>
    </VStack>
  );
}
