'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logoUrl from '@/static/icons/svg/logo.svg?url';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation: { [key: string]: string }[] = [
  { caption: 'store' },
  { caption: 'reviews' },
  { caption: 'blog' },
  { caption: 'media' },
  { caption: 'locations' },
  { caption: 'contact' },
];

export function Header() {
  const pathname = usePathname();
  const isActive = (link: string) => pathname.replace(/\//g, '') === link;

  return (
    <header className="flex items-center w-full py-3 px-8 bg-header">
      <Image src={logoUrl} alt="logo" priority />
      <nav className="m-auto px-4">
        <ul className="flex items-center">
          {navigation.map(({ caption }) => (
            <li key={caption}>
              <Button
                asChild
                variant="link"
                className={cn(
                  'text-lg capitalize',
                  isActive(caption) ? 'font-medium text-primary-foreground' : 'font-normal'
                )}
              >
                <Link href={`/${caption}`}>{caption}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <Button variant="outline" size="lg">
        View Cart
      </Button>
    </header>
  );
}

Header.displayName = 'Header';
