import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "David O'Sullivan | Freelance WordPress Developer",
  description:
    "I'm David, a freelance WordPress developer based in the UK with over 10 years under my belt. Outside of working with WordPress I like to explore new and emerging tech to build tools that can help me and other developers out.",
  keywords: [
    'WordPress developer',
    'freelance developer',
    'UK WordPress developer',
    'WordPress plugins',
    'web developer',
    'frontend developer',
  ],
  authors: [{ name: "David O'Sullivan" }],
  creator: "David O'Sullivan",
  openGraph: {
    title: "David O'Sullivan | Freelance WordPress Developer",
    description:
      'Freelance WordPress developer based in the UK with over 10 years of experience. Building tools and plugins for developers.',
    url: 'https://osull.io',
    siteName: "David O'Sullivan",
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "David O'Sullivan | Freelance WordPress Developer",
    description:
      'Freelance WordPress developer based in the UK with over 10 years of experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
