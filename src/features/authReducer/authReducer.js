import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";
// Async thunk to perform the login API call
export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await axios.post(`${BASE_URL}/user/login`, credentials);
  console.log(response);
  return response.data.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    loading: false,
    error: {
      message: null,
      status: false,
    },
    Success: false,
  },
  reducers: {
    logout(state) {
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        // as soon as the login function is pending the auth state gets updated
        state.loading = true;
        state.error = {
          message: null,
          status: false,
        };
        state.Success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        // as soon as the login function is fulfilled the auth state gets updated
        state.accessToken = action.payload.token;
        state.loading = false;
        state.error = {
          message: null,
          status: false,
        };
        state.Success = true;

        if (action.payload.token) {
          AsyncStorage.setItem("USER_accessToken", action.payload.token);
        }
      })
      .addCase(login.rejected, (state, action) => {
        // if the login function is rejected the auth state gets updated
        state.loading = false;
        state.error = {
          message: action.error.message,
          status: true,
        };
        state.Success = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
