import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export const useDebouncedSearch = (initialValue: string = '', delay: number = 500) => {
  const [searchValue, setSearchValue] = useState(initialValue);
  const [debouncedSearchValue, setDebouncedValue] = useState(initialValue);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setDebouncedValue(value);
  }, delay);

  useEffect(() => {
    debouncedSearch(searchValue);
  }, [searchValue, debouncedSearch]);

  return {
    searchValue,
    debouncedSearchValue,
    setSearchValue,
  };
};
