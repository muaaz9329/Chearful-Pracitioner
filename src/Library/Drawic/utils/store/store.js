import { configureStore } from "@reduxjs/toolkit";
import BrushControl from "../features/Brush-Control/BrushControl";
import ChooseEraser from "../features/ChooseEraser/ChooseEraser";
import HideModel from "../features/Hide-Model-control-state/HideModel";
export const store = configureStore({
    reducer:{
        BrushControl : BrushControl,
        HideModel: HideModel,
        ChooseEraser:ChooseEraser,
    }
})