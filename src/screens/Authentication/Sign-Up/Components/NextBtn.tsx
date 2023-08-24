import { StyleSheet, View, Pressable } from 'react-native';
import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { Svg, G, Circle } from "react-native-svg";
import { NextArrow } from "@svg";
import { Text } from "react-native-paper";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { IconArrowRight } from "tabler-icons-react-native";
import Animated,{
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useDerivedValue,
} from "react-native-reanimated";
import { DeviceType } from '@app/context/Device-Type/DeviceTypeProvider';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const NextBtn = forwardRef(({
  percentage ,
  radius ,
  color,
  HandleFunction,
  deviceType='mobile',
  StrokeWidth=50
}:{
  percentage:number,
  radius:number,
  color:string,
  HandleFunction:()=>void,
  deviceType?:DeviceType
  StrokeWidth?:number
 
},ref) => {



  
    const  strokeWidth = Math.round(radius/13.3)
  const halfCircle = radius + strokeWidth;
  const CircleCircmference = 2 * Math.PI * radius;
  const StrokeOffSet = CircleCircmference - (CircleCircmference *percentage)/100
  
  const progress = useSharedValue(deviceType==='mobile'?0.25:0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CircleCircmference * (1 - progress.value),
  }));

  



 

  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value < 1 ? progress.value+ (deviceType==='mobile'?0.25:0.5) : 1, { duration: 500 });

    HandleFunction()
    
  }, []);
  useImperativeHandle(ref, () => ({

    

    onMoveNext  :(index:number) => {
     if(deviceType==='mobile'){
      if(index == 0){
        progress.value = withTiming(0.25, { duration: 500 });
      }
      else if(index == 1){
        progress.value = withTiming(0.5, { duration: 500 });
      }
      else if(index == 2){
        progress.value = withTiming(0.75, { duration: 500 });
      }
      else if(index == 3){
        progress.value = withTiming(1, { duration: 500 });
      }
     
      
    }
     
     else{
      if(index == 0){
        progress.value = withTiming(0.00, { duration: 500 });
      }
      else if(index == 1){
        progress.value = withTiming(0.5, { duration: 500 });
      }
      else if(index == 2){
        progress.value = withTiming(1, { duration: 500 });
      }
      
     }
    }

  }))

  


  
  return (
    <View>
      <Pressable onPress={onPress}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
          
          <AnimatedCircle
          cx={'50%'}
          cy={'50%'}
          stroke={color}
          strokeWidth={strokeWidth}
          r={radius}
          fill="transparent"
          strokeDasharray={CircleCircmference}
          strokeDashoffset={StrokeOffSet}
          animatedProps={animatedProps}
          strokeLinecap='round'
           />
        </G>
      </Svg>
      <View style={[
        StyleSheet.absoluteFillObject,{
          height:radius*2,
          width:radius*2,
          justifyContent:'center',
        alignItems:'center',
        }
      ]}>
      <View style={{
        justifyContent:'center',
        alignItems:'center',
        height:radius*1.6,
        width:radius*1.6,
        borderRadius:radius*1.8,
        borderWidth:1,
        borderColor:NoteAppcolor.Primary
      }}>
        
        <IconArrowRight color={NoteAppcolor.Primary} width={radius/2} height={radius/2}/>
        
      </View>
      </View>
      </Pressable>
      
    </View>
  );
});

export default NextBtn;

const styles = StyleSheet.create({});
