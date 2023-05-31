
import React from 'react'
import {
  Auth_ForgetPass,
 Auth_Login
}
from '@app/screens/Authentication/index.js';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Auth_login' component={Auth_Login}/>
        <Stack.Screen name="Auth_ResetPass" component={Auth_ForgetPass} />
        </Stack.Navigator>
  )
}

export default AuthStack

