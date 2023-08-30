import { Image, StyleSheet, Text, View ,Pressable} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import { DateConstrctor, calculateEndTime, capitalizeFirstLetter } from "@helper/customFunction";
import TypeOfNote from "@app/common/Models/TypeOfNote";
import { SessionCardAdapterFunction } from "./adapter/SessionCard";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

const SessionCard = ({ SessionData,navigation, }) => {
  const [model,setmodel] = useState(false)
  const { EndTime, StartTime } = calculateEndTime(
    SessionData.appointment_time,
    SessionData.time_duration
  );
  const {deviceType}=useContext(DeviceContext)
  
  return (
    <Pressable onPress={()=>{
      setmodel(!model)
    }}>

   
    <View style={[styles.cardCont,deviceType === "tablet" && {
          width: wp(58),

          marginBottom: Wp(10),
        },]}>
     <TypeOfNote visible={model} setVisible={setmodel} data={SessionCardAdapterFunction(SessionData)} navigation={navigation} routeLoc={"Prac_AddNoteSession"} />
      <View style={[styles.CardContet,deviceType === "tablet" && {
            width: wp(50),
            paddingHorizontal: Wp(12),
            paddingVertical: Wp(6),
            borderRadius: Wp(15),
          },]}>
        <View style={styles.Cont1}>
        <View style={[styles.Datebox,deviceType === "tablet" && {
                width: Wp(35),
                height: Wp(35),
                borderRadius: Wp(7),
                marginEnd: Wp(10),
              },]}>
            <Text style={[styles.date,deviceType === "tablet" && {
                  fontSize: FontSize(10),
                },]}>{DateConstrctor(new Date(SessionData.appointment_date)).Date.slice(0,2)}</Text>
            <Text style={[styles.date,deviceType === "tablet" && {
                  fontSize: FontSize(10),
                },]}>{DateConstrctor(new Date(SessionData.appointment_date)).Date.slice(3,6)}</Text>
          </View>
        </View>
        <View style={styles.CardTextCont}>
          <Text style={[styles.Name, deviceType === "tablet" && {
                fontSize: FontSize(10),
              }]}>{SessionData.service_name}</Text>
          <View style={[styles.LastVisitCont,deviceType==='tablet'&&{
            marginVertical:Wp(3)
          }]}>
            <Text
              style={[styles.LastVisitText, { opacity: 0.7 },deviceType === "tablet" && {
                fontSize: FontSize(8),
              },]}
            >{`${StartTime} - ${EndTime}`}</Text>
          </View>
          <Text style={[styles.StatusText,deviceType === "tablet" && {
                  fontSize: FontSize(8),
                },]}>{`Status: ${capitalizeFirstLetter(SessionData.status)}`}</Text>
        </View>
      </View>
    </View>
    </Pressable>
  );
};

export default SessionCard;

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
    resizeMode: "contain",
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
    fontSize: FontSize(14),
  },
  LastVisitText: {
    fontFamily: Mulish(400),
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
  StatusText:{
    fontFamily: Mulish(700),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
  }
});
