import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  SafeAreaView,
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
import BackButtonWithName from '../../../components/header/BackButtonWithName';

export default function Notification(props) {
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
        backgroundColor={COLORS.pageBackgroundWhite}
        barStyle={'dark-content'}
      />
     <BackButtonWithName title="Notifications" />

      <View
        style={{
          width: '100%',
          marginTop: normalize(5),
        }}>
        <FlatList
          data={Array.from(Array(10).keys())}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:normalize(100)}}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  width: '100%',
                  //   backgroundColor: COLORS.primary,
                  paddingTop: normalize(10),
                  paddingBottom: normalize(15),
                  justifyContent: 'space-between',
                  paddingHorizontal: globalStyles.paddingHorizantal,
                  borderBottomColor: COLORS.borderColor,
                  borderBottomWidth:Array.from(Array(10).keys()).length-1==index?0: normalize(1),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      height: normalize(30),
                      width: normalize(30),
                      borderRadius: normalize(30) / 2,
                      backgroundColor: COLORS.grayF5,
                      overflow: 'hidden',
                    }}>
                    <Image
                      source={Images.cosmetics}
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View style={{marginLeft: normalize(10)}}>
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: normalize(12),
                        fontFamily: Fonts.PoppinsMedium,
                        color: COLORS.textColor,
                      }}>
                      Notification Title
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{
                        fontSize: normalize(11),
                        lineHeight: normalize(11) * 1.4,
                        fontFamily: Fonts.PoppinsRegular,
                        color: COLORS.placeholderColor,
                      }}>
                      Notification Details. Lorem ipsum dolor sit amet
                      consectetur. Praesent ac egestas in augue.Lorem ipsum
                      dolor sit amet consectetur. Praesent ac egestas in augue.
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
