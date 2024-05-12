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

export default function MakeupArtistDetails(props) {
  const {artistData} = props.route.params;
  const navigation = useNavigation();
  const topTabArr = [
    {
      title: 'Services',
      value: 'services',
    },
    {
      title: 'Posts',
      value: 'posts',
    },
    {
      title: 'Reviews',
      value: 'reviews',
    },
    {
      title: 'Gallery',
      value: 'gallery',
    },
  ];
  const [whichTab, setWhichTab] = useState('services');
  const [whichService, setWhichService] = useState(0);
  const TopTabBox = ({item, index}) => {
    return (
      <Pressable
        onPress={() => setWhichTab(item.value)}
        style={{
          width: '25%',
          alignItems: 'center',
          borderBottomWidth: whichTab == item.value ? 0 : normalize(1),
          borderBottomColor: '#EEEEEE',
        }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: normalize(11.5),
            lineHeight: normalize(11.5) * 1.4,
            fontFamily: Fonts.PoppinsMedium,
            color:
              whichTab == item.value ? COLORS.primary : COLORS.placeholderColor,
            marginBottom: normalize(5),
          }}>
          {item.title}
        </Text>
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

  const servicesList = [
    {
      title: 'Hair Cuts',
      value: 0,
    },
    {
      title: 'Shampoo Services',
      value: 1,
    },
    {
      title: 'Hair Spa',
      value: 2,
    },
    {
      title: 'Nail Paint',
      value: 3,
    },
    {
      title: 'Bridal makeup',
      value: 4,
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        translucent
        backgroundColor={'rgba(0,0,0,0)'}
        barStyle={'light-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        <ImageBackground
          source={Images.img1}
          resizeMode="cover"
          style={{
            height: screenHeight * 0.35,
            width: '100%',
          }}>
          <View
            style={{
              marginTop:
                StatusBar.currentHeight + globalStyles.paddingHorizantal,
              marginHorizontal: globalStyles.paddingHorizantal,
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
          </View>
        </ImageBackground>
        {/* user details */}
        <View
          style={{
            width: '100%',
            paddingHorizontal: globalStyles.paddingHorizantal,
          }}>
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              height: normalize(104),
              backgroundColor: COLORS.white,
              marginTop: -normalize(52),
              elevation: normalize(2),
              borderRadius: normalize(15),
              padding: normalize(15),
              justifyContent: 'space-between',
            }}>
            {/* image name rating fav */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* image */}
              <Pressable
                onPress={() =>
                  navigation.navigate('MakeupArtistProfile', {artistData})
                }
                style={{
                  height: normalize(35),
                  width: normalize(35),
                  borderRadius: normalize(10),
                  backgroundColor: COLORS.grayF5,
                  overflow: 'hidden',
                }}>
                <Image
                  source={artistData?.image}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </Pressable>
              {/* name */}
              <Pressable
                onPress={() =>
                  navigation.navigate('MakeupArtistProfile', {artistData})
                }
                style={{
                  flex: 1,
                  marginLeft: normalize(10),
                  justifyContent: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: normalize(11),
                    lineHeight: normalize(11) * 1.4,
                    fontFamily: Fonts.PoppinsMedium,
                    color: COLORS.textColor,
                  }}>
                  {artistData?.name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={Icons.star}
                    style={{
                      height: normalize(12),
                      width: normalize(12),
                      resizeMode: 'contain',
                      marginRight: normalize(3),
                    }}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: normalize(11),
                      fontFamily: Fonts.RobotoMedium,
                      color: COLORS.textColor,
                      marginRight: normalize(3),
                    }}>
                    {artistData?.rating}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: normalize(9),
                      lineHeight: normalize(9) * 1.4,
                      fontFamily: Fonts.RobotoMedium,
                      color: COLORS.placeholderColor,
                    }}>
                    (19)
                  </Text>
                </View>
              </Pressable>
              {/* icon */}
              <View style={{height: '100%'}}>
                <View
                  style={{
                    height: normalize(25),
                    width: normalize(25),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Icons.fav}
                    style={{
                      height: '70%',
                      width: '70%',
                      resizeMode: 'contain',
                      tintColor: '#A0A0A0',
                    }}
                  />
                </View>
              </View>
            </View>
            {/* insta msg */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/*insta icon */}
              <View
                style={{
                  height: normalize(25),
                  width: normalize(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Icons.insta}
                  style={{
                    height: '70%',
                    width: '70%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              {/*user name */}
              <View
                style={{
                  flex: 1,
                  marginLeft: normalize(10),
                  justifyContent: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: normalize(11),
                    lineHeight: normalize(11) * 1.4,
                    fontFamily: Fonts.PoppinsRegular,
                    color: COLORS.placeholderColor,
                  }}>
                  @HairBy_Amber
                </Text>
              </View>
              {/* chat */}
              <View
                style={{
                  height: normalize(33),
                  width: normalize(33),
                  borderRadius: normalize(10),
                  backgroundColor: COLORS.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Icons.chat}
                  style={{height: '50%', width: '50%', resizeMode: 'contain'}}
                />
              </View>
            </View>
          </View>
        </View>
        {/* top tab bar */}
        <View
          style={{
            width: '100%',
            paddingHorizontal: globalStyles.paddingHorizantal,
            marginTop: normalize(15),
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            {topTabArr.map((item, index) => {
              return (
                <Fragment key={index}>
                  <TopTabBox item={item} index={index} />
                </Fragment>
              );
            })}
          </View>
        </View>
        {/* services list */}
        <View
          style={{
            width: '100%',
            paddingHorizontal: globalStyles.paddingHorizantal,
            marginTop: normalize(15),
            flexDirection: 'row',
          }}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {servicesList.map((item, index) => {
              return (
                <Pressable
                  onPress={() => {
                    setWhichService(item.value);
                  }}
                  key={index}
                  style={{
                    paddingVertical: normalize(8),
                    paddingHorizontal: normalize(13),
                    backgroundColor:
                      whichService == item.value
                        ? COLORS.primary
                        : COLORS.transparent,
                    borderRadius: normalize(9),
                    marginRight: normalize(6),
                    borderColor: COLORS.borderColor,
                    borderWidth: whichService == item.value ? 0 : normalize(1),
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: normalize(11),
                      lineHeight: normalize(11) * 1.4,
                      fontFamily: Fonts.PoppinsMedium,
                      color:
                        whichService == item.value
                          ? COLORS.white
                          : COLORS.grayText,
                    }}>
                    {item.title}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        {/* SERVICES */}

        <View
          style={{
            width: '100%',
            paddingHorizontal: globalStyles.paddingHorizantal,
            marginTop: normalize(15),
          }}>
          {[0, 1, 2, 3].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: '100%',
                  height: normalize(135),
                  backgroundColor: COLORS.white,
                  borderRadius: normalize(12),
                  elevation: normalize(1),
                  padding: normalize(12),
                  justifyContent: 'space-between',
                  marginBottom: normalize(10),
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: normalize(12),
                    lineHeight: normalize(12) * 1.4,
                    fontFamily: Fonts.PoppinsSemiBold,
                    color: COLORS.textColor,
                  }}>
                  Service Name Goes Here
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: normalize(11),
                    lineHeight: normalize(11) * 1.4,
                    fontFamily: Fonts.PoppinsBold,
                    color: COLORS.primary,
                  }}>
                  ₹1,500 INR
                </Text>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: normalize(11),
                    lineHeight: normalize(11) * 1.4,
                    fontFamily: Fonts.PoppinsRegular,
                    color: COLORS.placeholderColor,
                  }}>
                  Add face framing-detail to your look with a Service Name Goes
                  Here.
                </Text>
                <Pressable
                  style={{
                    width: normalize(80),
                    paddingVertical: normalize(7),
                    backgroundColor: COLORS.primary,
                    borderRadius: normalize(9),
                    alignItems: 'center',
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: normalize(11),
                      lineHeight: normalize(11) * 1.4,
                      fontFamily: Fonts.PoppinsMedium,
                      color: COLORS.white,
                    }}>
                    Book Now
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
