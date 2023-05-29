import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Nunito } from "@app/helper/FontWeight";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";

const LoginBtn = ({ HandleLogin }) => {

    

    const { loading ,Success , error} = useSelector((state) => state.auth); // consist of State that tells Weather the user is logged in or not , have a loading state and a error state and a success state

    // this is whole animation of the Login Button
    const LoginTextAnimation =  useRef(new Animated.Value(0)).current;
    const LoginIndicator = useRef(new Animated.Value(200)).current;
    const LoginAnimation = () => {
        Animated.timing(LoginTextAnimation, {
            toValue: -200,
            duration: 700,
           
            useNativeDriver: false,
        }).start()
        Animated.timing(LoginIndicator, {
            toValue:0,
            duration: 700,
            useNativeDriver: false,
        }).start()
    } // this function will be called when the user is logged in and the Login Button will be animated
    const Not_Able_To_Login = () => {
        Animated.timing(LoginTextAnimation, {
            toValue: 0,
            duration: 700,
            useNativeDriver: false,
        }).start()
        Animated.timing(LoginIndicator, {
            toValue: 200,
            duration: 700,
            useNativeDriver: false,
        }).start()
    } // this function will be called when the user is not logged in for not providing proper value and the Login Button will be animated





    useEffect(() => {
 
        if(Success==false && loading==false && error.status==true){
            Not_Able_To_Login()
        }

    },[Success , loading , error])



  return (
    <TouchableOpacity onPress={()=> {
        
        LoginAnimation();
        setTimeout(()=>{HandleLogin()},1000)} }>
      <View style={styles.btn}>
        <View style={styles.btnCont}>
        <Animated.Text style={[styles.btnText,{transform:[
            {translateX:LoginTextAnimation},
        ]  ,position:'absolute' }]}>Login</Animated.Text>
        <Animated.View style={{transform:[{translateX:LoginIndicator}]}}>
        <ActivityIndicator color="#fff" size="small" />
        </Animated.View>
         
        </View>
       
      </View>
    </TouchableOpacity>
  );
};

export default LoginBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: NoteAppcolor.btnColor,
    width: widthPercentageToDP(85),
    paddingVertical: Wp(15),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Wp(12),
    marginTop: Wp(20),
  
    height:Wp(43)
  },
  btnText: {
    color: "#fff",
    fontFamily: Nunito(700),
    fontSize: FontSize(16),
    
  },
  btnCont:{
    height:Wp(25),

    justifyContent:'center',
    alignItems:'center',
    position:'relative',
  }
});
