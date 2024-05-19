import {View, Text, Image} from 'react-native';
import React, {Fragment} from 'react';
import {Images} from '../utils/theme/Images';
import {globalStyles} from '../utils/theme/GlobalStyle';
import {normalize} from '../utils/theme/Dimens';
import {Fonts} from '../utils/theme/Fonts';
import {Icons} from '../utils/theme/Icons';
import {COLORS} from '../utils/theme/Colors';
import PostCard from './PostCard';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export default function PostComponent() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: globalStyles.paddingHorizantal,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: normalize(10),
        }}>
        <Text
          style={{
            fontSize: normalize(13),
            lineHeight: normalize(13) * 1.4,
            fontFamily: Fonts.PoppinsMedium,
            color: COLORS.textColor,
          }}>
          Recent Posts
        </Text>
        <Text
          onPress={() => navigation.navigate('AllPost')}
          style={{
            fontSize: normalize(11),
            lineHeight: normalize(11) * 1.4,
            fontFamily: Fonts.PoppinsSemiBold,
            color: COLORS.primary,
          }}>
          Show All
        </Text>
      </View>

      {[0, 1, 2, 3].map((item, index) => {
        return (
          <Fragment key={index}>
            <PostCard item={item} index={index} />
          </Fragment>
        );
      })}
    </View>
  );
}
