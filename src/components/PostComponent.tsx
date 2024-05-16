import {View, Text, Image} from 'react-native';
import React, {Fragment} from 'react';
import {Images} from '../utils/theme/Images';
import {globalStyles} from '../utils/theme/GlobalStyle';
import {normalize} from '../utils/theme/Dimens';
import {Fonts} from '../utils/theme/Fonts';
import {Icons} from '../utils/theme/Icons';
import {COLORS} from '../utils/theme/Colors';
import PostCard from './PostCard';

export default function PostComponent() { 
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: globalStyles.paddingHorizantal,
      }}>
      <Text
        style={{
          fontSize: normalize(13),
          lineHeight: normalize(13) * 1.4,
          fontFamily: Fonts.PoppinsMedium,
          marginBottom: normalize(10),
          color: COLORS.textColor,
        }}>
        Recent Posts
      </Text>

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
