import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import MyProfileAsMakeupArtist from './MyProfileAsMakeupArtist';
import MyProfileAsCustomer from './MyProfileAsCustomer';
import {COLORS} from '../../../utils/theme/Colors';

export default function Profile() {
  const AuthReducer = useSelector(state => state.AuthReducer);
  return (
    <View style={{flex: 1}}>
      {AuthReducer?.isMakeupArtist ? (
        <MyProfileAsMakeupArtist />
      ) : (
        <MyProfileAsCustomer />
      )}
    </View>
  );
}
