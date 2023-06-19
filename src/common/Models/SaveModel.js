import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Modal, Portal } from "react-native-paper";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import Lottie from "lottie-react-native";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { ApiServices } from "@app/services/Apiservice";
import LoadingAndSuccess from "../animatedComponents/Success/LoadingAndSuccess";
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
}) => {
  const hideModal = () => setVisible(false);
  console.log(ComingFor, ClientData, NoteId, TypeOfNote, File, Content);
  const [Loading, setLoading] = useState(false);
  const AnimationControl = React.useRef();

  const HandleApiCall = async () => {
    setLoading(true);
    if (
      ComingFor.toLowerCase() == "upload" &&
      TypeOfNote.toLowerCase() == "text"
    ) {
      // upload text note
      console.log("upload text");
      const response = await ApiServices.Post_New_Text_Note(
        ClientData.Client_ID,
        ClientData.Session_ID,
        "Test Title(in proces of building this Field)",
        Content
      );
      if (response) {
        AnimationControl.current.LoadingEnds()
        setTimeout(() => {
          setLoading(false);
          hideModal();
          navigation.goBack("Prac_Session");
        },1500)
      }
    } else if (ComingFor.toLowerCase() == "update") {
      console.log("update");
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
