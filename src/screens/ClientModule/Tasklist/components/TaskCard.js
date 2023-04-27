import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { TickIcon } from "@app/svgs/Index";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import { Divider } from "react-native-paper";
import PirorityCont from "./PirorityCont";

const TaskCard = ({title,category,isChecked,day,pirority,StartTime,EndTime}) => {
  const UncheckDesign = {
    checked: false,
    bgColor: NoteAppcolor.White,
    tickColor: null,
  };
  const CheckDesign = {
    checked: true,
    bgColor: NoteAppcolor.Primary,
    tickColor: NoteAppcolor.White,
  };
  const setCheckDesign = () => {
    if (check.checked) {
      setCheck(UncheckDesign);
    } else {
      setCheck(CheckDesign);
    }
  }
  const [check, setCheck] = React.useState(isChecked ? CheckDesign : UncheckDesign);
  return (
    <View style={styles.cardCont}>
      <View style={styles.cardHeader}>
        <View style={styles.Maincont}>
          <Text style={[styles.TitleText,{textDecorationLine:check.checked ? 'line-through':null}]}>{title}</Text>
          <Text style={styles.SubTitleText}>{category}</Text>
        </View>
        <View style={styles.Icon}>
          <Pressable
            onPress={setCheckDesign}
          >
            <TickIcon
              Bgcolor={check.bgColor}
              height={Wp(30)}
              width={Wp(30)}
              TickColor={check.tickColor}
            />
          </Pressable>
        </View>
      </View>
      <Divider bold />
      <View style={styles.BottomCont}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.Date}>{day}</Text>
          <Text style={styles.Time}>{`${StartTime} - ${EndTime}`}</Text>
        </View>
        <View style={styles.ParorityCont}>
          <PirorityCont pirority={pirority} />
        </View>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  cardCont: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: Wp(15),
    paddingVertical: Wp(10),
    borderRadius: Wp(15),
    marginVertical: Wp(10),
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Wp(15),
  },
  TitleText: {
    fontFamily: Mulish(700),
    color: NoteAppcolor.MenuText,
    fontSize: Wp(19),
    
  },
  SubTitleText: {
    fontFamily: Mulish(400),
    color: NoteAppcolor.MenuText,
    fontSize: Wp(15),
  },
  Date: {
    fontFamily: Mulish(400),
    color: NoteAppcolor.MenuText,
    fontSize: Wp(14),
    opacity: 0.7,
    marginRight: Wp(3),
  },
  BottomCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Wp(15),
  },
  Time: {
    fontFamily: Mulish(400),
    color: NoteAppcolor.MenuText,
    fontSize: Wp(14),
    opacity: 0.7,
  },
});
