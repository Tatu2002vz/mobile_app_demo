import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  _View,
  ScrollView,
  Touchable,
  Button,
  Pressable,
} from 'react-native';
import * as React from 'react';
import RNFS from 'react-native-fs';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo'
const FileManager = ({navigation}) => {
  const [directories, setDirectories] = React.useState([]);
  const [path, setPath] = React.useState(RNFS.ExternalStorageDirectoryPath);
  const [item, setItem] = React.useState([]);
  const [fileItem, setFileItem] = React.useState([]);
  React.useEffect(() => {
    console.log(path);
    readDir(path);
  }, [path]);
  const readDir = async dirPath => {
    try {
      const rs = await RNFS.readDir(dirPath);
      //   const rsFile = await RNFS.readFile(dirPath)
      console.log('rs:::' + JSON.stringify(rs));
      setItem(rs);
      //   setFileItem(rsFile)
    } catch (error) {
      console.log('Error reading directory: ' + error);
    }
  };
  const handleDirectoryPress = directory => {
    RNFS.readDir(directory.path)
      .then(files => {
        console.log('Files in directory:', files);
        // Hiển thị các tệp trong thư mục này
        files.forEach(file => {
          const abc = file.isDirectory() === true;
          console.log('is file: ' + abc);
        });
      })
      .catch(err => {
        console.log('Error reading directory: ', err);
      });
    navigation.navigate('DetailFolder');
  };
  const handleClick = async item => {
    if (item.isDirectory()) {
      setPath(item.path);
    } else {
      alert('Selected file: ' + item.name);
    }
  };
  const handleBack = () => {
    if(path !== '/storage/emulated/0') {
      const arr = path.split('/')
      arr.pop();
      setPath(arr.join('/'))
    }
  }
  return (
    <ScrollView className="px-2 ">
      {path !== '/storage/emulated/0' && (
        <Pressable
          className="w-10 h-10 justify-center items-center rounded-full p-2 border-[#ccc] shadow-2xl"
          onPress={handleBack}>
          <IconAnt name="arrowleft" size={24} />
        </Pressable>
      )}
      {
        item.length === 0 && <View className="justify-center items-center"><Text>Thư mục này trống!</Text></View>
      }
      {item &&
        item.map((el, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => handleClick(el)}
              className="flex-row items-center py-3">
              {el.isDirectory() === true ? (
                <IconEntypo name="folder" size={24} color="#EDCE44" />
              ) : (
                <IconAnt name="file1" size={24} />
              )}
              <Text className="px-2">{el.name}</Text>
            </TouchableOpacity>
          );
        })}
      {fileItem &&
        fileItem.map((el, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => handleClick(el)}
              className="flex-row items-center py-3">
              {el.isDirectory() === true ? (
                <IconAnt name="folder1" size={24} />
              ) : (
                <IconAnt name="file1" size={24} />
              )}
              <Text className="px-2">{el.name}</Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

export default FileManager;
