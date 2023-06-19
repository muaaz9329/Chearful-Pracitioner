import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Pdf from "react-native-pdf";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import HeaderWithDeleteBtn from "./HeaderWithDeleteBtn";

const PDFEditor = ({ navigation, route }) => {
  const { mode, content, ClientData , NoteId} = route.params;
  console.log("content", content);
  const LoadingRef = useRef();
  const LoadingComplete = () => {
    LoadingRef.current.LoadingEnds();
  }
  return (
    <>
    <LoadingScreen ref={LoadingRef} />
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderWithDeleteBtn navigation={navigation} mode={mode} data={ClientData} />
      <Pdf source={{ uri: content }} style={{ flex: 1 }} onLoadComplete={()=> LoadingComplete()} trustAllCerts={false}  />
    </SafeAreaView>
    </>
  );
};

export default PDFEditor;

const styles = StyleSheet.create({});
