import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Pdf from "react-native-pdf";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import HeaderWithDeleteBtn from "./Components/HeaderWithDeleteBtn";
import { ActivityIndicator } from "react-native-paper";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";

const PDFEditor = ({ navigation, route }) => {
  const { mode, content, ClientData, NoteId } = route.params;
  const [loading, setLoading] = React.useState(true);
  console.log("content", content);
  const LoadingRef = useRef();
  const LoadingComplete = () => {
    setLoading(false);
  };
  return (
    <>
      <LoadingScreen ref={LoadingRef} type={"loader"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
        )}
        <Pdf
          source={{ uri: content }}
          style={{ flex: 1 }}
          onLoadComplete={() => LoadingComplete()}
          trustAllCerts={false}
        />
      </SafeAreaView>
    </>
  );
};

export default PDFEditor;

const styles = StyleSheet.create({
  ActivityIndicator: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
