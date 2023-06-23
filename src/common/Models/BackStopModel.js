import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { Modal, Portal } from "react-native-paper";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import Lottie from "lottie-react-native";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { useDispatch } from "react-redux";
import { UpdateHasDrawn } from "@app/Library/Drawic/utils/features/Brush-Control/BrushControl";

const BackStopModel = ({visible , setVisible , navigation}) => {
    

    const dispatch = useDispatch()

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
              source={require("./animation/Warning.json")}
              autoPlay
              style={[styles.animationSize]}
            />
          </View>
  
          <View style={styles.content}>
            <Text style={styles.contentText}>
              Are You Sure You Want To Go Back?
            </Text>
            <View style={styles.btnCont}>
              <TouchableOpacity style={[styles.btnStyles, styles.DeleteBtn]} onPress={()=>{
                hideModal()
                dispatch(UpdateHasDrawn(false)) // for canvas to know that the user has not drawn anything for next time
                navigation.goBack()
              }}>
                <Text style={styles.btnText}>Yes</Text>
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
}

export default BackStopModel

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
    
    btnCont:{
      flexDirection:"row",
      justifyContent:"space-around",
      marginTop:Wp(15)
    },
    DeleteBtn:{
        backgroundColor:"#FF8383"
    }
  });