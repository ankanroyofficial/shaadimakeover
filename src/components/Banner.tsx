import {View, Text, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../utils/theme/GlobalStyle';
import {normalize} from '../utils/theme/Dimens';
import {Images} from '../utils/theme/Images';
import { COLORS } from '../utils/theme/Colors';

export default function Banner() {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: globalStyles.paddingHorizantal,
        marginBottom: normalize(8),
      }}>
      <View
        style={{
          height: normalize(150),
          width: '100%',
          backgroundColor:COLORS.grayF5,
          borderRadius: normalize(14),
          overflow: 'hidden',
        }}>
        <Image
          source={Images.dummyBanner}
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
        />
      </View>
    </View>
  );
}
