import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { CalenderIcon } from "@svg";
import DatePicker from "react-native-date-picker";

import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import { Mulish, Nunito } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { DateConstrctor } from "@app/helper/customFunction";

const DateAndFilter = ({ApiQueryDate=null , ShowPicker=true}) => {
  const [open, setOpen] = useState(false);
  const [dayAndDate, setDayAndDate] = useState({
    Date: "",
    Day: "",
    Time: "",
    ApiDateQuery:""
  });
  const [value, setValue] = useState(new Date());

  useEffect(()=>{
let obj = DateConstrctor(value)
setDayAndDate(obj)
if(ApiQueryDate!==null){
  ApiQueryDate(obj.ApiDateQuery)
}

  },[value])

  return (
    <View style={{ marginBottom: Wp(10) }}>
      <View style={styles.PractitionerHead}>
        <View style={styles.PractitionerHeadCont}>
          <Text style={styles.textTitle}>{dayAndDate.Day}</Text>
          <Text style={styles.textSubtitle}>{dayAndDate.Date}</Text>
        </View>
      {ShowPicker && <Pressable
        style={styles.PractitionerFilterButton}
        onPress={() => setOpen(true)}
      >
        <CalenderIcon
          width={Wp(20)}
          height={Wp(20)}
          color={NoteAppcolor.Primary}
        />
        <DatePicker
          mode="date"
          modal
          open={open}
          date={new Date()}
          onConfirm={(date) => {
            setOpen(false);
            setValue(date)
          }}
          onCancel={() => {
            setOpen(false);
          }}
          androidVariant={"iosClone"}
        />
      </Pressable>}
      </View>
    </View>
  );
};

export default DateAndFilter;

const styles = StyleSheet.create({
  PractitionerHead: {
    marginTop: Hp(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PractitionerFilterButton: {
    paddingVertical: Wp(10),
    paddingHorizontal: Wp(10),
    backgroundColor: "#EFF3F2",
    alignSelf: "flex-start",
    borderRadius: Wp(8),
  },
  textTitle: {
    color: NoteAppcolor.Primary,
    fontFamily: Nunito("700"),
    fontSize: FontSize(16),
  },
  textSubtitle: {
    color: NoteAppcolor.Primary,
    opacity: 0.7,
    fontFamily: Mulish("600"),
    fontSize: FontSize(13),
  },
});
