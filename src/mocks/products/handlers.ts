import { http, HttpResponse, delay, HttpResponseResolver } from 'msw';

import { IApiResponse, IPaginatedResult } from '@/features/core/api';
import { IProduct } from '@/features/product/models';

import { products } from './data';

function getHandler(
  resolver: HttpResponseResolver<never, { searchQuery: string }, IApiResponse<IPaginatedResult<IProduct>>>
) {
  return http.post<never, { searchQuery: string }, IApiResponse<IPaginatedResult<IProduct>>>('/products', resolver);
}

export function getProductsHandler() {
  return getHandler(async ({ request }) => {
    const body = await request.json();
    const { searchQuery = '' } = body;

    await delay(1000);

    const filteredProducts = searchQuery.length
      ? products.filter(({ title }) => title.toLowerCase().includes(searchQuery.toLowerCase()))
      : products;

    return HttpResponse.json({
      error: null,
      success: true,
      result: {
        totalCount: filteredProducts.length,
        items: filteredProducts,
      },
    });
  });
}
