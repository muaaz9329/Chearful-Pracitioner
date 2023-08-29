import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { ChearfulLogo } from "@app/svgs/Index";
import { Hp, Wp, wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import {  SoundbitesCard } from "@app/common/components/Cards";
import {  Nunito } from "@app/helper/FontWeight";

import BlogCont from "./Components/blog-cont";
import ResourseCont from "./Components/resourse-cont";

const MainMenu = () => {
  return (
    <SafeAreaView style={styles.Body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Logo}>
          <ChearfulLogo
            width={wp(50)}
            height={wp(20)}
            color={NoteAppcolor.Primary}
          />
        </View>
        <Text style={styles.Title}> Sound Bites</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            data={[1, 2, 3]} // array of data  for the Card will come here
            renderItem={({ item }) => <SoundbitesCard />}
            width={wp(80)}
            height={Wp(300)}
            style={{
              justifyContent: "center",
              alignItems: "center",
              
            }}
            mode={"parallax"}
          />
        </View>
        <Text style={styles.Title}>Blogs</Text>
        <View style={styles.BlogsAndArticleCont}>
          <BlogCont />
        </View>
        <Text style={styles.Title}>Wellbeing Resources</Text>
        <View style={styles.BlogsAndArticleCont}>
          <ResourseCont />
        </View>
        <View style={styles.BlogsAndArticleCont}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  Title: {
    fontSize: Wp(30),
    fontFamily: Nunito(700),
    color: NoteAppcolor.Primary,
    marginVertical: Wp(5),
  },
  Body: {
    flex: 1,
    paddingHorizontal: Wp(10),
    paddingTop: Platform.OS == "android" ? Wp(20) : Wp(10),
  },
  Logo: {
    alignSelf: "center",
  },
  BlogsAndArticleCont: {
    marginTop: Hp(20),
  },
});
