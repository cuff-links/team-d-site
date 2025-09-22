'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  fonts: {
    heading: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  styles: {
    global: {
      'html, body': {
        background: 'var(--background)',
        color: 'var(--text-color)'
      }
    }
  }
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
