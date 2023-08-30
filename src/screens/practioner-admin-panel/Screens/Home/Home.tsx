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
import React, { useEffect, useState, useContext } from "react";
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
import { NavigationHelpers } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import NetInfo from "@react-native-community/netinfo";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import Container from "./Components/Container";

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

  //* Redux
  //TODO:  State Types Redux needed to be added
  const { Success, UserInfo } = useSelector((state: any) => state.Home);
  const dispatch = useDispatch();

  //*Context
  const { deviceType } = useContext(DeviceContext);

  //* Some Const for Date
  const { day, month } = formatDateWithdaySuffix(new Date());
  const greeting = getGreeting();

  useEffect(() => {
    ApiServices.GetUserInfo(SetUserData, dispatch);
  }, []); // Api service use to get user info

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
                    height={deviceType === "mobile" ? Wp(27) : Wp(20)}
                    width={deviceType === "mobile" ? Wp(122) : Wp(90)}
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
              <View
                style={{
                  flexDirection: deviceType === "tablet" ? "row" : "column",
                  alignItems: deviceType === "tablet" ? "center" : "flex-start",
                  justifyContent:
                    deviceType === "tablet" ? "space-between" : "flex-start",
                }}
              >
                <Text
                  style={[
                    styles.GoodMessage,
                    deviceType === "tablet" && {
                      fontSize: FontSize(12),
                      marginRight: Wp(5),
                    },
                  ]}
                >
                  {greeting},
                </Text>
                <Text
                  style={[
                    styles.UserName,
                    deviceType === "tablet" && { fontSize: FontSize(12) },
                  ]}
                >
                  {UserInfo.first_name}
                </Text>
              </View>
              <View>
                <Image
                  source={{ uri: UserInfo.profile_image }}
                  style={[
                    styles.UserImage,
                    deviceType === "tablet" && styles.UserImage_Tablet,
                  ]}
                />
              </View>
            </Animatable.View>
            <View style={[{flex:1}, deviceType==='tablet'&&{
              flexDirection:'column-reverse'
            }]}>
            <View
              style={[
                styles.menuCont,
                deviceType === "tablet" && styles.menuCont_Tablet,
              ]}
            >
              <Animatable.View
                style={[
                  styles.cont1,
                  deviceType === "tablet" && styles.cont1_Tablet,
                ]}
                animation="slideInLeft"
                easing="ease-in-out"
                duration={1500}
              >
                <Container
                  Title={"Sessions"}
                  SubTitle={
                    "Add notes to your recent ,upcoming and\npast sessions"
                  }
                  Shape={"Rectangle"}
                  backgroundColor={"#FAE5DA"}
                  location={"Prac_Session"}
                  navigation={navigation}
                  Doodle={
                    <JournalImg12
                      width={wp((deviceType === "tablet" ? 1.3 : 2.5) * 12.9)}
                      height={wp((deviceType === "tablet" ? 1.3 : 2.5) * 14.1)}
                    />
                  }
                />

                <Container
                  Title={`Recent${deviceType === "mobile" ? "\n" : " "}Notes`}
                  SubTitle={
                    "View and edit your recently added \nnotes and documents"
                  }
                  Shape={"Square"}
                  backgroundColor={"#B5E0BA"}
                  location={"Prac_NoteScreen"}
                  navigation={navigation}
                  style={{ marginTop: Hp(12) }}
                  doodleStyle={[
                    deviceType === "mobile" && {
                      top: Wp(-25),
                    },
                  ]}
                  Doodle={
                    <JournalImg11
                      width={wp((deviceType === "tablet" ? 1.5 : 2.5) * 10)}
                      height={wp((deviceType === "tablet" ? 1.8 : 2.5) * 9.8)}
                    />
                  }
                />
              </Animatable.View>
              <Animatable.View
                style={[deviceType === "mobile" && styles.cont2]}
                animation="slideInRight"
                easing="ease-in-out"
                duration={1500}
              >
                <Container
                  Doodle={
                    <JournalImg8
                      width={wp((deviceType === "tablet" ? 1.5 : 2.5) * 9)}
                      height={wp((deviceType === "tablet" ? 1.5 : 2.2) * 11.8)}
                    />
                  }
                  Title={"Clients"}
                  SubTitle={
                    "Get Client details and add notes to \nthem or view their notes"
                  }
                  backgroundColor={"#FFF4DC"}
                  navigation={navigation}
                  location={"Prac_Client"}
                  Shape={"Square"}
                  style={{ marginBottom: Hp(12) }}
                />

                <Container
                  Doodle={
                    <JournalImg6
                      width={wp((deviceType === "tablet" ? 1.3 : 2.5) * 14)}
                      height={wp((deviceType === "tablet" ? 1.3 : 2.5) * 14.1)}
                    />
                  }
                  Title={"Add Notes"}
                  SubTitle={
                    "Add notes to your particular client \nand their particular session"
                  }
                  backgroundColor={"#EDF3DD"}
                  navigation={navigation}
                  location={"Prac_AddNoteClient"}
                  Shape={"Rectangle"}
                />
              </Animatable.View>
            </View>
            <Pressable>
              <Animatable.View
                style={[
                  styles.infoCont,
                  deviceType === "tablet" && styles.infoCont_Tablet,
                ]}
                animation="slideInUp"
                easing="ease-in-out"
                duration={1500}
              >
                <View
                  style={[
                    styles.infoContImg,
                    deviceType == "tablet" && styles.infoContImg_Tablet,
                  ]}
                >
                  <JournalImg5
                    width={wp((deviceType === "tablet" ? 1.3 : 2.5) * 13.031)}
                    height={hp((deviceType === "tablet" ? 1 : 1.5) * 14.115)}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      styles.dateStyle,
                      deviceType === "tablet" && styles.dateStyle_tablet,
                    ]}
                  >
                    {day}
                    <Text
                      style={[
                        styles.MonthStyle,
                        deviceType === "tablet" && styles.monthStyle_tablet,
                      ]}
                    >
                      {" "}
                      {month}
                    </Text>{" "}
                  </Text>
                </View>
                <View style={styles.TodayInfoCont}>
                  <View>
                    <Text
                      style={[
                        styles.nmbrStyle,
                        deviceType === "tablet" && styles.nmbrStyle_tablet,
                      ]}
                    >
                      {UserInfo.No_Of_Upcoming_Session_Today}
                    </Text>
                    <Text
                      style={[
                        styles.nmbrOfStyle,
                        deviceType === "tablet" && styles.numberofStyle_tablet,
                      ]}
                    >
                      {UserInfo.No_Of_Upcoming_Session_Today === 1
                        ? "Session"
                        : "Sessions"}
                    </Text>
                  </View>
                </View>
              </Animatable.View>
            </Pressable>
            </View>
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

  cont1: {
    marginEnd: Hp(6),
  },
  cont2: {
    marginStart: Hp(6),
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
  //* Tablet Styles
  menuCont_Tablet: {
    flexDirection: "column",
    width: wp(70),

    alignSelf: "center",
  },
  UserImage_Tablet: {
    width: Wp(45),
    height: Wp(45),
    borderRadius: Wp(15),
  },
  MenuImage_Tablet: {
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: Wp(20),
  },
  RectangleCont_Tablet: {
    width: wp(70),
    height: Wp(100),
    borderRadius: Wp(20),
  },
  MenuTextSub_Tablet: {
    fontSize: Wp(10),
    fontFamily: Nunito(400),
    color: "#1D1A0E",
    opacity: 0.7,
  },
  MenuText_Tablet: {
    fontSize: FontSize(15),
  },
  cont1_Tablet: {
    marginBottom: Wp(10),
  },
  infoCont_Tablet: {
    alignSelf: "center",
    width: wp(70),
    height: Wp(75),
    borderRadius: Wp(14),
    paddingTop: Wp(10),
  },
  infoContImg_Tablet: {
    position: "absolute",
    zIndex: 999,
    bottom: 0,
    right: -30,
  },
  numberofStyle_tablet: {
    fontSize: FontSize(8),
  },
  nmbrStyle_tablet: {
    fontSize: FontSize(18),
  },
  monthStyle_tablet: {
    fontSize: FontSize(10),
  },
  dateStyle_tablet: {
    fontSize: FontSize(14),
  },
});
