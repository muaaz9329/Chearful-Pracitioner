import React, { useRef, useState } from "react";
import { Animated, Platform, Pressable, StyleSheet, View } from "react-native";
import { Canvas, DEFAULT_BRUSH_COLOR } from "@benjeau/react-native-draw";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  CanvasControls,
  DEFAULT_COLORS,
  DrawingTool,
  BrushProperties,
} from "@benjeau/react-native-draw-extras";
import { NoteAppcolor } from "../../../constants/NoteAppcolor";
import Header from "./Header";
import { Wp } from "../../../../../helper/CustomResponsive";
import { IconPencil, IconTrash } from "tabler-icons-react-native";
import DeleteModel from "../../Models/DeleteModel";
import { SafeAreaView } from "react-native-safe-area-context";
const WrittenEditor = ({ navigation, route }) => {
  const { mode, content,ClientData } = route.params;
  const [Mode, setMode] = useState(mode);
  const [model, setModel] = useState(false);
  const canvasRef = useRef(null);
  const [color, setColor] = useState(NoteAppcolor.Primary);
  const [thickness, setThickness] = useState(5);
  const [opacity, setOpacity] = useState(1);
  const [tool, setTool] = useState(DrawingTool.Brush);
  const [visibleBrushProperties, setVisibleBrushProperties] = useState(false);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const handleToggleEraser = () => {
    setTool((prev) => {
      if (prev === DrawingTool.Brush) {
        return DrawingTool.Brush;
      } else {
        return DrawingTool.Brush;
      }
    });
  };

  const [overlayOpacity] = useState(new Animated.Value(0));
  const handleToggleBrushProperties = () => {
    if (!visibleBrushProperties) {
      setVisibleBrushProperties(true);

      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setVisibleBrushProperties(false);
      });
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 ,paddingBottom: Platform.OS=='android'? null: Wp(20)}} edges={['top','left','right']} >
        <Header navigation={navigation} mode={Mode} data={ClientData} />
        <DeleteModel navigation={navigation} visible={model} setVisible={setModel} /> 
        <Canvas
          ref={canvasRef}
          height={hp(100)}
          color={color}
          thickness={thickness}
          opacity={opacity}
          tool={tool}
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: "#ccc",
          }}
          onPathsChange={(path) => {
            console.log(path);
          }}
          enabled={Mode =="view" ? false :true}
          initialPaths={content}
        />
        {Mode == "edit" && <View
          style={{
            position: "absolute",
            flexDirection: "row",
            bottom: 0,
            marginBottom: 20,
            paddingHorizontal: Wp(16),
          }}
        >
          <CanvasControls
            onUndo={handleUndo}
            onClear={handleClear}
            onToggleEraser={handleToggleEraser}
            onToggleBrushProperties={handleToggleBrushProperties}
            tool={tool}
            color={color}
            opacity={opacity}
            thickness={thickness}
          />
          {visibleBrushProperties && (
            <BrushProperties
              color={color}
              thickness={thickness}
              opacity={opacity}
              onColorChange={setColor}
              onThicknessChange={setThickness}
              onOpacityChange={setOpacity}
              style={{
                position: "absolute",
                bottom: 80,
                left: 0,
                right: 0,
                padding: 10,
                backgroundColor: "#f2f2f2",
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                borderWidth: StyleSheet.hairlineWidth,
                borderBottomWidth: 0,
                borderTopColor: "#ccc",
                opacity: overlayOpacity,
              }}
            />
          )}
        </View>}
        {Mode === "view" && (
        <View style={styles.editBar}>
          <Pressable
            style={[styles.Btn, { backgroundColor: "#FF8383" }]}
            onPress={() => {
              setModel(!model);
            }}
          >
            <IconTrash size={Wp(30)} color={"white"} />
          </Pressable>
          <Pressable
            style={[styles.Btn]}
            onPress={() => {
              setMode("edit");
            }}
          >
            <IconPencil size={Wp(30)} color={NoteAppcolor.Primary} />
          </Pressable>
        </View>
      )}
      </SafeAreaView>
    </>
  );
};

export default WrittenEditor;

const styles = StyleSheet.create({
  Btn: {
    paddingVertical: Wp(12),
    paddingHorizontal: Wp(12),
    backgroundColor: NoteAppcolor.Secondary,
    borderRadius: Wp(10),
  },
  editBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    paddingHorizontal: Wp(16),
    bottom: 0,
    marginBottom: Wp(15),
  },
});
