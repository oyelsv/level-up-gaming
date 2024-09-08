import React from 'react';

import { ThemeProvider } from '@/components/ThemeProvider';
import { StoreProvider } from '@/lib/store';
import { MockProvider } from '@/lib/msw/MockProvider';
import { Header } from '@/components/Header';
import { ibmPlexSans } from '@/lib/fonts';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Level up gaming',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${ibmPlexSans.className} bg-cover antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <MockProvider>
              <div className="w-full h-screen flex flex-col">
                <Header />
                <div className="px-4 md:px-12">
                  <div className="w-full max-w-[956px] my-9 mx-auto">{children}</div>
                </div>
              </div>
            </MockProvider>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
