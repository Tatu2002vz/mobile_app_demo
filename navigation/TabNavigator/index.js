import Camera from '../../screens/Camera';
import Contact from '../../screens/Contact';
import FileManager from '../../screens/FileManager';
import Gallery from '../../screens/Gallery';
import Home from '../../screens/Home';
import Notification from '../../screens/Notification';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const customIcon = (route, color, focused) => {
  let iconName;
  switch (route.name) {
    case 'Trang chủ':
      iconName = 'home';
      break;
    case 'Danh bạ':
      iconName = 'contacts';
      break;
    case 'File Manager':
      iconName = 'folderopen';
      break;
    case 'Camera':
      iconName = 'camerao';
      break;
    case 'Thư viện':
      iconName = 'picture';
      break;
    case 'Thông báo':
      iconName = 'notification';
      break;
    default:
      iconName = 'setting';
  }
  return <Icon name={iconName} color={color} size={focused ? 28 : 16} />;
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen name="Trang chủ" component={Home} />
      <Tab.Screen name="Danh bạ" component={Contact} />
      <Tab.Screen name="File Manager" component={FileManager} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Thư viện" component={Gallery} />
      <Tab.Screen name="Thông báo" component={Notification} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
