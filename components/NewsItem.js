import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const NewsItem = props => {
  const {title, image_url, keywords, pubDate} = props.data;
  console.log('image: ' + image_url);
  return (
    <View className="rounded-md p-2 flex flex-col border w-full text-blue-500 mt-4 first:mt-0">
      <View className="flex flex-row justify-between">
        <Text className="font-bold w-2/3">{title}</Text>
        <Image source={{uri: image_url}} className="w-16 h-16 object-cover"/>
      </View>
      <View className="flex flex-row justify-between w-full">
        <Text>{keywords}</Text>
        <Text>{pubDate}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    title: {
        color: 'blue'
    }
})
export default NewsItem;
