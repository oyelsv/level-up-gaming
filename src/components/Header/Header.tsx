'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LogoIcon from '@/static/icons/svg/logo.svg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation: { [key: string]: string }[] = [
  { href: '/', caption: 'store' },
  { href: '/reviews', caption: 'reviews' },
  { href: '/blog', caption: 'blog' },
  { href: '/media', caption: 'media' },
  { href: '/locations', caption: 'locations' },
  { href: '/contact', caption: 'contact' },
];

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.replace(/\//g, '') === href;

  return (
    <header className="flex items-center w-full py-3 px-8 bg-header">
      <LogoIcon className="w-[108px] h-[33px] shrink-0" />
      <nav className="m-auto px-4">
        <ul className="flex items-center">
          {navigation.map(({ href, caption }) => (
            <li key={caption}>
              <Button
                asChild
                variant="link"
                className={cn(
                  'text-lg capitalize',
                  isActive(caption) ? 'font-medium text-primary-foreground' : 'font-normal'
                )}
              >
                <Link href={href}>{caption}</Link>
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
