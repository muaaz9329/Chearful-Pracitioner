import React from "react";
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
  Client_WebPreview,
} from "@app/screens/ClientModule/index";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const ClientStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Client_Home" 
        component={Client_Home} 
      />
      <Stack.Screen 
        name="Client_MoodDiary" 
        component={Client_MoodDiary_Main} 
      />
      <Stack.Screen
        name="Client_MoodDiaryPreview"
        component={Client_MoodDiary_Preview}
      />
      <Stack.Screen 
        name="Client_Journal" 
        component={Client_Journal_Main} 
      />
      <Stack.Screen
        name="Client_JournalPreview"
        component={Client_Journal_Preview}
      />
      <Stack.Screen 
        name="Client_AddJournal" 
        component={Client_Journal_Add}
      />
      <Stack.Screen 
        name="Client_TaskList" 
        component={Client_TaskList_Main} 
      />
      <Stack.Screen
        name="Client_SessionHistory"
        component={Client_SessionHistory_Main}
      />
      <Stack.Screen
        name="Client_Notification"
        component={Client_Notification_Main}
      />
      <Stack.Screen 
        name="Client_WebPreview" 
        component={Client_WebPreview} 
      />
       </Stack.Navigator>
    
  );
};

export default ClientStack;
