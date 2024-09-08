export const DEFAULT_PAGE_SIZE = 10;
export const FIRST_PAGE_INDEX = 0;
export const ROWS_PER_PAGE_OPTIONS = [5, 10, 25, 50];

export interface IPaginationModel {
  pageSize: number;
  page: number;
}

export class PaginationParams implements IPaginationModel {
  private _pageSize?: number;

  private _page?: number;

  constructor({ pageSize, page }: IPaginationModel) {
    this._pageSize = pageSize > 0 ? pageSize : undefined;
    this._page = page >= 0 ? page : undefined;
  }

  get pageSize(): number {
    return this._pageSize ?? DEFAULT_PAGE_SIZE;
  }

  get page(): number {
    return this._page ?? FIRST_PAGE_INDEX;
  }

  get skip(): number {
    return this.pageSize * this.page;
  }

  toJSON(): Record<string, number> {
    return {
      MaxResultCount: this.pageSize,
      SkipCount: this.skip,
    };
  }
}
