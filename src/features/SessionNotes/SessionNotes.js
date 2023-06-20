import useSessionNote from "@adapters/useSessionNote";
import { createSlice } from "@reduxjs/toolkit";

const intoInitialState = {
  SessionNotes: [],
  SessionNotesLoading: false,
  SessionNotesError: null,
  SessionNotesSuccess: false,
  SessionInfo: {},
  HasNotes: false,
  refresh:false
};

const SessionNotesSlice = createSlice({
  name: "SessionNotes",
  initialState: intoInitialState,
  reducers: {
    SetSessionNotes: (state, action) => {
     
      state.SessionNotes = useSessionNote(action.payload.session_notes);// Custom Hook to get the Session Notes with addtional key of AppType for chosing Proper Viewer & editor
      state.SessionNotesSuccess = true;
      state.SessionNotesLoading = false;
      state.SessionNotesError = null;
      if (state.SessionNotes.length > 0) {
        state.HasNotes = true;
      } else {
        state.HasNotes = false;
      }
      state.SessionInfo = action.payload.session_info;
    },
    ResetSessionNotes: (state, action) => {
      state.SessionNotes = [];
      state.SessionNotesSuccess = false;
      state.SessionNotesLoading = false;
      state.SessionNotesError = null;
      state.HasNotes = false;
      state.SessionInfo = {};
    },
    RefreshSessionNotes:(state,action)=>{
      state.refresh = action.payload
    }
  },
});

export const { SetSessionNotes, ResetSessionNotes ,RefreshSessionNotes } = SessionNotesSlice.actions;
export default SessionNotesSlice.reducer;
