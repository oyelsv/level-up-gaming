export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export type SortDef<T> = [keyof T, SortOrder];

export class SortParams<T> implements Iterable<SortDef<T>> {
  private _sortOrders: Map<keyof T, SortOrder>;

  constructor(sortOrders: Iterable<SortDef<T>>) {
    this._sortOrders = new Map(sortOrders);
  }

  [Symbol.iterator](): Iterator<SortDef<T>> {
    return Array.prototype[Symbol.iterator].call(this.value);
  }

  get length(): number {
    return this._sortOrders.size;
  }

  get value(): SortDef<T>[] {
    // @ts-ignore
    return [...this.toValue()];
  }

  toValue() {
    return this._sortOrders.entries();
  }

  toString() {
    return this.value.map((item) => item.join(' ')).join(',');
  }

  static parse<T>(param: string) {
    return new SortParams(
      param
        .split(',')
        .map((item) => item.split(' '))
        .filter(([, order]) => order in SortOrder) as SortDef<T>[]
    );
  }
}
