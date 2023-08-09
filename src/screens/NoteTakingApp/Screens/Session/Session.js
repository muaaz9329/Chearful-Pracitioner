import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import CardDesign from "./components/CardDesign";
import AnimatedFlatList from "@constants/AnimatedFlatList";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { ApiServices } from "@app/services/Apiservice";
import {
  ResetSessionData,
  SetSessionData,
} from "@app/features/SessionReducer/SessionReducer";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { ActivityIndicator } from "react-native-paper";
import NotAvil from "@app/common/components/NotAvil";
import SessionScreenHeader from "./components/SessionScreenHeader";

const Session = ({ navigation }) => {
  const [data, setData] = useState();
  const Dispatch = useDispatch();
  const LoadingRef = useRef(); // Ref used to control the Loading Screen
  const { HasSession, Success, Data, loading, error } = useSelector(
    (state) => state.Session
  ); // States from the store
  const [ApiQueryDate, setApiQueryDate] = useState(""); // Consists of Date in YYYY-MM-DD format

  useEffect(() => {
    if (ApiQueryDate !== "" || null || undefined) {
      ApiServices.Get_User_Session_by_Date(
        SetSessionData,
        ResetSessionData,
        Dispatch,
        ApiQueryDate
      );
    }
  }, [ApiQueryDate]); // To get Session Data from the API

  useEffect(() => {
    setTimeout(() => {
      if (Success && LoadingRef.current) {
        LoadingRef.current.LoadingEnds();
      }
    }, 1000);
  }, [Success]); // To end Loading Screen if data is Fetched from the API

  useEffect(() => {
    setData(Data);
  }, [Data]); // To assign the data from the API to the data State to be used in the FlatList

  const NotAvailString = () => {
    if (ApiQueryDate === new Date().toISOString().split("T")[0]) {
      return " No Sessions today! ";
    } else {
      return " No Sessions on this day! ";
    }
  };

  return (
    <>
      <LoadingScreen ref={LoadingRef} type={"loader"} />
      <SafeAreaView
        style={{ backgroundColor: NoteAppcolor.White, flex: 1 }}
        edges={["top", "right", "left"]}
      >
        <View style={styles.Body}>
          <SessionScreenHeader ApiQueryDate={setApiQueryDate} navigation={navigation} />
        </View>

        {loading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size={"small"} color={NoteAppcolor.Primary} />
          </View>
        ) : HasSession ? (
          <AnimatedFlatList
            data={data}
            renderItem={({ item, index }) => (
              <CardDesign Data={item} key={index} navigation={navigation} />
            )}
            contentContainerStyle={{
              paddingTop: Wp(10),
              alignItems: "center",
            }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <NotAvil Title={NotAvailString()} />
        )}
      </SafeAreaView>
    </>
  );
};

export default Session;

const styles = StyleSheet.create({
  Body: {
    paddingHorizontal: Wp(16),
    paddingTop: Platform.OS == "android" ? Wp(20) : Wp(10),
  },
  Text: {
    fontFamily: Mulish(700),
    fontSize: FontSize(23),
    color: NoteAppcolor.Primary,
  },
  cardCont: {
    marginTop: Wp(15),
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
