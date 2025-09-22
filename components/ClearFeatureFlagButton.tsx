'use client';

import { Button } from '@chakra-ui/react';
import { useFeatureFlag } from '@/components/FeatureFlagProvider';
import { usePathname, useRouter } from 'next/navigation';

export function ClearFeatureFlagButton() {
  const { clearFlag } = useFeatureFlag();
  const router = useRouter();
  const pathname = usePathname();

  const handleReset = () => {
    clearFlag();
    const targetPath = pathname || '/';
    router.replace(targetPath);
    router.refresh();
  };

  return (
    <Button size="sm" variant="ghost" colorScheme="blue" onClick={handleReset}>
      Reset feature access
    </Button>
  );
}
