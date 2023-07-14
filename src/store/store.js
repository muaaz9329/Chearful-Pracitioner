import { configureStore } from "@reduxjs/toolkit";
import BrushControl from "@Library/Drawic/utils/features/Brush-Control/BrushControl";
import ChooseEraser from "@Library/Drawic/utils/features/ChooseEraser/ChooseEraser";
import HideModel from "@Library/Drawic/utils/features/Hide-Model-control-state/HideModel";
import {
    HomeReducer,
    SessionReducer,
   ResetReducers,
   authReducer,
   SessionNotesReducer,
   ClientReducer,
   ClientSessionReducer,
   AllNotesReducers,
   SessionHistory
} from '@app/features'
export const store = configureStore({
    reducer:{
        //* Library Reducers 
        BrushControl : BrushControl,
        HideModel: HideModel,
        ChooseEraser:ChooseEraser,


        //* App Reducers
        auth: authReducer,
        ResetPass:ResetReducers,
        Home : HomeReducer,
        Session : SessionReducer,
        SessionNotes: SessionNotesReducer, 
        ClientReducer: ClientReducer,
        ClientSessionReducer: ClientSessionReducer,
        AllNotesReducers : AllNotesReducers,
        SessionHistory: SessionHistory
        
    }
})