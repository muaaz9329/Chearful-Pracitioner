import useSessionNote from "@app/adapters/useSessionNote";
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
        clientInfo:{},
        Notes:[]
    },
    reducers: {
        SetSessions: (state, action) => {
            state.Sessions = action.payload.sessions;
            state.loading = false;
            state.error = null;
            state.Success = true;
            if (action.payload.sessions.length == 0) {
                state.isEmpty = true;
            }
            state.clientInfo = action.payload.client;
            state.Notes = useSessionNote(action.payload.notes);
        },
        SetSessionOnly:(state,action) => {
            state.Sessions = action.payload.sessions;
            state.loading = false;
            state.error = null;
            state.Success = true;
            if (action.payload.sessions.length == 0) {
                state.isEmpty = true;
            }
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
        },
        ResetSession : (state,action) => {
            state.Sessions = [];
            state.loading = false;
            state.error = null;
            state.Success = false;
            state.isEmpty = false;
            state.haveError = false;
            state.clientInfo = {};
            state.Notes = [];
        }
    }


})

export default AllSessionReducers.reducer;
export const { SetSessions, SetLoading, SetError ,ResetSession , SetSessionOnly } = AllSessionReducers.actions;