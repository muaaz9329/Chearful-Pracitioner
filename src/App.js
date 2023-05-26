import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { AuthStack, ClientStack, PracStack } from "./routes/index";
import { createStackNavigator } from "@react-navigation/stack";
import Drawic from "./Library/Drawic/Drawic";
import CanvasControl from "./Library/Drawic/src/CanvasControl";
import Canvas from "./Library/Drawic/src/Canvas";
import Slider from "@react-native-community/slider";
import DrawingEditor from "./screens/NoteTakingApp/Screens/Editor/Components/DrawingEditor";
import {useSelector } from "react-redux";
import { store } from "./store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();
const App = () => {
  const [IsLogedIn, SetLogin] = React.useState(null);
  const { accessToken } = useSelector((state) => state.auth);
  useEffect(() => {

    SplashScreen.hide();
  }, []);

  useEffect(()=>{
    checkLogin();
  },[accessToken])


  const checkLogin = async () => {
    const GetToken = await AsyncStorage.getItem("USER_accessToken");
    console.log(GetToken);
    if (GetToken != null) {
      SetLogin(true);
    } else {
      SetLogin(false);
    }
  };
  return (
    <>
      
        <StatusBar barStyle={"dark-content"} />
        <NavigationContainer>
          {IsLogedIn !== null && (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {IsLogedIn ==false ? <Stack.Screen name="Auth" component={AuthStack} /> :
              <Stack.Screen name="PRACTITIONER_Home" component={PracStack} />}
            </Stack.Navigator>
          )}
        </NavigationContainer>
      
    </>
    // <Drawic/>
    // <DrawingEditor/>
  );
};

export default App;
