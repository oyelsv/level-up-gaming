export interface IApiValidationError {
  message: string;
  members: string[];
}

export interface IApiError {
  code: number;
  message: string;
  details: string | null;
  validationErrors: Array<IApiValidationError> | null;
}

interface IBaseApiResponse<R = unknown> {
  result: R | null;
  success: boolean;
  error: IApiError | null;
  unAuthorizedRequest?: boolean;
}

export interface IApiSuccessResponse<R = unknown> extends IBaseApiResponse<R> {
  result: R;
  success: true;
  error: null;
}

export interface IApiErrorResponse<R = unknown> extends IBaseApiResponse<R> {
  result: null;
  success: false;
  error: IApiError;
}

export type IApiResponse<R> = IApiSuccessResponse<R> | IApiErrorResponse<R>;

export interface IListResult<T> {
  items: Array<T>;
}
