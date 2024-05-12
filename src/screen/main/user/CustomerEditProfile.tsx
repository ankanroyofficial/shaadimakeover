import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../utils/theme/Colors';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {normalize} from '../../../utils/theme/Dimens';
import {Icons} from '../../../utils/theme/Icons';
import {Fonts} from '../../../utils/theme/Fonts';
import BackButtonWithName from '../../../components/header/BackButtonWithName';
import {Images} from '../../../utils/theme/Images';
import CustomTextInput from '../../../components/CustomTextInput';
import Button from '../../../components/Button';

export default function CustomerEditProfile() {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        backgroundColor={COLORS.pageBackgroundWhite}
        barStyle={'dark-content'}
      />
      <BackButtonWithName title="Edit Profile" />
      <View style={{width: '100%', paddingTop: normalize(15), flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={Images.dummyUser}
            style={{
              height: normalize(110),
              width: normalize(110),
              backgroundColor: COLORS.grayF5,
              borderRadius: normalize(15),
              overflow: 'hidden',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Icons.camera}
              style={{
                height: '35%',
                width: '35%',
                resizeMode: 'contain',
              }}
            />
          </ImageBackground>
          <View
            style={{
              paddingHorizontal: globalStyles.paddingHorizantal,
              marginTop: normalize(20),
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomTextInput
                textinputStyle={{width: '48%'}}
                placeholder="First name"
              />
              <CustomTextInput
                textinputStyle={{width: '48%'}}
                placeholder="Last name"
              />
            </View>
            <CustomTextInput
              textinputStyle={{width: '100%', marginTop: normalize(10)}}
              placeholder="Enter phone number"
            />
            <CustomTextInput
              textinputStyle={{width: '100%', marginTop: normalize(10)}}
              placeholder="Enter email address"
            />
            <CustomTextInput
              textinputStyle={{width: '100%', marginTop: normalize(10)}}
              placeholder="Enter Address"
            />
            <CustomTextInput
              textinputStyle={{width: '100%', marginTop: normalize(10)}}
              placeholder="Enter Country"
            />
            <CustomTextInput
              textinputStyle={{width: '100%', marginVertical: normalize(10)}}
              placeholder="Enter City"
            />
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          marginHorizontal: globalStyles.paddingHorizantal,
          marginBottom: normalize(10),
        }}>
        <Button title="Save Changes" containerStyle={{width: '100%'}} />
      </View>
    </SafeAreaView>
  );
}
