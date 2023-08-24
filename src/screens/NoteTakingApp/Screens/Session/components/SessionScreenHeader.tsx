import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "tabler-icons-react-native";
import { FontSize, Hp, Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import DatePicker from "react-native-date-picker";
import { CalenderIcon } from "@app/svgs/Index";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import { DateConstrctor } from "@app/helper/customFunction";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import { NavigationHelpers } from "@react-navigation/native";

interface Props {
  navigation: NavigationHelpers<any, any>;
  ApiQueryDate?: (date: string) => void | null;
}

const SessionScreenHeader = ({ navigation, ApiQueryDate }: Props) => {
  const [open, setOpen] = useState(false);
  const [dayAndDate, setDayAndDate] = useState<{
    Date: string;
    Day: string;
    Time: string;
    ApiDateQuery: string;
  }>({
    Date: "",
    Day: "",
    Time: "",
    ApiDateQuery: "",
  });
  const [value, setValue] = useState<Date>(new Date());

  const { deviceType } = useContext(DeviceContext);

  useEffect(() => {
    let obj = DateConstrctor(value);
    setDayAndDate(obj);
    if (ApiQueryDate !== null) {
      ApiQueryDate?.(obj.ApiDateQuery);
    }
  }, [value]);
  return (
    <View style={{ justifyContent: "center", marginBottom: Wp(10) }}>
      <View style={[[styles.HeaderCont]]}>
        <View>
          <Pressable
            style={[
              styles.HeaderIconStyles,
              deviceType === "tablet" && styles.HeaderIconStyles_Tablet,
            ]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <IconChevronLeft
              width={deviceType === "tablet" ? Wp(15) : Wp(20)}
              height={deviceType === "tablet" ? Wp(15) : Wp(20)}
              color={NoteAppcolor.Primary}
            />
          </Pressable>
        </View>

        <View>
          <Text
            style={[
              styles.Text,
              { textAlign: "center" },
              deviceType === "tablet" && styles.Text_Tablet,
            ]}
          >
            Sessions
          </Text>
        </View>

        <View
          style={[
            styles.HeaderIconStyle2,
            deviceType === "tablet" && {
              padding: Wp(2),
            },
          ]}
        >
          <Pressable
            style={[styles.PractitionerFilterButton]}
            onPress={() => setOpen(true)}
          >
            <CalenderIcon
              width={deviceType === "tablet" ? Wp(15) : Wp(20)}
              height={deviceType === "tablet" ? Wp(15) : Wp(20)}
              color={NoteAppcolor.Primary}
            />
            <DatePicker
              mode="date"
              modal
              open={open}
              date={new Date()}
              onConfirm={(date) => {
                setOpen(false);
                setValue(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
              androidVariant={"iosClone"}
            />
          </Pressable>
        </View>
      </View>
      <Text
        style={[
          styles.textTitle,

          deviceType === "tablet" && styles.textTitle_Tablet,
        ]}
      >
        {dayAndDate.Day}
      </Text>
      <Text
        style={[
          styles.textSubtitle,
          { textAlign: "center", marginTop: Wp(5) },
          deviceType === "tablet" && {
            fontSize: FontSize(8),
          },
        ]}
      >
        {dayAndDate.Date}
      </Text>
    </View>
  );
};

export default SessionScreenHeader;

const styles = StyleSheet.create({
  textTitle_Tablet: {
    fontSize: FontSize(10),
  },
  Text_Tablet: {
    fontSize: FontSize(13),
  },
  HeaderIconStyles_Tablet: {
    padding: Wp(10),
    borderRadius: Wp(10),
  },
  HeaderCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderIconStyles: {
    padding: Wp(16),
    backgroundColor: NoteAppcolor.BtnCont,
    borderRadius: Wp(14),
  },
  HeaderIconStyle2: {
    padding: Wp(6),
  },
  box: {
    width: Wp(20),
    height: Wp(20),
  },
  PractitionerHead: {
    marginTop: Hp(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PractitionerFilterButton: {
    paddingVertical: Wp(10),
    paddingHorizontal: Wp(10),
    backgroundColor: "#EFF3F2",
    alignSelf: "flex-start",
    borderRadius: Wp(8),
  },
  textTitle: {
    color: NoteAppcolor.Primary,
    fontFamily: Nunito("700"),
    fontSize: FontSize(16),
    textAlign: "center",
  },
  textSubtitle: {
    color: NoteAppcolor.Primary,
    opacity: 0.7,
    fontFamily: Mulish("600"),
    fontSize: FontSize(12),
  },
  Text: {
    fontFamily: Mulish(700),
    fontSize: FontSize(23),
    color: NoteAppcolor.Primary,
  },
});
