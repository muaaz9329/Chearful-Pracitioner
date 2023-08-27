import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FormInput from "@app/common/components/Inputs/FormInput";
import { EmailFieldIcon } from "@app/svgs/Index";
import { IconComponent } from "@app/types";
import { IconLock, IconMail } from "tabler-icons-react-native";
import Layout from "../Components/Layout";
import { DeviceType } from "@app/context/Device-Type/DeviceTypeProvider";
import { Wp } from "@app/helper/CustomResponsive";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import NextBtn from "../Components/NextBtn";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import Carousel from "react-native-reanimated-carousel";
import FormLabel from "@app/common/components/Inputs/FormLabel";
import { Mulish } from "@app/helper/FontWeight";
import DateInput from "../Components/DateInput";
import GenderSelection from "../Components/GenderSelection";
import OtpInput from "../Components/OtpInput";
import CountrySelection from "../Components/CountrySelection";
import MobileInput from "../Components/MobileInput";
import LisenseAndAgreement from "../Components/LisenseAndAgreement";
import { SignUpState } from "@app/features/sign-up/sign-up-reducers";
import { useSelector } from "react-redux";

type Props = {
  handleForm: (text: string, name: string) => void;
  deviceType: DeviceType;
};

function FirstSlide({
  handleForm,
}: {
  handleForm: (text: string, name: string) => void;
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: wp(87),
          justifyContent: "space-between",
        }}
      >
        <FormInput
          showIcon={false}
          showLabel={true}
          label="First name"
          Icon={EmailFieldIcon as IconComponent}
          placeholder="Enter First Name"
          name="firstName"
          onChangeText={handleForm}
          width={40}
        />
        <FormInput
          showIcon={false}
          showLabel={true}
          label="Last name"
          Icon={EmailFieldIcon as IconComponent}
          placeholder="Enter Last Name"
          name="lastName"
          onChangeText={handleForm}
          width={40}
        />
      </View>

      <View style={styles.InputCont}>
        <FormInput
          showIcon={true}
          showLabel={true}
          label="Email"
          Icon={IconMail}
          placeholder="Enter Email Address"
          name="email"
          onChangeText={handleForm}
          width={85}
        />
      </View>
      <View style={styles.InputCont}>
        <FormInput
          showIcon={true}
          showLabel={true}
          label="Password"
          Icon={IconLock}
          placeholder="Enter Password"
          name="password"
          onChangeText={handleForm}
          width={85}
          Protected={true}
        />
      </View>

      <View style={styles.InputCont}>
        <FormLabel label="Date Of Birth">
          <DateInput handleForm={handleForm} />
        </FormLabel>
      </View>
    </View>
  );
}

export interface ICountrySelection {
  name: string;
  code: string;
  flag: Required<string>;
  dail_code: string;
}

function SecondSlide(props: {
  handleForm: (text: string, name: string) => void;

  setCheck: (value: boolean) => void;
}) {
  return (
    <View>
      <View>
        <CountrySelection handleForm={props.handleForm} />
      </View>
      <View style={styles.InputCont}>
        <MobileInput handleFunc={props.handleForm} />
      </View>

      <View style={styles.InputCont}>
        <FormLabel label="Select Gender">
          <View
            style={{
              width: wp(85),
            }}
          >
            <GenderSelection HandleForm={props.handleForm} />
          </View>
        </FormLabel>
      </View>
      <LisenseAndAgreement handleFunc={props.handleForm} />
    </View>
  );
}

function MobileView({ deviceType, handleForm }: Props) {
  const CoursalRef = useRef(null);

  const { moveNextSlide }: SignUpState = useSelector(
    (state: any) => state.signUp
  );
  const [check, setCheck] = useState(false);
  const [otp, setOtp] = useState<string>("");

  const [index, setIndex] = useState<number>(0);
  const [enable, setEnable] = useState<boolean>(true);
  const [data, setData] = useState(false);
  const NextBtnRef = useRef(null);

  const HandleFunction = () => {
    if (CoursalRef.current) {
      //@ts-ignore
      CoursalRef.current.next();
    }
  };

  useEffect(() => {
    if (moveNextSlide) { // asking if the it should move to the next slide . if yes(true) then it will move to the next slide
      setData(true);
      setTimeout(() => {
        HandleFunction();
      }, 1000);
    }
    console.log("moveNextSlide:", moveNextSlide);
  }, [moveNextSlide]); // Only re-run the effect if count changes
  // using for validation and moving the screen to otp if it is valid

  const handleSlide = (index: number) => {
    //@ts-ignore
    NextBtnRef.current?.onMoveNext(index);
  };

  return (
    <Layout deviceType={deviceType}>
      <View style={styles.Cont}>
        <Carousel
          width={wp(100)}
          height={wp(130)}
          data={data ? [1, 2, 3] : [1, 2]}
          loop={false}
          autoPlay={false}
          onSnapToItem={(index) => {
            handleSlide(index);
            setIndex(index);
            if (index === 2) {
              setEnable(false);
            }
          }}
          enabled={enable}
          scrollAnimationDuration={500}
          ref={CoursalRef}
          renderItem={({ item, index }) => {
            if (index === 0) {
              return <FirstSlide handleForm={handleForm} />;
            } else if (index === 1) {
              return (
                <SecondSlide
                  handleForm={handleForm}
                  setCheck={setCheck}
                ></SecondSlide>
              );
            } else {
              return (
                <View>
                  <OtpInput setOtpValue={setOtp} />
                </View>
              );
            }
          }}
        />
      </View>
      <View style={styles.btnCont}>
        <View>
          <NextBtn
            percentage={25}
            radius={wp(2.45 * 4.5)}
            color={NoteAppcolor.Primary}
            HandleFunction={HandleFunction}
            index={index}
            ref={NextBtnRef}
          />
        </View>
      </View>
    </Layout>
  );
}

export default MobileView;

const styles = StyleSheet.create({
  InputCont: {
    marginTop: Wp(20),
  },
  Cont: {
    height: wp(130),
  },
  btnCont: {
    position: "absolute",
    bottom: Wp(30),
    alignSelf: "center",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: Wp(20),
    paddingHorizontal: Wp(15),
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    marginLeft: hp(2),
    fontSize: Wp(14),
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
  },
  FlagImgDesign: {
    width: Wp(28),
    height: Wp(20),
    borderRadius: Wp(1.3),
  },
  countryCont: {
    paddingHorizontal: Wp(5),
    backgroundColor: NoteAppcolor.InputBg,
    width: wp(85),
    borderRadius: Wp(12),
  },
});
