import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { CalenderIcon } from '../../../svgs/Index'
import DatePicker from "react-native-date-picker";

import { useEffect } from 'react';
import useDateFilter from '../../../hooks/useDatefilter';
import { FontSize, Hp, Wp } from '../../../helper/CustomResponsive';
import { Mulish, Nunito } from '../../../helper/FontWeight';
import { NoteAppcolor } from '../constants/NoteAppcolor';
import { useState } from 'react';

const DateAndFilter = ({ArrayData,Property,setArrayData}) => {
    const [open, setOpen] = useState(false);
    const {FilterDate,data,day,value} = useDateFilter(ArrayData,Property)
  useEffect(()=>{
    setArrayData(data)
  },[data])
  return (
    <View style={{ marginBottom: Wp(10) }}>
          <View style={styles.PractitionerHead}>
            <View style={styles.PractitionerHeadCont}>
              <Text style={styles.textTitle}>{day}</Text>
              <Text style={styles.textSubtitle}>{value}</Text>
            </View>
            <Pressable
              style={styles.PractitionerFilterButton}
              onPress={() => setOpen(true)}
            >
              <CalenderIcon
                width={Wp(20)}
                height={Wp(20)}
                color={NoteAppcolor.Primary}
              />
              <DatePicker
                mode="date"
                modal
                open={open}
                date={new Date()}
                onConfirm={(date) => {
                  setOpen(false);
                  FilterDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
                androidVariant={"iosClone"}
              />
            </Pressable>
          </View>
        </View>
  )
}

export default DateAndFilter

const styles = StyleSheet.create({
    PractitionerHead: {
        marginTop: Hp(30),
        flexDirection: "row",
        justifyContent: "space-between",
      },
      PractitionerFilterButton: {
        paddingVertical: Wp(10),
        paddingHorizontal: Wp(10),
        backgroundColor: "#EFF3F2",
        alignSelf: "flex-start",
        borderRadius: Wp(8),
      },
      textTitle: {
        color: NoteAppcolor.Primary,
        fontFamily: Nunito("700"),
        fontSize: FontSize(16),
      },
      textSubtitle: {
        color: NoteAppcolor.Primary,
        opacity: 0.7,
        fontFamily: Mulish("600"),
        fontSize: FontSize(13),
      },
})