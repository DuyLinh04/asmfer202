import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkoutInfo: JSON.parse(localStorage.getItem('checkout-info')) || [],
};

const checkoutSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createCheckout: (state, action) => {
      state.checkoutInfo = [...state.checkoutInfo, action.payload];
      localStorage.setItem('checkout-info', JSON.stringify(state.checkoutInfo));
    },
  },
});

export const { createCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;
