import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {normalize, screenHeight} from '../../../utils/theme/Dimens';
import {Images} from '../../../utils/theme/Images';
import {globalStyles} from '../../../utils/theme/GlobalStyle';
import {Icons} from '../../../utils/theme/Icons';
import {COLORS} from '../../../utils/theme/Colors';
import {Fonts} from '../../../utils/theme/Fonts';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import HeaderWithIcon from '../../../components/header/HeaderWithIcon';
import BackButtonWithName from '../../../components/header/BackButtonWithName';
import PostCard from '../../../components/PostCard';
import FilterTextInput from '../../../components/FilterTextInput';

export default function AllPost() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: COLORS.pageBackgroundWhite}}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={false}
      />
      <BackButtonWithName title="Makeup Artist" />

      <FilterTextInput isFilterIcon />

      <ScrollView
      contentContainerStyle={{paddingTop:normalize(10)}}
      showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            paddingHorizontal: globalStyles.paddingHorizantal,
            marginBottom: normalize(8),
          }}>
          {[0, 1, 2, 3].map((item, index) => {
            return (
              <Fragment key={index}>
                <PostCard item={item} index={index} />
              </Fragment>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
