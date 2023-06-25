import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    Opacity:1,
    Color:'#000',
    strokeWidth:8,
    hasSaved:false,


}

export const BrushControl = createSlice({
    name:'BrushControl',
    initialState,
    reducers:{
        UpdateOpacity:(state,action)=>{
            state['Opacity'] = action.payload
        },
        UpdateColor:(state,action)=>{
            state['Color'] = action.payload
        },
        UpdateStrokeWidth:(state,action)=>{
            state['strokeWidth'] = action.payload
        },
        UpdateHasSaved:(state,action)=>{
            state['hasSaved'] = action.payload
        }

    }
})

export const {UpdateColor,UpdateOpacity,UpdateStrokeWidth , UpdateHasSaved } = BrushControl.actions
export default BrushControl.reducer;
