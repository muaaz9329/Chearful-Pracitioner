import useSessionNote from "@app/adapters/useSessionNote";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllNotes: [],
    Loading : false,
    Error : false,
    Success : false,
    isEmpty : false,
    haveError : false,
    
}

const AllNotesSlice = createSlice({
    name : "AllNotes",
    initialState,
    reducers : {
        SetLoading : (state) => {
            state.Loading = true;
            state.Error = false;
            state.Success = false;
        },
        SetError : (state) => {
            state.Error = true;
            state.Loading = false;
            state.Success = false;


        },
        SetSuccess : (state,action) => {
            state.AllNotes = useSessionNote(action.payload);
            state.Loading = false;
            state.Error = false;
            state.Success = true;
            if(action.payload.length == 0){
                state.isEmpty = true;
            }
        },
        ResetAllNotes : (state) => {
            state.AllNotes = [];
            state.Loading = false;
            state.Error = false;
            state.Success = false;
            state.isEmpty = false;
            state.haveError = false;
        }
    }
})

export const {SetLoading,SetError,SetSuccess,ResetAllNotes} = AllNotesSlice.actions;
export default AllNotesSlice.reducer;