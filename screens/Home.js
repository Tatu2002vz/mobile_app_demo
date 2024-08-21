import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as React from 'react';
import Banner from '../assets/images/app.png';
const {width, height} = Dimensions.get('screen');
const Home = () => {
  return (
    <View>
      <Text style>Home Screen</Text>
      <Image source={Banner} style={styles.banner} />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  banner: {
    objectFit: 'cover',
    width: width,
    height: height / 4,
    marginTop: '10px'
  },
  
});
