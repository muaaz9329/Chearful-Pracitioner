import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { FontSize, Wp } from "@helper/CustomResponsive.js";
import Header from "@CommonComponents/Header";
import { ChevronLeft } from "@svg";
import { Mulish } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Divider } from "react-native-paper";
import MoodDiaryData from "../Data/MoodDiaryData";
import CardDesign from "./components/CardDesign";
import { IconPlus } from "tabler-icons-react-native";
import DateAndFilter from "@CommonComponents/DateAndFilter";
import AddDiary from "./components/AddDiary";
import { useRef } from "react";
const Diary = ({ navigation }) => {
  const [Data, setData] = useState(MoodDiaryData);
  const SheetRef = useRef(null);
  return (
    <View style={styles.body}>
      <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
        <Text style={styles.HeadTitle}>Mood Diary</Text>
      </Header>
      <DateAndFilter
        setArrayData={setData}
        ArrayData={Data}
        Property={"Date"}
      />
      <Divider bold={true} />

      <FlatList
        data={MoodDiaryData}
        renderItem={({ item, index }) => {
          return (
            <Pressable onPress={() => navigation.navigate("MoodDiaryPreview")} key={index}>
              <CardDesign Item={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.Title}
        style={{ marginTop: Wp(10) }}
        contentContainerStyle={{ paddingBottom: Wp(20) }}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.AddCont}>
        <Pressable
          style={styles.AddBtn}
          onPress={() => SheetRef.current.HandleOpen()}
        >
          <IconPlus size={Wp(30)} color={NoteAppcolor.White} />
        </Pressable>
      </View>
      <AddDiary ref={SheetRef} />
    </View>
  );
};

export default Diary;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: Wp(16),
    paddingTop: Wp(20),
  },
  HeadTitle: {
    fontFamily: Mulish(700),
    fontSize: FontSize(23),
    color: NoteAppcolor.Primary,
  },
  AddBtn: {
    backgroundColor: NoteAppcolor.Primary,

    height: Wp(50),
    width: Wp(50),
    borderRadius: Wp(25),
    justifyContent: "center",
    alignItems: "center",
  },
  AddCont: {
    position: "absolute",
    bottom: Wp(10),
    right: Wp(10),
  },
});
