import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Header from "../../ConstantComponents/Header";
import { ChevronLeft, Dot } from "../../../../svgs/Index";
import { FontSize, Wp } from "../../../../helper/CustomResponsive";
import { NoteAppcolor } from "../../constants/NoteAppcolor";
import { Mulish, Nunito } from "../../../../helper/FontWeight";
import NotesCard from "./components/NotesCard";
import notesCardData from "../../Data/NotesCardData";
import { DateConstrctor } from "../../../../helper/customFunction";

const NotesPreview = ({ navigation,route }) => {
  const {ClientData} = route.params
  return (
    <View style={styles.Body}>
      <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
        <View style={styles.CardContet}>
          <View style={styles.Cont1}>
            <Image
              source={ClientData.Picture}
              style={styles.ClientImage}
            />
          </View>
          <View style={styles.CardTextCont}>
            <Text style={styles.Name}>{ClientData.Name}</Text>
            <View style={styles.LastVisitCont}>
              <Text style={styles.LastVisitText}>{DateConstrctor(new Date(ClientData.LastVisitDate)).Date}</Text>
              <View style={styles.DotMargin}>
                <Dot
                  width={Wp(4)}
                  height={Wp(4)}
                  color={NoteAppcolor.Primary}
                />
              </View>
              <Text style={styles.LastVisitText}>{DateConstrctor(new Date(ClientData.LastVisitDate)).Time}</Text>
            </View>
          </View>
        </View>
      </Header>

      <ScrollView style={{ marginTop: Wp(20) }}>
        <NotesCard
          Arr={notesCardData}
          navigation={navigation}
          ClientData={ClientData}
        />
      </ScrollView>
    </View>
  );
};

export default NotesPreview;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingTop: Wp(20),
  },
  ClientImage: {
    width: Wp(43),
    height: Wp(43),
    borderRadius: Wp(25),
    resizeMode: "contain",
    marginEnd: Wp(7),
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
    fontSize: FontSize(10),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
  },
  CardContet: {
    flexDirection: "row",
    alignItems: "center",
  },
  DotMargin:{
    marginHorizontal:Wp(5)
  }
});
