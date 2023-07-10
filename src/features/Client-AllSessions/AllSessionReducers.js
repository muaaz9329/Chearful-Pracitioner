import { createSlice } from "@reduxjs/toolkit";

const AllSessionReducers = createSlice({
    name: "AllSessionReducers",
    initialState: {
        loading: false,
        Sessions: [],
        error: null,
        Success: false,
        isEmpty: false,
        haveError: false,
        clientInfo:{}
    },
    reducers: {
        SetSessions: (state, action) => {
            state.Sessions = action.payload.sessions;
            state.loading = false;
            state.error = null;
            state.Success = true;
            if (action.payload.length == 0) {
                state.isEmpty = true;
            }
            state.clientInfo = action.payload.client;
        },
        SetLoading: (state, action) => {
            state.loading = true;
            state.error = null;
            state.Success = false;
        },
        SetError: (state, action) => {
            state.loading = true;
            state.error = action.payload;
            state.Success = false;
            state.haveError = true;
        }
    }


})

export default AllSessionReducers.reducer;
export const { SetSessions, SetLoading, SetError } = AllSessionReducers.actions;