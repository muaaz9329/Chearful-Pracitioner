import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DocIcon } from "@app/screens/NoteTakingApp/Images/Doc-Icons";
import { Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import Header from "./Components/Header";
import DocumentPicker from "react-native-document-picker";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import FileUploadObj from "./Components/adapter/FileUploadObj";
import Toast from "react-native-toast-message";

const PdfUpload = ({ route, navigation }) => {
  const { mode, content, ClientData, NoteId, ComingFor, TypeOfNote, routeLoc } =
    route.params;

  const LoadingRef = useRef();

  const [singleFile, setSingleFile] = React.useState(null);
  const [Content, setContent] = React.useState(null);

  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });

      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);

      if (DocumentPicker.isCancel(err)) {
        Toast.show({
          type: "ErrorToast",
          text1:"No File Selected",
          text2:'Error Code : Pr-01'
        })
      } else {
        Toast.show({
          type: "ErrorToast",
          text1:"Some Problem Occured , Please Try Again Later",
          text2:'Error Code : Pr-01'
        })
      }
    }
  };

 useEffect(() => {
  FileUploadObj(singleFile)
  .then((res) => {
    setContent(res);
  })
  .catch((err) => {
    console.log(err);
  });

 }, [singleFile]);


 useEffect(()=>{
  console.log("Content",Content)
 },[Content])

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
      <View style={styles.Cont}>
        <Pressable style={styles.ImgIcon} onPress={selectOneFile}>
          <Image source={DocIcon.pdf} style={styles.Icon} />
          <Text style={styles.UploadText}>
           {
              singleFile !== null ? singleFile.name :  "Tap to effortlessly upload PDF documents"
           }
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PdfUpload;

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
