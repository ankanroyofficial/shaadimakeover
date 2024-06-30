import {View, Text, Image, TextInput, StyleSheet, Linking} from 'react-native';
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
import Modal from 'react-native-modal';
export default function LocationAccessModal(props: Object) {
  return (
    <Modal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      // isVisible={true}
      style={{width: '100%', alignSelf: 'center', margin: 0}}
      animationInTiming={800}
      animationOutTiming={1000}
      swipeDirection={'down'}
      // onBackdropPress={onClose}
      // onSwipeComplete={onClose}
      // onBackButtonPress={onClose}
    >
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
            <View
              style={{
                height: normalize(33),
                width: normalize(33),
                alignSelf: 'center',
                marginBottom: normalize(10),
              }}>
              <Image
                source={Icons.locaionOutline}
                style={[styles.icon, {tintColor: COLORS.primary}]}
              />
            </View>

            <Text style={styles.heading}>Allow your location</Text>
            <Text
              style={{
                ...styles.smallText,
                marginBottom: normalize(15),
                marginTop: normalize(10),
              }}>
              We will need your location to give you{'\n'}better experience
            </Text>
            <Button
              onpress={() => {
                // Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
                // Linking.openSettings()
                // Linking.sendIntent('android.settings.SETTINGS');
              }}
              containerStyle={{marginBottom: normalize(10)}}
              title="Access Location"
            />
          </View>
        </View>
      </BridalImageBackgroundComponent>
    </Modal>
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
    fontSize: normalize(16),
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
    lineHeight: normalize(16) * 1.4,
    color: COLORS?.TextInputTextColor,
  },
  smallText: {
    color: COLORS.textColor,
    fontSize: normalize(11),
    lineHeight: normalize(11) * 1.4,
    fontFamily: Fonts.PoppinsRegular,
    textAlign: 'center',
  },
});
