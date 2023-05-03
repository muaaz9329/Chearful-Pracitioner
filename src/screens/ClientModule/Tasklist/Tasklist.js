import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import Header from "@app/common/components/Header";
import { ChevronLeft } from "@app/svgs/Index";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { IconPlus } from "tabler-icons-react-native";
import TaskData from "../Data/TaskData";
import AllTask from "./components/AllTask";
import CheckedTask from "./components/CheckedTask";
import UncheckDesign from "./components/UncheckedTask";
import Carousel from "react-native-reanimated-carousel";
import { useRef } from "react";
import { useEffect } from "react";
import AddTask from "./components/AddTask";
import { SafeAreaView } from "react-native-safe-area-context";
const Tasklist = ({navigation}) => {
  const [taskData, setTaskData] = React.useState(TaskData);
  const { width } = useWindowDimensions();
  const CarousalRef = React.useRef(null);
  const SheetRef = useRef(null);
  const btnRef = useRef([]);

  /**
   * 
   * @param {number} index , used to change the style of the button using ref consisting of array of refs(btnRef)
   */
    const ChangeStyle = (index) => {
        for(let i = 0 ; i<3 ; i++){
            if(i===index){
                btnRef.current[index].setNativeProps({
                    style: {
                      opacity: 1,
                    },
                  });
                  
                  
            }
            else{
                btnRef.current[i].setNativeProps({
                    style: {
                      opacity: 0.5,
                    },
                  });
            }
            
        }
    }


 /**
* 
* @param {*} index moves to corresponding index of the carousel
*/

 const Move = (index) => {
     CarousalRef.current?.scrollTo({index:index,animated:true})
 }


 const OpenSheet = () => {
    SheetRef.current.HandleOpen()
 }

useEffect(()=>{
    ChangeStyle(0)
},[])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={['left','right','top']}>
      <View style={styles.body}>
        <View style={styles.Header}>
          <Header Icon={ChevronLeft} navigation={navigation} pram={'back'} >
            <Text style={styles.TextTitle}>Tasks</Text>
          </Header>
        </View>

        <View style={styles.TitleCont}>
          <View>
            <Text style={styles.Title}>Today's Tasks</Text>
            <Text style={styles.DataAndDay}>Wednesday , 12 April</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btnStyle} onPress={OpenSheet}>
              <IconPlus size={Wp(30)} color={NoteAppcolor.Primary} />
              <Text style={styles.btnText}>New Task</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.OptionMenu}>
          <Pressable
            style={styles.OptionPress}
            onPress={() => {
              ChangeStyle(0);
                Move(0);
            }}
          >
            <Text
              style={styles.OptionText}
              ref={(element) => {
                btnRef.current[0] = element;
              }}
            >
              All
            </Text>
            <View style={styles.OptionNumber}>
              <Text style={styles.OptionNumberStyle}>10</Text>
            </View>
          </Pressable>
          <Pressable style={styles.OptionPress}
          onPress={()=>{
            ChangeStyle(1);
            Move(1);
          }}
          >
            <Text
              style={styles.OptionText}
              ref={(element) => {
                btnRef.current[1] = element;
              }}
            >
              Completed
            </Text>
            <View style={styles.OptionNumber}>
              <Text style={styles.OptionNumberStyle}>5</Text>
            </View>
          </Pressable>
          <Pressable style={styles.OptionPress}
          onPress={()=>{
            ChangeStyle(2);
            Move(2)
          }}
          >
            <Text
              style={styles.OptionText}
              ref={(element) => {
                btnRef.current[2] = element;
              }}
            >
              Remaining
            </Text>
            <View style={styles.OptionNumber}>
              <Text style={styles.OptionNumberStyle}>5</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Carousel
        width={width}
        enabled={true}
        style={{
          flex: 1,
        }}
        data={[...new Array(3).keys()]}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        ref={CarousalRef}
        onSnapToItem={(index) => ChangeStyle(index)}
        renderItem={({ index }) => {
          if (index == 0) {
            return <AllTask TaskData={taskData} />;
          } else if (index == 1) {
            return <CheckedTask taskData={taskData} />;
          } else if (index == 2) {
            return <UncheckDesign taskData={taskData} />;
          }
        }}
      />
      <AddTask ref={SheetRef}/>
    </SafeAreaView>
  );
};

export default Tasklist;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: Wp(16),
    paddingTop: Platform.OS=='android'?Wp(20):Wp(10),
  },
  TextTitle: {
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(24),
  },
  TitleCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Wp(20),
  },
  Title: {
    fontFamily: Nunito(700),
    color: NoteAppcolor.MenuText,
    fontSize: FontSize(18),
  },
  DataAndDay: {
    fontFamily: Nunito(400),
    color: "#000",
    fontSize: FontSize(14),
    opacity: 0.6,
  },
  btnStyle: {
    backgroundColor: NoteAppcolor.Secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Wp(15),
    paddingVertical: Wp(10),
    borderRadius: Wp(15),
  },
  btnText: {
    fontFamily: Nunito(400),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(14),
    marginLeft: Wp(2),
  },
  OptionPress: {
    flexDirection: "row",

    margin: Wp(10),
  },
  OptionText: {
    fontFamily: Nunito(700),
    color: NoteAppcolor.MenuText,
    fontSize: FontSize(14),
    marginRight: Wp(5),
    opacity: 0.6,
  },
  OptionNumber: {
    backgroundColor: NoteAppcolor.Primary,
    borderRadius: Wp(15),
    width: Wp(24),
    height: Wp(24),
    justifyContent: "center",
    alignItems: "center",
  },
  OptionNumberStyle: {
    fontFamily: Nunito(700),
    color: "#fff",
    fontSize: FontSize(12),
  },
  OptionMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Wp(20),
    marginBottom: Wp(4),
  },
});
