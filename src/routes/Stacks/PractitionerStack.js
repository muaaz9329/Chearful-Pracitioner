import React from "react";
import {
  Prac_Home,
  Prac_AddNoteClient,
  Prac_AddNoteSession,
  Prac_Client,
  Prac_ClientDetail,
  Prac_Editor,
  Prac_Notes,
  Prac_NotesPreview,
  Prac_Session,
  Prac_WrittenEditor,
  Prac_SessionHistory,
} from "@app/screens/NoteTakingApp/Screens/index";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const PractitionerStack = () => {
  return (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Prac_Home" component={Prac_Home} />
      <Stack.Screen name="Prac_Session" component={Prac_Session} />
      <Stack.Screen name="Prac_Client" component={Prac_Client} />
      <Stack.Screen name="Prac_ClientDetail" component={Prac_ClientDetail} />
      <Stack.Screen name="Prac_NoteScreen" component={Prac_Notes} />
      <Stack.Screen name="Prac_NotesEditor" component={Prac_Editor} />
      <Stack.Screen name="Prac_WrittenEditor" component={Prac_WrittenEditor} />
      <Stack.Screen name="Prac_NotesPreview" component={Prac_NotesPreview} />
      <Stack.Screen name="Prac_AddNoteClient" component={Prac_AddNoteClient} />
      <Stack.Screen name="Prac_AddNoteSession" component={Prac_AddNoteSession} />
      <Stack.Screen name="Prac_SessionHistory" component={Prac_SessionHistory} />
      </Stack.Navigator>
  );
};

export default PractitionerStack;
