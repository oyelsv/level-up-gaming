'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, PanelLeft } from 'lucide-react';

import LogoIcon from '@/static/icons/svg/logo.svg';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

import { Nav } from './Nav';

const navigation: { href: string; caption: string }[] = [
  { href: '/', caption: 'store' },
  { href: '/reviews', caption: 'reviews' },
  { href: '/blog', caption: 'blog' },
  { href: '/media', caption: 'media' },
  { href: '/locations', caption: 'locations' },
  { href: '/contact', caption: 'contact' },
];

export function Header() {
  return (
    <header className="flex items-center w-full py-3 px-4 lg:px-8 bg-background shadow">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="md:hidden">
            <PanelLeft className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <Nav navigation={navigation} className="py-6 px-0" />
          <ThemeSwitcher />
        </SheetContent>
      </Sheet>
      <Link href="/" className="ml-auto md:ml-0">
        <LogoIcon className="w-[108px] h-[33px] shrink-0" />
      </Link>
      <Nav isList={false} navigation={navigation} className="hidden md:flex m-auto" />
      <Button variant="outline" size="lg" className="hidden md:flex ml-auto">
        View Cart
      </Button>
      <Button variant="outline" size="icon" className="flex md:hidden ml-auto">
        <ShoppingCart />
      </Button>
    </header>
  );
}

Header.displayName = 'Header';
