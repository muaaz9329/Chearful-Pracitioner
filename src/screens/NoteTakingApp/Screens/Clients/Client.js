import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Animated,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
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
import ClientData from "../../Data/ClientData";
import RBSheet from "react-native-raw-bottom-sheet";
import AnimatedFlatList from "@constants/AnimatedFlatList";
import { SafeAreaView } from "react-native-safe-area-context";
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

const Client = ({ navigation }) => {
  const [ClientInfo, SetClientInfo] = useState(ClientData);
  const [OldData, SetOldData] = useState(ClientData);

  // This function receives a string 'Text' as input and filters the data based on it
  //* used For Search Bar
  const HandleFilter = (Text) => {
    // If the input is empty or null, reset the client info data to its original data
    if (Text === "" || Text === null) {
      SetClientInfo(OldData);
    } else {
      // Otherwise, filter the 'OldData' array based on the name of each item that contains the input text
      let filteredData = OldData.filter(
        (item) => item.Name.toLowerCase().indexOf(Text.toLowerCase()) > -1
      );
      // Update the state with the filtered data
      SetClientInfo(filteredData);
    }
  };

  //* this is ref for bottom sheet to control its opening and closing

  const refRBSheet = useRef();

  // This function takes an argument to sort the OldData array in different ways and updates the ClientInfo state accordingly.

  const SortList = (arg) => {
    // If the argument is "Ascending", sort the array in ascending order of Name property.
    if (arg === "Ascending") {
      let TempList = OldData.sort((a, b) => (a.Name > b.Name ? 1 : -1));
      SetClientInfo(TempList); // Update the state with the sorted array.
    }
    // If the argument is "Descending", sort the array in descending order of Name property.
    else if (arg === "Descending") {
      let TempList = OldData.sort((a, b) => (a.Name < b.Name ? 1 : -1));
      SetClientInfo(TempList); // Update the state with the sorted array.
    }
    // If the argument is "Last Visit", sort the array in descending order of LastVisitDate property.
    else if (arg == "Last Visit") {
      let TempList = OldData.sort(function (a, b) {
        // Convert the LastVisitDate string properties to Date objects and compare them to sort.
        return new Date(b.LastVisitDate) - new Date(a.LastVisitDate);
      });
      SetClientInfo(TempList); // Update the state with the sorted array.
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
    <SafeAreaView style={styles.Body} edges={['top','left','right']}>
      <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
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
              navigation.push("Prac_ClientDetail", { ClientDetail: item });
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

export default Client;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: NoteAppcolor.White,
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingTop: Platform.OS =='android'? Wp(20) : Wp(10) ,
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
});
