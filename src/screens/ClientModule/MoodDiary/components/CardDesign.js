import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Mulish, Nunito } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";

import CardHeader from "./CardHeader";

const CardDesign = ({Item}) => {
 
    
  return (
    <View style={styles.body}>
      <CardHeader Item={Item}/>
      <View style={styles.DiaryCont} >
        <Text style={styles.DiaryTextTitle}>
            {Item.Title.length > 25 ? Item.Title.slice(0,25) + "..." : Item.Title}
        </Text>
        <Text style={styles.DiaryTextContent}>
            {Item.Content.length > 120 ? Item.Content.slice(0,120)+"...":Item.Content}
        </Text>
      </View>
    </View>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  body: {
    height: wp(45),
    borderRadius: wp(6),
    padding: Wp(10),
    backgroundColor: "#EFF3F2",
    marginVertical:Wp(10)
  },
 
  DiaryTextTitle:{
    fontFamily:Nunito(700),
    fontSize:FontSize(20),
    color:NoteAppcolor.Primary,
    marginBottom:Wp(6)
  },
  DiaryTextContent:{
    fontFamily:Mulish(600),
    fontSize:FontSize(16),
    color:NoteAppcolor.Primary,
    opacity:0.7
  }
});
