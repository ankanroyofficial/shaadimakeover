import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {
  normalize,
  screenHeight,
  screenWidth,
} from '../../../utils/theme/Dimens';
import {Images} from '../../../utils/theme/Images';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {Icons} from '../../../utils/theme/Icons';
import {COLORS} from '../../../utils/theme/Colors';
import {Fonts} from '../../../utils/theme/Fonts';
import {useNavigation} from '@react-navigation/native';
import PostCard from '../../../components/PostCard';
import BookingModal from './BookingModal';

export default function MakeupArtistDetails(props) {
  const {artistData} = props.route.params;
  const navigation = useNavigation();
  const [whichTab, setWhichTab] = useState('services');
  const [whichService, setWhichService] = useState(0);
  const [isBookingModal, setIsBookingModal] = useState(false);
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

  const postArr = [
    {
      image: Images.gallary,
      id: 0,
    },
    {
      image: Images.makeup4,
      id: 1,
    },
    {
      image: Images.makeup1,
      id: 2,
    },
    {
      image: Images.gallary3,
      id: 3,
    },
    {
      image: Images.makeup2,
      id: 4,
    },
    {
      image: Images.makeup3,
      id: 5,
    },
    {
      image: Images.dummypost,
      id: 6,
    },
    {
      image: Images.makeup5,
      id: 7,
    },
    {
      image: Images.gallary2,
      id: 8,
    },
    {
      image: Images.dummypost,
      id: 9,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        translucent
        backgroundColor={'rgba(0,0,0,0)'}
        barStyle={'light-content'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: normalize(10)}}>
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
        {/* <View
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
        </View> */}
        <View style={{marginTop: normalize(15)}} />
        {/* SERVICES */}
        {whichTab == 'services' && (
          <View
            style={{
              width: '100%',
              paddingHorizontal: globalStyles.paddingHorizantal,
            }}>
            {[0, 1, 2, 3].map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '100%',
                    backgroundColor: COLORS.white,
                    borderRadius: normalize(12),
                    elevation: normalize(1),
                    paddingHorizontal: normalize(14),
                    paddingVertical: normalize(15),
                    justifyContent: 'space-between',
                    marginBottom: normalize(10),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 1}}>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: normalize(12),
                          lineHeight: normalize(12) * 1.4,
                          fontFamily: Fonts.PoppinsMedium,
                          color: COLORS.textColor,
                          width: '90%',
                        }}>
                        Service Name Goes Here
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: normalize(11),
                          lineHeight: normalize(11) * 1.4,
                          fontFamily: Fonts.PoppinsBold,
                          color: COLORS.textColor,
                          paddingVertical: normalize(2),
                        }}>
                        ₹ 100 INR - ₹ 1,500 INR
                      </Text>
                    </View>

                    <Pressable
                      onPress={() => {
                        setIsBookingModal(true);
                      }}
                      style={{
                        width: normalize(80),
                        height: normalize(32),
                        backgroundColor: COLORS.primary,
                        borderRadius: normalize(9),
                        alignItems: 'center',
                        justifyContent: 'center',
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
                </View>
              );
            })}
          </View>
        )}
        {whichTab == 'posts' && (
          <View
            style={{
              width: screenWidth,
              paddingHorizontal: screenWidth * 0.05,
            }}>
            <FlatList
              scrollEnabled={false}
              data={postArr}
              numColumns={3}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: screenWidth * 0.294,
                      height: screenWidth * 0.294,
                      backgroundColor: COLORS.grayF5,
                      alignItems: 'center',
                      marginRight: screenWidth * 0.009,
                      marginBottom: screenWidth * 0.009,
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'cover',
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        )}
        {whichTab == 'reviews' && (
          <View
            style={{
              width: '100%',
              paddingHorizontal: globalStyles.paddingHorizantal,
            }}>
            {[0, 1, 2, 3].map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '100%',
                    backgroundColor: COLORS.white,
                    borderRadius: normalize(12),
                    elevation: normalize(1),
                    padding: normalize(12),
                    justifyContent: 'space-between',
                    marginBottom: normalize(10),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: normalize(5),
                    }}>
                    <FlatList
                      data={[0, 1, 2, 3, 4]}
                      horizontal
                      renderItem={({item, index}) => {
                        return (
                          <View
                            key={index}
                            style={{
                              height: normalize(10),
                              width: normalize(10),
                            }}>
                            <Image
                              source={Icons.star}
                              style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'cover',
                              }}
                            />
                          </View>
                        );
                      }}
                      ItemSeparatorComponent={() => {
                        return <View style={{width: normalize(5)}} />;
                      }}
                    />
                  </View>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: normalize(12),
                      lineHeight: normalize(12) * 1.4,
                      fontFamily: Fonts.PoppinsMedium,
                      color: COLORS.textColor,
                    }}>
                    Service Name Goes Here
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: normalize(11),
                      lineHeight: normalize(11) * 1.4,
                      fontFamily: Fonts.PoppinsRegular,
                      color: COLORS.placeholderColor,
                      marginVertical: normalize(5),
                    }}>
                    Add face framing-detail to your look with a Service Name
                    Goes Here.
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        height: normalize(20),
                        width: normalize(20),
                        borderRadius: normalize(20) / 2,
                        backgroundColor: 'red',
                        overflow: 'hidden',
                      }}>
                      <Image
                        source={Images.artist3}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'cover',
                        }}
                      />
                    </View>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: normalize(11.5),
                        lineHeight: normalize(11.5) * 1.4,
                        fontFamily: Fonts.PoppinsMedium,
                        color: COLORS.textColor,
                        paddingLeft: normalize(5),
                      }}>
                      Ananaya Das
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
        {whichTab == 'gallery' && (
          <View
            style={{
              width: '100%',
              paddingHorizontal: globalStyles.paddingHorizantal,
            }}>
            {[0, 1, 2, 3].map((item, index) => {
              return (
                <Fragment key={index}>
                  <PostCard item={item} index={index} />
                </Fragment>
              );
            })}
          </View>
        )}
      </ScrollView>
      <BookingModal
        isVisible={isBookingModal}
        onClose={() => setIsBookingModal(false)}
      />
    </View>
  );
}
