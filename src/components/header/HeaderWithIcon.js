import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {globalStyles} from '../../utils/theme/GlobalStyle';
import {normalize} from '../../utils/theme/Dimens';
import {Images} from '../../utils/theme/Images';
import {COLORS} from '../../utils/theme/Colors';
import {Icons} from '../../utils/theme/Icons';
import {Fonts} from '../../utils/theme/Fonts';

export default function HeaderWithIcon({
  isUserProfileButton,
  isSubscribeButton,
  onPressSubscriptionButton,
}) {
  return (
    <View
      style={{
        paddingHorizontal: globalStyles.paddingHorizantal,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop: normalize(5),
      }}>
      <View
        style={{
          height: normalize(40),
          width: '40%',
        }}>
        <Image
          source={Images.primaryLogoWithName}
          style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
        {isUserProfileButton != undefined && (
          <View
            style={{
              height: normalize(30),
              width: normalize(80),
              backgroundColor: COLORS.primary,
              borderRadius: normalize(8),
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: normalize(10),
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: normalize(10),
                fontFamily: Fonts.PoppinsSemiBold,
                lineHeight: normalize(10) * 1.4,
              }}>
              User Profile
            </Text>
          </View>
        )}
        {isSubscribeButton != undefined&&isSubscribeButton && (
          <Pressable
            disabled={onPressSubscriptionButton == undefined}
            onPress={onPressSubscriptionButton}
            style={{
              height: normalize(26),
              width: normalize(77),
              backgroundColor: COLORS.white,
              borderColor: COLORS.primary,
              borderWidth: normalize(1),
              borderRadius: normalize(20),
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: normalize(10),
            }}>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: normalize(10),
                fontFamily: Fonts.PoppinsSemiBold,
                lineHeight: normalize(10) * 1.4,
              }}>
              Subscribe
            </Text>
          </Pressable>
        )}
        <View
          style={{
            height: normalize(30),
            width: normalize(30),
            backgroundColor: COLORS.iconBackgroundGray,
            borderRadius: normalize(8),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Icons.notification}
            style={{height: '55%', width: '55%', resizeMode: 'contain'}}
          />
        </View>
      </View>
    </View>
  );
}
