import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import React, { useContext, useEffect, useRef } from "react";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "@app/helper/CustomResponsive";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Nunito } from "@app/helper/FontWeight";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

/**
 * @author Muaaz Bin Sarfraz
 * @description This is a Animated Login Button that can be used in any screen
 * @param {Function} HandleFunc This is a function that will be called when the user clicks on the Button
 * @param {String} ReducerAction This is a Reducer Action that will be used to get the state , it must be same as the Reducer Action that is used in the Reducer as well as should have error:{status:boolean , message:string}, loading:boolean and Success:boolean State
 * @param {String} Text This is a Text that will be shown on the Button
 *
 * @example <AnimatedLoginBtn HandleFunc={()=>{}} ReducerAction="auth" Text="Login" />
 */

interface Props {
  HandleFunc: () => Promise<void>;
  ReducerAction: string;
  Text: string;
}
const AnimatedLoginBtn = ({ HandleFunc, ReducerAction, Text }: Props) => {
  const { loading, Success, error } = useSelector(
    (state: any) => state[ReducerAction]
  ); // consist of State that tells Weather the user is logged in or not , have a loading state and a error state and a success state

  const {deviceType} = useContext(DeviceContext)

  // this is whole animation of the Login Button
  const LoginTextAnimation = useRef(new Animated.Value(0)).current;
  const LoginIndicator = useRef(new Animated.Value(Wp(200))).current;
  const LoginAnimation = () => {
    Animated.timing(LoginTextAnimation, {
      toValue: Wp(-200),
      duration: 700,

      useNativeDriver: false,
    }).start();
    Animated.timing(LoginIndicator, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false,
    }).start();
  }; // this function will be called when the user is logged in and the Login Button will be animated
  const Not_Able_To_Login = () => {
    Animated.timing(LoginTextAnimation, {
      toValue:Wp(0),
      duration: 700,
      useNativeDriver: false,
    }).start();
    Animated.timing(LoginIndicator, {
      toValue: Wp(200),
      duration: 700,
      useNativeDriver: false,
    }).start();
  }; // this function will be called when the user is not logged in for not providing proper value and the Login Button will be animated

  useEffect(() => {
    if (Success == false && loading == false && error.status == true) {
      Not_Able_To_Login();
    }
  }, [Success, loading, error]);

  return (
    <TouchableOpacity
      onPress={() => {
        LoginAnimation();
        setTimeout(() => {
          HandleFunc();
        }, 1000);
      }}
    >
      <View style={[styles.btn,
        deviceType ==='tablet' &&{
          width: widthPercentageToDP(70),
          height: Hp(38),
          borderRadius: Wp(10),
        }]}>
        <View style={[styles.btnCont,
      ]}>
          <Animated.Text
            style={[
              styles.btnText,
              {
                transform: [{ translateX: LoginTextAnimation }],
                position: "absolute",
              },
              deviceType ==='tablet' &&{
                fontSize: FontSize(12),
              }
            ]}
          >
            {Text}
          </Animated.Text>
          <Animated.View
            style={{ transform: [{ translateX: LoginIndicator }] }}
          >
            <ActivityIndicator color="#fff" size={deviceType ==="tablet"?'large':'small'}/>
          </Animated.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnimatedLoginBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: NoteAppcolor.btnColor,
    width: widthPercentageToDP(85),
    paddingVertical: Wp(15),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Wp(12),

    height: Wp(43),
  },
  btnText: {
    color: "#fff",
    fontFamily: Nunito(700),
    fontSize: FontSize(16),
  },
  btnCont: {
    height: Wp(25),

    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});
