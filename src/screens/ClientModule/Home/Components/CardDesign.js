import { StyleSheet, Text, View, ImageBackground, Image ,Pressable} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";

const CardDesign = ({Data}) => {
    console.log("Helping your child through stress".length)
   
  return (
    <View style={styles.Parent}>
        
          <ImageBackground style={styles.cardCont} source={Data.img}>
            <View style={styles.DateCard}>
             
                <Text style={styles.Title} >{Data.title.length >33 ? Data.title.slice(0,33)+"...": Data.title} </Text>
             
            </View>
          </ImageBackground>
         
    </View>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  cardCont: {
    borderWidth: Wp(1),
    borderColor: NoteAppcolor.ContColor,
    width: wp(42),
    height: Wp(150),
    borderRadius: Wp(20),
    overflow: "hidden",
    justifyContent: "flex-end",
    marginBottom: Wp(20),
  },
  DateCard: {
    width: wp(42),
    height: Wp(50),
    flexDirection: "row",
    backgroundColor: NoteAppcolor.Secondary,
    paddingVertical: Wp(6),
    paddingHorizontal: Wp(8),
    alignItems: "center",
    justifyContent: "center",
    
  },
  Title:{
    fontSize:FontSize(12),
    color:NoteAppcolor.Primary,
    fontFamily:Mulish(700),
    textAlign:"center",
  },
  Parent:{
    marginRight:Wp(10)
  }
  
});
