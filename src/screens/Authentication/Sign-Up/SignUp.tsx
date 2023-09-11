import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@app/common/components/Header";
import { ChevronLeft } from "@app/svgs/Index";
import { Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { IconComponent } from "@app/types";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

import MobileView from "./Views/MobileView";
import TabletView from "./Views/TabletView";
import { useDispatch, useSelector } from "react-redux";
import {
  SignUpState,
  setMoveNextSlide,
  setSignUpDataValid,
  setSignUpLoading,
} from "@app/features/sign-up/sign-up-reducers";
import { countries } from "@app/common/Module/country/countries";
import { findEmptyProperties } from "@app/helper/customFunction";
import Toast from "react-native-toast-message";
import { ActivityIndicator } from "react-native-paper";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import KeyboardDismiss from "@app/common/components/KeyboardDismiss";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export type SignUpFunc = (text: string, name: string) => void;

function validateInput(firstName:string, lastName:string, email:string , password:string ) {
  const firstNameRegex = /^[A-Z][a-z]*$/;
  const lastNameRegex = /^[A-Z][a-zA-Z\s]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{8,}$/;
  const phoneRegex = /^\d+$/
  const isValidFirstName = firstNameRegex.test(firstName);
  const isValidLastName = lastNameRegex.test(lastName);
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);
 
  return {
    isValidFirstName,
    isValidLastName,
    isValidEmail,
    isValidPassword, 
  };
}

const SignUp = () => {
  const { deviceType } = useContext(DeviceContext);
  const [countryFlag, setcountryFlag] = useState();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    countryCode: countries[0].dail_code,
    countryName: countries[0].name,
    Dob: "",
    gender: "",
    lisenseAgreement: "",
  });

  const handleForm = (text: string, name: string) => {
    setUserInfo({ ...userInfo, [name]: text });
  };

  const { isDataValid, loading }: SignUpState = useSelector(
    (state: any) => state.signUp
  );

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  




  useEffect(() => {
    if (isDataValid) {
      const EmptyFields = findEmptyProperties(userInfo);
      const validation = validateInput(userInfo.firstName, userInfo.lastName, userInfo.email , userInfo.password);
      if (EmptyFields.length > 0) {
        Toast.show({
          type: "ErrorToast",
          text1: "Please fill all the fields in order to proceed",
        });
        dispatch(setSignUpDataValid(false));
      } 
      else if(!validation.isValidFirstName){

        Toast.show({
          type: "ErrorToast",
          text1: "Please enter a valid first name",
        });
        dispatch(setSignUpDataValid(false));

      }
      else if(!validation.isValidLastName){
          
          Toast.show({
            type: "ErrorToast",
            text1: "Please enter a valid last name",
          });
          dispatch(setSignUpDataValid(false));
  
      }
      else if(!validation.isValidEmail){
          
          Toast.show({
            type: "ErrorToast",
            text1: "Please enter a valid email",
          });
          dispatch(setSignUpDataValid(false));
  
      }
      else if(!validation.isValidPassword){
            
            Toast.show({
              type: "ErrorToast",
              text1: "Please enter a valid 8 characters password",
            });
            dispatch(setSignUpDataValid(false));
      }
      
      else {
        dispatch(setSignUpLoading(true));

        setTimeout(() => {
          dispatch(setSignUpLoading(false));
        }, 2000); //fakeApicall

        dispatch(setMoveNextSlide(true)); // telling to mopve to next slide
      }
    }
  }, [isDataValid]); // whole form validation is bring done here , if all the fields are filled then it will move to next slide

  return (
    <SafeAreaView edges={["top"]} style={styles.Body}>
      {loading && (
        <View
          style={styles.ActivityIndicator}
        >
          <ActivityIndicator size={"large"} color={NoteAppcolor.Primary} />
        </View>
      )}
      <Header Icon={ChevronLeft as IconComponent} pram={"back"} />
      
      {deviceType === "mobile" ? (
        <MobileView deviceType={deviceType} handleForm={handleForm} />
      ) : (
        <TabletView deviceType={deviceType} handleForm={handleForm} />
      )}
      
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  ActivityIndicator: {
    position: "absolute",
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,    255,    255,   0.5)",
    zIndex: 100,
  },
  HeaderLogo: {
    alignItems: "center",
  },

  Body: {
    paddingHorizontal: Wp(16),
    paddingTop: Platform.OS == "android" ? Wp(20) : Wp(10),
    flex: 1,
    backgroundColor: NoteAppcolor.White,
  },
});
