import {View, ImageBackground, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {Images} from '../utils/theme/Images';
import {screenHeight, screenWidth} from '../utils/theme/Dimens';
import {COLORS} from '../utils/theme/Colors';

export default function BridalImageBackgroundComponent({children}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={COLORS.transparent}
        barStyle={'light-content'}
        translucent
      />
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
          position: 'absolute',
        }}>
        <ImageBackground
          source={Images.introBackground}
          style={{
            height: screenHeight * 0.7,
            width: screenWidth,
          }}
          resizeMode="cover"
        />
        <View style={{flex: 1}} />
      </View>
      {children}
    </SafeAreaView>
  );
}
