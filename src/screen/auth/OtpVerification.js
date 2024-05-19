import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {normalize} from '../../utils/theme/Dimens';
import {Images} from '../../utils/theme/Images';
import BridalImageBackgroundComponent from '../../components/BridalImageBackgroundComponent';
import {globalStyles} from '../../utils/theme/GlobalStyle';
import {COLORS} from '../../utils/theme/Colors';
import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput';
import {Fonts} from '../../utils/theme/Fonts';
import {Icons} from '../../utils/theme/Icons';

export default function OtpVerification(props:Object) {
  const navigation = props.navigation;
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [loader, setLoader] = useState(false);
  const [sendLoader, setSendLoader] = useState(false);
  const otpCheck = async () => {
    console.log('otpCheck');
  };

  const resendOtpHandle = async () => {
    console.log('resendOtpHandle');
  };
  return (
    <BridalImageBackgroundComponent>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
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
            <Text style={styles.heading}>Enter Otp</Text>
            <Text
              style={{
                ...styles.smallText,
                marginBottom: normalize(15),
                marginTop: normalize(3),
              }}>
              Enter OTP to login
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: normalize(15),
              }}>
              <TextInput
                placeholderTextColor={'gray'}
                // placeholder="-"
                style={[styles.textinput, {fontSize: 19}]}
                ref={inputRef1}
                value={pin1}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={text => {
                  setPin1(text);
                  if (!pin1.length > 0) {
                    inputRef2.current.focus();
                  }
                }}
              />
              <TextInput
                placeholderTextColor={'gray'}
                // placeholder="-"
                style={[styles.textinput, {fontSize: 19}]}
                ref={inputRef2}
                value={pin2}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={text => {
                  setPin2(text);
                  if (!pin2.length > 0) {
                    inputRef3.current.focus();
                  } else {
                    inputRef1.current.focus();
                  }
                }}></TextInput>
              <TextInput
                placeholderTextColor={'gray'}
                // placeholder="-"
                style={[styles.textinput, {fontSize: 19}]}
                ref={inputRef3}
                value={pin3}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={text => {
                  setPin3(text);
                  if (!pin3.length > 0) {
                    inputRef4.current.focus();
                  } else {
                    inputRef2.current.focus();
                  }
                }}></TextInput>
              <TextInput
                placeholderTextColor={'gray'}
                // placeholder="-"
                style={[styles.textinput, {fontSize: 19}]}
                ref={inputRef4}
                value={pin4}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={text => {
                  setPin4(text);
                  if (!pin4.length > 0) {
                    //inputRef4.current.focus();
                    //alert('hii');
                  } else {
                    inputRef3.current.focus();
                  }
                }}></TextInput>
            </View>

            <Button
              containerStyle={{marginBottom: normalize(15)}}
              title="Submit"
              onpress={() => { 
                navigation.navigate('UserTypeSelection');
              }}
            />
            <Text style={styles.smallText}>
              Haven’t received any?{' '}
              <Text
                style={{
                  color: COLORS.primary,
                  fontFamily: Fonts.PoppinsMedium,
                }}>
                Resend OTP
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </BridalImageBackgroundComponent>
  );
}

const styles = StyleSheet.create({
  textinput: {
    height: normalize(45),
    width: normalize(45),
    textAlign: 'center',
    backgroundColor: COLORS.textinputBackground,
    borderRadius: normalize(8),
    color: COLORS.TextInputTextColor,
    fontFamily: Fonts.PoppinsMedium,
  },
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
    fontSize: normalize(16),
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
    lineHeight: normalize(16) * 1.4,
    color:COLORS?.TextInputTextColor
  },
  smallText: {
    fontSize: normalize(11),
    lineHeight: normalize(11) * 1.4,
    fontFamily: Fonts.PoppinsRegular,
    textAlign: 'center',
  },
});
