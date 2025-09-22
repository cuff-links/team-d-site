'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { FeatureBanner } from '@/components/FeatureBanner';
import { ClearFeatureFlagButton } from '@/components/ClearFeatureFlagButton';
import { useFeatureFlag } from '@/components/FeatureFlagProvider';
import { studioInfo } from '@/data/studio';

export function SiteShell({ children }: { children: ReactNode }) {
  const { isUnlocked } = useFeatureFlag();
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <FeatureBanner />
      {isUnlocked ? (
        <>
          <header className="site-header">
            <div className="site-header__brand">
              <span className="site-logo">TD</span>
              <div>
                <p className="site-title">{studioInfo.name}</p>
                <p className="site-tagline">{studioInfo.tagline}</p>
              </div>
            </div>
            <nav className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/games">Projects</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <p>© 2019-{currentYear} {studioInfo.name}. Handcrafted worlds, shared with love.</p>
            <ClearFeatureFlagButton />
          </footer>
        </>
      ) : null}
    </div>
  );
}
