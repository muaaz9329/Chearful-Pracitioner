import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Wp } from '@app/helper/CustomResponsive'
import { Nunito } from '@app/helper/FontWeight'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
import { DeviceContext } from '@app/context/Device-Type/DeviceTypeProvider'
import { Image } from 'react-native-animatable'

type Props = {
    name?:string,
    data?:string,
    image?:ImageSourcePropType
}

const AuthorCont = ({
    name="Priya Cima",
    data="On 12 Jun",
    image=require("@app/screens/practioner-admin-panel/Images/urImg.jpg")
}: Props) => {
    const { deviceType } = useContext(DeviceContext);
  return (
    <View
    style={[
      styles.TitleCont,
      {
        flexDirection: "row",
        alignItems: "center",
      },
    ]}
  >
    <Image
      source={image}
      style={{
        width: deviceType === "mobile" ? Wp(40) : Wp(30),
        height: deviceType === "mobile" ? Wp(40) : Wp(30),
        borderRadius: deviceType === "mobile" ? Wp(20) : Wp(15),
        marginRight: deviceType === "mobile" ? Wp(10) : Wp(5),
      }}
    />
    <View>
      <Text
        style={[
          styles.TitleText,
          deviceType === "tablet" && styles.TitleText_Tablet,
        ]}
      >
        {name}
      </Text>
      <Text
        style={[
          styles.subTitleText,
          deviceType === "tablet" && styles.subTitleText_Tablet,
        ]}
      >
        {data}
      </Text>
    </View>
  </View>
  )
}

export default AuthorCont

const styles = StyleSheet.create({
    subTitleText_Tablet: {
        fontSize: Wp(7.5),
      },
      subTitleText: {
        fontFamily: Nunito(400),
        fontSize: Wp(14),
        color: NoteAppcolor.MenuText,
      },
      TitleText_Tablet: {
        fontSize: Wp(8),
      },
      TitleText: {
        fontFamily: Nunito(700),
        fontSize: Wp(16),
        color: NoteAppcolor.MenuText,
      },
      TabCont: {
        paddingHorizontal: Wp(30),
      },
      TitleCont: {
        marginVertical: Wp(10),
      },
      TitleStyle_Tablet: {
        fontSize: Wp(16),
        textAlign: "center",
      },
})