import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import { Nunito } from "@helper/FontWeight";
import { ChearfulLogo } from "@svg";
import LoginModel from "@models/LoginModel";
import { useDispatch } from "react-redux";
import { login } from "@app/features/authReducer/authReducer";
import LoginFunction from "./Functions/LoginFunction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {

  const Dispatch = useDispatch()
  const [pass, SetPass] = useState({
    Pass: true,
    icon: "eye",
  });
const [model, setModel] = useState(false);
  const showPass = () => {
    if (pass.Pass) {
      SetPass({
        Pass: false,
        icon: "eye-off",
      });
    } else {
      SetPass({
        Pass: true,
        icon: "eye",
      });
    }
  };

  const [User, setUser] = useState({email:'', password:''});

  const HandleLogin = async ()=>{
    const response =  await LoginFunction(User,Dispatch)
    if(response){
      navigation.push('PRACTITIONER_Home')
    }
    else{
      alert('Invalid Email or Password')
    }
  }



  return (
    <View style={styles.Container}>
      <LoginModel navigation={navigation} setVisible={setModel} visible={model}/>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={styles.FirstCont}>
          <View
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Animatable.View
              animation="fadeInDown"
              duration={2000}
              easing={"ease-in-out"}
            >
              <ChearfulLogo
                height={wp(30)}
                width={wp(70)}
                color={NoteAppcolor.Primary}
              />
            </Animatable.View>
          </View>
        </View>
        <View style={styles.SecondCont}>
          <View style={styles.MainTextCont}>
            <Text style={styles.MainTitle}>Welcome to Chearful!</Text>
            <Text style={styles.MainSubtitle}>
              Mental Health, Built Around You
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={[
                styles.form,
                {
                  borderRadius: Wp(8),
                  overflow: "hidden",
                  width: wp(85),
                  marginTop: Wp(20),
                  marginBottom: Wp(5),
                },
              ]}
            >
              <TextInput
                mode="flat"
                label="Email"
                placeholder="Enter Your Email Address"
                underlineColor={"#EFF3F2"}
                style={{
                  backgroundColor: "#EFF3F2",
                  height: Hp(40),
                  fontSize: Wp(14),
                }}
                underlineStyle={{ borderRadius: Wp(18) }}
                outlineStyle={{ borderRadius: Wp(18) }}
                onChangeText={(text) => setUser({...User, email:text})}
              />
            </View>
            <View
              style={[
                styles.form,
                {
                  borderRadius: Wp(8),
                  overflow: "hidden",
                  width: wp(85),
                  marginVertical: Wp(10),
                },
              ]}
            >
              <TextInput
                mode="flat"
                label="Password"
                placeholder="Enter Your Password"
                underlineColor={"#EFF3F2"}
                style={{
                  backgroundColor: "#EFF3F2",
                  height: Hp(40),
                  fontSize: Wp(14),
                }}
                underlineStyle={{ borderRadius: Wp(18) }}
                outlineStyle={{ borderRadius: Wp(18) }}
                secureTextEntry={pass.Pass}
                right={<TextInput.Icon icon={pass.icon} onPress={showPass} />}
                onChangeText={(text) => setUser({...User, password:text})}
              />
            </View>

            <TouchableOpacity onPress={HandleLogin}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
              </View>
            </TouchableOpacity>

            <Text
              style={styles.ForgetPassCont}
              onPress={() => {
                Linking.openURL("https://chearful.com/");
              }}
            >
              Forget Password?
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  FirstCont: {
    height: hp(38),

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  SecondCont: {
    height: hp(56),
    paddingHorizontal: Wp(16),

    paddingBottom: Hp(20),
  },
  InputBox: {
    backgroundColor: NoteAppcolor.Secondary,
    color: NoteAppcolor.White,
    borderRadius: Wp(40),
    paddingHorizontal: Wp(25),
    paddingBottom: Wp(8),
    marginBottom: Hp(20),
  },
  ForgetPassCont: {
    textAlign: "center",
    fontSize: FontSize(14),
    fontFamily: Nunito(700),
    color: NoteAppcolor.Primary,
    marginTop: Wp(15),
  },
  btn: {
    backgroundColor: NoteAppcolor.btnColor,
    width: wp(85),
    paddingVertical: Wp(15),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Wp(12),
    marginTop: Wp(20),
  },
  btnText: {
    color: "#fff",
    fontFamily: Nunito(700),
    fontSize: FontSize(16),
  },
  MainTitle: {
    fontFamily: Nunito(800),
    fontSize: FontSize(22),
    color: NoteAppcolor.Primary,
    textAlign: "center",
  },
  MainSubtitle: {
    fontFamily: Nunito(700),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
    textAlign: "center",
    marginTop: Wp(10),
  },
  MainTextCont: {
    marginBottom: Wp(20),
  },
});

// import React from 'react';
// import { Canvas } from '@benjeau/react-native-draw';

// export default () => <Canvas />;
