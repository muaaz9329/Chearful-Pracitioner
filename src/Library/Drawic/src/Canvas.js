import { Dimensions, StyleSheet, View } from "react-native";
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { SketchCanvas } from "rn-perfect-sketch-canvas";
import { ColorWithopacity } from "@app/helper/customFunction";

/**
 * Canvas Component
 * Written by : Muaaz Bin Sarfaraz
 * @param {ref} ref
 * -> Version {1.0.0} , 16th may , 2023
 * can access the following functions using ref
 * 1) HandelStrokeWidth(Width) : number
 * 2) HandleColorChange(color) : HexCode String
 * 3) HandleOpacity(opacity) : number
 * 4) toggleEraser() : void
 * 5) toggleBrush() : void
 * 6) Reset_Whole_Canvas() : void
 * 7) Undo_Last_Stroke() : void
 * 8) Save_Canvas_Base64() : void
 * 9) Save_Canvas_Svg() : void
 * 10) Get_Canvas_Points() : Array of points
 * 11) Set_Canvas_Points(points) : void
 *
 *
 *
 */

const Canvas = forwardRef((props, ref) => {
  const DEVICE_WIDTH = Dimensions.get("window").width;
  const DEVICE_HEIGHT = Dimensions.get("window").height;
  const canvasRef = useRef();
  const [color, setColor] = useState("#000");
  const [strokeWidth, setStrokeWidth] = useState();
  const Memorizing_ref = useRef();

  useImperativeHandle(ref, () => ({
    /**
     *
     * @param Width : number
     * @description this function is used to change the stroke width of the canvas
     *
     */
    HandelStrokeWidth(Width) {
      setStrokeWidth(Width * 0.3);
    },

    /**
     *
     * @param color : HexCode String
     * @description this function is used to change the color of the canvas
     */
    HandleColorChange(color) {
      setColor(color);
    },

    /**
     *
     * @param Color : HexCode String
     * @description this function is used to add Opacity to color , make it dim or Sharp in color using opacity
     */
    HandleOpacity(opacity) {
      setColor(ColorWithopacity(color, opacity));
    },

    /**
     * @description this function is used to toggle the eraser and saves the previous color and stroke width
     */

    toggleEraser() {
      Memorizing_ref.current = {
        color: color,
        strokeWidth: strokeWidth,
      };

      setColor("#fff");
      setStrokeWidth(20);
    },

    /**
     * @description this function is used to toggle the brush and sets the previous color and stroke width
     */

    toggleBrush() {
      setColor(Memorizing_ref.current.color);
      setStrokeWidth(Memorizing_ref.current.strokeWidth);
    },

    /**
     * @description this function is used to clear the whole canvas
     */

    Reset_Whole_Canvas() {
      canvasRef.current.reset();
    },
    /**
     * @description this function is used to clear the last stroke
     */
    Undo_Last_Stroke() {
      canvasRef.current.undo();
    },
    /**
     * @description this function is used to save the canvas as Base64 String
     */
    Save_Canvas_Base64() {
      return canvasRef.current.toBase64(1, 100);
    },
    /**
     * @description this function is used to get the Points that are drawn on the canvas
     */
    Get_Canvas_Points() {
      return canvasRef.current.toPoints();
    },
    /**
     * @description this function is used to set the Points on canvas that are drawn on the canvas , it takes an array of points
     */
    Set_Canvas_Points(Points) {
      canvasRef.current.addPoints(Points);
    },
    /**
     *@description this function is used to save the canvas as SVG
     */
    Save_Canvas_Svg() {
      return canvasRef.current.toSvg(DEVICE_WIDTH, DEVICE_HEIGHT);
    },
    Save_Canvas_toImage(){
      return canvasRef.current.toImage()
    }
  }));

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.DisplayOverLay,
          { height: DEVICE_HEIGHT, width: DEVICE_WIDTH , display : props.disable ? 'flex' : 'none'  },
        ]}
      ></View>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={color}
        strokeWidth={strokeWidth}
        containerStyle={styles.container}
      />
    </View>
  );
});

export default Canvas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  DisplayOverLay: {
    
    position: "absolute",

    zIndex: 100,
    
  },
});
