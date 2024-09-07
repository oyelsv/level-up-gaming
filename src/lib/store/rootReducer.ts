import { combineReducers } from '@reduxjs/toolkit';

import { boApi } from '@/features/core/api/store/api';

const rootReducer = combineReducers({
  [boApi.reducerPath]: boApi.reducer,
});

export default rootReducer;
