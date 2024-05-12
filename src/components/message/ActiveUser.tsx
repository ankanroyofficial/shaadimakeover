import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/theme/Dimens';
import {Fonts} from '../../utils/theme/Fonts';
import {globalStyles} from '../../utils/theme/GlobalStyle';
import {Images} from '../../utils/theme/Images';
import {COLORS} from '../../utils/theme/Colors';
import MakeupArtistComponent from '../MakeupArtistComponent';

export default function ActiveUser() {
  const userList = [
    {
      icon: Images.artist3,
      name: 'Dipanti',
    },
    {
      icon: Images.artist2,
      name: 'Mahuya',
    },
    {
      icon: Images.user,
      name: 'Nilanjana',
    },
    {
      icon: Images.user2,
      name: 'Rimita',
    },
    {
      icon: Images.user3,
      name: 'Sayari',
    },

    {
      icon: Images.user4,
      name: 'Hazal',
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
        {userList.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                alignItems: 'center',
                marginRight: normalize(10),
                width: normalize(50),
              }}>
              <View>
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
                <View
                  style={{
                    height: normalize(11),
                    width: normalize(11),
                    borderRadius: normalize(11),
                    backgroundColor: COLORS.green,
                    position: 'absolute',
                    bottom: normalize(5),
                    right: normalize(5),
                    borderWidth: normalize(1.5),
                    borderColor: COLORS.white,
                  }}></View>
              </View>

              <Text
                numberOfLines={1}
                style={{
                  fontSize: normalize(10),
                  lineHeight: normalize(10) * 1.4,
                  fontFamily: Fonts.PoppinsSemiBold,
                  textAlign: 'center',
                }}>
                {item?.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
