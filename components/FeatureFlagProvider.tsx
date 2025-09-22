'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const FLAG_KEY = 'teamdstudioFlag';

type FeatureFlagContextValue = {
  isUnlocked: boolean;
  clearFlag: () => void;
};

const FeatureFlagContext = createContext<FeatureFlagContextValue | undefined>(undefined);

export function FeatureFlagProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const [isUnlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const stored = window.sessionStorage.getItem(FLAG_KEY);
    if (stored === 'true') {
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (!searchParams) {
      return;
    }
    const flagParam = searchParams.get('teamdstudio');
    if (!flagParam || typeof window === 'undefined') {
      return;
    }

    const value = flagParam.toLowerCase();
    if (value === 'true') {
      window.sessionStorage.setItem(FLAG_KEY, 'true');
      setUnlocked(true);
    } else if (value === 'false') {
      window.sessionStorage.removeItem(FLAG_KEY);
      setUnlocked(false);
    }
  }, [searchParams]);

  const clearFlag = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem(FLAG_KEY);
    }
    setUnlocked(false);
  };

  const value = useMemo(
    () => ({
      isUnlocked,
      clearFlag
    }),
    [isUnlocked]
  );

  return <FeatureFlagContext.Provider value={value}>{children}</FeatureFlagContext.Provider>;
}

export function useFeatureFlag() {
  const context = useContext(FeatureFlagContext);
  if (!context) {
    throw new Error('useFeatureFlag must be used within a FeatureFlagProvider');
  }
  return context;
}
