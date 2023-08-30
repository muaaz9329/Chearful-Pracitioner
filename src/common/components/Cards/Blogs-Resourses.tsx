import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import { IconCalendarEvent } from "tabler-icons-react-native";
import { AppImages } from "@app/common/Images";

type Props = {
  Data?: {
    img:ImageSourcePropType,
    title:string

  }
}

const DEFAULT_VALUE = {
  img: AppImages.defaultBlogImage,
  title:"How Therapy Can Help You Cope with Life Transitions and Losses "
}

const BlogAndResourcesCard = ({ Data=DEFAULT_VALUE }:Props) => {
  

  return (
    <Pressable style={styles.Parent} onPress={()=>{
      console.log("Pressed")
    }}>
      <View style={styles.Parent}>
        <ImageBackground style={styles.cardCont} source={Data.img}>
          <View style={styles.DateCard}>
            <View style={styles.DateContainer}>
              <IconCalendarEvent size={Wp(16)} color={"black"} />
              <Text style={styles.Date}>April 17 , 2023</Text>
            </View>

            <Text style={styles.Title}>
              {Data.title.length > 33
                ? Data.title.slice(0, 33) + "..."
                : Data.title}{" "}
            </Text>
            <View style={styles.authorDetail}>
              <Text style={styles.authorDetailText}>By</Text>
              <Text style={styles.AuthorText}>Priya Cima</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default BlogAndResourcesCard;

const styles = StyleSheet.create({
  cardCont: {
    borderWidth: Wp(1),
    borderColor: NoteAppcolor.ContColor,
    width: wp(48),
    height: Wp(220),
    borderRadius: Wp(20),
    overflow: "hidden",
    justifyContent: "flex-end",
    marginBottom: Wp(20),
  },
  DateCard: {
    width: wp(50),
    height: Wp(90),

    backgroundColor: "#FAF9F6",
    paddingVertical: Wp(6),
    paddingHorizontal: Wp(8),
    justifyContent:'space-between'
  },
  Title: {
    fontSize: FontSize(12),
    color: "black",
    fontFamily: Mulish(700),
  },
  Parent: {
    marginRight: Wp(10),
  },
  DateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Wp(5),
  },
  Date: {
    fontSize: FontSize(10),
    fontFamily: Mulish(500),
    marginLeft: Wp(5),
  },
  authorDetailText: {
    fontSize: FontSize(10),
    fontFamily: Mulish(700),
    color: "black",
    opacity: 0.5,
  },
  authorDetail: {
    marginTop: Wp(5),
    flexDirection: "row",
    alignItems: "center",
  },
  AuthorText: {
    fontSize: FontSize(10),
    fontFamily: Mulish(700),
    color: "black",
    opacity: 1,
    marginLeft: Wp(5),
  },
});
