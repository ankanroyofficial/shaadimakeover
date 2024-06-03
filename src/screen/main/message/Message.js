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
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../../../utils/theme/Dimens';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {COLORS} from '../../../utils/theme/Colors';
import {Images} from '../../../utils/theme/Images';
import {Icons} from '../../../utils/theme/Icons';
import HeaderWithIcon from '../../../components/header/HeaderWithIcon';
import {Fonts} from '../../../utils/theme/Fonts';
import FilterTextInput from '../../../components/FilterTextInput';
import ActiveUser from '../../../components/message/ActiveUser';
import MakeupArtistComponent from '../../../components/MakeupArtistComponent';
import SubsciptionModal from '../subscription/SubsciptionPage';
import { useSelector } from 'react-redux';

export default function Message() {
  const AuthReducer = useSelector(state => state.AuthReducer);
  const [isSubscriptionModal, setIsSubscriptionModal] = useState(false);
  const chatList = [
    {
      name: 'Aishwarya Rai Bachchan',
      msg: '',
      image: Images.artist2,
      unread: 5,
    },
    {
      name: 'Deepika Padukone',
      msg: '',
      image: Images.artist1,
      unread: 2,
    },
    {
      name: 'Priyanka Chopra',
      msg: '',
      image: Images.user,
      unread: 0,
    },
    {
      name: 'Kangana Ranaut',
      msg: '',
      image: Images.user2,
      unread: 0,
    },
    {
      name: 'Madhuri Dixit',
      msg: '',
      image: Images.user3,
      unread: 2,
    },
    {
      name: 'Sridevi',
      msg: '',
      image: Images.user4,
      unread: 99,
    },
    {
      name: 'Karishma Kapoor',
      msg: '',
      image: Images.artist3,
      unread: 0,
    },
    {
      name: 'Vidya Balan',
      msg: '',
      image: Images.user,
      unread: 20,
    },
    {
      name: 'Yami Gautam',
      msg: '',
      image: Images.artist2,
      unread: 10,
    },
    {
      name: 'Bhumi Pednekar',
      msg: '',
      image: Images.user3,
      unread: 8,
    },
  ];

  const UserChatComponent = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          width: '100%',
          // paddingVertical: normalize(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* image */}
        <View
          style={{
            height: normalize(36),
            width: normalize(36),
            borderRadius: normalize(36) / 2,
            backgroundColor: COLORS.grayF5,
            overflow: 'hidden',
          }}>
          <Image
            source={item.image}
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          />
        </View>
        {/* details */}
        <View
          style={{
            flex: 1,
            paddingHorizontal: normalize(10),
            justifyContent: 'space-evenly',
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: normalize(11),
              lineHeight: normalize(11) * 1.4,
              fontFamily: Fonts.PoppinsMedium,
              color: COLORS.textColor,
              width: '90%',
            }}>
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: normalize(11),
              lineHeight: normalize(11) * 1.4,
              fontFamily: Fonts.PoppinsRegular,
              color: COLORS.textColor,
            }}>
            I will be late tomorrow
          </Text>
        </View>
        {/* time count */}
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: normalize(10),
              lineHeight: normalize(10) * 1.4,
              fontFamily: Fonts.PoppinsRegular,
              color: COLORS.textColor,
              marginBottom: normalize(1.5),
            }}>
            Feb 20, 2024
          </Text>
          <View
            style={{
              height: normalize(15),
              width: normalize(15),
              borderRadius: normalize(15) / 2,
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: item.unread > 0 ? 1 : 0,
            }}>
            <Text
              style={{
                fontSize: normalize(7),
                lineHeight: normalize(7) * 1.4,
                fontFamily: Fonts.PoppinsSemiBold,
                color: COLORS.white,
              }}>
              {item.unread > 99 ? 99 : item.unread}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={false}
      />
      <View style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
        <HeaderWithIcon
          isSubscribeButton={AuthReducer?.isMakeupArtist}
          onPressSubscriptionButton={() => {
            setIsSubscriptionModal(true);
          }}
        />
        <FilterTextInput />
        <ActiveUser />
        <View
          style={{
            width: '100%',
            paddingHorizontal: globalStyles.paddingHorizantal,
            marginBottom: normalize(8),
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: normalize(13),
              lineHeight: normalize(13) * 1.4,
              fontFamily: Fonts.PoppinsMedium,
              marginBottom: normalize(10),
              color: COLORS.textColor,
            }}>
            Connection list
          </Text>
          <View style={{flex: 1}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: normalize(100)}}
              data={chatList}
              renderItem={({item, index}) => {
                return <UserChatComponent item={item} index={index} />;
              }}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      height: normalize(1),
                      width: '100%',
                      backgroundColor: COLORS.grayF5,
                      marginVertical: normalize(10),
                    }}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
      <SubsciptionModal
        isVisible={isSubscriptionModal}
        onClose={() => setIsSubscriptionModal(false)}
      />
    </SafeAreaView>
  );
}
