import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import { Mulish, Nunito } from "@helper/FontWeight";
import { ChevronLeft, CalenderIcon } from "@svg";

import Header from "@CommonComponents/Header";

import DatePicker from "react-native-date-picker";
import { DateConstrctor } from "@helper/customFunction";

import SessionCard from "./components/SessionCards";
import AnimatedFlatList from "@constants/AnimatedFlatList";
import { SafeAreaView } from "react-native-safe-area-context";
const Session = ({ navigation, route }) => {


  const [data, setData] = useState([]); //* Api data will be saved in this state
  const [value, setValue] = useState(); // this state consists of new  date
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState(null);

  const filterData = (date) => {
    let FilteredArr = data.filter(
      (item) => DateConstrctor(new Date(item.Date)).Date === date
    );
    setData(FilteredArr);
  };

  useEffect(() => {
    setData(route.params.ClientDetail.Session);
    let obj = DateConstrctor(new Date());
    setDay(obj.Day);
    setValue(obj.Date);
    console.log(new Date());
  }, []);

  const FilterDate = (date) => {
    let obj = DateConstrctor(date);
    setDay(obj.Day);
    setValue(obj.Date);
    filterData(obj.Date);
  };

  return (
    <SafeAreaView style={styles.Body} edges={['top','left','right']}>
      <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
        <Text style={styles.Text}>Sessions</Text>
      </Header>

      <View style={{ paddingBottom: Wp(10) }}>
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

      <AnimatedFlatList
        data={data}
        renderItem={({ item, index }) => (
          <SessionCard
            Data={item}
            key={index}
            navigation={navigation}
            ClientData={route.params.ClientDetail}
          />
        )}
        contentContainerStyle={{
          paddingTop: Wp(10),
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Session;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: NoteAppcolor.White,
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingTop: Wp(20),
  },
  Text: {
    fontFamily: Mulish(700),
    fontSize: FontSize(23),
    color: NoteAppcolor.Primary,
  },
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
  cardCont: {
    marginTop: Wp(15),
  },
});
