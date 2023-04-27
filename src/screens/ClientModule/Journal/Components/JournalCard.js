import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconCalendar } from "tabler-icons-react-native";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { JournalDate, Contbg, typeOfJournal } from "./JournalFunctions";

const JournalCard = ({ content, date, type}) => {
  return (
    <View style={styles.JournalCardCont}>
      <View style={styles.DateCont}>
        <IconCalendar size={Wp(25)} color={NoteAppcolor.Primary} />
        <Text style={styles.DateText}>{JournalDate(date)}</Text>
      </View>
      <View
        style={[
          styles.ContentCont,
          { backgroundColor: Contbg(type.toLowerCase()) },
        ]}
      >
        <Text style={styles.Title}>{typeOfJournal(type.toLowerCase())}</Text>
        <Text style={styles.TextCont}>{content}</Text>
        <View style={styles.textureBlur}>
          <View
            style={[styles.texture1, { backgroundColor: Contbg(type.toLowerCase()) }]}
          ></View>
          <View
            style={[styles.texture2, { backgroundColor: Contbg(type.toLowerCase()) }]}
          ></View>
        </View>
      </View>
    </View>
  );
};

export default JournalCard;

const styles = StyleSheet.create({
  DateCont: {
    flexDirection: "row",
    paddingHorizontal: Wp(10),
    paddingVertical: Wp(5),
    backgroundColor: NoteAppcolor.OffWhiteCont,
    borderRadius: Wp(10),
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: Wp(10),
  },
  DateText: {
    fontFamily: Mulish(400),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
    marginStart: Wp(3),
  },
  ContentCont: {
    paddingHorizontal: Wp(10),
    paddingVertical: Wp(15),
    height: wp(50),
    overflow: "hidden",
    borderRadius: Wp(20),
    position: "relative",
  },
  Title: {
    fontFamily: Nunito(800),
    fontSize: FontSize(23),
    color: NoteAppcolor.MenuText,
    marginBottom: Wp(10),
  },
  TextCont: {
    fontFamily: Mulish(400),
    fontSize: FontSize(15),
    color: NoteAppcolor.MenuText,
  },
  textureBlur: {
    position: "absolute",
    width: wp(100),
    height: wp(13),
    bottom: 0,
  },
  texture1: {
    height: wp(8),
    width: wp(100),

    opacity: 0.5,
  },
  texture2: {
    height: wp(5),
    width: wp(100),

    opacity: 0.9,
  },
  JournalCardCont: {
    marginVertical: Wp(15),
  },
});
