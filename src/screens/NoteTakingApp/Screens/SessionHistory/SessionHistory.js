import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Header from "@app/common/components/Header";
import { ChevronLeft } from "@app/svgs/Index";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import Calender from "./Components/Calender";
import DateData from "../../Data/DateData";
import { useRef } from "react";
import { useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import UpcomingCoursalComponent from "./Components/UpcomingCoursalComponent";
import HistoryCoursalComponent from "./Components/HistoryCoursalComponent";

const SessionHistory = () => {
  const btnRef = useRef([]);
  const CarousalRef = React.useRef(null);
  const { width } = useWindowDimensions();
  const HandleOption = (index, ShouldMove) => {
    for (let i = 0; i < 2; i++) {
      if (i === index) {
        btnRef.current[index].setNativeProps({
          style: {
            opacity: 1,
          },
        });
      } else {
        btnRef.current[i].setNativeProps({
          style: {
            opacity: 0.5,
          },
        });
      }
    }
    if (ShouldMove) {
      HandleCoursal(index);
    }
  };

  const HandleCoursal = (index) => {
    CarousalRef.current.scrollTo({ index: index, animated: true });
  };

  useEffect(() => {
    HandleOption(0);
  }, []);
  return (
    <View style={styles.body}>
      <View style={styles.Body}>
        <Header Icon={ChevronLeft}>
          <Text style={styles.HeaderTitle}>Sessions History</Text>
        </Header>
        <View>
          <Calender DateData={DateData} />
        </View>
        <View style={styles.CoursalOptionCont}>
          <Pressable
            style={[
              styles.UpcomingSessionCont,
              styles.OptionStyles,
              styles.OptionCont,
            ]}
            onPress={() => HandleOption(0, true)}
            ref={(element) => (btnRef.current[0] = element)}
          >
            <Text style={styles.CoursalOptionText}>Upcoming</Text>
            <View style={styles.NoOfSessionCont}>
              <Text style={styles.NoOfSessionText}>5</Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.OptionCont}
            onPress={() => HandleOption(1, true)}
            ref={(element) => (btnRef.current[1] = element)}
          >
            <Text style={styles.CoursalOptionText}>History</Text>
          </Pressable>
        </View>
      </View>

      <Carousel
        loop
        width={width}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        style={{ flex: 1 }}
        ref={CarousalRef}
        autoPlay={false}
        data={[...new Array(2).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => HandleOption(index, false)}
        renderItem={({ index }) => {
          if (index === 0) {
            return <UpcomingCoursalComponent />;
          } else {
            return <HistoryCoursalComponent />;
          }
        }}
      />
    </View>
  );
};

export default SessionHistory;

const styles = StyleSheet.create({
  HeaderTitle: {
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(24),
  },
  Body: {
    paddingHorizontal: Wp(16),
    paddingTop: Wp(20),
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
  CoursalOptionCont: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Wp(10),
    marginBottom: Wp(20),
  },
  CoursalOptionText: {
    fontFamily: Mulish(700),
    color: NoteAppcolor.MenuText,
    fontSize: FontSize(18),
  },
  NoOfSessionCont: {
    backgroundColor: NoteAppcolor.Primary,
    borderRadius: Wp(15),
    width: Wp(24),
    height: Wp(24),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Wp(10),
  },
  NoOfSessionText: {
    fontFamily: Mulish(700),
    color: NoteAppcolor.White,
    fontSize: FontSize(14),
  },
  UpcomingSessionCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  OptionStyles: {
    opacity: 0.5,
  },
  OptionCont: {
    width: Wp(110),
  },
});
