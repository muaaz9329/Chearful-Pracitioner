import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@app/common/components/Inputs/search-input";
import Header from "@app/common/components/Header";
import { ChevronLeft } from "@app/svgs/Index";
import { NavigationHelpers } from "@react-navigation/native";
import { IconComponent } from "@app/types";
import { IconBookmark } from "tabler-icons-react-native";
import { Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import TagsFilter from "@app/common/components/tags-filter";
import { SoundbitesCard } from "@app/common/components/Cards";
import useSoundBitesFilter from "./hooks/use-soundBites-filter";

const DEFAULT_DATA = [
  {
    index: 0,
    tags: ["Counseling"],
    title: "Imposter Syndrome - What It does to you mind",
  },
  {
    index: 1,
    tags: ["Couple Therapy", "Depression"],
    title: "Why do we need to talk about mental health?",
  },
  {
    index: 2,
    tags: ["Family Therapy", "Grief", "Depression"],
    title: "Why do we need to talk about mental health?",
  },
  {
    index: 3,
    tags: ["Marriage", "Group Therapy", "Individual Therapy"],
    title:
      "Group Therapy, Individual Therapy, Why do we need to talk about mental health",
  },
  {
    index: 4,
    tags: ["Marriage", "Relationship", "Stress", "Trauma "],
    title: "stress and trauma",
  },
];

const MainMenu = ({
  navigation,
}: {
  navigation?: NavigationHelpers<any, any>;
}) => {
  const { data, setSearchTitle, setSelectedTag } =
    useSoundBitesFilter(DEFAULT_DATA); //* Api DATA will be passed here , could be from redux or from api call , but for now it is from local data
  return (
    <SafeAreaView style={styles.body} edges={["top"]}>
      <Header
        Icon={ChevronLeft as IconComponent}
        pram="back"
        navigation={navigation}
        HeaderType="New"
      >
        <View>
          <Text style={styles.Title}>Soundbites</Text>
        </View>
        <Pressable>
          <IconBookmark size={Wp(25)} />
        </Pressable>
      </Header>
      <View style={styles.TopMargin}>
        <SearchInput
          onChangeText={(text) => {
            setSearchTitle(text);
          }}
        />
      </View>
      <View style={styles.TopMargin}>
        <TagsFilter setTags={setSelectedTag} />
      </View>
      <FlatList
        style={styles.TopMargin}
        data={data}
        renderItem={({ item }) => <SoundbitesCard />}
        keyExtractor={(item) => item.index}
      />
    </SafeAreaView>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: Wp(20),
    paddingVertical: Wp(16),
  },
  Title: {
    fontSize: Wp(20),
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
  },
  TopMargin: {
    marginTop: Wp(15),
  },
});
