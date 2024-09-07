import React from 'react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface ITag {
  label: string;
}

export interface IProduct {
  price: string;
  title: string;
  description: string;
  tags: ITag[];
}

enum LayoutEnum {
  Grid = 'grid',
  List = 'list',
}

interface IProductItem {
  layout: LayoutEnum;
}

export function ProductItem({ layout }: IProductItem) {
  const isGridMode = layout === LayoutEnum.Grid;
  const isListMode = layout === LayoutEnum.List;

  return (
    <Card
      className={cn(
        'w-full bg-zinc-900 rounded-xl overflow-hidden',
        isGridMode && 'md:max-w-[300px] border-0',
        isListMode && 'flex items-center p-3'
      )}
    >
      <CardHeader className="p-0">
        <div className={cn(isGridMode && 'w-full h-[140px]', isListMode && 'w-7 h-7')}>
          <Skeleton className={cn('w-full h-full rounded-lg', isGridMode && 'rounded-b-none rounded-t-xl')} />
        </div>
      </CardHeader>
      <CardContent className={cn(isGridMode && 'p-4', isListMode && 'flex items-center py-0 px-3')}>
        <div className={cn(isGridMode && 'mb-3 leading-4', isListMode && 'order-4')}>$70.00</div>
        <h2
          className={cn(
            isGridMode && 'mb-1 text-lg leading-5 line-clamp-2',
            'leading-5 font-medium w-full max-w-[25%]'
          )}
        >
          PS5 Controller
        </h2>
        <p
          className={cn(isGridMode && 'mb-3 line-clamp-2', isListMode && 'line-clamp-1 px-3', 'text-xs text-zinc-400')}
        >
          A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.
        </p>
        <div className={cn(isListMode && 'px-3', 'flex gap-2')}>
          <Badge variant="secondary">Tech</Badge>
          <Badge variant="secondary">Black</Badge>
        </div>
      </CardContent>
      <CardFooter className={cn(isGridMode && 'pt-0.5 px-4 pb-4', isListMode && 'p-0')}>
        <Button
          size={isGridMode ? 'lg' : 'sm'}
          className="w-full border border-white text-white leading-5 hover:bg-white hover:text-zinc-900"
          variant="ghost"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

ProductItem.displayName = 'ProductItem';
