import { StyleSheet , TextInput} from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Home,
  Session,
  Client,
  ClientDetail,
  Notes,
  Editor,
  WrittenEditor,
  NotesPreview,
  AddNoteClient,
  AddNoteSession,
  Practitoner_SessionHistory,
} from "./screens/NoteTakingApp/Screens/index";
import { 
Client_Home,
Client_MoodDiary_Main,
Client_MoodDiary_Preview,
Client_Journal_Main,
Client_Journal_Preview,
Client_Journal_Add,
Client_TaskList_Main,
Client_SessionHistory_Main,
Client_Notification_Main,
Client_WebPreview 
} from "./screens/ClientModule/index";

const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Session" component={Session} />
        <Stack.Screen name="Client" component={Client} />
        <Stack.Screen name="ClientDetail" component={ClientDetail} />
        <Stack.Screen name="NoteScreen" component={Notes} />
        <Stack.Screen name="NotesEditor" component={Editor} />
        <Stack.Screen name="WrittenEditor" component={WrittenEditor}/>
        <Stack.Screen name="NotesPreview" component={NotesPreview}/>
        <Stack.Screen name="AddNoteClient" component={AddNoteClient}/>
        <Stack.Screen name="AddNoteSession" component={AddNoteSession}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <TextInput
             
    //           onChange={(e)=> console.log(e.nativeEvent.text)}
    //           placeholder='Enter your name'
    //           />

    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Client_Home} />
    //     <Stack.Screen name="MoodDiary" component={Client_MoodDiary_Main} />
    //     <Stack.Screen name="MoodDiaryPreview" component={Client_MoodDiary_Preview} />
    //     <Stack.Screen name="Journal" component={Client_Journal_Main} />
    //     <Stack.Screen name="JournalPreview" component={Client_Journal_Preview} />
    //     <Stack.Screen name="AddJournal" component={Client_Journal_Add} />
    //     <Stack.Screen name="TaskList" component={Client_TaskList_Main} />
    //     <Stack.Screen name="SessionHistory" component={Client_SessionHistory_Main} />
    //     <Stack.Screen name="Notification" component={Client_Notification_Main} />
    //     <Stack.Screen name="WebPreview" component={Client_WebPreview} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
  );
};

export default App;

const styles = StyleSheet.create({});
