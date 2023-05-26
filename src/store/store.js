import { configureStore } from "@reduxjs/toolkit";
import BrushControl from "@Library/Drawic/utils/features/Brush-Control/BrushControl";
import ChooseEraser from "@Library/Drawic/utils/features/ChooseEraser/ChooseEraser";
import HideModel from "@Library/Drawic/utils/features/Hide-Model-control-state/HideModel";
import authReducer from "@app/features/authReducer/authReducer";
import HomeReducer from "@app/features/HomeReducer/HomeReducer";
export const store = configureStore({
    reducer:{
        //* Library Reducers 
        BrushControl : BrushControl,
        HideModel: HideModel,
        ChooseEraser:ChooseEraser,

        //* App Reducers
        auth: authReducer,
        Home : HomeReducer,
        
    }
})