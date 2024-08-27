import {Text, View, FlatList, TouchableOpacity, _View, ScrollView} from 'react-native';
import * as React from 'react';
import RNFS from 'react-native-fs';
import IconAnt from 'react-native-vector-icons/AntDesign'
const FileManager = ({navigation}) => {
  const [directories, setDirectories] = React.useState([]);
  React.useEffect(() => {
    RNFS.readDir(RNFS.ExternalStorageDirectoryPath)
      .then(rs => {
        setDirectories(rs);
      })
      .catch(err => console.log('Error reading directory: ' + err));
  }, []);
  const handleDirectoryPress = directory => {
    RNFS.readDir(directory.path)
      .then(files => {
        console.log('Files in directory:', files);
        // Hiển thị các tệp trong thư mục này
        files.forEach(file => {
          const abc = file.isDirectory() === true
          console.log('is file: ' + abc);
        });
      })
      .catch(err => {
        console.log('Error reading directory: ', err);
      });
    navigation.navigate('DetailFolder')
  };
  return (
    <View className="px-2">
      <FlatList
        data={directories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleDirectoryPress(item)} className="flex-row items-center py-3">
            {item.isDirectory() === true ? <IconAnt name="folder1" size={24}/> : <IconAnt name="file1" size={24}/>}
            <Text className="px-2">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      
    </View>
  );
};

export default FileManager;
