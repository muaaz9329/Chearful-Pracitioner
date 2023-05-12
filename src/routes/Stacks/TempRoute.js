
import { NewEditor } from '@app/Test_Screen/index';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
const Stack = createStackNavigator();
const TempRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="New_Editor" component={NewEditor} />
    </Stack.Navigator>
  )
}

export default TempRoute
