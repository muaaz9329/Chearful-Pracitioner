import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Wp, hp, wp } from "@app/helper/CustomResponsive";

import { ChearfulLogo, ChevronLeft, Dot } from "@app/svgs/Index";
import { IconComponent } from "@app/types";
import { NavigationHelpers } from "@react-navigation/native";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import Header from "@app/common/components/Header";
import TitleCont from "./components/title-cont";
import PagerView from "react-native-pager-view";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import { ColorWithopacity } from "@app/helper/customFunction";

type Props = {
  navigation: NavigationHelpers<any, any>;
};

const WellBeingPreview = ({ navigation }: Props) => {
  const { deviceType } = useContext(DeviceContext);
  const PagerRef = React.useRef(null);
  const [page, setPage] = React.useState(0);
  const Trigger = [
    "Physiological People with ASPD may have unusual levels of serotonin.",
    "Psychological About half of people with ASPD also have problems with drug or alcohol abuse.",
    "Biological Men are more likely than women to develop ASPD",
    "History of Emotional & Psychological trauma during childhood that influences their behavior ",
  ];
  const Symptoms = [
    "Disregard for right and wrong",
    "Being callous, cynical and disrespectful of others",
    "Repeatedly violating the rights of others through intimidation and dishonesty",
    "Failure to consider the negative consequences of behavior or learn from them",
  ];
  const Treatment = [
    " Psychotherapy",
    "Cognitive behavioral therapy (CBT)",
    "Family therapy",
    "Medication",
  ];
  const ListItem = ({ title, index }: { title: string; index: number }) => {
    return (
      <View
        style={{
          marginTop: deviceType === "mobile" ? Wp(5) : Wp(2),
        }}
      >
        <Text
          style={[
            styles.TextStyle,
            deviceType === "tablet" && styles.TextStyle_tablet,
          ]}
        >
          {index}: {title}
        </Text>
      </View>
    );
  };

  const handleScroll = (index: number) => {
    if (PagerRef.current) {
      //@ts-ignore
      PagerRef.current.setPage(index);
      setPage(index);
    }
  };
  //@ts-ignore
  const handlePageSelected = (event) => {
    const { position } = event.nativeEvent;
    const index = Math.round(position);

    setPage(event.nativeEvent.position);
  };
  return (
    <SafeAreaView style={styles.Body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          Icon={ChevronLeft as IconComponent}
          pram={"back"}
          navigation={navigation}
        >
          <ChearfulLogo
            height={deviceType === "mobile" ? Wp(27) : Wp(20)}
            width={deviceType === "mobile" ? Wp(122) : Wp(90)}
            color={NoteAppcolor.Primary}
          />
        </Header>
        <View
          style={[
            deviceType === "tablet" && {
              paddingHorizontal: Wp(30),
            },
          ]}
        >
          <View style={styles.marginTop}>
            <TitleCont title="Anti-social personality Disorder" />
          </View>
          <View style={styles.marginTop}>
            <View
              style={[
                styles.menuCont,
                deviceType == "tablet" && {
                  width: wp(60),
                },
              ]}
            >
              <Text
                style={[
                  styles.menuText,
                  {
                    color: page === 0 ? NoteAppcolor.Primary : "gray",
                  },
                  deviceType === "tablet" && styles.menuText_Tablet,
                ]}
                onPress={() => {
                  handleScroll(0);
                }}
              >
                Overview
              </Text>
              <Text
                style={[
                  styles.menuText,
                  {
                    color: page === 1 ? NoteAppcolor.Primary : "gray",
                  },
                  deviceType === "tablet" && styles.menuText_Tablet,
                ]}
                onPress={() => {
                  handleScroll(1);
                }}
              >
                Triggers & Symptoms
              </Text>
              <Text
                style={[
                  styles.menuText,
                  {
                    color: page === 2 ? NoteAppcolor.Primary : "gray",
                  },
                  deviceType === "tablet" && styles.menuText_Tablet,
                ]}
                onPress={() => {
                  handleScroll(2);
                }}
              >
                Treatment
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: deviceType === "tablet" ? Wp(10) : Wp(20),
            }}
          >
            <PagerView
              style={[
                styles.viewPager,
                deviceType === "tablet" && styles.viewPager_Tablet,
              ]}
              initialPage={0}
              orientation={"horizontal"}
              ref={PagerRef}
              onPageSelected={handlePageSelected}
            >
              <View key="1">
                <Text
                  style={[
                    styles.ContTitle,
                    deviceType === "tablet" && styles.ContTitle_tablet,
                  ]}
                >
                  Overview
                </Text>
                <Text
                  style={[
                    styles.TextStyle,
                    deviceType === "tablet" && styles.TextStyle_tablet,
                  ]}
                >
                  Anti-social personality disorder is also sometimes referred to
                  as sociopathy, and is used to identify people who behave with
                  complete disregard for others' feelings. They demonstrate an
                  indifference to whether they cause hurt or not. They show no
                  guilt or remorse for their behavior. Characteristics include:
                </Text>
                <ListItem title="Lack of empathy for others" index={1} />
                <ListItem
                  title="It falls on a spectrum, which means it can range in severity from occasional bad behavior to repeatedly breaking the law and committing serious crimes."
                  index={2}
                />
                <ListItem
                  title="Psychopaths are considered to have a severe form of antisocial personality disorder."
                  index={3}
                />
              </View>

              <View key="2">
                <Text
                  style={[
                    styles.ContTitle,
                    deviceType === "tablet" && styles.ContTitle_tablet,
                  ]}
                >
                  Triggers
                </Text>
                <ListItem
                  title="Physiological People with ASPD may have unusual levels of serotonin."
                  index={1}
                />
                <ListItem
                  title="Psychological About half of people with ASPD also have problems with drug or alcohol abuse."
                  index={2}
                />
                <ListItem
                  title="Biological Men are more likely than women to develop ASPD."
                  index={3}
                />
                <ListItem
                  title="History of Emotional & Psychological trauma during childhood that influences their behavior"
                  index={4}
                />
                <View style={styles.marginTop}>
                  <Text
                    style={[
                      styles.ContTitle,
                      deviceType === "tablet" && styles.ContTitle_tablet,
                    ]}
                  >
                    Symptoms
                  </Text>
                  <ListItem title="Disregard for right and wrong" index={1} />
                  <ListItem
                    title="Being callous, cynical and disrespectful of others"
                    index={2}
                  />
                  <ListItem
                    title="Repeatedly violating the rights of others through intimidation and dishonesty"
                    index={3}
                  />
                  <ListItem
                    title="Failure to consider the negative consequences of behavior or learn from them"
                    index={4}
                  />
                </View>
              </View>

              <View key="3">
                <Text
                  style={[
                    styles.ContTitle,
                    deviceType === "tablet" && styles.ContTitle_tablet,
                  ]}
                >
                  Treatment
                </Text>
                <ListItem title="Psychotherapy" index={1} />
                <ListItem
                  title="Cognitive behavioral therapy (CBT)"
                  index={2}
                />
                <ListItem title="Family therapy" index={3} />
                <ListItem title="Medication" index={4} />
              </View>
            </PagerView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WellBeingPreview;

const styles = StyleSheet.create({
  TextStyle_tablet: {
    fontSize: Wp(9),
  },
  ContTitle_tablet: {
    fontSize: Wp(14),
  },
  menuText_Tablet: {
    fontSize: Wp(10),
  },
  viewPager_Tablet: {
    width: wp(60),
    height: hp(80),
    overflow: "scroll",
  },
  ContTitle: {
    fontFamily: Nunito(700),
    fontSize: Wp(22),
    color: NoteAppcolor.Primary,
  },
  TextStyle: {
    fontFamily: Nunito(400),
    fontSize: Wp(14),
    color: NoteAppcolor.MenuText,
    marginTop: Wp(10),
  },
  menuCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(90),
    alignSelf: "center",
  },
  menuText: {
    fontSize: Wp(14),
    fontFamily: Mulish(700),
  },
  Body: {
    backgroundColor: NoteAppcolor.White,
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingVertical: Wp(20),
  },
  marginTop: {
    marginTop: Wp(10),
  },
  viewPager: {
    width: wp(90),

    height: hp(80),
    alignSelf: "center",
  },
});
