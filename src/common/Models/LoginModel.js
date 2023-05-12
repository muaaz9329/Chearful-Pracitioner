import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Modal, Portal } from "react-native-paper";
import Lottie from "lottie-react-native";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";
const LoginModel = ({navigation,visible,setVisible}) => {
 

  const hideModal = () => setVisible(false);
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.content}>
            <Text style={styles.contentText}>
             Login As 
            </Text>
            <View style={styles.btnCont}>
              <TouchableOpacity style={[styles.btnStyles, styles.DeleteBtn]} onPress={()=>{
                hideModal()
                navigation.navigate("PRACTITIONER_Home")
              }}>
                <Text style={styles.btnText}>Practitioner</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnStyles, styles.DeleteBtn]} onPress={()=>{
                hideModal()
                navigation.navigate("CLIENT_Home")
              }}>
                <Text style={[styles.btnText]}>Client</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnStyles, styles.DeleteBtn,{marginTop:Wp(20)}]} onPress={()=>{
                hideModal()
                navigation.navigate("Temp")
              }}>
                <Text style={[styles.btnText,{textAlign:'center',}]}>New Drawing Module</Text>
              </TouchableOpacity>
            </View>
          </View>


      </Modal>
    </Portal>
  );
};

export default LoginModel;

const styles = StyleSheet.create({
    containerStyle: {
        width: Wp(363),
        alignSelf: "center",
        backgroundColor: "white",
        height: Wp(300),
        justifyContent: "flex-start",
        paddingVertical: Wp(15),
        borderRadius: Wp(30),
        paddingHorizontal: Wp(10),
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
        marginTop:Wp(30),
        flexWrap:"wrap",
      }
});
