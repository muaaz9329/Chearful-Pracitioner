/**
 * @format
 */

import { AppRegistry } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import "react-native-gesture-handler";
import App from "./src/App";
import { name as appName } from "./app.json";

import { GestureHandlerRootView } from "react-native-gesture-handler";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1E5542",
    secondary: "yellow",
  },
};
export default function Main() {
  return (
    
    <PaperProvider theme={theme}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
      </GestureHandlerRootView>
    </PaperProvider>
   
  );
}
AppRegistry.registerComponent(appName, () => Main);
