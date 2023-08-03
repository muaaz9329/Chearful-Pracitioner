import { createSlice } from "@reduxjs/toolkit";

const ResetPasswordReducer = createSlice({
    name: "ResetPassword",
    initialState: {
        loading: false,
        error:{
            status: false,
            message: null,
        },
        Success: false,
    },
    reducers:{
        ResetPasswordRequest: (state, action) => {
            state.loading = true;
            state.error ={
                status: false,
                message: null,
            }
            state.Success = false;
        },
        ResetPasswordSuccess: (state, action) => {
            state.loading = false;
            state.error = {
                status: false,
                message: null,
            }
            state.Success = true;
        },
        ResetPasswordFailed: (state, action) => {
            state.loading = false;
            state.error = {
                status: true,
                message: action.payload,
            }
            state.Success = false;
        }
        

    }
})

export default ResetPasswordReducer.reducer;
export const { ResetPasswordRequest, ResetPasswordSuccess, ResetPasswordFailed } = ResetPasswordReducer.actions;