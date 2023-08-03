import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    refresh: false,
    logOut:false
}


const utilsSlice = createSlice({
    name: "utils",
    initialState,
    reducers:{
        setRefresh:(state,action)=>{
            state.refresh = action.payload
        },
        setLogOut:(state,action)=>{
            state.logOut = action.payload
        }
    }
})

export const { setRefresh , setLogOut } = utilsSlice.actions
export default utilsSlice.reducer