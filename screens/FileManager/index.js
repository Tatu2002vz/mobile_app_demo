import {
  Text,
  PermissionsAndroid,
  Platform,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
// import Contacts from 'react-native-contacts';
import {useSelector} from 'react-redux';
import {selectContacts} from '../../store/contacts/contactSlice';
import * as React from 'react';
import ContactItem from '../../components/ContactItem';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//   import ContactDetail from './ContactDetail'
import Detail from './Detail';
import Home from './FileManager';
// import moduleName from '../../'

// Contacts.getAll().then(contacts => {
//   console.log(JSON.stringify(contacts));
// });
const Stack = createNativeStackNavigator();
const Contact = () => {
  return (
    // <ScrollView>
    //   <GrantedNoti granted={granted} />
    //   {/* <FlatList data={contacts ? contacts : []} renderItem={({item}) => {
    //     return <View>{item.displayName}</View>
    //   }}></FlatList> */}
    //   {copyContacts
    //     ?.sort((a, b) => a.displayName.localeCompare(b.displayName))
    //     .map((item, index) => {
    //       return (
    //         <ContactItem item={item} key={index}/>
    //       );
    //     })}
    // </ScrollView>
    <Stack.Navigator
      initialRouteName="MainFileManager"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainFileManager" component={Home} />
      <Stack.Screen name="DetailFolder" component={Detail} />
    </Stack.Navigator>
  );
};

export default Contact;
