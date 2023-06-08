import { createSlice } from "@reduxjs/toolkit";

const intoInitialState = {
  SessionNotes: [],
  SessionNotesLoading: false,
  SessionNotesError: null,
  SessionNotesSuccess: false,
  SessionInfo: {},
  HasNotes: false,
};

const SessionNotesSlice = createSlice({
  name: "SessionNotes",
  initialState: intoInitialState,
  reducers: {
    SetSessionNotes: (state, action) => {
      state.SessionNotes = action.payload.session_notes.filter(
        (item) =>
          (item.type === "file" && item.canvas !== null) || item.type === "text"
      ); // filters out all the notes that are not text or canvas 
      //! Have to change this later after making Viewer Component
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
  },
});

export const { SetSessionNotes, ResetSessionNotes } = SessionNotesSlice.actions;
export default SessionNotesSlice.reducer;
