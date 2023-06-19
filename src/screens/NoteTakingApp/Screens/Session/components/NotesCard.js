import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import User_Session_Notes_Editor_Pram_object from "@app/adapters/User_Session_Notes_Editor_Pram_object";
import { DateConstrctor } from "@app/helper/customFunction";

const NotesCard = ({ Arr, navigation, ClientData }) => {
  const VIEW_MODE = "view";
  const EDIT_MODE = "edit";

  const HandleNavigation = (item) => {
    const Pram = new User_Session_Notes_Editor_Pram_object(
      ClientData,
      item,
      item.Apptype,
      VIEW_MODE
    );
    console.log(Pram)

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

  // return (
  //   <View style={styles.Parent}>
  //     {Arr.map((item, index) => {
  //       return (
  //         <Pressable onPress={() => {
  //           HandleNavigation(item)
  //           console.log(item.Apptype)
  //           }} key={index}>
  //           <ImageBackground
  //             style={styles.cardCont}
  //             key={index}
  //             resizeMode={"cover"}
  //             source={{ uri: item.img }}
  //           >
  //             <View style={styles.DateCard}>
  //               <Text style={styles.cardDate}>{DateConstrctor(new Date(item.created_at)).Date}</Text>
  //             </View>
  //           </ImageBackground>
  //         </Pressable>
  //       );
  //     })}
  //   </View>
  // );
  // * Old Card

  return (
    <View style={styles.Parent}>
      {Arr.map((item, index) => {
        return (
          <Pressable
            onPress={() => {
              HandleNavigation(item);
              console.log(item.Apptype);
            }}
            key={index}
          >
            <View style={{ paddingHorizontal: Wp(10) , marginBottom:Wp(20) }}>
              <View style={styles.Container}></View>
              <View style={styles.DateCont}>
                <Text style={styles.Date}>{DateConstrctor(new Date(item.created_at)).Date}</Text>
                <Text style={styles.Time}>{DateConstrctor(new Date(item.created_at)).Time}</Text>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default NotesCard;

// const styles = StyleSheet.create({
//   cardCont: {
//     borderWidth: 1,
//     borderColor: NoteAppcolor.Primary,
//     width: wp(40),
//     height: Wp(150),
//     borderRadius: Wp(30),
//     overflow: "hidden",
//     justifyContent: "flex-end",
//     marginBottom: Wp(20),
//     resizeMode: "contain",
//   },
//   DateCard: {
//     width: wp(40),
//     height: Wp(45),
//     flexDirection: "row",
//     justifyContent: "center",
//     backgroundColor: NoteAppcolor.Secondary,
//   },
//   cardDate: {
//     fontFamily: Nunito(700),
//     fontSize: FontSize(16),
//     marginTop: Wp(5),
//     color: NoteAppcolor.Primary,
//   },
//   Parent: {
//     flex: 1,
//     flexWrap: "wrap",
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
// });
//* Old Card StyleSheet

const styles = StyleSheet.create({
  Container: {
    width: Wp(150),
    height: Wp(120),
    borderColor: NoteAppcolor.Primary,
    borderWidth: 1,
    borderRadius: Wp(10),
  },
  Date: {
    fontFamily: Mulish(700),
    fontSize: Wp(16),
    color: NoteAppcolor.MenuText,
    marginTop: Wp(5),
  },
  Time: {
    fontFamily: Mulish(700),
    fontSize: Wp(18),
    color: NoteAppcolor.MenuText,
    marginTop: Wp(5),
    opacity: 0.7,
  },
  DateCont: {
    marginLeft: Wp(5),
  },
  Parent: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
