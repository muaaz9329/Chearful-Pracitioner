import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import { Plus, Eye } from "@svg";
import {
  calculateEndTime,
  capitalizeFirstLetter,
} from "@app/helper/customFunction";
import { SessionCardAdapterFunction } from "./adapters/SessionCardAdapter";
import TypeOfNote from "@app/common/Models/TypeOfNote";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
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
  const { deviceType } = useContext(DeviceContext);
  return (
    <View
      style={[
        styles.cardCont,
        deviceType === "tablet" && {
          width: wp(58),

          marginBottom: Wp(10),
        },
      ]}
    >
      <TypeOfNote
        data={SessionCardAdapterFunction(CardData)}
        visible={model}
        setVisible={Setmodel}
        navigation={navigation}
        routeLoc={"Prac_ClientDetail"}
      />
      <View
        style={[
          styles.CardContet,
          deviceType === "tablet" && {
            width: wp(50),
            paddingHorizontal: Wp(12),
            paddingVertical: Wp(6),
            borderRadius: Wp(15),
          },
        ]}
      >
        <View style={styles.Cont1}>
          <View
            style={[
              styles.Datebox,
              deviceType === "tablet" && {
                width: Wp(35),
                height: Wp(35),
                borderRadius: Wp(7),
                marginEnd: Wp(10),
              },
            ]}
          >
            <Text
              style={[
                styles.date,
                deviceType === "tablet" && {
                  fontSize: FontSize(10),
                },
              ]}
            >
              {convertDateFormat(CardData.appointment_date).Date}
            </Text>
            <Text
              style={[
                styles.date,
                deviceType === "tablet" && {
                  fontSize: FontSize(10),
                },
              ]}
            >
              {convertDateFormat(CardData.appointment_date).Month}
            </Text>
          </View>
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
            {CardData.service_name}
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
                styles.Time,
                { opacity: 0.7 },
                deviceType === "tablet" && {
                  fontSize: FontSize(8),
                },
              ]}
            >{`${StartTime} - ${EndTime}`}</Text>
          </View>
          <Text
            style={[
              styles.StatusText,
              deviceType === "tablet" && {
                fontSize: FontSize(8),
              },
            ]}
          >{`Status: ${capitalizeFirstLetter(CardData.status)}`}</Text>
        </View>
      </View>
      <View style={styles.CardsButton}>
        <Pressable
          style={[
            styles.btnDesign,
            deviceType === "tablet" && styles.btnDesign_Tablet,
          ]}
          onPress={() => {
            Setmodel(!model);
          }}
        >
          <Plus
            width={deviceType === "mobile" ? Wp(24) : Wp(12)}
            height={deviceType === "mobile" ? Wp(24) : Wp(12)}
            color={NoteAppcolor.Primary}
          />
        </Pressable>
        <Pressable
          style={[
            styles.btnDesign,
            deviceType === "tablet" && styles.btnDesign_Tablet,
          ]}
          onPress={() => {
            navigation.navigate("Prac_NotesPreview", {
              ClientData: SessionCardAdapterFunction(CardData),
              routeLoc: "Prac_ClientDetail",
            });
          }}
        >
          <Eye
            width={deviceType === "mobile" ? Wp(24) : Wp(12)}
            height={deviceType === "mobile" ? Wp(24) : Wp(12)}
            color={NoteAppcolor.Primary}
          />
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

    paddingHorizontal: Wp(20),
    paddingVertical: Wp(12),
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
    fontSize: FontSize(14),
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
    width: Wp(65),
    height: Wp(65),
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
  Time: {
    fontFamily: Mulish(700),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
  },
  StatusText: {
    fontFamily: Mulish(700),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
  },
  btnDesign_Tablet: {
    paddingHorizontal: Wp(5),
    paddingVertical: Wp(4),
    borderRadius: Wp(6),
    alignSelf: "flex-start",
  },
});
