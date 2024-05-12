import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {globalStyles} from '../utils/theme/GlobalStyle';
import {normalize} from '../utils/theme/Dimens';
import {Icons} from '../utils/theme/Icons';
import {COLORS} from '../utils/theme/Colors';
import {Fonts} from '../utils/theme/Fonts';

interface filterTextInputObj {
  isFilterIcon: boolean;
}

export default function FilterTextInput({isFilterIcon}: filterTextInputObj) {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: globalStyles.paddingHorizantal,
        marginVertical: normalize(10),
      }}>
      <View
        style={{
          height: normalize(40),
          width: '100%',
          backgroundColor: '#EEEEEE',
          borderRadius: normalize(8),
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: normalize(10),
        }}>
        {/* search icon */}
        <View
          style={{
            height: normalize(26),
            width: normalize(26),
            borderRadius: normalize(7),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Icons.search}
            style={{height: '63%', width: '63%', resizeMode: 'contain'}}
          />
        </View>
        {/* textinput */}
        <View
          style={{
            flex: 1,
            marginHorizontal: normalize(0),
          }}>
          <TextInput
            placeholder="Search"
            style={{
              fontSize: normalize(13),
              color: COLORS.textColor,
              fontFamily: Fonts.PoppinsRegular,
              includeFontPadding: false,
            }}
            placeholderTextColor={COLORS.placeholderColor}
          />
        </View>
        {/* filter icon */}
        {isFilterIcon != undefined && (
          <View
            style={{
              height: normalize(26),
              width: normalize(26),
              backgroundColor: COLORS.primary,
              borderRadius: normalize(7),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Icons.filter}
              style={{height: '57%', width: '57%', resizeMode: 'contain'}}
            />
          </View>
        )}
      </View>
    </View>
  );
}
