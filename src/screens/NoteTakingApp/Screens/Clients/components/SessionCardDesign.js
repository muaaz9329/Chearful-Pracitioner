import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import { Plus, Eye } from "@svg";
import { calculateEndTime } from "@app/helper/customFunction";
import { SessionCardAdapterFunction } from "./adapters/SessionCardAdapter";
import TypeOfNote from "@app/common/Models/TypeOfNote";
function convertDateFormat(dateString) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = dateString.split("-");
  const formattedMonth = months[Number(month) - 1];

  return {
    Date: Number(day),
    Month: formattedMonth,
    Year: String(year).slice(2),
  };
}
const SessionCardDesign = ({ navigation, CardData }) => {
  console.log("Adapter :", SessionCardAdapterFunction(CardData)); // converts Raw card data to Required Format for Preview and adding Screen
  const [model, Setmodel] = useState(false);
  const { EndTime, StartTime } = calculateEndTime(
    CardData.appointment_time,
    CardData.time_duration
  );
  return (
    <View style={styles.cardCont}>
      <TypeOfNote
      data={SessionCardAdapterFunction(CardData)}
      visible={model}
      setVisible={Setmodel}
      navigation={navigation}
      routeLoc={"Prac_ClientDetail"}
      
      />
      <View style={styles.CardContet}>
        <View style={styles.Cont1}>
          <View style={styles.Datebox}>
            <Text style={styles.date}>
              {convertDateFormat(CardData.appointment_date).Date}
            </Text>
            <Text style={styles.date}>
              {convertDateFormat(CardData.appointment_date).Month}
            </Text>
          </View>
        </View>
        <View style={styles.CardTextCont}>
          <Text style={styles.Name}>{CardData.service_name}</Text>
          <View style={styles.LastVisitCont}>
            <Text
              style={[styles.Name, { opacity: 0.7 }]}
            >{`${StartTime} - ${EndTime}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.CardsButton}>
        <Pressable
          style={styles.btnDesign}
          onPress={() => {
            Setmodel(!model);
          }}
        >
          <Plus width={Wp(24)} height={Wp(24)} color={NoteAppcolor.Primary} />
        </Pressable>
        <Pressable
          style={styles.btnDesign}
          onPress={() => {
            navigation.navigate("Prac_NotesPreview", { ClientData: SessionCardAdapterFunction(CardData), routeLoc: "Prac_ClientDetail" });
          }}
        >
          <Eye width={Wp(24)} height={Wp(24)} color={NoteAppcolor.Primary} />
        </Pressable>
      </View>
    </View>
  );
};

export default SessionCardDesign;

const styles = StyleSheet.create({
  cardCont: {
    flexDirection: "row",
    width: wp(90),
    justifyContent: "space-between",
    marginBottom: Wp(20),
  },
  CardContet: {
    width: wp(74),

    paddingHorizontal: Wp(24),
    paddingVertical: Wp(17),
    borderRadius: Wp(30),
    backgroundColor: NoteAppcolor.Secondary,
    flexDirection: "row",
    alignItems: "center",
  },
  LastVisitCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: Wp(5),
  },
  Name: {
    fontFamily: Nunito(700),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(15),
  },
  LastVisitText: {
    fontFamily: Mulish(600),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
  },
  ServiceTaken: {
    fontFamily: Mulish(600),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
  },
  btnDesign: {
    paddingHorizontal: Wp(10),
    paddingVertical: Wp(8),
    backgroundColor: NoteAppcolor.Secondary,
    borderRadius: Wp(10),
  },
  CardsButton: {
    justifyContent: "space-between",
  },
  DotMargin: {
    marginHorizontal: Wp(5),
  },
  Datebox: {
    width: Wp(62),
    height: Wp(62),
    backgroundColor: NoteAppcolor.White,
    borderRadius: Wp(10),
    marginEnd: Wp(10),
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    fontFamily: Nunito(700),
    fontSize: FontSize(16),
    color: NoteAppcolor.Primary,
  },
});
