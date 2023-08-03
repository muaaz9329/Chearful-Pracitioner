import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import Book from "./Book";
import { interpolate } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Nunito } from "@app/helper/FontWeight";
import { FontSize } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { capitalizeFirstLetter } from "@app/helper/customFunction";
import Carousel from "react-native-reanimated-carousel";
const JounalCard = ({ type }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.body, { width }]}>
      <View style={styles.BookCont}>
        <Book type={type} />
      </View>

      <Text style={styles.TitleText}>{capitalizeFirstLetter(type)}</Text>
    </View>
  );
};

const JounalType = ({ setState }) => {
  const { width } = useWindowDimensions();
  const Data = [
    { type: "gratitude" },
    { type: "free-write" },
    { type: "stress" },
    { type: "self care" },
  ];
  const WindowWidth = width;
  const animationStyle = React.useCallback((value) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const rotateZ = `${interpolate(value, [-1, 0, 1], [-45, 0, 30])}deg`;
    const translateX = interpolate(
      value,
      [-1, 0, 1],
      [-WindowWidth, 0, WindowWidth]
    );

    return {
      transform: [{ rotateZ }, { translateX }],
      zIndex,
    };
  }, []);

  return (
    <Carousel
      loop
      width={width}
      height={hp(57) + 10}
      data={Data}
      onScrollEnd={(index) => {
        setState(Data[index].type);
      }}
      renderItem={({ item, index }) => {
        return <JounalCard type={item.type} />;
      }}
      autoPlay={false}
      customAnimation={animationStyle}
    />
  );
};

export default JounalType;

const styles = StyleSheet.create({
  body: {
    height: hp(65),

    backgroundColor: "#ffffff",
  },
  BookCont: {
    width: wp(100),
    height: hp(50),
    justifyContent: "center",
    alignItems: "center",
  },
  TitleText: {
    fontFamily: Nunito(700),
    fontSize: FontSize(30),
    textAlign: "center",
    color: NoteAppcolor.MenuText,
  },
});
