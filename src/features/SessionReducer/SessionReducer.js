import { createSlice } from "@reduxjs/toolkit";

const SessionReducer = createSlice({
  name: "Session",
  initialState: {
    Data: null,
    loading: true,
    error: null,
    Success: false,
    HasSession: null,
  },
  reducers: {
    SetSessionData: (state, action) => {
      state.Data = action.payload.data;
      state.loading = false;
      state.error = null;
      state.Success = true;
      if (action.payload.data.length > 0) {
        state.HasSession = true;
      } else {
        state.HasSession = false;
      }
    },

    ResetSessionData: (state, action) => {
      (state.Data = null),
        (state.loading = true),
        (state.error = null),
        (state.Success = false),
        (state.HasSession = null);
    },
  },
});

export default SessionReducer.reducer;
export const { SetSessionData , ResetSessionData } = SessionReducer.actions;
