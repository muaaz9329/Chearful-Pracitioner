import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ColorPicker from "react-native-wheel-color-picker";
import { Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { useDispatch, useSelector } from "react-redux";
import { UpdateColor } from "../../utils/features/Brush-Control/BrushControl";
const ColorControl = () => {
  const Dispatch = useDispatch();

  return (
    <View style={styles.Cont} >
      <ColorPicker
        onColorChange={(color) => Dispatch(UpdateColor(color))}
        onColorChangeComplete={(color) => Dispatch(UpdateColor(color))}
        noSnap={false}
        swatches={false}
        thumbSize={Wp(25)}
      />
    </View>
  );
};

export default ColorControl;

const styles = StyleSheet.create({
  Cont: {
    borderWidth: 1,
    borderColor: NoteAppcolor.Primary,
    width: Wp(280),

    borderRadius: Wp(20),
    padding: Wp(10),
    height: Wp(300),
    backgroundColor: "#fff",
  },
});
