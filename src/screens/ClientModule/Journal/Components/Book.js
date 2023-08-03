import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Wp } from "@app/helper/CustomResponsive";

const BookColor = (type) => {
  switch (type) {
    case "gratitude":
      return {
        Primary: "#FEEBE7",
        Secondary: "#FEB7A8",
      };
    case "stress":
      return {
        Primary: "#FDE0E0",
        Secondary: "#C78282",
      };
    case "self-compassion":
    case "self care":
      return {
        Primary: "#FEF2CF",
        Secondary: "#D6BB6F",
      };
    case "free-write":
      return {
        Primary: "#DBEFF0",
        Secondary: "#61B7BB",
      };
  }
};

const Book = ({ type }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: BookColor(type.toLowerCase()).Primary },
      ]}
    >
      <View
        style={[
          styles.bookCorner,
          { backgroundColor: BookColor(type.toLowerCase()).Secondary },
        ]}
      ></View>
      <ImageBackground
        source={require("../../Images/Patteren/wood.png")}
        style={styles.bgPattern}
      />
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    width: Wp(200),

    height: Wp(280),
    borderTopRightRadius: Wp(30),
    borderBottomRightRadius: Wp(30),

    overflow: "hidden",
  },
  bookCorner: {
    width: Wp(40),
    flexDirection: "row",
    height: Wp(280),

    position: "absolute",
    zIndex: 10,
    borderTopLeftRadius: Wp(5),
    borderBottomLeftRadius: Wp(5),
  },
  bgPattern: {
    position: "absolute",
    width: Wp(200),
    height: Wp(300),
    opacity: 0.1,
  },
});
