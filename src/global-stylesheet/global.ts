import { Falsy, RecursiveArray, RegisteredStyle, StyleSheet, StyleSheetProperties, TextStyle, ViewStyle } from "react-native";
import { Wp, Hp, wp, hp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish, Nunito } from "@app/helper/FontWeight";
 export default StyleSheet.create({
  //* Text Sizes
  Text_8: {
    fontSize: Wp(8),
  },
  Text_10: {
    fontSize: Wp(10),
  },
  Text_12: {
    fontSize: Wp(12),
  },
  Text_14: {
    fontSize: Wp(14),
  },
  Text_16: {
    fontSize: Wp(16),
  },
  Text_18: {
    fontSize: Wp(18),
  },
  Text_20: {
    fontSize: Wp(20),
  },
  //* Font Family
  font_mulish_100: {
    fontFamily: Mulish(100),
  },
  font_mulish_200: {
    fontFamily: Mulish(200),
  },
  font_mulish_300: {
    fontFamily: Mulish(300),
  },
  font_mulish_400: {
    fontFamily: Mulish(400),
  },
  font_mulish_500: {
    fontFamily: Mulish(500),
  },
  font_mulish_600: {
    fontFamily: Mulish(600),
  },
  font_mulish_700: {
    fontFamily: Mulish(700),
  },
  font_mulish_800: {
    fontFamily: Mulish(800),
  },
  font_nunito_100: {
    fontFamily: Nunito(100),
  },
  font_nunito_200: {
    fontFamily: Nunito(200),
  },
  font_nunito_300: {
    fontFamily: Nunito(300),
  },
  font_nunito_400: {
    fontFamily: Nunito(400),
  },
  font_nunito_500: {
    fontFamily: Nunito(500),
  },
  font_nunito_600: {
    fontFamily: Nunito(600),
  },
  font_nunito_700: {
    fontFamily: Nunito(700),
  },
  font_nunito_800: {
    fontFamily: Nunito(800),
  },
  //* Text Color
  text_color_white: {
    color: NoteAppcolor.White,
  },
  text_color_black: {
    color: NoteAppcolor.MenuText,
  },
  text_color_primary: {
    color: NoteAppcolor.Primary,
  },
  text_color_secondary: {
    color: NoteAppcolor.Secondary,
  },
  text_color_tertiary: {
    color: NoteAppcolor.ContColor,
  },
  BodyPadding: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: Wp(16),
    paddingHorizontal: Wp(20),
  },
});

