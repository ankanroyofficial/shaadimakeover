import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {normalize, screenHeight} from '../../../utils/theme/Dimens';
import {Images} from '../../../utils/theme/Images';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {Icons} from '../../../utils/theme/Icons';
import {COLORS} from '../../../utils/theme/Colors';
import {Fonts} from '../../../utils/theme/Fonts';
import {useNavigation} from '@react-navigation/native';
import HeaderWithIcon from '../../../components/header/HeaderWithIcon';
import BackButtonWithName from '../../../components/header/BackButtonWithName';

export default function AllMakeupArtist() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const topArtist = [
    {
      name: 'Namrata Soni',
      image: Images.artist1,
      isFav: false,
      rating: 3,
    },
    {
      name: 'Puneet Solanki',
      image: Images.artist2,
      isFav: true,
      rating: 5,
    },
    {
      name: 'Arti Nayar',
      image: Images.artist3,
      isFav: true,
      rating: 4,
    },

    {
      name: 'Puneet Solanki',
      image: Images.artist2,
      isFav: true,
      rating: 5,
    },
    {
      name: 'Arti Nayar',
      image: Images.artist3,
      isFav: true,
      rating: 4,
    },

    {
      name: 'Namrata Soni',
      image: Images.artist1,
      isFav: false,
      rating: 3,
    },
    {
      name: 'Arti Nayar',
      image: Images.artist3,
      isFav: true,
      rating: 4,
    },
    {
      name: 'Puneet Solanki',
      image: Images.artist2,
      isFav: false,
      rating: 5,
    },
    {
      name: 'Namrata Soni',
      image: Images.artist1,
      isFav: false,
      rating: 3,
    },
    {
      name: 'Puneet Solanki',
      image: Images.artist2,
      isFav: true,
      rating: 5,
    },
    {
      name: 'Arti Nayar',
      image: Images.artist3,
      isFav: true,
      rating: 4,
    },

    {
      name: 'Puneet Solanki',
      image: Images.artist2,
      isFav: true,
      rating: 5,
    },
    {
      name: 'Arti Nayar',
      image: Images.artist3,
      isFav: true,
      rating: 4,
    },

    {
      name: 'Namrata Soni',
      image: Images.artist1,
      isFav: false,
      rating: 3,
    },
    {
      name: 'Arti Nayar',
      image: Images.artist3,
      isFav: true,
      rating: 4,
    },
    {
      name: 'Puneet Solanki',
      image: Images.artist2,
      isFav: false,
      rating: 5,
    },
  ];
  interface artistCardObj {
    item: object;
    index: number;
  }
  const ArtistCard = ({item, index}: artistCardObj) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('MakeupArtistDetails', {
            artistData: item,
          });
        }}
        key={index}
        style={{
          width: '32%',
          height: normalize(115),
          backgroundColor: COLORS.grayF5,
          borderRadius: normalize(10),
          overflow: 'hidden',
          marginBottom: '1.8%',
          marginHorizontal: index % 3 == 1 ? '2%' : 0,
        }}>
        <ImageBackground
          source={item.image}
          resizeMode="stretch"
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              height: normalize(15),
              width: normalize(15),
              position: 'absolute',
              right: normalize(5),
              top: normalize(5),
            }}>
            <Image
              source={item.isFav ? Icons.favSolid : Icons.fav}
              style={[
                {
                  height: '100%',
                  width: '100%',
                  resizeMode: 'contain',
                  tintColor: !item.isFav
                    ? COLORS.textinputBackground
                    : COLORS.primary,
                },
              ]}
            />
          </View>
          <View style={{flex: 1}}></View>
          <View
            style={{
              paddingHorizontal: normalize(7),
              paddingBottom: normalize(7),
            }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: normalize(10),
                lineHeight: normalize(10) * 1.4,
                fontFamily: Fonts.PoppinsMedium,
                color: COLORS.white,
              }}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={Icons.star}
                style={{
                  height: normalize(11),
                  width: normalize(11),
                  resizeMode: 'cover',
                  marginRight: normalize(2),
                }}
              />
              <Text
                style={{
                  fontSize: normalize(10),
                  lineHeight: normalize(10) * 1.4,
                  fontFamily: Fonts.RobotoMedium,
                  color: COLORS.white,
                }}>
                {item.rating}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={false}
      />
      <BackButtonWithName title="Makeup Artist" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            paddingHorizontal: globalStyles.paddingHorizantal,
            marginBottom: normalize(8),
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {topArtist.map((item, index) => {
              return (
                <Fragment key={index}>
                  <ArtistCard item={item} index={index} />
                </Fragment>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
