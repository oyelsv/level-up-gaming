import React from 'react';

import { ProductItem } from '../ProductItem';

enum LayoutEnum {
  Grid = 'grid',
  List = 'list',
}

interface IProductList {
  layout: LayoutEnum;
}

export function ProductList({ layout }: IProductList) {
  return (
    <>
      <ProductItem layout={layout} />
      <br />
      <ProductItem layout={layout} />
    </>
  );
}

ProductList.displayName = 'ProductList';
