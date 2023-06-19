import { Button, StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import { Wp } from "@app/helper/CustomResponsive";

const LoadingAndSuccess = forwardRef((props , ref) => {
  const animationRef = useRef();
  const [animation, setAnimation] = useState(true);
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
      style={styles.AnimatedView}
    />
  );
})

export default LoadingAndSuccess;

const styles = StyleSheet.create({
  AnimatedView: {
    width: Wp(160),
    height: Wp(160),
    alignSelf: "center",
  },
});
