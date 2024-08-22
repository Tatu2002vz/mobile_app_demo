import {Text} from 'react-native';
import Camera from './CameraScreen';
import Contact from './Contact';
import FileManager from './FileManager';
import Gallery from './Gallery';
import Home from './Home';
import Notification from './Notification';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  return <Icon name={iconName} color={color} size={focused ? 30 : 24} />;
};
const MainScreen = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, focused}) => customIcon(route, color, focused),
          headerShown: false,
        })}>
        <Tab.Screen name="Trang chủ" component={Home} />
        <Tab.Screen name="Danh bạ" component={Contact} />
        <Tab.Screen name="File Manager" component={FileManager} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Thư viện" component={Gallery} />
        <Tab.Screen name="Thông báo" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
