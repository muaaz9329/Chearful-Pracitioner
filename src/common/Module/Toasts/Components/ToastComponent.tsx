import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { IconX } from "tabler-icons-react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish } from "@app/helper/FontWeight";
import { ToastComponentProps } from "../types/types";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

const ToastComponent: React.FC<ToastComponentProps> = ({
  LeftIcon,
  ContainerBg,
  Title,
  TitleColor,
  SubText,
  SubTextColor,
  Hidefunc,
}) => {
  const { deviceType } = useContext(DeviceContext); // tells the device type of the user like mobile or tablet
  return (
    <View
      style={[
        {
          width: deviceType === "tablet" ? wp(60) : wp(95),
          backgroundColor: ContainerBg,
          borderRadius: deviceType === "mobile" ? Wp(12) : Wp(10),
          paddingVertical: deviceType === "mobile" ? Wp(10) : Wp(8),
          paddingHorizontal: deviceType === "mobile" ? Wp(10) : Wp(8),
        },
      ]}
    >
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ padding: deviceType === "mobile" ? Wp(10) : Wp(6) }}>
            <LeftIcon
              size={deviceType === "mobile" ? Wp(20) : Wp(15)}
              color={TitleColor}
              stroke={3}
            />
          </View>
          <View>
            <Text
              style={[
                {
                  color: TitleColor,
                  fontSize: Title.length > 32 ? Wp(12) : Wp(16),
                  fontFamily: Mulish(700),
                },
                deviceType == "tablet" && {
                  fontSize: Title.length > 32 ? Wp(8) : Wp(10),
                },
              ]}
            >
              {Title}
            </Text>
            {SubText && (
              <Text
                style={{
                  color: SubTextColor,
                  fontSize: deviceType === "mobile" ? Wp(12) : Wp(8),
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
            padding: deviceType === "mobile" ? Wp(10) : Wp(6),
            borderRadius: deviceType === "mobile" ? Wp(12) : Wp(7),
            backgroundColor: "#fff",
          }}
        >
          <IconX
            color={NoteAppcolor.Primary}
            size={deviceType === "mobile" ? Wp(20) : Wp(15)}
            stroke={3}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ToastComponent;

const styles = StyleSheet.create({});
