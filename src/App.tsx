import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { AuthStack, PracStack } from "./routes/index";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector , TypedUseSelectorHook } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLogOut } from "./features/utils-States/utilsReducers";
import Toast, { ToastConfig } from "react-native-toast-message";
import toastDesigns from "./toastDesigns";
import Config from "./common/Module/Toasts/ToastConfig";

const Stack = createStackNavigator();
const App = () => {

  const [IsLogedIn, SetLogin] = React.useState<Boolean|null>();
  const { accessToken } = useSelector((state : any) => state.auth);
  const { logOut } = useSelector((state : any) => state.utils);
  const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    checkLogin()
  }, [accessToken]);

  useEffect(()=>{
    if(logOut){
      checkLogOut()
      dispatch(setLogOut(false))
    }
  },[logOut])

  const checkLogin = async () : Promise<void> => {
    const GetToken = await AsyncStorage.getItem("USER_accessToken");
    if (GetToken != null) {
      SetLogin(true);
    } else {
      SetLogin(false);
    }
  };


  const checkLogOut = async ():Promise<void> => {
    SetLogin(false);
  }


  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        {IsLogedIn !== null && (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {IsLogedIn == false ? (
              <Stack.Screen name="Auth" component={AuthStack} />
            ) : (
              <Stack.Screen name="PRACTITIONER_Home" component={PracStack} />
            )}
          </Stack.Navigator>
        )}
      </NavigationContainer>
      <Toast config={Config as ToastConfig}/>
    </>

  );
};

export default App;
