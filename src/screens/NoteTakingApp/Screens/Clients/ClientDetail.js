import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import Header from "@CommonComponents/Header";
import { ChevronLeft } from "@svg";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import { Mulish, Nunito } from "@helper/FontWeight";
import SessionCardDesign from "./components/SessionCardDesign";
import NotesCard from "./components/NotesCard";
import { DateConstrctor } from "@helper/customFunction";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApiServices } from "@app/services/Apiservice";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetSession,
  SetError,
  SetLoading,
  SetSessions,
} from "@app/features/Client-AllSessions/AllSessionReducers";
import { ActivityIndicator } from "react-native-paper";
import NotAvil from "@app/common/components/NotAvil";
import { setRefresh } from "@app/features/utils-States/utilsReducers";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import { widthPercentageToDP } from "react-native-responsive-screen";

const UserSelection = ({ SetState , deviceType }) => {
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
          deviceType==='tablet'&&{
            width: Wp(80),
  height: Hp(40),
  marginHorizontal: Wp(10),
  borderRadius: Hp(10),
          }
        ]}
      >
        <Text style={[styles.btnText, { color: design[0].text.color },
      deviceType==='tablet'&&{
        fontSize: Platform.OS == "android" ? Wp(10) : Wp(12),
      }
      ]}>
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
          deviceType==='tablet'&&{
            width: Wp(80),
  height: Hp(40),
  marginHorizontal: Wp(10),
  borderRadius: Hp(10),
          }
        ]}
      >
        <Text style={[styles.btnText, { color: design[1].text.color },deviceType==='tablet'&&{
        fontSize: Platform.OS == "android" ? Wp(10) : Wp(12),
      }]}>
          Notes
        </Text>
      </Pressable>
    </View>
  );
};

const ClientDetail = ({ navigation, route }) => {
  const [Option, SetOption] = useState({
    Session: true,
    Notes: false,
  });
  const {
    loading,
    Sessions,
    error,
    Success,
    isEmpty,
    haveError,
    clientInfo,
    Notes,
  } = useSelector((state) => state.ClientSessionReducer); // this state is used to get the client session states from  the reducer

  const { SelectedClientDetail } = useSelector((state) => state.ClientReducer); // Getting the state from the store Client Screen

  const {refresh}  = useSelector((state)=>state.utils)
  const dispatch = useDispatch();
  const [routeData, SetRouteData] = useState(SelectedClientDetail);
  console.log("routeData:", routeData);
  console.log(SelectedClientDetail)
  const handleApi = async () => {
    await ApiServices.Get_User_Client_All_Session(
      dispatch,
      SetLoading,
      SetSessions,
      SetError,
      ResetSession,
      routeData.id
    );
  };
  const {deviceType}=useContext(DeviceContext)

  useEffect(() => {
    handleApi();
  }, []);

  useEffect(() => {
    if(refresh){
      handleApi()
      dispatch(setRefresh(false))
    }
  },[refresh])

  useEffect(() => {
    if (Success) {
      console.log("Session:", Sessions);
      console.log("Notes:", Notes);
    }
  }, [Success]);
  return (
    <SafeAreaView style={styles.body} edges={["top", "right", "left"]}>
      <ScrollView
        stickyHeaderIndices={[2]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.HeaderStyle}>
          <Header Icon={ChevronLeft} navigation={navigation} pram={"back"} />
        </View>
        <View style={styles.ProfileCont}>
          <Image
            source={{ uri: SelectedClientDetail.avatar }}
            style={[styles.userImg, deviceType==='tablet'&&{
              width: Wp(55),
  height: Wp(55),
  borderRadius: Wp(28),
 
  marginBottom: Hp(3),
            }]}
          />
          <Text style={[styles.MainText,deviceType==='tablet'&&{
            fontSize: FontSize(12),
          }]}>{SelectedClientDetail.full_name}</Text>
          <Text style={[styles.ProfileSub,deviceType==='tablet'&&{
            fontSize: FontSize(10),
          }]}>{SelectedClientDetail.age + ' years old'}</Text>
          <Text style={[styles.ProfileSub,deviceType==='tablet'&&{
            fontSize: FontSize(10),
          }]}>
            Last Session :{" "}
            {
              DateConstrctor(new Date(SelectedClientDetail.latest_session_date))
                .Date
            }
          </Text>
        </View>
        <View>
          <UserSelection SetState={SetOption}  deviceType={deviceType}/>
        </View>
        {loading ? (
          haveError ? (
            <NotAvil Title={"Something Went Wrong"} />
          ) : (
            <View style={styles.ActivityCont}>
              <ActivityIndicator
                animating={loading}
                color={NoteAppcolor}
                size="large"
              />
            </View>
          )
        ) : (
          Success &&
          (isEmpty ? (
            <NotAvil Title={"No Session & Notes"} />
          ) : (
            <>
              {Option.Session && (
                <View style={[{ marginTop: Wp(20) ,},deviceType==='tablet'&&{
                  width:widthPercentageToDP(60),
                  alignSelf:'center',
            
                  alignItems:"center"
                }]}>
                  {Sessions.map((item, index) => (
                    <SessionCardDesign
                      key={index}
                      navigation={navigation}
                      CardData={item}
                    />
                  ))}
                </View>
              )}
              {Option.Notes && (
                <View style={{ marginTop: Wp(20) }}>
                  <NotesCard
                    Arr={Notes}
                    navigation={navigation}
                    data={routeData}
                  />
                </View>
              )}
            </>
          ))
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
    paddingTop: Platform.OS == "android" ? Wp(20) : Wp(10),
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
    fontSize: Platform.OS == "android" ? Wp(14) : Wp(16),
    fontFamily: Mulish(700),
  },
  ActivityCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
