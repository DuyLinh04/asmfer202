import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: JSON.parse(localStorage.getItem('user-info')) || {
    email: '',
    name: '',
  },
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userInfo = {
        email: action.payload.email,
        name: action.payload.name,
      };
      localStorage.setItem('user-info', JSON.stringify(state.userInfo));
    },
    logoutUser: (state) => {
      state.userInfo = {};
      localStorage.removeItem('user-info');
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
