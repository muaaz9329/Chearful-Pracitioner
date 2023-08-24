import React from 'react';
import { Animated, FlatList, StyleProp, View } from 'react-native';
import { Wp } from '@helper/CustomResponsive';
import { useRef } from 'react';

interface IProps{
  data: any[],
  renderItem: ({ item, index }: { item: any; index: number; }) => JSX.Element,
  contentContainerStyle?: any,
  showsVerticalScrollIndicator?: boolean,
  Item_size: number
}

const AnimatedFlatList = ({
  data,
  renderItem,
  contentContainerStyle,
  showsVerticalScrollIndicator,
  Item_size= Wp(76 + 16 + 20)
}:IProps) => {

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderAnimatedItem = ({ item, index }:{item:any,index:number}) => {
    const inputRange = [-1, 0, Item_size * index, Item_size * (index + 2)];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const OpacityInputRange = [-1, 0, Item_size * index, Item_size * (index + 0.8)];
    const opacity = scrollY.interpolate({
      inputRange: OpacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View style={{ transform: [{ scale }], opacity }}>
        {renderItem({ item, index })}
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      data={data}
      renderItem={renderAnimatedItem}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  );
};

export default AnimatedFlatList;