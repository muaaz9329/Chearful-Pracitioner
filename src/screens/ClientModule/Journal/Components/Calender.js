import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Mulish, Nunito } from "@helper/FontWeight";
import { Hp, Wp } from "@helper/CustomResponsive";
import { DataRendering, DesignRendering } from "@helper/customFunction";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { IconFilter } from "tabler-icons-react-native";
import SortBaseSheet from "./SortBaseSheet";

const Calender = ({ DateData }) => {
  const SheetRef = React.useRef(null);
  const intailState = DataRendering(DateData);

  const unselectedDesign = {
    body: {
      backgroundColor: null,
    },
    text: {
      color: "#1E5542",
    },
  };
  const SelectedDesign = {
    body: {
      backgroundColor: "#1E5542",
    },
    text: { color: "white" },
  };

  const intialDesign = DesignRendering(DateData, unselectedDesign);
  const [design, setDesign] = useState(intialDesign); // this state is used to control the button design
  const [selectedItem, SetSelected] = useState(intailState); // this state is used to have make the button toggle and assignning the data to the userSelec state

  const AddingSelected = (index) => {
    // * this function will fire when user selects date
    if (selectedItem[index].isSelected === false) {
      design[index] = SelectedDesign;
      setDesign([...design]);
      for (let i = 0; i < design.length; i++) {
        if (i != index) {
          design[i] = unselectedDesign;
          setDesign([...design]);
        }
      }

      selectedItem[index].isSelected = true;
      SetSelected([...selectedItem]);
      for (let i = 0; i < selectedItem.length; i++) {
        if (i != index) {
          selectedItem[i].isSelected = false;
          SetSelected([...selectedItem]);
        }
      }
    } else {
      design[index] = unselectedDesign;
      setDesign([...design]);
      selectedItem[index].isSelected = false;
      SetSelected([...selectedItem]);
    }
  };

  const OpenSheet = () => {
    SheetRef.current.HandleOpen();
  };

  // TODO: have to make it dynamic for user to get the appointment for selected date
  return (
    <View style={styles.CalenderCont}>
      <View style={styles.MonthAndYear}>
        <Text style={styles.MonthAndYearStyle}>August 2023</Text>
        <View style={styles.filterCont}>
          <Pressable style={styles.Filterbtn} onPress={OpenSheet}>
            <IconFilter size={Wp(25)} color={NoteAppcolor.Primary} />
          </Pressable>
        </View>
      </View>
      <View style={styles.DayCont}>
        {DateData.map((date, index) => {
          return (
            <Pressable
              style={[styles.DateBolb, design[index].body]}
              key={index}
              onPress={() => {
                AddingSelected(index);
              }}
            >
              <Text style={[styles.day, design[index].text]}>
                {date.day.toUpperCase()}
              </Text>
              <Text style={[styles.date, design[index].text]}>{date.date}</Text>
            </Pressable>
          );
        })}
      </View>
      <SortBaseSheet ref={SheetRef} />
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  CalenderCont: {
    marginVertical: Hp(20),
  },
  MonthAndYear: {
    marginBottom: Hp(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  MonthAndYearStyle: {
    fontFamily: Nunito(700),
    fontSize: Wp(18),
    lineHeight: 24,
    color: NoteAppcolor.textColor,
  },
  DayCont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  DateBolb: {
    borderRadius: Wp(7),
    width: Wp(50),
    marginHorizontal: Wp(10),
  },
  day: {
    textAlign: "center",
    marginVertical: Wp(8),
    fontFamily: Nunito(700),
    fontSize: Wp(12),
  },
  date: {
    marginBottom: Wp(12),
    alignSelf: "center",
    fontSize: Wp(13),
    fontFamily: Mulish(400),
  },
  filterCont: {
    alignSelf: "flex-end",
  },
  Filterbtn: {
    backgroundColor: NoteAppcolor.OffWhiteCont,
    padding: Wp(5),
    borderRadius: Wp(10),
  },
});
