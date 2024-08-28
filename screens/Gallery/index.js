
  // import Contacts from 'react-native-contacts';
  import {useSelector} from 'react-redux';
  import {selectContacts} from '../../store/contacts/contactSlice';
  import * as React from 'react';
  import ContactItem from '../../components/ContactItem';
  import {NavigationContainer} from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  //   import ContactDetail from './ContactDetail'
  import Photos from './Photo';
  import Videos from './Video';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

  // import moduleName from '../../'
  
  // Contacts.getAll().then(contacts => {
  //   console.log(JSON.stringify(contacts));
  // });
//   const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

  const Contact = () => {
    const customIcon = (route, color, focused) => {
        let iconName;
        switch (route.name) {
          case 'Photos':
            iconName = 'photo';
            break;
          case 'Videos':
            iconName = 'video-camera';
            break;
          default:
            iconName = 'setting';
        }
        return <Icon name={iconName} color={color} size={focused ? 28 : 16} />;
      };
    return (

      <Tab.Navigator
        initialRouteName="Photos"
        screenOptions={({route}) => ({
            tabBarIcon: ({color, focused}) => customIcon(route, color, focused),
            headerShown: false,
            // tabBarInactiveTintColor: '#d9d9d9',
            // tabBarActiveTintColor: 'yellow'
            tabBarStyle: {
              borderTopColor: '#66666666',
              backgroundColor: 'transparent',
              elevation: 0,
            },
          })}>
        <Tab.Screen name="Photos" component={Photos} />
        <Tab.Screen name="Videos" component={Videos} />
      </Tab.Navigator>
    );
  };
  
  export default Contact;
  