import { StyleSheet, Text, View ,Image} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderWithDeleteBtn from "./Components/HeaderWithDeleteBtn";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
const ImageViewer = ({ route, navigation }) => {
  const { mode, content, ClientData,NoteId } = route.params;
  const LoadingRef = React.useRef();
  console.log("content", content);
  return (
    <SafeAreaView style={{flex:1 , backgroundColor:'white'}} >
      <LoadingScreen ref={LoadingRef} type={'loader'} />
      <HeaderWithDeleteBtn navigation={navigation} mode={mode} data={ClientData} NoteId={NoteId} LoadingRef={LoadingRef}/>
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
