import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import { AuthStack, PracStack } from "./routes/index";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "./common/Module/Loading-Screen/LoadingScreen";
import NotAvil from "./common/components/NotAvil";
const Stack = createStackNavigator();
const App = () => {
  const [IsLogedIn, SetLogin] = React.useState(null);
  const { accessToken } = useSelector((state) => state.auth);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    checkLogin()
  }, [accessToken]);

  const checkLogin = async () => {
    const GetToken = await AsyncStorage.getItem("USER_accessToken");
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
            {IsLogedIn == false ? (
              <Stack.Screen name="Auth" component={AuthStack} />
            ) : (
              <Stack.Screen name="PRACTITIONER_Home" component={PracStack} />
            )}
          </Stack.Navigator>
        )}
      </NavigationContainer>
      

  
    </>
  );
};

export default App;
