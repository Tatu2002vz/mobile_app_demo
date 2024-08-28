import {Dimensions, Image, PermissionsAndroid, ScrollView, StyleSheet, Text} from 'react-native';
import * as React from 'react';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Platform} from 'react-native';
import {View} from 'react-native';

const {width, height} = Dimensions.get('screen');

const Gallery = () => {
  const [album, setAlbum] = React.useState([]);
  const [photo, setPhoto] = React.useState([]);
  // async function hasAndroidPermission() {
  //   const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  //   const hasPermission = await PermissionsAndroid.check(permission);
  //   if (hasPermission) {
  //     return true;
  //   }

  //   const status = await PermissionsAndroid.request(permission);
  //   return status === 'granted';
  // }
  async function hasAndroidPermission() {
    const getCheckPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return Promise.all([
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          ),
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
          ),
        ]).then(
          ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
            hasReadMediaImagesPermission && hasReadMediaVideoPermission,
        );
      } else {
        return PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
      }
    };

    const hasPermission = await getCheckPermissionPromise();
    if (hasPermission) {
      return true;
    }
    const getRequestPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ]).then(
          statuses =>
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
              PermissionsAndroid.RESULTS.GRANTED,
        );
      } else {
        return PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
      }
    };

    return await getRequestPermissionPromise();
  }
  async function getGallery() {
    console.log('getGallery');
    console.log('grant: ' + (await hasAndroidPermission()));
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      console.log('denied');
      return;
    }

    const temp = await CameraRoll.getPhotos({
      first: 200,
      assetType: 'Photos',
      albumType: 'All',
    });
    const {edges} = temp;
    setAlbum(edges);
    // console.log('album1: ' + JSON.stringify(edges));
    console.log('edges_arr: ' + JSON.stringify(edges[0]));
    console.log('edges: ' + JSON.stringify(edges[0]?.node?.image?.uri));
  }
  async function getPhotoFromAlbum(albumId) {
    const params = {
      first: 20, // Số lượng ảnh hoặc video cần lấy
      assetType: 'Photos', // Loại tài sản (Photos hoặc Videos)
      groupTypes: 'All',
      groupName: albumId, // ID của album cần lấy
    };

    try {
      const {edges} = await CameraRoll.getPhotos(params);
      console.log(
        'hihi: ' + JSON.stringify(await CameraRoll.getPhotos(params)),
      );
      return edges;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  React.useEffect(() => {
    getGallery();
  }, []);
  //   React.useEffect(() => {
  //     if (album.length > 0) {
  //       album.forEach(item => {
  //         console.log(item.id)
  //         getPhotoFromAlbum(item.id)
  //           .then(rs => {
  //             console.log('rs: ' + rs)
  //             setPhoto(prev => [...prev, ...rs]);
  //           })
  //           .catch(err => console.log('Lỗi: ' + err.message));
  //       });
  //     }
  //     console.log('photo: ' + photo)
  //   }, [album]);
  return (
    <ScrollView style={styles.container}>
    <View className="flex-row flex-wrap justify-between gap-y-2">
      {album?.map((item, index) => {
        return (
          <View key={index} className="w-full" style={styles.wrapImage}>
              <Image
                source={{uri: item.node.image.uri}}
                className="w-full aspect-[1]"
              />
          </View>
        );
      })}

    </View>
    </ScrollView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
    container: {
        width: width,
    },
    wrapImage: {
        width: width / 5 - 5,
    }
})