import { Pressable, StyleSheet, Text, View } from "react-native";
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
import { ApiServices } from "@app/services/Apiservice";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetSession,
  SetError,
  SetLoading,
  SetSessionOnly,
} from "@app/features/Client-AllSessions/AllSessionReducers";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import NotAvil from "@app/common/components/NotAvil";
const Session = ({ navigation, route }) => {
  const [data, setData] = useState([]); //* Api data will be saved in this state

  const [value, setValue] = useState(); // this state consists of new  date
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState(null);

  const disptch = useDispatch();
  const LoadingRef = useRef(null);

  const { SelectedClientDetail } = useSelector((state) => state.ClientReducer); // Getting the state from the store Client Screen

  const { loading, Sessions, error, Success, isEmpty, haveError } = useSelector(
    (state) => state.ClientSessionReducer
  );

  const filterData = (date) => {
    if (Sessions.length > 0) {
      let FilteredArr = Sessions.filter((item) => {
        if (DateConstrctor(new Date(item.appointment_date)).Date === date) {
          return item;
        }
      });

      setData(FilteredArr);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    if (Success) {
      let obj = DateConstrctor(new Date());
      filterData(obj.Date);
      setDay(obj.Day);
      setValue(obj.Date);

      LoadingRef.current?.LoadingEnds();
    }
  }, [Success]);

  const HandleApi = async () => {
    ApiServices.Get_User_Client_Session_Only(
      disptch,
      SetLoading,
      SetSessionOnly,
      SetError,
      ResetSession,
      SelectedClientDetail.id
    );
  };

  useEffect(() => {
    HandleApi();
  }, []);

  const FilterDate = (date) => {
    let obj = DateConstrctor(date);
    setDay(obj.Day);
    setValue(obj.Date);
    filterData(obj.Date);
  };

  return (
    <>
      <LoadingScreen ref={LoadingRef} type={"loader"} />
      <SafeAreaView style={styles.Body} edges={["top", "left", "right"]}>
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

        {data.length == 0 ? (
          Sessions.length === 0 ? (
            <NotAvil
              Title={`${SelectedClientDetail.full_name} does not have any at all session on any date`}
            />
          ) : (
            <NotAvil
              Title={`${SelectedClientDetail.full_name} does not have any session on date ${value}`}
            />
          )
        ) : (
          <AnimatedFlatList
            data={data}
            renderItem={({ item, index }) => (
              <SessionCard
                SessionData={item}
                key={index}
                navigation={navigation}
                
              />
            )}
            contentContainerStyle={{
              paddingTop: Wp(10),
              alignItems: "center",
            }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </>
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
