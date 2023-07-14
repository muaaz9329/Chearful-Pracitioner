
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { Hp, Wp } from "@app/helper/CustomResponsive";
  import { NoteAppcolor as Colors } from "@constants/NoteAppcolor";
  import {

    TickIcon,
  } from "@svg";
  
  import { DateConstrctor, StringWithDots, calculateEndTime } from "@helper/customFunction";
  import {
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
  import { Mulish, Nunito } from "@helper/FontWeight";
  const HistoryCardDesign = ({ data }) => {
  

  
    const FirstCont = ({ data }) => {
      
      
      return (
        <View style={[styles.firstCont,{justifyContent:"center" ,}]}>
          <View style={styles.userImgCont}>
            <Image source={{uri:data.client_image}} style={styles.userImg} />
          </View>
          
        </View>
      );
    };
    const SecondCont = ({ data }) => {
      const {EndTime,StartTime} = calculateEndTime(data.appointment_date_time.slice(11), data.time_duration );
      return (
        <View style={styles.SecondCont}>
          <View style={[styles.firstRow, styles.row]}>
            <View style={styles.ProfileName}>
              <Text style={styles.ProfileNameStyle}>
                {data.client_full_name.length > 14
                  ? data.client_full_name.slice(0, 14) + ".."
                  : data.client_full_name}
              </Text>
            </View>
            
          </View>
          <View style={[styles.secondRow, styles.row]}>
            <View style={styles.DealsWithCont}>
              <Text style={styles.DealwithText}>
                status : {data.status}
              </Text>
            </View>
          </View>
          <View style={[styles.fourthRow, styles.row, styles.secondRow]}>
            <View style={styles.DealsWithCont}>
              <Text style={styles.DealwithText2}>
                {data.appointment_date}
              </Text>
            </View>
          </View>
          <View>
            <View style={[styles.row, styles.firstCont, { marginTop: Wp(5) }]}>
              
              <Text style={[styles.SessionText,{textDecorationLine:"line-through" , textDecorationStyle:"solid"}]}>
               {`${StartTime} - ${EndTime} ${DateConstrctor(new Date(data.appointment_date_time.slice(0,10))).Day}`}
                
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
          
        </View>
      
    );
  };
  
  export default HistoryCardDesign;
  
  const styles = StyleSheet.create({
    userImg: {
      width: Wp(70),
      height: Wp(70),
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
      color: Colors.Primary,
      lineHeight: Wp(12),
      opacity: 1,
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
  
  