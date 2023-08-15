import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import CardDesign from "./components/CardDesign";
import AnimatedFlatList from "@constants/AnimatedFlatList";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";


import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { ActivityIndicator } from "react-native-paper";
import NotAvil from "@app/common/components/NotAvil";
import SessionScreenHeader from "./components/SessionScreenHeader";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import useSessionNotes from "./Hooks/useSessionNotes";

const Session = ({ navigation }) => {
  const LoadingRef = useRef(); // Ref used to control the Loading Screen
  const { HasSession, Success, loading } = useSelector(
    (state) => state.Session
  ); // States from the store

  const { deviceType } = useContext(DeviceContext);

  const { data, setApiQueryDate, ApiQueryDate } = useSessionNotes(); // All api logic is here 

  useEffect(() => {
    setTimeout(() => {
      if (Success && LoadingRef.current) {
        LoadingRef.current.LoadingEnds();
      }
    }, 1000);
  }, [Success]); // To end Loading Screen if data is Fetched from the API

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
          <SessionScreenHeader
            ApiQueryDate={setApiQueryDate}
            navigation={navigation}
          />
        </View>

        {loading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size={"small"} color={NoteAppcolor.Primary} />
          </View>
        ) : HasSession ? (
          <AnimatedFlatList
            Item_size={deviceType === "tablet" ? wp(12) : Wp(76 + 16 + 20)}
            data={data}
            renderItem={({ item, index }) => (
              <CardDesign Data={item} key={index} navigation={navigation} />
            )}
            contentContainerStyle={[
              {
                paddingTop: Wp(10),
                alignItems: "center",
              },
              deviceType === "tablet" && styles.CardCont_tablet,
            ]}
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
  CardCont_tablet: {
    width: wp(100),
    alignSelf: "center",
  },
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
