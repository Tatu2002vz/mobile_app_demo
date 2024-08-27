import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {Text, View} from 'react-native'
const ContactItem = ({item}) => {
  return (
    <View className="flex flex-row items-center py-2">
      <View className="h-8 w-8 bg-black rounded-full justify-center items-center mr-4 ml-2">
        <Icon name="user" size={24} color="white" />
      </View>
      <Text>{item.displayName}</Text>
    </View>
  );
};

export default ContactItem;
