import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import { DateConstrctor } from "@helper/customFunction";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
//! <Image source={Data.Picture} style={styles.ClientImage} />
//! Last Visit on {DateConstrctor(new Date(Data.LastVisitDate)).Date}

const CardDesign = ({ Data }) => {
  const { deviceType } = useContext(DeviceContext);
  return (
    <View
      style={[
        styles.cardCont,
        deviceType === "tablet" && styles.cardCont_Tablet,
      ]}
    >
      <View
        style={[
          styles.CardContet,
          deviceType === "tablet" && styles.CardContet_tablet,
        ]}
      >
        <View style={styles.Cont1}>
          <Image
            source={{ uri: Data.avatar }}
            style={[
              styles.ClientImage,
              deviceType === "tablet" && styles.ClientImage_tablet,
            ]}
          />
        </View>
        <View style={styles.CardTextCont}>
          <Text
            style={[
              styles.Name,
              deviceType === "tablet" && {
                fontSize: FontSize(10),
              },
            ]}
          >
            {deviceType === "mobile"
              ? Data.full_name.length > 15
                ? Data.full_name.slice(0, 15) + "..."
                : Data.full_name
              : Data.full_name.length > 20
              ? Data.full_name.slice(0, 20) + "..."
              : Data.full_name}
          </Text>

          <View
            style={[
              styles.LastVisitCont,
              deviceType === "tablet" && {
                marginVertical: Wp(3),
              },
            ]}
          >
            <Text
              style={[
                styles.LastVisitText,
                deviceType === "tablet" && {
                  fontSize: FontSize(8),
                },
              ]}
            >
              Last visit on{" "}
              {DateConstrctor(new Date(Data.latest_session_date)).Date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  ClientImage_tablet: {
    width: Wp(30),
    height: Wp(30),
    borderRadius: Wp(38),
    resizeMode: "cover",
    marginEnd: Wp(7),
  },
  CardContet_tablet: {
    width: wp(54),
    paddingHorizontal: Wp(8),
    paddingVertical: Wp(5),
    borderRadius: Wp(12),
  },
  cardCont_Tablet: {
    width: wp(54),
    marginBottom: Wp(10),
  },
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
    resizeMode: Platform.OS == "android" ? "contain" : "center",
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
    fontSize: FontSize(16),
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
});
