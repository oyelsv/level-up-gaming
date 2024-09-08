import { configureStore } from '@reduxjs/toolkit';

import { levelUpGamingApi } from '@/features/core/api/store';

import rootReducer from './rootReducer';

export const setupStore = (preloadedState: Partial<ReturnType<typeof rootReducer>> = {}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(levelUpGamingApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return { store };
};

export type AppStore = ReturnType<typeof setupStore>['store'];
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
