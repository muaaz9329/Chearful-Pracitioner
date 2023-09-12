import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
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

const MainMenu = ({
  navigation,
}: {
  navigation?: NavigationHelpers<any, any>;
}) => {
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
        <SearchInput />
      </View>
      <View style={styles.TopMargin}>
        <TagsFilter />
      </View>
      <FlatList
        style={styles.TopMargin}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <SoundbitesCard />}
        keyExtractor={(item) => item.toString()}
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
