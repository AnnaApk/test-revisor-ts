import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import photoReducer from './features/photoSlice';

const store = configureStore({
  reducer: {
    photos: photoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
