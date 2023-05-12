
import React from 'react'
import {
 Auth_Login
}
from '@app/screens/Authentication/index.js';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Auth_login' component={Auth_Login}/>
        </Stack.Navigator>
  )
}

export default AuthStack

