import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthernticated: false,
  user: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Update the state with the user data and set isAuthenticated to true
      state.isAuthernticated = true;
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
