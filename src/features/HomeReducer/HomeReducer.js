import { createSlice } from "@reduxjs/toolkit";

const HomeReducer = createSlice({
  name: "Home",
  initialState: {
    loading: false,
    error: null,
    Success: false,
    UserInfo: null,
  },

  reducers: {
    SetUserData: (state, action) => {
      state.UserInfo = action.payload;
      state.loading = false;
      state.error = null;
      state.Success = true;
    },
  },
});

export default HomeReducer.reducer;
export const { SetUserData } = HomeReducer.actions;
