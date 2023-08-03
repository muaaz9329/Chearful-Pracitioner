import { Platform, StyleSheet , View } from "react-native";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import CanvasControl from "./src/CanvasControl";
import OutsideView from "react-native-detect-press-outside";
import { UpdateHideModel } from "./utils/features/Hide-Model-control-state/HideModel";
import { useDispatch } from "react-redux";
import Canvas from "./src/Canvas";

// const Main = forwardRef(({view}, ref) => {
  const Main =   ({view , CanvasRef}) => {
  const Childref = React.useRef();
  // const CanvasRef = React.useRef();
    
  const Dispatch = useDispatch();
  //  useImperativeHandle(ref , ()=>({
  //   GetPoints(){
  //     CanvasRef.current.Get_Canvas_Points();
  //   },
  //   SetPoints(Points){ // Array of numbers
  //     CanvasRef.current.Set_Canvas_Points(Points)
  //   },
    
  //  }))

  

 

  if (Platform.OS === "ios") {
    return (
      <OutsideView
        style={{ flex: 1 }}
        childRef={Childref}
        onPressOutside={() => Dispatch(UpdateHideModel(true))}
      >
        <Canvas
          ref={CanvasRef}
          disable={(view == "edit" ? false : true)}
        />
        {view == "edit" && (
          <CanvasControl DismissRef={Childref} CanvasRef={CanvasRef} />
        )}
      </OutsideView>
    );
  } else if (Platform.OS === "android") {
    return (
      <View style={styles.container}>
        <Canvas ref={CanvasRef} />
        {view == "edit" && (
          <CanvasControl DismissRef={Childref} CanvasRef={CanvasRef} />
        )}
      </View>
    );
  }
};
// });

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
