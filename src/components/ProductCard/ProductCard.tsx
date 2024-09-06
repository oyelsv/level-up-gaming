import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export function ProductCard() {
  return (
    <Card className="w-full md:max-w-[300px] bg-zinc-900 text-white rounded-xl border-0">
      <CardHeader className="p-0">
        <div className="relative h-[140px] w-full">
          <Skeleton className="h-full w-full rounded-b-none rounded-t-lg" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-3 leading-4">$70.00</div>
        <h2 className="mb-1 text-lg font-meduim leading-5 line-clamp-2">PS5 Controller</h2>
        <p className="mb-3 text-xs text-zinc-400 line-clamp-3">
          A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.
        </p>
        <div className="flex gap-2">
          <Badge variant="secondary">Tech</Badge>
          <Badge variant="secondary">Black</Badge>
        </div>
      </CardContent>
      <CardFooter className="pt-0.5 px-4 pb-4">
        <Button
          size="lg"
          className="w-full border border-white text-white leading-5 hover:bg-white hover:text-zinc-900"
          variant="ghost"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

ProductCard.displayName = 'ProductCard';
