import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';
import ToastMiddleWare from '../middleware/Toastify';

export const store = configureStore({
  reducer: {
    Reducer: Reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleWare),
});
