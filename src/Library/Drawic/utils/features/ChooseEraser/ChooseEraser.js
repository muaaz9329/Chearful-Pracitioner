import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    EraserSelected:false,
    BoxOpacity:1,
    CanBeTouched:true,
}

export const ChooseEraser = createSlice({
    name:"ChooseEraser",
    initialState,
    reducers:{
        UPDATE_EraserState:(state , action)=>{
            state['EraserSelected'] = action.payload
        },
        UPDATE_BoxOpacity:(state , action)=>{
            state['BoxOpacity'] = action.payload
        },
        UPDATE_CanBeTouched:(state , action)=>{
            state['CanBeTouched'] = action.payload
        }
    }
})

export const {UPDATE_EraserState , UPDATE_BoxOpacity , UPDATE_CanBeTouched} = ChooseEraser.actions

export default ChooseEraser.reducer