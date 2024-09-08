import React from 'react';
import Image from 'next/image';
import { EllipsisVertical } from 'lucide-react';
import { cx } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { IProduct } from '@/features/product';

enum LayoutEnum {
  Grid = 'grid',
  List = 'list',
}

interface IProductItem extends IProduct {
  layout: LayoutEnum;
}

function getRandomSkeletonWidth(arr: string[]): string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function ProductItem({ layout, thumbnail, title, price, tags, description }: IProductItem) {
  const isGridMode = layout === LayoutEnum.Grid;
  const isListMode = layout === LayoutEnum.List;

  return (
    <Card
      className={cn(
        isListMode && 'flex items-center p-2 sm:p-3',
        'w-full rounded-xl overflow-hidden transition-transform hover:cursor-pointer hover:scale-[.99] hover:shadow-lg'
      )}
    >
      <CardHeader className="p-0">
        <div
          className={cn(
            isGridMode && 'w-full h-[140px]',
            isListMode && 'w-7 h-7 rounded-lg',
            'relative flex overflow-hidden'
          )}
        >
          <Image src={thumbnail} alt="ps5" fill style={{ objectFit: 'cover', margin: 'auto' }} />
        </div>
      </CardHeader>
      <CardContent className={cn(isGridMode && 'p-4', isListMode && 'flex flex-1 items-center py-0 px-3')}>
        <div
          className={cn(isGridMode && 'mb-3 leading-4', isListMode && 'ml-auto order-4 leading-[14px]', 'text-invert')}
        >
          {price}
        </div>
        <h2
          className={cn(
            isGridMode && 'mb-1 text-lg leading-5 line-clamp-2',
            isListMode && 'min-w-32',
            'leading-5 font-medium text-invert'
          )}
        >
          {title}
        </h2>
        <p className={cn(isListMode && 'hidden sm:flex flex-1 max-w-96')}>
          <span className={cx(isGridMode && 'mb-3 line-clamp-2', isListMode && 'line-clamp-1 px-3', ' text-xs')}>
            {description}
          </span>
        </p>
        {tags.length && (
          <div className={cn(isGridMode && 'flex', isListMode && 'px-3 hidden sm:flex', 'gap-2')}>
            {(tags ?? []).map(({ label }) => (
              <Badge key={label}>{label}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className={cn(isGridMode && 'pt-0.5 px-4 pb-4', isListMode && 'p-0')}>
        <Button size={isGridMode ? 'lg' : 'sm'} className="w-full leading-5 hidden md:flex" variant="outline">
          View Details
        </Button>
        <Button variant="ghost" size="icon" className={cn(isListMode && 'md:hidden', isGridMode && 'hidden')}>
          <EllipsisVertical className="w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}

ProductItem.displayName = 'ProductItem';

export function ProductItemSkeleton({ layout }: { layout: LayoutEnum }) {
  const isGridMode = layout === LayoutEnum.Grid;
  const isListMode = layout === LayoutEnum.List;

  return (
    <Card
      className={cn(
        'w-full rounded-xl overflow-hidden',
        isGridMode && 'md:max-w-[300px]',
        isListMode && 'flex items-center p-3'
      )}
    >
      <Skeleton
        className={cn(isGridMode && 'w-full h-[140px] rounded-b-none rounded-t-xl', isListMode && 'w-7 h-7 rounded-lg')}
      />
      <CardContent className={cn(isGridMode && 'p-4', isListMode && 'flex flex-1 items-center py-0 px-3')}>
        {/* Price */}
        <Skeleton className={cn(isGridMode && 'mb-3', isListMode && 'order-4 ml-auto', 'h-5 w-14')} />
        {/* Title */}
        <Skeleton
          className={cn(
            isGridMode && 'w-32 mb-1',
            isListMode && `w-full mr-1 ${getRandomSkeletonWidth(['max-w-20', 'max-w-24', 'max-w-32', 'max-w-40'])}`,
            'h-5'
          )}
        />
        {/* Description */}
        <Skeleton className={cn(isGridMode && 'mb-3 w-24', isListMode && 'w-full mx-3 hidden sm:flex', 'h-5')} />
        {/* Tags */}
        <div
          className={cn(isListMode && 'px-3 ml-auto hidden sm:flex', isGridMode && 'flex', 'items-center gap-2 h-5')}
        >
          <Skeleton className="h-4 w-8 rounded-lg" />
          <Skeleton className="h-4 w-8 rounded-lg" />
        </div>
      </CardContent>
      <CardFooter className={cn(isGridMode && 'pt-0.5 px-4 pb-4', isListMode && 'ml-auto p-0')}>
        <Skeleton className={cn(isGridMode && 'w-full h-11', isListMode && 'w-9 h-9', 'rounded-lg')} />
      </CardFooter>
    </Card>
  );
}

ProductItemSkeleton.displayName = 'ProductItemSkeleton';
