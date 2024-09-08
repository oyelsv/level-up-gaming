'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface INav {
  className?: string;
  isList?: boolean;
  navigation: { href: string; caption: string }[];
}

export function Nav({ isList = true, className, navigation }: INav) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.replace(/\//g, '') === href;

  return (
    <nav className={cn('px-4', className)}>
      <ul className={cn('flex items-center', isList && 'flex-col items-baseline')}>
        {navigation.map(({ href, caption }) => (
          <li key={caption}>
            <Button
              asChild
              size="sm"
              variant="link"
              className={cn(
                isActive(caption) || href === pathname ? 'font-medium text-shine' : 'font-normal text-foreground',
                'text-lg capitalize'
              )}
            >
              <Link href={href}>{caption}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.displayName = 'Nav';
