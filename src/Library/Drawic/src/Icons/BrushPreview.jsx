import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Svg, Path, Defs, G, Symbol, Use } from "react-native-svg";
const BrushPreview = ({ height, width, color , StrokeWidth , Opacity }) => {
  return (
    <Svg

      height={String(height)}
      viewBox="0 96 960 960"
      width={String(width)}
    >
      <Path  d="M199 857q-6-6-6-14t6-14l534-534q6-6 14-6t14 6q6 6 6 14t-6 14L227 857q-6 6-14 6t-14-6Z"  stroke={color} fillOpacity={Opacity} strokeOpacity={Opacity} strokeWidth={StrokeWidth} fill={color} opacity={Opacity}/>
    </Svg>
  );
};

export default BrushPreview;

const styles = StyleSheet.create({});
