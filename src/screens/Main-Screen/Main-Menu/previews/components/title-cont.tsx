import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DeviceContext } from '@app/context/Device-Type/DeviceTypeProvider'
import { Wp } from '@app/helper/CustomResponsive'
import { Nunito } from '@app/helper/FontWeight'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'

type Props = {
    title:string
}

const TitleCont = ({
title
}: Props) => {
    const { deviceType } = useContext(DeviceContext);
  return (
    <View style={styles.TitleCont}>
    <Text
      style={[
        styles.TitleStyle,
        deviceType === "tablet" && styles.TitleStyle_Tablet,
      ]}
    >
        {title}
    </Text>
  </View>
  )
}

export default TitleCont

const styles = StyleSheet.create({
    TitleCont: {
        marginVertical: Wp(10),
      },
      TitleStyle_Tablet: {
        fontSize: Wp(16),
        textAlign: "center",
      },
      TitleStyle: {
        fontSize: Wp(22),
        fontFamily: Nunito(700),
        color: NoteAppcolor.Primary,
      },
})