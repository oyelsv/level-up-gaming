'use client';

import React, { useEffect, useState } from 'react';

import MagnifierIcon from '@/static/icons/svg/magnifier.svg';
import GridIcon from '@/static/icons/svg/grid.svg';
import ListIcon from '@/static/icons/svg/list.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProductList } from '@/components/ProductList';

const products = [
  {
    id: 'r342gver',
    title: 'PS5 Controller',
    price: '70.00$',
    description: 'A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.',
    tags: [
      {
        id: '23efe',
        label: 'Tech',
      },
      {
        id: 'rtegw32',
        label: 'Black',
      },
    ],
  },
];

enum LayoutEnum {
  Grid = 'grid',
  List = 'list',
}

export default function Store() {
  const [layout, setLayout] = useState<LayoutEnum>(LayoutEnum.Grid);

  useEffect(() => {
    const savedLayout = localStorage.getItem('layout') as LayoutEnum;

    if (savedLayout) {
      setLayout(savedLayout);
    }
  }, []);

  const handleLayoutModeChange = (newLayout: LayoutEnum) => {
    localStorage.setItem('layout', newLayout);

    setLayout(newLayout);
  };

  console.log(layout);

  return (
    <>
      <div className="flex items-center gap-4 lg:gap-7 mb-2 md:mb-9">
        <div className="relative flex-1">
          <MagnifierIcon className="h-[18px] w-[18px] absolute left-3.5 top-[50%] translate-y-[-50%]" />
          <Input placeholder="Search..." className="h-12 w-full rounded-xl bg-accent-foreground pl-10" />
        </div>
        <div className="flex items-center justify-center rounded-xl gap-2 p-1.5 border bg-accent-foreground">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-lg"
            onClick={() => handleLayoutModeChange(LayoutEnum.Grid)}
          >
            <GridIcon className="w-[18px] h-[18px] md:mr-2" />
            <span className="hidden md:block">Grid</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-lg"
            onClick={() => handleLayoutModeChange(LayoutEnum.List)}
          >
            <ListIcon className="w-[18px] h-[18px] md:mr-2" />
            <span className="hidden md:block">List</span>
          </Button>
        </div>
      </div>
      <h1 className="text-xl font-semibold pt-1 mb-2 md:mb-7">All Products</h1>
      {/* @ts-ignore */}
      <ProductList layout={layout} products={products} />
    </>
  );
}
