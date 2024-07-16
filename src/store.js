import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/loginSlice';
import cartReducer from './features/cartSlice';
import checkoutReducer from './features/checkoutSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});
