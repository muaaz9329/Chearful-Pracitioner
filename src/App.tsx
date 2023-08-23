import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, PracStack } from "./routes/index";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLogOut } from "./features/utils-States/utilsReducers";
import Toast, { ToastConfig } from "react-native-toast-message";
import Config from "./common/Module/Toasts/ToastConfig";
import DeviceTypeProvider from "./context/Device-Type/DeviceTypeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUp from "./screens/Authentication/Sign-Up/SignUp";

const Stack = createStackNavigator();
const App = () => {
  const [IsLogedIn, SetLogin] = React.useState<Boolean | null>();
  const { accessToken } = useSelector((state: any) => state.auth);
  const { logOut } = useSelector((state: any) => state.utils);
  const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
  }, []); // hides the splash screen

  useEffect(() => {
    checkLogin();
  }, [accessToken]); // watching :- accessToken state

  useEffect(() => {
    if (logOut) {
      checkLogOut();
      dispatch(setLogOut(false));
    }
  }, [logOut]); // watching :- logOut state

  const checkLogin = async (): Promise<void> => {
    const GetToken = await AsyncStorage.getItem("USER_accessToken");
    if (GetToken != null) {
      SetLogin(true);
    } else {
      SetLogin(false);
    }
  }; // checks weather user is logged in or not

  const checkLogOut = async (): Promise<void> => {
    SetLogin(false);
  }; // logs the user out

  return (
    <DeviceTypeProvider>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaProvider>
        {/* <NavigationContainer>
          {IsLogedIn !== null && (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {IsLogedIn == false ? (
                <Stack.Screen name="Auth" component={AuthStack} />
              ) : (
                <Stack.Screen name="PRACTITIONER_Home" component={PracStack} />
              )}
            </Stack.Navigator>
          )}
        </NavigationContainer> */}
        <SignUp/>
      </SafeAreaProvider>

      <Toast config={Config as ToastConfig} />
    </DeviceTypeProvider>
  );
};

export default App;
