import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import { DateConstrctor } from "@helper/customFunction";
//! <Image source={Data.Picture} style={styles.ClientImage} />
//! Last Visit on {DateConstrctor(new Date(Data.LastVisitDate)).Date}

const CardDesign = ({ Data }) => {
  return (
    <View style={styles.cardCont}>
      <View style={styles.CardContet}>
        <View style={styles.Cont1}>
        <Image source={{uri: Data.avatar}} style={styles.ClientImage} />
        </View>
        <View style={styles.CardTextCont}>
          <Text style={styles.Name}>
            {Data.full_name}
          </Text>

          <View style={styles.LastVisitCont}>
            <Text style={styles.LastVisitText}>
            Last visit on {DateConstrctor(new Date(Data.latest_session_date)).Date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  cardCont: {
    flexDirection: "row",
    width: wp(92.5),
    justifyContent: "space-between",
    marginBottom: Wp(20),
  },
  CardContet: {
    width: wp(90),

    paddingHorizontal: Wp(16),
    paddingVertical: Wp(10),
    borderRadius: Wp(24),
    backgroundColor: NoteAppcolor.Secondary,
    flexDirection: "row",
    alignItems: "center",
  },
  ClientImage: {
    width: Wp(60),
    height: Wp(60),
    borderRadius: Wp(38),
    resizeMode:Platform.OS == 'android' ? "contain" : "center",
    marginEnd: Wp(10),
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
    fontSize: FontSize(24),
  },
  LastVisitText: {
    fontFamily: Mulish(600),
    fontSize: FontSize(14),
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
});
