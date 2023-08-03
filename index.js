/**
 * @format
 */

import { AppRegistry , LogBox } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import "react-native-gesture-handler";
import App from "./src/App";
import { name as appName } from "./app.json";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { store } from "@app/store/store";
import { Provider } from "react-redux";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1E5542",
    secondary: "yellow",
  },
};
export default function Main() {
  LogBox.ignoreLogs(['Possible Unhandled Promise Rejection....']); // Ignore log notification by message
  return (
    <Provider store={store}>
    <PaperProvider theme={theme}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
      </GestureHandlerRootView>
    </PaperProvider>
    </Provider>
  
   
  );
}
AppRegistry.registerComponent(appName, () => Main);
