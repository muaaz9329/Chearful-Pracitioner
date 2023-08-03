import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish, Nunito } from "@helper/FontWeight";
import { capitalizeFirstLetter } from "@helper/customFunction";

const AreaOfLifeBlob = ({ sphere = "", size = "md" }) => {
  const Spheres = [
    { name: "personal", bgColor: "#FFB5B5" },
    { name: "friend", bgColor: "#FFE69F" },
    { name: "family", bgColor: "#FFD6A3" },
    { name: "work", bgColor: "#D2BFE3" },
    { name: "health", bgColor: "#B5E0BA" },
    { name: "finance", bgColor: "#B8B7FF" },
    { name: "love", bgColor: "#FFB5B5" },
  ];
  return (
    <View>
      {Spheres.map((item, index) => {
        if (item.name === sphere.toLowerCase()) {
          return (
            <View
              style={[
                {
                  backgroundColor: item.bgColor,
                  paddingHorizontal: size == "md" ? Wp(10) : Wp(20),
                  paddingVertical: size == "md" ? Wp(5) : Wp(10),

                  borderRadius: size == "md" ? Wp(20) : Wp(40),
                },
              ]}
            >
              <Text
                style={[
                  {
                    color: "#fff",
                    fontSize: size == "md" ? FontSize(12) : FontSize(16),
                    fontFamily: Nunito(700),
                  },
                ]}
              >
                {capitalizeFirstLetter(item.name)}
              </Text>
            </View>
          );
        }
      })}
    </View>
  );
};

export default AreaOfLifeBlob;

const styles = StyleSheet.create({});
