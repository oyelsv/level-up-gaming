import { http, HttpResponse, delay, HttpResponseResolver } from 'msw';

import { IApiResponse } from '@/features/core/api';
import { IProduct } from '@/features/product/models';

import { products } from './data';

function getHandler(resolver: HttpResponseResolver<never, never, IApiResponse<IProduct>>) {
  return http.get<never, never, IApiResponse<IProduct>>('/products', resolver);
}

export function getProductsHandler() {
  return getHandler(async () => {
    await delay(1000);

    return HttpResponse.json({
      success: true,
      error: null,
      result: {
        // @ts-ignore
        items: products,
      },
    });
  });
}
