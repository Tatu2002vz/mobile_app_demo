import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import * as React from 'react';
import {
  useCameraPermission,
  useCameraDevice,
  Camera,
} from 'react-native-vision-camera';
const {width, height} = Dimensions.get('screen');
console.log('height: ' + height);
console.log('width: ' + width);
const CameraScreen = () => {
  const cameraPermission = Camera.getCameraPermissionStatus();
  const microphonePermission = Camera.getMicrophonePermissionStatus();
  const [statusCamera, setStatusCamera] = React.useState('front');
  let device = useCameraDevice(statusCamera);
  // React.useEffect(() => {
  //   device = useCameraDevice(statusCamera);
  // }, [statusCamera]);
  React.useEffect(() => {}, []);
  const requestPermission = async () => {
    if (cameraPermission === 'denied' || cameraPermission === 'restricted') {
      const newCameraPermission = await Camera.requestCameraPermission();
      const newMicrophonePermission =
        await Camera.requestMicrophonePermission();
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
    <View className="bg-slate-500 relative" style={styles.container}>
      {/* <Text>Camera screen</Text> */}
      <Camera
        style={{width: '100%', height: '100%'}}
        device={device}
        isActive={true}></Camera>

      <Text
        className="border-[4px] border-white rounded-full w-16 h-16 bg-transparent absolute left-1/2 -translate-x-8 bottom-2 z-10"
        onPress={rotateCamera}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: height,
    width: width
  },
});
export default CameraScreen;
