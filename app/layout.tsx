import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import './globals.css';
import Providers from './providers';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ameeq.dev';
const description =
  'Frontend Developer with 2+ years building enterprise-scale React, Next.js, and TypeScript applications. Also experienced in React Native, Expo, and Flutter. Based in Dubai, UAE.';

export const metadata: Metadata = {
  title: {
    default: 'Ameeq K.V — Software Developer',
    template: '%s | Ameeq K.V',
  },
  description,
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'Flutter',
    'Material UI',
    'Dubai',
    'UAE',
    'Software Developer',
  ],
  authors: [{ name: 'Ameeq K.V', url: 'https://github.com/Ameeq3' }],
  creator: 'Ameeq K.V',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Ameeq K.V',
    title: 'Ameeq K.V — Frontend Software Developer',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ameeq K.V — Frontend Software Developer',
    description,
    creator: '@ameeq_kv',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
