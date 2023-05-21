import { Platform, StyleSheet} from "react-native";
import React from "react";
import CanvasControl from "./src/CanvasControl";
import OutsideView from "react-native-detect-press-outside";
import { UpdateHideModel } from "./utils/features/Hide-Model-control-state/HideModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import Canvas from "./src/Canvas";


const Main = () => {
  const Childref = React.useRef();
  const CanvasRef = React.useRef();
  const Dispatch = useDispatch();
  if(Platform.OS === "ios"){
    return (
      <OutsideView
        style={{ flex: 1 }}
        childRef={Childref}
        onPressOutside={() => Dispatch(UpdateHideModel(true))}
  
      >
        <SafeAreaView style={styles.container} edges={["top"]}>
          <Canvas ref={CanvasRef} />
          <CanvasControl DismissRef={Childref} CanvasRef={CanvasRef} />
          
        </SafeAreaView>
      </OutsideView>
    );
  }
  else if(Platform.OS === "android"){
    return (
     
        <SafeAreaView style={styles.container} edges={["top"]}>
          <Canvas ref={CanvasRef} />
          <CanvasControl DismissRef={Childref} CanvasRef={CanvasRef} />
         
          
        </SafeAreaView>
      
    );
  }
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
