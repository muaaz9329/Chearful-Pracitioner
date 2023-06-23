import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Modal, Portal } from "react-native-paper";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import Lottie from "lottie-react-native";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { ApiServices } from "@app/services/Apiservice";
import LoadingAndSuccess from "../animatedComponents/Success/LoadingAndSuccess";
import { useDispatch } from "react-redux";
import { RefreshSessionNotes } from "@app/features/SessionNotes/SessionNotes";
import { UpdateHasDrawn } from "@app/Library/Drawic/utils/features/Brush-Control/BrushControl";
const SaveModel = ({
  visible,
  setVisible,
  navigation,
  ComingFor,
  ClientData,
  NoteId,
  TypeOfNote,
  File,
  Content,
  IntailContent,
}) => {
  const hideModal = () => setVisible(false);
  const [Loading, setLoading] = useState(false);
  const AnimationControl = React.useRef();
  const Dispatch = useDispatch();
  const HandleApiCall = async () => {
    // this is the function that is called when the user presses the save button
    setLoading(true); // set loading to true to show the loading animation
    if (
      ComingFor.toLowerCase() == "upload" &&
      TypeOfNote.toLowerCase() == "text"
    ) {
      //* upload text note
      console.log("upload text");
      const response = await ApiServices.Post_New_Text_Note(
        ClientData.Client_ID,
        ClientData.Session_ID,
        "Test Title(in proces of building this Field)",
        Content
      ); // this is the api call to upload the text note
      if (response) {
        AnimationControl.current.LoadingEnds();
        Dispatch(RefreshSessionNotes(true)); // State to make THe Session Screen Refresh
        setTimeout(() => {
          setLoading(false);
          hideModal();
          navigation.navigate("Prac_NotesPreview");
        }, 1000); // this is the function that is called when Api call is successfull and the loading animation is finished
        IntailContent.current = Content; // setting the intial content to the current content so that if the user presses the back button then the model will not be shown
      }
    } else if (
      ComingFor.toLowerCase() == "update" &&
      TypeOfNote.toLowerCase() == "text"
    ) {
      //* update text note
      const response = await ApiServices.Update_Note_Content_Text(
        ClientData.Client_ID,
        ClientData.Session_ID,
        NoteId,
        "Updated Title(in proces of building this Field)",
        Content
      ); // this is the api call to update the text note
      if (response) {
        AnimationControl.current.LoadingEnds();
        Dispatch(RefreshSessionNotes(true)); // State to make THe Session Screen Refresh
        setTimeout(() => {
          setLoading(false);
          hideModal();
        }, 1000);
        IntailContent.current = Content; // setting the intial content to the current content so that if the user presses the back button then the model will not be shown
      } // this is the function that is called when Api call is successfull and the loading animation is finished
    } else if (
      ComingFor.toLowerCase() === "update" &&
      TypeOfNote.toLowerCase() === "canvas"
    ) {
      //* update canvas note

      const response = await ApiServices.Update_Canvas_Content(
        ClientData.Client_ID,
        ClientData.Session_ID,
        Content,
        NoteId,
        `data:image/image/png;base64,${File}`
      );
      if (response) {
        AnimationControl.current.LoadingEnds();
        Dispatch(RefreshSessionNotes(true)); // State to make THe Session Screen Refresh
        Dispatch(UpdateHasDrawn(false)); // State to tell that user have not drawn anything after saving so move with out showing the model
        setTimeout(() => {
          setLoading(false);
          hideModal();
        }, 1000);
      }
    } else if (
      ComingFor.toLowerCase() === "upload" &&
      TypeOfNote.toLowerCase() === "canvas"
    ) {
      //* upload canvas note
      const response = await ApiServices.Post_Canvas_Content(
        ClientData.Client_ID,
        ClientData.Session_ID,
        `data:image/jpeg;base64,${File}`,
        Content
      );
      if (response) {
        AnimationControl.current.LoadingEnds();
        Dispatch(RefreshSessionNotes(true)); // State to make THe Session Screen Refresh
        Dispatch(UpdateHasDrawn(false)); // State to tell that user have not drawn anything after saving so move with out showing the model
        setTimeout(() => {
          setLoading(false);
          hideModal();
          navigation.navigate("Prac_NotesPreview");
        }, 1000);
      }
    }
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.animationCont}>
          {Loading ? (
            <LoadingAndSuccess ref={AnimationControl} />
          ) : (
            <Lottie
              source={require("./animation/Save.json")}
              autoPlay
              style={[styles.animationSize]}
            />
          )}
        </View>

        <View style={styles.content}>
          <Text style={styles.contentText}>
            Are You Sure You Want To Save This Document?
          </Text>
          <View style={styles.btnCont}>
            <TouchableOpacity
              style={[styles.btnStyles, styles.DeleteBtn]}
              onPress={() => {
                // hideModal();
                // navigation.goBack("Prac_Session");

                HandleApiCall();
              }}
            >
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnStyles, styles.btnCancel]}
              onPress={() => {
                hideModal();
              }}
            >
              <Text style={[styles.btnText, styles.cancelText]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default SaveModel;

const styles = StyleSheet.create({
  containerStyle: {
    width: Wp(363),
    alignSelf: "center",
    backgroundColor: "white",
    height: Wp(363),
    justifyContent: "flex-start",
    paddingVertical: Wp(15),
    borderRadius: Wp(30),
    paddingHorizontal: Wp(10),
  },
  animationSize: {
    width: Wp(160),
    height: Wp(160),
  },
  animationCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: FontSize(22),
    textAlign: "center",
    paddingHorizontal: Wp(40),
    fontFamily: Mulish(700),
    color: "#1D1A0E",
  },
  btnStyles: {
    width: Wp(135),
    height: Wp(55),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: NoteAppcolor.Primary,
    borderRadius: Wp(12),
  },
  btnText: {
    fontFamily: Mulish(700),
    fontSize: FontSize(14),
    color: "white",
  },
  btnCancel: {
    backgroundColor: "white",
    borderWidth: Wp(1),
    borderColor: NoteAppcolor.Primary,
  },
  cancelText: {
    color: NoteAppcolor.Primary,
  },

  btnCont: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Wp(15),
  },
});
