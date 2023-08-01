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
import { useDispatch, useSelector } from "react-redux";
import { SetUserData } from "@app/features/HomeReducer/HomeReducer";
import { ActivityIndicator } from "react-native-paper";
import { ApiServices } from "@app/services/Apiservice";
import { formatDateWithdaySuffix } from "@app/helper/customFunction";
import { NavigationHelpers,} from "@react-navigation/native";
import Toast from "react-native-toast-message";
import NetInfo from "@react-native-community/netinfo";

const getGreeting = (): string => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};

interface HomeProps {
  navigation: NavigationHelpers<any, any>;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [model, setModel] = useState<boolean>(false);
  const { Success, UserInfo } = useSelector((state: any) => state.Home);
  const dispatch = useDispatch();
  const { day, month } = formatDateWithdaySuffix(new Date());

  useEffect(() => {
    ApiServices.GetUserInfo(SetUserData, dispatch);
  }, []);
  const greeting = getGreeting();

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      if (
        state.isConnected === false ||
        null ||
        state.isInternetReachable === false ||
        null
      ) {
        Toast.show({
          type: "ErrorToast",
          text1: "No Internet",
          text2: "Please check your internet connection",
        });
      }
    });
  }, []); // use to check internet connection

  // console.log(UserInfo)
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: "#fff", flex: 1 }}>
      {Success ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <LogoutModel
            navigation={navigation}
            visible={model}
            setVisible={setModel}
          />
          <View style={styles.Body}>
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
              <View>
                <Text style={styles.GoodMessage}>{greeting},</Text>
                <Text style={styles.UserName}>{UserInfo.first_name}</Text>
              </View>
              <View>
                <Image
                  source={{ uri: UserInfo.profile_image }}
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
                <Pressable onPress={() => navigation.navigate("Prac_Session")}>
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
                <Pressable
                  onPress={() => navigation.navigate("Prac_NoteScreen")}
                >
                  <View style={[styles.SquareCont, styles.NotesCont]}>
                    <Text style={styles.MenuText}>Recent</Text>
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
                <Pressable onPress={() => navigation.navigate("Prac_Client")}>
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
                  onPress={() => navigation.navigate("Prac_AddNoteClient")}
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
            <Pressable>
              <Animatable.View
                style={styles.infoCont}
                animation="slideInUp"
                easing="ease-in-out"
                duration={1500}
              >
                <View style={styles.infoContImg}>
                  <JournalImg5
                    width={wp(2.5 * 13.031)}
                    height={hp(1.5 * 14.115)}
                  />
                </View>
                <View>
                  <Text style={styles.dateStyle}>
                    {day}
                    <Text style={styles.MonthStyle}> {month}</Text>{" "}
                  </Text>
                </View>
                <View style={styles.TodayInfoCont}>
                  <View>
                    <Text style={styles.nmbrStyle}>
                      {UserInfo.No_Of_Upcoming_Session_Today}
                    </Text>
                    <Text style={styles.nmbrOfStyle}>{UserInfo.No_Of_Upcoming_Session_Today ===1 ? "Session" : "Sessions"}</Text>
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
    paddingVertical: Wp(20),
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

    alignSelf: "flex-end",
    justifyContent: "flex-end",
    height: Wp(164),
    paddingRight: Wp(20),
  },
  ActivityIndicatorCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
