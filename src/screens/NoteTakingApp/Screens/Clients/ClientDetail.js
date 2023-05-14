import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import Header from "@CommonComponents/Header";
import { ChevronLeft } from "@svg";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import { Mulish, Nunito } from "@helper/FontWeight";
import SessionCardDesign from "./components/SessionCardDesign";
import NotesCard from "./components/NotesCard";
import { DateConstrctor } from "@helper/customFunction";
import { SafeAreaView } from "react-native-safe-area-context";

const UserSelection = ({ SetState }) => {
  const user = ["mySelf", "someoneElse"];
  const SelectedDesign = {
    cont: {
      backgroundColor: "#1E5542",
    },
    text: {
      color: "white",
    },
  };
  const UnselectedDesign = {
    cont: {
      backgroundColor: "white",
    },
    text: {
      color: "#1E5542",
    },
  };
  const [design, setDesign] = useState([SelectedDesign, UnselectedDesign]);
  const [value, setValue] = useState(""); // this state consist of the user selected gender

  const StateChanging = (index) => {
    // this function changes the design and assigns the use selection to value state

    if (index === 0) {
      design[index] = SelectedDesign;

      setDesign([...design]);
      design[index + 1] = UnselectedDesign;

      setDesign([...design]);
      setValue(user[index]);
      SetState({
        Session: true,
        Notes: false,
      });
    } else if (index === 1) {
      design[index] = SelectedDesign;
      setDesign([...design]);
      design[index - 1] = UnselectedDesign;
      setDesign([...design]);
      setValue(user[index]);
      SetState({
        Session: false,
        Notes: true,
      });
    }
  };
  return (
    <View style={styles.UserSelectionCont}>
      <Pressable
        onPress={() => {
          StateChanging(0);
        }}
        style={[
          styles.selecBtn,
          { backgroundColor: design[0].cont.backgroundColor },
        ]}
      >
        <Text style={[styles.btnText, { color: design[0].text.color }]}>
          Sessions
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          StateChanging(1);
        }}
        style={[
          styles.selecBtn,
          { backgroundColor: design[1].cont.backgroundColor },
        ]}
      >
        <Text style={[styles.btnText, { color: design[1].text.color }]}>
          Notes
        </Text>
      </Pressable>
    </View>
  );
};

const ClientDetail = ({navigation,route}) => {
  const [Option, SetOption] = useState({
    Session: true,
    Notes: false,
  });
  const [routeData, SetRouteData]=useState(route.params.ClientDetail)
  console.log(routeData)
  let newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <SafeAreaView style={styles.body} edges={['top','right','left']}>
      <ScrollView stickyHeaderIndices={[2]} showsVerticalScrollIndicator={false}>
        <View style={styles.HeaderStyle}>
          <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}></Header>
        </View>
        <View style={styles.ProfileCont}>
          <Image
            source={routeData.Picture}
            style={styles.userImg}
          />
          <Text style={styles.MainText}>{routeData.Name}</Text>
          <Text style={styles.ProfileSub}>24 Years Old</Text>
          <Text style={styles.ProfileSub}>Last Visit on {DateConstrctor(new Date(routeData.LastVisitDate)).Date}</Text>
        </View>
        <View>
          <UserSelection SetState={SetOption} />
        </View>

        {Option.Session && (
          <View style={{ marginTop: Wp(20) }}>
            {newArr.map((item, index) => {
              return <SessionCardDesign key={index} navigation={navigation} data={routeData} />;
            })}
          </View>
        )}
        {Option.Notes && (
          <View style={{ marginTop: Wp(20) }}>
            <NotesCard Arr={newArr} navigation={navigation}  data={routeData}/>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClientDetail;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: NoteAppcolor.White,
    paddingHorizontal: Wp(16),
    paddingTop: Platform.OS=='android' ? Wp(20) : Wp(10),
  },
  HeaderStyle: {
    position: "absolute",
    zIndex: 10,
  },
  ProfileCont: {
    paddingVertical: Wp(35),
    alignItems: "center",
    justifyContent: "center",
  },
  userImg: {
    width: Wp(110),
    height: Wp(110),
    borderRadius: Wp(55),
    resizeMode: "center",
    marginBottom: Hp(5),
  },
  MainText: {
    fontFamily: Nunito(700),
    fontSize: FontSize(20),
    color: NoteAppcolor.Primary,
  },
  ProfileSub: {
    fontFamily: Mulish(600),
    fontSize: FontSize(16),
    opacity: 0.7,
    color: NoteAppcolor.Primary,
    marginTop: Wp(5),
  },
  UserSelectionCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: NoteAppcolor.White,
    paddingBottom: Wp(20),
  },
  selecBtn: {
    width: Wp(135),
    height: Hp(55),
    marginHorizontal: Wp(10),
    borderRadius: Hp(13),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6E7E6",
  },
  btnText: {
    fontSize:  Platform.OS =='android' ? Wp(14) : Wp(16) ,
    fontFamily: Mulish(700),
  },
});
