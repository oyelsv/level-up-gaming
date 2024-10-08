'use client';

import React, { useEffect, useState } from 'react';
import { GhostIcon } from 'lucide-react';

import MagnifierIcon from '@/static/icons/svg/magnifier.svg';
import GridIcon from '@/static/icons/svg/grid.svg';
import ListIcon from '@/static/icons/svg/list.svg';
import { Input } from '@/components/ui/input';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { ProductList } from '@/components/ProductList';
import { useGetProductsQuery } from '@/features/product/hooks';
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch';

enum LayoutEnum {
  Grid = 'grid',
  List = 'list',
}

export default function Store() {
  const [layout, setLayout] = useState<LayoutEnum>(LayoutEnum.Grid);
  const { searchValue, debouncedSearchValue, setSearchValue } = useDebouncedSearch();
  const { data, isLoading, isFetching } = useGetProductsQuery({
    searchQuery: debouncedSearchValue,
  });

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  return (
    <>
      <ThemeSwitcher className="hidden lg:flex fixed left-2 bottom-2" />
      <div className="flex items-center gap-2 lg:gap-7 mb-2 md:mb-9">
        <div className="relative flex-1">
          <MagnifierIcon className="h-[18px] w-[18px] absolute left-3.5 top-[50%] translate-y-[-50%]" />
          <Input
            placeholder="Search..."
            className="h-12 w-full rounded-xl pl-10"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <div className="flex items-center justify-center rounded-xl gap-2 p-1.5 border bg-background">
          <Button
            variant={layout === LayoutEnum.Grid ? 'default' : 'ghost'}
            size="sm"
            className="rounded-lg"
            onClick={() => handleLayoutModeChange(LayoutEnum.Grid)}
          >
            <GridIcon className="w-[18px] h-[18px] md:mr-2" />
            <span className="hidden md:block">Grid</span>
          </Button>
          <Button
            variant={layout === LayoutEnum.List ? 'default' : 'ghost'}
            size="sm"
            className="rounded-lg"
            onClick={() => handleLayoutModeChange(LayoutEnum.List)}
          >
            <ListIcon className="w-[18px] h-[18px] md:mr-2" />
            <span className="hidden md:block">List</span>
          </Button>
        </div>
      </div>
      <h1 className="text-[22px] leading-5 font-semibold text-invert pt-1 my-4 md:mb-7 md:my-0">All Products</h1>
      {!data?.items.length && !isFetching && !isLoading ? (
        <div className="flex flex-col items-center justify-center my-12">
          <GhostIcon className="text-snow w-48 h-48" />
          <h3 className="text-5xl font-semibold text-snow my-4">No results :(</h3>
        </div>
      ) : (
        <ProductList layout={layout} isLoading={isLoading || isFetching} products={data?.items ?? []} />
      )}
    </>
  );
}
