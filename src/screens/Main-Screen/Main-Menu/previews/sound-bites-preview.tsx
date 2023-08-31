import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@app/common/components/Header";
import { ChearfulLogo, ChevronLeft, ChevronRight } from "@app/svgs/Index";
import { IconComponent } from "@app/types";
import { NavigationHelpers } from "@react-navigation/native";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import { Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import YoutubeIframe from "react-native-youtube-iframe";
import AuthorCont from "./components/author-cont";
import TitleCont from "./components/title-cont";

type Props = {
  navigation: NavigationHelpers<any, any>;
};

const SoundBitesPreview = ({ navigation }: Props) => {
  const { deviceType } = useContext(DeviceContext);
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
        <View style={[deviceType === "tablet" && styles.TabCont]}>
          <TitleCont title={"Imposter Syndrome - what it is, and how to manage it"} />
         <AuthorCont />
          <View
            style={[
              styles.TitleCont,
             styles.YoutubeFrame,
            ]}
          >
            <YoutubeIframe
              height={deviceType === "mobile" ? Wp(250) : Wp(170)}
              width={deviceType === "mobile" ? Wp(400) : Wp(300)}
              play={false}
              videoId={"2Vv-BfVoq4g"}
            />
          </View>
          <View
            style={{
              marginTop: deviceType === "tablet" ? Wp(0) : Wp(10),
            }}
          >
            <Text
              style={[styles.TextStyle,deviceType==='tablet'&&styles.TextStyle_tablet]}
            >
              Do you ever feel like you’re a fake, but you know it isn’t true?
              This is called Imposter Syndrome. And it refers to a psychological
              phenomenon where a person doubts their accomplishments and is
              afraid of being exposed as a fraud, despite their competence and
              achievements. People with imposter syndrome often believe that
              they are not as capable as others perceive them to be, and they
              think their successes come from luck or external factors. Imposter
              syndrome can show up in different ways, such as, feeling
              inadequate, constantly comparing oneself to others, fearing
              failure, and having difficulty accepting positive feedback. The
              causes of imposter syndrome are complex and can include factors
              such as, perfectionism, high expectations, early experiences of
              criticism or failure, and societal pressures. And, sometimes
              certain work cultures that emphasize competition and comparison
              can contribute. Here are some ways you can manage these thoughts
              and feelings: Remind yourself of your successes and the hard work,
              skills and learning that went into them. Pay attention to your
              inner dialogue and challenge negative thoughts about yourself, and
              instead focus on your strengths, and use positive affirmations.
              Talk to trusted friends, family members, or mentors who can
              provide encouragement and perspective. Understand that perfection
              is not always attainable, and it's okay to make mistakes or
              encounter setbacks. Set realistic goals for yourself and celebrate
              progress along the way. Recognize that learning and growth are
              ongoing processes. Remember, imposter syndrome is a common
              experience, and many successful individuals have struggled with it
              at some point. With self-awareness and self-compassion you can
              gradually overcome imposter syndrome and become more confident.
              Thank you for watching, and see you next time.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SoundBitesPreview;

const styles = StyleSheet.create({
  TextStyle_tablet: {
    fontSize:Wp(8),
    textAlign:'center',
  },
  YoutubeFrame: {
    alignItems: "center",
    justifyContent: "center",
  },
  TextStyle: {
    fontFamily: Nunito(400),
    fontSize: Wp(14),
    color: NoteAppcolor.MenuText,
    paddingHorizontal:Wp(10),
  },
  subTitleText_Tablet: {
    fontSize: Wp(7.5),
  },
  subTitleText: {
    fontFamily: Nunito(400),
    fontSize: Wp(14),
    color: NoteAppcolor.MenuText,
  },
  TitleText_Tablet: {
    fontSize: Wp(8),
  },
  TitleText: {
    fontFamily: Nunito(700),
    fontSize: Wp(16),
    color: NoteAppcolor.MenuText,
  },
  TabCont: {
    paddingHorizontal: Wp(30),
  },
  TitleCont: {
    marginVertical: Wp(10),
  },
  TitleStyle_Tablet: {
    fontSize: Wp(16),
    textAlign: "center",
  },
  TitleStyle: {
    fontSize: Wp(22),
    fontFamily: Nunito(700),
    color: NoteAppcolor.Primary,
  },
  Body: {
    backgroundColor: NoteAppcolor.White,
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingVertical: Wp(20),
  },
});
