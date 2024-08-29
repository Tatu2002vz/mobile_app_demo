import React from 'react';
import {Pressable, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ActionContact from '../../components/ActionContact';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
const ContactDetail = ({navigation, route}) => {
  const {contact} = route.params;
  return (
    <ScrollView className="flex-col h-screen px-4 relative">
      <Pressable
        className="fixed top-4 left-2"
        onPress={() => navigation.goBack()}>
        <View>
          <IconAnt name="arrowleft" size={24}></IconAnt>
        </View>
      </Pressable>
      <View className="items-center pt-10">
        <Icon name="user-circle-o" size={100} color={'blue'}></Icon>
        <Text className="font-bold text-2xl mt-2">{contact.displayName}</Text>
      </View>
      <View className="flex-row justify-around pt-10">
        <ActionContact icon={'call'} />
        <ActionContact icon={'chatbubble'} />
        <ActionContact icon={'videocam'} />
      </View>
      <View className="flex-row items-center pt-8">
        <IonIcon name="call-outline" size={28} color={'black'} />
        <View className="ml-4">
          <Text>{contact.phoneNumbers[0].number}</Text>
          <Text>{contact.phoneNumbers[0].label === 'mobile' ? 'Di động' : 'Máy bàn'} | Việt Nam</Text>
        </View>
      </View>
      <View className="pt-6">
        <Text className="text-2xl ">Nhật ký cuộc gọi</Text>
        <ScrollView>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-up-left" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>

          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
          <View className="flex-row justify-between items-center py-2">
            <View className="flex-row items-center">
              <IconFeather name="arrow-down-right" size={24}></IconFeather>
              <Text className="ml-2">08/08/2024 19:09</Text>
            </View>
            <Text>8s</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ContactDetail;
