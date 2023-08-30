import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DocIcon } from "@app/screens/NoteTakingApp/Images/Doc-Icons";
import { Wp } from "@app/helper/CustomResponsive";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import Header from "./Components/Header";
import DocumentPicker from "react-native-document-picker";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import FileUploadObj from "./Components/adapter/FileUploadObj";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import Toast from "react-native-toast-message";
import ActionSheet from "react-native-actions-sheet";
import { IconCamera, IconPhoto } from "tabler-icons-react-native";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
const ImageUpload = ({ route, navigation }) => {
  const { mode, content, ClientData, NoteId, ComingFor, TypeOfNote, routeLoc } =
    route.params;

  const LoadingRef = useRef();

  const [singleFile, setSingleFile] = useState(null);
  const [Content, setContent] = useState(null);
  const ActionSheetRef = useRef(null);
  const {deviceType}=useContext(DeviceContext)

  const UploadImage = async () => {
    try {
      const res = await launchImageLibrary({ mediaType: "photo" });
      const obj = {
        uri: res.assets[0].uri,
        name: res.assets[0].fileName,
        type: res.assets[0].type,
      };
      setSingleFile(obj);
      ActionSheetRef.current.hide();
    } catch (err) {
      ActionSheetRef.current.hide();
      Toast.show({
        type: "WarningToast",
        text1: "You have not selected any Image",
        text2: "Error Code : Pr-02",
      });
    }
  };

  const CaptureImageAndUpload = async () => {
    try {
      const res = await launchCamera({ mediaType: "photo" });
      const obj = {
        uri: res.assets[0].uri,
        name: res.assets[0].fileName,
        type: res.assets[0].type,
      };
      setSingleFile(obj);
      ActionSheetRef.current.hide();
    } catch (err) {
      ActionSheetRef.current.hide();
      Toast.show({
        type: "WarningToast",
        text1: "You have not selected any Image",
        text2: "Error Code : Pr-02",
      });
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

  useEffect(() => {
    console.log("Content", Content);
  }, [Content]);

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
      <Pressable
        style={styles.Cont}
        onPress={() => ActionSheetRef.current?.show()}
      >
        <View style={[styles.ImgIcon,deviceType==='tablet'&&{
          width: Wp(90),
          height: Wp(100),
        }]}>
          <Image source={DocIcon.img} style={[styles.Icon,deviceType==='tablet'&&{
          width: Wp(90),
          height: Wp(100),
        }]} />
          <Text style={[styles.UploadText,deviceType==='tablet'&&{
          fontSize:Wp(8)
        }]}>
            {singleFile === null
              ? "Tap to effortlessly upload Image (png,jpeg) documents"
              : singleFile.name}
          </Text>
        </View>
      </Pressable>
      <ActionSheet
        ref={ActionSheetRef}
        containerStyle={{
          height: Wp(150),
          borderRadius: Wp(50),
        }}
      >
        <Text style={styles.mainText}>Choose an Image</Text>
        <View style={styles.BottomCont}>
          <Pressable
            style={styles.SelectionBtn}
            onPress={() => {
              UploadImage();
            }}
          >
            <Text style={styles.BtnText}>Gallery</Text>
            <IconPhoto size={Wp(30)} color="white" />
          </Pressable>
          <Pressable
            style={styles.SelectionBtn}
            onPress={() => {
              CaptureImageAndUpload();
            }}
          >
            <Text style={styles.BtnText}>Camera</Text>
            <IconCamera size={Wp(30)} color="white" />
          </Pressable>
        </View>
      </ActionSheet>
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
  BottomCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Wp(20),
    paddingVertical: Wp(10),
    height: Wp(120),
  },
  SelectionBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: NoteAppcolor.Primary,
    paddingVertical: Wp(10),
    paddingHorizontal: Wp(10),
    borderRadius: Wp(12),
    width: Wp(150),
  },
  BtnText: {
    fontSize: Wp(20),
    fontFamily: Nunito(700),
    color: NoteAppcolor.White,
  },
  mainText: {
    fontSize: Wp(20),
    textAlign: "center",
    fontFamily: Nunito(700),
    marginTop: Wp(10),
    color: NoteAppcolor.Primary,
  },
});
