import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../utils/theme/Colors';
import {
  normalize,
  screenWidth,
  windowHeight,
} from '../../../utils/theme/Dimens';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {Icons} from '../../../utils/theme/Icons';
import {Fonts} from '../../../utils/theme/Fonts';
import Video from 'react-native-video';
import {Images} from '../../../utils/theme/Images';
export default function Reel() {
  const [pageHeight, setPageHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const videoArr = [
    {
      video: Images.video1,
      name: 'Ananaya Kumari',
      des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
      video: Images.video2,
      name: 'Madhuri D.',
      des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    },
    {
      video: Images.video3,
      name: 'Priyanka Das',
      des: `when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages`,
    },
    {
      video: Images.video4,
      name: 'moumita maity',
      des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ];
  const AbsoluteScreen = ({item}) => {
    const [isShowLongText, setIsShowLongText] = useState(false);
    return (
      <View
        style={{
          height: pageHeight,
          width: pageWidth,
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0)',
          paddingHorizontal: globalStyles.paddingHorizantal,
          paddingBottom: normalize(10),
        }}>
        <View style={{flex: 1}}></View>
        {/* name description */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: normalize(11.5),
                fontFamily: Fonts.PoppinsSemiBold,
                lineHeight: normalize(10) * 1.4,
              }}>
              {item?.name}
            </Text>
            <Text
              numberOfLines={isShowLongText ? 15 : 2}
              onPress={() => {
                setIsShowLongText(!isShowLongText);
              }}
              style={{
                color: COLORS.white,
                fontSize: normalize(10),
                fontFamily: Fonts.PoppinsMedium,
                lineHeight: normalize(10) * 1.4,
                marginTop: normalize(4),
              }}>
              {item?.des}
            </Text>
          </View>
          {/* <View
            style={{
              width: normalize(40),
              height: '100%',
              backgroundColor: 'steelblue',
            }}></View> */}
        </View>
      </View>
    );
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScrollEnd = event => {
    const activeIndex = Math.round(event / (windowHeight - normalize(57)));
    setCurrentIndex(activeIndex);
  };

  return (
    <View
      onLayout={event => {
        const {x, y, width, height} = event.nativeEvent.layout;
        setPageHeight(height);
        setPageWidth(width);
      }}
      style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={e =>
          handleScrollEnd(e.nativeEvent.contentOffset.y)
        }>
        {videoArr.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                height: pageHeight,
                width: pageWidth,
                backgroundColor: 'black',
              }}>
              <Video
                paused={currentIndex != index}
                repeat
                resizeMode='cover'
                source={item?.video}
                style={{height: '100%', width: '100%'}}
              />
              <AbsoluteScreen item={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: normalize(30),
    width: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {height: '75%', width: '75%', resizeMode: 'contain'},
});

// {/* back camera */}
// <View
//   style={{
//     flexDirection: 'row',
//     height: normalize(30),
//     width: '100%',
//     justifyContent: 'space-between',
//     position: 'absolute',
//     paddingHorizontal: globalStyles.paddingHorizantal,
//     top: normalize(15),
//   }}>
//   {/* back */}
//   <View style={styles.icon}>
//     <Image source={Icons.back} style={styles.iconImage} />
//   </View>
//   {/* camera */}
//   <View style={styles.icon}>
//     <Image source={Icons.camera} style={styles.iconImage} />
//   </View>
// </View>
