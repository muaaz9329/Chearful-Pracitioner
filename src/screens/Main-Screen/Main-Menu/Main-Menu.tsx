import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import { ChearfulLogo } from "@app/svgs/Index";
import { Hp, Wp, wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { SoundbitesCard } from "@app/common/components/Cards";
import { Nunito } from "@app/helper/FontWeight";

import BlogCont from "./Components/blog-cont";
import ResourseCont from "./Components/resourse-cont";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import CommunityCont from "./Components/community-cont";
import { IconArrowRight } from "tabler-icons-react-native";

const MainMenu = () => {
  const { deviceType } = useContext(DeviceContext);
  return (
    <SafeAreaView style={styles.Body}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          deviceType === "tablet" && styles.TabletCont
        ]}
      >
        <View style={styles.Logo}>
          <ChearfulLogo
            width={deviceType === "mobile" ? wp(50) : wp(30)}
            height={deviceType === "mobile" ? wp(20) : wp(10)}
            color={NoteAppcolor.Primary}
          />
        </View>
        <Text
          style={[styles.Title, deviceType === "tablet" && styles.Title_Tablet]}
        >
          {" "}
          Sound Bites
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            data={[1, 2, 3]} // array of data  for the Card will come here
            renderItem={({ item }) => <SoundbitesCard />}
            width={deviceType === "tablet" ? wp(40) : wp(80)}
            height={deviceType === "tablet" ? Wp(150) : Wp(300)}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            mode={"parallax"}
          />
        </View>
        <Text
          style={[styles.Title, deviceType === "tablet" && styles.Title_Tablet]}
        >
          Blogs
        </Text>
        <View style={styles.BlogsAndArticleCont}>
          <BlogCont />
        </View>
        <Text
          style={[styles.Title, deviceType === "tablet" && styles.Title_Tablet]}
        >
          Wellbeing Resources
        </Text>
        <View style={styles.BlogsAndArticleCont}>
          <ResourseCont />
        </View>
        <Text
          style={[styles.Title, deviceType === "tablet" && styles.Title_Tablet]}
        >
          Community
        </Text>

        <View style={styles.BlogsAndArticleCont}>
          <CommunityCont />
          <View
            style={styles.ExploreMoreCont}
          >
            <Text
              style={[
                styles.Title,
                { fontSize: Wp(14) },
                deviceType === "tablet" && { fontSize: Wp(8) },
              ]}
            >
              Explore More
            </Text>
            <IconArrowRight
              size={deviceType === "tablet" ? Wp(13) : Wp(20)}
              color={NoteAppcolor.Primary}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  TabletCont: {
    width: wp(60),
    alignSelf: "center",
  },
  ExploreMoreCont: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  Title_Tablet: {
    fontSize: Wp(13),
  },
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
