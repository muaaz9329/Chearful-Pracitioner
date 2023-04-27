import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Mulish } from "@app/helper/FontWeight";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import TimePicker from "./TimePicker";

const AddTaskForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Personal", value: "Personal" },
    { label: "Mental Health", value: "Mental Health" },
    { label: "Work", value: "Work" },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ]);
  return (
    <View style={styles.body}>
      <View style={styles.TaskTitleCont}>
        <Text style={styles.TaskTitle}>Task Title</Text>
        <View style={styles.TaskCont}>
          <TextInput
            style={styles.TaskInput}
            placeholder="Enter your Task here"
          />
        </View>
      </View>
      <View style={styles.DropDowns}>
        <View style={styles.DropDownCont}>
          <Text style={styles.TaskTitle}>Category</Text>
          <View style={styles.DropDownContainer}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select Category"
              dropDownContainerStyle={styles.dropDownStyle}
              style={styles.dropDownStyle}
            />
          </View>
        </View>
        <View style={styles.DropDownCont}>
          <Text style={styles.TaskTitle}>Pirority</Text>
          <View style={styles.DropDownContainer}>
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              placeholder="Select Pirority"
              dropDownContainerStyle={styles.dropDownStyle}
              style={styles.dropDownStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.TimePickerCont}>
        <View>
          <Text style={styles.TaskTitle}>Start Time</Text>
          <View style={styles.TimePicker}>
            <TimePicker label={"00:00 AM"} />
          </View>
        </View>
        <View>
          <Text style={styles.TaskTitle}>End Time</Text>
          <View style={styles.TimePicker}>
            <TimePicker label={"00:00 PM"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  TaskTitle: {
    fontFamily: Mulish(700),
    fontSize: FontSize(16),
    color: NoteAppcolor.Primary,
  },
  TaskCont: {
    backgroundColor: NoteAppcolor.OffWhiteCont,

    borderRadius: Wp(10),
    marginTop: Wp(8),
  },
  body: {
    paddingHorizontal: Wp(16),
    paddingVertical: Wp(20),
  },
  TaskInput: {
    fontFamily: Mulish(400),
    fontSize: FontSize(14),
    color: NoteAppcolor.MenuText,
    paddingVertical: Wp(10),
    paddingHorizontal: Wp(10),
  },
  dropDownStyle: {
    width: wp(40),
    backgroundColor: NoteAppcolor.OffWhiteCont,
    borderRadius: Wp(10),
  },
  DropDownContainer: {
    marginTop: Wp(8),
  },
  DropDowns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Wp(20),
  },
  TimePicker: {
    marginTop: Wp(8),
  },
  TimePickerCont: {
    marginTop: Wp(20),
    flexDirection: "row",
    justifyContent: "space-between",

  },
});
