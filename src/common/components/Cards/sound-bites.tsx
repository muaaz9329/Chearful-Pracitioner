import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationHelpers } from "@react-navigation/native";
import { AppImages } from "@app/common/Images";
import { Wp, wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import AuthorCont from "../author-cont";

interface IncomingApiData {
  img: ImageSourcePropType;
  title: string;
  postedBy: {
    author: string;
    date: Date;
  };
  description: string;
  id: number;
  tag: string[];
}

type Props = {
  navigation?: NavigationHelpers<any, any>;
  data?: IncomingApiData;
};

const DEFAULT_PROP_DATA: IncomingApiData = {
  img: AppImages.defaultSoundImage,
  title: "Imposter Syndrome - What It does to you mind",
  postedBy: {
    author: "Chearful Author",
    date: new Date(),
  },
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  id: 0,
  tag: ["Default", "Test", "Tag"],
};

const SoundBitesCard = ({ navigation, data = DEFAULT_PROP_DATA }: Props) => {
  const handleNavigation = () => {
    navigation?.navigate("Soundbites", { id: data.id });
  };
  return (
  
      <Pressable onPress={handleNavigation} style={[styles.Cont]}>
        <Image source={data.img} style={styles.soundBitesImg} />
        <View style={styles.Cont2}>
          <View>
            <Text style={styles.title}>
              {data.title.length > 22
                ? data.title.slice(0, 28) + "..."
                : data.title}
            </Text>
            <Text style={styles.AuthorTextStyle}>
              Posted by {data.postedBy.author}
            </Text>
          </View>
          <View>
            <Text style={styles.AuthorTextStyle}>
              {data.description.length > 70
                ? data.description.slice(0, 70) + "..."
                : data.description}
            </Text>
          </View>
        </View>
      </Pressable>
    
  );
};

export default SoundBitesCard;

const styles = StyleSheet.create({
  Cont: {
    padding: Wp(12),
    flexDirection: "row",
    backgroundColor: NoteAppcolor.OffWhiteCont,
    borderRadius: Wp(12),
    marginVertical:Wp(5)
  },
  soundBitesImg: {
    width: Wp(80),
    height: Wp(80),
    resizeMode: "cover",
    borderRadius: Wp(12),
    marginRight: Wp(12),
  },
  Cont2: {
    justifyContent: "space-between",

    width: wp(60),
  },
  title: {
    fontSize: Wp(16),
    fontFamily: Nunito(700),
    color: NoteAppcolor.Primary,
  },
  AuthorTextStyle: {
    fontFamily: Mulish(500),
    fontSize: Wp(12),
    color: NoteAppcolor.MenuText,
    opacity: 0.7,
    matginTop: Wp(5),
  },
  description: {},
});
