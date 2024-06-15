import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {normalize, screenHeight} from '../../../utils/theme/Dimens';
import {Images} from '../../../utils/theme/Images';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {Icons} from '../../../utils/theme/Icons';
import {COLORS} from '../../../utils/theme/Colors';
import {Fonts} from '../../../utils/theme/Fonts';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';

export default function MakeupArtistProfile() {
  const navigation = useNavigation();

  const [whichTab, setWhichTab] = useState('photos');
  const useDetails = [
    {
      type: 'followers',
      icon: Icons.followers,
      details: '2k followers',
      isShow: true,
      onPress: () => {},
    },
    {
      type: 'experience',
      icon: Icons.experience,
      details: '2yrs experience',
      isShow: true,
      onPress: () => {},
    },

    {
      type: 'email',
      icon: Icons.mail,
      details: 'anro@yopmail.com',
      isShow: true,
      onPress: () => {},
    },
    {
      type: 'phone',
      icon: Icons.phone,
      details: '+91 1908190819',
      isShow: true,
      onPress: () => {},
    },
    {
      type: 'timing',
      icon: Icons.clock,
      details: '10:30 am to 8:00 pm',
      isShow: true,
      onPress: () => {},
    },
    {
      type: 'address',
      icon: Icons.loc,
      details:
        'Major Arterial Road, Biswa Bangla Sarani, AA II, Newtown, Kolkata, West Bengal 700156',
      isShow: true,
      onPress: () => {},
    },
    {
      type: 'insta',
      icon: Icons.insta2,
      details: 'https://www.instagram.com/__._anro_.__?igsh=YzljYTk1ODg3Zg==',
      isShow: true,
      onPress: () => {},
    },
  ];
  const postImagesArr = [
    {
      image: Images.makeup5,
    },
    {
      image: Images.makeup1,
    },
    {
      image: Images.makeup2,
    },
    {
      image: Images.makeup3,
    },
    {
      image: Images.makeup4,
    },

    {
      image: Images.makeup6,
    },
    {
      image: Images.makeup7,
    },
  ];
  const topTabArr = [
    {
      title: 'Photo',
      icon: Icons.image,
      value: 'photos',
    },

    {
      title: 'Video',
      icon: Icons.video,
      value: 'Videos',
    },
  ];
  const TopTabBox = ({item, index}) => {
    return (
      <Pressable
        onPress={() => setWhichTab(item.value)}
        style={{
          width: '50%',
          alignItems: 'center',
          borderBottomWidth: whichTab == item.value ? 0 : normalize(1),
          borderBottomColor: '#EEEEEE',
        }}>
        <Image
          source={item.icon}
          style={{
            height: normalize(20),
            width: normalize(20),
            resizeMode: 'contain',
            tintColor:
              whichTab == item.value ? COLORS.primary : COLORS.grayText,
            marginBottom: normalize(8),
          }}
        />

        <View
          style={{
            height: normalize(2.5),
            width: '100%',
            backgroundColor:
              whichTab == item.value ? COLORS.primary : COLORS.transparent,
            borderTopLeftRadius: normalize(10),
            borderTopRightRadius: normalize(10),
            position: 'absolute',
            bottom: 0,
          }}
        />
      </Pressable>
    );
  };
  const MediaCard = ({item, index}) => {
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
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
        />
      </Pressable>
    );
  };
  // const inputs = [
  //   '@username',
  //   'https://www.instagram.com/username',
  //   'https://www.instagram.com/username/',
  //   'instagram.com/username',
  //   'handsome_jack',
  //   'http://example.com/handsome'
  // ]

  // const rx = /^(?:@|(?:https?:\/\/)?(?:www\.)?instagr(?:\.am|am\.com)\/)?(\w+)\/?$/
  // const rxx = /r'^https?:\/\/(?:www\.)?instagram\.com\/([a-zA-Z0-9_]+)\/?$'/

  // inputs.forEach(input => {
  //   let match = rx.exec(input)
  //   if (match) {
  //     console.log(input, match[1])
  //   }
  // })

  // console.log(rxx.exec('https://www.instagram.com/__._anro_.__?igsh=YzljYTk1ODg3Zg%3D%3D'))

  return (
    <View style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        translucent
        backgroundColor={'rgba(0,0,0,0)'}
        barStyle={'light-content'}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: normalize(5)}}
        showsVerticalScrollIndicator={false}>
        {/* Image */}
        <ImageBackground
          source={Images.dummypost}
          resizeMode="cover"
          style={{
            height: screenHeight * 0.25,
            width: '100%',
          }}>
          <View
            style={{
              marginTop: StatusBar.currentHeight + normalize(10),
              marginHorizontal: globalStyles.paddingHorizantal,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: 'green',
            }}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                height: normalize(15),
                width: normalize(24),
              }}>
              <Image
                source={Icons.back}
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
              />
            </Pressable>
            <Pressable
             onPress={()=>{
              navigation.navigate("Notification")
            }}
              style={{
                height: normalize(25),
                width: normalize(25),
                backgroundColor: COLORS.primary,
                borderRadius: normalize(5),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Icons.notification}
                style={{
                  height: '70%',
                  width: '70%',
                  resizeMode: 'contain',
                  tintColor: COLORS.white,
                  marginLeft: normalize(2),
                }}
              />
            </Pressable>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: globalStyles.paddingHorizantal,
          }}>
          {/* profile photo */}
          <View
            style={{
              height: normalize(85),
              width: normalize(85),
              borderRadius: normalize(85) / 2,
              backgroundColor: COLORS.grayF5,
              marginTop: -normalize(85) / 2,
              overflow: 'hidden',
              borderWidth: normalize(2),
              borderColor: COLORS.white,
            }}>
            <Image
              source={Images.dummyUser}
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
            />
          </View>
          {/* *edit button */}

          <View
            style={{
              // width: normalize(35),
              height: normalize(27),
              // paddingVertical:normalize(0),
              paddingHorizontal: normalize(15),
              backgroundColor: COLORS.primary,
              borderRadius: normalize(20),
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: normalize(4),
            }}>
            <Image
              source={Icons.plus}
              style={{
                height: normalize(11),
                width: normalize(11),
                resizeMode: 'contain',
                tintColor: COLORS.white,
              }}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: normalize(11.5),
                lineHeight: normalize(11.5) * 1.4,
                fontFamily: Fonts.PoppinsSemiBold,
                color: COLORS.white,
                marginLeft: normalize(4),
              }}>
              Follow
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: normalize(5),
            paddingHorizontal: globalStyles.paddingHorizantal,
            // backgroundColor: 'red',
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: normalize(14),
              lineHeight: normalize(14) * 1.4,
              fontFamily: Fonts.PoppinsMedium,
              color: COLORS.textColor,
              marginBottom: normalize(3),
            }}>
            Dipanti Roy
          </Text>
          {/* experience */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: normalize(3),
            }}>
            <Image
              source={Icons.star}
              style={{
                height: normalize(15),
                width: normalize(15),
                resizeMode: 'contain',
                marginRight: normalize(3),
              }}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: normalize(13),
                fontFamily: Fonts.RobotoMedium,
                color: COLORS.textColor,
                marginRight: normalize(3),
              }}>
              5
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontSize: normalize(11),
                lineHeight: normalize(11) * 1.4,
                fontFamily: Fonts.RobotoMedium,
                color: COLORS.placeholderColor,
              }}>
              (19)
            </Text>
          </View>
          {useDetails.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginBottom: normalize(7),
                  // backgroundColor:"red"
                }}>
                <View
                  style={{
                    height: normalize(12),
                    width: normalize(12),
                    marginRight: normalize(5),
                    marginTop: normalize(1.5),
                  }}>
                  <Image
                    source={item.icon}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'cover',
                      // tintColor: COLORS.primary,
                      tintColor: 'rgba(0, 0, 0,0.3)',
                    }}
                  />
                </View>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: normalize(11),
                    lineHeight: normalize(11) * 1.4,
                    // height: normalize(14),
                    fontFamily: Fonts.PoppinsMedium,
                    color: COLORS.textColor,
                    maxWidth: '85%',
                  }}>
                  {item?.details}
                </Text>
              </View>
            );
          })}
          {/* buttons */}
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              height: normalize(26),
              marginBottom: normalize(12),
              marginTop: normalize(8),
            }}>
            <Button
              title="Services"
              containerStyle={{
                width: '43%',
                height: '100%',
                backgroundColor: COLORS.primary,
              }}
              textStyle={{
                lineHeight: normalize(11.5) * 1.4,
                fontSize: normalize(11.5),
              }}
            />
            <Button
              title="Price"
              containerStyle={{
                width: '43%',
                height: '100%',
                backgroundColor: COLORS.primary,
              }}
              textStyle={{
                lineHeight: normalize(11.5) * 1.4,
                fontSize: normalize(11.5),
              }}
            />

            <View
              style={{
                width: normalize(26),
                height: normalize(26),
                backgroundColor: COLORS.primary,
                borderRadius: normalize(8),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Icons.message}
                style={{
                  height: '62%',
                  width: '62%',
                  resizeMode: 'contain',
                  tintColor: COLORS.white,
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginBottom: normalize(8),
            }}>
            {topTabArr.map((item, index) => {
              return (
                <Fragment key={index}>
                  <TopTabBox item={item} index={index} />
                </Fragment>
              );
            })}
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {postImagesArr.map((item, index) => {
              return (
                <Fragment key={index}>
                  <MediaCard item={item} index={index} />
                </Fragment>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          paddingHorizontal: globalStyles.paddingHorizantal,
          paddingTop: normalize(2),
          paddingBottom: normalize(5),
        }}>
        <Button title="Book Now" />
      </View>
    </View>
  );
}
