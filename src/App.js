import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { AuthStack, ClientStack, PracStack, TempStack } from "./routes/index";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="CLIENT_Home" component={ClientStack} />
          <Stack.Screen name="PRACTITIONER_Home" component={PracStack} />
          <Stack.Screen name="Temp" component={TempStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
