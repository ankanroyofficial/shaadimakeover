import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {globalStyles} from '../../utils/theme/GlobalStyle';
import {normalize} from '../../utils/theme/Dimens';
import {COLORS} from '../../utils/theme/Colors';
import {Icons} from '../../utils/theme/Icons';
import {Fonts} from '../../utils/theme/Fonts';
import {useNavigation} from '@react-navigation/native';

// interface backButtonWithNameObj{
//   title:
// }

export default function BackButtonWithName({title}: {title: string}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: globalStyles.paddingHorizantal,
        paddingVertical: normalize(8),
        flexDirection: 'row',
        alignItems: 'center', 
      }}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          height: normalize(23),
          width: normalize(23),
          backgroundColor: COLORS.iconBackgroundGray,
          borderRadius: normalize(8),
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: normalize(8),
        }}>
        <Image
          source={Icons.left}
          style={{height: '40%', width: '40%', resizeMode: 'contain'}}
        />
      </Pressable>
      <Text
        style={{
          fontSize: normalize(12.5),
          lineHeight: normalize(12.5) * 1.4,
          fontFamily: Fonts.PoppinsMedium,
          color: COLORS.textColor,
          marginBottom: normalize(1),
        }}>
        {title}
      </Text>
    </View>
  );
}
