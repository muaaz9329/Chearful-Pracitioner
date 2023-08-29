import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Wp, wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { AppImages } from "@app/common/Images";

type Props = {
  Data?: {
    img: ImageSourcePropType;
  };
};
const DefaultValues = {
  img: AppImages.defaultResourseImage
};
const ResourseCard = ({ Data = DefaultValues }: Props) => {
  return (
    <Pressable
      style={styles.Parent}
      onPress={() => {
        console.log("Pressed");
      }}
    >
      <ImageBackground
        style={styles.cardCont}
        source={Data.img}
       
      ></ImageBackground>
    </Pressable>
  );
};

export default ResourseCard;

const styles = StyleSheet.create({
  cardCont: {
    borderWidth: Wp(1),
    borderColor: NoteAppcolor.ContColor,
    width: wp(48),
    height: Wp(180),
    borderRadius: Wp(20),
    overflow: "hidden",
    justifyContent: "flex-end",
    marginBottom: Wp(20),
  },
  Parent: {
    marginRight: Wp(10),
  },
});
