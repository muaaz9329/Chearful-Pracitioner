import { Pressable, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Modal, Portal } from "react-native-paper";
import Lottie from "lottie-react-native";

import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";

const NotesType = ({visible,setVisible , navigation,data}) => {
  

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.titleCont}>
          <Text style={styles.title}>Choose The Type</Text>
        </View>

        <View style={styles.animationCont}>
          <View style={styles.animationDiv}>
            <Lottie
              source={require("./animation/Typing.json")}
              autoPlay
              loop
              style={styles.animationSize}
            />
            <TouchableOpacity style={styles.btnStyles} onPress={()=>{
                hideModal()
                navigation.push("Prac_NotesEditor",{mode:"edit", ClientData:data})
            }}>
              <Text style={styles.btnText}>Typing</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.animationDiv}>
            <Lottie
              source={require("./animation/writing.json")}
              autoPlay
              loop
              style={styles.animationSize}
            />
            <TouchableOpacity style={styles.btnStyles} onPress={()=>{
                 hideModal()
                navigation.push("Prac_WrittenEditor", {mode:"edit" , ClientData:data})
            }}>
              <Text style={styles.btnText}>Written</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default NotesType;

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
  title: {
    textAlign: "center",
    fontSize: FontSize(24),
    fontFamily: Mulish(700),
    color: "#1D1A0E",
  },
  animationSize: {
    width: Wp(160),
    height: Wp(160),
  },
  animationCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:Wp(20)
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
  animationDiv: {
    justifyContent: "center",
    alignItems: "center",
  },
});
