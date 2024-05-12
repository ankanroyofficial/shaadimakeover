import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {Fragment} from 'react';
import {normalize} from '../../../utils/theme/Dimens';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {COLORS} from '../../../utils/theme/Colors';
import {Images} from '../../../utils/theme/Images';
import {Icons} from '../../../utils/theme/Icons';
import HeaderWithIcon from '../../../components/header/HeaderWithIcon';
import {Fonts} from '../../../utils/theme/Fonts';
import {useNavigation} from '@react-navigation/native';

export default function User() {
  const navigation = useNavigation();
  const detailsArr = [
    {
      title: 'Phone Number',
      details: '+91 1236547890',
    },
    {
      title: 'Address',
      details:
        'Major Arterial Road, Biswa Bangla Sarani, Newtown, Kolkata, West Bengal 700156',
    },
    {
      title: 'Country',
      details: 'India',
    },
    {
      title: 'City',
      details: 'Kolkata',
    },
  ];

  const buttonDetails = [
    {
      title: 'Bank Account ',
      icon: Icons.bank,
      onPress: () => {},
    },
    {
      title: 'Contact Us',
      icon: Icons.call,
      onPress: () => {
        // navigation.navigate('ContactUs');
      },
    },
    {
      title: 'Delete Account',
      icon: Icons.delete,
      onPress: () => {},
    },
    {
      title: 'Logout',
      icon: Icons.logout,
      onPress: () => {},
    },
  ];

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={false}
      />
      <HeaderWithIcon />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: normalize(100)}}>
        <View
          style={{
            width: '100%',
            paddingHorizontal: globalStyles.paddingHorizantal,
            paddingTop: normalize(10),
          }}>
          {/* user Details */}
          <View
            style={{
              backgroundColor: COLORS.white,
              paddingHorizontal: normalize(10),
              paddingVertical: normalize(15),
              borderRadius: normalize(12),
              elevation: normalize(1.5),
              alignItems: 'center',
            }}>
            {/* profile picture */}
            <View>
              <View
                style={{
                  height: normalize(110),
                  width: normalize(110),
                  backgroundColor: COLORS.grayF5,
                  borderRadius: normalize(15),
                  overflow: 'hidden',
                }}>
                <Image
                  source={Images.artist3}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate('CustomerEditProfile');
                }}
                style={{
                  height: normalize(30),
                  width: normalize(30),
                  borderRadius: normalize(30) / 2,
                  bottom: -normalize(30) / 2,
                  backgroundColor: COLORS.primary,
                  position: 'absolute',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Icons.edit}
                  style={{
                    height: '52%',
                    width: '52%',
                    resizeMode: 'contain',
                    marginTop: normalize(1),
                    marginLeft: normalize(1),
                  }}
                />
              </Pressable>
            </View>

            <Text
              style={{
                fontSize: normalize(13),
                lineHeight: normalize(13) * 1.4,
                fontFamily: Fonts.PoppinsMedium,
                color: COLORS.textColor,
                marginTop: normalize(20),
              }}>
              Nilanjana Roy
            </Text>
            <Text
              style={{
                fontSize: normalize(11),
                lineHeight: normalize(11) * 1.4,
                fontFamily: Fonts.PoppinsRegular,
                color: COLORS.grayText,
                marginTop: normalize(1),
              }}>
              nilanjana@yopmail.com
            </Text>

            <View
              style={{
                marginTop: normalize(10),
                paddingHorizontal: normalize(15),
                paddingVertical: normalize(20),
                backgroundColor: COLORS.grayBackground,
                width: '100%',
                borderRadius: normalize(11),
              }}>
              <FlatList
                scrollEnabled={false}
                data={detailsArr}
                ItemSeparatorComponent={() => {
                  return <View style={{height: normalize(15)}} />;
                }}
                renderItem={({item, index}) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                      }}>
                      <View style={{flex: 1}}>
                        <Text
                          style={{
                            fontSize: normalize(11),
                            lineHeight: normalize(11) * 1.4,
                            fontFamily: Fonts.PoppinsRegular,
                            color: COLORS.textColor,
                          }}>
                          {item.title}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'flex-end',
                        }}>
                        <Text
                          style={{
                            fontSize: normalize(11),
                            lineHeight: normalize(11) * 1.4,
                            fontFamily: Fonts.PoppinsMedium,
                            color: COLORS.textColor,
                            textAlign: 'right',
                          }}>
                          {item.details}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          {buttonDetails.map((item, index) => {
            return (
              <Pressable
                onPress={item.onPress}
                key={index}
                style={{
                  width: '100%',
                  height: normalize(53),
                  backgroundColor: COLORS.white,
                  borderRadius: normalize(11),
                  marginTop: normalize(10),
                  elevation: normalize(1.5),
                  flexDirection: 'row',
                  paddingHorizontal: normalize(15),
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: normalize(33),
                    width: normalize(33),
                    backgroundColor: 'rgba(207, 68, 89, 0.15)',
                    borderRadius: normalize(8),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.icon}
                    style={{height: '52%', width: '52%', resizeMode: 'contain'}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: normalize(11),
                    lineHeight: normalize(11) * 1.4,
                    fontFamily: Fonts.PoppinsMedium,
                    color: COLORS.textColor,
                    marginLeft: normalize(9),
                  }}>
                  {item.title}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
