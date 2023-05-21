import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { Wp } from "@app/helper/CustomResponsive";
import BrushBtn from "./Components/BrushBtn";
import UpperControl from "./Components/UpperControl";
import { widthPercentageToDP } from "react-native-responsive-screen";
import BrushAndEraserComponent from "./Components/BrushAndEraserComponent";
import Undobtn from "./Components/Undobtn";
import ColorBtn from "./Components/ColorBtn";
import ColorControl from "./Components/ColorControl";
import { useDispatch, useSelector } from "react-redux";
import { UpdateHideModel } from "../utils/features/Hide-Model-control-state/HideModel";
import Resetbtn from "./Components/Resetbtn";
import ActionSheet from "react-native-actions-sheet";
import AndroidUpperControl from "./Components/AndroidUpperControl";
import AndroidColorControl from "./Components/AndroidColorControl";
const CanvasControl = ({ DismissRef, CanvasRef }) => {
  const [open, setOpen] = useState({
    style: { display: "none" },
    isOpen: false,
  });

  const [open2, setOpen2] = useState({
    style: { display: "none" },
    isOpen: false,
  });
  // state to control the upper control component

  const SheetRef = React.useRef();
  const SheetRef2 = React.useRef();

  const { HideModel } = useSelector((state) => state.HideModel);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (HideModel === true) {
      setOpen({ style: { display: "none" }, isOpen: false });
      setOpen2({ style: { display: "none" }, isOpen: false });
    }
  }, [HideModel]);

  /**
   * @description this function is used to open and close the upper control component
   */

  const OpenControl = () => {
    if (open.isOpen === false) {
      if (Platform.OS === "android") {
        SheetRef.current?.show();
      } else {
        setOpen({ style: { display: "flex" }, isOpen: true });
        setOpen2({ style: { display: "none" }, isOpen: false });
      }
    } else {
      setOpen({ style: { display: "none" }, isOpen: false });
    }

    Dispatch(UpdateHideModel(false));
  };

  const OpenColorControl = () => {
    if (open2.isOpen === false) {
     if(Platform.OS === "android"){
       SheetRef2.current?.show();
     }
     else{
      setOpen2({ style: { display: "flex" }, isOpen: true });
      setOpen({ style: { display: "none" }, isOpen: false });
     }
    } else {
      setOpen2({ style: { display: "none" }, isOpen: false });
    }
    Dispatch(UpdateHideModel(false));
  };
  return (
    <>
      <View style={styles.Container}>
        <Undobtn CanvasRef={CanvasRef} />
        <Resetbtn CanvasRef={CanvasRef} />
        <BrushAndEraserComponent CanvasRef={CanvasRef} />
        <BrushBtn OpenControlFunc={OpenControl} CanvesRef={CanvasRef} />
        <ColorBtn OpenControlFunc={OpenColorControl} CanvasRef={CanvasRef} />
      </View>
      <View style={[styles.upperControlCont, open.style]} ref={DismissRef}>
        <UpperControl DismissRef={DismissRef} />
      </View>
      <View style={[styles.upperControlCont, open2.style]} ref={DismissRef}>
        <ColorControl />
      </View>
      <ActionSheet
        containerStyle={{
          height: widthPercentageToDP(80),
          borderRadius: Wp(20),
          
        }}
        ref={SheetRef}
      >
        <AndroidUpperControl />
      </ActionSheet>
      <ActionSheet
        containerStyle={{
          height: Wp(500),
          borderRadius: Wp(50),
          
        }}
        ref={SheetRef2}
      >
        <AndroidColorControl/>
      </ActionSheet>
    </>
  );
};

export default CanvasControl;

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    position: "absolute",
    bottom: Wp(50),
    alignSelf: "center",
    width: Wp(300),
    height: Wp(50),
    borderRadius: Wp(25),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: Wp(5),
    backgroundColor: "#fff",
  },
  upperControlCont: {
    position: "absolute",
    bottom: Wp(120),
    flexDirection: "row",

    justifyContent: "center",
    width: widthPercentageToDP(100),
    zIndex: 999,
  },
});
