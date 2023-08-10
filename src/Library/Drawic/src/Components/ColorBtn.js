import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Wp } from "@app/helper/CustomResponsive";
import { useSelector } from "react-redux";

const ColorBtn = ({ OpenControlFunc, CanvasRef , deviceType }) => {
  const { Color } = useSelector((state) => state.BrushControl);
  const { BoxOpacity, CanBeTouched } = useSelector(
    (state) => state.ChooseEraser
  );
  const ChangeColorState_Canvas = () => {
    CanvasRef.current.HandleColorChange(Color);
  };
  useEffect(() => {
    ChangeColorState_Canvas();
  }, [Color]);
  return (
    <Pressable onPress={() => OpenControlFunc()} disabled={!CanBeTouched}>
      <View
        style={[
          styles.colorSwatch,
          { backgroundColor: Color, opacity: BoxOpacity },
          deviceType==='tablet'&&{
            width: Wp(22),
    height: Wp(22),
    borderRadius: Wp(22),
          }
        ]}
      ></View>
    </Pressable>
  );
};

export default ColorBtn;

const styles = StyleSheet.create({
  colorSwatch: {
    width: Wp(35),
    height: Wp(35),
    borderRadius: Wp(35),
    borderWidth: 1,
  },
  
});
