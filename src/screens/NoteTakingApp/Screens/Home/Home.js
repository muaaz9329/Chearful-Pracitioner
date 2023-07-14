import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Linking,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "@CommonComponents/Header";
import {
  JournalImg11,
  JournalImg8,
  JournalImg5,
  ChearfulLogo,
  JournalImg12,
  JournalImg6,
  Logout,
} from "@svg";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import { Mulish, Nunito } from "@helper/FontWeight";

import LogoutModel from "@models/LogoutModel";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { GetUserInfo, SetUserData } from "@app/features/HomeReducer/HomeReducer";
import { ActivityIndicator } from "react-native-paper";
import { ApiServices } from "@app/services/Apiservice";
import { formatDateWithdaySuffix } from "@app/helper/customFunction";
const Home = ({ navigation }) => {
  const [model, setModel] = useState(false);
  const { Success, UserInfo } = useSelector((state) => state.Home);
  const dispatch = useDispatch();
  const {day,month} = formatDateWithdaySuffix(new Date());

  useEffect(() => {
    ApiServices.GetUserInfo(SetUserData , dispatch)
  }, []);

// console.log(UserInfo)
  return (
    <SafeAreaView style={styles.Body} edges={['top']}>
      {Success ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <LogoutModel
            navigation={navigation}
            visible={model}
            setVisible={setModel}
          />
          <View>
            <Animatable.View
              animation="slideInDown"
              easing="ease-in-out"
              duration={1500}
            >
              <Header
                Icon={Logout}
                pram={"model"}
                visible={model}
                setVisible={setModel}
              >
                <Pressable
                  onPress={() => {
                    Linking.openURL("https://chearful.com/");
                  }}
                >
                  <ChearfulLogo
                    height={Wp(27)}
                    width={Wp(122)}
                    color={NoteAppcolor.Primary}
                  />
                </Pressable>
              </Header>
            </Animatable.View>

            <Animatable.View
              style={styles.GreatingCont}
              animation="slideInDown"
              easing="ease-in-out"
              duration={1500}
            >
              <View style={styles.GreatingTextCont}>
                <Text style={styles.GoodMessage}>Good morning,</Text>
                <Text style={styles.UserName}>{UserInfo.first_name}</Text>
              </View>
              <View>
                <Image
                  source={{ uri: UserInfo.profile_image}}
                  style={styles.UserImage}
                />
              </View>
            </Animatable.View>
            <View style={styles.menuCont}>
              <Animatable.View
                style={styles.cont1}
                animation="slideInLeft"
                easing="ease-in-out"
                duration={1500}
              >
                <Pressable onPress={() => navigation.push("Prac_Session")}>
                  <View style={[styles.RectangleCont, styles.SessionCont]}>
                    <Text style={styles.MenuText}>Sessions</Text>
                    <View style={styles.MenuImage}>
                      <JournalImg12
                        width={wp(2.5 * 12.9)}
                        height={wp(2.5 * 14.1)}
                      />
                    </View>
                  </View>
                </Pressable>
                <Pressable onPress={() => navigation.push("Prac_NoteScreen")}>
                  <View style={[styles.SquareCont, styles.NotesCont]}>
                    <Text style={styles.MenuText}>Notes</Text>
                    <View style={styles.MenuImage}>
                      <JournalImg11
                        width={wp(2.5 * 10)}
                        height={hp(1.5 * 9.8)}
                      />
                    </View>
                  </View>
                </Pressable>
              </Animatable.View>
              <Animatable.View
                style={styles.cont2}
                animation="slideInRight"
                easing="ease-in-out"
                duration={1500}
              >
                <Pressable onPress={() => navigation.push("Prac_Client")}>
                  <View style={[styles.SquareCont, styles.ClientCont]}>
                    <Text style={styles.MenuText}>Clients</Text>
                    <View style={styles.MenuImage}>
                      <JournalImg8
                        width={wp(2.5 * 9)}
                        height={hp(1.5 * 11.8)}
                      />
                    </View>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => navigation.push("Prac_AddNoteClient")}
                >
                  <View style={[styles.RectangleCont, styles.AddNotes]}>
                    <Text style={styles.MenuText}>Add Notes</Text>

                    <View style={styles.MenuImage}>
                      <JournalImg6
                        width={wp(2.5 * 14)}
                        height={wp(2.5 * 14.1)}
                      />
                    </View>
                  </View>
                </Pressable>
              </Animatable.View>
            </View>
            <Pressable onPress={() => navigation.push("Prac_SessionHistory")}>
              <Animatable.View
                style={styles.infoCont}
                animation="slideInUp"
                easing="ease-in-out"
                duration={1500}
              >
                <View style={styles.infoContImg}>
                  <JournalImg5
                    width={wp(2.5 * 9.031)}
                    height={hp(1.5 * 10.115)}
                  />
                </View>
                <View style={styles.DateCont}>
                  <Text style={styles.dateStyle}>
                    {day}<Text style={styles.MonthStyle}> {month}</Text>{" "}
                  </Text>
                </View>
                <View style={styles.TodayInfoCont}>
                  <View>
                    <Text style={styles.nmbrStyle}>5</Text>
                    <Text style={styles.nmbrOfStyle}>Sessions</Text>
                  </View>

                  <View>
                    <Text style={styles.nmbrStyle}>3</Text>
                    <Text style={styles.nmbrOfStyle}>Clients</Text>
                  </View>
                </View>
              </Animatable.View>
            </Pressable>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.ActivityIndicatorCont}>
          <ActivityIndicator size="large" color={NoteAppcolor.Primary} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: NoteAppcolor.White,
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingVertical: Platform.OS == "android" ? Wp(20) : Wp(10),
  },
  GreatingCont: {
    marginTop: Hp(30),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  GoodMessage: {
    fontSize: FontSize(18),
    color: NoteAppcolor.Primary,

    fontFamily: Nunito(700),
  },
  UserName: {
    fontSize: FontSize(32),
    color: NoteAppcolor.btnColor,
    opacity: 1,
    fontFamily: Mulish(800),
  },
  UserImage: {
    width: Wp(65),
    height: Wp(65),
    borderRadius: Wp(22),
    resizeMode: Platform.OS == "ios" ? "cover" : "contain",
  },
  menuCont: {
    flexDirection: "row",
    marginTop: Hp(20),
  },
  RectangleCont: {
    height: Wp(216),
    width: wp(44),
    borderRadius: Wp(30),
    paddingTop: Wp(15),
    paddingStart: Wp(12),
    justifyContent: "space-between",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  SquareCont: {
    height: wp(40.5),
    width: wp(44),
    borderRadius: Wp(30),
    paddingTop: Wp(15),
    paddingStart: Wp(12),
    justifyContent: "space-between",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  SessionCont: {
    marginBottom: Hp(12),
    backgroundColor: "#FAE5DA",
  },
  MenuText: {
    fontSize: FontSize(20),
    fontFamily: Mulish(700),
    color: "#1D1A0E",
  },
  MenuImage: {
    alignSelf: "flex-end",
    resizeMode: "cover",
  },
  SessionImg: {
    width: Wp(109),
    height: Wp(112),
  },
  NotesCont: {
    backgroundColor: "#B5E0BA",
  },
  NotesImg: {
    width: Wp(120),
    height: Wp(125),
  },
  ClientCont: {
    backgroundColor: "#FFF4DC",
    marginBottom: Hp(12),
  },
  AddNotes: {
    backgroundColor: "#EDF3DD",
  },
  cont1: {
    marginEnd: Hp(6),
  },
  cont2: {
    marginStart: Hp(6),
  },
  AddNotesImg: {
    width: Wp(141),
    height: Wp(100),
  },
  infoCont: {
    marginTop: Hp(15),
    height: Wp(160),
    borderRadius: Wp(30),
    backgroundColor: NoteAppcolor.ContColor,
    paddingVertical: Wp(18),
    paddingHorizontal: Wp(18),
    justifyContent: "space-between",
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  dateStyle: {
    fontFamily: Mulish(700),
    fontSize: FontSize(28),
    color: NoteAppcolor.Primary,
  },
  MonthStyle: {
    fontFamily: Mulish(400),
    fontSize: FontSize(20),
  },
  TodayInfoCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Wp(15),
  },
  nmbrStyle: {
    fontSize: FontSize(36),
    fontFamily: Mulish(700),
    textAlign: "center",
    color: NoteAppcolor.Primary,
  },
  nmbrOfStyle: {
    fontSize: FontSize(16),
    fontFamily: Mulish(400),
    textAlign: "center",
    color: NoteAppcolor.Primary,
  },
  infoContImg: {
    position: "absolute",
    zIndex: 999,

    alignSelf: "center",
    justifyContent: "flex-end",
    height: Wp(164),
  },
  ActivityIndicatorCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
