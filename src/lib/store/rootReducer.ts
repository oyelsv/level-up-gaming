import { combineReducers } from '@reduxjs/toolkit';

import { levelUpGamingApi } from '@/features/core/api/store/api';

const rootReducer = combineReducers({
  [levelUpGamingApi.reducerPath]: levelUpGamingApi.reducer,
});

export default rootReducer;
