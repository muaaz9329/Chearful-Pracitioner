import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { NoteAppcolor } from "../../constants/NoteAppcolor";
import { FontSize, Hp, Wp } from "../../../../helper/CustomResponsive";
import Header from "../../ConstantComponents/Header";
import { ChevronLeft, FilterIcon, SearchIcon } from "../../../../svgs/Index";
import { Mulish, Nunito } from "../../../../helper/FontWeight";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RBSheet from "react-native-raw-bottom-sheet";
import PractitionerNotes from "../../Data/PractitionerNotes";
import NotesCard from "./Components/NotesCard";
import { IconPlus } from "tabler-icons-react-native";
function SearchBox({ HandleFunction, OpenSheet  }) {
  const refInput = useRef();
  return (
    <View style={[styles.InputCont, styles.Cont]}>
      <Pressable
        onPress={() => refInput.current.focus()}
      >
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

const Client = ({navigation}) => {
  const [NotesInfo, SetNotesInfo] = useState(PractitionerNotes);
  const [OldData, SetOldData] = useState(PractitionerNotes);

  const HandleFilter = (Text) => {
    if (Text == "" || Text == null) {
      SetNotesInfo(OldData);
    } else {
      let filteredData = OldData.filter(
        (item) => item.Name.toLowerCase().indexOf(Text.toLowerCase()) > -1
      );
      SetNotesInfo(filteredData);
    }
  };

  const refRBSheet = useRef();
 
  const SortList = (arg) => {
    if (arg === "Ascending") {
      let TempList = OldData.sort((a, b) => (a.Name > b.Name ? 1 : -1));
      SetNotesInfo(TempList);
    } else if (arg === "Descending") {
      let TempList = OldData.sort((a, b) => (a.Name < b.Name ? 1 : -1));
      SetNotesInfo(TempList);
    } else if (arg == "Dates") {
      let TempList = OldData.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.LastVisitDate) - new Date(a.LastVisitDate);
      });
      SetNotesInfo(TempList);
    }
  };

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
    <View style={styles.Body}>
      <Pressable style={styles.Addbtn} onPress={()=>{
        navigation.push("AddNoteClient")
      }}>
        <IconPlus size={Wp(25)} color={"white"} />
      </Pressable>
      <Header Icon={ChevronLeft} navigation={navigation} pram={"back"}>
        <Text style={styles.Text}>Notes</Text>
      </Header>
      <SearchBox
        state={NotesInfo}
        setState={SetNotesInfo}
        HandleFunction={HandleFilter}
        OpenSheet={bottomSheetOpen}
      />
      <ScrollView style={{ marginTop: Wp(20) }}>
        <NotesCard Arr={NotesInfo} navigation={navigation}  />
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
    </View>
  );
};

export default Client;

const styles = StyleSheet.create({
  Body: {
    backgroundColor: NoteAppcolor.White,
    flex: 1,
    paddingHorizontal: Wp(16),
    paddingTop: Wp(20),
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
  Addbtn:{
    width:Wp(50),
    height:Wp(50),
    backgroundColor:NoteAppcolor.Primary,
    justifyContent:"center",
    alignItems: "center",
    borderRadius:Wp(25),
    position:"absolute",
    zIndex: 10,
    bottom:Wp(25),
    right:Wp(25)
  }
});
