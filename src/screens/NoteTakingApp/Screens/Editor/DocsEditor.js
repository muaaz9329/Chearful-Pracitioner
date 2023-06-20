import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/Header";
import WebView from "react-native-webview";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import HeaderWithDeleteBtn from "./Components/HeaderWithDeleteBtn";

const DocsEditor = ({ route, navigation }) => {
  const { mode, content, ClientData ,NoteId } = route.params;
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
      <HeaderWithDeleteBtn navigation={navigation} mode={mode} data={ClientData} NoteId={NoteId} />
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
