import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { Wp } from "@app/helper/CustomResponsive";
import BlogAndResourcesCard from "@app/common/components/Cards/Blogs-Resourses";

type Props = {
    data?:any[],
  
};

const BlogCont = ({
    data=[1,2,3,4,5,6],
}: Props) => {
  
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return <BlogAndResourcesCard/>
        }}
        contentContainerStyle={{
          marginHorizontal: Wp(16),
          flexDirection: "row",
        }}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BlogCont;
