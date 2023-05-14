import { Image, StyleSheet, Text, View ,Pressable} from "react-native";
import React, { useState } from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import { Plus, Eye } from "@svg";
import NotesType from "@models/NotesType";
const SessionCardDesign = ({navigation,data}) => {
  const [model,Setmodel] = useState(false)
  return (
    <View style={styles.cardCont}>
      <NotesType navigation={navigation} visible={model} setVisible={Setmodel} data={data} /> 
      <View style={styles.CardContet}> 
        <View style={styles.Cont1}>
          <View style={styles.Datebox}>
            <Text style={styles.date}>25</Text>
            <Text style={styles.date}>Feb</Text>
          </View>
        </View>
        <View style={styles.CardTextCont}>
          <Text style={styles.Name}>Marriage Conceling</Text>
          <View style={styles.LastVisitCont}>
            <Text style={[styles.Name, { opacity: 0.7 }]}>9:45AM - 3:30PM</Text>
          </View>
        </View>
      </View>
      <View style={styles.CardsButton}>
        <Pressable style={styles.btnDesign} onPress={()=>{
          Setmodel(!model)
        }} >
          <Plus width={Wp(24)} height={Wp(24)} color={NoteAppcolor.Primary} />
        </Pressable>
        <Pressable style={styles.btnDesign} onPress={()=>{
          navigation.push("Prac_NotesPreview",{ClientData:data})
        }}>
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
    fontSize: FontSize(20),
    color: NoteAppcolor.Primary,
  },
});
