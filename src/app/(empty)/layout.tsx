import React from 'react';

import { ComingSoon } from '@/components/ComingSoon';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <ComingSoon className="py-12" />
    </div>
  );
}
