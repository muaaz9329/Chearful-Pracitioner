import useSessionHistory from "@app/hooks/useSessionHistory";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    session: [],
    Loading: false,
    Error: false,
    Success: false,
    UpcomingSessions: [],
    HistorySession:[],
    NoOfUpcomingSession: 0,
    NoOfHistorySession: 0,
}


const SessionHistorySlice = createSlice({
    name: "SessionHistory",
    initialState,
    reducers: {
        SetSessionHistory: (state, action) => {
            state.session = action.payload.data;
            state.Loading = false;
            state.Success = true;
            state.Error = false;
            const {PastSession , UpcomingSession} = useSessionHistory(state.session);
            state.UpcomingSessions = UpcomingSession;
            state.HistorySession = PastSession;
            state.NoOfUpcomingSession = UpcomingSession.length;
            state.NoOfHistorySession = PastSession.length;
            
        },
        ResetSessionHistory : (state, action) => {
            state.session = [];
            state.Loading = false;
            state.Success = false;
            state.Error = false;
            state.UpcomingSessions = [];
            state.HistorySession = [];
            state.NoOfUpcomingSession = 0;
            state.NoOfHistorySession = 0;
        }
    }

    
})

export const { SetSessionHistory , ResetSessionHistory } = SessionHistorySlice.actions;
export default SessionHistorySlice.reducer;
