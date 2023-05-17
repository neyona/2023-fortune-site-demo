import { configureStore } from '@reduxjs/toolkit';
import nameAuraReducer from '../features/nameaura/nameAuraReducer';

export const store = configureStore({
  reducer: {
    nameAura: nameAuraReducer
  },
});
