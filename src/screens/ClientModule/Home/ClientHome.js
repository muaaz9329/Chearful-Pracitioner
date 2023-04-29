import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Linking,
  SafeAreaView,
  StatusBar
} from "react-native";
import React from "react";
import Header from "@CommonComponents/Header";
import { ChearfulLogo, JournalImg10, JournalImg5, Logout } from "@svg";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import { Mulish, Nunito } from "@helper/FontWeight";
import { JournalImg11, JournalImg8 } from "@svg";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BlogsAndArticle from "./Components/BlogsAndArticle";
import InterviewAndSound from "./Components/InterviewAndSound";
import { IconBell } from "tabler-icons-react-native";
import LogoutModel from "@models/LogoutModel";


const ClientHome = ({navigation}) => {
const [visible, setVisible] = React.useState(false);
  const HandleNavigation = (route)=>{
    navigation.navigate(route)
  }

  const RightIcon = (
    <Pressable onPress={()=>HandleNavigation("Notification")}
      style={{
        padding: Wp(10),
        backgroundColor: NoteAppcolor.BtnCont,
        borderRadius: Wp(13),
      }}
    >
      <View style={styles.NoOfNotif} > 
        <Text style={styles.NoOfNotifText} >
          1
        </Text>
      </View>
      <IconBell size={Wp(25)} color={NoteAppcolor.Primary} />
    </Pressable>
  );


  return (
    <SafeAreaView style={{ backgroundColor: "white" }} >
      <StatusBar />
    <ScrollView >
      <LogoutModel navigation={navigation} setVisible={setVisible} visible={visible}  />
      <View style={styles.Body}>
        <Animatable.View
          animation="slideInDown"
          easing="ease-in-out"
          duration={1500}
        >
          <Header Icon={Logout} RightIcon={RightIcon} ShowRightIcon navigation={navigation} setVisible={setVisible} visible={visible} pram={"model"} >
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
            <Text style={styles.GoodMessage}>Good morning,</Text>
            <Text style={styles.UserName}>Samantha</Text>
          </View>
          <View>
            <Image
              source={require("../Images/UserImage.png")}
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
            <Pressable onPress={()=>HandleNavigation("MoodDiary")}>
              <View style={[styles.RectangleCont, styles.SessionCont]}>
                <Text style={styles.MenuText}>Mood Diary</Text>
                <View style={styles.MenuImage}>
                  <JournalImg10
                    width={wp(2.5 * 14.9)}
                    height={wp(2.5 * 19.1)}
                  />
                </View>
              </View>
            </Pressable>
            <Pressable onPress={()=>HandleNavigation("SessionHistory")}>
              <View style={[styles.SquareCont, styles.ClientCont]}>
                <Text style={styles.MenuText}>Sessions</Text>
                <View style={styles.MenuImage}>
                  <JournalImg8 width={wp(2.5 * 9)} height={hp(1.5 * 11.8)} />
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
            <Pressable onPress={()=>HandleNavigation("Journal")}>
              <View style={[styles.SquareCont, styles.NotesCont]}>
                <Text style={styles.MenuText}>Journal</Text>
                <View style={styles.MenuImage}>
                  <JournalImg11 width={wp(2.5 * 10)} height={hp(1.5 * 9.8)} />
                </View>
              </View>
            </Pressable>
            <Pressable onPress={()=>HandleNavigation("TaskList")}>
              <View style={[styles.RectangleCont, styles.AddNotes]}>
                <Text style={styles.MenuText}>Tasks</Text>

                <View style={styles.MenuImage}>
                  <JournalImg5 width={wp(2.5 * 14)} height={wp(2.5 * 14.1)} />
                </View>
              </View>
            </Pressable>
          </Animatable.View>
        </View>
      </View>
      <Animatable.View 
      animation="slideInUp"
      easing="ease-in-out"
      duration={1500}
      style={styles.BlogsAndArticleCont}>
        <BlogsAndArticle navigation={navigation}/>
      </Animatable.View>
      <Animatable.View 
      animation="slideInUp"
      easing="ease-in-out"
      duration={1500}
      style={styles.BlogsAndArticleCont}>
        <InterviewAndSound navigation={navigation}/>
      </Animatable.View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default ClientHome;

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
    resizeMode: "cover",
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
    marginBottom: Hp(12),
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
  BlogsAndArticleCont: {
    marginTop: Hp(20),
  },
  NoOfNotif:{
    position:"absolute",
    top:Hp(-2),
    right:Hp(-2),
    backgroundColor:NoteAppcolor.btnColor,
    borderRadius:Wp(10),
    width:Wp(20),
    height:Wp(20),
    justifyContent:"center",
    alignItems:"center",
    zIndex:10

  },
  NoOfNotifText:{
    color:NoteAppcolor.White,
    fontSize:FontSize(12),
    fontFamily:Nunito(700)
  }
});
