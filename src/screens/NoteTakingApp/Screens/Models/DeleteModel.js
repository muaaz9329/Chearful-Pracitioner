import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Modal, Portal } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontSize, Wp } from "../../../../helper/CustomResponsive";
import { Mulish } from "../../../../helper/FontWeight";
import Lottie from "lottie-react-native";
import { NoteAppcolor } from "../../constants/NoteAppcolor";
const DeleteModel = ({navigation,visible,setVisible}) => {


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.animationCont}>
          <Lottie
            source={require("./animation/Delete2.json")}
            autoPlay
            style={[styles.animationSize]}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.contentText}>
            Are You Sure You Want To Delete This Document?
          </Text>
          <View style={styles.btnCont}>
            <TouchableOpacity style={[styles.btnStyles, styles.DeleteBtn]} onPress={()=>{
              hideModal()
              navigation.goBack()
            }}>
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnStyles, styles.btnCancel]} onPress={()=>{
              hideModal()
            }}>
              <Text style={[styles.btnText, styles.cancelText]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default DeleteModel;

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
  DeleteBtn: {
    backgroundColor: "#FF8383",
  },
  btnCont:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:Wp(15)
  }
});
