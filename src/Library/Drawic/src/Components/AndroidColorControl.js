import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ColorBtn from "./ColorBtn";
import { Wp } from "@app/helper/CustomResponsive";
import ColorPicker from "react-native-wheel-color-picker";
import { useDispatch, useSelector } from "react-redux";
import { UpdateColor } from "../../utils/features/Brush-Control/BrushControl";
const AndroidColorControl = () => {
  const Dispatch = useDispatch();
  const { Color } = useSelector((state) => state.BrushControl);
  return (
    <View style={{ paddingVertical: Wp(20), paddingHorizontal: Wp(16) }}>
      <View style={styles.ColorPreview}>
        <View style={[styles.colorSwatch, { backgroundColor: Color }]}></View>
      </View>
      <View style={styles.ColorControl}>
        <View style={styles.Cont}>
          <ColorPicker
            onColorChange={(color) => Dispatch(UpdateColor(color))}
            onColorChangeComplete={(color) => Dispatch(UpdateColor(color))}
            noSnap={false}
            swatches={false}
            thumbSize={Wp(25)}
            color={Color}
          />
        </View>
      </View>
    </View>
  );
};

export default AndroidColorControl;

const styles = StyleSheet.create({
  colorSwatch: {
    width: Wp(100),
    height: Wp(100),
    borderRadius: Wp(50),
    borderWidth: 1,
  },
  ColorPreview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Cont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Wp(20),
    padding: Wp(10),
    height: Wp(300),
  },
});
