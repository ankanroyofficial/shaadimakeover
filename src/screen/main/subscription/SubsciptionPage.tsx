import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../../../utils/theme/Dimens';
import {Images} from '../../../utils/theme/Images';
import BridalImageBackgroundComponent from '../../../components/BridalImageBackgroundComponent';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {COLORS} from '../../../utils/theme/Colors';
import CustomTextInput from '../../../components/CustomTextInput';
import {Fonts} from '../../../utils/theme/Fonts';
import {Icons} from '../../../utils/theme/Icons';
import Button from '../../../components/Button';
import Modal from 'react-native-modal';
interface subscriptionModalObj {
  isVisible: boolean;
  onClose: () => {};
}
export default function SubsciptionModal({
  isVisible,
  onClose,
}: subscriptionModalObj) {
  const [whichType, setWhichType] = useState('basic');
  const subscriptionArr = [
    {
      type: 'Basic',
      value: 'basic',
      details: 'First 30 days free - Then $999/Year',
      isBestValue: true,
    },
    {
      type: 'Plus',
      value: 'plus',
      details: 'First 7 days free - Then $99/Month',
      isBestValue: false,
    },
    {
      type: 'Premium',
      value: 'premium',
      details: 'First 7 days free - Then $99/Month',
      isBestValue: false,
    },
  ];
  return (
    <Modal
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      // isVisible={true}
      isVisible={isVisible}
      style={{width: '100%', alignSelf: 'center', margin: 0}}
      animationInTiming={800}
      animationOutTiming={1000}
      onBackdropPress={onClose}
      swipeDirection={'down'}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.pageBackgroundWhite,
            paddingHorizontal: normalize(20),
          }}>
          <ScrollView
            contentContainerStyle={{paddingBottom: normalize(20)}}
            showsVerticalScrollIndicator={false}>
            {/* cross button */}
            <View
              style={{
                marginTop: normalize(10),
                alignItems: 'flex-end',
              }}>
              <Pressable
                onPress={onClose}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                }}>
                <Image
                  source={Icons.cross}
                  style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                />
              </Pressable>
            </View>
            <Text style={styles.heading}>Subscribe Now</Text>
            <Text
              style={[
                styles.smallText,
                {
                  fontSize: normalize(11),
                  fontFamily: Fonts.PoppinsMedium,
                  lineHeight: normalize(11) * 1.4,
                  textAlign: 'center',
                },
              ]}>
              Unlock all the power of this mobile tool and enjoy digital
              experience like never before!
            </Text>
            {/* image */}
            <View
              style={{
                height: normalize(160),
                width: '100%',
                marginVertical: normalize(25),
              }}>
              <Image
                source={Images.subscription}
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
              />
            </View>

            {subscriptionArr.map((item, index) => {
              return (
                <Pressable
                  onPress={() => setWhichType(item?.value)}
                  key={index}
                  style={{
                    width: '100%',
                    backgroundColor:
                      item?.value == whichType
                        ? COLORS.white
                        : COLORS.textinputBackground,
                    borderColor:
                      item?.value != whichType ? 'transparent' : COLORS.primary,
                    borderWidth: normalize(1),
                    borderRadius: normalize(12),
                    padding: normalize(14),
                    marginBottom: normalize(10),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: normalize(3),
                    }}>
                    <Text
                      style={[
                        styles.smallText,
                        {
                          color:
                            item?.value == whichType
                              ? COLORS.primary
                              : COLORS.textColor,
                          fontSize: normalize(12),
                          fontFamily: Fonts.PoppinsSemiBold,
                          lineHeight: normalize(12) * 1.4,
                          marginTop: normalize(2),
                        },
                      ]}>
                      {item?.type}
                    </Text>
                    <View
                      style={{
                        height: normalize(24),
                        width: normalize(68),
                        backgroundColor: COLORS.green,
                        borderRadius: normalize(20),
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: item?.isBestValue ? 1 : 0,
                      }}>
                      <Text
                        style={{
                          fontSize: normalize(10),
                          fontFamily: Fonts.PoppinsMedium,
                          lineHeight: normalize(10) * 1.4,
                          color: COLORS.white,
                        }}>
                        Best Value
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.smallText,
                      {
                        fontSize: normalize(10),
                        fontFamily: Fonts.PoppinsMedium,
                        lineHeight: normalize(10) * 1.4,
                        marginTop: normalize(1),
                      },
                    ]}>
                    First 30 days free - Then $999/Year
                  </Text>
                </Pressable>
              );
            })}
            <Button
              title="Subscribe"
              containerStyle={{marginVertical: normalize(10)}}
            />
            <Text
              style={[
                styles.smallText,
                {
                  marginTop: normalize(5),
                  fontSize: normalize(11),
                  fontFamily: Fonts.PoppinsMedium,
                  lineHeight: normalize(11) * 1.4,
                  textAlign: 'center',
                },
              ]}>
              By placing this order, you agree to the Terms of Service and
              Privacy Policy. Subscription automatically renews unless
              auto-renew is turned off at least 24-hours before the end of the
              current period.
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: normalize(16),
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
    lineHeight: normalize(16) * 1.4,
    color: COLORS?.TextInputTextColor,
    marginVertical: normalize(10),
  },
  smallText: {
    color: COLORS.textColor,
    opacity: 0.7,
  },
});
