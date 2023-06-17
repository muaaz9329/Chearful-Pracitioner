import React, { useState } from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  View,
  StyleSheet,
  Pressable,
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
import Header from "./Header";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import DeleteModel from "@models/DeleteModel";

import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Editor = ({ route, navigation }) => {
  const { mode, content, ClientData } = route.params;
  // mode = edit or view , content = content of the note ,
  // ClientData = Data of the client coming from ./Session/Components/CardsDesign.js ->
  // ../NotesPreview.js -> ./Components/NotesCard.js -> Editor.js
  const [Mode, setmode] = useState(mode);
  const [model, setModel] = useState(false);
  const richText = React.useRef();
  console.log(navigation);

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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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
        />
        <Header navigation={navigation} mode={Mode} data={ClientData} />
        <ScrollView>
          <RichEditor
            ref={richText}
            onChange={(descriptionText) => {
              console.log(descriptionText);
            }}
            disabled={Mode === "edit" ? false : true}
            initialContentHTML={content}
            firstFocusEnd
            initialFocus
            initialHeight={hp(50)}
          />
        </ScrollView>

        {Mode === "edit" && (
          <RichToolbar
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

              actions.checkboxList,
              actions.undo,
              actions.redo,
              Platform.OS == "android" ? actions.insertImage : null,
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
            iconSize={Wp(27)}
          />
        )}

        {Mode === "view" && (
          <View style={styles.editBar}>
            <Pressable
              style={[styles.Btn, { backgroundColor: "#FF8383" }]}
              onPress={() => {
                setModel(!model);
              }}
            >
              <IconTrash size={Wp(30)} color={"white"} />
            </Pressable>
            <Pressable
              style={[styles.Btn]}
              onPress={() => {
                setmode("edit");
              }}
            >
              <IconPencil size={Wp(30)} color={NoteAppcolor.Primary} />
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
});
