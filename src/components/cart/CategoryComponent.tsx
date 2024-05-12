import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/theme/Dimens';
import {Fonts} from '../../utils/theme/Fonts';
import {globalStyles} from '../../utils/theme/GlobalStyle';
import {Images} from '../../utils/theme/Images';
import {COLORS} from '../../utils/theme/Colors';

export default function CategoryComponent() {
  const categoryTitle = [
    {
      icon: Images.grooming2,
      title: 'Makeup',
    },
    {
      icon: Images.grooming3,
      title: 'Hair Style',
    },
    {
      icon: Images.grooming4,
      title: 'Grooming',
    },
    {
      icon: Images.grooming5,
      title: 'Consulting',
    },
    {
      icon: Images.grooming,
      title: 'Planning',
    },
    {
      icon: Images.grooming2,
      title: 'Makeup',
    },
    {
      icon: Images.grooming3,
      title: 'Hair Style',
    },
  ];

  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: globalStyles.paddingHorizantal,
        flexDirection: 'row',
        marginBottom: normalize(8),
      }}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categoryTitle.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                alignItems: 'center',
                marginRight: normalize(10),
                width: normalize(50),
              }}>
              <View
                style={{
                  height: normalize(50),
                  width: normalize(50),
                  borderRadius: normalize(50) / 2,
                  backgroundColor: COLORS.grayF5,
                  marginBottom: normalize(4),
                  overflow: 'hidden',
                }}>
                <Image
                  source={item.icon}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: normalize(10),
                  lineHeight: normalize(10) * 1.4,
                  fontFamily: Fonts.PoppinsSemiBold,
                  textAlign: 'center',
                }}>
                {item?.title}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
