import { StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChearfulLogo } from "@app/svgs/Index";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Wp } from "@app/helper/CustomResponsive";
import * as Animated from "react-native-animatable";
import { ActivityIndicator } from "react-native-paper";


/**
 * @description This is a Loading Screen Component
 * @param {object} ref - pass the ref to the componet to access the LoadingEnds function
 * @function LoadingEnds - This function is used to end the loading screen
 */
const LoadingScreen =forwardRef( ({type='logo'}, ref) => {
  const Animationref = useRef(null);
  const [Z_INDEX , SetZ_INDEX] = useState(100)

  useImperativeHandle(ref, () => ({
    LoadingEnds(){
      Animationref.current.fadeOut(800)
      setTimeout(()=>{
        SetZ_INDEX(-100)
      },800)
    }
  }));

  return (
    <View style={[styles.cont1,{zIndex:Z_INDEX}]}>
     
      <Animated.View style={styles.cont} ref={Animationref}>
        {
          type === 'logo' ? (
            <Animated.View
          style={styles.AnimatedView}
          animation="zoomIn"
          easing="ease-in-out-back"
          iterationCount="infinite"
          direction="alternate"
        >
          <ChearfulLogo
            color={NoteAppcolor.Primary}
            height={Wp(150)}
            width={Wp(300)}
          />
        </Animated.View>
          ) :(
            <ActivityIndicator size="large" color={NoteAppcolor.Primary} />
          )
        }
      </Animated.View>
    </View>
  );
})

export default LoadingScreen;

const styles = StyleSheet.create({
  cont1: {
    position: "absolute",


    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  cont: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
