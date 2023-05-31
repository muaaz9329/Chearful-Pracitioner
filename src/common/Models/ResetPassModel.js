import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Modal, Portal } from "react-native-paper";
import Lottie from "lottie-react-native";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { useDispatch } from "react-redux";
import { ResetPasswordRequest } from "@app/features/Reset-Password-Reducers/ResetReducers";


/**
 * 
 * @param {navigation} react navigation props that is used to navigate between screens
 * @param {visible} state boolean value that is used to show and hide the modal 
 * @param {setVisible} state function that is used to set the state of visible model
 * @returns 
 */

const ResetPassModel = ({navigation,visible,setVisible}) => {
    
    const hideModal = () => {
      setVisible(false);
      navigation.navigate("Auth_login")
      Dispatch(ResetPasswordRequest())
    }
    const Dispatch = useDispatch()


    return (
      <Portal>
    
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <View style={styles.animationCont}>
            <Lottie
              source={require("./animation/Success.json")}
              autoPlay
              loop={false}
              style={[styles.animationSize]}
            />
          </View>
  
          <View style={styles.content}>
            <Text style={styles.contentText}>
            Your password reset link has been sent to your email address
            </Text>
            <View style={styles.btnCont}>
              <TouchableOpacity style={[styles.btnStyles, styles.DeleteBtn]} onPress={()=>{
                hideModal()
                
                navigation.navigate("Auth_login")
              }}>
                <Text style={styles.btnText}>Ok</Text>
              </TouchableOpacity>
            
            </View>
          </View>
        </Modal>
      </Portal>
    );
}

export default ResetPassModel

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
        width: Wp(180),
        height: Wp(180),
      },
      animationCont: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      contentText: {
        fontSize: FontSize(16),
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
        fontSize: FontSize(20),
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
      }
})