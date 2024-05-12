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

export default function ContactUs() {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        backgroundColor={COLORS.pageBackgroundWhite}
        barStyle={'dark-content'}
      />
      <BackButtonWithName title="Contact Us" />
      <View style={{width: '100%', paddingTop: normalize(15), flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: globalStyles.paddingHorizantal,
              // marginTop: normalize(20),
            }}>
 
       
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
