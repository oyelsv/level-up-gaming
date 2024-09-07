'use client';

import React from 'react';

import MagnifierIcon from '@/static/icons/svg/magnifier.svg';
import GridIcon from '@/static/icons/svg/grid.svg';
import ListIcon from '@/static/icons/svg/list.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProductList } from '@/components/ProductList';

export default function Store() {
  return (
    <div>
      <div className="flex items-center gap-4 lg:gap-7 mb-2 md:mb-9">
        <div className="relative flex-1">
          <MagnifierIcon className="h-[18px] w-[18px] absolute left-3.5 top-[50%] translate-y-[-50%]" />
          <Input placeholder="Search..." className="h-12 w-full rounded-xl bg-accent-foreground pl-10" />
        </div>
        <div className="flex items-center justify-center rounded-xl gap-2 p-1.5 border bg-accent-foreground">
          <Button variant="ghost" size="sm" className="rounded-lg">
            <GridIcon className="w-[18px] h-[18px] md:mr-2" />
            <span className="hidden md:block">Grid</span>
          </Button>
          <Button variant="ghost" size="sm" className="rounded-lg">
            <ListIcon className="w-[18px] h-[18px] md:mr-2" />
            <span className="hidden md:block">List</span>
          </Button>
        </div>
      </div>
      <h1 className="text-xl font-semibold pt-1 mb-2 md:mb-7">All Products</h1>
      <ProductList />
    </div>
  );
}
