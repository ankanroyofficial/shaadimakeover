import {View, Text, Image} from 'react-native';
import React, {Fragment} from 'react';
import {Images} from '../utils/theme/Images';
import {globalStyles} from '../utils/theme/GlobalStyle';
import {normalize} from '../utils/theme/Dimens';
import {Fonts} from '../utils/theme/Fonts';
import {Icons} from '../utils/theme/Icons';
import {COLORS} from '../utils/theme/Colors';

export default function PostComponent() {
  interface iconwithnumber {
    boxStyle: object;
    isSelected: boolean;
    icon: number;
    count: number;
    onPress: () => void;
  }
  const IconWithNumber = ({
    boxStyle,
    isSelected,
    icon,
    count,
    onPress,
  }: iconwithnumber) => {
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: normalize(6),
          },
          boxStyle != undefined && boxStyle,
        ]}>
        <View
          style={{
            height: normalize(18),
            width: normalize(18),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={icon}
            style={{
              height: '80%',
              width: '80%',
              resizeMode: 'contain',
              tintColor: COLORS.textColor,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: normalize(11),
            lineHeight: normalize(11) * 1.4,
            fontFamily: Fonts.PoppinsMedium,
            color: COLORS.textColor,
          }}>
          {count != undefined ? count : 0}
        </Text>
      </View>
    );
  };

  interface postCardObj {
    item: Object;
    index: number;
  }

  const PostCard = ({item, index}: postCardObj) => {
    return (
      <View key={index} style={{marginBottom: normalize(10)}}>
        {/* profile name image category threedots */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: normalize(28),
              width: normalize(28),
              borderRadius: normalize(28) / 2,
              backgroundColor: COLORS.grayF5,
              overflow: 'hidden',
            }}>
            <Image
              source={Images.dummyUser}
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
            />
          </View>
          <View style={{flex: 1, marginLeft: normalize(10)}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: normalize(11),
                lineHeight: normalize(11) * 1.4,
                fontFamily: Fonts.PoppinsMedium,
                color: COLORS.textColor,
              }}>
              Rossy Melon
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontSize: normalize(8),
                lineHeight: normalize(8) * 1.4,
                fontFamily: Fonts.PoppinsRegular,
                color: COLORS.placeholderColor,
              }}>
              Bridal Artist
            </Text>
          </View>
          <View
            style={{
              height: normalize(28),
              width: normalize(18),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Icons.threedots}
              style={{
                height: '70%',
                width: '70%',
                resizeMode: 'contain',
                tintColor: '#A0A0A0',
              }}
            />
          </View>
        </View>
        {/* post images */}
        <View
          style={{
            marginVertical: normalize(5),
            height: normalize(125),
            width: '100%',
            borderRadius: normalize(10),
            overflow: 'hidden',
          }}>
          <Image
            source={Images.dummypost}
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          />
        </View>
        {/* Icon sections */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <IconWithNumber
              boxStyle={{}}
              isSelected={true}
              icon={Icons.fav}
              count={20}
              onPress={() => {}}
            />
            <IconWithNumber
              boxStyle={{}}
              isSelected={true}
              icon={Icons.msg}
              count={20}
              onPress={() => {}}
            />
            <IconWithNumber
              boxStyle={{}}
              isSelected={true}
              icon={Icons.share}
              count={20}
              onPress={() => {}}
            />
          </View>
          {/* save icon */}
          <View
            style={{
              height: normalize(15),
              width: normalize(15),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Icons.unsave}
              style={{
                height: '90%',
                width: '90%',
                resizeMode: 'contain',
                tintColor: COLORS.textColor,
              }}
            />
          </View>
        </View>
        {/* details */}
        <Text
          style={{
            fontSize: normalize(11),
            lineHeight: normalize(11) * 1.4,
            fontFamily: Fonts.PoppinsMedium,
            marginTop: normalize(5),
            marginBottom: normalize(3),
          }}>
          #lorem ipsum dolor sit amet consectetur. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry.
        </Text>

        <Text
          style={{
            fontSize: normalize(10),
            lineHeight: normalize(10) * 1.4,
            fontFamily: Fonts.PoppinsMedium,
          }}>
          2 Days ago
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: globalStyles.paddingHorizantal,
      }}>
      <Text
        style={{
          fontSize: normalize(13),
          lineHeight: normalize(13) * 1.4,
          fontFamily: Fonts.PoppinsMedium,
          marginBottom: normalize(10),
          color: COLORS.textColor,
        }}>
        Recent Posts
      </Text>

      {[0, 1, 2, 3].map((item, index) => {
        return (
          <Fragment key={index}>
            <PostCard item={item} index={index} />
          </Fragment>
        );
      })}
    </View>
  );
}
