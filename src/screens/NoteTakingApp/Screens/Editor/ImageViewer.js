import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderWithDeleteBtn from "./Components/HeaderWithDeleteBtn";
const ImageViewer = ({ route, navigation }) => {
  const { mode, content, ClientData,NoteId } = route.params;
  console.log("content", content);
  return (
    <SafeAreaView style={{flex:1 , backgroundColor:'white'}} >
      <HeaderWithDeleteBtn navigation={navigation} mode={mode} data={ClientData} NoteId={NoteId}/>
      <Image
      source={{uri:content}}
      style={{flex:1}}
      resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default ImageViewer;

const styles = StyleSheet.create({});
