import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode, useContext } from "react";
import { NavigationHelpers } from "@react-navigation/native";
import { DoodleComponent } from "@app/types";
import { FontSize, Hp, Wp } from "@app/helper/CustomResponsive";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Mulish, Nunito } from "@app/helper/FontWeight";

interface Props {
  navigation: NavigationHelpers<any, any>;
  location: string;
  Shape: "Square" | "Rectangle";
  Doodle: React.ReactElement<DoodleComponent>;
  Title: string;
  SubTitle?: string;
  backgroundColor: string;
  style?: StyleProp<ViewStyle>;
  doodleStyle?: StyleProp<ViewStyle>;
}

const Container = ({
  navigation,
  Doodle,
  Shape,
  SubTitle,
  Title,
  backgroundColor,
  location,
  style,
  doodleStyle
}: Props) => {
  const { deviceType } = useContext(DeviceContext);
  return (
    <Pressable onPress={() => navigation.navigate(location)}>
      <View
        style={[
          Shape === "Rectangle" ? styles.RectangleCont : styles.SquareCont,

          { backgroundColor: backgroundColor },
          style,
          deviceType === "tablet" && styles.RectangleCont_Tablet,
        ]}
      >
        <Text
          style={[
            styles.MenuText,
            deviceType === "tablet" && {
              fontSize: FontSize(10),
            },
          ]}
        >
          {Title} {"\n"}
          {deviceType === "tablet" && (
            <Text style={[styles.MenuTextSub_Tablet]}>{SubTitle}</Text>
          )}
        </Text>

        <View
          style={
            [deviceType === "tablet" ? styles.MenuImage_Tablet : styles.MenuImage,
            doodleStyle]
          }
        >
          {Doodle}
        </View>
      </View>
    </Pressable>
  );
};

export default Container;

const styles = StyleSheet.create({
  RectangleCont: {
    height: Wp(216),
    width: wp(44),
    borderRadius: Wp(30),
    paddingTop: Wp(15),
    paddingStart: Wp(12),
    justifyContent: "space-between",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  RectangleCont_Tablet: {
    width: wp(70),
    height: Wp(60),
    borderRadius: Wp(14),
    paddingTop: Wp(10),
  },
  MenuText: {
    fontSize: FontSize(20),
    fontFamily: Mulish(700),
    color: "#1D1A0E",
  },
  MenuTextSub_Tablet: {
    fontSize: FontSize(8),
    fontFamily: Nunito(400),
    color: "#1D1A0E",
    opacity: 0.7,
  },
  MenuImage: {
    alignSelf: "flex-end",
    resizeMode: "cover",
  },
  MenuImage_Tablet: {
    position: "absolute",
    alignSelf: "flex-end",
    bottom: Wp(-10)
    
  },
  SquareCont: {
    height: wp(40.5),
    width: wp(44),
    borderRadius: Wp(30),
    paddingTop: Wp(15),
    paddingStart: Wp(12),
    justifyContent: "space-between",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
});
