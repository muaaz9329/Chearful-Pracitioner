import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  RefreshControl,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "@CommonComponents/Header";
import { ChevronLeft, Dot } from "@svg";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import NotesCard from "./components/NotesCard";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { ApiServices } from "@app/services/Apiservice";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetSessionNotes,
  SetSessionNotes,
  RefreshSessionNotes,
} from "@app/features/SessionNotes/SessionNotes";
import NotAvil from "@app/common/components/NotAvil";
import { IconPlus } from "tabler-icons-react-native";
import TypeOfNote from "@app/common/Models/TypeOfNote";
import HeaderInfo from "../Editor/Components/HeaderInfo";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

const NotesPreview = ({ navigation, route }) => {
  const { ClientData, routeLoc } = route.params;
  console.log(routeLoc);
  // ClientData is the object consistig of client data in object {Client_ID:number ,Session_ID:number }
  const [Route, setRoute] = useState();
  const dispatch = useDispatch();
  const LoadingRef = useRef(); // used to control the Loading Screen
  const LoadingRef2 = useRef(); // used to control the Loading Screen
  const { SessionNotes, SessionNotesSuccess, HasNotes, refresh } = useSelector(
    (state) => state.SessionNotes
  ); // states from Redux store
  const { deviceType } = useContext(DeviceContext);

  const [model, setmodel] = useState(false);
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
    if (routeLoc === undefined) {
      setRoute("back");
    } // if loc not given in navigation route pram then set it to back
    else {
      setRoute(routeLoc); // else set it to the given loc
    }
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
      }, 300);
    }
  }, [SessionNotesSuccess]); // used to control the Loading Screen

  return (
    <>
      <LoadingScreen ref={LoadingRef} type={"loader"} />
      <SafeAreaView style={styles.Body}>
        <TypeOfNote
          visible={model}
          setVisible={setmodel}
          data={ClientData}
          navigation={navigation}
          routeLoc={Route}
        />
        <Header Icon={ChevronLeft} navigation={navigation} pram={Route}>
          <HeaderInfo data={ClientData} />
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
              Content={"No Particular Notes Available for this Session"}
            />
          )}
        </ScrollView>
        <Pressable
          style={[
            styles.addbtn,
            deviceType === "tablet" && {
              width: Wp(25),
              height: Wp(25),
              borderRadius: Wp(15),
            },
          ]}
          onPress={() => {
            setmodel(!model);
          }}
        >
          <IconPlus
            color={NoteAppcolor.White}
            size={deviceType === "tablet" ? Wp(13) : Wp(25)}
          />
        </Pressable>
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
  addbtn: {
    width: Wp(50),
    height: Wp(50),
    backgroundColor: NoteAppcolor.Primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Wp(25),
    position: "absolute",
    zIndex: 10,
    bottom: Wp(25),
    right: Wp(25),
  },
});
