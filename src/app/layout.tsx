import React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';

import { Header } from '@/components/Header';

import type { Metadata } from 'next';

import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
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
        <div className="w-full h-screen flex flex-col">
          <Header />
          <div className="w-full max-w-[956px] my-9 mx-auto px-4 md:px-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
