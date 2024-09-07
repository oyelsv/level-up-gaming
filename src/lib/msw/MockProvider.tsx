'use client';

import React, { ReactNode, useEffect, useState } from 'react';

export function MockProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [mockingEnabled, enableMocking] = useState<boolean>(false);

  useEffect(() => {
    /* @fixme: add is development condition */
    async function enableApiMocking() {
      const { worker } = await import('@/lib/msw/browser');
      await worker.start();

      enableMocking(true);
    }

    enableApiMocking();
  }, []);

  if (!mockingEnabled) {
    return null;
  }

  return <>{children}</>;
}
