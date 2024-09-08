import React from 'react';

import { IProduct } from '@/features/product/models';
import { cn } from '@/lib/utils';

import { ProductItem, ProductItemSkeleton } from '../ProductItem';

enum LayoutEnum {
  Grid = 'grid',
  List = 'list',
}

interface IProductList {
  isLoading?: boolean;
  products: IProduct[];
  layout: LayoutEnum;
}

export function ProductList({ layout, products, isLoading }: IProductList) {
  const isGridMode = layout === LayoutEnum.Grid;
  const isListMode = layout === LayoutEnum.List;

  return (
    <div
      className={cn(
        isGridMode && 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7',
        isListMode && 'gap-y-4',
        'grid'
      )}
    >
      {!isLoading && products.map(({ id, ...rest }) => <ProductItem key={id} id={id} layout={layout} {...rest} />)}
      {/* eslint-disable-next-line react/no-array-index-key */}
      {isLoading && [...new Array(6)].map((_, i) => <ProductItemSkeleton key={i} layout={layout} />)}
    </div>
  );
}

ProductList.displayName = 'ProductList';
