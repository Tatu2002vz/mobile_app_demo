/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import MainScreen from './screens/MainScreen';
import RootNavigator from './navigation/RootNavigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootNavigator);
