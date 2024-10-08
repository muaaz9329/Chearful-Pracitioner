import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import Header from "@CommonComponents/Header";
import { ChevronLeft, FilterIcon, SearchIcon, Tick } from "@svg";
import { Mulish, Nunito } from "@helper/FontWeight";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CardDesign from "./components/CardDesign";
import RBSheet from "react-native-raw-bottom-sheet";
import AnimatedFlatList from "@constants/AnimatedFlatList";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApiServices } from "@app/services/Apiservice";
import { useDispatch, useSelector } from "react-redux";
import {
  SetClients,
  SetError,
  SetLoading,
  SetSelectedClientDetail,
} from "@app/features/Client-AllClients/ClientReducers";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import NotAvil from "@app/common/components/NotAvil";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
function SearchBox({ HandleFunction, OpenSheet , deviceType }) {
  const refInput = useRef();

  return (
    <View style={[styles.InputCont, styles.Cont]}>
      <Pressable onPress={() => refInput.current.focus()}>
        <View style={styles.InputBoxIcon}>
          <SearchIcon
            width={deviceType === "mobile" ? wp(2.5 * 2) : wp(2.5 * 1.2)}
            height={deviceType === "mobile" ? wp(2.5 * 2) : wp(2.5 * 1.2)}
            color={NoteAppcolor.Primary}
          />
        </View>
      </Pressable>
      <View>
        <TextInput
          placeholder={"Search Client"}
          style={[
            styles.InputBox,
            deviceType === "tablet" && {
              fontSize: Wp(8),
              width: wp(70),
            },
          ]}
          placeholderTextColor={"rgba(30, 85, 66, 0.5)"}
          onChangeText={(text) => {
            HandleFunction(text);
            // console.log(text);
          }}
          ref={refInput}
        />
      </View>

      <Pressable onPress={() => OpenSheet()}>
        <View
          style={[
            styles.FilterBtn,
            deviceType === "tablet" && styles.FilterBtn_tablet,
          ]}
        >
          <FilterIcon
            width={deviceType === "mobile" ? wp(2.5 * 2) : wp(2.5 * 1.2)}
            height={deviceType === "mobile" ? wp(2.5 * 2) : wp(2.5 * 1.2)}
            color={NoteAppcolor.Primary}
          />
        </View>
      </Pressable>
    </View>
  );
}

const Client = ({ navigation }) => {
  const [ClientInfo, SetClientInfo] = useState([]);
  const [OldData, SetOldData] = useState([]);
  const Dispatch = useDispatch();
  const LoadingRef = useRef();
  const {deviceType}=useContext(DeviceContext)

  const { loading, Clients, error, Success, isEmpty, haveError } = useSelector(
    (state) => state.ClientReducer
  ); // Getting the state from the store

  const HandleApi = async () => {
    ApiServices.Get_User_All_Client(Dispatch, SetLoading, SetClients, SetError);
  };

  useEffect(() => {
    HandleApi();
  }, []);

  useEffect(() => {
    if (haveError) {
      console.log("Broooo ya error aya ha: ", error);
    }
  }, [haveError]); // use To check if there is any error or not

  useEffect(() => {
    if (Success) {
      SetClientInfo(Clients);
      SetOldData(Clients);
      LoadingRef.current.LoadingEnds();
    }
  }, [Success]);

  const HandleFilter = (Text) => {
    if (Text == "" || Text == null) {
      SetClientInfo(OldData);
    } else {
      let filteredData = OldData.filter(
        (item) => item.full_name.toLowerCase().indexOf(Text.toLowerCase()) > -1
      );
      SetClientInfo(filteredData);
    }
  };

  const refRBSheet = useRef();

  const SortList = (arg) => {
    var oldData = [...OldData];
    
    if (arg === "Ascending") {
      let TempList = oldData.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
      SetClientInfo(TempList);
    } else if (arg === "Descending") {
      let TempList = oldData.sort((a, b) => (a.first_name < b.first_name ? 1 : -1));
      SetClientInfo(TempList);
    } else if (arg === "Last Visit") {
      let TempList = oldData.sort((a, b) => new Date(b.latest_session_date) - new Date(a.latest_session_date));
    SetClientInfo(TempList);
    } else {
      // Handle the case when the argument is not recognized
      console.error("Invalid argument for sorting:", arg);
    }
  };

  const bottomSheetClose = (sortBy) => {
    SortList(sortBy);
    setTimeout(() => {
      refRBSheet.current.close();
    }, 100);
  };
  const selectedDesign = {
    display: "flex",
  };
  const UnselectedDesign = {
    display: "none",
  };

  const bottomSheetOpen = () => {
    refRBSheet.current.open();
  };

  const [displayTick, setDisplayTick] = useState([
    UnselectedDesign,
    UnselectedDesign,
    UnselectedDesign,
  ]);

  return (
    <>
      <LoadingScreen type={"loader"} ref={LoadingRef} />
      <SafeAreaView style={styles.Body} edges={["top", "left", "right"]}>
        <Header Icon={ChevronLeft} navigation={navigation} pram={"back"} justifyContent="flex-start">
          <View style={styles.HeaderCont}>
            <Text style={[styles.HeaderTitle, deviceType==='tablet'&&{
              fontSize: FontSize(10),
            }]}>Clients</Text>
            <Text style={[styles.SubHeaderTitle, deviceType==='tablet'&&{
              fontSize: FontSize(8),
            }]}>Select the Client to get Sessions</Text>
          </View>
        </Header>
        <SearchBox
          state={ClientInfo}
          setState={SetClientInfo}
          HandleFunction={HandleFilter}
          OpenSheet={bottomSheetOpen}
          deviceType={deviceType}
        />
        {ClientInfo.length === 0 ? (
          <NotAvil Title={`No Clients Available`} />
        ) : (
          <AnimatedFlatList
            data={ClientInfo}
            Item_size={
              deviceType === "tablet" ? wp(13) : Wp(76 + 16 + 20)
            }
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Prac_AddNoteSession", {
                    ClientDetail: item,
                  });
                  Dispatch(SetSelectedClientDetail(item));
                }}
              >
                <CardDesign Data={item} key={index} />
              </Pressable>
            )}
            contentContainerStyle={{
              paddingTop: Wp(10),
              alignItems: "center",
            }}
            showsVerticalScrollIndicator={false}
          />
        )}

        <RBSheet
          ref={refRBSheet}
          height={hp(32)}
          closeOnDragDown={false}
          closeOnPressMask={true}
          customStyles={{
            container: {
              borderTopLeftRadius: hp(4),
              borderTopRightRadius: hp(4),
            },
            wrapper: {
              backgroundColor: "rgba(0,0,0,.6)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <BottomSheet
            HandleFunction={bottomSheetClose}
            displayTick={displayTick}
            setDisplayTick={setDisplayTick}
            selectedDesign={selectedDesign}
            UnselectedDesign={UnselectedDesign}
          />
        </RBSheet>
      </SafeAreaView>
    </>
  );
};

const BottomSheet = ({
  HandleFunction,
  displayTick,
  setDisplayTick,
  selectedDesign,
  UnselectedDesign,
}) => {
  const menuOption = [
    {
      title: "Ascending",
    },
    {
      title: "Descending",
    },
    {
      title: "Last Visit",
    },
  ];
  const ChangeDesign = (index) => {
    let newDisplayTick = [...displayTick];

    switch (index) {
      case 0:
        newDisplayTick[0] = selectedDesign;
        newDisplayTick[1] = UnselectedDesign;
        newDisplayTick[2] = UnselectedDesign;
        break;
      case 1:
        newDisplayTick[1] = selectedDesign;
        newDisplayTick[0] = UnselectedDesign;
        newDisplayTick[2] = UnselectedDesign;
        break;
      case 2:
        newDisplayTick[2] = selectedDesign;
        newDisplayTick[0] = UnselectedDesign;
        newDisplayTick[1] = UnselectedDesign;
        break;
      default:
        break;
    }

    setDisplayTick(newDisplayTick);
  };

  return (
    <View>
      <View style={styles.ContTitle}>
        <Text style={styles.ContTitleText}>Sort</Text>
      </View>
      <View style={styles.SelectionCont}>
        {menuOption.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={styles.MainCont}
              onPress={() => {
                ChangeDesign(index);
                HandleFunction(item.title);
              }}
            >
              <View style={styles.SelectionContainer}>
                <Text style={styles.textTitle}>{item.title}</Text>
              </View>
              <View
                style={[
                  styles.icon,
                  displayTick[index],
                  {
                    position: "absolute",
                    backgroundColor: NoteAppcolor.Primary,
                    width: wp(90),
                    height: wp(10),
                    borderRadius: Wp(12),
                    opacity: 0.2,
                  },
                ]}
              >
                {/* <Tick
                  width={Wp(12)}
                  height={Wp(12)}
                  color={NoteAppcolor.Primary}
                /> */}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Client;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: NoteAppcolor.White,
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingTop: Platform.OS == "android" ? Wp(20) : Wp(10),
  },
  Text: {
    fontFamily: Mulish(700),
    fontSize: FontSize(23),
    color: NoteAppcolor.Primary,
  },
  InputCont: {
    flexDirection: "row",
    width: wp(90),
    borderRadius: 14,
    backgroundColor: NoteAppcolor.Secondary,
    marginVertical: hp(1.5 * 1.7),
    alignItems: "center",
  },
  InputBoxIcon: {
    paddingVertical: hp(1.5 * 1.8),
    paddingHorizontal: wp(2.5 * 1.6),
  },
  InputBox: {
    color: NoteAppcolor.Primary,
    width: wp(63),
    fontFamily: Mulish(700),
    fontSize: Wp(14),
  },
  FilterBtn: {
    padding: wp(2.5),
    margin: wp(2.5 * 0.8),
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  ContTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Hp(15),
  },
  ContTitleText: {
    fontFamily: Nunito(700),
    fontSize: Wp(20),
    color: NoteAppcolor.Primary,
  },
  SelectionCont: {
    marginTop: Hp(30),
    paddingHorizontal: Wp(20),
  },
  MainCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Hp(30),
  },
  icon: {
    paddingHorizontal: Wp(10),
    paddingVertical: Wp(10),
  },
  textTitle: {
    color: NoteAppcolor.Primary,
    fontFamily: Nunito("700"),
    fontSize: Wp(18),
    textAlign: "center",
  },
  HeaderTitle:{
    fontFamily: Mulish(700),
    fontSize: FontSize(16),
    color: NoteAppcolor.Primary,

  },
  SubHeaderTitle:{
    fontFamily: Mulish(400),
    fontSize: FontSize(13),
    color: NoteAppcolor.Primary,
    opacity:0.7
  },
  HeaderCont:{
    marginStart:Wp(10)
  },
  FilterBtn_tablet: {
    padding: wp(1.2),
    margin: wp(2.5 * 0.5),
    backgroundColor: "#FFFFFF",
    borderRadius: Wp(5),
  },
});
