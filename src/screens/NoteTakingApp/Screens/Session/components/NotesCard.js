import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Nunito } from "@helper/FontWeight";

const NotesCard = ({ Arr, navigation ,ClientData}) => {
  return (
    <View style={styles.Parent}>
      {Arr.map((item, index) => {
        return (
          <Pressable
            onPress={() => {
              if (item.type === "written") {
                navigation.push("Prac_WrittenEditor" ,{mode:"view", content:item.content , ClientData:ClientData});
              } else {
                navigation.push("Prac_NotesEditor",{mode:"view", content:item.content ,ClientData:ClientData});
              }
            }}
          >
            <ImageBackground style={styles.cardCont} key={index} resizeMode={"cover"}  source={{uri: item.img}}>
              <View style={styles.DateCard}>
                <Text style={styles.cardDate}>24 Feb , 2023</Text>
              </View>
            </ImageBackground>
          </Pressable>
        );
      })}
    </View>
  );
};

export default NotesCard;

const styles = StyleSheet.create({
  cardCont: {
    borderWidth: 1,
    borderColor: NoteAppcolor.Primary,
    width: wp(40),
    height: Wp(150),
    borderRadius: Wp(30),
    overflow: "hidden",
    justifyContent: "flex-end",
    marginBottom: Wp(20),
    resizeMode:"contain"
  },
  DateCard: {
    width: wp(40),
    height: Wp(45),
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: NoteAppcolor.Secondary,
  },
  cardDate: {
    fontFamily: Nunito(700),
    fontSize: FontSize(16),
    marginTop: Wp(5),
    color: NoteAppcolor.Primary,
  },
  Parent: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
