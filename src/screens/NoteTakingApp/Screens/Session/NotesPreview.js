import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  RefreshControl,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Header from "@CommonComponents/Header";
import { ChevronLeft, Dot } from "@svg";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import NotesCard from "./components/NotesCard";
import notesCardData from "../../Data/NotesCardData";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { ApiServices } from "@app/services/Apiservice";
import { useDispatch, useSelector } from "react-redux";
import useSessionNote from "@adapters/useSessionNote";
import {
  ResetSessionNotes,
  SetSessionNotes,
  RefreshSessionNotes,
} from "@app/features/SessionNotes/SessionNotes";
import NotAvil from "@app/common/components/NotAvil";

const NotesPreview = ({ navigation, route }) => {
  const { ClientData } = route.params; // Api Prams such as Client Id , Session Id  , Client Image ,
  //Date and Time are being given as Pram from navigation route From Session.js -> CardDesign.js
  //in order to use it as pram here

  console.log(ClientData)
  const dispatch = useDispatch();
  const LoadingRef = useRef(); // used to control the Loading Screen
  const { SessionNotes, SessionNotesSuccess, SessionInfo, HasNotes, refresh } =
    useSelector((state) => state.SessionNotes); // states from Redux store

  const HandleApi = () => {
    ApiServices.Get_User_Session_Notes(
      ClientData.Client_ID,
      ClientData.Session_ID,
      dispatch,
      ResetSessionNotes,
      SetSessionNotes
    );
  };
  useEffect(() => {
    HandleApi();
  }, []); // Api Calling from Here to Get Session notes

  useEffect(() => {
    if (refresh) {
      HandleApi();
      dispatch(RefreshSessionNotes(false));
    }
  }, [refresh]); // Api Calling from Here to Get Session notes when Note get Updated or Deleted

  const onRefresh = React.useCallback(async () => {
    dispatch(RefreshSessionNotes(true));
    HandleApi();
    dispatch(RefreshSessionNotes(false));
  }, []); // Pull to Refresh

  useEffect(() => {
    if (SessionNotesSuccess) {
      setTimeout(() => {
        LoadingRef.current?.LoadingEnds();
      });
    }
  }, [SessionNotesSuccess]); // used to control the Loading Screen

  return (
    <>
      <LoadingScreen ref={LoadingRef} />
      <SafeAreaView style={styles.Body}>
        <Header Icon={ChevronLeft} navigation={navigation} pram={"Prac_Session"}>
          <View style={styles.CardContet}>
            <View style={styles.Cont1}>
              <Image
                source={{ uri: ClientData.Client_image }}
                style={styles.ClientImage}
              />
            </View>
            <View style={styles.CardTextCont}>
              <Text style={styles.Name}>{SessionInfo.client_full_name}</Text>
              <View style={styles.LastVisitCont}>
                <Text style={styles.LastVisitText}>
                  {ClientData.appointment.date}
                </Text>
                <View style={styles.DotMargin}>
                  <Dot
                    width={Wp(4)}
                    height={Wp(4)}
                    color={NoteAppcolor.Primary}
                  />
                </View>
                <Text style={styles.LastVisitText}>
                  {ClientData.appointment.time}
                </Text>
              </View>
            </View>
          </View>
        </Header>

        <ScrollView
          style={{ marginTop: Wp(20) }}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
        >
          {HasNotes ? (
            <NotesCard
              Arr={SessionNotes}
              navigation={navigation}
              ClientData={ClientData}
            />
          ) : (
            <NotAvil
              Title={"No Notes"}
              Content={"No Particular Notes Available for this Session"}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NotesPreview;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingTop: Platform.OS == "android" ? Wp(20) : Wp(10),
  },
  ClientImage: {
    width: Wp(43),
    height: Wp(43),
    borderRadius: Wp(25),
    resizeMode: Platform.OS === "ios" ? "center" : "cover",
    marginEnd: Wp(7),
  },
  LastVisitCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: Wp(5),
  },
  Name: {
    fontFamily: Nunito(700),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(14),
  },
  LastVisitText: {
    fontFamily: Mulish(600),
    fontSize: FontSize(10),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
  },
  CardContet: {
    flexDirection: "row",
    alignItems: "center",
  },
  DotMargin: {
    marginHorizontal: Wp(5),
  },
});
