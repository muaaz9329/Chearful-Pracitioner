import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DocIcon } from "@app/screens/NoteTakingApp/Images/Doc-Icons";
import { Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import Header from "./Components/Header";
import DocumentPicker from "react-native-document-picker";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { convertFileToBase64 } from "@app/helper/customFunction";
import FileUploadObj from "./Components/adapter/FileUploadObj";
const ImageUpload = ({ route, navigation }) => {
  const { mode, content, ClientData, NoteId, ComingFor, TypeOfNote, routeLoc } =
    route.params;

  const LoadingRef = useRef();

  const [singleFile, setSingleFile] = useState(null);
  const [Content, setContent] = useState(null);
  const UploadImage = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });

      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);

      if (DocumentPicker.isCancel(err)) {
        alert("You have not selected any file");
      } else {
        alert("Unknown Error: " + JSON.stringify(err));
        throw err;
      }
    }
  };

  useEffect(() => {
    if (singleFile !== null) {
      FileUploadObj(singleFile)
        .then((res) => {
          setContent(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [singleFile]);


  return (
    <SafeAreaView style={styles.Container}>
      <LoadingScreen type={"loader"} ref={LoadingRef} />
      <Header
        navigation={navigation}
        mode={mode}
        data={ClientData}
        NoteId={NoteId}
        ComingFor={ComingFor}
        TypeOfNote={TypeOfNote}
        Content={Content}
        LoadingRef={LoadingRef}
        routeLoc={routeLoc}
      />
      <Pressable style={styles.Cont} onPress={UploadImage}>
        <View style={styles.ImgIcon}>
          <Image source={DocIcon.img} style={styles.Icon} />
          <Text style={styles.UploadText}>
            {singleFile === null
              ? "Tap to effortlessly upload Image (png,jpeg) documents"
              : singleFile.name}
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Icon: {
    width: Wp(180),
    height: Wp(200),
  },
  ImgIcon: {
    width: Wp(180),
    height: Wp(200),
  },
  UploadText: {
    fontSize: Wp(15),
    textAlign: "center",
    marginTop: Wp(10),
    fontFamily: Mulish(500),
  },
  Cont: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Wp(100),
    flex: 1,
  },
});
