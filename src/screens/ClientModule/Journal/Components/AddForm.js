import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useRef } from "react";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import { typeOfJournal } from "./JournalFunctions";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const AddForm = ({ type }) => {
  const FocusRef = useRef(null);
  console.log(type);
  return (
    <View style={styles.body}>
      <View style={styles.Title}>
        <Text style={styles.TitleText}>{typeOfJournal(type)}</Text>
      </View>
      <View
        style={styles.InputArea}
        onTouchStart={() => {
          FocusRef.current?.focus();
        }}
      >
        <TextInput
          multiline
          onChangeText={(text) => {
            console.log(text);
          }}
          style={styles.InputStyles}
          ref={FocusRef}
        />
      </View>
    </View>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    paddingHorizontal: Wp(16),
    paddingVertical: Wp(20),
  },
  TitleText: {
    fontFamily: Nunito(800),
    fontSize: FontSize(25),
    color: NoteAppcolor.MenuText,
    marginBottom: Wp(10),
    textAlign: "center",
  },
  Title: {
    marginVertical: Wp(20),
  },
  InputArea: {
    height: wp(100),
    borderRadius: Wp(20),
    backgroundColor: NoteAppcolor.OffWhiteCont,
    width: wp(92),
  },
  InputStyles: {
    fontFamily: Mulish(400),
    fontSize: FontSize(15),
    color: NoteAppcolor.MenuText,
    paddingHorizontal: Wp(15),
    paddingVertical: Wp(15),
  },
});
