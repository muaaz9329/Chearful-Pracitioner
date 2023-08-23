import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Wp } from "@app/helper/CustomResponsive";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { IconComponent } from "@app/types";
import { DeviceType } from "@app/context/Device-Type/DeviceTypeProvider";

type Props = {
  showLabel?: boolean;
  label?: string;
  Icon: IconComponent;
  showIcon?: boolean;
  placeholder: string;
  onChangeText: (text: string, name: string) => void;
  name: string;
  width?: number;
  Protected?:boolean,
  DeviceType?:DeviceType
};

const FormInput = ({
  showLabel,
  label,
  Icon,
  onChangeText,
  placeholder,
  showIcon,
  name,
  width,
  Protected,
  DeviceType='mobile'
}: Props) => {
  return (
    <View>
      {showLabel && <Text style={[styles.Label,DeviceType==='tablet'&&{
        fontSize: Wp(10),
        fontFamily: Mulish(700),
        color: NoteAppcolor.Primary,
        marginBottom: Wp(4),
      }]}>{label}</Text>}
      <View
        style={[
          styles.TextInput,
          showIcon && styles.ShowIcon,
          {
            width: wp(width ? width : 75),
          },
          DeviceType === 'tablet' && {
            width: wp(width ? width : 30),
            height: Wp(28),
        
            borderRadius: Wp(8),
            paddingHorizontal:Wp(8),
            marginLeft: Wp(5)
          }
        ]}
      >
        {showIcon && (
          <View style={[styles.icon, DeviceType==='tablet'&&{
            marginHorizontal: Wp(0),
            marginRight:Wp(4)
          }]}>
            <Icon width={DeviceType==='mobile'?Wp(20):Wp(10)} height={DeviceType==='mobile'?Wp(20):Wp(10)} color={NoteAppcolor.Primary} />
          </View>
        )}
        <TextInput
          style={[
            styles.TextInputStyles,
            {
              width: wp(width ? (showIcon ? width-15 : width-10) : 75),
              
            },
            DeviceType === 'tablet' && {
              width: wp(width ? (showIcon ? width-7 : width-5) : 30),
              
              fontSize: Wp(9),

            }
          ]}
          onChangeText={(text) => onChangeText(text, name)}
          placeholder={placeholder}
          secureTextEntry={Protected?true:false}
        />
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  TextInput: {
    height: Wp(55),
    width: wp(75),
    borderRadius: Wp(12),
    backgroundColor: "#EFF3F2",
    justifyContent: "center",
    paddingHorizontal: Wp(16),
    marginLeft: Wp(10),
  },
  TextInputStyles: {
    fontSize: Wp(15),
    fontFamily: Mulish(400),
    color: NoteAppcolor.Primary,
  },
  Label: {
    fontSize: Wp(16),
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
    marginBottom: Wp(8),
  },
  icon: {
    marginHorizontal: Wp(10),
  },
  ShowIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: Wp(8),
  },
});
