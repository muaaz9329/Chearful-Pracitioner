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
const Session = ({ navigation }) => {
  const disptch = useDispatch();
  const LoadingRef = useRef(null);

  const { SelectedClientDetail } = useSelector((state) => state.ClientReducer); // Getting the state from the store Client Screen

  const { Sessions, Success, isEmpty } = useSelector(
    (state) => state.ClientSessionReducer
  );

  useEffect(() => {
    if (Success) {
      LoadingRef.current.LoadingEnds();
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

  return (
    <>
      <LoadingScreen ref={LoadingRef} type={"loader"} />
      <SafeAreaView style={styles.Body} edges={["top", "left", "right"]}>
        <View style={{ marginBottom: Wp(20) }}>
          <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
            <Text style={styles.Text}>Sessions</Text>
          </Header>
        </View>

        {isEmpty ? (
          <NotAvil
            Title={`${SelectedClientDetail.full_name} does not have any sessions at all on any date`}
          />
        ) : (
          <AnimatedFlatList
            data={Sessions}
            renderItem={({ item, index }) => (
              <SessionCard
                SessionData={item}
                key={item.id}
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
 
  cardCont: {
    marginTop: Wp(15),
  },
});
