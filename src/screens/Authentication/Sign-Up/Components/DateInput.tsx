import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-date-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {CalenderIcon} from "@svg";
import { calculate18YearsBefore, capitalizeFirstLetter } from "@app/helper/customFunction";
import { DeviceType } from "@app/context/Device-Type/DeviceTypeProvider";
import { Hp, Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
const DateInput = ({handleForm , Devicetype='mobile'}:{
  handleForm: (text: string, name: string) => void,
  Devicetype?:DeviceType
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Select");

  useEffect(() => {

     if(value !== "Select"){
      handleForm(value, "Dob");
     }
   
  },[value])

  const DateConstrctor = (date:Date) => {
    const month = capitalizeFirstLetter(String(date).slice(4, 7).toLowerCase());
    const day = String(date).slice(8, 10);
    const year = String(date).slice(11, 15);
    const NewDate = `${day} ${month}, ${year}`;
    setValue(NewDate);
  };

  return (
    <>
      <Pressable
        
        style={[styles.mainCont,
          Devicetype === 'tablet' && {
            width: wp(30),
    paddingVertical:Wp(6),
    paddingHorizontal: Wp(10),

    borderRadius: 14,
    backgroundColor: "#EFF3F2",
          }]}
        onPress={() => setOpen(true)}
      >
        <View>
          <Text style={[styles.DateCont,{
            fontFamily:Mulish(700),
            fontSize:Devicetype==='mobile'?Wp(14):Wp(8),
          }]}>{String(value)}</Text>
        </View>
        <View>
          <CalenderIcon
            width={Devicetype==='mobile'?Wp(24):Wp(15)}
            height={Devicetype==='mobile'?Wp(24):Wp(15)}
            color={"#1E5542"}
          />
        </View>
      </Pressable>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={new Date()}
        onConfirm={(date) => {
          setOpen(false);
          DateConstrctor(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        androidVariant={"iosClone"}
        maximumDate={calculate18YearsBefore()}
      />
    </>
  );
};
export default DateInput;

const styles = StyleSheet.create({
  mainCont: {
    width: wp(85),
    paddingVertical: hp(1.45 * 1.5),
    paddingHorizontal: wp(2.45 * 1.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 14,
    backgroundColor: "#EFF3F2",
  },
  DateCont: {
    color: "#1E5542",
    fontWeight: "700",
  },
});
