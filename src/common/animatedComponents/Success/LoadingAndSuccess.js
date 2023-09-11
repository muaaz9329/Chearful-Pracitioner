import { Button, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import { Wp } from "@app/helper/CustomResponsive";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

const LoadingAndSuccess = forwardRef((props , ref) => {
  const animationRef = useRef();
  const [animation, setAnimation] = useState(true);
  const {deviceType} = useContext(DeviceContext)
  console.log(props.TypeOfDevice)
  useEffect(() => {
    animationRef.current?.play(0, 60);
  }, []);

  useImperativeHandle(ref, () => ({
    LoadingEnds() {
    animationRef.current?.play(60, 120);
    setAnimation(false);
    }
  }));

   


  return (
    <AnimatedLottieView
      ref={animationRef}
      source={require("./animation/Success.json")}
      autoPlay
      loop={animation}
      style={[{
        width: props.TypeOfDevice==='mobile' ? Wp(160): Wp(80),
        height: props.TypeOfDevice==='mobile' ? Wp(160): Wp(80),
        alignSelf: "center",}]
      }
    />
  );
})

export default LoadingAndSuccess;


