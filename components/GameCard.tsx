'use client';

import NextLink from 'next/link';
import Image from 'next/image';
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react';
import type { Game } from '@/types/game';
import { KeyboardEvent, MouseEvent, useMemo } from 'react';

export default function GameCard({ game }: { game: Game }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const releaseCopy = useMemo(() => `Releases ${game.releaseDate}`, [game.releaseDate]);
  const paragraphs = useMemo(
    () => game.content.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean),
    [game.content]
  );

  const handleCardClick = () => {
    onOpen();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen();
    }
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onOpen();
  };

  return (
    <>
      <Card
        className="game-card"
        onClick={handleCardClick}
        cursor="pointer"
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        _hover={{ transform: 'translateY(-4px)' }}
        transition="transform 0.2s ease"
        h="100%"
        display="flex"
        flexDirection="column"
      >
        <CardBody className="game-card__body" display="flex" flexDirection="column" gap={5} flex="1">
          <Box className="game-card__media">
            <Image
              src={game.thumbnail}
              alt={`${game.name} key art`}
              width={420}
              height={300}
              className="game-card__image"
            />
          </Box>
          <VStack align="stretch" spacing={3} className="game-card__content" flex="1">
            <Box className="game-card__heading">
              <Text as="h3" fontSize="xl" fontWeight="bold">
                {game.name}
              </Text>
              <Text color="var(--text-muted)">{game.tagline}</Text>
            </Box>
            <HStack spacing={2} wrap="wrap" className="game-card__meta">
              <Tag colorScheme="teal" variant="subtle">
                {game.genre}
              </Tag>
              <Tag colorScheme="blue" variant="subtle">
                {game.engine}
              </Tag>
            </HStack>
            <Text className="game-card__summary" color="var(--text-muted)" noOfLines={3}>
              {game.summary}
            </Text>
          </VStack>
        </CardBody>
        <CardFooter className="game-card__footer" mt="auto">
          <Text fontWeight="semibold" color="var(--text-muted)">
            {releaseCopy}
          </Text>
          <Button colorScheme="blue" variant="outline" onClick={handleButtonClick}>
            View Details
          </Button>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" scrollBehavior="inside" isCentered>
        <ModalOverlay backdropFilter="blur(8px)" />
        <ModalContent>
          <ModalHeader className="modal-title">
            <Box>
              <Text as="h2" fontSize="2xl" fontWeight="bold">
                {game.name}
              </Text>
              <Text color="var(--text-muted)">{releaseCopy}</Text>
            </Box>
          </ModalHeader>
          <ModalBody className="modal-body">
            <VStack align="stretch" spacing={6} className="modal-body__gallery">
              <AspectRatio ratio={16 / 9} className="modal-body__video">
                <iframe
                  title={`${game.name} trailer`}
                  src={game.trailer}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
              <Flex gap={3} flexWrap="wrap" className="modal-body__images">
                {game.gallery.map((src) => (
                  <Box key={src} flex="1 1 140px" borderRadius="lg" overflow="hidden">
                    <Image
                      src={src}
                      alt={`${game.name} concept art`}
                      width={320}
                      height={200}
                      className="modal-body__image"
                    />
                  </Box>
                ))}
              </Flex>
            </VStack>
            <Divider />
            <Box className="modal-body__description markdown">
              {paragraphs.map((paragraph, index) => (
                <Text as="p" key={index} mb={index === paragraphs.length - 1 ? 0 : 4}>
                  {paragraph}
                </Text>
              ))}
            </Box>
            <Divider />
            <Box className="modal-body__features">
              <Text as="h3" fontSize="xl" fontWeight="bold" mb={3}>
                Key Features
              </Text>
              <List spacing={2} styleType="disc" pl={5} color="var(--text-muted)">
                {game.features.map((feature) => (
                  <ListItem key={feature}>{feature}</ListItem>
                ))}
              </List>
            </Box>
          </ModalBody>
              <ModalFooter className="modal-footer" gap={2}>
                <Button
                  as={NextLink}
                  href={`/games/${game.slug}`}
                  colorScheme="blue"
                  variant="outline"
                  onClick={onClose}
                >
                  Open full page
                </Button>
                <Button colorScheme="teal" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
