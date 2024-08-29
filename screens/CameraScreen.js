import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import * as React from 'react';
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from 'react-native-vision-camera';
const {width, height} = Dimensions.get('screen');
const CameraScreen = () => {
  const [cameraPermission, setCameraPermission] = React.useState(null);

  const microphonePermission = Camera.getMicrophonePermissionStatus();
  const [statusCamera, setStatusCamera] = React.useState('front');
  let device = useCameraDevice(statusCamera);
  // React.useEffect(() => {
  //   device = useCameraDevice(statusCamera);
  // }, [statusCamera]);
  React.useEffect(() => {}, []);
  const requestPermission = async () => {
    const permission = Camera.getCameraPermissionStatus();
    console.log('permission: ' + permission)
    // if (permission === 'denied' || permission === 'restricted') {
    //   const newCameraPermission = await Camera.requestCameraPermission();
    //   console.log(':::' + newCameraPermission);
    //   setCameraPermission('granted');
    // } else {
    //   setCameraPermission('granted');
    // }
    if(permission !== 'granted') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'Ứng dụng cần quyền truy cập vào danh bạ!',
          buttonPositive: 'Chấp nhận',
          buttonNegative: 'Hủy',
        },
        
      );
      const newCameraPermission = await Camera.requestCameraPermission();
      setCameraPermission('granted');
    } else {
      setCameraPermission('granted');
    }

  };
  React.useEffect(() => {
    requestPermission();
  }, []);
  const rotateCamera = () => {
    setStatusCamera(prev => {
      if (prev === 'front') return 'back';
      return 'front';
    });
  };
  return (
    <View className="relative" style={styles.container}>
      {cameraPermission === 'granted' ? (
        <View className="bg-slate-500 relative" style={styles.container}>
          <Camera
            style={{width: '100%', height: '100%'}}
            device={device}
            isActive={true}></Camera>

          <Text
            className="border-[4px] border-white rounded-full w-16 h-16 bg-transparent absolute left-1/2 -translate-x-8 bottom-2 z-10"
            onPress={rotateCamera}></Text>
        </View>
      ) : (
        <Text>Không có quyền truy cập camera</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: height,
    width: width,
  },
});
export default CameraScreen;
