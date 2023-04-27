import { StyleSheet, Text, View, ImageBackground, Image ,Pressable} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontSize, Wp } from "../../../../../helper/CustomResponsive";
import { NoteAppcolor } from "../../../constants/NoteAppcolor";
import { Mulish, Nunito } from "../../../../../helper/FontWeight";
import { DateConstrctor } from "../../../../../helper/customFunction";

const NotesCard = ({ Arr , navigation}) => {
  return (
    <View style={styles.Parent}>
      {Arr.map((item, index) => {
        return (
          <Pressable onPress={()=>{
            if(index%2===0){
              navigation.push("NotesEditor",{ mode:"view", content:"" ,ClientData:item })
            }
            else
            {
              navigation.push("WrittenEditor",{ mode:"view", content:[] ,ClientData:item })
            }
          }}>
          <ImageBackground style={styles.cardCont} key={index}>
            <View style={styles.DateCard}>
              {/* <Text style={styles.cardDate}>{DateConstrctor(new Date(item.NoteDate)).Date}</Text> */}
              <Image style={styles.UserImg} source={item.Picture} />
              <View style={styles.TextCont}>
                <Text style={styles.cardDate}>{item.Name}</Text>
                <View style={styles.LastVisitCont}>
                  <Text style={styles.LastVisitText}>
                    {DateConstrctor(new Date(item.LastVisitDate)).Date}
                  </Text>
                </View>
                <Text style={styles.LastVisitText}>
                  {DateConstrctor(new Date(item.LastVisitDate)).Time}
                </Text>
              </View>
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
    width: wp(42),
    height: Wp(150),
    borderRadius: Wp(30),
    overflow: "hidden",
    justifyContent: "flex-end",
    marginBottom: Wp(20),
  },
  DateCard: {
    width: wp(42),
    height: Wp(60),
    flexDirection: "row",
    backgroundColor: NoteAppcolor.Secondary,
    paddingVertical: Wp(6),
    paddingHorizontal: Wp(8),
    alignItems: "center",
  },
  cardDate: {
    fontFamily: Nunito(700),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
  },
  Parent: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom:Wp(35)
  },
  UserImg: {
    width: Wp(35),
    height: Wp(35),
    borderRadius: Wp(17.5),
    resizeMode: "contain",
    marginHorizontal: Wp(10),
  },
  LastVisitCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  LastVisitText: {
    fontFamily: Mulish(600),
    fontSize: FontSize(10),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
  },
  DotMargin: {
    marginHorizontal: Wp(3),
  },
});
