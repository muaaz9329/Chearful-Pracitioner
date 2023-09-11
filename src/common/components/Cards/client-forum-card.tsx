import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Wp, wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";

type Props = {};
const ClientForumCard = (props: Props) => {
  const Answere =
    "Therapy can be very beneficial in helping you plan for your future. Our role is to provide a supportive and non-judgmental environment where we can explore your goals, aspirations, and concerns about the future. Together, we can work on understanding your values, strengths, and areas that might need";
  return (
  
      <View
        style={{
          width: wp(90),

          padding: Wp(10),

          height: Wp(170),
          borderRadius: Wp(14),
          backgroundColor: NoteAppcolor.Secondary,
          marginVertical: Wp(8),
        }}
      >
        <Text
          style={{
            fontSize: Wp(16),
            fontFamily: Mulish(700),
            color: NoteAppcolor.Primary,
          }}
        >
          Can therapy help me with planning for my future?{" "}
        </Text>
        <Text
          style={{
            fontSize: Wp(12),
            fontFamily: Mulish(400),
            color: NoteAppcolor.Primary,
            marginTop: Wp(5),
          }}
        >
          22 Jun, 2023
        </Text>
        <Text
          style={{
            fontSize: Wp(14),
            fontFamily: Mulish(400),
            color: NoteAppcolor.Primary,
            marginTop: Wp(7),
          }}
        >
          {Answere.length > 130 ? Answere.slice(0, 130) + "..." : Answere}
        </Text>
        <View
          style={{
            alignSelf: "flex-start",

            backgroundColor: NoteAppcolor.White,
            borderRadius: Wp(16),
            paddingVertical: Wp(5),
            paddingHorizontal: Wp(8),
            marginTop: Wp(7),
          }}
        >
          <Text
            style={{
              fontSize: Wp(10),
              fontFamily: Mulish(400),
              color: NoteAppcolor.Primary,
            }}
          >
            1 Person answered
          </Text>
        </View>
      </View>
    
  );
};

export default ClientForumCard;

const styles = StyleSheet.create({});
