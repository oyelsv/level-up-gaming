import React from 'react';

import { cn } from '@/lib/utils';

interface IComingSoonProps {
  className?: string;
}

export function ComingSoon({ className }: IComingSoonProps) {
  return (
    <div>
      <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
        We are working very hard to make it happen!
      </h1>
    </div>
  );
}

ComingSoon.displayName = 'ComingSoon';
