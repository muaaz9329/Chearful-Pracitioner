import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Wp } from "@app/helper/CustomResponsive";
import { Image } from "react-native-animatable";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

type Props = {
  image?: ImageSourcePropType;
};

const BlogImageCont = ({ image }: Props) => {
  const { deviceType } = useContext(DeviceContext);
  return (
    <View style={{
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Image
      //@ts-ignore
        source={image}
        style={[styles.Frame, deviceType === "tablet" && styles.Frame_Tablet]}
        resizeMode="cover"
      />
    </View>
  );
};

export default BlogImageCont;

const styles = StyleSheet.create({
  Frame: {
    height: Wp(250),
    width: Wp(400),
  },
  Frame_Tablet: {
    height: Wp(170),
    width: Wp(300),
  },
});
