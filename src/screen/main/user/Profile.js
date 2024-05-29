import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import MyProfileAsMakeupArtist from './MyProfileAsMakeupArtist';
import MyProfileAsCustomer from './MyProfileAsCustomer';

export default function Profile() {
  const AuthReducer = useSelector(state => state.AuthReducer);
  return (
    <>
      {AuthReducer?.isMakeupArtist ? (
        <MyProfileAsMakeupArtist />
      ) : (
        <MyProfileAsCustomer />
      )}
    </>
  );
}
