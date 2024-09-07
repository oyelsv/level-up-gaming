import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { IApiError, IApiErrorResponse, IApiSuccessResponse } from '../models';

export function transformResponse<T>(response: IApiSuccessResponse<T>): T {
  return response.result;
}

export function transformErrorResponse<T>(err: FetchBaseQueryError): IApiError | null {
  return (err.data as IApiErrorResponse<T> | null)?.error ?? null;
}
