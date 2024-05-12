import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/theme/Dimens';
import {Images} from '../../utils/theme/Images';
import BridalImageBackgroundComponent from '../../components/BridalImageBackgroundComponent';
import {globalStyles} from '../../utils/theme/GlobalStyle';
import {COLORS} from '../../utils/theme/Colors';
import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput';
import {Fonts} from '../../utils/theme/Fonts';
import {Icons} from '../../utils/theme/Icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function PersonalInformation(props: Object) {
  const navigation = props.navigation;
  const socialLoginList = [
    {
      title: 'Google login',
      icon: Icons.google,
      onPress: () => {},
    },
    {
      title: 'Facebook login',
      icon: Icons.fb,
      onPress: () => {},
    },
  ];
  return (
    <BridalImageBackgroundComponent>
      <View
        style={{
          flex: 1,
        }}>
        {/* Icon */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: normalize(50),
              width: normalize(150),
            }}>
            <Image source={Images.whiteLogoWithName} style={styles.icon} />
          </View>
        </View>
        {/* bottom */}
        <View style={styles.bottomContainer}> 
          <Text style={styles.heading}>Personal Information</Text>
          <Text
            style={{
              ...styles.smallText,
              marginBottom: normalize(15),
              marginTop: normalize(3),
            }}>
            Fill out with your personal information
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomTextInput
              textinputStyle={{marginBottom: normalize(14), width: '48%'}}
              placeholder={'First name'}
            />
            <CustomTextInput
              textinputStyle={{marginBottom: normalize(14), width: '48%'}}
              placeholder={'Last name'}
            />
          </View>

          {/* <CustomTextInput
            textinputStyle={{marginBottom: normalize(14)}}
            placeholder={'Account Type'}
          /> */}
          <CustomTextInput
            textinputStyle={{marginBottom: normalize(14)}}
            placeholder={'Enter phone number'}
          />
          <CustomTextInput
            textinputStyle={{marginBottom: normalize(14)}}
            placeholder={'Enter email address'}
          />
          <Button
            onpress={() => {
              navigation.navigate('BottomTabNavigation');
            }}
            containerStyle={{marginBottom: normalize(10)}}
            title="Register Now"
          /> 
        </View>
      </View>
    </BridalImageBackgroundComponent>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  bottomContainer: {
    paddingVertical: normalize(20),
    paddingHorizontal: globalStyles.paddingHorizantal,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: normalize(35),
    borderTopRightRadius: normalize(35),
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(10),
    marginBottom: normalize(12),
  },
  socialMediaContainer: {
    height: normalize(35),
    width: normalize(35),
    borderRadius: normalize(8),
    backgroundColor: '#F4F4F4',

    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: normalize(17),
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
    lineHeight: normalize(17) * 1.4,
  },
  smallText: {
    fontSize: normalize(11),
    lineHeight: normalize(11) * 1.4,
    fontFamily: Fonts.PoppinsRegular,
    textAlign: 'center',
  },
});
