import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    refresh: false
}


const utilsSlice = createSlice({
    name: "utils",
    initialState,
    reducers:{
        setRefresh:(state,action)=>{
            state.refresh = action.payload
        }
    }
})

export const { setRefresh } = utilsSlice.actions
export default utilsSlice.reducer