import { createSlice } from "@reduxjs/toolkit";

const ClientReducer = createSlice({
    name: "ClientReducer",
    initialState: {
        loading: false,
        Clients: [],
        error: null,
        Success: false,
        isEmpty: false,
        haveError: false

    }
    ,
    reducers: {
        SetClients: (state, action) => {
            state.Clients = action.payload;
            state.loading = false;
            state.error = null;
            state.Success = true;
            if (action.payload.length == 0) {
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
        }
    }
})

export default ClientReducer.reducer;
export const { SetClients, SetLoading ,SetError } = ClientReducer.actions;