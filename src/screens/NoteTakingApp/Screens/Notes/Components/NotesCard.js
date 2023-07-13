import { StyleSheet, Text, View, ImageBackground, Image ,Pressable, Platform} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import { DateConstrctor } from "@helper/customFunction";
import FileIconGenrator from "@app/screens/NoteTakingApp/Screens/Session/components/FileIconGenrator";
import User_Session_Notes_Editor_Pram_object from "@app/adapters/User_Session_Notes_Editor_Pram_object";
import { NotesCardAdapterFunction } from "./adapter/NotesCardFunction";

const NotesCard = ({ Arr , navigation}) => {
  const VIEW_MODE = "view";
  const EDIT_MODE = "edit";

 
  
  const HandleNavigation = (item) => {
    const ClientData = NotesCardAdapterFunction(item)
    const Pram = new User_Session_Notes_Editor_Pram_object(
      ClientData,
      item,
      item.Apptype,
      VIEW_MODE
    );

    switch (item.Apptype) {
      case "text":
        navigation.push("Prac_NotesEditor", Pram);
        break;
      case "img":
        navigation.push("Prac_ImageViewer", Pram);
        break;
      case "canvas":
        navigation.push("Prac_WrittenEditor", Pram);
        break;
      case "pdf":
        navigation.push("Prac_PDFEditor", Pram);
        break;
      case "docx":
        navigation.push("Prac_DocsEditor", Pram);
    }
  };

  return (
    <View style={styles.Parent}>
      {Arr.map((item, index) => {
        return (
          <Pressable onPress={()=>{
            HandleNavigation(item)
          }}
          key={index}
          >
          <ImageBackground style={styles.cardCont} key={index}>
            <View style={styles.UpperCont}>
              <Image style={styles.IconImg} source={FileIconGenrator(item.Apptype)} />
            </View>
            <View style={styles.DateCard}>
              {/* <Text style={styles.cardDate}>{DateConstrctor(new Date(item.NoteDate)).Date}</Text> */}
              <Image style={styles.UserImg}  />
              <View style={styles.TextCont}>
                <Text style={styles.cardDate}>{`Client Name`}</Text>
                <View style={styles.LastVisitCont}>
                  <Text style={styles.LastVisitText}>
                    {DateConstrctor(new Date(item.created_at)).Date}
                  </Text>
                </View>
                <Text style={styles.LastVisitText}>
                  {DateConstrctor(new Date(item.created_at)).Time}
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
  UpperCont:{
    width:wp(42),
    height:Wp(90),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
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
    resizeMode: Platform.OS =='ios' ? 'center':'contain' ,
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
  IconImg:{
    width:Wp(60),
    height:Wp(80),
    marginTop:Wp(20)
  }
});
