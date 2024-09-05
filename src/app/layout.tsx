import React from 'react';
// import localFont from 'next/font/local';
import { IBM_Plex_Sans } from 'next/font/google';

import { Header } from '@/components/Header';

import type { Metadata } from 'next';

import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Level up gaming',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} antialiased`}>
        <div className="w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
