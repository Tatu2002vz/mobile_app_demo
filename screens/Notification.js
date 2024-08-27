import {Text, StyleSheet, View, Button, StatusBar} from 'react-native';
import * as React from 'react';
// import firebase from 'react-native-firebase'
import NotificationPopup from 'react-native-push-notification-popup';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
notifee.onBackgroundEvent(async ({type, detail}) => {
  const {notification, pressAction} = detail;
  //log out notification data
  console.log('type ', type);
  console.log('notification data ', detail);

  //Check if the user has pressed the notification
  if (type === EventType.PRESS && pressAction.id === 'default') {
    // Do some processing..
    console.log('the default button was pressed');
    // Remove the notification after the event was registered.
    await notifee.cancelNotification(notification.id);
  }
});
const Notification = () => {
  // const childRef = React.useRef(null);
  // const showNoti = () => {
  //   childRef.current.show({
  //     onPress: function () {
  //       console.log('Pressed');
  //     },
  //     appIconSource: require('../assets/icon.png'),
  //     appTitle: 'Mobile App Demo',
  //     timeText: 'Now',
  //     title: 'Test Notification',
  //     body: 'This is a sample message',
  //     slideOutTime: 5000,
  //   });
  //   NotificationPopup.localNotificationSchedule({
  //     message: 'Đây là nội dung thông báo',
  //     date: new Date(Date.now() + 5 * 1000), // Hiển thị sau 5 giây
  //   });
  // };
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'haha',
      name: 'Important Notifications',
      importance: AndroidImportance.HIGH,
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Test Notification',
      body: 'Thông báo xuất hiện từ mobile app demo',
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'haha',
        },
        importance: AndroidImportance.HIGH,
      },
    });
  }
  return (
    <View style={styles.container}>
      <Button title="Show Message" onPress={onDisplayNotification} />
      {/* <NotificationPopup ref={childRef} /> */}
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Notification;
