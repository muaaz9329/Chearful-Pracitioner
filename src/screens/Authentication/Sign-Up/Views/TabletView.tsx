import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../Components/Layout";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FormInput from "@app/common/components/Inputs/FormInput";
import { EmailFieldIcon, NextArrow } from "@app/svgs/Index";
import { DeviceType } from "@app/context/Device-Type/DeviceTypeProvider";
import { IconComponent } from "@app/types";
import { IconLock, IconMail } from "tabler-icons-react-native";
import { Wp } from "@app/helper/CustomResponsive";
import FormLabel from "@app/common/components/Inputs/FormLabel";
import DateInput from "../Components/DateInput";
import CountrySelection from "../Components/CountrySelection";
import MobileInput from "../Components/MobileInput";
import GenderSelection from "../Components/GenderSelection";
import LisenseAndAgreement from "../Components/LisenseAndAgreement";
import Carousel from "react-native-reanimated-carousel";
import NextBtn from "../Components/NextBtn";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import OtpInput from "../Components/OtpInput";
import { useSelector } from "react-redux";
import { SignUpState } from "@app/features/sign-up/sign-up-reducers";

type Props = {
  deviceType: DeviceType;
  handleForm: (text: string, name: string) => void;
};

function FirstSlide(props: Props) {
  return (
    <View style={styles.Container}>
      <View style={styles.FirstCont}>
        <FormInput
          showIcon={false}
          showLabel={true}
          label="First name"
          Icon={EmailFieldIcon as IconComponent}
          placeholder="Enter First Name"
          name="firstName"
          onChangeText={props.handleForm}
          width={30}
          DeviceType={props.deviceType}
        />
        <FormInput
          showIcon={false}
          showLabel={true}
          label="Last name"
          Icon={EmailFieldIcon as IconComponent}
          placeholder="Enter First Name"
          name="lastName"
          onChangeText={props.handleForm}
          width={30}
          DeviceType={props.deviceType}
        />
      </View>

      <View style={styles.FirstCont}>
        <FormInput
          showIcon={true}
          showLabel={true}
          label="Email"
          Icon={IconMail}
          placeholder="Enter Email Address"
          name="email"
          onChangeText={props.handleForm}
          width={30}
          DeviceType={props.deviceType}
        />

        <FormInput
          showIcon={true}
          showLabel={true}
          label="Password"
          Icon={IconLock}
          placeholder="Enter Password"
          name="password"
          onChangeText={props.handleForm}
          width={30}
          DeviceType={props.deviceType}
          Protected={true}
        />
      </View>
      <View style={styles.FirstCont}>
        <FormLabel label="Date Of Birth" deviceType={"tablet"}>
          <DateInput
            handleForm={props.handleForm}
            Devicetype={props.deviceType}
          />
        </FormLabel>
        <CountrySelection
          handleForm={props.handleForm}
          deviceType={props.deviceType}
        />
      </View>
      <View
        style={[
          styles.FirstCont,
          {
            alignSelf: "flex-start",
            marginLeft: Wp(17),
          },
        ]}
      >
        <MobileInput
          handleFunc={props.handleForm}
          deviceType={props.deviceType}
        />
      </View>
      <View
        style={[
          styles.FirstCont,
          {
            alignSelf: "flex-start",
            marginLeft: Wp(17),
          },
        ]}
      >
        <FormLabel label="Select Gender" deviceType={props.deviceType}>
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <GenderSelection
              HandleForm={props.handleForm}
              deviceType={props.deviceType as string}
            />
          </View>
        </FormLabel>
      </View>
      <View
        style={{
          marginLeft: Wp(17),
          marginTop: Wp(5),
        }}
      >
        <LisenseAndAgreement
          handleFunc={props.handleForm}
          deviceType={props.deviceType}
        />
      </View>
    </View>
  );
}

const TabletView = ({ deviceType, handleForm }: Props) => {
  const CoursalRef = useRef(null);
  const [index, setIndex] = useState<number>(0);
  const [enable, setEnable] = useState<boolean>(true);
  const [data, setData] = useState(false);
  const { moveNextSlide }: SignUpState = useSelector(
    (state: any) => state.signUp
  );

  const HandleFunction = () => {
    if (CoursalRef.current) {
      //@ts-ignore
      CoursalRef.current.next();
    }
  };

  const NextBtnRef = useRef(null);
  const handleSlide = (index: number) => {
    //@ts-ignore
    NextBtnRef.current?.onMoveNext(index);
  };
  const [otp, setOtp] = useState<string>("");

  useEffect(() => {
    if (moveNextSlide) {
      setData(true);
      setTimeout(() => {
        HandleFunction();
      }, 1000);
    }
    console.log("moveNextSlide:", moveNextSlide);
  }, [moveNextSlide]);
  // Only re-run the effect if count changes
  // using for validation and moving the screen to otp if it is valid

  return (
    <Layout deviceType={"tablet"}>
      <Carousel
        width={wp(75)}
        height={hp(65)}
        data={data ? [1, 2] : [1]}
        loop={false}
        autoPlay={false}
        onSnapToItem={(index) => {
          handleSlide(index);
          setIndex(index);
          if (index === 1) {
            setEnable(false);
          }
        }}
        enabled={enable}
        style={{
          alignSelf: "center",
        }}
        scrollAnimationDuration={500}
        ref={CoursalRef}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <FirstSlide deviceType={deviceType} handleForm={handleForm} />
            );
          } else {
            return (
              <View style={styles.Container}>
                <OtpInput setOtpValue={setOtp} DeviceType={"tablet"} />
              </View>
            );
          }
        }}
      />

      <View style={styles.nxtBtn}>
        <NextBtn
          percentage={25}
          radius={wp(2.45 * 2.3)}
          color={NoteAppcolor.Primary}
          HandleFunction={HandleFunction}
          deviceType={deviceType}
          ref={NextBtnRef}
          index={index}
        />
      </View>
    </Layout>
  );
};

export default TabletView;

const styles = StyleSheet.create({
  Container: {
    width: wp(75),
    height: hp(60),

    alignSelf: "center",
  },
  FirstCont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: Wp(10),
  },
  nxtBtn: {
    position: "absolute",
    bottom: Wp(15),
    alignSelf: "center",
  },
});
