import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  View,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import ImagePicker from "react-native-image-crop-picker";
import ImgToBase64 from "react-native-image-base64";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Hp, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { IconPencil, IconTrash } from "tabler-icons-react-native";
import Header from "./Components/Header";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import DeleteModel from "@models/DeleteModel";

import { SafeAreaView } from "react-native-safe-area-context";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
const Editor = ({ route, navigation }) => {
  const { mode, content, ClientData, NoteId, ComingFor, TypeOfNote , routeLoc } =
    route.params;
  // mode = edit or view , content = content of the note ,
  // ClientData = Data of the client coming from ./Session/Components/CardsDesign.js ->
  // ../NotesPreview.js -> ./Components/NotesCard.js -> Editor.js
  console.log("RouteLoc:",routeLoc)
  const [Mode, setmode] = useState(mode);
  const [Content, setContent] = useState(content);
  const IntailContent = useRef(content);
  const [model, setModel] = useState(false);
  const richText = React.useRef();
  const ref = React.useRef();
  const LoadingRef = useRef();
  const {deviceType}=useContext(DeviceContext)
  console.log("ClinetData:", ClientData);

  // This function is used to open the image picker and choose an image.
  const PutImage = () => {
    // Open the image picker with specified width, height and cropping option.
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      // If an image is selected, log the image object to the console.
      console.log("Imagemime", image);
      // Call the ConvertToBase64 function and pass the selected image object as an argument.
      ConvertToBase64(image);
    });
  };

  // This function is used to convert the selected image to base64 format and insert it into the rich text editor.
  const ConvertToBase64 = (image) => {
    // Convert the image to base64 format using the ImgToBase64 library.
    ImgToBase64.getBase64String(image.path)
      .then((base64String) => {
        // Create a string containing the data URL with the base64-encoded image string.
        const str = `data:${image.mime};base64,${base64String}`;
        // Insert the image into the rich text editor using the reference of the editor's component.
        richText.current.insertImage(str);
      })
      .catch((err) => console.log(err));
  };

  const keyboardDismiss = () => {
    richText.current.blurContentEditor()
  }

  useEffect(() => {
    richText.current.focusContentEditor();
  },[Mode])



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <LoadingScreen type={"loader"} ref={LoadingRef} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingBottom: Platform.OS == "android" ? null : Wp(20),
        }}
        edges={["top", "left", "right"]}
      >
        <DeleteModel
          navigation={navigation}
          visible={model}
          setVisible={setModel}
          ClientData={ClientData}
          NoteId={NoteId}
        />
        <Header
          navigation={navigation}
          mode={Mode}
          data={ClientData}
          NoteId={NoteId}
          ComingFor={ComingFor}
          TypeOfNote={TypeOfNote}
          Content={Content}
          keyboardDismiss={keyboardDismiss}
          IntailContent={IntailContent}
          LoadingRef={LoadingRef}
          routeLoc={routeLoc}
        />
        <ScrollView>
         
          <RichEditor
            ref={richText}
            onChange={(descriptionText) => {
              setContent(descriptionText);
            }}
            
            disabled={Mode === "edit" ? false : true}
            initialContentHTML={Content}
            initialFocus
            initialHeight={hp(50)}
            firstFocusEnd={true}
           
          />

        </ScrollView>

        {Mode === "edit" && (
          <RichToolbar
          ref={ref}
            editor={richText}
            style={styles.toolbar}
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.keyboard,
              actions.setStrikethrough,
              actions.setUnderline,

              
              actions.undo,
              actions.redo,
              
            ]}
            iconMap={{
              [actions.heading1]: ({ tintColor }) => (
                <Text style={[{ color: tintColor }]}>H1</Text>
              ),
            }}
            onPressAddImage={() => {
              PutImage();
            }}
            selectedIconTint={NoteAppcolor.Primary}
            iconSize={deviceType==='mobile'?Wp(27):Wp(17)}
            
           
          />
        )}

        {Mode === "view" && (
          <View style={[styles.editBar]}>
            <Pressable
              style={[styles.Btn, { backgroundColor: "#FF8383" }, deviceType==='tablet'&&styles.Btn_Tablet]}
              onPress={() => {
                setModel(!model);
              }}
            >
              <IconTrash size={deviceType==='mobile'?Wp(30):Wp(20)} color={"white"} />
            </Pressable>
            <Pressable
              style={[styles.Btn,deviceType==='tablet'&&styles.Btn_Tablet]}
              onPress={() => {
                setmode("edit");
              }}
            >
              <IconPencil size={deviceType==='mobile'?Wp(30):Wp(20)} color={NoteAppcolor.Primary} />
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Editor;

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: NoteAppcolor.Secondary,
    height: Wp(33),
  },
  Btn: {
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(12),
    backgroundColor: NoteAppcolor.Secondary,
    borderRadius: Wp(10),
  },
  editBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    paddingHorizontal: Wp(16),
    bottom: 0,
    marginBottom: Wp(15),
  },
  Btn_Tablet: {
    paddingVertical: Wp(8),
    paddingHorizontal: Wp(8),
  },
});
