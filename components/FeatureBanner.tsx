'use client';

import { Alert, AlertDescription, AlertIcon, Box } from '@chakra-ui/react';
import { useFeatureFlag } from '@/components/FeatureFlagProvider';

export function FeatureBanner() {
  const { isUnlocked } = useFeatureFlag();

  if (isUnlocked) {
    return null;
  }

  return (
    <Box className="feature-banner">
      <Alert status="info" variant="left-accent" borderRadius="xl">
        <AlertIcon />
        <AlertDescription>This domain is for sale for $1999.</AlertDescription>
      </Alert>
    </Box>
  );
}
