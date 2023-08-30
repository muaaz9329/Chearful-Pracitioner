import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish } from "@app/helper/FontWeight";
import { DeviceType } from "@app/context/Device-Type/DeviceTypeProvider";

type Props = {
  setCheck: (value: boolean) => void;
  children: React.ReactNode;
  DeviceType?: DeviceType
};

const BouncyCheckBox = ({ setCheck, children ,  DeviceType='mobile' }: Props) => {
  return (
    <View
      style={[
        styles.InputCont,
        {
          flexDirection: "row",
          alignItems: "center",
          marginTop: DeviceType==='mobile'? Wp(30):Wp(10),
        },
      ]}
    >
      <BouncyCheckbox
        size={DeviceType==='tablet'?Wp(13):Wp(25)}
        fillColor={NoteAppcolor.Primary}
        unfillColor="#FFFFFF"
        iconStyle={{
          borderColor: NoteAppcolor.Primary,
        }}
        innerIconStyle={{
          borderWidth: 2,
        }}
        disableText={true}
        onPress={(isChecked: boolean) => {
          setCheck(isChecked);
        }}
      />

      <View>{children}</View>
    </View>
  );
};

export default BouncyCheckBox;

const styles = StyleSheet.create({
  InputCont: {
    marginTop: Wp(20),
  },
});
