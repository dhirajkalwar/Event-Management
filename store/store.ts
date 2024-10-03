// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/authSlice'; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    auth: authReducer, // Use the default export directly
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
