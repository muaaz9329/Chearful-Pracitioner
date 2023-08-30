import { createSlice } from "@reduxjs/toolkit";

export interface SignUpState {
    isDataValid: boolean;
    Success: boolean;
    token: string;
    error: string;
    loading: boolean;
    moveNextSlide: boolean;
}

const initialState: SignUpState = {
    isDataValid: false,
    Success: false,
    token: "",
    error: "",
    loading: false,
    moveNextSlide: false
};


const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        setSignUpData: (state, action) => {
            state.Success = true;
            state.token = action.payload;
            state.loading = false;

        },
        setSignUpError: (state, action) => {
            state.Success = false;
            state.error = action.payload;
            state.loading = false;
        },
        setSignUpLoading: (state, action) => {
            state.loading = action.payload;
        },
        setSignUpDataValid: (state, action) => {
            state.isDataValid = action.payload;
        },
        setMoveNextSlide: (state, action) => {
            state.moveNextSlide = action.payload;
        }
    }
})

export const { setSignUpData, setSignUpError, setSignUpLoading, setSignUpDataValid , setMoveNextSlide } = signUpSlice.actions
export default signUpSlice.reducer