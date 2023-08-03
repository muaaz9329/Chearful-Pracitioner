import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@CommonComponents/Header";
import { ChevronLeft } from "@svg";
import { FontSize, Wp } from "@helper/CustomResponsive";
import CardHeader from "./components/CardHeader";
import MoodDiaryData from "../Data/MoodDiaryData";
import { Mulish, Nunito } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";

const PreviewDiary = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor:"white"}}>
    <View style={styles.body} >
      <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}  />

      <View style={styles.header}>
        <CardHeader size="lg" Item={MoodDiaryData[0]} />
      </View>
      <View style={styles.TextCont}>
        <Text style={styles.Title}>{MoodDiaryData[0].Title}</Text>
        <Text style={styles.Content}>{MoodDiaryData[0].Content}</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default PreviewDiary;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: Wp(16),
    paddingTop:Platform.OS =='android'? Wp(20):Wp(10),
  },
  header: {
    marginTop: Wp(20),
  },
  Title: {
    fontSize: FontSize(22),
    fontFamily: Nunito(800),
    color: NoteAppcolor.Primary,
    textAlign:'center'
  },
  Content:{
    fontSize: FontSize(16),
    fontFamily: Mulish(600),
    color: NoteAppcolor.Primary,
    opacity:0.5,
    textAlign:'center'
  },
  TextCont:{
    marginTop:Wp(10)
  }
});
