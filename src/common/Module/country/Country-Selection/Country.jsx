import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { AppImages as AppIcons } from "@app/common/Images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { countries } from "../countries";
import CountryItem from "./CountryItem";
import { Mulish } from "@helper/FontWeight";
import { Hp, Wp } from "@helper/CustomResponsive";
import { SearchIcon } from "@svg";
import { NoteAppcolor as Colors } from "@app/constants/NoteAppcolor";
const Country = ({
  setFlag,
  sheetClose,
  showDialCode,
  deviceType = "mobile",
}) => {
  const [query, setQuery] = useState("");
  const [searchIcon, setSearchIcon] = useState(AppIcons.search);

  const [btnShow, setBtnShow] = useState(false);
  const heandlerSearch = (text) => {
    setQuery(text);
    if (text == "") {
      setBtnShow(false);
      setSearchIcon(AppIcons.search);
    }
  };
  const filterdData = countries.filter(({ name }) => {
    return name.includes(query);
  });
  const handerCountry = (item) => {
    setSearchIcon(item?.flag);
    setQuery(item?.name);
    setBtnShow(true);
    setFlag(item);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View
            style={[
              styles.searchButton,
              deviceType === "tablet" && {
                height: Wp(15),
                width: Platform.OS === "ios" ? wp(4) : wp(3.5),
                borderTopLeftRadius: Hp(14),
                borderBottomLeftRadius: Hp(14),
                paddingLeft: Wp(6),
              },
            ]}
          >
            <SearchIcon
              width={deviceType === "mobile" ? Wp(20) : Wp(10)}
              height={deviceType === "mobile" ? Wp(20) : Wp(10)}
              color={Colors.Primary}
            />
          </View>

          <TextInput
            value={query}
            onChangeText={(text) => heandlerSearch(text)}
            placeholder="Search"
            style={[
              styles.input,
              deviceType === "tablet" && {
                height: Wp(15),
                width: wp(35),
                padding: Wp(2),
                borderTopRightRadius: Hp(14),
                borderBottomRightRadius: Hp(14),
                fontFamily: Mulish(400),
                fontSize: Wp(8),
                paddingHorizontal: Wp(4),
                paddingVertical: Wp(2),
              },
            ]}
          />
        </View>
        <View
          style={[
            {
              height: Platform.OS === "ios" ? hp(27) : hp(35),
              marginBottom: hp(1),
            },

            deviceType === "tablet" && {
              height: hp(23),
            },
          ]}
        >
          <FlatList
            data={filterdData}
            renderItem={({ item }) => (
              <CountryItem
                item={item}
                handerData={handerCountry}
                ShowDialCode={showDialCode}
                devicetype={deviceType}
              />
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
        {btnShow ? (
          <View>
            <TouchableOpacity onPress={() => sheetClose()}>
              <View
                style={[
                  styles.contBtn,
                  deviceType === "tablet"&&
                  {
                    padding: Wp(6),
                  },
                ]}
              >
                <Text
                  style={[
                    styles.btnText,
                    deviceType === "tablet"&&
                    {
                      fontSize: Wp(8),
                    },
                  ]}
                >
                  Continue
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          ""
        )}
      </View>
    </SafeAreaView>
  );
};

export default Country;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    padding: hp(3),
  },
  input: {
    backgroundColor: "#EFF3F2",
    height: Platform.OS === "ios" ? hp(6) : hp(1.5 * 6),
    width: wp(75),
    padding: hp(2),
    borderTopRightRadius: Hp(14),
    borderBottomRightRadius: Hp(14),
    fontFamily: Mulish(700),
    fontSize: Wp(14),
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#EFF3F2",
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "ios" ? hp(6) : hp(1.5 * 6),
    width: Platform.OS === "ios" ? wp(9) : wp(8),
    borderTopLeftRadius: Hp(14),
    borderBottomLeftRadius: Hp(14),
    paddingLeft: Wp(12),
  },
  contBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E5542",
    padding: Wp(16),
    borderRadius: hp(4),
  },
  btnText: {
    color: "#fff",
    fontSize: Wp(16),
    fontFamily: Mulish(700),
  },
});
