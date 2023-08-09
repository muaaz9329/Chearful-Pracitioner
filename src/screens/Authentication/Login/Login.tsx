import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Platform,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { login } from "@app/features/authReducer/authReducer";
import LoginBtn from "./components/LoginBtn";
import { ColorWithopacity } from "@app/helper/customFunction";
import Toast from "react-native-toast-message";
import { NavigationHelpers } from "@react-navigation/native";
import { DeviceContext } from "../../../context/Device-Type/DeviceTypeProvider";

interface props {
  navigation: NavigationHelpers<any, any>;
}

const Login = ({ navigation }: props) => {
  //TODO : State Types Redux needed to be added
  const { Success, error } = useSelector((state: any) => state.auth); // consist of State that tells Weather the user is logged in or not , True means logged in , False means not logged in
  const Dispatch = useDispatch();

  const [InputBoxBorders, setInputBoxBorders] = useState<string>("#EFF3F2");
  const [validation, setValidation] = useState({
    state: false,
    error: "",
  });

  const { deviceType } = useContext(DeviceContext);

  const [pass, SetPass] = useState({
    Pass: true,
    icon: "eye-off",
  });

  const showPass = () => {
    if (pass.Pass) {
      SetPass({
        Pass: false,
        icon: "eye",
      });
    } else {
      SetPass({
        Pass: true,
        icon: "eye-off",
      });
    }
  };

  const [User, setUser] = useState({ email: "", password: "" });

  const HandleLogin = async () => {
    //* Validation of User is Happening here
    if (User.email == "" && User.password == "") {
      setValidation({
        state: true,
        error: "Please Enter Email and Password",
      });
    } else if (User.email == "") {
      setValidation({
        state: true,
        error: "Please Enter Your Email Address",
      });
    } else if (User.password == "") {
      setValidation({
        state: true,
        error: "Please Enter Your Password",
      });
    } else {
      //* Authentication of user is happening here
      // @ts-ignore
      Dispatch(login(User));
    }

    // email and Password is Dispatched to Thunk Function that makes a request to the server and returns a response
    // you can save the response in a variable other wise it Updates the State of the Reducer name AuthReducer
    // Authreducer will Save the Data in Async Storage and will update the State of Success to True
    // ExtraReducers in the AuthReducer can also be used as it consist of the State of the Request
    // test email:"hammad.khan@beaconhousetechnology.com" , password:"12345678@"
  };

  useEffect(() => {
    if (Success) {
      navigation.navigate("PRACTITIONER_Home");
    }
  }, [Success]); // if Success is True then it will navigate to the Practitioner Home Screen

  useEffect(() => {
    if (error.status) {
      setInputBoxBorders(NoteAppcolor.Error);
      setValidation({
        state: false,
        error: "",
      });
      console.log(error);
    } else {
      setInputBoxBorders("#EFF3F2");
    }
  }, [error]); // use to control the style of input box border when error occurs

  useEffect(() => {
    if (validation.state) {
      Toast.show({
        type: "ErrorToast",
        text1: validation.error,
      });
    } else if (error.status) {
      Toast.show({
        type: "ErrorToast",
        text1: "Please Enter Correct Email or Password",
      });
    }
  }, [validation, error]); // used to show the toast message when error occurs

  return (
    <View style={styles.Container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View
          style={[
            styles.FirstCont,
            deviceType === "tablet" && { height: hp(34) },
          ]}
        >
          <View
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Animatable.View
              animation="fadeInDown"
              duration={2000}
              easing={"ease-in-out"}
            >
              <ChearfulLogo
                height={deviceType === "mobile" ? wp(30) : wp(20)}
                width={deviceType === "mobile" ? wp(70) : wp(50)}
                color={NoteAppcolor.Primary}
              />
            </Animatable.View>
          </View>
        </View>
        <View style={styles.SecondCont}>
          <View style={styles.MainTextCont}>
            <Text
              style={[
                styles.MainTitle,
                deviceType === "tablet" && { fontSize: FontSize(16) },
              ]}
            >
              Welcome to Chearful!
            </Text>
            <Text
              style={[
                styles.MainSubtitle,
                deviceType === "tablet" && { fontSize: FontSize(10) },
              ]}
            >
              Mental Health Built Around You
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View
              style={[
                {
                  borderRadius: Wp(8),
                  overflow: "hidden",
                  width: wp(85),
                  marginTop: Wp(20),
                  marginBottom: Wp(5),
                  borderColor: InputBoxBorders,
                  borderWidth: 2,
                },
                deviceType === "tablet" && {
                  width: wp(70),
                },
              ]}
            >
              <TextInput
                mode="flat"
                label="Email"
                placeholder="Enter Your Email Address"
                placeholderTextColor={ColorWithopacity(
                  NoteAppcolor.Primary,
                  0.6
                )}
                underlineColor={"#EFF3F2"}
                style={[
                  {
                    backgroundColor: "#EFF3F2",
                    height: Platform.OS == "ios" ? Hp(45) : Hp(50),
                    fontSize: Wp(14),
                  },
                  deviceType === "tablet" && {
                    height: Hp(38),
                    width: wp(70),
                    fontSize: Wp(10),
                  },
                ]}
                underlineStyle={{ borderRadius: Wp(18) }}
                outlineStyle={{ borderRadius: Wp(18) }}
                onChangeText={(text) => setUser({ ...User, email: text })}
                accessibilityLabelledBy={undefined}
                accessibilityLanguage={undefined}
              />
            </View>
            <View
              style={[
                {
                  borderRadius: Wp(8),
                  overflow: "hidden",
                  width: wp(85),
                  marginVertical: Wp(10),
                  borderColor: InputBoxBorders,
                  borderWidth: 2,
                },
                deviceType === "tablet" && {
                  width: wp(70),
                },
              ]}
            >
              <TextInput
                mode="flat"
                label="Password"
                placeholder="Enter Your Password"
                underlineColor={"#EFF3F2"}
                placeholderTextColor={ColorWithopacity(
                  NoteAppcolor.Primary,
                  0.6
                )}
                style={[
                  {
                    backgroundColor: "#EFF3F2",
                    height: Platform.OS == "ios" ? Hp(45) : Hp(50),
                    fontSize: Wp(14),
                  },
                  deviceType === "tablet" && {
                    height: Hp(38),
                    width: wp(70),
                    fontSize: Wp(10),
                  },
                ]}
                underlineStyle={{ borderRadius: Wp(18) }}
                outlineStyle={{ borderRadius: Wp(18) }}
                secureTextEntry={pass.Pass}
                right={
                  <TextInput.Icon
                    icon={pass.icon}
                    onPress={showPass}
                    accessibilityLabelledBy={undefined}
                    accessibilityLanguage={undefined}
                    size={deviceType === "tablet" ? Wp(12) : undefined}
                  />
                }
                onChangeText={(text) => setUser({ ...User, password: text })}
                accessibilityLabelledBy={undefined}
                accessibilityLanguage={undefined}
              />
            </View>
            <LoginBtn HandleLogin={HandleLogin} Validation={validation} />

            <Text
              style={[
                styles.ForgetPassCont,
                deviceType === "tablet" && { fontSize: FontSize(10) },
              ]}
              onPress={() => {
                navigation.navigate("Auth_ResetPass");
              }}
            >
              Forgot Password?
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.signupCont}>
        <Pressable style={[styles.Signupbtn,deviceType==='tablet'&& styles.SignupbtnTablet ]}
        onPress={()=>{
          Linking.openURL('https://chearful.com/practitioner-signup')
        }}
        >
          <Text style={[styles.btnText , deviceType==='tablet'&& styles.btnText_tablet]}>
          Don’t have account? Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  signupCont: {
    alignSelf:"center",

    
    position:'absolute',
    bottom:Wp(35)
  },
  Signupbtn:{
    backgroundColor: NoteAppcolor.OffWhiteCont,
    width: wp(85),
    paddingVertical: Wp(15),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Wp(16),
    marginTop: Wp(20),

    height: Wp(56),
  },
  btnText:{
    fontFamily: Nunito(400),
    fontSize: Wp(16),
    color: NoteAppcolor.Primary,
  },
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
  Errorbox: {
    height: Hp(10),
    alignItems: "center",
    justifyContent: "center",
  },
  Errortext: {
    color: NoteAppcolor.Error,
    fontFamily: Nunito(700),
    fontSize: FontSize(10),
    textAlign: "center",
  },
  SignupbtnTablet:{
    width: wp(70),
        height: Hp(45),
        borderRadius: Wp(10),
        paddingVertical: Wp(0),
  },
  btnText_tablet:{
    fontSize: FontSize(10),
    
    
  }
});
