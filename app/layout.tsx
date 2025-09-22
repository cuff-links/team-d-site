import './globals.css';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Providers } from '@/components/Providers';
import { FeatureFlagProvider } from '@/components/FeatureFlagProvider';
import { FeatureBanner } from '@/components/FeatureBanner';
import { ClearFeatureFlagButton } from '@/components/ClearFeatureFlagButton';
import { studioInfo } from '@/data/studio';

export const metadata: Metadata = {
  metadataBase: new URL('https://teamdstudio.example.com'),
  title: {
    default: `${studioInfo.name} · Cozy Game Studio`,
    template: `%s · ${studioInfo.name}`
  },
  description:
    `${studioInfo.name} creates cozy, family-friendly games with lush art, hummable soundtracks, and inclusive design. Explore our projects and say hello.`,
  keywords: [
    'cozy games',
    'family friendly video games',
    'indie game studio',
    'Team D Studio',
    'wholesome games'
  ],
  openGraph: {
    title: `${studioInfo.name} · Cozy Game Studio`,
    description:
      `${studioInfo.name} crafts heartwarming experiences that invite families to create memories together. Discover our portfolio and upcoming releases.`,
    url: 'https://teamdstudio.example.com',
    siteName: studioInfo.name,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${studioInfo.name} · Cozy Game Studio`,
    description:
      'Cozy, family-friendly video games with gorgeous art, hummable tunes, and accessibility at the core.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <Providers>
          <FeatureFlagProvider>
            <div className="site-shell">
              <FeatureBanner />
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
            </div>
          </FeatureFlagProvider>
        </Providers>
      </body>
    </html>
  );
}
