import './globals.css';

import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import { FeatureFlagProvider } from '@/components/FeatureFlagProvider';
import { SiteShell } from '@/components/SiteShell';
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
  return (
    <html lang="en">
      <body>
        <Providers>
          <FeatureFlagProvider>
            <SiteShell>{children}</SiteShell>
          </FeatureFlagProvider>
        </Providers>
      </body>
    </html>
  );
}
