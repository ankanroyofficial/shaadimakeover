import {View, Text, Image} from 'react-native';
import React from 'react';
import {globalStyles} from '../utils/theme/GlobalStyle';
import {normalize, screenWidth} from '../utils/theme/Dimens';
import {Images} from '../utils/theme/Images';
import {COLORS} from '../utils/theme/Colors';
import Carousel from 'react-native-snap-carousel';
export default function Banner() {
  const bannerArr = [
    {image: Images.dummyBanner},
    {image: Images.img1},
    {image: Images.makeup1},
    {image: Images.introBackground}, 
  ];

  return (
    <View
      style={{
        width: '100%',
        // paddingHorizontal: globalStyles.paddingHorizantal,
        marginBottom: normalize(8),
      }}>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={bannerArr}
        renderItem={({item, index}: {item: Number; index: Number}) => {
          return (
            <View
              style={{
                height: normalize(150),
                // width: '100%',
                backgroundColor: COLORS.grayF5,
                borderRadius: normalize(14),
                overflow: 'hidden',
              }}>
              <Image
                source={item?.image}
                style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              />
            </View>
          );
        }}
        autoplay={true}
        autoplayDelay={1500}
        // autoplayInterval={1500}
        loop={true}
        // enableSnap={true}
        // autoplayInterval={500}
        style={{margin: 0}}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.9}
      />
    </View>
  );
}
