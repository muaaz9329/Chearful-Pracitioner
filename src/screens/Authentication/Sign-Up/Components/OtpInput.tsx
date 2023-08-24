import { NoteAppcolor } from '@app/constants/NoteAppcolor';
import { DeviceType } from '@app/context/Device-Type/DeviceTypeProvider';
import { Wp } from '@app/helper/CustomResponsive';
import { Mulish } from '@app/helper/FontWeight';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { widthPercentageToDP } from 'react-native-responsive-screen';



const CELL_COUNT = 4;

interface IProps {
    setOtpValue:(value:string)=>void,
    DeviceType?:DeviceType
}

const OtpInput = ({setOtpValue, DeviceType='mobile'}:IProps) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (

    <View style={{width: DeviceType==='mobile'?widthPercentageToDP(90):widthPercentageToDP(75)}}>

    <View style={{marginVertical:Wp(20)}}>
        <Text style={{fontFamily:Mulish(400) , textAlign:'center' , fontSize: DeviceType === 'mobile' ? Wp(14):Wp(7)}}>An OTP (One-Time Password) has been sent to your registered email address. Please enter the OTP below to verify your account. This OTP will expire after a short period of time for security reasons, so please enter it promptly.  </Text>
    </View>
    
    
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor cursorSymbol='I' /> : null)}
            </Text>
          </View>
        )}
      />
      
</View>

  );
};

export default OtpInput;

const styles = StyleSheet.create({
    root: {minHeight: 300 , borderWidth:1, borderColor:NoteAppcolor.Primary , width:'85%', alignSelf:'center'},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
      marginTop: 20,
      width: 280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    cellRoot: {
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    cellText: {
      color: '#000',
      fontSize: 36,
      textAlign: 'center',
    },
    focusCell: {
      borderBottomColor: NoteAppcolor.Primary,
      borderBottomWidth: 2,
    },
})