
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Hp, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor as Colors } from "@constants/NoteAppcolor";
import {
  CameraIcon,
  StarIcon,
  SuccessIcon,
  TickIcon,
} from "@svg";

import { StringWithDots } from "@helper/customFunction";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Mulish, Nunito } from "@helper/FontWeight";
import { PractitionerData } from "../../Data/PractitonerData";
const UpcomingCardDesign = ({ data }) => {

    const UncheckDesign = {
        checked: false,
        bgColor: Colors.White,
        tickColor: null,
      };
      const CheckDesign = {
        checked: true,
        bgColor: Colors.Primary,
        tickColor: Colors.White,
      };
      const setCheckDesign = () => {
        if (check.checked) {
          setCheck(UncheckDesign);
        } else {
          setCheck(CheckDesign);
        }
      }
      const [check, setCheck] = useState(UncheckDesign);
      

  const FirstCont = ({ data }) => {
    return (
      <SafeAreaView style={styles.firstCont}>
        <View style={styles.userImgCont}>
          <Image source={data.img} style={styles.userImg} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: Wp(4),
          }}
        >
          <View style={styles.RatingCont}>
            <View style={styles.StarIcon}>
              <StarIcon
                width={Wp(12)}
                height={Hp(12)}
                color={Colors.textColor}
              />
            </View>
            <Text style={styles.RatingText}>{data.Rating}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  const SecondCont = ({ data }) => {
    return (
      <View style={styles.SecondCont}>
        <View style={[styles.firstRow, styles.row]}>
          <View style={styles.ProfileName}>
            <Text style={styles.ProfileNameStyle}>
              {data.name.length > 14
                ? data.name.slice(0, 14) + ".."
                : data.name}
            </Text>
          </View>
          <View style={styles.ProfileBasicInfo}>
            {data.verifed && (
              <View style={styles.verification}>
                <SuccessIcon
                  width={Wp(20)}
                  height={Wp(20)}
                  tickColor={"white"}
                  bgColor={"#BDD79D"}
                />
              </View>
            )}
            
          </View>
        </View>
        <View style={[styles.secondRow, styles.row]}>
          <View style={styles.DealsWithCont}>
            <Text style={styles.DealwithText}>
              {StringWithDots(data.DealsWith, 3).shownElements.toString()
                .length > 24
                ? StringWithDots(data.DealsWith, 3)
                    .shownElements.toString()
                    .replaceAll(",", ", ")
                    .slice(0, 24) + "..."
                : StringWithDots(data.DealsWith, 3)
                    .toString()
                    .replaceAll(",", ", ")}
            </Text>
          </View>
        </View>
        <View style={[styles.fourthRow, styles.row, styles.secondRow]}>
          <View style={styles.DealsWithCont}>
            <Text style={styles.DealwithText2}>
              {StringWithDots(
                data.Languages.map((data, index) => data.lan),
                4
              )
                .shownElements.toString()
                .replaceAll(",", ", ") + ".."}
            </Text>
          </View>
        </View>
        <View>
          <View style={[styles.row, styles.firstCont, { marginTop: Hp(12) }]}>
            <View style={styles.SessionCont}>
              <CameraIcon
                color={Colors.textColor}
                width={Wp(18)}
                height={Wp(18)}
              />
            </View>
            <Text style={styles.SessionText}>
              9:00 AM - 10:00 AM Friday
              
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const ThirdCont = ({ data }) => {
    return (
      <View style={{ alignItems: "flex-end", justifyContent: "flex-start" }}>
        <View>
          <View style={{ flexDirection: "row" }}>
          <View style={styles.Icon}>
          <TouchableOpacity
            onPress={setCheckDesign}
          >
            <TickIcon
              Bgcolor={check.bgColor}
              height={Wp(30)}
              width={Wp(30)}
              TickColor={check.tickColor}
            />
          </TouchableOpacity>
        </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    
      <View style={styles.flexcont}>
        <View>
          <FirstCont data={data} />
        </View>
        <View style={{ width: wp(60) }}>
          <SecondCont data={data} />
        </View>
        <View>
          <ThirdCont data={data} />
        </View>
      </View>
    
  );
};

export default UpcomingCardDesign;

const styles = StyleSheet.create({
  userImg: {
    width: Wp(48),
    height: Wp(48),
    borderRadius: Wp(24),
    resizeMode: "center",
  },

  RatingCont: {
    paddingHorizontal: Wp(8),
    paddingVertical: Hp(8),
    backgroundColor:Colors.Secondary,
    alignItems: "center",
    borderRadius: Hp(25),
  },
  DealwithText: {
    fontSize: Wp(10),
    fontWeight: Mulish(600),
    color: Colors.textColor,
    lineHeight: Wp(12),
    opacity: 0.7,
    marginVertical: Hp(6),
  },
  DealwithText2: {
    fontSize: Wp(10),
    fontWeight: Mulish(600),
    color: Colors.textColor,
    lineHeight: Wp(12),
    opacity: 0.7,
  },
  firstCont: {
    alignItems: "center",
  },
  RatingText: {
    fontSize: Wp(10),
    color: Colors.textColor,
    fontFamily: Mulish(700),
    marginTop: Hp(1),
  },
  row: {
    flexDirection: "row",
  },
  ProfileNameStyle: {
    fontFamily: Nunito(700),
    fontSize: Wp(14),
    color: Colors.textColor,
    textAlign: "center",
  },
  ProfileBasicInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  verification: {
    marginHorizontal: Wp(8),
  },
  SessionCont: {
    paddingVertical: Hp(4),
    paddingHorizontal: Wp(4),
    backgroundColor:Colors.Secondary,
    marginEnd: Wp(8),
    borderRadius: Hp(6),
  },
  SessionText: {
    fontFamily: Mulish(700),
    fontSize: Wp(12),
    color: Colors.textColor,
  },
  SessionText2: {
    fontFamily: Mulish(600),
  },
  mainBtn: {
    padding: wp(2.45 * 1.2),
    borderRadius: 12,
    alignSelf: "flex-end",
  },

  HourRateContStyle: {
    fontFamily: Nunito(800),
    fontSize: Wp(16),
    color: Colors.textColor,
  },
  HourRateContStyle2: {
    fontSize: Wp(12),
    color: Colors.textColor,
    fontFamily: Mulish(600),
    opacity: 0.7,
  },
  flexcont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius:Wp(20),
    backgroundColor:Colors.OffWhiteCont,
    paddingVertical:Wp(15),
    marginVertical:Wp(10),
    
  },
  SecondCont: {
    marginStart: Wp(10),
  },
});

