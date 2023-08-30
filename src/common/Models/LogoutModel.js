import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Modal, Portal } from "react-native-paper";
import Lottie from "lottie-react-native";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { logout } from "@app/features/authReducer/authReducer";
import { StackActions , NavigationAction } from "@react-navigation/native";
import { setLogOut } from "@app/features/utils-States/utilsReducers";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
/**
 * 
 * @param {navigation} react navigation props that is used to navigate between screens
 * @param {visible} state boolean value that is used to show and hide the modal 
 * @param {setVisible} state function that is used to set the state of visible model
 * @returns 
 */

const LogoutModel = ({navigation,visible,setVisible}) => {
    
    const hideModal = () => setVisible(false);
    const Dispatch = useDispatch();
    const {deviceType}=useContext(DeviceContext)

    const RemoveToken = async () => {
      await AsyncStorage.removeItem("USER_accessToken");
      Dispatch(logout())
      Dispatch(setLogOut(true))
    }
  
    return (
      <Portal>
    
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={[styles.containerStyle, deviceType==='tablet'&&styles.containerStyle_Tablet]}
        >
          <View style={styles.animationCont}>
            <Lottie
              source={require("./animation/Logout.json")}
              autoPlay
              style={[styles.animationSize, deviceType==='tablet'&&styles.animationSize_tablet]}
            />
          </View>
  
          <View style={styles.content}>
            <Text style={[styles.contentText, deviceType==='tablet'&&{
              fontSize:FontSize(12)
            }]}>
              Are You Sure You Want To Logout?
            </Text>
            <View style={styles.btnCont}>
              <TouchableOpacity style={[styles.btnStyles, styles.DeleteBtn , deviceType==='tablet' && styles.btnStyle_tablet]} onPress={()=>{
                hideModal()
                RemoveToken()
                
              }}>
                <Text style={[styles.btnText,deviceType=='tablet'&&{
                  fontSize:FontSize(10)
                }]}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnStyles, styles.btnCancel , deviceType ==='tablet'&& styles.btnStyle_tablet]} onPress={()=>{
                hideModal()
              }}>
                <Text style={[styles.btnText, styles.cancelText, deviceType==='tablet'&&{
                  fontSize:Wp(10)
                }]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Portal>
    );
}

export default LogoutModel

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
      containerStyle_Tablet: {
        width: Wp(200),
        alignSelf: "center",
        backgroundColor: "white",
        height: Wp(200),
        justifyContent: "space-between",
        paddingVertical: Wp(8),
        borderRadius: Wp(18),
        paddingHorizontal: Wp(5),
      },
      animationSize_tablet: {
        width: Wp(80),
        height: Wp(80),
      },
      btnStyle_tablet: {
        width: Wp(70),
        height: Wp(35),
        borderRadius: Wp(8),
      },
})