'use client';

import NextLink from 'next/link';
import { Box, Button, Card, CardBody, CardHeader, Heading, Tag, Text, VStack } from '@chakra-ui/react';
import { studioInfo } from '@/data/studio';

export function ContactView() {
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
              {studioInfo.socials.map((social) => (
                <Button
                  key={social.platform}
                  as={NextLink}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  colorScheme="blue"
                  justifyContent="space-between"
                >
                  <Text fontWeight="semibold">{social.platform}</Text>
                  <Tag colorScheme="teal" variant="solid">
                    {social.handle}
                  </Tag>
                </Button>
              ))}
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </VStack>
  );
}
