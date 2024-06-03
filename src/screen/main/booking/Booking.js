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
import React, { useState } from 'react';
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
import Button from '../../../components/Button';
import SubsciptionModal from '../subscription/SubsciptionPage';
import { useSelector } from 'react-redux';

export default function Booking() {
  const AuthReducer = useSelector(state => state.AuthReducer);
  const [isSubscriptionModal, setIsSubscriptionModal] = useState(false);
  const BookingCard = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-start',
          backgroundColor: COLORS.white,
          padding: normalize(10),
          borderRadius: normalize(12),
          elevation:1,
          width:"99%",alignSelf:"center"
        }}>
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
            Service Name Goes Here
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: normalize(11),
              lineHeight: normalize(11) * 1.4,
              fontFamily: Fonts.PoppinsBold,
              color: COLORS.textColor,
              marginTop: normalize(2),
            }}>
            ₹1,200 INR
          </Text>
          <Button
            containerStyle={{
              marginTop: normalize(7),
              width: '33%',
              height: normalize(28),
            }}
            title="Explore"
            textStyle={{
              fontSize: normalize(11),
              lineHeight: normalize(11) * 1.4,
            }}
          />
        </View>
        {/* time count */}
        <View
          style={{
            // backgroundColor:"red",
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: normalize(10),
              lineHeight: normalize(10) * 1.4,
              fontFamily: Fonts.PoppinsRegular,
              color: COLORS.grayText,
              marginBottom: normalize(1.5),
            }}>
            Bridal Artist
          </Text>
          <Text
            style={{
              fontSize: normalize(11),
              lineHeight: normalize(11) * 1.4,
              fontFamily: Fonts.PoppinsRegular,
              color: COLORS.textColor,
              marginBottom: normalize(1.5),
            }}>
            Feb 20, 2024
          </Text>
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
        <FilterTextInput isFilterIcon />
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
            My Bookings
          </Text>
          <View style={{flex: 1}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: normalize(100)}}
              data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
              renderItem={({item, index}) => {
                return <BookingCard item={item} index={index} />;
              }}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{
                      height: normalize(10),
                      width: '100%',
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
