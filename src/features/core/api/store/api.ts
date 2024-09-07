import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

// import { BASE_API_URL } from '@/features/core/api/constants';
// import { AppState } from '@/lib/store/models';

const baseQuery = fetchBaseQuery({
  // baseUrl: BASE_API_URL,
  baseUrl: '',
  prepareHeaders(headers) {
    const token = 'SOME_STATIC_TOKEN';

    if (process.env.NODE_ENV === 'development') {
      headers.append('x-msw-bypass', 'true');
    }

    headers.append('Authorization', `Bearer ${token}`);
  },
});

const baseQueryWithAuthRefresh: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export const boApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuthRefresh,
  endpoints: () => ({}),
});
