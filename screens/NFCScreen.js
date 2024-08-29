import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {scanNfc} from 'react-native-nfc-passport-info';
// Pre-step, call this before any NFC operations
NfcManager.start();

function NFCScreen() {
  const [info, setInfo] = useState(null);
  const onReadNfc = async () => {
    try {
      const data = await scanNfc({
        documentNumber: '202009071',
        dateOfBirth: '021103',
        dateOfExpiry: '271103',
      });
      setInfo(data);
      console.log('onReadNfc', data);
      console.log(':::: ' + typeof data);
      console.log('onReadNfc: \n');
      for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // async function readNdef() {
  //   try {
  //     // register for the NFC tag with NDEF in it
  //     await NfcManager.requestTechnology(NfcTech.Ndef);
  //     // the resolved tag object will contain `ndefMessage` property
  //     const tag = await NfcManager.getTag();
  //     console.warn('Tag found', tag);
  //   } catch (ex) {
  //     console.warn('Oops!', ex);
  //   } finally {
  //     // stop the nfc scanning
  //     NfcManager.cancelTechnologyRequest();
  //   }
  // }

  return (
    <View style={styles.wrapper}>
      {!info ? (
        <TouchableOpacity onPress={onReadNfc}>
          <Text>Scan a Tag</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text>Số CCCD: {info.personalNumber}</Text>
          <Text>Họ và tên: {info.lastName + info.firstName}</Text>
          <Image source={{uri: info.photo.base64}} className="h-[400px] w-[300px]"></Image>
          <Text>Giới tính : {info.gender}</Text>
          <Text>Quốc tịch: {info.nationality}</Text>
          <Text>PassportMRZ: {info.passportMRZ}</Text>
          <Text>Sinh nhật(YYMMDD): {info.dateOfBirth}</Text>
          <Text>Ngày hết hạn(YYMMDD): {info.dateOfExpiry}</Text>
          
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NFCScreen;
