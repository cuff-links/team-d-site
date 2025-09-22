'use client';

import NextLink from 'next/link';
import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Tag, Text, VStack } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import { FaYoutube, FaInstagram, FaDiscord, FaLink } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { studioInfo } from '@/data/studio';

export function ContactView() {
  const platformIcons: Record<string, IconType> = {
    YouTube: FaYoutube,
    'X (Twitter)': FaXTwitter,
    Instagram: FaInstagram,
    Discord: FaDiscord
  };

  return (
    <VStack align="stretch" spacing={12} className="page contact-page">
      <VStack align="stretch" spacing={3} className="section-header">
        <Text className="section-eyebrow">Say hello</Text>
        <Heading as="h1" size="xl">
          Let&apos;s build something beautiful together
        </Heading>
        <Text color="var(--text-muted)">
          Whether you&apos;re a fellow creator, content partner, or player with feedback, we would love to hear from you.
        </Text>
      </VStack>

      <Box className="contact-grid">
        <Card className="contact-card" shadow="xl" borderRadius="xl">
          <CardHeader>
            <VStack align="stretch" spacing={1}>
              <Heading as="h2" size="md">
                Email
              </Heading>
              <Text color="var(--text-muted)">Direct line to the team</Text>
            </VStack>
          </CardHeader>
          <CardBody>
            <Button as={NextLink} href={`mailto:${studioInfo.contactEmail}`} colorScheme="teal">
              {studioInfo.contactEmail}
            </Button>
          </CardBody>
        </Card>

        <Card className="contact-card" shadow="xl" borderRadius="xl">
          <CardHeader>
            <VStack align="stretch" spacing={1}>
              <Heading as="h2" size="md">
                Socials
              </Heading>
              <Text color="var(--text-muted)">Join our cozy communities</Text>
            </VStack>
          </CardHeader>
          <CardBody className="contact-card__links">
            <VStack align="stretch" spacing={3}>
              {studioInfo.socials.map((social) => {
                const PlatformIcon = platformIcons[social.platform] ?? FaLink;

                return (
                  <Button
                    key={social.platform}
                    as={NextLink}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    colorScheme="blue"
                    justifyContent="space-between"
                    leftIcon={<Icon as={PlatformIcon} boxSize={5} />}
                    aria-label={`${social.platform} - ${social.handle}`}
                  >
                    <Tag colorScheme="teal" variant="solid">
                      {social.handle}
                    </Tag>
                  </Button>
                );
              })}
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </VStack>
  );
}
