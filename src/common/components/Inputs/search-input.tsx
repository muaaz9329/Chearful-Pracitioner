import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Wp } from "@app/helper/CustomResponsive";
import { IconSearch } from "tabler-icons-react-native";
import { Mulish } from "@app/helper/FontWeight";

const defaultProps = {
  placeholder: "Search",
  onChangeText: (text: string) => console.log(text),
};

const SearchInput = ({
  placeholder = defaultProps.placeholder,
  onChangeText = defaultProps.onChangeText,
}: {
  placeholder?: string;
  onChangeText?: (text: string) => void;
}) => {
  return (
    <View style={styles.cont}>
      <IconSearch size={Wp(25)} color={"black"} />
      <TextInput
        placeholder={placeholder}
        style={styles.InputStyles}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  InputStyles: {
    flex: 1,
    fontFamily: Mulish(400),
    fontSize: Wp(14),
    marginLeft: Wp(5),
  },
  cont: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: Wp(14),
    paddingVertical: Wp(14),
    flexDirection: "row",
    borderRadius: Wp(8),
  },
});
