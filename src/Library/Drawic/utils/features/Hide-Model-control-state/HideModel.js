import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    HideModel:false,
}

export const HideModel = createSlice({
    name:'HideModel',
    initialState,
    reducers:{
        UpdateHideModel:(state,action)=>{
            state['HideModel'] = action.payload
        }
    }
})

export const {UpdateHideModel} = HideModel.actions
export default HideModel.reducer;
