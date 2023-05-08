import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import { ChevronLeft } from "@svg";
import Header from "@CommonComponents/Header";
import CardDesign from "./components/CardDesign";
import SessionData from "../../Data/SessionData.js";
import AnimatedFlatList from "@constants/AnimatedFlatList";
import DateAndFilter from "@CommonComponents/DateAndFilter";
import { SafeAreaView } from "react-native-safe-area-context";

const Session = ({ navigation }) => {
  const [data, setData] = useState(SessionData);
  return (
    <SafeAreaView style={{ backgroundColor: NoteAppcolor.White, flex: 1 }} edges={['top','right','left']}>
      <View style={styles.Body}>
        <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
          <Text style={styles.Text}>Sessions</Text>
        </Header>
        <DateAndFilter
          ArrayData={data}
          Property={"LastVisitDate"}
          setArrayData={setData}
        />
      </View>

      <AnimatedFlatList
        data={data}
        renderItem={({ item, index }) => (
          <CardDesign Data={item} key={index} navigation={navigation} />
        )}
        contentContainerStyle={{
          paddingTop: Wp(10),
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Session;

const styles = StyleSheet.create({
  Body: {
    paddingHorizontal: Wp(16),
    paddingTop:Platform.OS=='android' ? Wp(20):Wp(10),
  },
  Text: {
    fontFamily: Mulish(700),
    fontSize: FontSize(23),
    color: NoteAppcolor.Primary,
  },
  cardCont: {
    marginTop: Wp(15),
  },
});
