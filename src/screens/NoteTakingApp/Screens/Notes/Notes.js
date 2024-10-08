import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import Header from "@CommonComponents/Header";
import { ChevronLeft, FilterIcon, SearchIcon } from "@svg";
import { Mulish, Nunito } from "@helper/FontWeight";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RBSheet from "react-native-raw-bottom-sheet";
import NotesCard from "./Components/NotesCard";
import { IconPlus } from "tabler-icons-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApiServices } from "@app/services/Apiservice";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetAllNotes,
  SetError,
  SetLoading,
  SetSuccess,
} from "@app/features/Prac-AllNotes/AllNotesReducers";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { setRefresh } from "@app/features/utils-States/utilsReducers";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
function SearchBox({ HandleFunction, OpenSheet, deviceType }) {
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
      title: "Dates",
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

const Client = ({ navigation }) => {
  const [NotesInfo, SetNotesInfo] = useState(null);
  const [OldData, SetOldData] = useState(null);
  const disptch = useDispatch();
  const { AllNotes, Loading, Error, Success, isEmpty, haveError } = useSelector(
    (state) => state.AllNotesReducers
  ); // AllNotesReducers states
  const loadingRef = useRef(null);
  const { refresh } = useSelector((state) => state.utils);
  const { deviceType } = useContext(DeviceContext);

  const HandleFilter = (Text) => {
    if (Text == "" || Text == null) {
      SetNotesInfo(OldData);
    } else {
      let filteredData = OldData.filter(
        (item) => item.fullname.toLowerCase().indexOf(Text.toLowerCase()) > -1
      );
      SetNotesInfo(filteredData);
    }
  };

  const refRBSheet = useRef();

  const SortList = (arg) => {
    const newList = [...OldData];
    if (arg === "Ascending") {
      let TempList = newList.sort((a, b) => (a.fullname > b.fullname ? 1 : -1));
      SetNotesInfo(TempList);
    } else if (arg === "Descending") {
      let TempList = newList.sort((a, b) => (a.fullname < b.fullname ? 1 : -1));
      SetNotesInfo(TempList);
    } else if (arg == "Dates") {
      let TempList = newList.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.created_at) - new Date(a.created_at);
      });
      SetNotesInfo(TempList);
    }
  };

  const HandleApi = async () => {
    ApiServices.Get_User_All_Notes(
      disptch,
      SetSuccess,
      SetLoading,
      SetError,
      ResetAllNotes
    );
  };

  useEffect(() => {
    HandleApi();
  }, []);

  useEffect(() => {
    if (Success) {
      SetNotesInfo(AllNotes);
      SetOldData(AllNotes);
      loadingRef.current.LoadingEnds();
    }
  }, [Success]);

  useEffect(() => {
    if (refresh) {
      loadingRef.current.LoadingStarts();
      HandleApi();
      disptch(setRefresh(false));
    }
  });

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
      <LoadingScreen type="loader" ref={loadingRef} />
      <SafeAreaView edges={["top", "left", "right"]} style={styles.Body}>
        <Pressable
          style={[
            styles.Addbtn,
            deviceType === "tablet" && {
              width: Wp(30),
              height: Wp(30),
            },
          ]}
          onPress={() => {
            navigation.push("Prac_AddNoteClient");
          }}
        >
          <IconPlus
            size={deviceType === "mobile" ? Wp(25) : Wp(14)}
            color={"white"}
          />
        </Pressable>
        <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
          <Text
            style={[
              styles.Text,
              deviceType === "tablet" && {
                fontSize: FontSize(14),
              },
            ]}
          >
            Notes
          </Text>
        </Header>
        <SearchBox
          state={NotesInfo}
          setState={SetNotesInfo}
          HandleFunction={HandleFilter}
          OpenSheet={bottomSheetOpen}
          deviceType={deviceType}
        />
        <ScrollView
          style={{ marginTop: Wp(20) }}
          showsVerticalScrollIndicator={false}
        >
          {NotesInfo && <NotesCard Arr={NotesInfo} navigation={navigation} />}
        </ScrollView>
        <RBSheet
          ref={refRBSheet}
          height={hp(35)}
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

export default Client;

const styles = StyleSheet.create({
  FilterBtn_tablet: {
    padding: wp(1.2),
    margin: wp(2.5 * 0.5),
    backgroundColor: "#FFFFFF",
    borderRadius: Wp(5),
  },
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
    borderRadius: Wp(14),
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
    borderRadius: Wp(8),
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
  Addbtn: {
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
