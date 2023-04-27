import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import AreaOfLifeBlob from "./AreaOfLifeBlob";
import EmojiCont from "./EmojiCont";
import {
  DateConstrctor,
  capitalizeFirstLetter,
} from "../../../../helper/customFunction";
const CardHeader = ({ Item , size='md' }) => {
  const NewDate = DateConstrctor(new Date(Item.Date));
  return (
    <View style={styles.Header}>
      <View style={styles.EmojiCont}>
        <View style={styles.Emoji}>
          <EmojiCont feeling={Item.Mood} size={size} />
        </View>
        <View style={styles.EmojiText}>
          <Text style={[styles.FeelingText,{fontSize: size ==='md'? FontSize(14):FontSize(18)}]}>
            {capitalizeFirstLetter(Item.Mood)}
          </Text>
          <Text style={[styles.Time,{fontSize: size=='md'? FontSize(12):FontSize(16),}]}>{`${NewDate.Day}, ${NewDate.Time}`}</Text>
        </View>
      </View>
      <View style={styles.AreaOfLife}>
        <AreaOfLifeBlob sphere={Item.Sphere} size={size} />
      </View>
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Wp(6),
  },
  EmojiCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  Emoji: {
    marginEnd: Wp(5),
  },
  FeelingText: {
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
  },
  Time: {
    fontFamily: Mulish(700),
    
    color: NoteAppcolor.Primary,
    opacity: 0.5,
  },
});
