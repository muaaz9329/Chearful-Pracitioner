import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { Wp } from "@app/helper/CustomResponsive";

import { ForumnCard } from "@app/common/components/Cards";

type Props = {
    data?:any[],

};

const CommunityCont = ({
    data=[1,2,3,4],
}: Props) => {
  
  return (
    <View style={{
        marginHorizontal: Wp(16),
        justifyContent:"space-between",
        alignItems:"center",
    }}>
      {
        data.map((item,index)=>{
            return <ForumnCard key={index}/>
        })
      }
    </View>
  );
};

export default CommunityCont;
