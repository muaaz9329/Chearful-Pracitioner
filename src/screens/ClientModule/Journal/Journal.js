import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import Header from "@CommonComponents/Header";
import { ChevronLeft } from "@app/svgs/Index";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { FlatList } from "react-native-gesture-handler";
import JournalData from "../Data/JournalData";
import JournalCard from "./Components/JournalCard";
import Calender from "./Components/Calender";
import DateData from "../Data/DateData";
import { Divider } from "react-native-paper";
import { IconPlus } from "tabler-icons-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Journal = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Body} edges={["left", "right", "top"]}>
      <View style={styles.HeaderCont}>
        <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
          <Text style={styles.HeaderText}>Journal</Text>
        </Header>
        <Calender DateData={DateData} />
        <Divider bold />
      </View>

      <FlatList
        data={JournalData}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("Client_JournalPreview", { JournalData: item })
              }
            >
              <JournalCard
                content={item.content}
                date={item.date}
                type={item.type}
                key={index}
              />
            </Pressable>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.AddCont}>
        <Pressable
          style={styles.AddBtn}
          onPress={() => navigation.navigate("Client_AddJournal")}
        >
          <IconPlus size={Wp(30)} color={NoteAppcolor.White} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Journal;

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: Wp(16),
    paddingTop: Platform.OS == "android" ? Wp(20) : Wp(10),
  },
  HeaderText: {
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(24),
  },
  HeaderCont: {
    marginBottom: Wp(3),
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
    bottom:  Platform.OS == 'android'? Wp(10):Wp(25),
    right: Platform.OS == 'android'? Wp(10):Wp(25),
  },
});
