import {

  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/Header";
import WebView from "react-native-webview";
import HeaderWithDeleteBtn from "./Components/HeaderWithDeleteBtn";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { ActivityIndicator } from "react-native-paper";

const DocsEditor = ({ route, navigation }) => {
  const { mode, content, ClientData, NoteId } = route.params;
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const LoadingRef = React.useRef();
  const SetUrl = () => {
    if (Platform.OS === "android") {
      setUrl("https://docs.google.com/gview?embedded=true&url=" + content);
    } else {
      setUrl(content);
    }
  };
  useEffect(() => {
    SetUrl();
    console.log(url);
  }, []);

  return (
    <>
      <LoadingScreen type={"loader"} ref={LoadingRef} />
      <SafeAreaView style={styles.Body}>
        <HeaderWithDeleteBtn
          navigation={navigation}
          mode={mode}
          data={ClientData}
          NoteId={NoteId}
          LoadingRef={LoadingRef}
        />
        {loading && (
          <View style={styles.ActivityIndicator}>
            <ActivityIndicator size={"small"} color={NoteAppcolor.Primary} />
          </View>
          
        ) }
          <WebView
            source={{ uri: url }}
            style={{ flex: 1 }}
            onLoadEnd={() => setLoading(false)}
          />
       
      </SafeAreaView>
    </>
  );
};

export default DocsEditor;

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  ActivityIndicator: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    backgroundColor: "white",
  }
});
