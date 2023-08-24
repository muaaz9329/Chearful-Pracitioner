import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@app/common/components/Header";
import {  ChevronLeft } from "@app/svgs/Index";
import {  Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { IconComponent } from "@app/types";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

import MobileView from "./Views/MobileView";
import TabletView from "./Views/TabletView";

export type SignUpFunc = (text: string, name: string) => void


const SignUp = () => {
  const { deviceType } = useContext(DeviceContext);
  const [countryFlag, setcountryFlag] = useState();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    countryCode: "",
    countryName: "",
    Dob: "",
    gender: "",
    lisenseAgreement: '0',
  });

  
 
  const handleForm = (text: string, name: string) => {
    setUserInfo({ ...userInfo, [name]: text });
  };

  useEffect(()=>{
    console.log(userInfo)
  },[userInfo])


  return (
    <SafeAreaView edges={["top"]} style={styles.Body}>
      <Header Icon={ChevronLeft as IconComponent} pram={"back"} />
      {
        deviceType ==='mobile'?<MobileView deviceType={deviceType} handleForm={handleForm}/>:
        <TabletView deviceType={deviceType} handleForm={handleForm}/>
      }
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
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
