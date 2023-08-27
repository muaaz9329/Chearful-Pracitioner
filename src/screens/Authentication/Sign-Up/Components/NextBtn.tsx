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
import { useDispatch } from 'react-redux';
import { setSignUpDataValid } from '@app/features/sign-up/sign-up-reducers';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const NextBtn = forwardRef(({
  percentage ,
  radius ,
  color,
  HandleFunction,
  deviceType='mobile',
  StrokeWidth=50,
  index
}:{
  percentage:number,
  radius:number,
  color:string,
  HandleFunction:()=>void,
  deviceType?:DeviceType
  StrokeWidth?:number,
  index?:number
 
},ref) => {



    const dispatch = useDispatch()
    const  strokeWidth = Math.round(radius/13.3)
  const halfCircle = radius + strokeWidth;
  const CircleCircmference = 2 * Math.PI * radius;
  const StrokeOffSet = CircleCircmference - (CircleCircmference *percentage)/100
  
  const progress = useSharedValue(deviceType==='mobile'?0.25:0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CircleCircmference * (1 - progress.value),
  }));

  



 

  const onPress = () => {
    if(index==1 && deviceType==='mobile'){
      dispatch(setSignUpDataValid(true))
    } // this triggers the validation of the form for mobile view
    if(index==0 && deviceType==='tablet'){
      dispatch(setSignUpDataValid(true))
    } // this triggers the validation of the form for tablet view
    else{
      progress.value = withTiming(progress.value < 1 ? progress.value+ (deviceType==='mobile'?0.25:0.5) : 1, { duration: 500 });

    HandleFunction()
    } // this triggers the next slide for both mobile and tablet view
    
  }
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
