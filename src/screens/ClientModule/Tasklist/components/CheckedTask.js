import { StyleSheet, FlatList} from 'react-native'
import React from 'react'
import TaskCard from './TaskCard';
import { Wp } from '@app/helper/CustomResponsive';
const CheckedTask = ({taskData=[]}) => {

const [Data, SetData] = React.useState(taskData.filter((item)=>item.isChecked===true))

  return (
    <FlatList
    data={Data}
    contentContainerStyle={{
        paddingHorizontal: Wp(16),
    paddingTop: Wp(20),
    }}
    renderItem={({ item, index }) => {
      return (
        <TaskCard
          title={item.title}
          category={item.category}
          isChecked={item.isChecked}
          pirority={item.pirority}
          day={item.day}
          StartTime={item.StartTime}
          EndTime={item.EndTime}
          key={index}
        />
      );
    }}
    showsVerticalScrollIndicator={false}
  />
  )
}

export default CheckedTask

const styles = StyleSheet.create({})