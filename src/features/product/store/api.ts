import { IPaginatedResult, levelUpGamingApi, transformResponse } from '@/features/core/api';

import { IProduct } from '../models';

export const PRODUCT_ITEM_TAG = 'ProductItem' as const;
export const PRODUCT_TAG = 'Product' as const;
export const PRODUCT_COLLECTIONS_TAG = 'ProductCollections' as const;

export const productsApi = levelUpGamingApi
  .enhanceEndpoints({
    addTagTypes: [PRODUCT_ITEM_TAG, PRODUCT_TAG, PRODUCT_COLLECTIONS_TAG],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getProducts: build.query<IPaginatedResult<IProduct>, { searchQuery?: string }>({
        query: ({ searchQuery }) => ({
          url: '/products',
          method: 'POST',
          body: {
            searchQuery,
          },
        }),
        providesTags: [PRODUCT_ITEM_TAG],
        transformResponse,
      }),
    }),
  });
