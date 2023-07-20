import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Animated,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import Header from "@CommonComponents/Header";
import { ChevronLeft, FilterIcon, SearchIcon } from "@svg";
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
  SetLoading,
  SetClients,
  SetError,
  SetSelectedClientDetail,
} from "@app/features/Client-AllClients/ClientReducers";
import { ActivityIndicator } from "react-native-paper";
import NotAvil from "@app/common/components/NotAvil";
const Client = ({ navigation }) => {
  const [ClientInfo, SetClientInfo] = useState([]);
  const [OldData, SetOldData] = useState([]);
  const dispatch = useDispatch();
  const { loading, Clients, error, Success, isEmpty, haveError } = useSelector(
    (state) => state.ClientReducer
  ); // Getting the state from the store
  

  useEffect(() => {
    ApiServices.Get_User_All_Client(dispatch, SetLoading, SetClients, SetError);
    dispatch
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
      console.log("Broooo ya data ha: ", Clients)
    }
  }, [Success]); // After getting the data from the api, we will update the state with the new data

  // This function receives a string 'Text' as input and filters the data based on it
  //* used For Search Bar
  const HandleFilter = (Text) => {
    // If the input is empty or null, reset the client info data to its original data
    if (Text === "" || Text === null) {
      SetClientInfo(OldData);
    } else {
      // Otherwise, filter the 'OldData' array based on the name of each item that contains the input text
      let filteredData = OldData.filter(
        (item) => item.full_name.toLowerCase().indexOf(Text.toLowerCase()) > -1
      );
      // Update the state with the filtered data
      SetClientInfo(filteredData);
    }
  };

  //* this is ref for bottom sheet to control its opening and closing

  const refRBSheet = useRef();

  // This function takes an argument to sort the OldData array in different ways and updates the ClientInfo state accordingly.

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

  //* function to Close the Bottom Sheet
  const bottomSheetClose = (sortBy) => {
    SortList(sortBy);
    setTimeout(() => {
      refRBSheet.current.close();
    }, 500);
  };
  const selectedDesign = {
    display: "flex",
  };
  const UnselectedDesign = {
    display: "none",
  };

  //* function to Open the Bottom Sheet
  const bottomSheetOpen = () => {
    refRBSheet.current.open();
  };

  const [displayTick, setDisplayTick] = useState([
    UnselectedDesign,
    UnselectedDesign,
    UnselectedDesign,
  ]);

  return (
    <SafeAreaView style={styles.Body} edges={["top", "left", "right"]}>
      {loading ? (
        haveError ? (
          <View style={styles.activityIndicator}>
            <NotAvil Title={"Something Went Wrong"} />
          </View>
        ) : (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color={NoteAppcolor.Primary} />
          </View>
        )
      ) : (
        <>
          {Success &&
            (isEmpty ? (
              <View style={styles.activityIndicator}>
                <NotAvil Title={"No Clients"} />
              </View>
            ) : (
              <>
                <Header
                  Icon={ChevronLeft}
                  navigation={navigation}
                  pram={"back"}
                >
                  <Text style={styles.Text}>Clients</Text>
                </Header>
                <SearchBox
                  state={ClientInfo}
                  setState={SetClientInfo}
                  HandleFunction={HandleFilter}
                  OpenSheet={bottomSheetOpen}
                />
                <AnimatedFlatList
                  data={ClientInfo}
                  renderItem={({ item, index }) => (
                    <Pressable
                      onPress={() => {
                        navigation.navigate("Prac_ClientDetail", {
                          ClientDetail: item,
                        })
                        dispatch(SetSelectedClientDetail(item))
                        ;
                      }}
                      key={index}
                    >
                      <CardDesign Data={item} />
                    </Pressable>
                  )}
                  contentContainerStyle={{
                    paddingTop: Wp(10),
                    alignItems: "center",
                  }}
                  showsVerticalScrollIndicator={false}
                />
              </>
            ))}
        </>
      )}

      {/***
       * //*this is the Bottom Sheet that opens to sort the items
       */}
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
  );
};
function SearchBox({ HandleFunction, OpenSheet }) {
  const refInput = useRef();

  return (
    <View style={[styles.InputCont, styles.Cont]}>
      <Pressable onPress={() => refInput.current.focus()}>
        <View style={styles.InputBoxIcon}>
          <SearchIcon
            width={wp(2.5 * 2)}
            height={wp(2.5 * 2)}
            color={NoteAppcolor.Primary}
          />
        </View>
      </Pressable>
      <View>
        <TextInput
          placeholder={"Search Client"}
          style={styles.InputBox}
          placeholderTextColor={"rgba(30, 85, 66, 0.5)"}
          onChangeText={(text) => {
            HandleFunction(text);
            // console.log(text);
          }}
          ref={refInput}
        />
      </View>

      <Pressable onPress={() => OpenSheet()}>
        <View style={styles.FilterBtn}>
          <FilterIcon
            width={wp(2.5 * 2)}
            height={wp(2.5 * 2)}
            color={NoteAppcolor.Primary}
          />
        </View>
      </Pressable>
    </View>
  );
}

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
              ></View>
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
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
