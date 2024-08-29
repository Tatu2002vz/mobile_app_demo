import {
    Text,
    PermissionsAndroid,
    Platform,
    View,
    FlatList,
    ScrollView,
    Pressable,
  } from 'react-native';
  // import Contacts from 'react-native-contacts';
  import {useSelector} from 'react-redux'
  import * as React from 'react';
  import ContactItem from '../../components/ContactItem';
  // import moduleName from '../../'
  
  // Contacts.getAll().then(contacts => {
    //   console.log(JSON.stringify(contacts));
    // });
  const Contact = ({navigation}) => {
    // const contacts = useSelector(selectContacts)
    const contacts = useSelector(state => state.contacts.value)
    const copyContacts = [...contacts]
    const [granted, setGranted] = React.useState(null);
    React.useEffect(() => {
      const getGrant = async () => {
        // if (Platform.Version >= 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'Ứng dụng cần quyền truy cập vào danh bạ!',
            buttonPositive: 'Chấp nhận',
            buttonNegative: 'Hủy',
          },
        );
        // console.log('granted: ' + granted);
        setGranted(granted);
        // }
      };
      getGrant();
    }, []);
    const GrantedNoti = ({granted}) => {
      console.log(granted);
      switch (granted) {
        case 'never_ask_again':
          return (
            <Text>
              Không có quyền truy cập vào danh bạ. Bạn phải vào cài đặt để cấp lại
              quyền cho ứng dụng này!
            </Text>
          );
        case 'denied':
          return <Text>Bạn đã từ chối quyền truy cập danh bạ!</Text>;
        case 'granted':
          return <Text></Text>;
        default:
          return <Text>Cấp quyền truy cập danh bạ cho ứng dụng!</Text>;
      }
    };
    // React.useEffect(() => {
    //   if (granted && granted === 'granted') {
    //     Contacts.getAll().then(contacts => {
    //       console.log('length contact: ' + contacts.length);
    //       setContacts(contacts);
    //     });
    //   }
    // }, [granted]);
    
    return (
      <ScrollView>
        <GrantedNoti granted={granted} />
        {/* <FlatList data={contacts ? contacts : []} renderItem={({item}) => {
          return <View>{item.displayName}</View>
        }}></FlatList> */}
        {copyContacts
          ?.sort((a, b) => a.displayName.localeCompare(b.displayName))
          .map((item, index) => {
            if(index === 1) console.log('contact: ' + JSON.stringify(item))
            return (
              <Pressable key={index} onPress={() => navigation.navigate('Details', {contact: item})}>
                <ContactItem item={item}  />
              </Pressable>
            );
          })}
      </ScrollView>

    );
  };
  
  export default Contact;
  