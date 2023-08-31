import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Wp } from "@app/helper/CustomResponsive";
import Header from "@app/common/components/Header";
import { ChearfulLogo, ChevronLeft } from "@app/svgs/Index";
import { NavigationHelpers } from "@react-navigation/native";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import { IconComponent } from "@app/types";
import { ScrollView } from "react-native-gesture-handler";
import AuthorCont from "./components/author-cont";
import TitleCont from "./components/title-cont";
import BlogImageCont from "./components/blog-image-cont";
import { Nunito } from "@app/helper/FontWeight";

type Props = {
  navigation: NavigationHelpers<any, any>;
};

const BlogPreview = ({ navigation }: Props) => {
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
          <View style={styles.marginTop}>
            <TitleCont title="How Therapy Can Help You Cope with Life Transitions and Losses" />
          </View>
          <View style={styles.marginTop}>
            <AuthorCont />
          </View>
          <View style={styles.marginTop}>
            <BlogImageCont
              image={{
                uri: "https://chearful.com/uploads/users/1/articles/97052210-aticle.jpg",
              }}
            />
          </View>
          <View style={styles.marginTop}>
            <Text
              style={[
                styles.TextStyle,
                deviceType === "tablet" && styles.TextStyle_tablet,
              ]}
            >
              Grief is a profound and complex emotional journey, particularly
              when it comes to the loss of a partner. The pain and emptiness
              that follow can feel overwhelming, and navigating life after such
              a loss may seem daunting. In times of transition and loss, therapy
              can be a guiding light to help you navigate the grieving process.
              In this article, we will explore how to cope with grief and how
              therapy can assist you in coping with life transitions and losses,
              providing hope and healing along the way. Understanding the Grief
              Journey: Grief is a unique and personal experience. A therapist
              can guide you through the stages of grief, offering validation and
              support as you process the emotions associated with your loss.
              Through therapy, you can gain insight into the grieving process,
              helping you make sense of your feelings, thoughts, and reactions
              during this difficult time. Creating a Safe Space for Expression:
              One of the benefits of therapy is the safe and non-judgmental
              space where you can freely express your emotions to learn how to
              cope with grief. Grief often encompasses a wide range of emotions,
              including sadness, anger, guilt, and confusion. A therapist
              provides a compassionate and understanding environment where you
              can share your feelings openly, helping you to process your grief.
              Developing Coping Strategies: Life transitions and losses bring
              about significant changes, and therapy can help you develop
              effective coping strategies to navigate these shifts. A therapist
              can guide you in exploring healthy coping mechanisms tailored to
              your specific needs, such as journaling, mindfulness practices,
              self-care routines, and engaging in supportive social connections.
              Addressing Life Transitions: Therapy is not only beneficial for
              how to deal with grief but also for managing the broader
              transitions that occur in life after losing a partner. Whether
              it's adjusting to a new identity, redefining your goals, or
              reshaping your daily routines, therapy provides a space to explore
              these changes and find meaning in your life moving forward. A
              therapist can offer guidance, support, and practical strategies to
              help you navigate the complexities of life transitions.
              Rediscovering Purpose and Meaning: In the wake of loss, therapy
              can assist you in rediscovering your sense of purpose and meaning.
              Together with a therapist, you can explore your values,
              aspirations, and sources of fulfilment. By engaging in this
              process you can discover new passions, build a support network,
              and find meaning in life beyond your loss. Grief after losing a
              partner is an immense burden to bear but therapy can provide step
              by step guidance on how to deal with grief as well as solace, and
              support during this difficult time. Remember, healing takes time,
              and with the help of therapy, you can find comfort, resilience,
              and hope in the face of grief.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogPreview;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: NoteAppcolor.White,
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingVertical: Wp(20),
  },
  marginTop: {
    marginTop: Wp(10),
  },
  TabCont: {
    paddingHorizontal: Wp(30),
  },
  TextStyle_tablet: {
    fontSize: Wp(8),
    textAlign: "center",
  },

  TextStyle: {
    fontFamily: Nunito(400),
    fontSize: Wp(14),
    color: NoteAppcolor.MenuText,
    paddingHorizontal: Wp(10),
  },
});
