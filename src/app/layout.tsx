import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description:
    'Welcome to my portfolio. Explore projects showcasing modern web development with React, TypeScript, and Next.js.',
  keywords: [
    'portfolio',
    'developer',
    'full stack',
    'react',
    'typescript',
    'next.js',
    'web development',
  ],
  openGraph: {
    title: 'Portfolio | Full Stack Developer',
    description: 'Explore my portfolio projects and expertise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-950 text-gray-100 antialiased">
        {/* Navigation bar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
