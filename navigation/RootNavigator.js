import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';
import {getContact} from '../store/contacts/contactSlice';
import {useDispatch} from 'react-redux';
import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native'
const RootNavigator = () => {
  const [granted, setGranted] = React.useState(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getGrant = async () => {
      console.log('abcd')
      // if (Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'Ứng dụng cần quyền truy cập vào danh bạ!',
          buttonPositive: 'Chấp nhận',
          buttonNegative: 'Hủy',
        },
      );
      setGranted(granted);
      // }
    };
    getGrant();
  }, []);
  React.useEffect(() => {
    if (granted && granted === 'granted') {
      Contacts.getAll().then(contacts => {
        dispatch(getContact(contacts));
      });
    }
  }, [granted]);
  return (
    <NavigationContainer >
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
