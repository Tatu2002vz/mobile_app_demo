import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ActionContact = ({icon, onPress}) => {
  return (
    <Pressable onPress={onPress} className="border rounded-2xl w-1/4 justify-center items-center py-2">
      <Icon name={icon} size={45} color="black" />
    </Pressable>
  );
};

export default ActionContact;
