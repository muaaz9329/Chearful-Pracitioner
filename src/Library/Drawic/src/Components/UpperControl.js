import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";
import { Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateOpacity,
  UpdateStrokeWidth,
} from "../../utils/features/Brush-Control/BrushControl";
const UpperControl = ({DismissRef}) => {
  const Dispatch = useDispatch();
  const { strokeWidth, Opacity } = useSelector((state) => state.BrushControl);
  return (
    <View style={styles.UpperControlContainer}  ref={DismissRef}>
      <View style={styles.StrokeWidthControl} ref={DismissRef}>
        <Text style={styles.StrokeColor} ref={DismissRef}>Stroke Width</Text>
        <Slider
          minimumValue={1}
          maximumValue={100}
          value={strokeWidth}
          onValueChange={(value) => Dispatch(UpdateStrokeWidth(value))}
          style={{ marginTop: Wp(10) }}
        />
      </View>
      <View style={styles.StrokeWidthControl} ref={DismissRef}>
        <Text style={styles.StrokeColor} ref={DismissRef}>Opacity</Text>
        <Slider
          minimumValue={0.1}
          maximumValue={1}
          value={Opacity}
          onValueChange={(value) => Dispatch(UpdateOpacity(value))}
          style={{ marginTop: Wp(10) }}
        />
      </View>
    </View>
  );
};

export default UpperControl;

const styles = StyleSheet.create({
  UpperControlContainer: {
    borderWidth: 1,
    borderColor: NoteAppcolor.Primary,
    width: Wp(280),

    borderRadius: Wp(20),
    padding: Wp(10),
    backgroundColor: "#fff",
  },
  StrokeColor: {
    fontSize: Wp(20),
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
    textAlign: "center",
  },
  StrokeWidthControl: {
    marginTop: Wp(10),
  },
});
