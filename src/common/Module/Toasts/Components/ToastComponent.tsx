import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconX } from "tabler-icons-react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish } from "@app/helper/FontWeight";
import { ToastComponentProps } from "../types/types";

const ToastComponent: React.FC<ToastComponentProps> = ({
  LeftIcon,
  ContainerBg,
  Title,
  TitleColor,
  SubText,
  SubTextColor,
  Hidefunc,
}) => {
  return (
    <View
      style={{
        width: wp(95),
        backgroundColor: ContainerBg,
        borderRadius: Wp(12),
        paddingVertical: Wp(10),
        paddingHorizontal: Wp(10),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ padding: Wp(10) }}>
            <LeftIcon size={Wp(20)} color={TitleColor} stroke={3} />
          </View>
          <View>
            <Text
              style={{
                color: TitleColor,
                fontSize: Title.length > 32 ? Wp(12) : Wp(16),
                fontFamily: Mulish(700),
              }}
            >
              {Title}
            </Text>
            {SubText && (
              <Text
                style={{
                  color: SubTextColor,
                  fontSize: Wp(12),
                  fontFamily: Mulish(400),
                }}
              >
                {SubText}
              </Text>
            )}
          </View>
        </View>
        <Pressable
          onPress={() => Hidefunc()}
          style={{
            padding: Wp(10),
            borderRadius: Wp(12),
            backgroundColor: "#fff",
          }}
        >
          <IconX color={NoteAppcolor.Primary} size={Wp(20)} stroke={3} />
        </Pressable>
      </View>
    </View>
  );
};

export default ToastComponent;

const styles = StyleSheet.create({});
