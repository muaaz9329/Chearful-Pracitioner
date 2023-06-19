import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import WebView from "react-native-webview";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import HeaderWithDeleteBtn from "./HeaderWithDeleteBtn";

const DocsEditor = ({ route, navigation }) => {
  const { mode, content, ClientData } = route.params;
  const [url, setUrl] = useState("");
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

  const LoadingComplete = () => {
    LoadingRef.current.LoadingEnds();
  }
  return (
    <>
    <LoadingScreen ref={LoadingRef} />
    <SafeAreaView style={styles.Body}>
      <HeaderWithDeleteBtn navigation={navigation} mode={mode} data={ClientData} />
      <WebView source={{ uri: url }} style={{ flex: 1 }} onLoadEnd={()=>LoadingComplete()} />
    </SafeAreaView>
    </>
  );
};

export default DocsEditor;

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: "white",
  },
});
